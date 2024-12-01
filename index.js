import{S as h,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEoSURBVHgBrZXtEYIwDIZDT86/biKjuBFlEt0AV3EX/tB61Abo8dUkRXjvqj2bvk8KSQUgZK0tjbEuZWAs5XOhzJ0DnWXw7rruA6zU3X9ovwfyPK9AUsi8bc0LEoWx0kn+Nk+GHDEXIWeYkxDOvGmaQjKMxSwg46ReBxljCunFheTiEFvjGgzZtzpm4IM0BZlObom9rRYBFEQynwMuIOh6zbU3wmnfTChsQj8qXJP2i4A1ZAQkmaMUJEopcLG5pKQThLsJMx9/Sr57RMDcPDyW+TsRIVwVcdXClfCwvihTutH4UhwgsUbD5u0BIciY7zMGAUGxGPRaJMdB9mpjHnQGhDQ/AyKaH4Fw5ps+CNdClrnSf98A+D99pdTdOffYc330mk4iD+6x/ACnmEjn99LB/AAAAABJRU5ErkJggg==",p="47379272-a961c7172d29abe92af06f616",c=new URLSearchParams({key:p,q:"yellow+flower",image_type:"photo",orientation:"horizontal",safesearch:!0}),f=`https://pixabay.com/api/?${c}`;function g(o=f,s={}){return fetch(o,s).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function d(o){return o.map(({id:s,webformatURL:i,tags:r,likes:e,views:t,comments:n,downloads:A,largeImageURL:u})=>`
        <li data-id="${s}" class="list__item">
          <a class="gallery-link" href="${u}">                          
            <img class="item-img" src="${i}" alt="${r}"/>                  
          </a>
          <ul class="item-container-list">
              <li class="container-list">
                <h3 class="item-title">Likes</h3>
                <p class="item-content">${e}</p>
              </li>
              <li class="container-list">
                <h3 class="item-title">Views</h3>
                <p class="item-content">${t}</p>
              </li>
              <li class="container-list">
                <h3 class="item-title">Comments</h3>
                <p class="item-content">${n}</p>
              </li>
              <li class="container-list">
                <h3 class="item-title">Downloads</h3>
                <p class="item-content">${A}</p>
              </li>
            </ul>          
        </li>
    `).join("")}const y=new h(".list a",{captionsData:"alt",captionDelay:250}),w=document.querySelector(".form"),a=document.querySelector(".list");w.addEventListener("submit",E);function E(o){o.preventDefault();const s=o.target.elements.message.value.trim();if(!s)return;a.innerHTML='<span class="loader"></span>',c.set("q",s);const i=`https://pixabay.com/api/?${c}`;g(i).then(r=>{if(!r.total){l.show({theme:"dark",iconUrl:m,backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"150%",position:"topRight",maxWidth:"354px"}),a.innerHTML="";return}a.innerHTML=d(r.hits),y.refresh()}).catch(r=>{l.show({theme:"dark",iconUrl:m,backgroundColor:"#EF4040",message:`Error: ${r.message}`,messageSize:"16px",messageLineHeight:"150%",position:"topRight",maxWidth:"354px"}),a.innerHTML=""}).finally(()=>{o.target.reset()})}
//# sourceMappingURL=index.js.map
