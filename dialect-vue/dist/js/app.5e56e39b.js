(function(e){function a(a){for(var s,o,i=a[0],c=a[1],l=a[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(a);while(f.length)f.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],s=!0,i=1;i<t.length;i++){var c=t[i];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),e=o(o.s=t[0]))}return e}var s={},n={app:0},r=[];function o(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=s,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)o.d(t,s,function(a){return e[a]}.bind(null,s));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var d=c;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"005b":function(e,a,t){},"034f":function(e,a,t){"use strict";var s=t("8a23"),n=t.n(s);n.a},2290:function(e,a,t){"use strict";var s=t("3c5d"),n=t.n(s);n.a},"3c5d":function(e,a,t){},4678:function(e,a,t){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var a=r(e);return t(a)}function r(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"4b09":function(e,a,t){},"4d12":function(e,a,t){},"4ec8":function(e,a,t){"use strict";var s=t("5fff"),n=t.n(s);n.a},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("8aa5"),n=t.n(s),r=Object(s["initializeApp"])({apiKey:"AIzaSyAoa44KA10-7GxuSoKNWDrnStcBBa0Ru7w",authDomain:"dialectbotreclutamiento-shginm.firebaseapp.com",databaseURL:"https://dialectbotreclutamiento-shginm.firebaseio.com",projectId:"dialectbotreclutamiento-shginm",storageBucket:"dialectbotreclutamiento-shginm.appspot.com",messagingSenderId:"691851747789",appId:"1:691851747789:web:fd876f1cf6075ee4b4e484"}),o=r.database(),i=o.ref("usuarios_fb"),c={"auth/wrong-password":"Contraseña incorrecta","auth/invalid-email":"Formato de correo incorrecto","auth/email-already-in-use":"Correo ya en uso","auth/network-request-failed":"No estas conectado a la red"},l=t("2b0e"),d=t("5f30"),u=t.n(d),f=t("055a"),b=t.n(f),p=t("5f5b"),m=t("1bdd"),j=(t("f9e3"),t("2dd8"),t("5fbf")),h=t("58e7"),v=t("ad3d"),g=(t("45fc"),t("8c4f")),_=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("b-button",{attrs:{variant:"outline-danger"},on:{click:e.logout}},[e._v("Logout")]),t("DownloadExcel",{staticClass:"download-excel"}),t("UsersTable",{staticClass:"users-table"})],1)},w=[],y=(t("ac1f"),t("5319"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-table",{attrs:{striped:"",hover:"",items:e.users_data,fields:e.fields}})],1)}),k=[],x=(t("d81d"),t("5530")),E=t("c1df"),O=t.n(E);O.a.locale("es-us");var z={data:function(){return{fields:[{key:"name",label:"Nombre",sortable:!1},{key:"date_of_interview",label:"Fecha de Entrevista",sortable:!0},{key:"experience_area",label:"Área de Experiencia",sortable:!1},{key:"experience_time",label:"Tiempo de Experiencia",sortable:!1},{key:"turn",label:"Turno de Interés",sortable:!1},{key:"email",label:"Email",sortable:!1},{key:"phone_number",label:"Teléfono",sortable:!1},{key:"age_range",label:"Rango de Edad",sortable:!1},{key:"gender",label:"Género",sortable:!1},{key:"status",label:"Estatus",sortable:!0},{key:"last_interaction",label:"Última Interacción",sortable:!0}]}},firebase:{users:i},computed:{users_data:function(){return this.users.map((function(e){return Object(x["a"])({},e,{date_of_interview:O()(e.date_of_interview).format("dddd, D MMMM YYYY - hh:mm a"),last_interaction:O()(e.last_interaction).format("dddd, D MMMM YYYY")})}))}}},C=z,S=(t("722d"),t("2877")),M=Object(S["a"])(C,y,k,!1,null,"67f7f0aa",null),P=M.exports,N=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("download-excel",{attrs:{data:e.users,fields:e.json_fields,worksheet:"My Worksheet",name:"filename.xls"}},[t("b-button",{attrs:{variant:"success"}},[e._v("Descargar Excel")])],1)},T=[],I={data:function(){return{users:[],json_fields:{Nombre:"name","Fecha de Entrevista":"date_of_interview","Área de Experiencia":"experience_area","Tiempo de Experiencia":"experience_time","Turno de Interés":"turn",Email:"email",Telefono:"phone_number","Rango de Edad":"age_range","Género":"gender",Estatus:"status","Dia de Registro":"last_interaction"}}},firebase:{users:i}},U=I,D=(t("2290"),Object(S["a"])(U,N,T,!1,null,"c94986fc",null)),$=D.exports,A={name:"home",components:{UsersTable:P,DownloadExcel:$},methods:{logout:function(){var e=this;n.a.auth().signOut().then((function(){e.$router.replace("login")}))}}},Y=A,R=(t("b528"),Object(S["a"])(Y,_,w,!1,null,"9a230d4e",null)),q=R.exports,G=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"login"},[t("h3",[e._v("Inicia Sesión")]),t("div",{staticClass:"form"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Correo electrónico"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),t("br"),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Contraseña"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),t("br"),t("b-button",{staticClass:"login-button",attrs:{variant:"outline-success"},on:{click:e.login}},[e._v(" Iniciar Sesion ")])],1),t("p",[e._v("¿No tienes una cuenta? "),t("router-link",{attrs:{to:"/sign-up"}},[e._v("crea una")])],1)])},F=[],L={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(a){e.$router.replace("home")}),(function(e){alert("Oops. ".concat(c[e.code]))}))}}},W=L,B=(t("4ec8"),Object(S["a"])(W,G,F,!1,null,"cc53cea2",null)),K=B.exports,J=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"sign-up"},[t("h3",[e._v("Crea tu cuenta")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Correo electrónico"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),t("br"),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Contraseña"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),t("br"),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password_confirmation,expression:"password_confirmation"}],attrs:{type:"password",placeholder:"Confirmar contraseña"},domProps:{value:e.password_confirmation},on:{input:function(a){a.target.composing||(e.password_confirmation=a.target.value)}}})]),t("br"),e.error_message?t("p",{staticClass:"error-message"},[e._v("Error: No coinciden las contraseñas")]):e._e(),t("b-button",{attrs:{variant:"outline-success"},on:{click:e.signUp}},[e._v("Registrar")]),t("span",[e._v("o regresa a "),t("router-link",{attrs:{to:"/login"}},[e._v("Iniciar Sesion")]),e._v(".")],1)],1)},H=[],V={name:"signUp",data:function(){return{email:"",password:"",password_confirmation:"",error_message:!1}},methods:{signUp:function(){var e=this;this.password===this.password_confirmation?n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(a){e.$router.replace("home")}),(function(e){alert("Oops. ".concat(c[e.code]))})):this.error_message=!0}}},Q=V,X=(t("d65b"),Object(S["a"])(Q,J,H,!1,null,"c448003c",null)),Z=X.exports;l["default"].use(g["a"]);var ee=new g["a"]({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:K},{path:"/sign-up",name:"SignUp",component:Z},{path:"/home",name:"Home",component:q,meta:{requiresAuth:!0}}]});ee.beforeEach((function(e,a,t){var s=n.a.auth(),r=s.currentUser,o=e.matched.some((function(e){return e.meta.requiresAuth}));o&&!r?t("login"):!o&&r?t("home"):t()}));var ae=ee,te=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"app"}},[s("img",{staticClass:"login-disg-logo",attrs:{alt:"Vue logo",src:t("cf05")}}),s("router-view")],1)},se=[],ne=(t("034f"),{}),re=Object(S["a"])(ne,te,se,!1,null,null,null),oe=re.exports;l["default"].config.productionTip=!1,j["c"].add(h["a"]),l["default"].component("font-awesome-icon",v["a"]),l["default"].component("downloadExcel",m["a"]),l["default"].use(p["a"]),l["default"].use(b.a),l["default"].use(u.a),n.a.auth().onAuthStateChanged((function(){new l["default"]({router:ae,render:function(e){return e(oe)}}).$mount("#app")}))},"5fff":function(e,a,t){},"722d":function(e,a,t){"use strict";var s=t("4b09"),n=t.n(s);n.a},"8a23":function(e,a,t){},b528:function(e,a,t){"use strict";var s=t("005b"),n=t.n(s);n.a},cf05:function(e,a,t){e.exports=t.p+"img/logo.c11d3b86.png"},d65b:function(e,a,t){"use strict";var s=t("4d12"),n=t.n(s);n.a}});
//# sourceMappingURL=app.5e56e39b.js.map