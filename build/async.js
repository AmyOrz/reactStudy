!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1),o=n(2),i=n(3);o.render(r.createElement(i.default,null),document.querySelector("#ct"))},function(t,e){t.exports=React},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(1),i=n(4),u=n(28),s=n(34),a=u.default(),c=function(t){function e(){t.apply(this,arguments)}return r(e,t),e.prototype.render=function(){return o.createElement(i.Provider,{store:a},o.createElement(s.default,null))},e}(o.Component);Object.defineProperty(e,"__esModule",{value:!0}),e.default=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.connect=e.Provider=void 0;var o=n(5),i=r(o),u=n(9),s=r(u);e.Provider=i.default,e.connect=s.default},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(){d||(d=!0,(0,l.default)("<Provider> does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/reactjs/react-redux/releases/tag/v2.0.0 for the migration instructions."))}e.__esModule=!0,e.default=void 0;var a=n(1),c=n(7),p=r(c),f=n(8),l=r(f),d=!1,h=function(t){function e(n,r){o(this,e);var u=i(this,t.call(this,n,r));return u.store=n.store,u}return u(e,t),e.prototype.getChildContext=function(){return{store:this.store}},e.prototype.render=function(){var t=this.props.children;return a.Children.only(t)},e}(a.Component);e.default=h,"production"!==t.env.NODE_ENV&&(h.prototype.componentWillReceiveProps=function(t){var e=this.store,n=t.store;e!==n&&s()}),h.propTypes={store:p.default.isRequired,children:a.PropTypes.element.isRequired},h.childContextTypes={store:p.default.isRequired}}).call(e,n(6))},function(t,e){function n(t){return a===setTimeout?setTimeout(t,0):a.call(null,t,0)}function r(t){c===clearTimeout?clearTimeout(t):c.call(null,t)}function o(){d&&f&&(d=!1,f.length?l=f.concat(l):h=-1,l.length&&i())}function i(){if(!d){var t=n(o);d=!0;for(var e=l.length;e;){for(f=l,l=[];++h<e;)f&&f[h].run();h=-1,e=l.length}f=null,d=!1,r(t)}}function u(t,e){this.fun=t,this.array=e}function s(){}var a,c,p=t.exports={};!function(){try{a=setTimeout}catch(t){a=function(){throw new Error("setTimeout is not defined")}}try{c=clearTimeout}catch(t){c=function(){throw new Error("clearTimeout is not defined")}}}();var f,l=[],d=!1,h=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new u(t,e)),1!==l.length||d||n(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(1);e.default=r.PropTypes.shape({subscribe:r.PropTypes.func.isRequired,dispatch:r.PropTypes.func.isRequired,getState:r.PropTypes.func.isRequired})},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}e.__esModule=!0,e.default=n},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){return t.displayName||t.name||"Component"}function a(t,e){try{return t.apply(e)}catch(t){return M.value=t,M}}function c(e,n,r){var c=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],l=Boolean(e),h=e||T,v=void 0;v="function"==typeof n?n:n?(0,b.default)(n):x;var m=r||j,P=c.pure,E=void 0===P||P,_=c.withRef,D=void 0!==_&&_,N=E&&m!==j,R=C++;return function(e){function n(t,e){(0,w.default)(t)||(0,g.default)(e+"() in "+c+" must return a plain object. "+("Instead received "+t+"."))}function r(e,r,o){var i=m(e,r,o);return"production"!==t.env.NODE_ENV&&n(i,"mergeProps"),i}var c="Connect("+s(e)+")",b=function(s){function d(t,e){o(this,d);var n=i(this,s.call(this,t,e));n.version=R,n.store=t.store||e.store,(0,S.default)(n.store,'Could not find "store" in either the context or '+('props of "'+c+'". ')+"Either wrap the root component in a <Provider>, "+('or explicitly pass "store" as a prop to "'+c+'".'));var r=n.store.getState();return n.state={storeState:r},n.clearCache(),n}return u(d,s),d.prototype.shouldComponentUpdate=function(){return!E||this.haveOwnPropsChanged||this.hasStoreStateChanged},d.prototype.computeStateProps=function(e,r){if(!this.finalMapStateToProps)return this.configureFinalMapState(e,r);var o=e.getState(),i=this.doStatePropsDependOnOwnProps?this.finalMapStateToProps(o,r):this.finalMapStateToProps(o);return"production"!==t.env.NODE_ENV&&n(i,"mapStateToProps"),i},d.prototype.configureFinalMapState=function(e,r){var o=h(e.getState(),r),i="function"==typeof o;return this.finalMapStateToProps=i?o:h,this.doStatePropsDependOnOwnProps=1!==this.finalMapStateToProps.length,i?this.computeStateProps(e,r):("production"!==t.env.NODE_ENV&&n(o,"mapStateToProps"),o)},d.prototype.computeDispatchProps=function(e,r){if(!this.finalMapDispatchToProps)return this.configureFinalMapDispatch(e,r);var o=e.dispatch,i=this.doDispatchPropsDependOnOwnProps?this.finalMapDispatchToProps(o,r):this.finalMapDispatchToProps(o);return"production"!==t.env.NODE_ENV&&n(i,"mapDispatchToProps"),i},d.prototype.configureFinalMapDispatch=function(e,r){var o=v(e.dispatch,r),i="function"==typeof o;return this.finalMapDispatchToProps=i?o:v,this.doDispatchPropsDependOnOwnProps=1!==this.finalMapDispatchToProps.length,i?this.computeDispatchProps(e,r):("production"!==t.env.NODE_ENV&&n(o,"mapDispatchToProps"),o)},d.prototype.updateStatePropsIfNeeded=function(){var t=this.computeStateProps(this.store,this.props);return!(this.stateProps&&(0,y.default)(t,this.stateProps)||(this.stateProps=t,0))},d.prototype.updateDispatchPropsIfNeeded=function(){var t=this.computeDispatchProps(this.store,this.props);return!(this.dispatchProps&&(0,y.default)(t,this.dispatchProps)||(this.dispatchProps=t,0))},d.prototype.updateMergedPropsIfNeeded=function(){var t=r(this.stateProps,this.dispatchProps,this.props);return!(this.mergedProps&&N&&(0,y.default)(t,this.mergedProps)||(this.mergedProps=t,0))},d.prototype.isSubscribed=function(){return"function"==typeof this.unsubscribe},d.prototype.trySubscribe=function(){l&&!this.unsubscribe&&(this.unsubscribe=this.store.subscribe(this.handleChange.bind(this)),this.handleChange())},d.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},d.prototype.componentDidMount=function(){this.trySubscribe()},d.prototype.componentWillReceiveProps=function(t){E&&(0,y.default)(t,this.props)||(this.haveOwnPropsChanged=!0)},d.prototype.componentWillUnmount=function(){this.tryUnsubscribe(),this.clearCache()},d.prototype.clearCache=function(){this.dispatchProps=null,this.stateProps=null,this.mergedProps=null,this.haveOwnPropsChanged=!0,this.hasStoreStateChanged=!0,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,this.renderedElement=null,this.finalMapDispatchToProps=null,this.finalMapStateToProps=null},d.prototype.handleChange=function(){if(this.unsubscribe){var t=this.store.getState(),e=this.state.storeState;if(!E||e!==t){if(E&&!this.doStatePropsDependOnOwnProps){var n=a(this.updateStatePropsIfNeeded,this);if(!n)return;n===M&&(this.statePropsPrecalculationError=M.value),this.haveStatePropsBeenPrecalculated=!0}this.hasStoreStateChanged=!0,this.setState({storeState:t})}}},d.prototype.getWrappedInstance=function(){return(0,S.default)(D,"To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."),this.refs.wrappedInstance},d.prototype.render=function(){var t=this.haveOwnPropsChanged,n=this.hasStoreStateChanged,r=this.haveStatePropsBeenPrecalculated,o=this.statePropsPrecalculationError,i=this.renderedElement;if(this.haveOwnPropsChanged=!1,this.hasStoreStateChanged=!1,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,o)throw o;var u=!0,s=!0;E&&i&&(u=n||t&&this.doStatePropsDependOnOwnProps,s=t&&this.doDispatchPropsDependOnOwnProps);var a=!1,c=!1;r?a=!0:u&&(a=this.updateStatePropsIfNeeded()),s&&(c=this.updateDispatchPropsIfNeeded());var l=!0;return l=!!(a||c||t)&&this.updateMergedPropsIfNeeded(),!l&&i?i:(D?this.renderedElement=(0,f.createElement)(e,p({},this.mergedProps,{ref:"wrappedInstance"})):this.renderedElement=(0,f.createElement)(e,this.mergedProps),this.renderedElement)},d}(f.Component);return b.displayName=c,b.WrappedComponent=e,b.contextTypes={store:d.default},b.propTypes={store:d.default},"production"!==t.env.NODE_ENV&&(b.prototype.componentWillUpdate=function(){this.version!==R&&(this.version=R,this.trySubscribe(),this.clearCache())}),(0,O.default)(b,e)}}var p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0,e.default=c;var f=n(1),l=n(7),d=r(l),h=n(10),y=r(h),v=n(11),b=r(v),m=n(8),g=r(m),P=n(14),w=r(P),E=n(26),O=r(E),_=n(27),S=r(_),T=function(t){return{}},x=function(t){return{dispatch:t}},j=function(t,e,n){return p({},n,t,e)},M={value:null},C=0}).call(e,n(6))},function(t,e){"use strict";function n(t,e){if(t===e)return!0;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,i=0;i<n.length;i++)if(!o.call(e,n[i])||t[n[i]]!==e[n[i]])return!1;return!0}e.__esModule=!0,e.default=n},function(t,e,n){"use strict";function r(t){return function(e){return(0,o.bindActionCreators)(t,e)}}e.__esModule=!0,e.default=r;var o=n(12)},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var i=n(13),u=r(i),s=n(21),a=r(s),c=n(23),p=r(c),f=n(24),l=r(f),d=n(25),h=r(d),y=n(22),v=r(y);"production"!==t.env.NODE_ENV&&"string"==typeof o.name&&"isCrushed"!==o.name&&(0,v.default)("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."),e.createStore=u.default,e.combineReducers=a.default,e.bindActionCreators=p.default,e.applyMiddleware=l.default,e.compose=h.default}).call(e,n(6))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){function r(){b===v&&(b=v.slice())}function i(){return y}function s(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return r(),b.push(t),function(){if(e){e=!1,r();var n=b.indexOf(t);b.splice(n,1)}}}function p(t){if(!(0,u.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,y=h(y,t)}finally{m=!1}for(var e=v=b,n=0;n<e.length;n++)e[n]();return t}function f(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");h=t,p({type:c.INIT})}function l(){var t,e=s;return t={subscribe:function(t){function n(){t.next&&t.next(i())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[a.default]=function(){return this},t}var d;if("function"==typeof e&&"undefined"==typeof n&&(n=e,e=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var h=t,y=e,v=[],b=v,m=!1;return p({type:c.INIT}),d={dispatch:p,subscribe:s,getState:i,replaceReducer:f},d[a.default]=l,d}e.__esModule=!0,e.ActionTypes=void 0,e.default=o;var i=n(14),u=r(i),s=n(19),a=r(s),c=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e,n){function r(t){if(!u(t)||l.call(t)!=s||i(t))return!1;var e=o(t);if(null===e)return!0;var n=p.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==f}var o=n(15),i=n(17),u=n(18),s="[object Object]",a=Object.prototype,c=Function.prototype.toString,p=a.hasOwnProperty,f=c.call(Object),l=a.toString;t.exports=r},function(t,e,n){var r=n(16),o=Object.getPrototypeOf,i=r(o,Object);t.exports=i},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){(function(e){"use strict";t.exports=n(20)(e||window||this)}).call(e,function(){return this}())},function(t,e){"use strict";t.exports=function(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(t,e,n){var r=Object.keys(e),o=n&&n.type===a.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,p.default)(t))return"The "+o+' has unexpected type of "'+{}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+r.join('", "')+'"');var i=Object.keys(t).filter(function(t){return!e.hasOwnProperty(t)});return i.length>0?"Unexpected "+(i.length>1?"keys":"key")+" "+('"'+i.join('", "')+'" found in '+o+". ")+"Expected to find one of the known reducer keys instead: "+('"'+r.join('", "')+'". Unexpected keys will be ignored.'):void 0}function u(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function s(e){for(var n=Object.keys(e),r={},s=0;s<n.length;s++){var a=n[s];"function"==typeof e[a]&&(r[a]=e[a])}var c,p=Object.keys(r);try{u(r)}catch(t){c=t}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];if(c)throw c;if("production"!==t.env.NODE_ENV){var u=i(e,r,n);u&&(0,l.default)(u)}for(var s=!1,a={},f=0;f<p.length;f++){var d=p[f],h=r[d],y=e[d],v=h(y,n);if("undefined"==typeof v){var b=o(d,n);throw new Error(b)}a[d]=v,s=s||v!==y}return s?a:e}}e.__esModule=!0,e.default=s;var a=n(13),c=n(14),p=r(c),f=n(22),l=r(f)}).call(e,n(6))},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}e.__esModule=!0,e.default=n},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},i=0;i<r.length;i++){var u=r[i],s=t[u];"function"==typeof s&&(o[u]=n(s,e))}return o}e.__esModule=!0,e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var u=t(n,r,o),a=u.dispatch,c=[],p={getState:u.getState,dispatch:function(t){return a(t)}};return c=e.map(function(t){return t(p)}),a=s.default.apply(void 0,c)(u.dispatch),i({},u,{dispatch:a})}}}e.__esModule=!0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=o;var u=n(25),s=r(u)},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};var r=function(){var t=e[e.length-1],n=e.slice(0,-1);return{v:function(){return n.reduceRight(function(t,e){return e(t)},t.apply(void 0,arguments))}}}();return"object"==typeof r?r.v:void 0}e.__esModule=!0,e.default=n},function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},o="function"==typeof Object.getOwnPropertySymbols;t.exports=function(t,e,i){if("string"!=typeof e){var u=Object.getOwnPropertyNames(e);o&&(u=u.concat(Object.getOwnPropertySymbols(e)));for(var s=0;s<u.length;++s)if(!(n[u[s]]||r[u[s]]||i&&i[u[s]]))try{t[u[s]]=e[u[s]]}catch(t){}}return t}},function(t,e,n){(function(e){"use strict";var n=function(t,n,r,o,i,u,s,a){if("production"!==e.env.NODE_ENV&&void 0===n)throw new Error("invariant requires an error message argument");if(!t){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[r,o,i,u,s,a],f=0;c=new Error(n.replace(/%s/g,function(){return p[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}};t.exports=n}).call(e,n(6))},function(t,e,n){"use strict";var r=n(12),o=n(29),i=n(30),u=function(t){var e=t.getState;return function(t){return function(n){console.log("will dispatch",n);var r=t(n);return console.log("state after dispatch",e()),r}}},s=r.applyMiddleware(o.default,u)(r.createStore),a=function(t){return s(i.default,t)};Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},function(t,e){"use strict";function n(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"==typeof o?o(n,r,t):e(o)}}}}e.__esModule=!0;var r=n();r.withExtraArgument=n,e.default=r},function(t,e,n){"use strict";var r=n(12),o=n(31),i=r.combineReducers({postAction:o.default});Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e,n){"use strict";var r=n(32),o=function(t,e){switch(void 0===t&&(t={isFetching:!1,item:[]}),e.type){case r.REQUEST_POSTS:return Object.assign({},t,{isFetching:!0});case r.RECEIVE_POSTS:return Object.assign({},t,{isFetching:!1,item:e.posts,lastUpdated:e.receivedAt});default:return t}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";var r=n(33);e.REQUEST_POSTS="REQUEST_POSTS",e.RECEIVE_POSTS="RECEIVE_POSTS";var o=new r.DataService,i=function(){return{type:e.REQUEST_POSTS}},u=function(t){return{type:e.RECEIVE_POSTS,posts:t,receivedAt:Date.now()}},s=function(){return function(t){return t(i()),o.get("./text.json").then(function(e){t(u(e))})}};e.fetchPostsIfNeeded=function(){return function(t){return t(s())}}},function(t,e){"use strict";var n=function(){function t(){}return t.prototype.get=function(t){return this.getPromise(t)},t.prototype.getPromise=function(t){var e=this;return new Promise(function(n,r){$.ajax({url:t,cache:!1,dataType:"json",type:"GET",success:n.bind(e),error:function(t,e,n){r("status["+e+"] message["+n+"]")}})})},t}();e.DataService=n},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(1),i=n(4),u=n(35),s=n(32),a=function(t){function e(e){t.call(this,e)}return r(e,t),e.prototype.componentDidMount=function(){var t=this.props.dispatch;t(s.fetchPostsIfNeeded())},e.prototype.render=function(){var t=this.props.posts,e=t.item,n=t.isFetching,r=t.lastUpdated;return o.createElement("div",null,o.createElement("p",null,r&&o.createElement("span",null,"Last updated at ",new Date(r).toLocaleTimeString(),"."," ")),n&&void 0!=e&&0===e.length&&o.createElement("h2",null,"loading..."),!n&&void 0!=e&&0===e.length&&o.createElement("h2",null,"Empty"),!n&&void 0!=e&&e.length>0&&o.createElement(u.default,{list:e}))},e}(o.Component),c=function(t){return{posts:t.postAction}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=i.connect(c)(a)},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(1),i=n(36),u=function(t){function e(e){t.call(this,e)}return r(e,t),e.prototype.render=function(){var t;return t=this.props.list.map(function(t){return o.createElement("div",null,o.createElement(i.default,{data:t}))}),o.createElement("div",null,t)},e}(o.Component);Object.defineProperty(e,"__esModule",{value:!0}),e.default=u},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(1),i=function(t){function e(e){t.call(this,e)}return r(e,t),e.prototype.render=function(){return o.createElement("div",null,o.createElement("div",null,this.props.data.name),o.createElement("div",null,this.props.data.age),o.createElement("div",null,this.props.data.liked))},e}(o.Component);Object.defineProperty(e,"__esModule",{value:!0}),e.default=i}]);