(this.webpackJsonpAvonEMR=this.webpackJsonpAvonEMR||[]).push([[45],{1129:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ce}));var n=a(84),c=a(29),i=a(0),r=a(436),o=a(7),l=a(95),s=a(432),u=a(438),d=a(414),p=a(457),b=a(469),h=a(470),m=a(477),j=a(442),f=a(446),O=a(445),v=a(447),g=a(443),x=a(444),y=a(99),k=a(15),_=a(544),C=a(16),N=a(777),B=a(533),P=a(534),S=a(56),w=a.n(S),z=a(44),T=a(57),F=new(function(){function e(){Object(B.a)(this,e)}return Object(P.a)(e,[{key:"getAll",value:function(){return w.a.get("".concat(z.a,"/patient-portal/purchase-labs"),{headers:Object(T.a)()}).then((function(e){return e.data}))}},{key:"create",value:function(e){return w.a.post("".concat(z.a,"/patient-portal/purchase-labs"),e,{headers:Object(T.a)()}).then((function(e){return e.data}))}}]),e}()),E=a(64),W=a(13),q=a(4),I=a(9),L=a(439),M=a(422),A=a(455),D=a(456),H=a(451),R=a(413),V=a(570),$=a.n(V),J=a(3),G=a(578),U=a(573),Z=a(651),K=a(574),Q=a(555),X=a(1),Y=Object(r.a)((function(e){return{title:{backgroundColor:e.palette.primary.light,"& h2":{color:"#fff"}},closeButton:{position:"absolute",right:e.spacing(.5),top:e.spacing(.5),color:"#ffffff"},formContainer:{margin:e.spacing(3,0)},gutterBottom:{marginBottom:e.spacing(1)},circularProgress:{position:"absolute",textAlign:"center",left:"50%"},modalConentBelow:{opacity:"1"},contentWithLoading:{opacity:"0.5"},customLabel:{fontSize:16,color:"#37474f",marginBottom:e.spacing(2)},buttonsContainer:{margin:e.spacing(3,0)},cancelButton:{borderColor:I.a.orange[600],color:I.a.orange[600]}}})),ee=function(e){var t,a=Y(),n=Object(y.b)().enqueueSnackbar,r=Object(C.a)().user,o=e.isOpen,s=e.onClose,p=e.reloadData,b=Object(i.useState)({cardType:"",cardNumber:"",cvv:"",expiryDate:"",address:"",address2:"",city:"",postal:""}),h=Object(c.a)(b,2),m=h[0],j=h[1],f=Object(i.useState)(""),O=Object(c.a)(f,2),v=O[0],g=O[1],x=Object(i.useState)(""),k=Object(c.a)(x,2),_=k[0],B=k[1],P=Object(i.useState)(!1),S=Object(c.a)(P,2),w=S[0],z=S[1];Object(i.useEffect)((function(){var e=G.a.filter((function(e){return e[1]===m.country}));if(e.length){g(e[0]);var t=e[0][2].split("|").map((function(e){var t=e.split("~"),a=Object(c.a)(t,2),n=a[0];return[void 0===n?null:n,a[1]]})).filter((function(e){return e[1]===m.state}));B(t[0][1])}}),[m]);var T=function(e){var t=e.target,a=t.value;!function(e,t){j(Object(q.a)(Object(q.a)({},m),{},Object(W.a)({},e,t)))}(t.name,a)},F=function(e,t){"country"===e?g(t):"region"===e&&B(t)},E=Object(i.useCallback)((function(){Q.a.getProfile().then((function(e){var t,a=null===(t=e.data)||void 0===t?void 0:t[0];j((function(e){return Object(q.a)(Object(q.a)({},e),a)}))}))}),[]);Object(i.useEffect)((function(){E()}),[E]);return Object(X.jsxs)(A.a,{open:o,onClose:s,fullWidth:!0,maxWidth:"xs","aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(X.jsxs)(H.a,{id:"alert-dialog-title",className:a.title,children:["Add Payment Method",Object(X.jsx)(R.a,{"aria-label":"Close",className:a.closeButton,onClick:s,children:Object(X.jsx)($.a,{})})]}),Object(X.jsxs)(D.a,{className:a.content,children:[w&&Object(X.jsx)("div",{className:a.circularProgress,children:Object(X.jsx)(M.a,{})}),Object(X.jsx)("div",{className:Object(J.a)((t={},Object(W.a)(t,a.modalConentBelow,!0),Object(W.a)(t,a.contentWithLoading,w),t)),children:Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault(),z(!0);var t={data:{exp:m.expiryDate.replace("/",""),type:m.cardType[0]||"V",cvc:m.cvv,account_number:m.cardNumber.replaceAll("/",""),stripe_customer_id:r.stripe_customer_id,corp_stripe_customer_id:r.corp_stripe_customer_id,address:m.address,address2:m.address2,city:m.city,postal:m.postal,country:v[1],state:_}};N.a.createPaymentMethod(t).then((function(e){n("".concat(e.message),{variant:"success"}),p(),z(!1),s()}))},children:[Object(X.jsxs)(u.a,{className:a.formContainer,children:[Object(X.jsxs)(u.a,{children:[Object(X.jsx)(Z.a,{required:!0,fullWidth:!0,className:a.gutterBottom,type:"text",name:"cardNumber",label:"Card Number",margin:"dense",variant:"outlined",value:m.cardNumber,mask:"9999/9999/9999/9999",onChange:function(e){return T(e)}}),m.cardType&&m.cardType.length?Object(X.jsx)(l.a,{gutterBottom:!0,children:m.cardType}):null]}),Object(X.jsx)(u.a,{children:Object(X.jsx)(L.a,{required:!0,variant:"outlined",margin:"dense",name:"cvv",id:"cvv",type:"text",label:"CVV",className:a.gutterBottom,value:m.cvv,onChange:function(e){return T(e)}})}),Object(X.jsx)(u.a,{children:Object(X.jsx)(Z.a,{required:!0,className:a.gutterBottom,type:"text",name:"expiryDate",label:"Expiration",margin:"dense",variant:"outlined",value:m.expiryDate,mask:"99/99",onChange:function(e){return T(e)}})}),Object(X.jsx)(u.a,{children:Object(X.jsx)(L.a,{className:a.gutterBottom,label:"Address",name:"address",value:m.address,fullWidth:!0,onChange:function(e){return T(e)},margin:"dense",variant:"outlined"})}),Object(X.jsx)(u.a,{children:Object(X.jsx)(L.a,{className:a.gutterBottom,label:"Address Line 2",name:"address2",value:m.address2,fullWidth:!0,onChange:function(e){return T(e)},margin:"dense",variant:"outlined"})}),Object(X.jsx)(u.a,{children:Object(X.jsx)(L.a,{className:a.gutterBottom,label:"City",name:"city",value:m.city,fullWidth:!0,onChange:function(e){return T(e)},margin:"dense",variant:"outlined"})}),Object(X.jsx)(u.a,{children:Object(X.jsx)(L.a,{className:a.gutterBottom,label:"Zip/Postal",name:"postal",value:m.postal,fullWidth:!0,onChange:function(e){return T(e)},margin:"dense",variant:"outlined"})}),Object(X.jsx)(u.a,{children:Object(X.jsx)(U.a,{id:"country-select",error:null,name:"country-select",helperText:"",label:"Country",handleChange:function(e,t){return F(e,t)},country:v,margin:"dense",variant:"outlined"})}),Object(X.jsx)(u.a,{children:Object(X.jsx)(K.a,{id:"state-select",error:null,name:"state-select",helperText:"",label:"State",handleChange:function(e,t){return F(e,t)},country:v,region:_,margin:"dense",variant:"outlined"})})]}),Object(X.jsxs)(u.a,{container:!0,className:a.buttonsContainer,justify:"space-between",children:[Object(X.jsx)(d.a,{variant:"outlined",color:"primary",type:"submit",children:"Add Method"}),Object(X.jsx)(d.a,{size:"small",variant:"outlined",onClick:function(){return s()},className:a.cancelButton,children:"Cancel"})]})]})})]})]})},te=Object(r.a)((function(e){return{root:{flexGrow:1,padding:"40px 0px"},customSelect:{width:"220px",marginTop:e.spacing(2.5)},title:{paddingBottom:e.spacing(.5)},table:{"& th":{fontWeight:600}},selectCheckbox:{padding:0},Total:{marginTop:e.spacing(2),"& span":{fontWeight:600,marginRight:e.spacing(.5)}},purchaseButton:{display:"block",width:"220px",marginTop:e.spacing(2.5)},boldPrice:{fontWeight:"bold",padding:e.spacing(0,.5)},link:{padding:e.spacing(0,.5)}}})),ae=Object(o.a)((function(){return{head:{whiteSpace:"nowrap",fontSize:14,fontWeight:700,padding:"6px 24px 6px 2px",borderBottom:"unset"},body:{fontSize:14,borderBottom:"unset"}}}))(O.a),ne=Object(o.a)((function(){return{root:{fontSize:14,cursor:"pointer","& th":{fontSize:14,whiteSpace:"nowrap",padding:"0px 16px 0px 2px",lineHeight:"16px"},"& td":{fontSize:14,whiteSpace:"nowrap",padding:"0px 16px 0px 2px",lineHeight:"16px"}}}}))(x.a),ce=function(){var e=te(),t=Object(y.b)().enqueueSnackbar,a=Object(C.a)(),r=a.lastVisitedPatient,o=a.user,O=Object(i.useState)([]),B=Object(c.a)(O,2),P=B[0],S=B[1],w=Object(i.useState)([]),z=Object(c.a)(w,2),T=z[0],W=z[1],q=Object(i.useState)([]),I=Object(c.a)(q,2),L=I[0],M=I[1],A=Object(i.useState)(null),D=Object(c.a)(A,2),H=D[0],R=D[1],V=Object(i.useState)(0),$=Object(c.a)(V,2),J=$[0],G=$[1],U=Object(i.useState)([]),Z=Object(c.a)(U,2),K=Z[0],Q=Z[1],Y=Object(i.useState)(!1),ce=Object(c.a)(Y,2),ie=ce[0],re=ce[1],oe=Object(i.useState)(!1),le=Object(c.a)(oe,2),se=le[0],ue=le[1],de=Object(i.useState)(!1),pe=Object(c.a)(de,2),be=pe[0],he=pe[1],me=Object(i.useCallback)((function(){N.a.getPaymentMethods(r).then((function(e){M([].concat(Object(n.a)(e.data),[{id:999,type:"new",account_number:"000"}]))}))}),[r]);Object(i.useEffect)((function(){F.getAll().then((function(e){Q(e.data)})),me()}),[me]);var je=function(e,t){e.stopPropagation();var a=P.indexOf(t),n=[];-1===a?n=n.concat(P,t):0===a?n=n.concat(P.slice(1)):a===P.length-1?n=n.concat(P.slice(0,-1)):a>0&&(n=n.concat(P.slice(0,a),P.slice(a+1))),S(n),function(e){var t=K.filter((function(t){return e.includes(t.patient_cpt_id)}));W(t);var a=t.reduce((function(e,t){return e+t.price}),0);G(a)}(n)};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(_.a,{open:se,title:"Purchase Confirmation",message:"Confirm purchase of $".concat(null===J||void 0===J?void 0:J.toFixed(2),"?"),applyButtonText:"Confirm",cancelButtonText:"Cancel",applyForm:function(){return function(){var e=L.filter((function(e){return e.id===Number(H)})),a={data:{payment_method_id:H,corp_stripe_payment_method_token:e[0].corp_stripe_payment_method_token,customer_id:o.corp_stripe_customer_id,amount:J,patient_cpt_ids:P,selectedLabs:T}};F.create(a).then((function(){t("Lab purchased successfully!",{variant:"success"}),ue(!1),he(!0),S([]),R(null)}))}()},cancelForm:function(){return ue(!1)}}),Object(X.jsxs)("div",{className:e.root,children:[be?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(l.a,{component:"h1",variant:"h2",color:"textPrimary",className:e.title,children:"Purchase Lab Confirmation"}),Object(X.jsxs)(s.a,{mt:2,children:[Object(X.jsxs)(l.a,{variant:"h5",gutterBottom:!0,children:["This is a confirmation that you have purchased lab(s) for",Object(X.jsxs)("span",{className:e.boldPrice,children:["$",null===J||void 0===J?void 0:J.toFixed(2)]})]}),Object(X.jsxs)(l.a,{variant:"h5",gutterBottom:!0,children:["Next step is to",Object(X.jsx)(k.a,{className:e.link,to:"/patient/labs-requisition",children:"click here"}),"to print your lab requisition."]})]})]}):Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(l.a,{component:"h1",variant:"h2",color:"textPrimary",className:e.title,children:"Purchase Lab Tests"}),Object(X.jsxs)(u.a,{item:!0,md:6,sm:12,xs:12,children:[Object(X.jsx)(v.a,{className:e.tableContainer,children:Object(X.jsxs)(j.a,{size:"small",className:e.table,"aria-label":"a dense table",children:[Object(X.jsx)(g.a,{children:Object(X.jsxs)(x.a,{children:[Object(X.jsx)(ae,{children:"Select"}),Object(X.jsx)(ae,{children:"Lab Name"}),Object(X.jsx)(ae,{children:"Price"})]})}),Object(X.jsx)(f.a,{children:K.map((function(t){var a,n,c=(n=t.patient_cpt_id,-1!==P.indexOf(n));return Object(X.jsxs)(ne,{hover:!0,onClick:function(e){return je(e,t.patient_cpt_id)},role:"checkbox",children:[Object(X.jsx)(ae,{scope:"item",children:Object(X.jsx)(p.a,{onClick:function(e){return je(e,t.patient_cpt_id)},className:e.selectCheckbox,checked:c})}),Object(X.jsx)(ae,{scope:"item",children:t.cpt_name}),Object(X.jsxs)(ae,{scope:"item",children:["$",null===t||void 0===t||null===(a=t.price)||void 0===a?void 0:a.toFixed(2)]})]},t.patient_cpt_id)}))})]})}),Object(X.jsxs)("div",{className:e.Total,children:[Object(X.jsx)("span",{children:"Total:"}),"$",null===J||void 0===J?void 0:J.toFixed(2)]}),Object(X.jsxs)(b.a,{variant:"outlined",className:e.customSelect,size:"small",children:[Object(X.jsx)(h.a,{htmlFor:"age-native-simple",children:"Select Payment Method"}),Object(X.jsxs)(m.a,{native:!0,value:H,onChange:function(e){return t=e.target.value,void(999===Number(t)?re(!0):R(t));var t},inputProps:{name:"type",id:"age-native-simple"},label:"User",children:[Object(X.jsx)("option",{"aria-label":"None",value:""}),L.map((function(e){return Object(X.jsxs)("option",{value:e.id,children:[Object(E.D)(e.type),999!==e.id?" (".concat(e.account_number,")"):""]},e.id)}))]})]}),Object(X.jsx)(d.a,{disabled:!J||!H,variant:"outlined",color:"primary",size:"medium",onClick:function(){return ue(!0)},className:e.purchaseButton,children:"Purchase"})]})]}),Object(X.jsx)(ee,{isOpen:ie,onClose:function(){return re(!1)},reloadData:function(){return me()}})]})]})}},452:function(e,t,a){"use strict";var n=a(2),c=a(5),i=a(0),r=(a(6),a(3)),o=a(7),l=i.forwardRef((function(e,t){var a=e.disableSpacing,o=void 0!==a&&a,l=e.classes,s=e.className,u=Object(c.a)(e,["disableSpacing","classes","className"]);return i.createElement("div",Object(n.a)({className:Object(r.a)(l.root,s,!o&&l.spacing),ref:t},u))}));t.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(l)},457:function(e,t,a){"use strict";var n=a(2),c=a(5),i=a(0),r=(a(6),a(3)),o=a(549),l=a(100),s=Object(l.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(l.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=a(23),p=Object(l.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),b=a(11),h=a(7),m=i.createElement(u,null),j=i.createElement(s,null),f=i.createElement(p,null),O=i.forwardRef((function(e,t){var a=e.checkedIcon,l=void 0===a?m:a,s=e.classes,u=e.color,d=void 0===u?"secondary":u,p=e.icon,h=void 0===p?j:p,O=e.indeterminate,v=void 0!==O&&O,g=e.indeterminateIcon,x=void 0===g?f:g,y=e.inputProps,k=e.size,_=void 0===k?"medium":k,C=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=v?x:h,B=v?x:l;return i.createElement(o.a,Object(n.a)({type:"checkbox",classes:{root:Object(r.a)(s.root,s["color".concat(Object(b.a)(d))],v&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":v},y),icon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===_?_:N.props.fontSize}),checkedIcon:i.cloneElement(B,{fontSize:void 0===B.props.fontSize&&"small"===_?_:B.props.fontSize}),ref:t},C))}));t.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O)},544:function(e,t,a){"use strict";a(0);var n=a(95),c=a(414),i=a(455),r=a(452),o=a(456),l=a(451),s=a(436),u=a(350),d=a(1),p=Object(s.a)((function(e){return Object(u.a)({titleContainer:{minHeight:50,backgroundColor:e.palette.primary.main,"& h5":{color:e.palette.common.white}},content:{padding:"1rem 1.5rem"},actionsContainer:{padding:"1rem 1.5rem",justifyContent:"space-between"},w100:{minWidth:100}})})),b=function(e){var t=e.title,a=e.open,s=e.message,u=e.applyForm,b=e.cancelForm,h=e.applyButtonText,m=e.cancelButtonText,j=e.size,f=p();return Object(d.jsxs)(i.a,{open:a,onClose:b,fullWidth:!0,maxWidth:j,disableBackdropClick:!0,children:[Object(d.jsx)(l.a,{disableTypography:!0,className:f.titleContainer,id:"form-dialog-title",children:Object(d.jsx)(n.a,{variant:"h5",children:t})}),Object(d.jsx)(o.a,{className:f.content,children:Object(d.jsx)(n.a,{variant:"h5",children:s})}),Object(d.jsxs)(r.a,{classes:{root:f.actionsContainer},children:[Object(d.jsx)(c.a,{className:f.w100,onClick:b,type:"submit",variant:"outlined",disableElevation:!0,children:m}),Object(d.jsx)(c.a,{className:f.w100,onClick:u,type:"submit",variant:"outlined",color:"primary",disableElevation:!0,children:h})]})]})};b.defaultProps={title:"",message:"",applyForm:function(){},cancelForm:function(){},applyButtonText:"Continue",cancelButtonText:"Cancel",size:"xs"},t.a=b},549:function(e,t,a){"use strict";var n=a(2),c=a(50),i=a(5),r=a(0),o=(a(6),a(3)),l=a(194),s=a(540),u=a(7),d=a(413),p=r.forwardRef((function(e,t){var a=e.autoFocus,u=e.checked,p=e.checkedIcon,b=e.classes,h=e.className,m=e.defaultChecked,j=e.disabled,f=e.icon,O=e.id,v=e.inputProps,g=e.inputRef,x=e.name,y=e.onBlur,k=e.onChange,_=e.onFocus,C=e.readOnly,N=e.required,B=e.tabIndex,P=e.type,S=e.value,w=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),z=Object(l.a)({controlled:u,default:Boolean(m),name:"SwitchBase",state:"checked"}),T=Object(c.a)(z,2),F=T[0],E=T[1],W=Object(s.a)(),q=j;W&&"undefined"===typeof q&&(q=W.disabled);var I="checkbox"===P||"radio"===P;return r.createElement(d.a,Object(n.a)({component:"span",className:Object(o.a)(b.root,h,F&&b.checked,q&&b.disabled),disabled:q,tabIndex:null,role:void 0,onFocus:function(e){_&&_(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){y&&y(e),W&&W.onBlur&&W.onBlur(e)},ref:t},w),r.createElement("input",Object(n.a)({autoFocus:a,checked:u,defaultChecked:m,className:b.input,disabled:q,id:I&&O,name:x,onChange:function(e){var t=e.target.checked;E(t),k&&k(e,t)},readOnly:C,ref:g,required:N,tabIndex:B,type:P,value:S},v)),F?p:f)}));t.a=Object(u.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p)},555:function(e,t,a){"use strict";var n=a(21),c=a.n(n),i=a(33),r=a(533),o=a(534),l=a(56),s=a.n(l),u=a(44),d=a(57),p=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"getProfile",value:function(){return s.a.get("".concat(u.a,"/client-portal/patient"),{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"updateProfile",value:function(e,t){return s.a.put("".concat(u.a,"/client-portal/patient/").concat(t),e,{headers:Object(d.a)()})}},{key:"getPractitioners",value:function(e){var t="".concat(u.a,"/client-portal/practitioners");return e&&(t="".concat(u.a,"/client-portal/practitioners/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getPractitionerDates",value:function(e){var t="".concat(u.a,"/client-portal/practitioner-dates");return e&&(t="".concat(u.a,"/client-portal/practitioner-dates/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getBookedAppointments",value:function(e,t){var a="".concat(u.a,"/client-portal/booked-appointments");return e&&(a="".concat(u.a,"/client-portal/booked-appointments?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(a,{headers:Object(d.a)(),params:t}).then((function(e){return e.data}))}},{key:"getAppointmentTypesByPractitionerId",value:function(e){return s.a.post("".concat(u.a,"/client-portal/appointment-types"),e,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"bookAppointment",value:function(e){return s.a.post("".concat(u.a,"/client-portal/appointment"),e,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"updateAppointment",value:function(e,t){return s.a.put("".concat(u.a,"/client-portal/appointment/").concat(t),e,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getEncounters",value:function(e){var t="".concat(u.a,"/client-portal/encounters");return e&&(t="".concat(u.a,"/client-portal/encounters/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getLabDocuments",value:function(e){var t="".concat(u.a,"/client-portal/labs");return e&&(t="".concat(u.a,"/client-portal/labs/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"createLabDocuments",value:function(e,t){var a="".concat(u.a,"/client-portal/labs");return e&&(a="".concat(u.a,"/client-portal/labs/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.post(a,t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getBillings",value:function(e){var t="".concat(u.a,"/client-portal/billings");return e&&(t="".concat(u.a,"/client-portal/billings/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"createBilling",value:function(e){return s.a.post("".concat(u.a,"/client-portal/billings"),e,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getBalance",value:function(e){var t="".concat(u.a,"/client-portal/balance");return e&&(t="".concat(u.a,"/client-portal/balance/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getPaymentMethods",value:function(e){var t="".concat(u.a,"/patient-portal/payment-methods");return e&&(t="".concat(u.a,"/patient-portal/payment-methods/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getPharmacies",value:function(){return s.a.get("".concat(u.a,"/client-portal/pharmacy"),{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"searchPharmacies",value:function(e){return s.a.post("".concat(u.a,"/client-portal/pharmacy/search"),e,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"updatePharmacy",value:function(e,t){return s.a.put("".concat(u.a,"/client-portal/pharmacy/").concat(e),t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getRequisitions",value:function(e){var t="".concat(u.a,"/client-portal/lab_requisitions");return e&&(t="".concat(u.a,"/client-portal/lab_requisitions/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getLabBilling",value:function(e){var t="".concat(u.a,"/client-portal/lab_billing");return e&&(t="".concat(u.a,"/client-portal/lab_billing/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getTestList",value:function(e){var t="".concat(u.a,"/client-portal/lab_requisitions/test-list");return e&&(t="".concat(u.a,"/client-portal/lab_requisitions/?patient_id=").concat(e.id,"&client_id=").concat(e.client_id)),s.a.get(t,{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getTestProfileInfo",value:function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(u.a,"/client-portal/lab_requisitions/test-profile-info?testId=").concat(t),e.next=3,s.a.get(a,{headers:Object(d.a)()});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getProfileTests",value:function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(u.a,"/client-portal/lab_requisitions/profile-tests?testId=").concat(t),e.next=3,s.a.get(a,{headers:Object(d.a)()});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getHandouts",value:function(){return s.a.get("".concat(u.a,"/client-portal/handouts"),{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"createHandouts",value:function(){return s.a.post("".concat(u.a,"/client-portal/handouts"),{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"deleteHandout",value:function(e){return s.a.delete("".concat(u.a,"/client-portal/handouts/").concat(e),{headers:Object(d.a)()}).then((function(e){return e.data}))}},{key:"getPrescriptions",value:function(){return s.a.get("".concat(u.a,"/client-portal/prescription"),{headers:Object(d.a)()}).then((function(e){return e.data}))}}]),e}();t.a=new p},573:function(e,t,a){"use strict";a(0);var n=a(426),c=a(439),i=a(578),r=a(1);function o(e){var t=e.country,a=e.size,o=e.handleChange,l=e.outlined,s=e.margin;return Object(r.jsx)(c.a,{size:a,id:"country",label:"Country",value:t,select:!0,onChange:function(e){return o("country",e.target.value)},fullWidth:!0,variant:l?"outlined":"standard",margin:s||"none",children:i.a.map((function(e){return Object(r.jsx)(n.a,{value:e,children:e[0]},e[0])}))})}o.defaultProps={size:"medium",country:null,outlined:!0,margin:"none"},t.a=o},574:function(e,t,a){"use strict";var n=a(29),c=(a(0),a(426)),i=a(439),r=a(1),o=function(e){return e?e[2].split("|").map((function(e){var t=e.split("~"),a=Object(n.a)(t,2),c=a[0];return[void 0===c?null:c,a[1]]})):[]};function l(e){var t=e.size,a=e.label,n=e.region,l=e.handleChange,s=e.outlined,u=e.country,d=e.margin;return Object(r.jsx)(i.a,{size:t,id:"state",label:a,value:n,select:!0,onChange:function(e){return l("region",e.target.value)},fullWidth:!0,variant:s?"outlined":"standard",margin:d||"none",children:o(u).map((function(e){return Object(r.jsx)(c.a,{value:e[1],children:e[0]},e[0])}))})}l.defaultProps={size:"medium",outlined:!0,margin:"none"},t.a=l},651:function(e,t,a){"use strict";var n=a(4),c=(a(0),a(439)),i=a(684),r=a.n(i),o=a(1),l=function(e){var t=e.className,a=e.disabled,i=e.required,l=e.fullWidth,s=e.type,u=e.name,d=e.label,p=e.autoFocus,b=e.margin,h=e.variant,m=e.value,j=e.mask,f=e.onChange;return Object(o.jsx)(r.a,{disabled:a,mask:j,value:m,onChange:f,children:function(e){return Object(o.jsx)(c.a,Object(n.a)(Object(n.a)({},e),{},{disabled:a,autoFocus:p,required:i,fullWidth:l,name:u,label:d,margin:b,type:s,className:t,variant:h}))}})};l.defaultProps={className:"",type:"text",name:"",label:"Label",margin:"normal",variant:"outlined",value:"",mask:"",autoFocus:!1,required:!1,disabled:!1,fullWidth:!1},t.a=l},777:function(e,t,a){"use strict";var n=a(533),c=a(534),i=a(56),r=a.n(i),o=a(44),l=a(57),s=function(){function e(){Object(n.a)(this,e)}return Object(c.a)(e,[{key:"getPaymentMethods",value:function(){return r.a.get("".concat(o.a,"/patient-portal/payment-methods"),{headers:Object(l.a)()}).then((function(e){return e.data}))}},{key:"createPaymentMethod",value:function(e){return r.a.post("".concat(o.a,"/patient-portal/payment-methods"),e,{headers:Object(l.a)()}).then((function(e){return e.data}))}},{key:"updatePaymentMethod",value:function(e,t){return r.a.put("".concat(o.a,"/patient-portal/payment-methods/").concat(e),t,{headers:Object(l.a)()}).then((function(e){return e.data}))}},{key:"deletePaymentMethod",value:function(e){return r.a.delete("".concat(o.a,"/patient-portal/payment-methods/").concat(e),{headers:Object(l.a)()}).then((function(e){return e.data}))}}]),e}();t.a=new s}}]);
//# sourceMappingURL=45.80996bc7.chunk.js.map