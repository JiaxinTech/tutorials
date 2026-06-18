import { defineConfig } from "vitepress";
import { categoriesConfig } from "../posts/categories";

type SidebarItem = {
  text?: string;
  link?: string;
  collapsed?: boolean;
  items?: SidebarItem[];
};

function getFirstLink(items: SidebarItem[]): string | undefined {
  for (const item of items) {
    if (item.link) return item.link;
    if (item.items) {
      const link = getFirstLink(item.items);
      if (link) return link;
    }
  }
}

/** 第一个分类的第一篇文章即为「最新教程」 */
const sidebar: SidebarItem[] = [
  {
    text: "教程",
    collapsed: false,
    items: [
      { text: "英国手机卡giffgaff", link: "/posts/app/giffgaff" },
      { text: "零基础VPS搭建节点（五合一协议）", link: "/posts/vps/vps-buils" },
      { text: "Codex桌面端 实战", link: "/posts/codex/codex-app" },
      { text: "谷歌云搭建免费科学上网", link: "/posts/vps/google-cloud-vpn" },
      { text: "Codex+Ollama，免费本地AI", link: "/posts/codex/codex-ollama" },
      { text: "免费域名第二期", link: "/posts/vps/free-domain-two" },
      { text: "零基础Codex全流程入门指南", link: "/posts/codex/codex-install" },
      { text: "ASR语言转字幕", link: "/posts/app/ai-asr" },
      { text: "免费域名", link: "/posts/vps/free-domain" },
      { text: "Hermes Agent小白入门指南", link: "/posts/agent/hermes-install" },
      { text: "白嫖gemini pro 12个月 pixel认证", link: "/posts/agent/gemini-pro-pixel" },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/tutorials/",
  lang: "zh",
  title: "@JiaxinTechLife",
  description: "加薪科技改变生活",
  transformPageData(pageData) {
    if (pageData.relativePath === "index.md") {
      const latestLink = getFirstLink(sidebar);
      const action = pageData.frontmatter.hero?.actions?.[0];
      if (action && latestLink) {
        action.link = latestLink;
      }
      pageData.frontmatter.features = Object.values(categoriesConfig);
      return;
    }

    const categoryMatch = pageData.relativePath.match(/^posts\/([^/]+)\/index\.md$/);
    if (categoryMatch) {
      const categoryKey = categoryMatch[1];
      const category = categoriesConfig[categoryKey];
      if (category) {
        pageData.frontmatter.title = category.title;
      }
    }
  },
  themeConfig: {
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outline: {
      level: [2, 3],
      label: "本页目录",
    },
    nav: [{ text: "首页", link: "/" }],
    sidebar,
    socialLinks: [
      { icon: "youtube", link: "https://www.youtube.com/@JiaxinTechLife" },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "输入",
                  navigateText: "导航",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
        },
      },
    },
  },
});
