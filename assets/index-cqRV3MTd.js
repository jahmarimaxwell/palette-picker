(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const N=[{uuid:"5affd4e4-418d-4b62-beeb-1c0f7aaff753",title:"Marcy",colors:["#c92929","#2f5a8b","#327a5f"],temperature:"neutral"},{uuid:"32521ef4-d64c-4906-b06d-f3d0d6b16e0f",title:"Sleek and Modern",colors:["#3A5199","#2F2E33","#D5D6D2"],temperature:"cool"},{uuid:"8b144d62-faa7-4226-87e1-096d7c1bedc7",title:"Winter Reds",colors:["#A10115","#C0B2B5","#600A0A"],temperature:"warm"}],x=r=>{if(r){const{title:t,colors:o,temperature:i}=r;console.log({title:t,colors:o,temperature:i});const e=document.createElement("div");e.setAttribute("id",`${t}-container`),e.setAttribute("class","card-container");const n=document.getElementById("big-card-container"),c=document.createElement("div");c.setAttribute("id","body-container");const d=document.createElement("li");d.setAttribute("id","card-list");const s=document.createElement("p");s.setAttribute("id","title-container"),s.textContent=t;const u=document.createElement("div");u.setAttribute("id","palette-color-container");const m=document.createElement("div");m.setAttribute("id","hex-container");const p=(S,I)=>{const l=document.createElement("div");l.setAttribute("id","color"),l.style.backgroundColor=S;const C=document.createElement("div");C.setAttribute("id","color-div-text");const v=document.createElement("p");v.textContent="Text",v.style.color="white";const g=document.createElement("p");g.textContent="Example",g.style.color="black",C.append(v,g),l.append(C);const y=document.createElement("div");y.setAttribute("id","hex"),y.textContent=`Copy ${I}`;const E=document.createElement("div");return E.setAttribute("id","single-color-container"),E.append(l),{singleColorContainer:E,hexDiv:y}},{singleColorContainer:w,hexDiv:A}=p(o[0],o[0]),{singleColorContainer:B,hexDiv:D}=p(o[1],o[1]),{singleColorContainer:O,hexDiv:P}=p(o[2],o[2]),f=document.createElement("div");f.setAttribute("id","delete-button-container");const a=document.createElement("button");a.setAttribute("id","delete-button"),a.textContent="Delete Palette";const b=document.createElement("div");b.setAttribute("id","temperature-container"),b.textContent=i,u.append(w,B,O),m.append(A,D,P),c.append(u,m),f.append(a),d.append(s,c,f,b),e.append(d),n.appendChild(e),T(a,`${t}-container`),h(A,o[0]),h(D,o[1]),h(P,o[2])}},$=document.getElementById("new-palette-form"),L=r=>{if(r){r.preventDefault();const t=r.target,o=t.paletteName.value,i=[t.color1.value,t.color2.value,t.color3.value],e=t.temperature.value;let n=[];const c={title:o,colors:i,temperature:e};n.push(c),localStorage.setItem(o,JSON.stringify(n)),x({title:o,colors:i,temperature:e}),t.reset()}},T=(r,t)=>{r.addEventListener("click",()=>{const o=document.getElementById(t);o&&o.remove()})},h=(r,t)=>{r.addEventListener("click",()=>{navigator.clipboard.writeText(t).then(()=>{console.log(`Copied ${t} to clipboard`),alert(`Copied ${t} to clipboard`)}).catch(o=>{console.error("Failed to copy: ",o)})})};$.addEventListener("submit",L);document.querySelector("head");const F=()=>{N.forEach(r=>{x(r)})};window.onload=F;const M=()=>{L(),x()};M();
