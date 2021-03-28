(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[697],{63349:(e,t,r)=>{"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:()=>i})},35005:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=r(22122),n=r(19756),o=r(94184),s=r.n(o),a=r(67294),l=r(76792),c=r(48358),d=a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.variant,d=e.size,f=e.active,u=e.className,h=e.block,p=e.type,m=e.as,_=(0,n.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),g=(0,l.vE)(r,"btn"),v=s()(u,g,f&&"active",o&&g+"-"+o,h&&g+"-block",d&&g+"-"+d);if(_.href)return a.createElement(c.Z,(0,i.Z)({},_,{as:m,ref:t,className:s()(v,_.disabled&&"disabled")}));t&&(_.ref=t),p?_.type=p:m||(_.type="button");var y=m||"button";return a.createElement(y,(0,i.Z)({},_,{className:v}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1};const f=d},80864:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var i=r(22122),n=r(19756),o=r(94184),s=r.n(o),a=r(67294),l=r(76792),c=r(44680);const d=function(e){return a.forwardRef((function(t,r){return a.createElement("div",(0,i.Z)({},t,{ref:r,className:s()(t.className,e)}))}))};var f=r(88154),u=a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.variant,d=e.as,f=void 0===d?"img":d,u=(0,n.Z)(e,["bsPrefix","className","variant","as"]),h=(0,l.vE)(r,"card-img");return a.createElement(f,(0,i.Z)({ref:t,className:s()(c?h+"-"+c:h,o)},u))}));u.displayName="CardImg",u.defaultProps={variant:null};const h=u;var p=d("h5"),m=d("h6"),_=(0,c.Z)("card-body"),g=(0,c.Z)("card-title",{Component:p}),v=(0,c.Z)("card-subtitle",{Component:m}),y=(0,c.Z)("card-link",{Component:"a"}),b=(0,c.Z)("card-text",{Component:"p"}),S=(0,c.Z)("card-header"),z=(0,c.Z)("card-footer"),w=(0,c.Z)("card-img-overlay"),I=a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.bg,d=e.text,u=e.border,h=e.body,p=e.children,m=e.as,g=void 0===m?"div":m,v=(0,n.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,l.vE)(r,"card"),b=(0,a.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return a.createElement(f.Z.Provider,{value:b},a.createElement(g,(0,i.Z)({ref:t},v,{className:s()(o,y,c&&"bg-"+c,d&&"text-"+d,u&&"border-"+u)}),h?a.createElement(_,null,p):p))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=h,I.Title=g,I.Subtitle=v,I.Body=_,I.Link=y,I.Text=b,I.Header=S,I.Footer=z,I.ImgOverlay=w;const R=I},88154:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(67294).createContext(null);i.displayName="CardContext";const n=i},48358:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var i=r(22122),n=r(19756),o=r(67294),s=r(16833);function a(e){return!e||"#"===e.trim()}var l=o.forwardRef((function(e,t){var r=e.as,l=void 0===r?"a":r,c=e.disabled,d=e.onKeyDown,f=(0,n.Z)(e,["as","disabled","onKeyDown"]),u=function(e){var t=f.href,r=f.onClick;(c||a(t))&&e.preventDefault(),c?e.stopPropagation():r&&r(e)};return a(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),c&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.createElement(l,(0,i.Z)({ref:t},f,{onClick:u,onKeyDown:(0,s.Z)((function(e){" "===e.key&&(e.preventDefault(),u(e))}),d)}))}));l.displayName="SafeAnchor";const c=l},16833:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});const i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];e.apply(this,i),t.apply(this,i)}}),null)}},44680:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var i=r(22122),n=r(19756),o=r(94184),s=r.n(o),a=/-(.)/g,l=r(67294),c=r(76792);function d(e,t){var r,o,d=void 0===t?{}:t,f=d.displayName,u=void 0===f?(r=e)[0].toUpperCase()+(o=r,o.replace(a,(function(e,t){return t.toUpperCase()}))).slice(1):f,h=d.Component,p=d.defaultProps,m=l.forwardRef((function(t,r){var o=t.className,a=t.bsPrefix,d=t.as,f=void 0===d?h||"div":d,u=(0,n.Z)(t,["className","bsPrefix","as"]),p=(0,c.vE)(a,e);return l.createElement(f,(0,i.Z)({ref:r,className:s()(o,p)},u))}));return m.defaultProps=p,m.displayName=u,m}},11728:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var i=r(67294);var n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(e){function t(){var e,r,i;n(this,t);for(var o=arguments.length,s=Array(o),l=0;l<o;l++)s[l]=arguments[l];return r=i=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={height:i.props.defaultHeight||0,width:i.props.defaultWidth||0},i._onResize=function(){var e=i.props,t=e.disableHeight,r=e.disableWidth,n=e.onResize;if(i._parentNode){var o=i._parentNode.offsetHeight||0,s=i._parentNode.offsetWidth||0,a=window.getComputedStyle(i._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,c=parseInt(a.paddingRight,10)||0,d=parseInt(a.paddingTop,10)||0,f=parseInt(a.paddingBottom,10)||0,u=o-d-f,h=s-l-c;(!t&&i.state.height!==u||!r&&i.state.width!==h)&&(i.setState({height:o-d-f,width:s-l-c}),n({height:o,width:s}))}},i._setRef=function(e){i._autoSizer=e},a(i,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=function(e){var t;t="undefined"!=typeof window?window:"undefined"!=typeof self?self:r.g;var i,n,o="undefined"!=typeof document&&document.attachEvent;if(!o){var s=(n=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||function(e){return t.setTimeout(e,20)},function(e){return n(e)}),a=(i=t.cancelAnimationFrame||t.mozCancelAnimationFrame||t.webkitCancelAnimationFrame||t.clearTimeout,function(e){return i(e)}),l=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,i=t.lastElementChild,n=r.firstElementChild;i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight,n.style.width=r.offsetWidth+1+"px",n.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},c=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;l(this),this.__resizeRAF__&&a(this.__resizeRAF__),this.__resizeRAF__=s((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(r){r.call(t,e)})))}))}},d=!1,f="",u="animationstart",h="Webkit Moz O ms".split(" "),p="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),m=document.createElement("fakeelement");if(void 0!==m.style.animationName&&(d=!0),!1===d)for(var _=0;_<h.length;_++)if(void 0!==m.style[h[_]+"AnimationName"]){f="-"+h[_].toLowerCase()+"-",u=p[_],d=!0;break}var g="resizeanim",v="@"+f+"keyframes "+g+" { from { opacity: 0; } to { opacity: 0; } } ",y=f+"animation: 1ms "+g+"; "}return{addResizeListener:function(r,i){if(o)r.attachEvent("onresize",i);else{if(!r.__resizeTriggers__){var n=r.ownerDocument,s=t.getComputedStyle(r);s&&"static"==s.position&&(r.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var r=(v||"")+".resize-triggers { "+(y||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=t.head||t.getElementsByTagName("head")[0],n=t.createElement("style");n.id="detectElementResize",n.type="text/css",null!=e&&n.setAttribute("nonce",e),n.styleSheet?n.styleSheet.cssText=r:n.appendChild(t.createTextNode(r)),i.appendChild(n)}}(n),r.__resizeLast__={},r.__resizeListeners__=[],(r.__resizeTriggers__=n.createElement("div")).className="resize-triggers";var a=n.createElement("div");a.className="expand-trigger",a.appendChild(n.createElement("div"));var d=n.createElement("div");d.className="contract-trigger",r.__resizeTriggers__.appendChild(a),r.__resizeTriggers__.appendChild(d),r.appendChild(r.__resizeTriggers__),l(r),r.addEventListener("scroll",c,!0),u&&(r.__resizeTriggers__.__animationListener__=function(e){e.animationName==g&&l(r)},r.__resizeTriggers__.addEventListener(u,r.__resizeTriggers__.__animationListener__))}r.__resizeListeners__.push(i)}},removeResizeListener:function(e,t){if(o)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",c,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(u,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.disableHeight,o=e.disableWidth,a=e.style,l=this.state,c=l.height,d=l.width,f={overflow:"visible"},u={},h=!1;return n||(0===c&&(h=!0),f.height=0,u.height=c),o||(0===d&&(h=!0),f.width=0,u.width=d),(0,i.createElement)("div",{className:r,ref:this._setRef,style:s({},f,a)},!h&&t(u))}}]),t}(i.PureComponent);l.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}};const c=l},84356:(e,t,r)=>{"use strict";r.d(t,{t7:()=>_});var i=r(22122),n=r(41788),o=r(63349);function s(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}const a=function(e,t){var r;void 0===t&&(t=s);var i,n=[],o=!1;return function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return o&&r===this&&t(s,n)||(i=e.apply(this,s),o=!0,r=this,n=s),i}};var l=r(67294),c="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function d(e){cancelAnimationFrame(e.id)}var f=null;function u(e){if(void 0===e&&(e=!1),null===f||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var i=document.createElement("div"),n=i.style;return n.width="100px",n.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?f="positive-descending":(t.scrollLeft=1,f=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),f}return f}var h=function(e,t){return e};function p(e){var t,r,s=e.getItemOffset,f=e.getEstimatedTotalSize,p=e.getItemSize,_=e.getOffsetForIndexAndAlignment,g=e.getStartIndexForOffset,v=e.getStopIndexForStartIndex,y=e.initInstanceProps,b=e.shouldResetStyleCacheOnItemSizeChange,S=e.validateProps;return r=t=function(e){function t(t){var r;return(r=e.call(this,t)||this)._instanceProps=y(r.props,(0,o.Z)((0,o.Z)(r))),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:(0,o.Z)((0,o.Z)(r)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=a((function(e,t,i,n){return r.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:i,visibleStopIndex:n})})),r._callOnScroll=void 0,r._callOnScroll=a((function(e,t,i){return r.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:i})})),r._getItemStyle=void 0,r._getItemStyle=function(e){var t,i=r.props,n=i.direction,o=i.itemSize,a=i.layout,l=r._getItemStyleCache(b&&o,b&&a,b&&n);if(l.hasOwnProperty(e))t=l[e];else{var c=s(r.props,e,r._instanceProps),d=p(r.props,e,r._instanceProps),f="horizontal"===n||"horizontal"===a,u="rtl"===n,h=f?c:0;l[e]=t={position:"absolute",left:u?void 0:h,right:u?h:void 0,top:f?0:c,height:f?"100%":d,width:f?d:"100%"}}return t},r._getItemStyleCache=void 0,r._getItemStyleCache=a((function(e,t,r){return{}})),r._onScrollHorizontal=function(e){var t=e.currentTarget,i=t.clientWidth,n=t.scrollLeft,o=t.scrollWidth;r.setState((function(e){if(e.scrollOffset===n)return null;var t=r.props.direction,s=n;if("rtl"===t)switch(u()){case"negative":s=-n;break;case"positive-descending":s=o-i-n}return s=Math.max(0,Math.min(s,o-i)),{isScrolling:!0,scrollDirection:e.scrollOffset<n?"forward":"backward",scrollOffset:s,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._onScrollVertical=function(e){var t=e.currentTarget,i=t.clientHeight,n=t.scrollHeight,o=t.scrollTop;r.setState((function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,n-i));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){var e,t,i,n;null!==r._resetIsScrollingTimeoutId&&d(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=(e=r._resetIsScrolling,t=150,i=c(),n={id:requestAnimationFrame((function r(){c()-i>=t?e.call(null):n.id=requestAnimationFrame(r)}))})},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1,null)}))},r}(0,n.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return m(e,t),S(e),null};var r=t.prototype;return r.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},r.scrollToItem=function(e,t){void 0===t&&(t="auto");var r=this.props.itemCount,i=this.state.scrollOffset;e=Math.max(0,Math.min(e,r-1)),this.scrollTo(_(this.props,e,t,i,this._instanceProps))},r.componentDidMount=function(){var e=this.props,t=e.direction,r=e.initialScrollOffset,i=e.layout;if("number"==typeof r&&null!=this._outerRef){var n=this._outerRef;"horizontal"===t||"horizontal"===i?n.scrollLeft=r:n.scrollTop=r}this._callPropsCallbacks()},r.componentDidUpdate=function(){var e=this.props,t=e.direction,r=e.layout,i=this.state,n=i.scrollOffset;if(i.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===r)if("rtl"===t)switch(u()){case"negative":o.scrollLeft=-n;break;case"positive-ascending":o.scrollLeft=n;break;default:var s=o.clientWidth,a=o.scrollWidth;o.scrollLeft=a-s-n}else o.scrollLeft=n;else o.scrollTop=n}this._callPropsCallbacks()},r.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&d(this._resetIsScrollingTimeoutId)},r.render=function(){var e=this.props,t=e.children,r=e.className,n=e.direction,o=e.height,s=e.innerRef,a=e.innerElementType,c=e.innerTagName,d=e.itemCount,u=e.itemData,p=e.itemKey,m=void 0===p?h:p,_=e.layout,g=e.outerElementType,v=e.outerTagName,y=e.style,b=e.useIsScrolling,S=e.width,z=this.state.isScrolling,w="horizontal"===n||"horizontal"===_,I=w?this._onScrollHorizontal:this._onScrollVertical,R=this._getRangeToRender(),x=R[0],C=R[1],N=[];if(d>0)for(var E=x;E<=C;E++)N.push((0,l.createElement)(t,{data:u,key:m(E,u),index:E,isScrolling:b?z:void 0,style:this._getItemStyle(E)}));var T=f(this.props,this._instanceProps);return(0,l.createElement)(g||v||"div",{className:r,onScroll:I,ref:this._outerRefSetter,style:(0,i.Z)({position:"relative",height:o,width:S,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:n},y)},(0,l.createElement)(a||c||"div",{children:N,ref:s,style:{height:w?"100%":T,pointerEvents:z?"none":void 0,width:w?T:"100%"}}))},r._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],r=e[1],i=e[2],n=e[3];this._callOnItemsRendered(t,r,i,n)}if("function"==typeof this.props.onScroll){var o=this.state,s=o.scrollDirection,a=o.scrollOffset,l=o.scrollUpdateWasRequested;this._callOnScroll(s,a,l)}},r._getRangeToRender=function(){var e=this.props,t=e.itemCount,r=e.overscanCount,i=this.state,n=i.isScrolling,o=i.scrollDirection,s=i.scrollOffset;if(0===t)return[0,0,0,0];var a=g(this.props,s,this._instanceProps),l=v(this.props,a,s,this._instanceProps),c=n&&"backward"!==o?1:Math.max(1,r),d=n&&"forward"!==o?1:Math.max(1,r);return[Math.max(0,a-c),Math.max(0,Math.min(t-1,l+d)),a,l]},t}(l.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},r}var m=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},_=p({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,r,i){var n=e.direction,o=e.height,s=e.itemCount,a=e.itemSize,l=e.layout,c=e.width,d="horizontal"===n||"horizontal"===l?c:o,f=Math.max(0,s*a-d),u=Math.min(f,t*a),h=Math.max(0,t*a-d+a);switch("smart"===r&&(r=i>=h-d&&i<=u+d?"auto":"center"),r){case"start":return u;case"end":return h;case"center":var p=Math.round(h+(u-h)/2);return p<Math.ceil(d/2)?0:p>f+Math.floor(d/2)?f:p;case"auto":default:return i>=h&&i<=u?i:i<h?h:u}},getStartIndexForOffset:function(e,t){var r=e.itemCount,i=e.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/i)))},getStopIndexForStartIndex:function(e,t,r){var i=e.direction,n=e.height,o=e.itemCount,s=e.itemSize,a=e.layout,l=e.width,c=t*s,d="horizontal"===i||"horizontal"===a?l:n,f=Math.ceil((d+r-c)/s);return Math.max(0,Math.min(o-1,t+f-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}})}}]);