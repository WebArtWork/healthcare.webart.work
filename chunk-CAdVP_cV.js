import{$ as Lw,$t as Yc,Ar as wL,At as TI,Bn as ih,Bt as WE,C as Fw,D as Gp,Dn as g,En as fr,G as Kl,Gn as kE,Jt as Xp,Kn as km,L as JE,Ln as hh,Qn as mL,Qt as YI,Rr as yL,Rt as Vp,S as Fp,Tr as uf,Ur as zp,W as Kc,Wr as zr,X as LI,Zn as mE,Zt as YE,bt as Qc,c as BI,d as Bp,dr as pL,dt as O,f as C,fr as pe$1,ft as OE,gn as d1,i as $p,j as Hp,jn as ge,jt as Tw,k as Hi,kn as gI,ln as _w,mt as Op,nn as ZE,rt as Mi,s as Av,sr as oh,un as ad,vt as Pw,wn as fL,wr as uE,xn as et,yr as qp}from"./chunk-4vRXMirL.js";import{D as Vi,F as di,L as ee$1,N as an,O as Wi,Q as pt,R as en,_ as Mn,ct as xi,d as He$1,f as Hi$1,g as Ls,h as Ki,k as Xi,lt as y,m as Ji,n as $s,o as Dn,r as At,s as Fi,u as Gn,ut as z,v as Ms}from"./chunk-k8ThtpBn.js";import{B as S}from"./main-AUEAO2SO.js";import{t as H}from"./chunk-jYpAQAqB.js";var xt=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=` `+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.trim().split(` `);for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=e.split(` `);for(let i=0;i<n.length;i++)t.className+=` `+n[i]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp(`(^|\\b)`+e.split(` `).join(`|`)+`(\\b|$)`,`gi`),` `))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(n=>n.split(` `).forEach(i=>this.removeClass(t,i)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp(`(^| )`+e+`( |$)`,`gi`).test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,n=0;for(let i=0;i<e.length;i++){if(e[i]==t)return n;e[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,e){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(let r=0;r<n.length;r++){if(n[r]==t)return i;n[r].attributes&&n[r].attributes[e]&&n[r].nodeType==1&&i++}return-1}static appendOverlay(t,e,n=`self`){n!==`self`&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,n=`self`,i=!0){t&&e&&(i&&(t.style.minWidth=`${o.getOuterWidth(e)}px`),n===`self`?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,n=!0){let i=L=>{if(L)return getComputedStyle(L).getPropertyValue(`position`)===`relative`?L:i(L.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=e.offsetHeight,s=e.getBoundingClientRect(),m=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),p=this.getViewport(),g=i(t)?.getBoundingClientRect()||{top:-1*m,left:-1*c},C,P,K=`top`;s.top+a+r.height>p.height?(C=s.top-g.top-r.height,K=`bottom`,s.top+C<0&&(C=-1*s.top)):(C=a+s.top-g.top,K=`top`);let St=s.left+r.width-p.width,ge=s.left-g.left;if(r.width>p.width?P=(s.left-g.left)*-1:St>0?P=ge-St:P=s.left-g.left,t.style.top=C+`px`,t.style.left=P+`px`,t.style.transformOrigin=K,n){let L=He$1(/-anchor-gutter$/)?.value;t.style.marginTop=K===`bottom`?`calc(${L??`2px`} * -1)`:L??``}}static absolutePosition(t,e,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=i.height,a=i.width,s=e.offsetHeight,m=e.offsetWidth,c=e.getBoundingClientRect(),p=this.getWindowScrollTop(),w=this.getWindowScrollLeft(),g=this.getViewport(),C,P;c.top+s+r>g.height?(C=c.top+p-r,t.style.transformOrigin=`bottom`,C<0&&(C=p)):(C=s+c.top+p,t.style.transformOrigin=`top`),c.left+a>g.width?P=Math.max(0,c.left+w+m-a):P=c.left+w,t.style.top=C+`px`,t.style.left=P+`px`,n&&(t.style.marginTop=origin===`bottom`?`calc(var(--p-anchor-gutter) * -1)`:`calc(var(--p-anchor-gutter))`)}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,r=a=>{let s=window.getComputedStyle(a,null);return i.test(s.getPropertyValue(`overflow`))||i.test(s.getPropertyValue(`overflowX`))||i.test(s.getPropertyValue(`overflowY`))};for(let a of n){let s=a.nodeType===1&&a.dataset.scrollselectors;if(s){let m=s.split(`,`);for(let c of m){let p=this.findSingle(a,c);p&&r(p)&&e.push(p)}}a.nodeType!==9&&r(a)&&e.push(a)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility=`hidden`,t.style.display=`block`;let e=t.offsetHeight;return t.style.display=`none`,t.style.visibility=`visible`,e}static getHiddenElementOuterWidth(t){t.style.visibility=`hidden`,t.style.display=`block`;let e=t.offsetWidth;return t.style.display=`none`,t.style.visibility=`visible`,e}static getHiddenElementDimensions(t){let e={};return t.style.visibility=`hidden`,t.style.display=`block`,e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display=`none`,t.style.visibility=`visible`,e}static scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue(`borderTopWidth`),i=n?parseFloat(n):0,r=getComputedStyle(t).getPropertyValue(`paddingTop`),a=r?parseFloat(r):0,s=t.getBoundingClientRect(),c=e.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-i-a,p=t.scrollTop,w=t.clientHeight,g=this.getOuterHeight(e);c<0?t.scrollTop=p+c:c+g>w&&(t.scrollTop=p+c-w+g)}static fadeIn(t,e){t.style.opacity=0;let n=+new Date,i=0,r=function(){i=+t.style.opacity.replace(`,`,`.`)+(new Date().getTime()-n)/e,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,e){let n=1,i=50,a=i/e,s=setInterval(()=>{n=n-a,n<=0&&(n=0,clearInterval(s)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){let n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1}).call(t,e)}static getOuterWidth(t,e){let n=t.offsetWidth;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static width(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),e}static getOuterHeight(t,e){let n=t.offsetHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}static getViewport(){let t=window,e=document,n=e.documentElement,i=e.getElementsByTagName(`body`)[0];return{width:t.innerWidth||n.clientWidth||i.clientWidth,height:t.innerHeight||n.clientHeight||i.clientHeight}}static getOffset(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let n=t.parentNode;if(!n)throw`Can't replace element`;return n.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){let t=window.navigator.userAgent;return t.indexOf(`MSIE `)>0||t.indexOf(`Trident/`)>0||t.indexOf(`Edge/`)>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return`ontouchstart`in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw`Cannot append `+e+` to `+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw`Cannot remove `+t+` from `+e}static removeElement(t){`remove`in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement==`object`?t instanceof HTMLElement:t&&typeof t==`object`&&t!==null&&t.nodeType===1&&typeof t.nodeName==`string`}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement(`div`);e.className=`p-scrollbar-measure`,document.body.appendChild(e);let n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement(`div`);t.className=`p-scrollbar-measure`,document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,n){t[e].apply(t,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(t){}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ /]([\w.]+)/.exec(t)||/(webkit)[ /]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ /]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf(`compatible`)<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||``,version:e[2]||`0`}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t==`number`&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<`u`&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=``){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=``){let n=this.find(t,this.getFocusableSelectorString(e)),i=[];for(let r of n){let a=getComputedStyle(r);this.isVisible(r)&&a.display!=`none`&&a.visibility!=`hidden`&&i.push(r)}return i}static getFocusableElement(t,e=``){let n=this.findSingle(t,this.getFocusableSelectorString(e));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!=`none`&&i.visibility!=`hidden`)return n}return null}static getFirstFocusableElement(t,e=``){let n=this.getFocusableElements(t,e);return n.length>0?n[0]:null}static getLastFocusableElement(t,e){let n=this.getFocusableElements(t,e);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,e=!1){let n=o.getFocusableElements(t),i=0;if(n&&n.length>0){let r=n.indexOf(n[0].ownerDocument.activeElement);e?r==-1||r===0?i=n.length-1:i=r-1:r!=-1&&r!==n.length-1&&(i=r+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case`document`:return document;case`window`:return window;case`@next`:return e?.nextElementSibling;case`@prev`:return e?.previousElementSibling;case`@parent`:return e?.parentElement;case`@grandparent`:return e?.parentElement?.parentElement;default:{let n=typeof t;if(n===`string`)return document.querySelector(t);if(n===`object`&&Object.prototype.hasOwnProperty.call(t,`nativeElement`))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}}static isClient(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let n=t.getAttribute(e);return isNaN(n)?n===`true`||n===`false`?n===`true`:n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t=`p-overflow-hidden`){document.body.style.setProperty(`--scrollbar-width`,this.calculateBodyScrollbarWidth()+`px`),this.addClass(document.body,t)}static unblockBodyScroll(t=`p-overflow-hidden`){document.body.style.removeProperty(`--scrollbar-width`),this.removeClass(document.body,t)}static createElement(t,e={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,e),i.append(...n),i}}static setAttribute(t,e=``,n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}static setAttributes(t,e={}){if(this.isElement(t)){let n=(i,r)=>{let a=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[r].flat().reduce((s,m)=>{if(m!=null){let c=typeof m;if(c===`string`||c===`number`)s.push(m);else if(c===`object`){let p=Array.isArray(m)?n(i,m):Object.entries(m).map(([w,g])=>i===`style`&&(g||g===0)?`${w.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}:${g}`:g?w:void 0);s=p.length?s.concat(p.filter(w=>!!w)):s}}return s},a)};Object.entries(e).forEach(([i,r])=>{if(r!=null){let a=i.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),r):i===`pBind`?this.setAttributes(t,r):(r=i===`class`?[...new Set(n(`class`,r))].join(` `).trim():i===`style`?n(`style`,r).join(`;`).trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}static isFocusableElement(t,e=``){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return o})();function qe(){Hi$1({variableName:Gn(`scrollbar.width`).name})}var Xt=class{element;listener;scrollableParents;constructor(l,t=()=>{}){this.element=l,this.listener=t}bindScrollListener(){this.scrollableParents=xt.getScrollableParents(this.element);for(let l=0;l<this.scrollableParents.length;l++)this.scrollableParents[l].addEventListener(`scroll`,this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let l=0;l<this.scrollableParents.length;l++)this.scrollableParents[l].removeEventListener(`scroll`,this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Yt=(()=>{class o extends Ls{autofocus=pL(!1,{alias:`pAutoFocus`});focused=!1;platformId=g(km);document=g(pe$1);host=g(et);onAfterContentChecked(){this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){d1(this.platformId)&&this.autofocus()&&setTimeout(()=>{let t=xt.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static ɵfac=(()=>{let t;return function(n){return(t||(t=uf(o)))(n||o)}})();static ɵdir=zr({type:o,selectors:[[``,`pAutoFocus`,``]],hostVars:1,hostBindings:function(e,n){e&2&&Bp(`autofocus`,n.autofocus()?`true`:null)},inputs:{autofocus:[1,`pAutoFocus`,`autofocus`]},features:[Op]})}return o})();var fe=`
    
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }


    /* For ngx-prime (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`;var me={root:({instance:o})=>{let l=typeof o.value==`function`?o.value():o.value,t=typeof o.size==`function`?o.size():o.size,e=typeof o.badgeSize==`function`?o.badgeSize():o.badgeSize,n=typeof o.severity==`function`?o.severity():o.severity;return[`p-badge p-component`,{"p-badge-circle":y(l)&&String(l).length===1,"p-badge-dot":ee$1(l),"p-badge-sm":t===`small`||e===`small`,"p-badge-lg":t===`large`||e===`large`,"p-badge-xl":t===`xlarge`||e===`xlarge`,"p-badge-info":n===`info`,"p-badge-success":n===`success`,"p-badge-warn":n===`warn`,"p-badge-danger":n===`danger`,"p-badge-secondary":n===`secondary`,"p-badge-contrast":n===`contrast`}]}};var Kt=(()=>{class o extends z{name=`badge`;style=fe;classes=me;static ɵfac=(()=>{let t;return function(n){return(t||(t=uf(o)))(n||o)}})();static ɵprov=O({token:o,factory:o.ɵfac})}return o})();var te=new C(`BADGE_INSTANCE`);var kt=(()=>{class o extends Ls{componentName=`Badge`;$pcBadge=g(te,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=pL();badgeSize=pL();size=pL();severity=pL();value=pL();badgeDisabled=pL(!1,{transform:Tw});ariaLabel=pL();ariaLabelledBy=pL();_componentStyle=g(Kt);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=uf(o)))(n||o)}})();static ɵcmp=uE({type:o,selectors:[[`p-badge`]],hostVars:7,hostBindings:function(e,n){e&2&&(Bp(`data-p`,n.dataP)(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy()),gI(n.cn(n.cx(`root`),n.styleClass())),oh(`display`,n.badgeDisabled()?`none`:null))},inputs:{styleClass:[1,`styleClass`],badgeSize:[1,`badgeSize`],size:[1,`size`],severity:[1,`severity`],value:[1,`value`],badgeDisabled:[1,`badgeDisabled`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},features:[LI([Kt,{provide:te,useExisting:o},{provide:xi,useExisting:o}]),mE([Ms]),Op],decls:1,vars:1,template:function(e,n){e&1&&TI(0),e&2&&hh(n.value())},dependencies:[Mn,$s],encapsulation:2})}return o})();var ee=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Hi({type:o});static ɵinj=fr({imports:[kt,Mn,Mn]})}return o})();var ne=(()=>{class o extends S{pathId;onInit(){this.pathId=`url(#`+At()+`)`}static ɵfac=(()=>{let t;return function(n){return(t||(t=uf(o)))(n||o)}})();static ɵcmp=uE({type:o,selectors:[[``,`data-p-icon`,`spinner`]],features:[Op],decls:5,vars:2,consts:[[`d`,`M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(e,n){e&1&&(Kl(),Qc(0,`g`),$p(1,`path`,0),Kc(),Qc(2,`defs`)(3,`clipPath`,1),$p(4,`rect`,2),Kc()()),e&2&&(Bp(`clip-path`,n.pathId),Av(3),Gp(`id`,n.pathId))},encapsulation:2})}return o})();var ve=`
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For ngx-prime */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var we={root:`p-ink`};var ie=(()=>{class o extends z{name=`ripple`;style=ve;classes=we;static ɵfac=(()=>{let t;return function(n){return(t||(t=uf(o)))(n||o)}})();static ɵprov=O({token:o,factory:o.ɵfac})}return o})();var re=(()=>{class o extends Ls{componentName=`Ripple`;zone=g(ge);_componentStyle=g(ie);animationListener;mouseDownListener;timeout;constructor(){super(),ad(()=>{d1(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display===`none`)return;if(!this.$unstyled()&&pt(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`false`),!Xi(e)&&!en(e)){let a=Math.max(Wi(this.el.nativeElement),di(this.el.nativeElement));e.style.height=a+`px`,e.style.width=a+`px`}let n=Ji(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-en(e)/2,r=t.pageY-n.top+this.document.body.scrollLeft-Xi(e)/2;this.renderer.setStyle(e,`top`,r+`px`),this.renderer.setStyle(e,`left`,i+`px`),!this.$unstyled()&&Fi(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&pt(a,`p-ink-active`),a.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className==`string`&&t[e].className.indexOf(`p-ink`)!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&pt(t,`p-ink-active`),t.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&pt(t.currentTarget,`p-ink-active`),t.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let t=this.renderer.createElement(`span`);this.renderer.addClass(t,`p-ink`),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,`data-p-ink`,`true`),this.renderer.setAttribute(t,`data-p-ink-active`,`false`),this.renderer.setAttribute(t,`aria-hidden`,`true`),this.renderer.setAttribute(t,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(t,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,an(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(e){return new(e||o)};static ɵdir=zr({type:o,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[LI([ie]),Op]})}return o})();var de=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Ce=[`content`];var xe=[`loadingicon`];var ke=[`icon`];var Se=[`*`];var pe=(o,l)=>({class:o,pt:l});function Be(o,l){o&1&&zp(0)}function Ee(o,l){if(o&1&&Hp(0,`span`,5),o&2){let t=WE(3);gI(t.cn(t.cx(`loadingIcon`),`pi-spin`,t.loadingIcon()||t.buttonProps()?.loadingIcon)),Vp(`pBind`,t.ptm(`loadingIcon`)),Bp(`aria-hidden`,!0)}}function De(o,l){if(o&1&&(Kl(),Hp(0,`svg`,6)),o&2){let t=WE(3);gI(t.cn(t.cx(`loadingIcon`),t.cx(`spinnerIcon`))),Vp(`pBind`,t.ptm(`loadingIcon`))(`spin`,!0),Bp(`aria-hidden`,!0)}}function Te(o,l){if(o&1&&OE(0,Ee,1,4,`span`,2)(1,De,1,5,`:svg:svg`,4),o&2){let t=WE(2);kE(t.loadingIcon()||t.buttonProps()?.loadingIcon?0:1)}}function Ie(o,l){}function Ne(o,l){o&1&&Fp(0,Ie,0,0,`ng-template`)}function Pe(o,l){if(o&1&&Fp(0,Ne,1,0,null,7),o&2){let t=WE(2);Vp(`ngTemplateOutlet`,t.loadingIconTemplate()||t._loadingIconTemplate)(`ngTemplateOutletContext`,BI(2,pe,t.cx(`loadingIcon`),t.ptm(`loadingIcon`)))}}function _e(o,l){if(o&1&&(OE(0,Te,2,1),OE(1,Pe,1,5)),o&2){let t=WE();kE(!t.loadingIconTemplate()&&!t._loadingIconTemplate?0:-1),Av(),kE(t.loadingIconTemplate()||t._loadingIconTemplate?1:-1)}}function Me(o,l){if(o&1&&Hp(0,`span`,5),o&2){let t=WE(2);gI(t.cn(t.cx(`icon`),t.icon()||t.buttonProps()?.icon)),Vp(`pBind`,t.ptm(`icon`)),Bp(`data-p`,t.dataIconP)}}function Fe(o,l){}function Le(o,l){o&1&&Fp(0,Fe,0,0,`ng-template`)}function Ae(o,l){if(o&1&&Fp(0,Le,1,0,null,7),o&2){let t=WE(2);Vp(`ngTemplateOutlet`,t.iconTemplate()||t._iconTemplate)(`ngTemplateOutletContext`,BI(2,pe,t.cx(`icon`),t.ptm(`icon`)))}}function ze(o,l){if(o&1&&(OE(0,Me,1,4,`span`,2),OE(1,Ae,1,5)),o&2){let t=WE();kE((t.icon()||t.buttonProps()?.icon)&&!t.iconTemplate()&&!t._iconTemplate?0:-1),Av(),kE(!t.icon()&&(t.iconTemplate()||t._iconTemplate)?1:-1)}}function Oe(o,l){if(o&1&&(Mi(0,`span`,5),TI(1),Yc()),o&2){let t=WE();gI(t.cx(`label`)),Vp(`pBind`,t.ptm(`label`)),Bp(`aria-hidden`,(t.icon()||t.buttonProps()?.icon)&&!(t.label()||t.buttonProps()?.label))(`data-p`,t.dataLabelP),Av(),hh(t.label()||t.buttonProps()?.label)}}function $e(o,l){if(o&1&&Hp(0,`p-badge`,3),o&2){let t=WE();Vp(`value`,t.badge()||t.buttonProps()?.badge)(`severity`,t.badgeSeverity()||t.buttonProps()?.badgeSeverity)(`pt`,t.ptm(`pcBadge`))(`unstyled`,t.unstyled())}}var He={root:({instance:o})=>[`p-button p-component`,{"p-button-icon-only":o.hasIcon&&!o.label()&&!o.buttonProps()?.label&&!o.badge(),"p-button-vertical":(o.iconPos()===`top`||o.iconPos()===`bottom`)&&o.label(),"p-button-loading":o.loading()||o.buttonProps()?.loading,"p-button-link":o.link()||o.buttonProps()?.link,[`p-button-${o.severity()||o.buttonProps()?.severity}`]:o.severity()||o.buttonProps()?.severity,"p-button-raised":o.raised()||o.buttonProps()?.raised,"p-button-rounded":o.rounded()||o.buttonProps()?.rounded,"p-button-text":o.text()||o.variant()===`text`||o.buttonProps()?.text||o.buttonProps()?.variant===`text`,"p-button-outlined":o.outlined()||o.variant()===`outlined`||o.buttonProps()?.outlined||o.buttonProps()?.variant===`outlined`,"p-button-sm":o.size()===`small`||o.buttonProps()?.size===`small`,"p-button-lg":o.size()===`large`||o.buttonProps()?.size===`large`,"p-button-plain":o.plain()||o.buttonProps()?.plain,"p-button-fluid":o.hasFluid}],loadingIcon:`p-button-loading-icon`,icon:({instance:o})=>[`p-button-icon`,{[`p-button-icon-${o.iconPos()||o.buttonProps()?.iconPos}`]:o.label()||o.buttonProps()?.label,"p-button-icon-left":(o.iconPos()===`left`||o.buttonProps()?.iconPos===`left`)&&o.label()||o.buttonProps()?.label,"p-button-icon-right":(o.iconPos()===`right`||o.buttonProps()?.iconPos===`right`)&&o.label()||o.buttonProps()?.label,"p-button-icon-top":(o.iconPos()===`top`||o.buttonProps()?.iconPos===`top`)&&o.label()||o.buttonProps()?.label,"p-button-icon-bottom":(o.iconPos()===`bottom`||o.buttonProps()?.iconPos===`bottom`)&&o.label()||o.buttonProps()?.label},o.icon(),o.buttonProps()?.icon],spinnerIcon:({instance:o})=>Object.entries(o.cx(`icon`)).filter(([,l])=>!!l).reduce((l,[t])=>l+` ${t}`,`p-button-loading-icon`),label:`p-button-label`};var Z=(()=>{class o extends z{name=`button`;style=de;classes=He;static ɵfac=(()=>{let t;return function(n){return(t||(t=uf(o)))(n||o)}})();static ɵprov=O({token:o,factory:o.ɵfac})}return o})();var ae=new C(`BUTTON_INSTANCE`);var le=new C(`BUTTON_DIRECTIVE_INSTANCE`);var se=new C(`BUTTON_LABEL_INSTANCE`);var ue=new C(`BUTTON_ICON_INSTANCE`);var F={button:`p-button`,component:`p-component`,iconOnly:`p-button-icon-only`,disabled:`p-disabled`,loading:`p-button-loading`,labelOnly:`p-button-loading-label-only`};var ce=(()=>{class o extends Ls{componentName=`ButtonLabel`;ptButtonLabel=pL();pButtonLabelPT=pL();pButtonLabelUnstyled=pL();$pcButtonLabel=g(se,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});constructor(){super(),ad(()=>{let t=this.ptButtonLabel()||this.pButtonLabelPT();t&&this.directivePT.set(t)}),ad(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(e){return new(e||o)};static ɵdir=zr({type:o,selectors:[[``,`pButtonLabel`,``]],hostVars:2,hostBindings:function(e,n){e&2&&ih(`p-button-label`,!n.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,`ptButtonLabel`],pButtonLabelPT:[1,`pButtonLabelPT`],pButtonLabelUnstyled:[1,`pButtonLabelUnstyled`]},features:[LI([Z,{provide:se,useExisting:o},{provide:xi,useExisting:o}]),mE([Ms]),Op]})}return o})();var be=(()=>{class o extends Ls{componentName=`ButtonIcon`;ptButtonIcon=pL();pButtonIconPT=pL();pButtonUnstyled=pL();$pcButtonIcon=g(ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});constructor(){super(),ad(()=>{let t=this.ptButtonIcon()||this.pButtonIconPT();t&&this.directivePT.set(t)}),ad(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(e){return new(e||o)};static ɵdir=zr({type:o,selectors:[[``,`pButtonIcon`,``]],hostVars:2,hostBindings:function(e,n){e&2&&ih(`p-button-icon`,!n.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,`ptButtonIcon`],pButtonIconPT:[1,`pButtonIconPT`],pButtonUnstyled:[1,`pButtonUnstyled`]},features:[LI([Z,{provide:ue,useExisting:o},{provide:xi,useExisting:o}]),mE([Ms]),Op]})}return o})();var Jn=(()=>{class o extends Ls{componentName=`Button`;$pcButtonDirective=g(le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});_componentStyle=g(Z);ptButtonDirective=pL();pButtonPT=pL();pButtonUnstyled=pL();hostName=pL(``);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}constructor(){super(),ad(()=>{let t=this.ptButtonDirective()||this.pButtonPT();t&&this.directivePT.set(t)}),ad(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),ad(()=>{let t=this.$unstyled();this.initialized&&t&&this.setStyleClass()}),ad(()=>{this._label=this.label(),this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}),ad(()=>{this._icon=this.icon(),this.initialized&&(this.updateIcon(),this.setStyleClass())}),ad(()=>{this._loading=this.loading(),this.initialized&&(this.updateIcon(),this.setStyleClass()),this._loading?this.renderer.setAttribute(this.htmlElement,`aria-busy`,`true`):this.renderer.removeAttribute(this.htmlElement,`aria-busy`)}),ad(()=>{this._severity=this.severity(),this.initialized&&this.setStyleClass()}),ad(()=>{let t=this.buttonProps();this._buttonProps=t,t&&typeof t==`object`&&Object.entries(t).forEach(([e,n])=>this[`_${e}`]!==n&&(this[`_${e}`]=n))})}text=pL(!1,{transform:Tw});plain=pL(!1,{transform:Tw});raised=pL(!1,{transform:Tw});size=pL();outlined=pL(!1,{transform:Tw});rounded=pL(!1,{transform:Tw});iconPos=pL(`left`);loadingIcon=pL();fluid=pL(void 0,{transform:Tw});iconSignal=mL(be);labelSignal=mL(ce);isIconOnly=YI(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(F);pcFluid=g(H,{optional:!0,host:!0,skipSelf:!0});isTextButton=YI(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text()));label=pL();icon=pL();loading=pL(!1);buttonProps=pL();severity=pL();spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){!this.$unstyled()&&Fi(this.htmlElement,this.getStyleClass().join(` `)),d1(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let t=[F.button,F.component];this._icon&&!this._label&&ee$1(this.htmlElement.textContent)&&t.push(F.iconOnly),this._loading&&(t.push(F.disabled,F.loading),!this._icon&&this._label&&t.push(F.labelOnly),this._icon&&!this._label&&!ee$1(this.htmlElement.textContent)&&t.push(F.iconOnly)),this.text()&&t.push(`p-button-text`),this._severity&&t.push(`p-button-${this._severity}`),this.plain()&&t.push(`p-button-plain`),this.raised()&&t.push(`p-button-raised`);let e=this.size();return e&&t.push(`p-button-${e}`),this.outlined()&&t.push(`p-button-outlined`),this.rounded()&&t.push(`p-button-rounded`),e===`small`&&t.push(`p-button-sm`),e===`large`&&t.push(`p-button-lg`),this.hasFluid&&t.push(`p-button-fluid`),this.$unstyled()?[]:t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=[`success`,`info`,`warn`,`danger`,`help`,`primary`,`secondary`,`contrast`],e=this.htmlElement.classList.value.split(` `).find(n=>t.some(i=>n===`p-button-${i}`));e&&this.htmlElement.classList.remove(e)}createLabel(){if(!Ki(this.htmlElement,`[data-pc-section="buttonlabel"]`)&&this._label){let e=Vi(`span`,{class:this.cx(`label`),"p-bind":this.ptm(`buttonlabel`),"aria-hidden":this._icon&&!this._label?`true`:null});e.appendChild(this.document.createTextNode(this._label)),this.htmlElement.appendChild(e)}}createIcon(){if(!Ki(this.htmlElement,`[data-pc-section="buttonicon"]`)&&(this._icon||this._loading)){let e=this._label&&!this.$unstyled()?`p-button-icon-`+this.iconPos():null,n=!this.$unstyled()&&this.getIconClass(),i=Vi(`span`,{class:this.cn(this.cx(`icon`),e,n),"aria-hidden":`true`,"p-bind":this.ptm(`buttonicon`)});!this.loadingIcon()&&this._loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let t=Ki(this.htmlElement,`[data-pc-section="buttonlabel"]`);if(!this._label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this._label:this.createLabel()}updateIcon(){let t=Ki(this.htmlElement,`[data-pc-section="buttonicon"]`),e=Ki(this.htmlElement,`[data-pc-section="buttonlabel"]`);if(this._loading&&!this.loadingIcon()&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=``),t&&!this.$unstyled()){let n=this.iconPos();n?t.className=`p-button-icon `+(e?`p-button-icon-`+n:``)+` `+this.getIconClass():t.className=`p-button-icon `+this.getIconClass()}else this.createIcon()}getIconClass(){let t=this.loadingIcon();return this._loading?`p-button-loading-icon `+(t||`p-icon`):this._icon||`p-hidden`}onDestroy(){this.initialized=!1}static ɵfac=function(e){return new(e||o)};static ɵdir=zr({type:o,selectors:[[``,`pButton`,``]],contentQueries:function(e,n,i){e&1&&Xp(i,n.iconSignal,be,5)(i,n.labelSignal,ce,5),e&2&&JE(2)},hostVars:4,hostBindings:function(e,n){e&2&&ih(`p-button-icon-only`,!n.$unstyled()&&n.isIconOnly())(`p-button-text`,!n.$unstyled()&&n.isTextButton())},inputs:{ptButtonDirective:[1,`ptButtonDirective`],pButtonPT:[1,`pButtonPT`],pButtonUnstyled:[1,`pButtonUnstyled`],hostName:[1,`hostName`],text:[1,`text`],plain:[1,`plain`],raised:[1,`raised`],size:[1,`size`],outlined:[1,`outlined`],rounded:[1,`rounded`],iconPos:[1,`iconPos`],loadingIcon:[1,`loadingIcon`],fluid:[1,`fluid`],label:[1,`label`],icon:[1,`icon`],loading:[1,`loading`],buttonProps:[1,`buttonProps`],severity:[1,`severity`]},features:[LI([Z,{provide:le,useExisting:o},{provide:xi,useExisting:o}]),mE([Ms]),Op]})}return o})();var We=(()=>{class o extends Ls{componentName=`Button`;hostName=pL(``);$pcButton=g(ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});_componentStyle=g(Z);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}constructor(){super(),wL()&&console.warn("`<p-button>` is deprecated and will be removed in a future major version. Use a plain `<button pButton>` (or `<a pButton>`) with the `pButton` styling directive instead.")}type=pL(`button`);badge=pL();disabled=pL(void 0,{transform:Tw});raised=pL(!1,{transform:Tw});rounded=pL(!1,{transform:Tw});text=pL(!1,{transform:Tw});plain=pL(!1,{transform:Tw});outlined=pL(!1,{transform:Tw});link=pL(!1,{transform:Tw});tabindex=pL(void 0,{transform:_w});size=pL();variant=pL();style=pL();styleClass=pL();badgeClass=pL();badgeSeverity=pL(`secondary`);ariaLabel=pL();autofocus=pL(void 0,{transform:Tw});iconPos=pL(`left`);icon=pL();label=pL();loading=pL(!1,{transform:Tw});loadingIcon=pL();severity=pL();buttonProps=pL();fluid=pL(void 0,{transform:Tw});onClick=fL();onFocus=fL();onBlur=fL();contentTemplate=mL(`content`);loadingIconTemplate=mL(`loadingicon`);iconTemplate=mL(`icon`);templates=yL(Dn);pcFluid=g(H,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon()||this.buttonProps()?.icon||this.iconTemplate()||this._iconTemplate||this.loadingIcon()||this.loadingIconTemplate()||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates()?.forEach(t=>{switch(t.getType()){case`content`:this._contentTemplate=t.template;break;case`icon`:this._iconTemplate=t.template;break;case`loadingicon`:this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){let t=this.iconPos();return this.cn({[this.size()]:this.size(),"icon-only":this.hasIcon&&!this.label()&&!this.badge(),loading:this.loading(),fluid:this.hasFluid,rounded:this.rounded(),raised:this.raised(),outlined:this.outlined()||this.variant()===`outlined`,text:this.text()||this.variant()===`text`,link:this.link(),vertical:(t===`top`||t===`bottom`)&&this.label()})}get dataIconP(){return this.cn({[this.iconPos()]:this.iconPos(),[this.size()]:this.size()})}get dataLabelP(){return this.cn({[this.size()]:this.size(),"icon-only":this.hasIcon&&!this.label()&&!this.badge()})}static ɵfac=function(e){return new(e||o)};static ɵcmp=uE({type:o,selectors:[[`p-button`]],contentQueries:function(e,n,i){e&1&&Xp(i,n.contentTemplate,Ce,5)(i,n.loadingIconTemplate,xe,5)(i,n.iconTemplate,ke,5)(i,n.templates,Dn,4),e&2&&JE(4)},inputs:{hostName:[1,`hostName`],type:[1,`type`],badge:[1,`badge`],disabled:[1,`disabled`],raised:[1,`raised`],rounded:[1,`rounded`],text:[1,`text`],plain:[1,`plain`],outlined:[1,`outlined`],link:[1,`link`],tabindex:[1,`tabindex`],size:[1,`size`],variant:[1,`variant`],style:[1,`style`],styleClass:[1,`styleClass`],badgeClass:[1,`badgeClass`],badgeSeverity:[1,`badgeSeverity`],ariaLabel:[1,`ariaLabel`],autofocus:[1,`autofocus`],iconPos:[1,`iconPos`],icon:[1,`icon`],label:[1,`label`],loading:[1,`loading`],loadingIcon:[1,`loadingIcon`],severity:[1,`severity`],buttonProps:[1,`buttonProps`],fluid:[1,`fluid`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[LI([Z,{provide:ae,useExisting:o},{provide:xi,useExisting:o}]),mE([Ms]),Op],ngContentSelectors:Se,decls:7,vars:17,consts:[[`pRipple`,``,3,`click`,`focus`,`blur`,`ngStyle`,`disabled`,`pAutoFocus`,`pBind`],[4,`ngTemplateOutlet`],[3,`class`,`pBind`],[3,`value`,`severity`,`pt`,`unstyled`],[`data-p-icon`,`spinner`,3,`class`,`pBind`,`spin`],[3,`pBind`],[`data-p-icon`,`spinner`,3,`pBind`,`spin`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(e,n){e&1&&(ZE(),Mi(0,`button`,0),qp(`click`,function(r){return n.onClick.emit(r)})(`focus`,function(r){return n.onFocus.emit(r)})(`blur`,function(r){return n.onBlur.emit(r)}),YE(1),Fp(2,Be,1,0,`ng-container`,1),OE(3,_e,2,2)(4,ze,2,2),OE(5,Oe,2,6,`span`,2),OE(6,$e,1,4,`p-badge`,3),Yc()),e&2&&(gI(n.cn(n.cx(`root`),n.styleClass(),n.buttonProps()?.styleClass)),Vp(`ngStyle`,n.style()||n.buttonProps()?.style)(`disabled`,n.disabled()||n.loading()||n.buttonProps()?.disabled)(`pAutoFocus`,n.autofocus()||n.buttonProps()?.autofocus)(`pBind`,n.ptm(`root`)),Bp(`type`,n.type()||n.buttonProps()?.type)(`aria-label`,n.ariaLabel()||n.buttonProps()?.ariaLabel)(`tabindex`,n.tabindex()||n.buttonProps()?.tabindex)(`aria-busy`,n.loading()||n.buttonProps()?.loading||null)(`data-p`,n.dataP)(`data-p-disabled`,n.disabled()||n.loading()||n.buttonProps()?.disabled)(`data-p-severity`,n.severity()||n.buttonProps()?.severity),Av(2),Vp(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),Av(),kE(n.loading()||n.buttonProps()?.loading?3:4),Av(2),kE(!n.contentTemplate()&&!n._contentTemplate&&(n.label()||n.buttonProps()?.label)?5:-1),Av(),kE(!n.contentTemplate()&&!n._contentTemplate&&(n.badge()||n.buttonProps()?.badge)?6:-1))},dependencies:[Pw,Lw,Fw,re,Yt,ne,ee,kt,Mn,Ms],encapsulation:2})}return o})();var Kn=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Hi({type:o});static ɵinj=fr({imports:[Pw,We,Mn,Mn]})}return o})();export{Yt as a,re as c,Xt as i,xt as l,Kn as n,ne as o,We as r,qe as s,Jn as t};