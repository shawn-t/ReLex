from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import ExperienceSerializer, EducationSerializer
from .utils import convert_to_case_insensitive_query
from django.db.models import Count, Min
from .db_helper import *
import pandas as pd


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/lefttree',
        '/api/righttree'
    ]
    return Response(routes)

# Create your views here.


@api_view(['GET', 'POST'])
def get_industries(request):
    if not request.data.get('centralNode'):
        return Response({"left": {
            "title": 'create your map!',
            "type": "central-node"
        },
            "right": {
            "title": 'create your map!',
            "type": "central-node"
        }})
    central_node_type = request.data.get('centralNodeType')
    central_node_query = request.data.get('centralNode')

    past_experiences = request.data.get('experienceFilters')
    educations = request.data.get('educationFilters')

    case_insensitive_central_node_query = convert_to_case_insensitive_query(
        central_node_query)

    # 1. First, we get the central nodes
    # and retrieve all the profiles that hold this experience or education
    if central_node_type == "experience":
        central_nodes_unfiltered = Experience.objects.all().filter(
            **case_insensitive_central_node_query)
    if central_node_type == "education":
        central_nodes_unfiltered = Education.objects.all().filter(
            **case_insensitive_central_node_query)

    unfiltered_profile_ids = central_nodes_unfiltered.values_list("profile_id")
    profiles = Profile.objects.all().filter(id__in=unfiltered_profile_ids)

    # 2. Then, if specified by user, we filter these profiles further
    # based on whether they hold the experiences or educations
    # in the extra filters past_experiences or educations
    for experience_filter in past_experiences:
        case_insensitive_experience_filter_query = convert_to_case_insensitive_query(
            experience_filter)
        past_experience_nodes = Experience.objects.all().filter(
            **case_insensitive_experience_filter_query)
        profile_ids_filter = past_experience_nodes.values_list("profile_id")
        profiles = profiles.filter(id__in=profile_ids_filter)
    for education_filter in educations:
        case_insensitive_education_filter_query = convert_to_case_insensitive_query(
            education_filter)
        past_education_nodes = Education.objects.all().filter(
            **case_insensitive_education_filter_query)
        profile_ids_filter = past_education_nodes.values_list("profile_id")
        profiles = profiles.filter(id__in=profile_ids_filter)

    # 3. Then we filter the central nodes retrieved in step 1 using the
    # filtered profile_ids retrieved in step 2
    # and we set up the central node name and attributes.
    profile_ids = profiles.values_list("id", flat=True)
    central_nodes = central_nodes_unfiltered.filter(
        profile__in=profile_ids)

    # print(list(profile_ids))
    # this removes instances of duplicates on the same profile
    # unique_profile_filter = (
    #     central_nodes.values('profile_id')
    #     .order_by()
    #     .annotate(min_id=Min('id'))
    # ).values_list('min_id', flat=True)
    # central_nodes = central_nodes.filter(id__in = unique_profile_filter)[:200]

    central_node_title = ""
    central_node_subtitle = ""
    if central_node_type == "experience":
        if 'title' in central_node_query:
            central_node_title = central_node_query['title']
        if 'company_name' in central_node_query:
            central_node_subtitle = central_node_query['company_name']

    if central_node_type == "education":
        if 'field' in central_node_query:
            central_node_title = central_node_query['field']
        if 'university' in central_node_query:
            central_node_subtitle = central_node_query['university']

    # print(list(unique_profile_filter))

    left_tree = get_industries_count(central_node_type=central_node_type,
                                     profile_id_tuple=tuple(profile_ids),
                                     direction='left',
                                     central_node_query=convert_dict_to_sql(central_node_query, 'cn'))
    right_tree = get_industries_count(central_node_type=central_node_type,
                                      profile_id_tuple=tuple(profile_ids),
                                      direction='right',
                                      central_node_query=convert_dict_to_sql(central_node_query, 'cn'))

    data = {}
    data["left"] = {
        "title": central_node_title,
        "subtitle": central_node_subtitle,
        "amount": len(profile_ids),
        "parent": "null",
        "children": left_tree,
        "type": "central-node central-node-" + central_node_type
    }

    data["right"] = {
        "title": central_node_title,
        "subtitle": central_node_subtitle,
        "amount": len(profile_ids),
        "parent": "null",
        "children": right_tree,
        "type": "central-node central-node-" + central_node_type
    }
    return Response(data)


@api_view(['GET', 'POST'])
def get_companies_in_industry(request):
    total_profiles = request.data.get('totalProfiles')
    experience_id_tuple = '(' + ','.join([str(x)
                                          for x in request.data.get('experienceIDs')]) + ')'
    companies = get_companies_count(experience_id_tuple=experience_id_tuple,
                                    total_profiles=total_profiles)

    return Response(companies)


