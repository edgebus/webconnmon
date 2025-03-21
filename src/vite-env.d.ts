import path from "path";
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        server: {
            ...(env.VITE_DEV_SERVER_HOST !== undefined
                ? { host: env.VITE_DEV_SERVER_HOST }
                : { host: "127.0.0.1" }),
            ...(env.VITE_DEV_SERVER_PORT !== undefined
                ? { port: Number.parseInt(env.VITE_DEV_SERVER_PORT) || 55130 }
                : { port: 55130 }
            ),
            port: 55130,
            strictPort: true,
        },
        base: env.VITE_BUILD_BASE_PATH !== undefined && env.VITE_BUILD_BASE_PATH !== "" ? env.VITE_BUILD_BASE_PATH : "/app",
        build: {
            minify: env.VITE_BUILD_CONFIGURATION === "release" || env.VITE_BUILD_CONFIGURATION === "snapshot",
            sourcemap: (function () {
                if (env.VITE_BUILD_CONFIGURATION === "snapshot") {
                    return "inline";
                }
                if (env.VITE_BUILD_CONFIGURATION !== "release") {
                    return true;
                }
                return false;
            })(),
            chunkSizeWarningLimit: (function () {
                if (env.VITE_BUILD_CONFIGURATION !== "release") {
                    return 2048;
                }
                return 256;
            })(),
        },
        define: {
            // By default, Vite doesn't include shims for NodeJS/
            // necessary for segment analytics lib to work
            global: {
            },
        },
        plugins: [
            react(),
            nodePolyfills(),
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@THE": env.VITE_BUILD_CONFIGURATION !== "release"
                    ? path.resolve(__dirname, "./src-non-release")
                    : path.resolve(__dirname, "./src"),
            },
        },
    };
});
