import * as api from "../api";

const renderTrendingSongs = (trendingSongs) => {
    document.querySelector("#list-trending").innerHTML = trendingSongs
        .map(
            (item) => `
            <article class="card">
                <a class="card__img-wrap" href="#!">
                    <img src="${item.image_url}" alt="" class="card__thumbnail" />
                    <button class="card__play">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                        </svg>
                    </button>
                </a>
                <div class="card__content">
                    <h3 class="card__title">
                        <a href="#!">${item.title}</a>
                    </h3>
                    <p class="card__desc">${item.artist_name}</p>
                </div>
            </article>
        `,
        )
        .join("");
    const viewAllBtn = document.querySelector("#trending-songs .view-all-link");

    viewAllBtn.className = "view-all-link";
    viewAllBtn.textContent = "Hiện tất cả";
};

export const initHome = async () => {
    const { tracks } = await api.get("/tracks/popular");
    const { artists } = await api.get("/artists/trending");

    renderTrendingSongs(tracks);
    // renderArtists(artists);
};