@api_view(['GET', 'POST'])
def get_career_paths(request):
    print(request.data)
    central_node_type = request.data.get('centralNodeType')
    if central_node_type == 'experience':
        central_node_query = {
            'title': request.data.get('centralNodeTitle'),
            'company_name': request.data.get('centralNodeSubtitle')
        }
    elif central_node_type == 'education':
        central_node_query = {
            'field': request.data.get('centralNodeTitle'),
            'university': request.data.get('centralNodeSubtitle'),
        }

    direction = request.data.get('direction')
    profile_id_tuple = '(' + ','.join([str(x)
                                       for x in request.data.get('profileIDs')]) + ')'
    paths_df = get_experiences_and_educations(direction=direction, 
                                                central_node_type=central_node_type, 
                                                central_node_query=convert_dict_to_sql(
                                                    central_node_query, 'cn'), 
                                                profile_id_tuple=profile_id_tuple).sort_values('profile_id')
    if direction == 'left':
        paths_df = paths_df.sort_values(by='level', ascending=False)
    if direction == 'right':
        paths_df = paths_df.sort_values(by='level')
    
    data = []
    for index, profile_id in enumerate(paths_df.profile_id.unique()):
        profile_path_df = paths_df[paths_df['profile_id']==profile_id]
        data.append(profile_path_df.iloc[0].to_dict())
        parent = data[index]
        for row in range(1,len(profile_path_df)):
            parent['children'] = []
            parent['children'].append(profile_path_df.iloc[row].to_dict())
            parent = parent['children'][0]
    
    return Response(data)
#     case_insensitive_central_node_query = convert_to_case_insensitive_query(
#         central_node_query)


#     if central_node_type == "education":
#         central_node_name = central_node_query['field']
#         central_node_attributes = {key: val for key,
#                                    val in central_node_query.items() if key != 'field'}

#     data = {}
#     for direction in ("left", "right"):
#         # TODO: create a function to generate tree using "left" and "right" as parameters
#         # We set up the tree on the left
#         if direction == "left":
#             data["left"] = {
#                 "name": central_node_name,
#                 "parent": "null",
#                 "children": [],
#                 "attributes": central_node_attributes,
#             }
#             # 1. Loop through each central_node
#             for index, node in enumerate(central_nodes):
#                 parent_node = data["left"]
#                 parent_name = central_node_name
#                 profile_id = node.profile.id
#                 current_level = node.level
#                 is_first_child = True

#                 # 2.
#                 # a. In our database, some of the experiences or educations have level -1,
#                 # meaning, the dates were not specified and we cannot position them in the experience sequence
#                 # these nodes will be ignored
#                 # b. If the node level is 1, its position is on the very left,
#                 # we also do not need to build a left branch for this node
#                 # c. Otherwise, we will build the left branch for this node

#                 if current_level == -1 or current_level == 1:
#                     continue
#                 else:
#                     while current_level > 1:
#                         child = Experience.objects.all().filter(
#                             profile__id=profile_id, level=current_level-1)

#                         if len(child) == 0:  # then previous level is an education instead
#                             child = Education.objects.all().filter(
#                                 profile__id=profile_id, level=current_level-1)[0]
#                             serializer = EducationSerializer(child)
#                             child_title = serializer.data.pop("degree")
#                         else:
#                             child = child[0]
#                             serializer = ExperienceSerializer(child)
#                             child_title = serializer.data.pop("title")

#                         if len(child_title) > 33:
#                             name = child_title[:33] + "..."
#                         else:
#                             name = child_title

#                         child = {"name": name,
#                                  "parent_name": parent_name, "children": []}
#                         child["attributes"] = serializer.data
#                         parent_node["children"].append(child)
#                         if is_first_child:
#                             index = len(parent_node["children"]) - 1
#                             parent_node = parent_node["children"][index]
#                         else:
#                             parent_node = parent_node["children"][0]
#                         parent_name = child_title
#                         current_level -= 1
#                         is_first_child = False

#         # We set up tree on the right
#         if direction == "right":
#             data["right"] = {
#                 "name": central_node_name,
#                 "parent": "null",
#                 "children": [],
#                 "attributes": central_node_attributes
#             }
#             for index, node in enumerate(central_nodes):
#                 parent_node = data["right"]
#                 parent_name = central_node_name
#                 profile_id = node.profile.id
#                 current_level = node.level
#                 is_first_child = True

#                 try:
#                     max_experience_level = Experience.objects.all().filter(
#                         profile__id=profile_id).latest('level').level
#                 except:
#                     max_experience_level = 0
#                 try:
#                     max_education_level = Education.objects.all().filter(
#                         profile__id=profile_id).latest('level').level
#                 except:
#                     max_education_level = 0
#                 max_level = max(max_experience_level, max_education_level)

#                 if current_level == -1 or current_level == max_level:
#                     continue
#                 else:
#                     while current_level < max_level:
#                         child = Experience.objects.all().filter(
#                             profile__id=profile_id, level=current_level + 1)
#                         if len(child) == 0:  # then previous level is an education instead
#                             child = Education.objects.all().filter(
#                                 profile__id=profile_id, level=current_level + 1)[0]
#                             serializer = EducationSerializer(child)
#                             child_title = serializer.data.pop("degree")

#                         else:
#                             child = child[0]
#                             serializer = ExperienceSerializer(child)
#                             child_title = serializer.data.pop("title")

#                         if len(child_title) > 33:
#                             name = child_title[:33] + "..."
#                         else:
#                             name = child_title

#                         child = {"name": name,
#                                  "parent_name": parent_name, "children": []}
#                         child["attributes"] = serializer.data
#                         parent_node["children"].append(child)
#                         if is_first_child:
#                             index = len(parent_node["children"]) - 1
#                             parent_node = parent_node["children"][index]

#                         else:
#                             parent_node = parent_node["children"][0]
#                         parent_name = child_title
#                         current_level += 1
#                         is_first_child = False
#     return Response(data)
