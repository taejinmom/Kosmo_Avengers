(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{663:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(1),o=a.n(r),l=a(664),c=a(665),i=a(581),s=a(582),u=a(607),h=a(606),d=a(186),m=a(604),b=a(699),p=a(706),y=a(724),f=a(603),g=a(715),w=a(732),E=a(91),k=a(298),M=a.n(k);function j(e){return Object(d.a)(new Date(1e3*e),"MMMM d, p yyyy")}function v(e,t,a){var n=Number.POSITIVE_INFINITY;return e.forEach(function(e){n>e[t]&&(n=e[t])}),Math.round(n-n*a)}var O=216,S=["1 Week","1 Month","6 Months"];t.default=Object(E.a)(function(e){return{cardContentInner:{marginTop:e.spacing(-4)}}},{withTheme:!0})(function(e){var t=e.color,a=e.data,d=e.title,E=e.classes,k=e.theme,C=e.height,x=Object(r.useState)(null),I=Object(n.a)(x,2),N=I[0],T=I[1],W=Object(r.useState)("1 Month"),F=Object(n.a)(W,2),L=F[0],z=F[1],H=Object(r.useCallback)(function(e){T(e.currentTarget)},[T]),P=Object(r.useCallback)(function(e){return[e,d]},[d]),D=Object(r.useCallback)(function(){switch(L){case"1 Week":return"Last week";case"1 Month":return"Last month";case"6 Months":return"Last 6 months";default:throw new Error("No branch selected in switch-statement")}},[L]),J=Object(r.useCallback)(function(){var e;switch(L){case"1 Week":e=604800;break;case"1 Month":e=2678400;break;case"6 Months":e=16070400;break;default:throw new Error("No branch selected in switch-statement")}for(var t=new Date/1e3-e,n=[],r=0;r<a.length;r+=1)t<a[r].timestamp&&n.unshift(a[r]);return n},[a,L]),K=Object(r.useCallback)(function(){T(null)},[T]),R=Object(r.useCallback)(function(e){z(e),K()},[z,K]),B=Boolean(N);return o.a.createElement(m.a,null,o.a.createElement(b.a,{pt:2,px:2,pb:4},o.a.createElement(b.a,{display:"flex",justifyContent:"space-between"},o.a.createElement("div",null,o.a.createElement(p.a,{variant:"subtitle1"},d),o.a.createElement(p.a,{variant:"body2",color:"textSecondary"},D())),o.a.createElement("div",null,o.a.createElement(y.a,{"aria-label":"More","aria-owns":B?"long-menu":void 0,"aria-haspopup":"true",onClick:H,size:"large"},o.a.createElement(M.a,null)),o.a.createElement(f.a,{id:"long-menu",anchorEl:N,open:B,onClose:K,PaperProps:{style:{maxHeight:O,width:200}},disableScrollLock:!0},S.map(function(e){return o.a.createElement(g.a,{key:e,selected:e===L,onClick:function(){R(e)},name:e},e)}))))),o.a.createElement(w.a,null,o.a.createElement(b.a,{className:E.cardContentInner,height:C},o.a.createElement(l.a,{width:"100%",height:"100%"},o.a.createElement(c.a,{data:J(),type:"number"},o.a.createElement(i.a,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],hide:!0}),o.a.createElement(s.a,{domain:[v(a,"value",.05),"dataMax"],hide:!0}),o.a.createElement(u.a,{type:"monotone",dataKey:"value",stroke:t,fill:t}),o.a.createElement(h.a,{labelFormatter:j,formatter:P,cursor:!1,contentStyle:{border:"none",padding:k.spacing(1),borderRadius:k.shape.borderRadius,boxShadow:k.shadows[1]},labelStyle:k.typography.body1,itemStyle:{fontSize:k.typography.body1.fontSize,letterSpacing:k.typography.body1.letterSpacing,fontFamily:k.typography.body1.fontFamily,lineHeight:k.typography.body1.lineHeight,fontWeight:k.typography.body1.fontWeight}}))))))})}}]);
//# sourceMappingURL=18.c5fac1b6.chunk.js.map