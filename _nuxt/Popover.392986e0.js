import"./MDCSlot.5b37fae0.js";import{d as g,r as n,b as i,c as f,e as y,N as e,g as b,w as _,a1 as v,f as x,T as k,k as h}from"./entry.5c1a6726.js";import{r as d}from"./slot.f1b3824f.js";import{u as w,o as N,f as C,s as S,a as $}from"./floating-ui.vue.esm.36366bed.js";import{o as B}from"./index.d3e74893.js";const R=["tabindex"],P=g({__name:"Popover",props:{tabbable:{type:Boolean,default:!1},maxWidth:{type:String,default:"240px"},offset:{type:Number,default:4},delay:{type:Number,default:200},strategy:{type:String,default:"absolute"},placement:{type:String,default:"bottom"}},setup(a){const o=a,t=n(!1),r=n(null),s=n(null),{x:u,y:m,strategy:c,placement:T}=w(r,s,{strategy:o.strategy,middleware:[N(o.offset),C(),S({padding:4})],placement:o.placement,whileElementsMounted:$});return B(s,()=>setTimeout(()=>t.value=!1,0)),(l,p)=>(i(),f("div",null,[y("span",{tabindex:a.tabbable?0:-1,ref_key:"triggerRef",ref:r,class:"trigger",onClick:p[0]||(p[0]=V=>t.value=!e(t))},[d(l.$slots,"default",{unwrap:"p"},void 0,!0)],8,R),b(k,{name:"popover"},{default:_(()=>[e(t)?(i(),f("span",{key:0,ref_key:"floatingRef",ref:s,class:"popover-content",style:v({position:e(c),top:`${e(m)??0}px`,left:`${e(u)??0}px`,width:"max-content",maxWidth:a.maxWidth}),tabindex:"0"},[d(l.$slots,"content",{unwrap:"p"},void 0,!0)],4)):x("",!0)]),_:3})]))}});const M=h(P,[["__scopeId","data-v-b5071970"]]);export{M as default};
