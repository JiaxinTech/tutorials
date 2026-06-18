export interface Category {
  icon: string
  title: string
  details: string
  link: string
}

export const categoriesConfig: Record<string, Category> = {
  agent: {
    icon: "🤖",
    title: "AI 智能化实战",
    details: "聚焦 OpenClaw、Hermes Agent 等前沿 AI Agent 的本地部署、生产力构建与踩坑记录。",
    link: "/posts/agent/"
  },
  app: {
    icon: "💻",
    title: "数字化工作流与实用 APP",
    details: "私房工具箱与实用 APP，把繁琐的日常操作变全自动，少加班、不折腾。",
    link: "/posts/app/"
  },
  codex: {
    icon: "🛠️",
    title: "Codex 辅助编程",
    details: "Codex 桌面端及本地免费 AI 部署、编程辅助的实战与踩坑记录。",
    link: "/posts/codex/"
  },
  vps: {
    icon: "🌐",
    title: "VPS 与网络技术",
    details: "零基础 VPS 节点搭建、免费科学上网与免费域名申请教程。",
    link: "/posts/vps/"
  }
}
