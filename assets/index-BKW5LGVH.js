import{n as e,t}from"./responsive-BFMtGQ01.js";var n,r,i,a,o=e((()=>{n=document.querySelector(`.menu__mobile-btn`),r=document.querySelector(`.menu__overlay`),i=document.querySelector(`.menu__sidebar`),a=()=>{n.addEventListener(`click`,()=>{r.classList.add(`open`),i.classList.add(`open`),n.setAttribute(`aria-pressed`,`true`),i.setAttribute(`aria-hidden`,`false`)}),r.addEventListener(`click`,()=>{r.classList.remove(`open`),i.classList.remove(`open`),n.setAttribute(`aria-pressed`,`false`),i.setAttribute(`aria-hidden`,`true`)})}})),s,c=e((()=>{s=`https://spotify.f8team.dev/api`})),l,u,d=e((()=>{c(),l=async(e,t={})=>{let n=await fetch(`${s}${e}`,{...t,headers:{"Content-Type":`application/json`,...t.headers}});if(!n.ok)throw Error(`Có lỗi xảy ra. Vui lòng thử lại!`);return n.json()},u=e=>l(e)})),f,p,m,h,g,_=e((()=>{d(),f=(e=``)=>String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`),p=(e=[])=>{let t=document.querySelector(`[data-home-trending-tracks]`);t&&(t.innerHTML=e.map(e=>`
            <div class="col">
                <article class="card">
                    <a class="card__img-wrap" href="#!">
                        <img src="${f(e.image_url)}" alt="" class="card__thumbnail" />
                        <button class="card__play">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                            </svg>
                        </button>
                    </a>
                    <div class="card__content">
                        <h3 class="card__title">
                            <a href="#!">${f(e.title)}</a>
                        </h3>
                        <p class="card__desc">${f(e.artist_name)}</p>
                    </div>
                </article>
            </div>
        `).join(``),t.setAttribute(`aria-busy`,`false`))},m=e=>{let t=document.querySelector(`[data-home-popular-artists]`);t&&(t.innerHTML=e.map(e=>`
            <div class="col">
                <article class="card">
                    <a class="card__img-wrap" href="#!">
                        <img
                            src="${e.image_url}"
                            alt=""
                            class="card__thumbnail card__thumbnail--circle"
                        />
                        <button class="card__play">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                            </svg>
                        </button>
                    </a>
                    <div class="card__content">
                        <h3 class="card__title">
                            <a href="#!">${f(e.name)}</a>
                        </h3>
                        <p class="card__desc">Nghệ sĩ</p>
                    </div>
                </article>
            </div>
        `).join(``),t.setAttribute(`aria-busy`,`false`))},h=e=>{let t=document.querySelector(`[data-home-famous-albums]`);t&&(t.innerHTML=e.map(e=>`
            <div class="col">
                <article class="card">
                    <a class="card__img-wrap" href="#!">
                        <img src="${e.artist_image_url}" alt="" class="card__thumbnail" />
                        <button class="card__play">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                            </svg>
                        </button>
                    </a>
                    <div class="card__content">
                        <h3 class="card__title">
                            <a href="#!">${f(e.title)}</a>
                        </h3>
                        <p class="card__desc">${f(e.artist_name)}</p>
                    </div>
                </article>
            </div>
        `).join(``),t.setAttribute(`aria-busy`,`false`))},g=async()=>{let{tracks:e}=await u(`/tracks/popular`),{artists:t}=await u(`/artists/trending`),{albums:n}=await u(`/albums/popular`);p(e),m(t),h(n)}}));t((()=>{o(),_(),(async()=>{a(),await g()})()}))();