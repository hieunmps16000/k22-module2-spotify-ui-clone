import { initSidebar } from "./sidebar";
import { initHomeSlider } from "./homeSlider";
import * as api from "./api";

const initApp = () => {
    initSidebar();
    initHomeSlider();
};

const run = async () => {
    const data = await api.get("tracks/popular");
    console.log(data);
};

initApp();
