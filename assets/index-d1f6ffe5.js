(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=async()=>{const n=await(await fetch("https://lab-mobster-backend-production.up.railway.app/mobs")).json(),s=await(await fetch("https://lab-mobster-backend-production.up.railway.app/members/")).json();document.querySelector("#app").innerHTML=`
  <section class="main-section">
    <h2 class="main-section__main-title">${n.mobs.mobs[0].name}</h2>
    <ul class="main-section__list">
      <li class="main-section__list__element">${s.members[0].name}</li>
      <li class="main-section__list__element">${s.members[1].name}</li>
      <li class="main-section__list__element">${s.members[2].name}</li>
      <li class="main-section__list__element">${s.members[3].name}</li>
    </ul>
  </section>
  `};a();
