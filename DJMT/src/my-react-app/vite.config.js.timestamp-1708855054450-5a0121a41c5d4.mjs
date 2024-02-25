// vite.config.js
import { defineConfig } from "file:///C:/Users/User/IdeaProjects/Kosmo_Avengers/DJMT/src/my-react-app/node_modules/vite/dist/node/index.js";
import path from "path";
import { fileURLToPath } from "url";
import react from "file:///C:/Users/User/IdeaProjects/Kosmo_Avengers/DJMT/src/my-react-app/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/User/IdeaProjects/Kosmo_Avengers/DJMT/src/my-react-app/vite.config.js";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, "index.html")
      }
    }
  },
  define: {
    global: {}
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8093",
        changeOrigin: true
      },
      "/chat": {
        target: "http:localhost:4000",
        changeOrigin: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXElkZWFQcm9qZWN0c1xcXFxLb3Ntb19BdmVuZ2Vyc1xcXFxESk1UXFxcXHNyY1xcXFxteS1yZWFjdC1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcSWRlYVByb2plY3RzXFxcXEtvc21vX0F2ZW5nZXJzXFxcXERKTVRcXFxcc3JjXFxcXG15LXJlYWN0LWFwcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVXNlci9JZGVhUHJvamVjdHMvS29zbW9fQXZlbmdlcnMvREpNVC9zcmMvbXktcmVhY3QtYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5cclxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKVxyXG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoX19maWxlbmFtZSlcclxuY29uc29sZS5sb2coX19maWxlbmFtZSlcclxuY29uc29sZS5sb2coX19kaXJuYW1lKVxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgbWFpbjogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkZWZpbmU6IHtcclxuICAgIGdsb2JhbDoge30sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL2FwaSc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjgwOTMnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgJy9jaGF0Jzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6bG9jYWxob3N0OjQwMDAnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErWCxTQUFTLG9CQUFvQjtBQUM1WixPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxXQUFXO0FBSG1PLElBQU0sMkNBQTJDO0FBS3RTLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxLQUFLLFFBQVEsVUFBVTtBQUN6QyxRQUFRLElBQUksVUFBVTtBQUN0QixRQUFRLElBQUksU0FBUztBQUVyQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNLEtBQUssS0FBSyxXQUFXLFlBQVk7QUFBQSxNQUN6QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixRQUFRLENBQUM7QUFBQSxFQUNYO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
