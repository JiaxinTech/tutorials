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
    // 配置右侧大纲
    outline: {
      // 提取哪些层级的标题。可选值：number | [number, number] | 'deep'
      // 默认值为 2（只提取 h2）
      level: [2, 3], // 这里配置提取 h2 到 h3 的标题
      
      // 自定义大纲顶部显示的标题，默认为 "On this page"
      label: '本页目录' 
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
        text: "软件",
        collapsed: false,
        items: [
          { text: "语言转字幕", link: "/posts/app/ai-asr" },
        ],
      },
      {
        text: "AI Agent",
        collapsed: false,
        items: [
          { text: "Hermes Agent小白入门指南", link: "/posts/agent/hermes-install" },
          { text: "白嫖gemini pro 12个月 pixel认证", link: "/posts/agent/gemini-pro-pixel" },
        ],
      },
      {
        text: "codex",
        collapsed: false,
        items: [
          { text: "零基础Codex全流程入门指南", link: "/posts/codex/codex-install" },
          { text: "Codex+Ollama，免费本地AI", link: "/posts/codex/codex-ollama" },
          { text: "Codex桌面端 实战", link: "/posts/codex/codex-app" },
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
