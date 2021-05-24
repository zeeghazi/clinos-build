(this.webpackJsonpAvonEMR=this.webpackJsonpAvonEMR||[]).push([[85],{1144:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return R}));var n=a(13),c=a(4),i=a(29),r=a(0),o=a(436),l=a(95),s=a(438),u=a(439),p=a(332),d=a(329),h=a(432),m=a(411),b=a(195),y=a(99),j=a(16),f=a(212),v=a(555),O=a(650),g=a(1086),_=a.n(g),x=a(1085),k=a.n(x),P=a(1087),T=a.n(P),N=a(1),S=Object(o.a)((function(t){return{pharmacyCard:{borderRadius:t.spacing(.5),padding:t.spacing(1.5,1,1.5,1),border:"1px solid #dddd"},ml1:{marginLeft:t.spacing(1)},iconText:{marginBottom:"0.35em","& svg":{fontSize:18,marginRight:t.spacing(.5)}}}})),w=function(t){var e=S(),a=t.name,n=t.address,c=t.city,i=t.state,r=t.postal,o=t.phone;return Object(N.jsxs)(s.a,{className:e.pharmacyCard,children:[Object(N.jsxs)(s.a,{container:!0,alignItems:"center",className:e.iconText,children:[Object(N.jsx)(k.a,{}),Object(N.jsx)(l.a,{children:a})]}),Object(N.jsxs)(s.a,{container:!0,alignItems:"center",className:e.iconText,children:[Object(N.jsx)(_.a,{}),Object(N.jsx)(l.a,{children:n})]}),Object(N.jsx)(l.a,{gutterBottom:!0,children:"".concat(c," ").concat(i," ").concat(r)}),o&&Object(N.jsxs)(s.a,{container:!0,alignItems:"center",className:e.iconText,children:[Object(N.jsx)(T.a,{}),Object(N.jsxs)(l.a,{children:["Phone",Object(N.jsx)("span",{className:e.ml1,children:o})]})]})]})};w.defaultProps={name:"",city:"",state:"",postal:"",address:"",phone:""};var B=w,C=Object(o.a)((function(t){return{root:{flexGrow:1,padding:"40px 0px"},title:{paddingBottom:t.spacing(1)},inputTextRow:{marginBottom:t.spacing(3)},halfSectionCard:{padding:t.spacing(1.5,0,1,0)},divider:{margin:t.spacing(1,0)}}})),R=function(){var t=C(),e=Object(j.a)().user,a=Object(y.b)().enqueueSnackbar,o=Object(r.useState)(""),g=Object(i.a)(o,2),_=g[0],x=g[1],k=Object(r.useState)(""),P=Object(i.a)(k,2),T=P[0],S=P[1],w=Object(r.useState)({pharmacy1:"",pharmacy2:""}),R=Object(i.a)(w,2),A=R[0],I=R[1],M=Object(r.useState)({pharmacy1:null,pharmacy2:null}),q=Object(i.a)(M,2),E=q[0],L=q[1],D=Object(r.useState)({pharmacy1:[],pharmacy2:[]}),G=Object(i.a)(D,2),H=G[0],F=G[1],W=Object(r.useCallback)((function(){v.a.getPharmacies().then((function(t){var e=t.data.length?t.data[0]:null;e&&L({pharmacy1:Object(b.omitBy)(e,(function(t,e){return e.startsWith("pharmacy2")})),pharmacy2:Object(b.omitBy)(e,(function(t,e){return!e.startsWith("pharmacy2")}))})}))}),[]);Object(r.useEffect)((function(){W()}),[W]);var J=Object(f.a)(_,1e3);return Object(r.useEffect)((function(){if(J&&J.length>3){var t={data:{text:J}};v.a.searchPharmacies(t).then((function(t){F(Object(c.a)(Object(c.a)({},H),{},Object(n.a)({},T,t.data)))}))}}),[J]),Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(l.a,{component:"h1",variant:"h2",color:"textPrimary",className:t.title,children:"Pharmacies"}),Object(N.jsx)(s.a,{item:!0,xs:6,children:Object(N.jsx)(s.a,{className:t.halfSectionCard,children:Object(N.jsx)(s.a,{container:!0,spacing:3,children:O.c.map((function(i,r){var o,b,y,j,f,O,g,_,k,P,T,w;return Object(N.jsxs)(s.a,{item:!0,md:6,children:[Object(N.jsxs)(l.a,{variant:"h4",color:"textPrimary",children:["Pharmacy #"," ",r+1]}),Object(N.jsx)(u.a,{id:i.id,name:i.name,label:i.label,className:t.inputTextRow,value:A[i.name],onChange:function(t){return function(t){var e=t.target,a=e.value,i=e.name;I(Object(c.a)(Object(c.a)({},A),{},Object(n.a)({},i,a))),x(a),S(i)}(t)},inputProps:{autoComplete:"off"}}),Object(N.jsx)(p.a,{component:"ul",children:H[i.name].map((function(t){return Object(N.jsx)(d.a,{disableGutters:!0,button:!0,selected:!!E[i.name]&&(E[i.name].id===t.id||E[i.name].pharmacy2_id===t.id),onClick:function(){return function(t,i){var r=null===e||void 0===e?void 0:e.client_id,o={data:{pharmacy_id:"pharmacy1"===i?t.id:E.pharmacy1.id,pharmacy2_id:"pharmacy2"===i?t.id:E.pharmacy2.pharmacy2_id}};v.a.updatePharmacy(r,o).then((function(t){a("".concat(t.message),{variant:"success"}),W(),setTimeout((function(){F(Object(c.a)(Object(c.a)({},H),{},Object(n.a)({},i,[]))),I(Object(c.a)(Object(c.a)({},A),{},Object(n.a)({},i,"")))}),500)}))}(t,i.name)},children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)(l.a,{gutterBottom:!0,children:t.name}),Object(N.jsx)(l.a,{gutterBottom:!0,children:t.address}),Object(N.jsx)(l.a,{gutterBottom:!0,children:"".concat(t.city," ").concat(t.state," ").concat(t.postal)}),Object(N.jsxs)(l.a,{gutterBottom:!0,children:["Phone",t.phone]})]},t.id)},t.id)}))}),H[i.name].length||H[i.name].length?Object(N.jsx)(m.a,{className:t.divider}):null,!!E.pharmacy1&&0===r&&Object(N.jsx)(B,{name:null===(o=E.pharmacy1)||void 0===o?void 0:o.name,address:null===(b=E.pharmacy1)||void 0===b?void 0:b.address,city:null===(y=E.pharmacy1)||void 0===y?void 0:y.city,state:null===(j=E.pharmacy1)||void 0===j?void 0:j.state,postal:null===(f=E.pharmacy1)||void 0===f?void 0:f.postal,phone:null===(O=E.pharmacy1)||void 0===O?void 0:O.phone}),!!E.pharmacy2&&1===r&&Object(N.jsx)(B,{name:null===(g=E.pharmacy2)||void 0===g?void 0:g.pharmacy2_name,address:null===(_=E.pharmacy2)||void 0===_?void 0:_.pharmacy2_address,city:null===(k=E.pharmacy2)||void 0===k?void 0:k.pharmacy2_city,state:null===(P=E.pharmacy2)||void 0===P?void 0:P.pharmacy2_state,postal:null===(T=E.pharmacy2)||void 0===T?void 0:T.pharmacy2_postal,phone:null===(w=E.pharmacy2)||void 0===w?void 0:w.pharmacy2_phone})]},i.name)}))})})})]})}},555:function(t,e,a){"use strict";var n=a(21),c=a.n(n),i=a(33),r=a(533),o=a(534),l=a(56),s=a.n(l),u=a(44),p=a(57),d=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getProfile",value:function(){return s.a.get("".concat(u.a,"/client-portal/patient"),{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"updateProfile",value:function(t,e){return s.a.put("".concat(u.a,"/client-portal/patient/").concat(e),t,{headers:Object(p.a)()})}},{key:"getPractitioners",value:function(t){var e="".concat(u.a,"/client-portal/practitioners");return t&&(e="".concat(u.a,"/client-portal/practitioners/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getPractitionerDates",value:function(t){var e="".concat(u.a,"/client-portal/practitioner-dates");return t&&(e="".concat(u.a,"/client-portal/practitioner-dates/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getBookedAppointments",value:function(t,e){var a="".concat(u.a,"/client-portal/booked-appointments");return t&&(a="".concat(u.a,"/client-portal/booked-appointments?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(a,{headers:Object(p.a)(),params:e}).then((function(t){return t.data}))}},{key:"getAppointmentTypesByPractitionerId",value:function(t){return s.a.post("".concat(u.a,"/client-portal/appointment-types"),t,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"bookAppointment",value:function(t){return s.a.post("".concat(u.a,"/client-portal/appointment"),t,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"updateAppointment",value:function(t,e){return s.a.put("".concat(u.a,"/client-portal/appointment/").concat(e),t,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getEncounters",value:function(t){var e="".concat(u.a,"/client-portal/encounters");return t&&(e="".concat(u.a,"/client-portal/encounters/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getLabDocuments",value:function(t){var e="".concat(u.a,"/client-portal/labs");return t&&(e="".concat(u.a,"/client-portal/labs/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"createLabDocuments",value:function(t,e){var a="".concat(u.a,"/client-portal/labs");return t&&(a="".concat(u.a,"/client-portal/labs/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.post(a,e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getBillings",value:function(t){var e="".concat(u.a,"/client-portal/billings");return t&&(e="".concat(u.a,"/client-portal/billings/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"createBilling",value:function(t){return s.a.post("".concat(u.a,"/client-portal/billings"),t,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getBalance",value:function(t){var e="".concat(u.a,"/client-portal/balance");return t&&(e="".concat(u.a,"/client-portal/balance/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getPaymentMethods",value:function(t){var e="".concat(u.a,"/patient-portal/payment-methods");return t&&(e="".concat(u.a,"/patient-portal/payment-methods/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getPharmacies",value:function(){return s.a.get("".concat(u.a,"/client-portal/pharmacy"),{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"searchPharmacies",value:function(t){return s.a.post("".concat(u.a,"/client-portal/pharmacy/search"),t,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"updatePharmacy",value:function(t,e){return s.a.put("".concat(u.a,"/client-portal/pharmacy/").concat(t),e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getRequisitions",value:function(t){var e="".concat(u.a,"/client-portal/lab_requisitions");return t&&(e="".concat(u.a,"/client-portal/lab_requisitions/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getLabBilling",value:function(t){var e="".concat(u.a,"/client-portal/lab_billing");return t&&(e="".concat(u.a,"/client-portal/lab_billing/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getTestList",value:function(t){var e="".concat(u.a,"/client-portal/lab_requisitions/test-list");return t&&(e="".concat(u.a,"/client-portal/lab_requisitions/?patient_id=").concat(t.id,"&client_id=").concat(t.client_id)),s.a.get(e,{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getTestProfileInfo",value:function(){var t=Object(i.a)(c.a.mark((function t(e){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(u.a,"/client-portal/lab_requisitions/test-profile-info?testId=").concat(e),t.next=3,s.a.get(a,{headers:Object(p.a)()});case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getProfileTests",value:function(){var t=Object(i.a)(c.a.mark((function t(e){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(u.a,"/client-portal/lab_requisitions/profile-tests?testId=").concat(e),t.next=3,s.a.get(a,{headers:Object(p.a)()});case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getHandouts",value:function(){return s.a.get("".concat(u.a,"/client-portal/handouts"),{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"createHandouts",value:function(){return s.a.post("".concat(u.a,"/client-portal/handouts"),{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"deleteHandout",value:function(t){return s.a.delete("".concat(u.a,"/client-portal/handouts/").concat(t),{headers:Object(p.a)()}).then((function(t){return t.data}))}},{key:"getPrescriptions",value:function(){return s.a.get("".concat(u.a,"/client-portal/prescription"),{headers:Object(p.a)()}).then((function(t){return t.data}))}}]),t}();e.a=new d},650:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i}));var n={firstRow:[{name:"firstname",id:"firstname",label:"First Name",baseType:"input",type:"text",options:[]},{name:"middlename",id:"middlename",label:"Middle Name",baseType:"input",type:"text",options:[]},{name:"lastname",id:"lastName",label:"Last Name",baseType:"input",type:"text",options:[]},{name:"status",id:"status",label:"Status",baseType:"select",type:null,options:[{label:"Active",value:"active"},{label:"Inactive",value:"inActive"}]},{name:"provider",id:"provider",label:"Provider",baseType:"input",type:"text",options:[]}],secondRow:[{name:"phone_home",id:"homePhone",label:"Home Phone",baseType:"input",type:"text",options:[]},{name:"phone_cell",id:"cellPhone",label:"Cell Phone",baseType:"input",type:"text",options:[]},{name:"phone_work",id:"workPhone",label:"Work Phone",baseType:"input",type:"text",options:[]},{name:"email",id:"email",label:"Email",baseType:"input",type:"email",options:[]}],thirdRow:[{name:"phone_other",id:"otherPhone",label:"Other Phone",baseType:"input",type:"number",options:[]},{name:"phone_note",id:"phoneNotes",label:"Phone Notes",baseType:"input",type:"text",options:[]},{name:"gender",id:"gender",label:"Gender",baseType:"select",type:null,options:[{label:"Male",value:"M"},{label:"Female",value:"F"}]},{name:"ssn",id:"socialSecurity",label:"Social Security",baseType:"input",type:"text",options:[]}]},c=[{name:"insurance_name",id:"insurance_name",label:"Plan Name",baseType:"input",type:"text",options:[]},{name:"insurance_group",id:"insurance_group",label:"Group Name",baseType:"input",type:"text",options:[]},{name:"insurance_member",id:"insurance_member",label:"Member Id",baseType:"input",type:"number",options:[]},{name:"insurance_phone",id:"insurance_phone",label:"Plan Phone No",baseType:"input",type:"number",options:[]},{name:"insurance_desc",id:"insurance_desc",label:"Plan Description",baseType:"input",type:"text",options:[]}],i=[{id:"pharmacy1",name:"pharmacy1",label:"Search",address:"100 Main St, Ottario Canada",phone:"030-123-456"},{id:"pharmacy2",name:"pharmacy2",label:"Search",address:"100 Main St, New York USA",phone:"030-123-456"}]}}]);
//# sourceMappingURL=85.d1e9d71b.chunk.js.map