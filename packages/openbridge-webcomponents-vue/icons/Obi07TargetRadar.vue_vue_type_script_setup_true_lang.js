import{defineComponent as u,reactive as d,useSlots as f,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as g}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-07-target-radar.js";const b=u({__name:"Obi07TargetRadar",props:{useCssColor:{type:Boolean}},setup(a){const o=a,n=d({}),p={created(s){for(const e in o)n[e]=s[e]}};let c=!1;const i=f(),l=()=>{const e={};for(const r in o){const t=o[r];(t!==void 0||c)&&(e[r]=t!=null?t:n[r])}return c=!0,h("obi-07-target-radar",e,g(i))};return(s,e)=>m((v(),_(l,null,null,512)),[[p]])}});export{b as default};
//# sourceMappingURL=Obi07TargetRadar.vue_vue_type_script_setup_true_lang.js.map