import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { viteEjs } from "./ejs-vite-plugin";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
    base: process.env.NODE_ENV === "production" ? "/k22-module2-spotify-ui-clone" : "/",
    plugins: [viteEjs()],
    build: {
        rollupOptions: {
            input: {
                index: `${root}index.html`,
                "sign-in": `${root}sign-in.html`,
                "sign-up": `${root}sign-up.html`,
            },
        },
    },
});
