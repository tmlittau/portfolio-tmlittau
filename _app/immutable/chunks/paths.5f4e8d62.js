import{n as c,s as _}from"./scheduler.7a274a43.js";const e=[];function d(o,l=c){let i;const n=new Set;function r(t){if(_(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function p(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=l(r,f)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:p}}var u;const g=((u=globalThis.__sveltekit_16kpg0j)==null?void 0:u.base)??"/tmlittau-portfolio";var a;const k=((a=globalThis.__sveltekit_16kpg0j)==null?void 0:a.assets)??g;export{k as a,g as b,d as w};
