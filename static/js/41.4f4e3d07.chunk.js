(this.webpackJsonpAvonEMR=this.webpackJsonpAvonEMR||[]).push([[41],{1083:function(t,e,a){"use strict";var n=a(18),c=a(19);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(a(0)),r=(0,n(a(20)).default)(i.createElement("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm12 6V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1zm-2-3h1v3h-1V9zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1v-2zm0-2h1v1h-1V9z"}),"PictureAsPdfOutlined");e.default=r},1141:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return N}));var n=a(29),c=a(0),i=a(436),r=a(441),o=a(332),l=a(329),u=a(465),s=a(424),d=a(95),p=a(1083),f=a.n(p),b=a(43),h=a.n(b),g=a(16),j=a(555),m=a(455),v=a(456),O=a(451),y=a(681),k=a(1),x=Object(i.a)((function(t){return{gridMargin:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},noteMargin:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},title:{backgroundColor:t.palette.primary.light,"& h2":{color:"#fff"}},content:{paddingTop:t.spacing(2),paddingBottom:t.spacing(2),fontSize:"18px"},root:{paddingLeft:"5px","& .MuiTypography-root":{marginLeft:"5px"}}}})),_=function(t){var e=t.isOpen,a=t.hendleOnClose,n=t.filePath,c=x();return Object(k.jsx)("div",{children:Object(k.jsxs)(m.a,{maxWidth:"sm",fullWidth:!0,open:e,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(k.jsx)(O.a,{id:"alert-dialog-title",className:c.title,children:"Handout Detail"}),Object(k.jsxs)(v.a,{className:c.content,children:[Object(k.jsx)(y.a,{filePath:n}),Object(k.jsx)("div",{className:c.root})]})]})})},P=Object(i.a)((function(t){return{paper:{paddingTop:t.spacing(5),display:"flex",flexDirection:"column",alignItems:"left"},handouts:{marginTop:t.spacing(2)},title:{marginBottom:t.spacing(.5)},listItem:{paddingLeft:t.spacing(0)}}})),N=function(){var t=P(),e=Object(g.a)().user,a=Object(c.useState)([]),i=Object(n.a)(a,2),p=i[0],b=i[1],m=Object(c.useState)(!1),v=Object(n.a)(m,2),O=v[0],y=v[1],x=Object(c.useState)(null),N=Object(n.a)(x,2),S=N[0],M=N[1],w=Object(c.useCallback)((function(){j.a.getHandouts().then((function(t){b(t.data)}))}),[]);Object(c.useEffect)((function(){w()}),[w]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(r.a,{}),Object(k.jsxs)("div",{className:t.paper,children:[Object(k.jsx)(d.a,{component:"h1",variant:"h2",color:"textPrimary",className:t.title,children:"Handouts"}),Object(k.jsx)(d.a,{component:"h5",variant:"body1",color:"textPrimary",children:"This page is used to view handouts from your provider."}),Object(k.jsx)(o.a,{"aria-label":"main mailbox folders",className:t.handouts,children:p.length?p.map((function(a){return Object(k.jsxs)(l.a,{button:!0,onClick:function(t){return n=a.filename,M("".concat("http://localhost:5000/","static/handouts/c").concat(e.client_id,"_").concat(n)),void y(!0);var n},className:t.listItem,children:[Object(k.jsx)(u.a,{children:Object(k.jsx)(f.a,{})}),Object(k.jsx)(s.a,{primary:"".concat(null===a||void 0===a?void 0:a.filename,"  ").concat(h()(null===a||void 0===a?void 0:a.created).format("MMM Do YYYY"))})]},a.id)})):Object(k.jsx)(d.a,{children:"No handouts found..."})})]}),Object(k.jsx)(_,{filePath:S,isOpen:O,hendleOnClose:function(){return y(!1)}})]})}},441:function(t,e,a){"use strict";var n=a(2),c=a(0),i=(a(6),a(7)),r={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},o=function(t){return Object(n.a)({color:t.palette.text.primary},t.typography.body2,{backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}})};e.a=Object(i.a)((function(t){return{"@global":{html:r,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:Object(n.a)({margin:0},o(t),{"&::backdrop":{backgroundColor:t.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(t){var e=t.children,a=void 0===e?null:e;return t.classes,c.createElement(c.Fragment,null,a)}))},465:function(t,e,a){"use strict";var n=a(2),c=a(5),i=a(0),r=(a(6),a(3)),o=a(7),l=a(48),u=i.forwardRef((function(t,e){var a=t.classes,o=t.className,u=Object(c.a)(t,["classes","className"]),s=i.useContext(l.a);return i.createElement("div",Object(n.a)({className:Object(r.a)(a.root,o,"flex-start"===s.alignItems&&a.alignItemsFlexStart),ref:e},u))}));e.a=Object(o.a)((function(t){return{root:{minWidth:56,color:t.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(u)},555:function(t,e,a){"use strict";var n=a(21),c=a.n(n),i=a(33),r=a(533),o=a(534),l=a(56),u=a.n(l),s=a(44),d=a(57),p=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getProfile",value:function(){return u.a.get("".concat(s.a,"/client-portal/patient"),{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"updateProfile",value:function(t,e){return u.a.put("".concat(s.a,"/client-portal/patient/").concat(e),t,{headers:Object(d.a)()})}},{key:"getPractitioners",value:function(t){var e="".concat(s.a,"/client-portal/practitioners");return t&&(e="".concat(s.a,"/client-portal/practitioners/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getPractitionerDates",value:function(t){var e="".concat(s.a,"/client-portal/practitioner-dates");return t&&(e="".concat(s.a,"/client-portal/practitioner-dates/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getBookedAppointments",value:function(t,e){var a="".concat(s.a,"/client-portal/booked-appointments");return t&&(a="".concat(s.a,"/client-portal/booked-appointments?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(a,{headers:Object(d.a)(),params:e}).then((function(t){return t.data}))}},{key:"getAppointmentTypesByPractitionerId",value:function(t){return u.a.post("".concat(s.a,"/client-portal/appointment-types"),t,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"bookAppointment",value:function(t){return u.a.post("".concat(s.a,"/client-portal/appointment"),t,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"updateAppointment",value:function(t,e){return u.a.put("".concat(s.a,"/client-portal/appointment/").concat(e),t,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getEncounters",value:function(t){var e="".concat(s.a,"/client-portal/encounters");return t&&(e="".concat(s.a,"/client-portal/encounters/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getLabDocuments",value:function(t){var e="".concat(s.a,"/client-portal/labs");return t&&(e="".concat(s.a,"/client-portal/labs/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"createLabDocuments",value:function(t,e){var a="".concat(s.a,"/client-portal/labs");return t&&(a="".concat(s.a,"/client-portal/labs/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.post(a,e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getBillings",value:function(t){var e="".concat(s.a,"/client-portal/billings");return t&&(e="".concat(s.a,"/client-portal/billings/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"createBilling",value:function(t){return u.a.post("".concat(s.a,"/client-portal/billings"),t,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getBalance",value:function(t){var e="".concat(s.a,"/client-portal/balance");return t&&(e="".concat(s.a,"/client-portal/balance/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getPaymentMethods",value:function(t){var e="".concat(s.a,"/patient-portal/payment-methods");return t&&(e="".concat(s.a,"/patient-portal/payment-methods/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getPharmacies",value:function(){return u.a.get("".concat(s.a,"/client-portal/pharmacy"),{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"searchPharmacies",value:function(t){return u.a.post("".concat(s.a,"/client-portal/pharmacy/search"),t,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"updatePharmacy",value:function(t,e){return u.a.put("".concat(s.a,"/client-portal/pharmacy/").concat(t),e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getRequisitions",value:function(t){var e="".concat(s.a,"/client-portal/lab_requisitions");return t&&(e="".concat(s.a,"/client-portal/lab_requisitions/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getLabBilling",value:function(t){var e="".concat(s.a,"/client-portal/lab_billing");return t&&(e="".concat(s.a,"/client-portal/lab_billing/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getTestList",value:function(t){var e="".concat(s.a,"/client-portal/lab_requisitions/test-list");return t&&(e="".concat(s.a,"/client-portal/lab_requisitions/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),u.a.get(e,{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getTestProfileInfo",value:function(){var t=Object(i.a)(c.a.mark((function t(e){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(s.a,"/client-portal/lab_requisitions/test-profile-info?testId=").concat(e),t.next=3,u.a.get(a,{headers:Object(d.a)()});case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getProfileTests",value:function(){var t=Object(i.a)(c.a.mark((function t(e){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(s.a,"/client-portal/lab_requisitions/profile-tests?testId=").concat(e),t.next=3,u.a.get(a,{headers:Object(d.a)()});case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getHandouts",value:function(){return u.a.get("".concat(s.a,"/client-portal/handouts"),{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"createHandouts",value:function(){return u.a.post("".concat(s.a,"/client-portal/handouts"),{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"deleteHandout",value:function(t){return u.a.delete("".concat(s.a,"/client-portal/handouts/").concat(t),{headers:Object(d.a)()}).then((function(t){return t.data}))}},{key:"getPrescriptions",value:function(){return u.a.get("".concat(s.a,"/client-portal/prescription"),{headers:Object(d.a)()}).then((function(t){return t.data}))}}]),t}();e.a=new p},640:function(t,e){},641:function(t,e){},642:function(t,e){},643:function(t,e){},644:function(t,e){},681:function(t,e,a){"use strict";var n=a(4),c=a(29),i=a(0),r=a(432),o=a(438),l=a(436),u=a(1029),s=a(99),d=a(631),p=a.p+"static/media/sample.ac0398d4.pdf",f=a(1);d.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(d.c.version,"/pdf.worker.js");var b=Object(l.a)((function(t){return{paginationWrap:{display:"flex",justifyContent:"center",position:"absolute",bottom:t.spacing(1),width:"calc(100% - ".concat(t.spacing(8),"px)")}}})),h=function(t){var e=t.filePath,a=b(),l=Object(s.b)().enqueueSnackbar,p=Object(i.useState)(!1),h=Object(c.a)(p,2),g=h[0],j=h[1],m=Object(i.useState)({pageNumber:1,totalPages:1}),v=Object(c.a)(m,2),O=v[0],y=v[1];Object(i.useEffect)((function(){j(e)}),[e]);return Object(f.jsxs)(r.a,{minHeight:300,children:[Object(f.jsx)(d.a,{file:g,onLoadSuccess:function(t){return function(t){var e=t.numPages;y(Object(n.a)(Object(n.a)({},O),{},{totalPages:e}))}(t)},onLoadError:function(t){var e;l(null===(e=t)||void 0===e?void 0:e.message,{variant:"error"})},children:Object(f.jsx)(d.b,{pageNumber:O.pageNumber})}),Object(f.jsx)(o.a,{className:a.paginationWrap,children:Object(f.jsx)(u.a,{count:O.totalPages,shape:"rounded",onChange:function(t,e){y(Object(n.a)(Object(n.a)({},O),{},{pageNumber:e}))}})})]})};h.defaultProps={filePath:p};e.a=h}}]);
//# sourceMappingURL=41.4f4e3d07.chunk.js.map