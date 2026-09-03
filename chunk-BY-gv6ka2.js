import{Dn as g,En as fr,Qt as YI,Tr as uf,Wr as zr,X as LI,Zn as mE,d as Bp,dr as pL,dt as O$1,f as C$1,jt as Tw,k as Hi,kn as gI,mt as Op,un as ad,wn as fL,yr as qp}from"./chunk-4vRXMirL.js";import{ct as xi,ut as z,v as Ms}from"./chunk-k8ThtpBn.js";import{v as _}from"./chunk-B9ZU2Nl6.js";import{t as H}from"./chunk-jYpAQAqB.js";import{t as S}from"./chunk-DoRC8bXu.js";var I=`
    
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }


    /* For ngx-prime */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`;var R={root:({instance:e})=>[`p-textarea p-component`,{"p-filled":e.$filled(),"p-textarea-resizable ":e.autoResize,"p-variant-filled":e.$variant()===`filled`,"p-textarea-fluid":e.hasFluid,"p-inputfield-sm p-textarea-sm":e.pSize()===`small`,"p-textarea-lg p-inputfield-lg":e.pSize()===`large`,"p-invalid":e.invalid()}]};var w=(()=>{class e extends z{name=`textarea`;style=I;classes=R;static ɵfac=(()=>{let t;return function(i){return(t||(t=uf(e)))(i||e)}})();static ɵprov=O$1({token:e,factory:e.ɵfac})}return e})();var C=new C$1(`TEXTAREA_INSTANCE`);var L=(()=>{class e extends S{componentName=`Textarea`;bindDirectiveInstance=g(Ms,{self:!0});$pcTextarea=g(C,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=pL();pTextareaUnstyled=pL();autoResize=pL(!1,{transform:Tw});pSize=pL();variant=pL();fluid=pL(void 0,{transform:Tw});invalid=pL(void 0,{transform:Tw});ariaDescribedBy=pL();$variant=YI(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=fL();ngControlSubscription;_componentStyle=g(w);ngControl=g(_,{optional:!0,self:!0});pcFluid=g(H,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),ad(()=>{let t=this.pTextareaPT();t&&this.directivePT.set(t)}),ad(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl?.valueChanges&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize()&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.autoResize()&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(t.target?.value),this.updateState()}resize(t){this.el.nativeElement.style.height=`auto`,this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+`px`,parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY=`scroll`,this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow=`hidden`,this.onResize.emit(t||{})}updateState(){this.autoResize()&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static ɵfac=function(a){return new(a||e)};static ɵdir=zr({type:e,selectors:[[``,`pTextarea`,``],[``,`pInputTextarea`,``]],hostVars:4,hostBindings:function(a,i){a&1&&qp(`input`,function(F){return i.onInput(F)}),a&2&&(Bp(`aria-invalid`,i.invalid()||null)(`aria-describedby`,i.ariaDescribedBy()||null),gI(i.cx(`root`)))},inputs:{pTextareaPT:[1,`pTextareaPT`],pTextareaUnstyled:[1,`pTextareaUnstyled`],autoResize:[1,`autoResize`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`],ariaDescribedBy:[1,`ariaDescribedBy`]},outputs:{onResize:`onResize`},features:[LI([w,{provide:C,useExisting:e},{provide:xi,useExisting:e}]),mE([Ms]),Op]})}return e})();var O=(()=>{class e{static ɵfac=function(a){return new(a||e)};static ɵmod=Hi({type:e});static ɵinj=fr({})}return e})();export{O as n,L as t};