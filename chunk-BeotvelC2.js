import{o as w,t as r}from"./chunk-Btz99zWn.js";import{$ as Lw,$t as Yc,An as gL,At as TI,Br as zE,Bt as WE,Dn as g,En as fr,Fn as hL,G as Kl,Gn as kE,H as KE,L as JE,Ln as hh,Lt as Vl,N as ID,Qt as YI,Rt as Vp,S as Fp,Sn as eu,Sr as sv,Tr as uf,Un as jI,V as Jp,Wt as XE,X as LI,Zn as mE,Zt as YE,d as Bp,dr as pL,dt as O,f as C,ft as OE,i as $p,j as Hp,k as Hi,kn as gI,mt as Op,nn as ZE,p as DD,rr as ni,rt as Mi,s as Av,sr as oh,u as Bl,wn as fL,wr as uE,x as Fo,xt as Qp,yn as eI,yr as qp}from"./chunk-4vRXMirL.js";import{$ as qi,A as Yi,_ as Mn,ct as xi,g as Ls,h as Ki,n as $s,r as At,ut as z,v as Ms}from"./chunk-k8ThtpBn.js";import{C as rt,g as Yt,h as Wt,i as Fn,l as Mn$1,m as We$1,n as Dn,y as bn}from"./chunk-B9ZU2Nl6.js";import{t as F}from"./chunk-BFuCVKHB.js";import{B as S,L as e,i as ft,n as Qe$1,r as at}from"./main-AUEAO2SO.js";import{n as et,r as nt}from"./chunk-DoRC8bXu.js";import{c as re$1,n as Kn,t as Jn}from"./chunk-CAdVP_cV.js";import{t as d}from"./chunk-CiIuiYD4.js";import{n as O$1,t as L}from"./chunk-BY-gv6ka2.js";var Re=(()=>{class t extends S{static ɵfac=(()=>{let e;return function(o){return(e||(e=uf(t)))(o||t)}})();static ɵcmp=uE({type:t,selectors:[[``,`data-p-icon`,`chevron-up`]],features:[Op],decls:1,vars:0,consts:[[`d`,`M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z`,`fill`,`currentColor`]],template:function(n,o){n&1&&(Kl(),$p(0,`path`,0))},encapsulation:2})}return t})();var Ue=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var J=[`*`];var Je=[`toggleicon`];var Ze=t=>({active:t});function Xe(t,p){}function Ye(t,p){t&1&&Fp(0,Xe,0,0,`ng-template`)}function en(t,p){if(t&1&&Fp(0,Ye,1,0,null,0),t&2){let e=WE();Vp(`ngTemplateOutlet`,e.toggleicon)(`ngTemplateOutletContext`,jI(2,Ze,e.active()))}}function nn(t,p){if(t&1&&Hp(0,`span`,3),t&2){let e=WE(3);gI(e.cn(e.cx(`toggleicon`),e.pcAccordion.collapseIcon())),Vp(`pBind`,e.ptm(`toggleicon`)),Bp(`aria-hidden`,!0)}}function tn(t,p){if(t&1&&(Kl(),Hp(0,`svg`,4)),t&2){let e=WE(3);gI(e.cx(`toggleicon`)),Vp(`pBind`,e.ptm(`toggleicon`)),Bp(`aria-hidden`,!0)}}function on(t,p){if(t&1&&(OE(0,nn,1,4,`span`,1),OE(1,tn,1,4,`:svg:svg`,2)),t&2){let e=WE(2);kE(e.pcAccordion.collapseIcon()?0:-1),Av(),kE(e.pcAccordion.collapseIcon()?-1:1)}}function an(t,p){if(t&1&&Hp(0,`span`,3),t&2){let e=WE(3);gI(e.cn(e.cx(`toggleicon`),e.pcAccordion.expandIcon())),Vp(`pBind`,e.ptm(`toggleicon`)),Bp(`aria-hidden`,!0)}}function rn(t,p){if(t&1&&(Kl(),Hp(0,`svg`,5)),t&2)Vp(`pBind`,WE(3).ptm(`toggleicon`)),Bp(`aria-hidden`,!0)}function cn(t,p){if(t&1&&(OE(0,an,1,4,`span`,1),OE(1,rn,1,2,`:svg:svg`,5)),t&2){let e=WE(2);kE(e.pcAccordion.expandIcon()?0:-1),Av(),kE(e.pcAccordion.expandIcon()?-1:1)}}function dn(t,p){if(t&1&&(OE(0,on,2,2),OE(1,cn,2,2)),t&2){let e=WE();kE(e.active()?0:-1),Av(),kE(e.active()?-1:1)}}var sn=`
${Ue}

/* For ngx-prime */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`;var ln={root:`p-accordion p-component`,panel:({instance:t})=>[`p-accordionpanel`,{"p-accordionpanel-active":t.active(),"p-disabled":t.disabled()}],header:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`,contentContainer:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`};var A=(()=>{class t extends z{name=`accordion`;style=sn;classes=ln;static ɵfac=(()=>{let e;return function(o){return(e||(e=uf(t)))(o||t)}})();static ɵprov=O({token:t,factory:t.ɵfac})}return t})();var qe=new C(`ACCORDION_PANEL_INSTANCE`);var Qe=new C(`ACCORDION_HEADER_INSTANCE`);var Ge=new C(`ACCORDION_CONTENT_INSTANCE`);var ze=new C(`ACCORDION_INSTANCE`);var re=(()=>{class t extends Ls{$pcAccordionPanel=g(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});componentName=`AccordionPanel`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=g(Fo(()=>Z));value=hL(void 0);disabled=pL(!1,{transform:e=>ft(e)});active=YI(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,n){return Array.isArray(e)?e.includes(n):e===n}_componentStyle=g(A);static ɵfac=(()=>{let e;return function(o){return(e||(e=uf(t)))(o||t)}})();static ɵcmp=uE({type:t,selectors:[[`p-accordion-panel`],[`p-accordionpanel`]],hostVars:4,hostBindings:function(n,o){n&2&&(Bp(`data-p-disabled`,o.disabled())(`data-p-active`,o.active()),gI(o.cx(`panel`)))},inputs:{value:[1,`value`],disabled:[1,`disabled`]},outputs:{value:`valueChange`},features:[LI([A,{provide:qe,useExisting:t},{provide:xi,useExisting:t}]),mE([Ms]),Op],ngContentSelectors:J,decls:1,vars:0,template:function(n,o){n&1&&(ZE(),YE(0))},dependencies:[$s],encapsulation:2})}return t})();var pn=(()=>{class t extends Ls{$pcAccordionHeader=g(Qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});componentName=`AccordionHeader`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=g(Fo(()=>Z));pcAccordionPanel=g(Fo(()=>re));id=YI(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=YI(()=>this.pcAccordionPanel.active());disabled=YI(()=>this.pcAccordionPanel.disabled());ariaControls=YI(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let n=this.active();this.changeActiveValue();let o=this.active(),i=this.pcAccordionPanel.value();!n&&o?this.pcAccordion.onOpen.emit({originalEvent:e,index:i}):n&&!o&&this.pcAccordion.onClose.emit({originalEvent:e,index:i})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case`ArrowDown`:this.arrowDownKey(e);break;case`ArrowUp`:this.arrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`Space`:case`NumpadEnter`:this.onEnterKey(e);break;default:break}}_componentStyle=g(A);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest(`[data-pc-name="accordionpanel"]`)}findHeader(e){return Ki(e,`[data-pc-name="accordionheader"]`)}findNextPanel(e,n=!1){let o=n?e:e.nextElementSibling;return o?Yi(o,`data-p-disabled`)?this.findNextPanel(o):this.findHeader(o):null}findPrevPanel(e,n=!1){let o=n?e:e.previousElementSibling;return o?Yi(o,`data-p-disabled`)?this.findPrevPanel(o):this.findHeader(o):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,n){qi(n)}arrowDownKey(e){let n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEndKey(e){let n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}get dataP(){return this.cn({active:this.active()})}static ɵfac=(()=>{let e;return function(o){return(e||(e=uf(t)))(o||t)}})();static ɵcmp=uE({type:t,selectors:[[`p-accordion-header`],[`p-accordionheader`]],contentQueries:function(n,o,i){if(n&1&&Qp(i,Je,5),n&2){let C;KE(C=XE())&&(o.toggleicon=C.first)}},hostVars:13,hostBindings:function(n,o){n&1&&qp(`click`,function(C){return o.onClick(C)})(`focus`,function(){return o.onFocus()})(`keydown`,function(C){return o.onKeydown(C)}),n&2&&(Bp(`id`,o.id())(`aria-expanded`,o.active())(`aria-controls`,o.ariaControls())(`aria-disabled`,o.disabled())(`role`,`button`)(`tabindex`,o.disabled()?`-1`:`0`)(`data-p-active`,o.active())(`data-p-disabled`,o.disabled())(`data-p`,o.dataP),gI(o.cx(`header`)),oh(`user-select`,`none`))},features:[LI([A,{provide:Qe,useExisting:t},{provide:xi,useExisting:t}]),mE([re$1,Ms]),Op],ngContentSelectors:J,decls:3,vars:1,consts:[[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`],[`data-p-icon`,`chevron-up`,3,`class`,`pBind`],[3,`pBind`],[`data-p-icon`,`chevron-up`,3,`pBind`],[`data-p-icon`,`chevron-down`,3,`pBind`]],template:function(n,o){n&1&&(ZE(),YE(0),OE(1,en,1,4)(2,dn,2,2)),n&2&&(Av(),kE(o.toggleicon?1:2))},dependencies:[d,Re,$s,Ms,Lw],encapsulation:2})}return t})();var un=(()=>{class t extends Ls{$pcAccordionContent=g(Ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});componentName=`AccordionContent`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=g(Fo(()=>Z));pcAccordionPanel=g(Fo(()=>re));active=YI(()=>this.pcAccordionPanel.active());ariaLabelledby=YI(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=YI(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=g(A);ptParams=YI(()=>({context:this.active()}));computedMotionOptions=YI(()=>r(r({},this.ptm(`motion`,this.ptParams())),this.pcAccordion.computedMotionOptions()));static ɵfac=(()=>{let e;return function(o){return(e||(e=uf(t)))(o||t)}})();static ɵcmp=uE({type:t,selectors:[[`p-accordion-content`],[`p-accordioncontent`]],hostVars:6,hostBindings:function(n,o){n&2&&(Bp(`id`,o.id())(`role`,`region`)(`data-p-active`,o.active())(`aria-labelledby`,o.ariaLabelledby()),gI(o.cx(`contentContainer`)))},features:[LI([A,{provide:Ge,useExisting:t},{provide:xi,useExisting:t}]),mE([Ms]),Op],ngContentSelectors:J,decls:4,vars:10,consts:[[`name`,`p-collapsible`,`hideStrategy`,`visibility`,3,`visible`,`mountOnEnter`,`unmountOnLeave`,`options`],[3,`pBind`]],template:function(n,o){n&1&&(ZE(),Mi(0,`p-motion`,0)(1,`div`,1)(2,`div`,1),YE(3),Yc()()()),n&2&&(Vp(`visible`,o.active())(`mountOnEnter`,!1)(`unmountOnLeave`,!1)(`options`,o.computedMotionOptions()),Av(),gI(o.cx(`contentWrapper`)),Vp(`pBind`,o.ptm(`contentWrapper`,o.ptParams())),Av(),gI(o.cx(`content`)),Vp(`pBind`,o.ptm(`content`,o.ptParams())))},dependencies:[$s,Ms,at,Qe$1],encapsulation:2})}return t})();var Z=(()=>{class t extends Ls{componentName=`Accordion`;$pcAccordion=g(ze,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}value=hL(void 0);multiple=pL(!1,{transform:e=>ft(e)});styleClass=pL();expandIcon=pL();collapseIcon=pL();selectOnFocus=pL(!1,{transform:e=>ft(e)});transitionOptions=pL(`400ms cubic-bezier(0.86, 0, 0.07, 1)`);motionOptions=pL(void 0);computedMotionOptions=YI(()=>r(r({},this.ptm(`motion`)),this.motionOptions()));onClose=fL();onOpen=fL();id=ni(At(`pn_id_`));_componentStyle=g(A);onKeydown(e){switch(e.code){case`ArrowDown`:this.onTabArrowDownKey(e);break;case`ArrowUp`:this.onTabArrowUpKey(e);break;case`Home`:e.shiftKey||this.onTabHomeKey(e);break;case`End`:e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let n=this.findNextHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let n=this.findPrevHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&qi(e)}findNextHeaderAction(e,n=!1){let i=Ki(n?e:e.nextElementSibling,`[data-pc-section="accordionheader"]`);return i?Yi(i,`data-p-disabled`)?this.findNextHeaderAction(i.parentElement):Ki(i.parentElement,`[data-pc-section="accordionheader"]`):null}findPrevHeaderAction(e,n=!1){let i=Ki(n?e:e.previousElementSibling,`[data-pc-section="accordionheader"]`);return i?Yi(i,`data-p-disabled`)?this.findPrevHeaderAction(i.parentElement):Ki(i.parentElement,`[data-pc-section="accordionheader"]`):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let n=this.value();if(this.multiple()){let o=Array.isArray(n)?[...n]:[],i=o.indexOf(e);i!==-1?o.splice(i,1):o.push(e),this.value.set(o)}else n===e?this.value.set(void 0):this.value.set(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=uf(t)))(o||t)}})();static ɵcmp=uE({type:t,selectors:[[`p-accordion`]],hostVars:2,hostBindings:function(n,o){n&1&&qp(`keydown`,function(C){return o.onKeydown(C)}),n&2&&gI(o.cn(o.cx(`root`),o.styleClass()))},inputs:{value:[1,`value`],multiple:[1,`multiple`],styleClass:[1,`styleClass`],expandIcon:[1,`expandIcon`],collapseIcon:[1,`collapseIcon`],selectOnFocus:[1,`selectOnFocus`],transitionOptions:[1,`transitionOptions`],motionOptions:[1,`motionOptions`]},outputs:{value:`valueChange`,onClose:`onClose`,onOpen:`onOpen`},features:[LI([A,{provide:ze,useExisting:t},{provide:xi,useExisting:t}]),mE([Ms]),Op],ngContentSelectors:J,decls:1,vars:0,template:function(n,o){n&1&&(ZE(),YE(0))},dependencies:[Mn,$s],encapsulation:2})}return t})();var jn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Hi({type:t});static ɵinj=fr({imports:[Z,Mn,re,pn,un,$s,Mn,$s]})}return t})();var We=(()=>{class t{send(e$1){return w(this,null,function*(){try{return(yield fetch(`${e.url}/api/telegram/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:e.contact.slug,message:e$1})})).ok}catch(n){return console.error(n),!1}})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=O({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var mn=[`nameInput`];function fn(t,p){if(t&1&&(Mi(0,`div`,2)(1,`p`),TI(2),Yc()()),t&2){let e=WE();Av(2),hh(e.translateService.translate(`Дякуємо! Ми отримали ваше повідомлення і скоро зв'яжемося.`)())}}function hn(t,p){if(t&1&&(Mi(0,`p`,9),TI(1),Yc()),t&2){let e=WE(2);Av(),eu(` `,e.translateService.translate(`Щось пішло не так — спробуйте ще раз.`)(),` `)}}function gn(t,p){if(t&1){let e=zE();Mi(0,`form`,4,0),qp(`ngSubmit`,function(){Bl(e);let o=eI(1);return Vl(WE().submit(o))}),Mi(2,`div`,5)(3,`label`),TI(4),Yc(),Mi(5,`input`,6,1),qp(`ngModelChange`,function(o){Bl(e);return Vl(WE().name.set(o))}),Yc(),DD(),Yc(),Mi(7,`div`,5)(8,`label`),TI(9),Yc(),Mi(10,`input`,7),qp(`ngModelChange`,function(o){Bl(e);return Vl(WE().contact.set(o))}),Yc(),DD(),Yc(),Mi(11,`div`,5)(12,`label`),TI(13),Yc(),Mi(14,`textarea`,8),qp(`ngModelChange`,function(o){Bl(e);return Vl(WE().message.set(o))}),Yc(),DD(),Yc(),OE(15,hn,2,1,`p`,9),Mi(16,`button`,10),TI(17),Yc()()}if(t&2){let e=eI(1),n=WE();Av(4),hh(n.translateService.translate(`Ім'я`)()),Av(),Vp(`ngModel`,n.name()),ID(),Av(4),hh(n.translateService.translate(`Email або телефон`)()),Av(),Vp(`ngModel`,n.contact()),ID(),Av(3),hh(n.translateService.translate(`Повідомлення`)()),Av(),Vp(`ngModel`,n.message()),ID(),Av(),kE(n.status()===`error`?15:-1),Av(),Vp(`disabled`,e.invalid||n.status()===`sending`),Av(),eu(` `,n.submitLabel()||n.translateService.translate(`Надіслати`)(),` `)}}var vn={user:`Заявка користувача`,doctor:`Заявка лікаря`,network:`Заявка мережі`,department:`Заявка відділення`,specialist:`Заявка спеціаліста`};var ct=(()=>{class t{constructor(){this._contactService=g(We),this.translateService=g(F),this.kind=pL.required(),this.submitLabel=pL(``),this._nameInput=gL(`nameInput`),this.name=ni(``),this.contact=ni(``),this.message=ni(``),this.status=ni(`idle`),sv(()=>this._nameInput()?.nativeElement.focus())}submit(e){return w(this,null,function*(){if(e.invalid||this.status()===`sending`)return;this.status.set(`sending`);let n=[`MedPass lead: ${vn[this.kind()]}`,`\u0406\u043C'\u044F: ${this.name()}`,`\u041A\u043E\u043D\u0442\u0430\u043A\u0442: ${this.contact()}`];if(this.message().trim()&&n.push(``,this.message().trim()),!(yield this._contactService.send(n.join(`
`)))){this.status.set(`error`);return}this.status.set(`success`),e.resetForm()})}retry(){this.status.set(`idle`)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=uE({type:t,selectors:[[`app-lead-form`]],viewQuery:function(n,o){n&1&&Jp(o._nameInput,mn,5),n&2&&JE()},inputs:{kind:[1,`kind`],submitLabel:[1,`submitLabel`]},decls:2,vars:1,consts:[[`leadForm`,`ngForm`],[`nameInput`,``],[1,`lead-form`,`lead-form--success`],[`novalidate`,``,1,`lead-form`],[`novalidate`,``,1,`lead-form`,3,`ngSubmit`],[1,`lead-form__field`],[`pInputText`,``,`type`,`text`,`name`,`name`,`required`,``,3,`ngModelChange`,`ngModel`],[`pInputText`,``,`type`,`text`,`name`,`contact`,`required`,``,3,`ngModelChange`,`ngModel`],[`pTextarea`,``,`rows`,`3`,`name`,`message`,3,`ngModelChange`,`ngModel`],[1,`lead-form__error`],[`pButton`,``,`type`,`submit`,3,`disabled`]],template:function(n,o){if(n&1&&OE(0,fn,3,1,`div`,2)(1,gn,18,9,`form`,3),n&2)kE(o.status()===`success`?0:1)},dependencies:[Fn,Mn$1,We$1,Dn,bn,rt,Yt,Wt,nt,et,O$1,L,Kn,Jn],styles:[`.lead-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;max-width:420px;margin:0 auto}.lead-form__field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem}.lead-form__field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%c-text-secondary)}.lead-form__error[_ngcontent-%COMP%]{margin:0;color:var(--%NS%c-danger, #e5484d);font-size:.85rem}.lead-form--success[_ngcontent-%COMP%]{text-align:center;color:var(--%NS%c-text-secondary)}`]})}}return t})();export{re as a,pn as i,ct as n,un as o,jn as r,Z as t};