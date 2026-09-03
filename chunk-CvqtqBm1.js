import{$ as Lw,$t as Yc,At as TI,Bt as WE,Dn as g,En as fr,Gn as kE,H as KE,Jt as Xp,L as JE,Qn as mL,Rr as yL,Rt as Vp,S as Fp,Sn as eu,Tr as uf,Ur as zp,Wt as XE,X as LI,Zn as mE,Zt as YE,dr as pL,dt as O,f as C,ft as OE,k as Hi,kn as gI,mt as Op,nn as ZE,rr as ni,rt as Mi,s as Av,un as ad,ur as pI,vt as Pw,wr as uE,xt as Qp}from"./chunk-4vRXMirL.js";import{G as ie$1,_ as Mn,b as Pn,ct as xi,g as Ls,n as $s,o as Dn,p as In,ut as z,v as Ms}from"./chunk-k8ThtpBn.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&zp(0)}function se(t,r){if(t&1&&(Mi(0,`div`,1),YE(1,1),Fp(2,pe,1,0,`ng-container`,2),Yc()),t&2){let e=WE();gI(e.cx(`header`)),Vp(`pBind`,e.ptm(`header`)),Av(2),Vp(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&TI(0),t&2)eu(` `,WE(2).header(),` `)}function ue(t,r){t&1&&zp(0)}function fe(t,r){if(t&1&&(Mi(0,`div`,1),OE(1,me,1,1),Fp(2,ue,1,0,`ng-container`,2),Yc()),t&2){let e=WE();gI(e.cx(`title`)),Vp(`pBind`,e.ptm(`title`)),Av(),kE(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),Av(),Vp(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&TI(0),t&2)eu(` `,WE(2).subheader(),` `)}function he(t,r){t&1&&zp(0)}function ye(t,r){if(t&1&&(Mi(0,`div`,1),OE(1,_e,1,1),Fp(2,he,1,0,`ng-container`,2),Yc()),t&2){let e=WE();gI(e.cx(`subtitle`)),Vp(`pBind`,e.ptm(`subtitle`)),Av(),kE(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),Av(),Vp(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&zp(0)}function ge(t,r){t&1&&zp(0)}function be(t,r){if(t&1&&(Mi(0,`div`,1),YE(1,2),Fp(2,ge,1,0,`ng-container`,2),Yc()),t&2){let e=WE();gI(e.cx(`footer`)),Vp(`pBind`,e.ptm(`footer`)),Av(2),Vp(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends z{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=uf(t)))(n||t)}})();static ɵprov=O({token:t,factory:t.ɵfac})}return t})();var ne=new C(`CARD_INSTANCE`);var Me=(()=>{class t extends Ls{componentName=`Card`;$pcCard=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ms,{self:!0});_componentStyle=g(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=pL();subheader=pL();style=pL();styleClass=pL();headerFacet=mL(In);footerFacet=mL(Pn);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=mL(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=ni(null);constructor(){super(),ad(()=>{let e=this.style();ie$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=yL(Dn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=uE({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(Xp(l,n.headerFacet,In,5)(l,n.footerFacet,Pn,5)(l,n.contentTemplate,ie,4)(l,n.templates,Dn,4),Qp(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){JE(4);let d;KE(d=XE())&&(n.headerTemplate=d.first),KE(d=XE())&&(n.titleTemplate=d.first),KE(d=XE())&&(n.subtitleTemplate=d.first),KE(d=XE())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(pI(n._style()),gI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[LI([te,{provide:ne,useExisting:t},{provide:xi,useExisting:t}]),mE([Ms]),Op],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(ZE(de),OE(0,se,3,4,`div`,0),Mi(1,`div`,1),OE(2,fe,3,5,`div`,0),OE(3,ye,3,5,`div`,0),Mi(4,`div`,1),YE(5),Fp(6,Te,1,0,`ng-container`,2),Yc(),OE(7,be,3,4,`div`,0),Yc()),i&2&&(kE(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),Av(),gI(n.cx(`body`)),Vp(`pBind`,n.ptm(`body`)),Av(),kE(n.header()||n.titleTemplate||n._titleTemplate?2:-1),Av(),kE(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),Av(),gI(n.cx(`content`)),Vp(`pBind`,n.ptm(`content`)),Av(2),Vp(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),Av(),kE(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[Pw,Lw,Mn,$s,Ms],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Hi({type:t});static ɵinj=fr({imports:[Me,Mn,$s,Mn,$s]})}return t})();export{Ve as n,Me as t};