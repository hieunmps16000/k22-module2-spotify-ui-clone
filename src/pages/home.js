import * as api from "../api";

const escapeHtml = (value = "") => {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
};

const renderTrendingSongs = (tracks = []) => {
    const container = document.querySelector("[data-home-trending-tracks]");
    if (!container) return;

    container.innerHTML = tracks
        .map(
            (track) => `
            <div class="col">
                <article class="card">
                    <a class="card__img-wrap" href="#!">
                        <img src="${escapeHtml(track.image_url)}" alt="" class="card__thumbnail" />
                        <button class="card__play">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                            </svg>
                        </button>
                    </a>
                    <div class="card__content">
                        <h3 class="card__title">
                            <a href="#!">${escapeHtml(track.title)}</a>
                        </h3>
                        <p class="card__desc">${escapeHtml(track.artist_name)}</p>
                    </div>
                </article>
            </div>
        `,
        )
        .join("");
    container.setAttribute("aria-busy", "false");
};

const renderPopularArtists = (artists) => {
    const container = document.querySelector("[data-home-popular-artists]");
    if (!container) return;

    container.innerHTML = artists
        .map((artist) => {
            return `
            <div class="col">
                <article class="card">
                    <a class="card__img-wrap" href="#!">
                        <img
                            src="${artist.image_url}"
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
                            <a href="#!">${escapeHtml(artist.name)}</a>
                        </h3>
                        <p class="card__desc">Nghệ sĩ</p>
                    </div>
                </article>
            </div>
        `;
        })
        .join("");
};

const renderFamousAlbums = (albums) => {
    const container = document.querySelector("[data-home-famous-albums]");
    if (!container) return;

    console.log(albums);

    container.innerHTML = albums
        .map((album) => {
            return `
            <div class="col">
                <article class="card">
                    <a class="card__img-wrap" href="#!">
                        <img src="${album.artist_image_url}" alt="" class="card__thumbnail" />
                        <button class="card__play">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                            </svg>
                        </button>
                    </a>
                    <div class="card__content">
                        <h3 class="card__title">
                            <a href="#!">${escapeHtml(album.title)}</a>
                        </h3>
                        <p class="card__desc">${escapeHtml(album.artist_name)}</p>
                    </div>
                </article>
            </div>
        `;
        })
        .join("");
};

const renderViewAllButton = (selector, link) => {
    const viewAllBtn = document.querySelector(selector);
    viewAllBtn.className = "view-all-link";
    viewAllBtn.textContent = "Hiện tất cả";
    viewAllBtn.setAttribute("href", link);
};

export const initHome = async () => {
    const { tracks } = await api.get("/tracks/popular");
    const { artists } = await api.get("/artists/trending");
    const { albums } = await api.get("/albums/popular");

    renderTrendingSongs(tracks);
    renderPopularArtists(artists);
    renderFamousAlbums(albums);
};
