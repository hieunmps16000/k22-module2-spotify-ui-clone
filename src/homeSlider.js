import { Slidezy } from "./slidezy";

export const initHomeSlider = () => {
    new Slidezy("#slidezy-trending", {
        items: 6,
        nav: false,
        slideBy: 3,
        loop: true,
    });

    new Slidezy("#slidezy-artists", {
        items: 6,
        nav: false,
        slideBy: 3,
    });

    new Slidezy("#slidezy-albums", {
        items: 6,
        nav: false,
        slideBy: 3,
    });
};
