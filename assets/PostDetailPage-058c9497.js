import{e as T,r as A,h as tt,j as m,R as be,B as rt,P as Se,_ as Ce,d as we,p as Oe,D as nt}from"./index-b64655ba.js";import{L as it}from"./Layout-898b4f07.js";import{B as at,a as ot,b as st,c as lt}from"./BlogItem-bea055b4.js";import{P as ct}from"./Button-f66f59cb.js";import{H as ut}from"./Heading-79992bdf.js";import ft from"./NotFoundPage-ab58e72d.js";import"./Logo-de5b7b2e.js";import"./data-a451e05d.js";import"./index.esm-c9a21f04.js";import"./v4-a960c1f4.js";import"./index.esm-83bb03da.js";import"./slugify-aca5d99f.js";var J={},K={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(n){n.Root="root",n.Text="text",n.Directive="directive",n.Comment="comment",n.Script="script",n.Style="style",n.Tag="tag",n.CDATA="cdata",n.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function r(n){return n.type===t.Tag||n.type===t.Script||n.type===t.Style}e.isTag=r,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(K);var f={},C=T&&T.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),_=T&&T.__assign||function(){return _=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});f.cloneNode=f.hasChildren=f.isDocument=f.isDirective=f.isComment=f.isText=f.isCDATA=f.isTag=f.Element=f.Document=f.CDATA=f.NodeWithChildren=f.ProcessingInstruction=f.Comment=f.Text=f.DataNode=f.Node=void 0;var y=K,Q=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),ee(this,t)},e}();f.Node=Q;var L=function(e){C(t,e);function t(r){var n=e.call(this)||this;return n.data=r,n}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(r){this.data=r},enumerable:!1,configurable:!0}),t}(Q);f.DataNode=L;var ke=function(e){C(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=y.ElementType.Text,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(L);f.Text=ke;var Ae=function(e){C(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=y.ElementType.Comment,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(L);f.Comment=Ae;var Ne=function(e){C(t,e);function t(r,n){var o=e.call(this,n)||this;return o.name=r,o.type=y.ElementType.Directive,o}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(L);f.ProcessingInstruction=Ne;var j=function(e){C(t,e);function t(r){var n=e.call(this)||this;return n.children=r,n}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var r;return(r=this.children[0])!==null&&r!==void 0?r:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(r){this.children=r},enumerable:!1,configurable:!0}),t}(Q);f.NodeWithChildren=j;var Pe=function(e){C(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=y.ElementType.CDATA,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(j);f.CDATA=Pe;var _e=function(e){C(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=y.ElementType.Root,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(j);f.Document=_e;var Re=function(e){C(t,e);function t(r,n,o,s){o===void 0&&(o=[]),s===void 0&&(s=r==="script"?y.ElementType.Script:r==="style"?y.ElementType.Style:y.ElementType.Tag);var c=e.call(this,o)||this;return c.name=r,c.attribs=n,c.type=s,c}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(r){this.name=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var r=this;return Object.keys(this.attribs).map(function(n){var o,s;return{name:n,value:r.attribs[n],namespace:(o=r["x-attribsNamespace"])===null||o===void 0?void 0:o[n],prefix:(s=r["x-attribsPrefix"])===null||s===void 0?void 0:s[n]}})},enumerable:!1,configurable:!0}),t}(j);f.Element=Re;function Ie(e){return(0,y.isTag)(e)}f.isTag=Ie;function De(e){return e.type===y.ElementType.CDATA}f.isCDATA=De;function Me(e){return e.type===y.ElementType.Text}f.isText=Me;function Le(e){return e.type===y.ElementType.Comment}f.isComment=Le;function je(e){return e.type===y.ElementType.Directive}f.isDirective=je;function Fe(e){return e.type===y.ElementType.Root}f.isDocument=Fe;function dt(e){return Object.prototype.hasOwnProperty.call(e,"children")}f.hasChildren=dt;function ee(e,t){t===void 0&&(t=!1);var r;if(Me(e))r=new ke(e.data);else if(Le(e))r=new Ae(e.data);else if(Ie(e)){var n=t?X(e.children):[],o=new Re(e.name,_({},e.attribs),n);n.forEach(function(i){return i.parent=o}),e.namespace!=null&&(o.namespace=e.namespace),e["x-attribsNamespace"]&&(o["x-attribsNamespace"]=_({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(o["x-attribsPrefix"]=_({},e["x-attribsPrefix"])),r=o}else if(De(e)){var n=t?X(e.children):[],s=new Pe(n);n.forEach(function(l){return l.parent=s}),r=s}else if(Fe(e)){var n=t?X(e.children):[],c=new _e(n);n.forEach(function(l){return l.parent=c}),e["x-mode"]&&(c["x-mode"]=e["x-mode"]),r=c}else if(je(e)){var a=new Ne(e.name,e.data);e["x-name"]!=null&&(a["x-name"]=e["x-name"],a["x-publicId"]=e["x-publicId"],a["x-systemId"]=e["x-systemId"]),r=a}else throw new Error("Not implemented yet: ".concat(e.type));return r.startIndex=e.startIndex,r.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(r.sourceCodeLocation=e.sourceCodeLocation),r}f.cloneNode=ee;function X(e){for(var t=e.map(function(n){return ee(n,!0)}),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r];return t}(function(e){var t=T&&T.__createBinding||(Object.create?function(a,i,l,d){d===void 0&&(d=l);var h=Object.getOwnPropertyDescriptor(i,l);(!h||("get"in h?!i.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return i[l]}}),Object.defineProperty(a,d,h)}:function(a,i,l,d){d===void 0&&(d=l),a[d]=i[l]}),r=T&&T.__exportStar||function(a,i){for(var l in a)l!=="default"&&!Object.prototype.hasOwnProperty.call(i,l)&&t(i,a,l)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var n=K,o=f;r(f,e);var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},c=function(){function a(i,l,d){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof l=="function"&&(d=l,l=s),typeof i=="object"&&(l=i,i=void 0),this.callback=i??null,this.options=l??s,this.elementCB=d??null}return a.prototype.onparserinit=function(i){this.parser=i},a.prototype.onreset=function(){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},a.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},a.prototype.onerror=function(i){this.handleCallback(i)},a.prototype.onclosetag=function(){this.lastNode=null;var i=this.tagStack.pop();this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(i)},a.prototype.onopentag=function(i,l){var d=this.options.xmlMode?n.ElementType.Tag:void 0,h=new o.Element(i,l,void 0,d);this.addNode(h),this.tagStack.push(h)},a.prototype.ontext=function(i){var l=this.lastNode;if(l&&l.type===n.ElementType.Text)l.data+=i,this.options.withEndIndices&&(l.endIndex=this.parser.endIndex);else{var d=new o.Text(i);this.addNode(d),this.lastNode=d}},a.prototype.oncomment=function(i){if(this.lastNode&&this.lastNode.type===n.ElementType.Comment){this.lastNode.data+=i;return}var l=new o.Comment(i);this.addNode(l),this.lastNode=l},a.prototype.oncommentend=function(){this.lastNode=null},a.prototype.oncdatastart=function(){var i=new o.Text(""),l=new o.CDATA([i]);this.addNode(l),i.parent=l,this.lastNode=i},a.prototype.oncdataend=function(){this.lastNode=null},a.prototype.onprocessinginstruction=function(i,l){var d=new o.ProcessingInstruction(i,l);this.addNode(d)},a.prototype.handleCallback=function(i){if(typeof this.callback=="function")this.callback(i,this.dom);else if(i)throw i},a.prototype.addNode=function(i){var l=this.tagStack[this.tagStack.length-1],d=l.children[l.children.length-1];this.options.withStartIndices&&(i.startIndex=this.parser.startIndex),this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),l.children.push(i),d&&(i.prev=d,d.next=i),i.parent=l,this.lastNode=null},a}();e.DomHandler=c,e.default=c})(J);var se="html",le="head",R="body",pt=/<([a-zA-Z]+[0-9]?)/,ce=/<head[^]*>/i,ue=/<body[^]*>/i,D=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},Y=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},fe=typeof window=="object"&&window.DOMParser;if(typeof fe=="function"){var ht=new fe,mt="text/html";Y=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),ht.parseFromString(e,mt)},D=Y}if(typeof document=="object"&&document.implementation){var I=document.implementation.createHTMLDocument();D=function(e,t){if(t){var r=I.documentElement.querySelector(t);return r.innerHTML=e,I}return I.documentElement.innerHTML=e,I}}var $=typeof document=="object"?document.createElement("template"):{},Z;$.content&&(Z=function(e){return $.innerHTML=e,$.content.childNodes});function vt(e){var t,r=e.match(pt);r&&r[1]&&(t=r[1].toLowerCase());var n,o,s;switch(t){case se:return n=Y(e),ce.test(e)||(o=n.querySelector(le),o&&o.parentNode.removeChild(o)),ue.test(e)||(o=n.querySelector(R),o&&o.parentNode.removeChild(o)),n.querySelectorAll(se);case le:case R:return n=D(e),s=n.querySelectorAll(t),ue.test(e)&&ce.test(e)?s[0].parentNode.childNodes:s;default:return Z?Z(e):(o=D(e,R).querySelector(R),o.childNodes)}}var gt=vt,te={},He={};He.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"];var F=J,yt=He,de=yt.CASE_SENSITIVE_TAG_NAMES,Et=F.Comment,xt=F.Element,Tt=F.ProcessingInstruction,bt=F.Text,Be={},W;for(var q=0,St=de.length;q<St;q++)W=de[q],Be[W.toLowerCase()]=W;function Ct(e){return Be[e]}function ze(e){for(var t={},r,n=0,o=e.length;n<o;n++)r=e[n],t[r.name]=r.value;return t}function wt(e){e=e.toLowerCase();var t=Ct(e);return t||e}function Ve(e,t,r){t=t||null;for(var n=[],o,s=0,c=e.length;s<c;s++){var a=e[s],i;switch(a.nodeType){case 1:o=wt(a.nodeName),i=new xt(o,ze(a.attributes)),i.children=Ve(o==="template"?a.content.childNodes:a.childNodes,i);break;case 3:i=new bt(a.nodeValue);break;case 8:i=new Et(a.nodeValue);break;default:continue}var l=n[s-1]||null;l&&(l.next=i),i.parent=t,i.prev=l,i.next=null,n.push(i)}return r&&(i=new Tt(r.substring(0,r.indexOf(" ")).toLowerCase(),r),i.next=n[0]||null,i.parent=t,n.unshift(i),n[1]&&(n[1].prev=n[0])),n}te.formatAttributes=ze;te.formatDOM=Ve;var Ot=gt,kt=te,At=kt.formatDOM,Nt=/<(![a-zA-Z\s]+)>/;function Pt(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(e==="")return[];var t=e.match(Nt),r;return t&&t[1]&&(r=t[1]),At(Ot(e),null,r)}var _t=Pt,E={},H={},Rt=0;H.SAME=Rt;var It=1;H.CAMELCASE=It;H.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};Object.defineProperty(E,"__esModule",{value:!0});function Dt(e,t){return Mt(e)||Lt(e,t)||jt(e,t)||Ft()}function Mt(e){if(Array.isArray(e))return e}function Lt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,s=!1,c,a;try{for(r=r.call(e);!(o=(c=r.next()).done)&&(n.push(c.value),!(t&&n.length===t));o=!0);}catch(i){s=!0,a=i}finally{try{!o&&r.return!=null&&r.return()}finally{if(s)throw a}}return n}}function jt(e,t){if(e){if(typeof e=="string")return pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return pe(e,t)}}function pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ue=0,w=1,B=2,z=3,re=4,Ge=5,Xe=6;function Ht(e){return v.hasOwnProperty(e)?v[e]:null}function g(e,t,r,n,o,s,c){this.acceptsBooleans=t===B||t===z||t===re,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=c}var v={},Bt=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];Bt.forEach(function(e){v[e]=new g(e,Ue,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=Dt(e,2),r=t[0],n=t[1];v[r]=new g(r,w,!1,n,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){v[e]=new g(e,B,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){v[e]=new g(e,B,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){v[e]=new g(e,z,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){v[e]=new g(e,z,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){v[e]=new g(e,re,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){v[e]=new g(e,Xe,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){v[e]=new g(e,Ge,!1,e.toLowerCase(),null,!1,!1)});var ne=/[\-\:]([a-z])/g,ie=function(t){return t[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(ne,ie);v[t]=new g(t,w,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(ne,ie);v[t]=new g(t,w,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ne,ie);v[t]=new g(t,w,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){v[e]=new g(e,w,!1,e.toLowerCase(),null,!1,!1)});var zt="xlinkHref";v[zt]=new g("xlinkHref",w,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){v[e]=new g(e,w,!1,e.toLowerCase(),null,!0,!0)});var ae=H,Vt=ae.CAMELCASE,Ut=ae.SAME,he=ae.possibleStandardNames,Gt=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Xt=Gt+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",$t=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Xt+"]*$")),Wt=Object.keys(he).reduce(function(e,t){var r=he[t];return r===Ut?e[t]=t:r===Vt?e[t.toLowerCase()]=t:e[t]=r,e},{});E.BOOLEAN=z;E.BOOLEANISH_STRING=B;E.NUMERIC=Ge;E.OVERLOADED_BOOLEAN=re;E.POSITIVE_NUMERIC=Xe;E.RESERVED=Ue;E.STRING=w;E.getPropertyInfo=Ht;E.isCustomAttribute=$t;E.possibleStandardNames=Wt;var $e={},oe={exports:{}},me=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,qt=/\n/g,Yt=/^\s*/,Zt=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Jt=/^:\s*/,Kt=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Qt=/^[;\s]*/,er=/^\s+|\s+$/g,tr=`
`,ve="/",ge="*",k="",rr="comment",nr="declaration",ir=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var r=1,n=1;function o(p){var u=p.match(qt);u&&(r+=u.length);var x=p.lastIndexOf(tr);n=~x?p.length-x:n+p.length}function s(){var p={line:r,column:n};return function(u){return u.position=new c(p),l(),u}}function c(p){this.start=p,this.end={line:r,column:n},this.source=t.source}c.prototype.content=e;function a(p){var u=new Error(t.source+":"+r+":"+n+": "+p);if(u.reason=p,u.filename=t.source,u.line=r,u.column=n,u.source=e,!t.silent)throw u}function i(p){var u=p.exec(e);if(u){var x=u[0];return o(x),e=e.slice(x.length),u}}function l(){i(Yt)}function d(p){var u;for(p=p||[];u=h();)u!==!1&&p.push(u);return p}function h(){var p=s();if(!(ve!=e.charAt(0)||ge!=e.charAt(1))){for(var u=2;k!=e.charAt(u)&&(ge!=e.charAt(u)||ve!=e.charAt(u+1));)++u;if(u+=2,k===e.charAt(u-1))return a("End of comment missing");var x=e.slice(2,u-2);return n+=2,o(x),e=e.slice(u),n+=2,p({type:rr,comment:x})}}function S(){var p=s(),u=i(Zt);if(u){if(h(),!i(Jt))return a("property missing ':'");var x=i(Kt),et=p({type:nr,property:ye(u[0].replace(me,k)),value:x?ye(x[0].replace(me,k)):k});return i(Qt),et}}function G(){var p=[];d(p);for(var u;u=S();)u!==!1&&(p.push(u),d(p));return p}return l(),G()};function ye(e){return e?e.replace(er,k):k}var ar=ir;function We(e,t){var r=null;if(!e||typeof e!="string")return r;for(var n,o=ar(e),s=typeof t=="function",c,a,i=0,l=o.length;i<l;i++)n=o[i],c=n.property,a=n.value,s?t(c,a,n):a&&(r||(r={}),r[c]=a);return r}oe.exports=We;oe.exports.default=We;var or=oe.exports,V={};V.__esModule=!0;V.camelCase=void 0;var sr=/^--[a-zA-Z0-9-]+$/,lr=/-([a-z])/g,cr=/^[^-]+$/,ur=/^-(webkit|moz|ms|o|khtml)-/,fr=/^-(ms)-/,dr=function(e){return!e||cr.test(e)||sr.test(e)},pr=function(e,t){return t.toUpperCase()},Ee=function(e,t){return"".concat(t,"-")},hr=function(e,t){return t===void 0&&(t={}),dr(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(fr,Ee):e=e.replace(ur,Ee),e.replace(lr,pr))};V.camelCase=hr;(function(e){var t=T&&T.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};e.__esModule=!0;var r=t(or),n=V;function o(s,c){var a={};return!s||typeof s!="string"||(0,r.default)(s,function(i,l){i&&l&&(a[(0,n.camelCase)(i,c)]=l)}),a}e.default=o})($e);var mr=A,vr=$e.default;function gr(e,t){if(!e||typeof e!="object")throw new TypeError("First argument must be an object");var r,n,o=typeof t=="function",s={},c={};for(r in e){if(n=e[r],o&&(s=t(r,n),s&&s.length===2)){c[s[0]]=s[1];continue}typeof n=="string"&&(c[n]=r)}return c}function yr(e,t){if(e.indexOf("-")===-1)return t&&typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Er={reactCompat:!0};function xr(e,t){if(e!=null)try{t.style=vr(e,Er)}catch{t.style={}}}var Tr=mr.version.split(".")[0]>=16,qe=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);function br(e){return!qe.has(e.name)}var Ye={PRESERVE_CUSTOM_ATTRIBUTES:Tr,invertObject:gr,isCustomComponent:yr,setStyleProp:xr,canTextBeChildOfNode:br,elementsWithNoTextChildren:qe},P=E,xe=Ye,Sr=["checked","value"],Cr=["input","select","textarea"],wr={reset:!0,submit:!0},Ze=function(t,r){t=t||{};var n,o,s,c,a,i={},l=t.type&&wr[t.type];for(n in t){if(s=t[n],P.isCustomAttribute(n)){i[n]=s;continue}if(o=n.toLowerCase(),c=Te(o),c){switch(a=P.getPropertyInfo(c),Sr.indexOf(c)!==-1&&Cr.indexOf(r)!==-1&&!l&&(c=Te("default"+o)),i[c]=s,a&&a.type){case P.BOOLEAN:i[c]=!0;break;case P.OVERLOADED_BOOLEAN:s===""&&(i[c]=!0);break}continue}xe.PRESERVE_CUSTOM_ATTRIBUTES&&(i[n]=s)}return xe.setStyleProp(t.style,i),i};function Te(e){return P.possibleStandardNames[e]}var Or=A,kr=Ze,M=Ye,Ar=M.setStyleProp,Nr=M.canTextBeChildOfNode;function Je(e,t){t=t||{};for(var r=t.library||Or,n=r.cloneElement,o=r.createElement,s=r.isValidElement,c=[],a,i,l=typeof t.replace=="function",d,h,S,G=t.trim,p=0,u=e.length;p<u;p++){if(a=e[p],l&&(d=t.replace(a),s(d))){u>1&&(d=n(d,{key:d.key||p})),c.push(d);continue}if(a.type==="text"){if(i=!a.data.trim().length,i&&a.parent&&!Nr(a.parent)||G&&i)continue;c.push(a.data);continue}switch(h=a.attribs,Pr(a)?Ar(h.style,h):h&&(h=kr(h,a.name)),S=null,a.type){case"script":case"style":a.children[0]&&(h.dangerouslySetInnerHTML={__html:a.children[0].data});break;case"tag":a.name==="textarea"&&a.children[0]?h.defaultValue=a.children[0].data:a.children&&a.children.length&&(S=Je(a.children,t));break;default:continue}u>1&&(h.key=p),c.push(o(a.name,h,S))}return c.length===1?c[0]:c}function Pr(e){return M.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&M.isCustomComponent(e.name,e.attribs)}var _r=Je,U=J,N=_t,Rr=Ze,Ke=_r;N=typeof N.default=="function"?N.default:N;var Ir={lowerCaseAttributeNames:!1};function b(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");return e===""?[]:(t=t||{},Ke(N(e,t.htmlparser2||Ir),t))}b.domToReact=Ke;b.htmlToDOM=N;b.attributesToProps=Rr;b.Comment=U.Comment;b.Element=U.Element;b.ProcessingInstruction=U.ProcessingInstruction;b.Text=U.Text;var Dr=b;b.default=b;const O=tt(Dr);O.domToReact;O.htmlToDOM;O.attributesToProps;O.Comment;O.Element;O.ProcessingInstruction;O.Text;const Qe=({categoryID:e})=>{const[t,r]=A.useState([]);return A.useEffect(()=>{async function n(){if(!e)return;const o=be(Ce(we,"posts"),Se("category.id","==",e),rt(3));Oe(o,s=>{const c=[];s.forEach(a=>{c.push({id:a.id,...a.data()})}),r(c)})}n()},[e]),e?m.jsxs("div",{className:"pb-20",children:[m.jsx(ut,{children:"similar blogs"}),m.jsx("div",{className:"grid gap-5 mt-10 md:grid-cols-3",children:t.length>0&&t.map(n=>m.jsx(at,{data:n},n.id))})]}):null};Qe.propTypes={categoryID:ct.string};const Wr=()=>{var a,i;const{slug:e}=nt(),[t,r]=A.useState({});A.useEffect(()=>{async function l(){if(!e)return;const d=be(Ce(we,"posts"),Se("slug","==",e));Oe(d,h=>{h.forEach(S=>{S.data()&&r(S.data())})})}l()},[e]),A.useEffect(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})},[e]);const n=(a=t==null?void 0:t.createdAt)!=null&&a.seconds?new Date(((i=t==null?void 0:t.createdAt)==null?void 0:i.seconds)*1e3):new Date,o=new Date(n).toLocaleDateString("vi-VI"),{category:s,user:c}=t;return e?t.title?m.jsx(it,{children:m.jsxs("div",{className:"page-container pt-[150px]",children:[m.jsxs("div",{className:"grid gap-5 mb-10 lg:grid-cols-2",children:[m.jsx(ot,{url:t==null?void 0:t.image,className:"rounded-md h-[250px] md:h-[360px] group"}),m.jsxs("div",{className:"p-5 rounded-lg border-gradient post-info bg-colorDarkRedux",children:[m.jsxs("div",{className:"flex items-center gap-5 mb-5",children:[m.jsx(st,{className:"px-6 py-2 ",children:s==null?void 0:s.title}),m.jsx("span",{className:"font-semibold md:text-xl",children:o})]}),m.jsx(lt,{className:"mb-5 text-xl md:text-4xl",children:t.title}),m.jsxs("div",{className:"flex items-center gap-5",children:[m.jsx("div",{className:"w-[80px] h-[80px] md:w-[150px] md:h-[150px] border-colorPrimary border-2 rounded-full",children:m.jsx("img",{className:"rounded-full imgCover ",style:{imageRendering:"pixelated"},src:c==null?void 0:c.avatar,alt:""})}),m.jsx("h1",{className:"text-2xl font-bold select-none md:text-4xl hover:opacity-80 text-linear",children:c==null?void 0:c.username})]})]})]}),m.jsx("div",{className:"post-content",children:m.jsx("div",{className:"entry-content",children:O(t.content||"")})}),m.jsx(Qe,{categoryID:s==null?void 0:s.id})]})}):null:m.jsx(ft,{})};export{Wr as default};
