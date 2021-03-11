/*! For license information please see src_components_ContentBlock_index_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_ContentBlock_index_js"],{"./src/common/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./src/common/Button/styles.js");\n\n\nconst Button = ({\n  color,\n  width,\n  children,\n  onClick\n}) => /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  color: color,\n  width: width,\n  onClick: onClick\n}, children);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://frontend/./src/common/Button/index.js?')},"./src/common/Button/styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button`\n  background: ${props => props.color || '#2e186a'};\n  color: ${props => props.color ? '#2E186A' : '#fff'};\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: ${props => props.color ? '1px solid #2E186A' : '0px'};\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n\n  @media only screen and (max-width: 1024px) {\n    width: ${props => props.width ? '160px' : '100%'};\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ${props => props.width ? '140px' : '100%'};\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ${props => props.width ? '130px' : '100%'};\n  }\n`;\n\n//# sourceURL=webpack://frontend/./src/common/Button/styles.js?")},"./src/common/SvgIcon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SvgIcon = ({\n  src,\n  width,\n  height\n}) => /*#__PURE__*/React.createElement("img", {\n  src: `/img/svg/${src}`,\n  alt: src,\n  with: width,\n  height: height\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgIcon);\n\n//# sourceURL=webpack://frontend/./src/common/SvgIcon/index.js?')},"./src/components/ContentBlock/LeftContentBlock/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/SvgIcon */ "./src/common/SvgIcon/index.js");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/ContentBlock/LeftContentBlock/styles.js");\n\n\n\n\n\n\nconst LeftContentBlock = ({\n  icon,\n  title,\n  content,\n  section,\n  t,\n  id\n}) => {\n  return /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.LeftContentBlock, null, /*#__PURE__*/React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: "flex",\n    justify: "space-between",\n    align: "middle",\n    id: id\n  }, /*#__PURE__*/React.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {\n    lg: 11,\n    md: 11,\n    sm: 12,\n    xs: 24\n  }, /*#__PURE__*/React.createElement((react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0___default()), {\n    left: true\n  }, /*#__PURE__*/React.createElement(_common_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.default, {\n    src: icon,\n    className: "about-block-image",\n    width: "100%",\n    height: "100%"\n  }))), /*#__PURE__*/React.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {\n    lg: 11,\n    md: 11,\n    sm: 11,\n    xs: 24\n  }, /*#__PURE__*/React.createElement((react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0___default()), {\n    right: true\n  }, /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, null, /*#__PURE__*/React.createElement("h6", null, t(title)), /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Content, null, t(content)), /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.ServiceWrapper, null, /*#__PURE__*/React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: "flex",\n    justify: "space-between"\n  }, section && typeof section === "object" && section.map((item, id) => {\n    return /*#__PURE__*/React.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {\n      key: id,\n      span: 11\n    }, /*#__PURE__*/React.createElement(_common_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.default, {\n      src: item.icon,\n      width: "60px",\n      height: "60px"\n    }), /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.MinTitle, null, t(item.title)), /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.MinPara, null, t(item.content)));\n  }))))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.withTranslation)()(LeftContentBlock));\n\n//# sourceURL=webpack://frontend/./src/components/ContentBlock/LeftContentBlock/index.js?')},"./src/components/ContentBlock/LeftContentBlock/styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "LeftContentBlock": () => (/* binding */ LeftContentBlock),\n/* harmony export */   "Content": () => (/* binding */ Content),\n/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),\n/* harmony export */   "ServiceWrapper": () => (/* binding */ ServiceWrapper),\n/* harmony export */   "MinTitle": () => (/* binding */ MinTitle),\n/* harmony export */   "MinPara": () => (/* binding */ MinPara),\n/* harmony export */   "ServiceItem": () => (/* binding */ ServiceItem)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");\n\n\nconst LeftContentBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section`\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 4rem 0 4rem;\n  }\n`;\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`\n  margin: 1.5rem 0 2rem 0;\n`;\nconst ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n`;\nconst ServiceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n`;\nconst MinTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h6`\n  font-size: 1rem;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n`;\nconst MinPara = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`\n  font-size: 0.75rem;\n`;\nconst ServiceItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(antd__WEBPACK_IMPORTED_MODULE_1__.default)`\n  margin: 2rem 0;\n  position: relative;\n`;\n\n//# sourceURL=webpack://frontend/./src/components/ContentBlock/LeftContentBlock/styles.js?')},"./src/components/ContentBlock/RightContentBlock/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/SvgIcon */ "./src/common/SvgIcon/index.js");\n/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Button */ "./src/common/Button/index.js");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/ContentBlock/RightContentBlock/styles.js");\n\n\n\n\n\n\n\nconst RightBlock = ({\n  title,\n  content,\n  button,\n  icon,\n  t,\n  id\n}) => {\n  const scrollTo = id => {\n    const element = document.getElementById(id);\n    element.scrollIntoView({\n      behavior: "smooth"\n    });\n  };\n\n  return /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.RightBlockContainer, null, /*#__PURE__*/React.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {\n    type: "flex",\n    justify: "space-between",\n    align: "middle",\n    id: id\n  }, /*#__PURE__*/React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {\n    lg: 11,\n    md: 11,\n    sm: 11,\n    xs: 24\n  }, /*#__PURE__*/React.createElement((react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0___default()), {\n    left: true\n  }, /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.ContentWrapper, null, /*#__PURE__*/React.createElement("h6", null, t(title)), /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Content, null, t(content)), /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.ButtonWrapper, null, button && typeof button === "object" && button.map((item, id) => {\n    return /*#__PURE__*/React.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n      key: id,\n      color: item.color,\n      width: "true",\n      onClick: () => scrollTo("about")\n    }, t(item.title));\n  }))))), /*#__PURE__*/React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {\n    lg: 11,\n    md: 11,\n    sm: 12,\n    xs: 24\n  }, /*#__PURE__*/React.createElement((react_reveal_Slide__WEBPACK_IMPORTED_MODULE_0___default()), {\n    right: true\n  }, /*#__PURE__*/React.createElement(_common_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.default, {\n    src: icon,\n    className: "about-block-image",\n    width: "100%",\n    height: "100%"\n  })))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.withTranslation)()(RightBlock));\n\n//# sourceURL=webpack://frontend/./src/components/ContentBlock/RightContentBlock/index.js?')},"./src/components/ContentBlock/RightContentBlock/styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "RightBlockContainer": () => (/* binding */ RightBlockContainer),\n/* harmony export */   "Content": () => (/* binding */ Content),\n/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),\n/* harmony export */   "ButtonWrapper": () => (/* binding */ ButtonWrapper)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n\nconst RightBlockContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section`\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 8rem 0 6rem;\n  }\n`;\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`\n  margin: 1.5rem 0 2rem 0;\n`;\nconst ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n`;\nconst ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n`;\n\n//# sourceURL=webpack://frontend/./src/components/ContentBlock/RightContentBlock/styles.js?')},"./src/components/ContentBlock/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _LeftContentBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeftContentBlock */ "./src/components/ContentBlock/LeftContentBlock/index.js");\n/* harmony import */ var _RightContentBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RightContentBlock */ "./src/components/ContentBlock/RightContentBlock/index.js");\n\n\n\nconst ContentBlock = props => {\n  if (props.type === "left") return /*#__PURE__*/React.createElement(_LeftContentBlock__WEBPACK_IMPORTED_MODULE_0__.default, props);\n  if (props.type === "right") return /*#__PURE__*/React.createElement(_RightContentBlock__WEBPACK_IMPORTED_MODULE_1__.default, props);\n  return null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentBlock);\n\n//# sourceURL=webpack://frontend/./src/components/ContentBlock/index.js?')},"./node_modules/react-reveal/Slide.js":(module,exports,__webpack_require__)=>{"use strict";eval('function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.left,t=e.right,p=e.up,l=e.down,u=e.top,a=e.bottom,i=e.big,n=e.mirror,s=e.opposite,d=(r?1:0)|(t?2:0)|(u||l?4:0)|(a||p?8:0)|(n?16:0)|(s?32:0)|(o?64:0)|(i?128:0);if(lookup.hasOwnProperty(d))return lookup[d];var _=r||t||p||l||u||a,f=void 0,b=void 0;if(_){if(!n!=!(o&&s)){var y=[t,r,a,u,l,p];r=y[0],t=y[1],u=y[2],a=y[3],p=y[4],l=y[5]}var m=i?"2000px":"100%";f=r?"-"+m:t?m:"0",b=l||u?"-"+m:p||a?m:"0"}return lookup[d]=(0,_globals.animation)((o?"to":"from")+" {"+(_?" transform: translate3d("+f+", "+b+", 0);":"")+"}\\n     "+(o?"from":"to")+" {transform: none;} "),lookup[d]}function Slide(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=o.children,r=(o.out,o.forever),t=o.timeout,p=o.duration,l=void 0===p?_globals.defaults.duration:p,u=o.delay,a=void 0===u?_globals.defaults.delay:u,i=o.count,n=void 0===i?_globals.defaults.count:i,s=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?l:t,delay:a,forever:r,count:n,style:{animationFillMode:"both"},reverse:s.left};return(0,_wrap2.default)(s,d,d,e)}Object.defineProperty(exports, "__esModule", ({value:!0}));var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Slide.propTypes=propTypes,exports.default=Slide,module.exports=exports.default;\n\n//# sourceURL=webpack://frontend/./node_modules/react-reveal/Slide.js?')}}]);