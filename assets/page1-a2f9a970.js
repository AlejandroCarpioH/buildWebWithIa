import{v,s as k,e as q}from"./handleMessageError-f841f787.js";const j="modulepreload",G=function(e){return"/"+e},$={},A=function(n,r,l){if(!r||r.length===0)return n();const s=document.getElementsByTagName("link");return Promise.all(r.map(t=>{if(t=G(t),t in $)return;$[t]=!0;const o=t.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!l)for(let i=s.length-1;i>=0;i--){const g=s[i];if(g.href===t&&(!o||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${m}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":j,o||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),o)return new Promise((i,g)=>{a.addEventListener("load",i),a.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},R=document.querySelector("iframe");function y(e){localStorage.setItem("htmlLocal",e)}function c(e){R.srcdoc=e}const T=document.querySelector("#pidemeTextarea"),_=document.querySelector("iframe"),d=document.querySelector(".bot"),P=async(e,n)=>{const r=_.srcdoc;d.classList.add("rootHidden");const s=await(await fetch("./pages/cargando.html")).text();c(s);try{if(!localStorage.getItem("tokenGpt")){console.log("error"),alert("ingresa un token valido de OpenIa"),d.classList.remove("rootHidden"),c(r);return}const t={value:e,html:n,gptSelect:localStorage.getItem("gptModel"),token:localStorage.getItem("tokenGpt")},o=await fetch(`${v.url}`,{method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!o.ok){const{message:a}=await o.json();throw new Error(a)}const{messageGpt:m,htmlResponse:h}=await o.json();if(h===void 0){c(r),d.classList.remove("rootHidden"),localStorage.clear(),location.reload();return}y(h),c(h),T.value="",d.classList.remove("rootHidden")}catch(t){const{message:o}=t;k(o+", error en el servidor"),d.classList.remove("rootHidden"),c(r)}T.focus()},f=document.querySelector("#pidemeTextarea"),B=document.querySelector(".build"),M=document.querySelector(".reset"),D=document.querySelector(".preview"),O=document.querySelector(".closeSession"),H=document.querySelector("iframe"),E=document.querySelector(".bot"),U=document.querySelector(".download"),z=document.querySelector(".saveTokenGpt"),u=document.querySelector(".tokenGpt"),N=document.querySelector(".buttonMenu"),V=document.querySelector(".menu"),w=document.querySelector(".GptModelSelect");localStorage.setItem("gptModel",w.value);w.addEventListener("change",e=>{localStorage.setItem("gptModel",w.value)});z.addEventListener("click",()=>{if(!u.value.trim()||u.value.trim()===" "){u.focus();return}localStorage.setItem("tokenGpt",u.value),u.value=""});N.addEventListener("click",()=>{V.classList.toggle("menuHidden")});U.addEventListener("click",async()=>{const{separateCode:e}=await A(()=>import("./handleMonacoEditor-fee47f32.js").then(m=>m.h),["assets/handleMonacoEditor-fee47f32.js","assets/handleMessageError-f841f787.js","assets/handleMessageError-a6f1ff3e.css","assets/handleMonacoEditor-1862df68.css"]),{html:n,css:r,js:l}=e(H.srcdoc),s=document.createElement("a"),t=document.createElement("a"),o=document.createElement("a");s.setAttribute("href","data:text/plain;charset=utf-8, "+encodeURIComponent(n)),s.setAttribute("download","index.html"),t.setAttribute("href","data:text/plain;charset=utf-8, "+encodeURIComponent(r)),t.setAttribute("download","style.css"),o.setAttribute("href","data:text/plain;charset=utf-8, "+encodeURIComponent(l)),o.setAttribute("download","script.js"),s.click(),t.click(),o.click()});const I=localStorage.getItem("htmlLocal"),J=async()=>{c('<div  style="width:100vw; height:100vh; display:grid; place-items:center" >cargando...</div>');try{const e=await fetch(`${v.url}${q.showSavedPage}`,{method:"GET",headers:{Authorization:`Bearer ${token}`}});if(!e.ok)return!1;const n=await e.text();y(n),c(n),E.classList.remove("rootHidden")}catch{k("error en la peticion"),E.classList.add("rootHidden")}return!0};I?(c(I),E.classList.remove("rootHidden")):J();f.focus();B.addEventListener("click",()=>{if(f.value===""){f.focus();return}P(f.value,H.srcdoc)});O.addEventListener("click",()=>{localStorage.clear(),window.location.reload()});M.addEventListener("click",async()=>{if(!window.confirm("Esto borrara todo lo creado en la pagina, esta seguro de borrar todo?"))return;const n=localStorage.getItem("token");try{const r=await fetch(`${v.url}${q.reset}`,{method:"GET",headers:{Authorization:`Bearer ${n}`}});console.log(n);const l=await r.json(),{htmlReset:s}=l;c(s),y(s),console.log(s)}catch(r){k(`Error en la conexion.
Mensaje: `+r)}});D.addEventListener("click",async()=>{try{const n=await(await fetch(`${v.url}${q.goBackToPreviusPage}`,{method:"GET",headers:{Authorization:`Bearer ${token}`}})).json(),{html:r}=await n;y(r),c(r)}catch(e){alert(`Error en la conexion.
Mensaje: `+e)}});const W=document.querySelector(".open-close"),F=document.querySelector(".bot");W.addEventListener("click",()=>{F.classList.toggle("close")});document.querySelector("#root");document.querySelector(".file");const K=document.querySelector(".openEditor"),Q=document.querySelector(".closeEditorIntern"),S=document.querySelector(".htmlEdit");document.querySelector(".showCode");document.querySelector(".download");const X=document.querySelectorAll(".editorSelect"),x=document.querySelector("#html"),Y=document.querySelector("#css"),Z=document.querySelector("#javascript"),b=document.querySelector("iframe"),ee=document.querySelector("#pidemeTextarea"),L=document.querySelector(".bot"),p={html:x,css:Y,javascript:Z};X.forEach(e=>{e.addEventListener("click",n=>{const l=n.target.className.split(" ")[1].replace("Select","");for(const s in p)s===l?p[s].classList.remove("editHidden"):p[s].classList.contains("editHidden")||p[s].classList.add("editHidden")})});K.addEventListener("click",()=>{b.classList.toggle("anima"),setTimeout(()=>{S.classList.toggle("animaHtmlEdit")},300),S.classList.contains("htmlEditorClosed")&&L.classList.toggle("close"),C(),x.focus()});Q.addEventListener("click",()=>{S.classList.remove("animaHtmlEdit"),setTimeout(()=>{b.classList.toggle("anima"),L.classList.contains("close")&&L.classList.toggle("close"),C()},200),ee.focus()});const C=async()=>{S.classList.toggle("htmlEditorClosed");const{showEditor:e}=await A(()=>import("./handleMonacoEditor-fee47f32.js").then(n=>n.h),["assets/handleMonacoEditor-fee47f32.js","assets/handleMessageError-f841f787.js","assets/handleMessageError-a6f1ff3e.css","assets/handleMonacoEditor-1862df68.css"]);e(b.srcdoc)};export{A as _};
