(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n.p+"static/media/loading.e404159f.gif"},36:function(e,t,n){e.exports=n(64)},64:function(e,t,n){"use strict";n.r(t);var a,i,r,o,s,c,u,l,m,p,h,d=n(0),v=n.n(d),f=n(14),b=n.n(f),g=n(67),O=n(8),j=n(4),y=n(9),w=n(23),E=n(11),F=n(12),C=n(13),k=n(10),z=(n(42),n(2)),I=n(18),S=n(32),x=n.n(S),N=6,R=300+2*N,L=(a=function(){function e(){Object(F.a)(this,e),Object(E.a)(this,"imageURLs",i,this),Object(E.a)(this,"placeholdersCount",r,this),Object(E.a)(this,"favourites",o,this),Object(E.a)(this,"setImageURLs",s,this),Object(E.a)(this,"addImageURLs",c,this),Object(E.a)(this,"setPlaceholdersCount",u,this),Object(E.a)(this,"setFavourites",l,this),Object(E.a)(this,"addToFavourites",m,this),Object(E.a)(this,"removeFromFavourites",p,this),Object(E.a)(this,"requestMoreImages",h,this)}return Object(C.a)(e,[{key:"images",get:function(){return Object(w.a)(this.imageURLs).concat(Object(w.a)(new Array(this.placeholdersCount).fill("")))}}]),e}(),i=Object(k.a)(a.prototype,"imageURLs",[z.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),r=Object(k.a)(a.prototype,"placeholdersCount",[z.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),o=Object(k.a)(a.prototype,"favourites",[z.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new I.c(function(){var e=document.cookie.match(/shibe-dogs-elite=([^;]*)/);return null!==e&&e.length>0?JSON.parse(e[1]):[]}())}}),s=Object(k.a)(a.prototype,"setImageURLs",[z.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.imageURLs.replace(t)}}}),c=Object(k.a)(a.prototype,"addImageURLs",[z.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n;(n=e.imageURLs).push.apply(n,Object(w.a)(t))}}}),u=Object(k.a)(a.prototype,"setPlaceholdersCount",[z.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.placeholdersCount=t}}}),l=Object(k.a)(a.prototype,"setFavourites",[z.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n;e.favourites=t,n=t,document.cookie="shibe-dogs-elite=".concat(JSON.stringify(n))}}}),m=Object(k.a)(a.prototype,"addToFavourites",[z.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.setFavourites(e.favourites.add(t))}}}),p=Object(k.a)(a.prototype,"removeFromFavourites",[z.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.setFavourites(e.favourites.delete(t))}}}),Object(k.a)(a.prototype,"images",[z.e],Object.getOwnPropertyDescriptor(a.prototype,"images"),a.prototype),h=Object(k.a)(a.prototype,"requestMoreImages",[z.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;e.setPlaceholdersCount(e.placeholdersCount+t),function(e){return x.a.get("https://cors.io/?https://shibe.online/api/shibes?count=".concat(e))}(t).then(function(n){var a=n.data;e.setPlaceholdersCount(e.placeholdersCount-t),e.addImageURLs(a)})}}}),a),M=n(68),H=n(66),U=n(65),W=n(69),T=Object(W.a)(Object(j.b)(function(e){return{favourites:e.appState.favourites}})(Object(j.c)(function(e){var t=e.location,n=e.favourites;return v.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light navbar-expand-sm"},v.a.createElement("a",{className:"navbar-brand",href:"/"},"Infinite Scroll"),v.a.createElement("div",{className:"collapse navbar-collapse"},v.a.createElement("ul",{className:"navbar-nav"},[{label:"New Photos",path:"/"},{label:"Favourites (".concat(n.size,")"),path:"/favourites"}].map(function(e){return v.a.createElement("li",{key:e.label,className:"nav-item ".concat(t.pathname===e.path&&"active")},v.a.createElement(U.a,{className:"nav-link",to:e.path},e.label))}))))}))),q=n(16),P=n(15),J=n(17);function A(){var e=Object(O.a)(["\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n\n  font-size: 36px;\n\n  transition: opacity 0.2s;\n\n  &.favourites-indicator--hidden {\n    opacity: 0;\n  }\n"]);return A=function(){return e},e}var B=y.a.div(A()),D=function(e){var t=e.isFavourite;return v.a.createElement(B,{className:"favourites-indicator ".concat(!t&&"favourites-indicator--hidden")},v.a.createElement("span",{role:"img","aria-label":"favourite"},"\u2764\ufe0f"))};function Y(){var e=Object(O.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 120px;\n  height: 120px;\n  padding-top: 12px;\n  font-size: 64px;\n\n  &.btn--hidden {\n    opacity: 0;\n  }\n"]);return Y=function(){return e},e}var $=y.a.button(Y()),G=function(e){var t=e.visible,n=e.isFavourite;return v.a.createElement($,{className:"btn btn-light ".concat(!t&&"btn--hidden"),type:"button"},n?"\ud83d\udc94":"\u2764\ufe0f")},K=n(35),Q=n.n(K);function V(){var e=Object(O.a)(["\n  position: relative;\n  width: 100%;\n  margin: ","px 0;\n  transition: height 0.2s;\n\n  cursor: pointer;\n\n  background-image: url(",");\n  background-color: lightgray;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-blend-mode: multiply;\n\n  .image {\n    width: 100%;\n    opacity: 0;\n    position: absolute;\n  }\n\n  .image--loaded {\n    opacity: 1;\n    transition: opacity 0.5s;\n  }\n"]);return V=function(){return e},e}var X=y.a.div(V(),N,Q.a),Z=function(e){function t(e){var n;return Object(F.a)(this,t),(n=Object(q.a)(this,Object(P.a)(t).call(this,e))).onImageLoad=function(e){var t=e.target;n.setState({isImageLoaded:!0,imageHeight:t.clientHeight})},n.onMouseOver=function(){n.setState({mouseOver:!0})},n.onMouseOut=function(){n.setState({mouseOver:!1})},n.addCurrentImageToFavourites=function(){n.props.addToFavourites(n.props.image),n.setState({mouseOver:!1})},n.removeCurrentImageFromFavourites=function(){n.props.removeFromFavourites(n.props.image),n.setState({mouseOver:!1})},n.state={isImageLoaded:!1,mouseOver:!1,imageHeight:0},n}return Object(J.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.favourites,a=this.state,i=a.mouseOver,r=a.isImageLoaded,o=a.imageHeight,s=n.includes(this.props.image);return v.a.createElement(X,{onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,style:{height:o||this.props.height},onClick:s?this.removeCurrentImageFromFavourites:this.addCurrentImageToFavourites},t&&v.a.createElement("img",{className:"image ".concat(r&&"image--loaded"),alt:"Shibe dog",src:t,decoding:"async",onLoad:this.onImageLoad}),v.a.createElement(G,{visible:i,isFavourite:s}),v.a.createElement(D,{isFavourite:s}))}}]),t}(d.Component),_=Object(j.b)(function(e){var t=e.appState;return{favourites:t.favourites,addToFavourites:t.addToFavourites,removeFromFavourites:t.removeFromFavourites}})(Object(j.c)(Z)),ee=function(){var e=[.75,1,1,1.33];return{next:function(){return e[Math.floor(4*Math.random())]}}}();function te(){var e=Object(O.a)(["\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    flex-basis: 50%;\n    padding: 0;\n    margin: 0 ","px;\n"]);return te=function(){return e},e}var ne=y.a.ul(te(),N),ae=function(e){function t(){return Object(F.a)(this,t),Object(q.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=e.list,n=e.columnWidth;return v.a.createElement(ne,{className:"image-list"},t.map(function(e,t){return v.a.createElement("li",{className:"image-list--item",key:"".concat(e||"placeholder","-").concat(t)},v.a.createElement(_,{image:e,height:ee.next()*n}))}))}}]),t}(d.Component),ie=function(e){var t=e.title;return v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col"},v.a.createElement("h1",null,t)))};function re(){var e=Object(O.a)(["\n  .image-list-container {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n  }\n"]);return re=function(){return e},e}var oe=y.a.div(re()),se=function(e){function t(e){var n;return Object(F.a)(this,t),(n=Object(q.a)(this,Object(P.a)(t).call(this,e))).getMinColumnHeight=function(){var e=n.listContainerRef.current.childNodes,t=1/0;if(e&&e.length>0)for(var a=0;a<e.length;a++)t=Math.min(t,e[a].clientHeight);else t=0;return t},n.onScroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop;n.getMinColumnHeight()<window.innerHeight+e&&n.props.requestMoreImages()},n.onResize=function(){var e=n.listContainerRef.current.clientWidth,t=Math.floor(e/R),a=e/t-2*N;n.setState({columnsCount:t,columnWidth:a})},n.listContainerRef=Object(d.createRef)(),n.state={initialized:!1,columnsCount:0,actualColumnWidth:0},n}return Object(J.a)(t,e),Object(C.a)(t,[{key:"setupResizeHandlers",value:function(){window.addEventListener("resize",this.onResize),this.onResize()}},{key:"setupScrollHandlers",value:function(){window.addEventListener("scroll",this.onScroll),this.onScroll()}},{key:"componentDidMount",value:function(){this.state.initialized||(this.setupResizeHandlers(),this.props.infinite&&this.setupScrollHandlers(),this.setState({initialized:!0}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.props.infinite&&window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e=this.state,t=e.columnsCount,n=e.columnWidth,a=this.props,i=a.images,r=a.title,o=Object(I.a)(Object(I.b)(0,t).map(function(e){return[]}));return t&&n&&i.forEach(function(e,n){o.get(n%t).push(e)}),v.a.createElement(oe,null,v.a.createElement(ie,{title:r}),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col image-list-container",ref:this.listContainerRef},o.map(function(e,a){return v.a.createElement(ae,{key:"list-".concat(a,"-of-").concat(t),list:e,columnWidth:n})}))))}}]),t}(d.Component),ce=Object(j.b)(function(e){var t=e.appState;return{images:t.images,requestMoreImages:t.requestMoreImages}})(Object(j.c)(function(e){var t=e.images,n=e.requestMoreImages;return v.a.createElement(se,{infinite:!0,title:"New Photos",images:t,requestMoreImages:n})})),ue=Object(j.b)(function(e){return{favourites:e.appState.favourites}})(Object(j.c)(function(e){var t=e.favourites;return v.a.createElement(se,{title:"Favourites",images:t.toJS()})}));function le(){var e=Object(O.a)(["\n  .main {\n    padding-top: 56px;\n  }\n"]);return le=function(){return e},e}var me=y.a.div(le()),pe=new L,he=function(){return v.a.createElement(j.a,{appState:pe},v.a.createElement(me,{className:"App"},v.a.createElement(T,null),v.a.createElement("div",{className:"main container"},v.a.createElement(M.a,null,v.a.createElement(H.a,{exact:!0,path:"/",component:ce}),v.a.createElement(H.a,{exact:!0,path:"/favourites",component:ue})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(v.a.createElement(g.a,{basename:"/infinite-scroll"},v.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.aba84a98.chunk.js.map