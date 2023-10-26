import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

export default defineConfig({
    resolve: {
        alias: {
            "@": "/resources",
        },
    },
    plugins: [
        laravel({
            input: ["resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "@/scss/_mixin.scss" as mixin;
                    @import "@/scss/_variables.scss";
                    @import "@/scss/_globals.scss";
                    @import "@/scss/_colors.scss";
                `,
            },
        },
        postcss: {
            plugins: [
                autoprefixer(), // Add autoprefixer as a PostCSS plugin
            ],
        },
    },
});
