import{K as $,n as _,Z as y,b as S,h as b,U as E,E as w,_ as C,G as x,$ as I,a0 as O,T as p,a1 as U,a2 as j,a3 as B,a4 as G,a5 as K}from"./scheduler.z1v5p5l_.js";const o=new Set;let d;function V(){d={r:0,c:[],p:d}}function Z(){d.r||$(d.c),d=d.p}function L(t,e){t&&t.i&&(o.delete(t),t.i(e))}function z(t,e,n,s){if(t&&t.o){if(o.has(t))return;o.add(t),d.c.push(()=>{o.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function A(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function D(t){t&&t.c()}function F(t,e){t&&t.l(e)}function M(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),x(()=>{const f=t.$$.on_mount.map(U).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function N(t,e){const n=t.$$;n.fragment!==null&&(I(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){t.$$.dirty[0]===-1&&(j.push(t),B(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,s,i,f,c=null,v=[-1]){const u=O;p(t);const a=t.$$={fragment:null,ctx:[],props:f,update:_,not_equal:i,bound:y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:y(),dirty:v,skip_bound:!1,root:e.target||u.$$.root};c&&c(a.root);let h=!1;if(a.ctx=n?n(t,e.props||{},(r,l,...g)=>{const m=g.length?g[0]:l;return a.ctx&&i(a.ctx[r],a.ctx[r]=m)&&(!a.skip_bound&&a.bound[r]&&a.bound[r](m),h&&P(t,r)),l}):[],a.update(),h=!0,$(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){G();const r=S(e.target);a.fragment&&a.fragment.l(r),r.forEach(b)}else a.fragment&&a.fragment.c();e.intro&&L(t.$$.fragment),M(t,e.target,e.anchor),K(),E()}p(u)}class J{$$=void 0;$$set=void 0;$destroy(){N(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!C(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const R="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(R);export{J as S,z as a,F as b,D as c,N as d,Z as e,A as f,V as g,H as i,M as m,L as t};