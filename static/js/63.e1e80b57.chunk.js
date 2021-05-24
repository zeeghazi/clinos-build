(this.webpackJsonpAvonEMR=this.webpackJsonpAvonEMR||[]).push([[63],{1127:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var a=n(29),i=n(0),o=n(436),c=n(441),r=n(410),s=n(438),l=n(95),d=n(533),x=n(534),u=n(56),p=n.n(u),b=n(44),f=n(57),g=new(function(){function e(){Object(d.a)(this,e)}return Object(x.a)(e,[{key:"getReportFinanceDetail",value:function(e,t){return p.a.get("".concat(b.a,"/report-finance-detail?dateFrom=").concat(e,"&dateTo=").concat(t),{headers:Object(f.a)()})}}]),e}()),h=n(7),j=n(445),m=n(444),v=n(459),O=n(447),w=n(97),y=n(442),k=n(443),S=n(446),C=n(43),W=n.n(C),z=n(638),F=n(28),N=n(1),D=Object(o.a)((function(e){return{tableContainer:{minWidth:450,marginTop:e.spacing(2)},detailLink:{color:e.palette.text.link,cursor:"pointer"},overFlowControl:{maxWidth:"130px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}})),M=Object(h.a)((function(e){return{head:{backgroundColor:e.palette.grey,color:e.palette.grey,fontSize:"12px",fontWeight:700},body:{fontSize:14}}}))(j.a),E=Object(h.a)((function(e){return{root:{fontSize:14,"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover},"& th":{fontSize:12},"& td":{fontSize:12,height:"50px"}}}}))(m.a),T=Object(h.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:13}}}))(v.a),B=function(e){var t=e.financeDetail,n=D(),a=Object(F.g)();return Object(N.jsx)("div",{children:Object(N.jsx)(O.a,{component:w.a,className:n.tableContainer,children:Object(N.jsxs)(y.a,{size:"small",className:n.table,"aria-label":"a dense table",children:[Object(N.jsx)(k.a,{children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(M,{padding:"checkbox",children:"Date"}),Object(N.jsx)(M,{padding:"checkbox",children:"Billing Type"}),Object(N.jsx)(M,{padding:"checkbox",children:"Amount"}),Object(N.jsx)(M,{padding:"checkbox",children:"Encounter Tile"}),Object(N.jsx)(M,{padding:"checkbox",children:"Note"}),Object(N.jsx)(M,{padding:"checkbox",children:"Patient"})]})}),Object(N.jsx)(S.a,{children:t.map((function(e){var t;return Object(N.jsxs)(E,{children:[Object(N.jsx)(j.a,{padding:"checkbox",children:e.dt?W()(e.dt).format("lll"):""}),Object(N.jsx)(j.a,{padding:"checkbox",component:"th",scope:"row",children:e.name}),Object(N.jsx)(j.a,{padding:"checkbox",children:Object(N.jsx)(z.a,{value:null===(t=e.amount)||void 0===t?void 0:t.toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})}),Object(N.jsx)(j.a,{padding:"checkbox",children:e.encounter_title}),e.note&&e.note.length>40?Object(N.jsx)(T,{title:e.note,children:Object(N.jsx)(j.a,{padding:"checkbox",className:n.overFlowControl,children:e.note||""})}):Object(N.jsx)(j.a,{padding:"checkbox",className:n.overFlowControl,children:e.note||""}),Object(N.jsx)(j.a,{padding:"checkbox",className:n.detailLink,onClick:function(){return a.push("/patients/".concat(e.hyperlink))},children:e.patient_name})]},e.id)}))})]})})})},R=Object(o.a)((function(e){return{root:{flexGrow:1,padding:"40px 0px"},title:{paddingBottom:e.spacing(1)}}}));function I(e){var t=R(),n=e.match,o=Object(i.useState)([]),d=Object(a.a)(o,2),x=d[0],u=d[1],p=n.params,b=p.dateFrom,f=p.dateTo,h=Object(i.useCallback)((function(){g.getReportFinanceDetail(b,f).then((function(e){return u(e.data.data)}))}),[b,f]);return Object(i.useEffect)((function(){h()}),[h]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(c.a,{}),Object(N.jsx)(r.a,{maxWidth:!1,className:t.root,children:Object(N.jsx)(s.a,{container:!0,justify:"center",spacing:2,children:Object(N.jsxs)(s.a,{item:!0,md:12,xs:12,children:[Object(N.jsx)(l.a,{component:"h1",variant:"h2",color:"textPrimary",className:t.title,children:"Report Finance Detail"}),Object(N.jsx)(l.a,{component:"p",variant:"body2",color:"textPrimary",children:"This page is used to display the Report Finance Detail"}),Object(N.jsx)(B,{financeDetail:x})]})})})]})}},438:function(e,t,n){"use strict";var a=n(5),i=n(2),o=n(0),c=(n(6),n(3)),r=n(7),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var x=o.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,x=e.className,u=e.component,p=void 0===u?"div":u,b=e.container,f=void 0!==b&&b,g=e.direction,h=void 0===g?"row":g,j=e.item,m=void 0!==j&&j,v=e.justify,O=void 0===v?"flex-start":v,w=e.lg,y=void 0!==w&&w,k=e.md,S=void 0!==k&&k,C=e.sm,W=void 0!==C&&C,z=e.spacing,F=void 0===z?0:z,N=e.wrap,D=void 0===N?"wrap":N,M=e.xl,E=void 0!==M&&M,T=e.xs,B=void 0!==T&&T,R=e.zeroMinWidth,I=void 0!==R&&R,G=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(c.a)(d.root,x,f&&[d.container,0!==F&&d["spacing-xs-".concat(String(F))]],m&&d.item,I&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==D&&d["wrap-xs-".concat(String(D))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==r&&d["align-content-xs-".concat(String(r))],"flex-start"!==O&&d["justify-xs-".concat(String(O))],!1!==B&&d["grid-xs-".concat(String(B))],!1!==W&&d["grid-sm-".concat(String(W))],!1!==S&&d["grid-md-".concat(String(S))],!1!==y&&d["grid-lg-".concat(String(y))],!1!==E&&d["grid-xl-".concat(String(E))]);return o.createElement(p,Object(i.a)({className:P,ref:t},G))})),u=Object(r.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(x);t.a=u},441:function(e,t,n){"use strict";var a=n(2),i=n(0),o=(n(6),n(7)),c={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},r=function(e){return Object(a.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(o.a)((function(e){return{"@global":{html:c,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(a.a)({margin:0},r(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,i.createElement(i.Fragment,null,n)}))},533:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},534:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=63.e1e80b57.chunk.js.map