(function(){"use strict";var e={3751:function(e,t,n){var o=n(6132),r=n(641);function u(e,t){const n=(0,r.g2)("RouterView");return(0,r.uX)(),(0,r.Wv)(n)}var a=n(6262);const l={},c=(0,a.A)(l,[["render",u]]);var i=c,s=(n(4114),n(33)),d=n(953),v=n(5220);const f=e=>((0,r.Qi)("data-v-6f50b658"),e=e(),(0,r.jt)(),e),k={class:"hero-section"},m={class:"container"},p={class:"row"},b={class:"col-xl-4 col-lg-5 offset-xl-2 offset-lg-1"},h={class:"booking-form"},L=f((()=>(0,r.Lk)("h3",null,"Generate Invoice",-1))),g={class:"check-date"},_=f((()=>(0,r.Lk)("label",{for:"guest_house_name"},[(0,r.eW)("Guest House Name:"),(0,r.Lk)("span",{class:"required"},"*")],-1))),y={class:"check-date"},N=f((()=>(0,r.Lk)("label",{for:"owner_name"},[(0,r.eW)("Owner Name:"),(0,r.Lk)("span",{class:"required"},"*")],-1))),w={class:"check-date"},O=f((()=>(0,r.Lk)("label",{for:"contact_number"},[(0,r.eW)("Contact Number(Owner):"),(0,r.Lk)("span",{class:"required"},"*")],-1))),R={key:0,class:"error-message"},j={class:"check-date"},C=f((()=>(0,r.Lk)("label",{for:"guest_name"},[(0,r.eW)("Guest Name:"),(0,r.Lk)("span",{class:"required"},"*")],-1))),S={class:"check-date"},q=f((()=>(0,r.Lk)("label",{for:"total_guests"},[(0,r.eW)("No of guests:"),(0,r.Lk)("span",{class:"required"},"*")],-1))),K={class:"check-date"},x=f((()=>(0,r.Lk)("label",{for:"total_rooms"},[(0,r.eW)("Total Rooms:"),(0,r.Lk)("span",{class:"required"},"*")],-1))),I={class:"check-date"},V=f((()=>(0,r.Lk)("label",{for:"room_number"},"Room Number:",-1))),D={class:"check-date"},T=f((()=>(0,r.Lk)("label",{for:"check_in"},[(0,r.eW)("Check In:"),(0,r.Lk)("span",{class:"required"},"*")],-1))),E={class:"check-date"},U=f((()=>(0,r.Lk)("label",{for:"check_out"},[(0,r.eW)("Check Out:"),(0,r.Lk)("span",{class:"required"},"*")],-1))),F={key:0,class:"error-message"},P=f((()=>(0,r.Lk)("button",{type:"submit"},"Submit",-1)));var W={__name:"InvoiceFormView",setup(e){function t(e){for(var t=document.cookie.split("; "),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]===e)return decodeURIComponent(o[1])}return null}const n=(0,d.KR)(""),u=(0,d.KR)(""),a=(0,d.KR)(""),l=t("guestHouseName"),c=t("ownerName"),i=t("contactNumber");l&&(n.value=l),c&&(u.value=c),i&&(a.value=i);const f=(0,d.KR)(""),W=(0,d.KR)(0),A=(0,d.KR)(0),G=(0,d.KR)(""),J=(0,d.KR)(null),$=(0,d.KR)(null),H=(0,d.KR)({contactNumber:"",checkOut:""}),M=(0,v.rd)(),X=()=>{let e=!0;return H.value.contactNumber="",H.value.checkOut="",10!==a.value.length&&(H.value.contactNumber="Contact number must be exactly 10 digits long.",e=!1),new Date($.value)<=new Date(J.value)&&(H.value.checkOut="The check-out date should be at least one day after the check-in date.",e=!1),e},Q=(e,t)=>{var n=new Date;n.setFullYear(n.getFullYear()+10);var o=e+"="+encodeURIComponent(t)+"; expires="+n.toUTCString();document.cookie=o},Y=()=>{X()&&(Q("guestHouseName",n.value),Q("contactNumber",a.value),Q("ownerName",u.value),M.push({name:"InvoiceView",params:{guestHouseName:n.value,ownerName:u.value,contactNumber:a.value,guestName:f.value,totalGuests:W.value,totalRooms:A.value,roomNumber:G.value,checkIn:J.value,checkOut:$.value}}))};return(e,t)=>((0,r.uX)(),(0,r.CE)("section",k,[(0,r.Lk)("div",m,[(0,r.Lk)("div",p,[(0,r.Lk)("div",b,[(0,r.Lk)("div",null,[(0,r.Lk)("div",h,[L,(0,r.Lk)("form",{onSubmit:(0,o.D$)(Y,["prevent"])},[(0,r.Lk)("div",g,[_,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),id:"guest_house_name",required:""},null,512),[[o.Jo,n.value]])]),(0,r.Lk)("div",y,[N,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),id:"owner_name",required:""},null,512),[[o.Jo,u.value]])]),(0,r.Lk)("div",w,[O,(0,r.bo)((0,r.Lk)("input",{type:"text",maxlength:"10",pattern:"\\d{10}","onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),id:"contact_number",required:""},null,512),[[o.Jo,a.value]]),H.value.contactNumber?((0,r.uX)(),(0,r.CE)("span",R,(0,s.v_)(H.value.contactNumber),1)):(0,r.Q3)("",!0)]),(0,r.Lk)("div",j,[C,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>f.value=e),id:"guest_name",required:""},null,512),[[o.Jo,f.value]])]),(0,r.Lk)("div",S,[q,(0,r.bo)((0,r.Lk)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>W.value=e),id:"total_guests",required:""},null,512),[[o.Jo,W.value]])]),(0,r.Lk)("div",K,[x,(0,r.bo)((0,r.Lk)("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=e=>A.value=e),id:"total_rooms",required:""},null,512),[[o.Jo,A.value]])]),(0,r.Lk)("div",I,[V,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>G.value=e),id:"room_number"},null,512),[[o.Jo,G.value]])]),(0,r.Lk)("div",D,[T,(0,r.bo)((0,r.Lk)("input",{type:"date","onUpdate:modelValue":t[7]||(t[7]=e=>J.value=e),id:"check_in",required:""},null,512),[[o.Jo,J.value]])]),(0,r.Lk)("div",E,[U,(0,r.bo)((0,r.Lk)("input",{type:"date","onUpdate:modelValue":t[8]||(t[8]=e=>$.value=e),id:"check_out",required:""},null,512),[[o.Jo,$.value]]),H.value.checkOut?((0,r.uX)(),(0,r.CE)("span",F,(0,s.v_)(H.value.checkOut),1)):(0,r.Q3)("",!0)]),P],32)])])])])])]))}};const A=(0,a.A)(W,[["__scopeId","data-v-6f50b658"]]);var G=A,J=n(3833),$=n.n(J);const H=e=>((0,r.Qi)("data-v-605ec7ee"),e=e(),(0,r.jt)(),e),M={class:"container row justify-content-between"},X=H((()=>(0,r.Lk)("button",{class:"button-3 bg-black"},"Go back",-1))),Q={class:"container",ref:"pdfContent"},Y=H((()=>(0,r.Lk)("h3",null,"Reservation Confirmation",-1))),B=H((()=>(0,r.Lk)("td",null,[(0,r.Lk)("strong",null,"Guest Name:")],-1))),z=H((()=>(0,r.Lk)("td",null,[(0,r.Lk)("strong",null,"Number of Guests:")],-1))),Z=H((()=>(0,r.Lk)("td",null,[(0,r.Lk)("strong",null,"Total Rooms:")],-1))),ee=H((()=>(0,r.Lk)("td",null,[(0,r.Lk)("strong",null,"Room Number :")],-1))),te=H((()=>(0,r.Lk)("td",null,[(0,r.Lk)("strong",null,"Check-in Date:")],-1))),ne=H((()=>(0,r.Lk)("td",null,[(0,r.Lk)("strong",null,"Check-out Date:")],-1))),oe=H((()=>(0,r.Lk)("p",{class:"text-center"}," Current government regulations require Indian residents to present proof of identity at the time of check-in. The proof of identity can be the guest’s driving license, passport, Aadhar card or voter’s identity card. ",-1))),re={class:"text-left"},ue=H((()=>(0,r.Lk)("p",null,"Thank you for choosing our guest house!",-1)));var ae={__name:"InvoiceView",setup(e){const t=(0,v.lq)(),n=(0,d.KR)(t.params.guestHouseName||""),o=(0,d.KR)(t.params.ownerName||""),u=(0,d.KR)(t.params.contactNumber||""),a=(0,d.KR)(t.params.guestName||""),l=(0,d.KR)(t.params.totalGuests||0),c=(0,d.KR)(t.params.totalRooms||0),i=(0,d.KR)(t.params.roomNumber||0),f=(0,d.KR)(t.params.checkIn||""),k=(0,d.KR)(t.params.checkOut||""),m=e=>{if(!e)return"";const t=new Date(e);return t.toLocaleDateString()},p=()=>{const e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),u=String(e.getMinutes()).padStart(2,"0"),a=String(e.getSeconds()).padStart(2,"0");return`${t}${n}${o}_${r}${u}${a}`},b=()=>{const e=document.querySelector(".container"),t=p(),n=`${a.value}_${t}.pdf`,o={margin:[.5,.5,.5,.5],filename:n,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}};$()().from(e).set(o).save()};return(e,t)=>{const d=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",M,[(0,r.bF)(d,{to:"/"},{default:(0,r.k6)((()=>[X])),_:1}),(0,r.Lk)("button",{onClick:b,class:"button-3 bg-green",role:"button"},"Download PDF")]),(0,r.Lk)("div",Q,[(0,r.Lk)("header",null,[(0,r.Lk)("h2",null,(0,s.v_)(n.value),1),Y]),(0,r.Lk)("section",null,[(0,r.Lk)("p",null,"Dear Mr. "+(0,s.v_)(a.value)+",",1),(0,r.Lk)("p",null," Thank you for choosing "+(0,s.v_)(n.value)+". We are pleased to confirm your reservation as under: ",1),(0,r.Lk)("table",null,[(0,r.Lk)("tr",null,[B,(0,r.Lk)("td",null,(0,s.v_)(a.value),1)]),(0,r.Lk)("tr",null,[z,(0,r.Lk)("td",null,(0,s.v_)(l.value),1)]),(0,r.Lk)("tr",null,[Z,(0,r.Lk)("td",null,(0,s.v_)(c.value),1)]),(0,r.Lk)("tr",null,[ee,(0,r.Lk)("td",null,(0,s.v_)(i.value),1)]),(0,r.Lk)("tr",null,[te,(0,r.Lk)("td",null,(0,s.v_)(m(f.value)),1)]),(0,r.Lk)("tr",null,[ne,(0,r.Lk)("td",null,(0,s.v_)(m(k.value)),1)])])]),(0,r.Lk)("footer",null,[oe,(0,r.Lk)("div",re,[ue,(0,r.Lk)("p",null,(0,s.v_)(o.value),1),(0,r.Lk)("p",null,"+91 "+(0,s.v_)(u.value),1),(0,r.Lk)("p",null,(0,s.v_)(n.value),1)])])],512)],64)}}};const le=(0,a.A)(ae,[["__scopeId","data-v-605ec7ee"]]);var ce=le;const ie=(0,v.aE)({history:(0,v.LA)("/hotel-booking/"),routes:[{path:"/",name:"InvoiceFormView",component:G},{path:"/invoice/:guestHouseName/:ownerName/:contactNumber/:guestName/:totalGuests/:totalRooms/:roomNumber?/:checkIn/:checkOut",name:"InvoiceView",component:ce}]});var se=ie;const de=(0,o.Ef)(i);de.use(se),de.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return e[o].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,u){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],u=e[s][2];for(var l=!0,c=0;c<o.length;c++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(l=!1,u<a&&(a=u));if(l){e.splice(s--,1);var i=r();void 0!==i&&(t=i)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[o,r,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var u=Object.create(null);n.r(u);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},n.d(u,a),u}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{668:"cc57583c",838:"450c49d7"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-project:";n.l=function(o,r,u,a){if(e[o])e[o].push(r);else{var l,c;if(void 0!==u)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var d=i[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+u){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+u),l.src=o),e[o]=[r];var v=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(v.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=v.bind(null,l.onerror),l.onload=v.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/hotel-booking/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=u);var a=n.p+n.u(t),l=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",l.name="ChunkLoadError",l.type=u,l.request=a,r[1](l)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,u,a=o[0],l=o[1],c=o[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(c)var s=c(n)}for(t&&t(o);i<a.length;i++)u=a[i],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},o=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3751)}));o=n.O(o)})();
//# sourceMappingURL=app.34b31f1a.js.map