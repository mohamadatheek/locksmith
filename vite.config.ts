import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        carKeyProgramming: resolve(__dirname, "car-key-programming-colombo/index.html"),
        carKeyReplacement: resolve(__dirname, "car-key-replacement-colombo/index.html"),
        emergencyUnlocking: resolve(__dirname, "emergency-car-unlocking/index.html"),
        smartKeyRepair: resolve(__dirname, "smart-key-repair/index.html"),
        keyCutting: resolve(__dirname, "key-cutting-maharagama/index.html"),
        toyotaProgramming: resolve(__dirname, "toyota-key-programming/index.html"),
        lockRepair: resolve(__dirname, "lock-repair-colombo/index.html"),
        householdUnlocking: resolve(__dirname, "door-unlocking-colombo/index.html"),
      },
    },
  },
});
