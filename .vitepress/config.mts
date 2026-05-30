import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/tutorials/",
  title: "@JiaxinTechLife",
  description: "加薪科技改变生活",
  // 主题相关配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav: [{ text: "首页", link: "/" }],
    // 左侧侧边栏
    sidebar: [
      {
        text: "VPS",
        collapsed: false,
        items: [
          { text: "谷歌云搭建免费科学上网", link: "/posts/vps/google-cloud-vpn" },
          { text: "免费域名", link: "/posts/vps/free-domain" },
          { text: "免费域名第二期", link: "/posts/vps/free-domain-two" },
        ],
      },
      {
        text: "软件推荐",
        collapsed: false,
        items: [
          { text: "语言转字幕", link: "/posts/app/ai-asr" },
        ],
      },
      {
        text: "AI Agent",
        collapsed: false,
        items: [
          { text: "Codex+Ollama，免费本地AI", link: "/posts/agent/codex-ollama" },
          { text: "零基础Codex全流程入门指南", link: "/posts/agent/codex-install" },
          { text: "Hermes Agent小白入门指南", link: "/posts/agent/hermes-install" },
          { text: "白嫖gemini pro 12个月 pixel认证", link: "/posts/agent/gemini-pro-pixel" },
        ],
      }
    ],
    // 社交链接图标配置
    socialLinks: [
      { icon: "youtube", link: "https://www.youtube.com/@JiaxinTechLife" },
    ],
    search: { provider: "local" },
  },
});
