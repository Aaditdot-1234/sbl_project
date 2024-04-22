// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

// const { resolve } = require("path");

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "home.html"),
        login: resolve(__dirname, "login.html"),
        home: resolve(__dirname, "home.html"),
        container: resolve(__dirname, "container.html"),
        projects: resolve(__dirname, "projects.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
