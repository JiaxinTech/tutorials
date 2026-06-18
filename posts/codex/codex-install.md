---
order: 1
---
[![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260618165400809.webp)](https://www.youtube.com/watch?v=Lgzy2qiNve8)
# [全网最全Codex零门槛入门教程｜保姆级｜全模式安装配置+无缝切国内大模型｜不懂代码也能用AI做独立开发｜0代码开发超级马里奥小游戏｜不用魔法，国内也能直接用](https://www.youtube.com/watch?v=Lgzy2qiNve8)


---
# 官方文档：

**Codex官网：**[点击进入](https://developers.openai.com/codex)

**GitHub官网：**[点击进入](https://github.com/)

# 如何安装 Codex ？

### 1. 环境要求

预先安装：`Node.js`和`git`

本地终端检查是否已经安装：

```bash
node -v
npm -v
git --version
```

如果没有安装，先补上，少一个后面都容易报错。

#### Node

下载安装包安装：

```bash
# 先安装nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# 代替重启 shell
\. "$HOME/.nvm/nvm.sh"

# 安装对应版本的node
nvm install 24

# 验证 Node.js 版本：
node -v

# 验证 npm 版本：
npm -v 
```

下载地址：[点击进入](https://nodejs.org/zh-cn/download)

#### Git

命令行安装：

```bash
# Linux/WSL2   
sudo apt install git      

# macOS   
brew install git
```

下载安装包安装：

下载地址：[点击进入](https://git-scm.com/install/windows)

### 2. 安装 CLI

CLI文档：[点击进入](https://developers.openai.com/codex/cli)

**重点提醒，如果你是 Windows 用户**

想装CLI最好先安装WSL环境，最省心的方式是直接跳到 App 部分。

安装WSL，直接在在 shell 里运行下面命令，然后重启电脑。

```bash
wsl --install
```

两种方式，任选其一：

```bash
# npm 安装
npm install -g @openai/codex
 

# Homebrew 安装（macOS）
brew install --cask codex
```

验证安装：

```bash
codex --version
```

如果这里没看到版本号，优先检查 Node.js、npm 全局路径和网络。

### 3. App 安装

官网下载地址：

[点击进入](https://chatgpt.com/zh-Hans-CN/codex/)

Windows 下载地址：

[点击进入](https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi)

### 4. 云端版

直接访问：[点击进入](https://chatgpt.com/codex/cloud)

### 5. IDE 插件

直接在IDE编辑器里下载，或者从官网下载

官网插件下载地址：[点击进入](https://developers.openai.com/codex/ide)

# 如何使用

## 在CLI中使用

#### 1、启动：

**启动命令**

```bash
codex
```

首次启动会让你选择登录方式。

可能会报错：`Error: account/read failed during TUI bootstrap`   **新登录即可**

**退出命令**

```bash
codex logout
```

或者直接一步到位，重新登陆

```bash
codex login
```

#### 2、登陆方式选择

![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260530222831903.webp)

**Sign in with ChatGPT**

会打开浏览器，用你的 ChatGPT 账号授权。

**Enter API Key**

按 token 计费

官网生成API Key：[点击进入](https://platform.openai.com/)

![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260530222847977.webp)

#### 3、模型选择

以当前客户端显示为准，千万别死记型号，AI 工具更新太快了，今天看到的默认模型，过几天就过时了。

**切换模型命令**

```bash
/model
```

#### 4、常用命令

| 命令 | 用途 |
| --- | --- |
| `codex login` | 登录 |
| `codex logout` | 退出 |
| `codex app` | 启动桌面应用 |
| `/init` | 初始化 |
| `/model` | 切换模型 |
| `/compact` | 压缩上下文 |
| `/new` | 开启新会话 |
| `/plan` | 开启计划模式 |
| `/ask` | 仅提问不执行 |
| `/skills` | skills管理 |

## 在云端使用

### 1. 初始化 Git 仓库

cd到项目目录下，初始化要使用git的项目

```bash
cd `项目目录`
git init
```

执行完成后，在 App 上面会多了一个`提交`的按钮。点击`提交`，填一段提交说明，然后点击`继续。`

### 2. 创建 GitHub 远程仓库

先登陆到GitHub创建一个远程仓库，然后在电脑终端关联github远程地址

```bash
git remote add origin https://github.com/`用户名`/`项目名`.git
```

把本地项目主分支推送到远程仓库

```bash
git branch -M main
git push -u origin main
```

选择`Sign in with your browser`登陆GitHub。

![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260530222915271.webp)

但是由于各种原因授权窗口肯能会弹不出来，所有就得通过命令行授权。先到gitHub上生成一个Personal access tokens。

```bash
#让你的 Mac “记住” GitHub 账号和 Token
git config --global credential.helper store
#重新推送，重新输入用户名和token
git push -u origin main
```

**生成公钥、私钥**

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 3. 连接 Codex 到 GitHub

云端版：[点击进入](https://chatgpt.com/codex/cloud)

![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260530223019764.webp)

然后我们进入云端 Codex 选择代码仓库即可使用。

# 进阶用法

### 1. AGENTS.md 配置文件

在项目根目录创建一个 `AGENTS.md` 文件，它相当于给 Codex 写一份”项目规则说明书”。

可以直接套用下面的模板，让Codex更贴合你的项目习惯：

```bash
# AGENTS.md

## 项目说明
这是一个 Python 项目，主要用于练习小游戏开发。

## 开发规范
- 使用 Python 3.11+
- 代码保持简单，优先可读性
- 新增功能时同步更新 README
- 修改代码后尽量运行测试或启动程序验证

## 交互偏好
- 先解释修改思路，再改代码
- 涉及删除文件、重构目录、安装依赖时先询问
- 回复使用中文

## Codex 特定配置
- 权限模式：自动审查（关键操作需确认
- 默认模型：deepseek-v4-flash
- 技能路径：./.codex/skills（如有）
```

这样 Codex 后面生成代码、跑命令、解释问题时，会更贴合你的项目习惯。

### 2. 常用场景

- **代码重构**
- **写单元测试**，补测试用例
- **修复 Bug**
- **代码审查**，让它 review 你的代码

### 3. 安全模式

- **默认权限**，只给建议，适合你想先看方案。
- **自动审查**，可以自动编辑文件，但关键操作会请示你。
- **完全访问**，权限更大，可以自动执行更多操作。

![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260530223040741.webp)

**新手推荐配置**：

- 日常使用开"自动审查"模式。
- 删除文件、安装依赖、推送代码必须手动确认。
- 批量重构时，先让他制定方案，确认后再执行。

## 接入国内大模型

比如：

1. 通义千问，阿里系，稳定性好。
2. 智谱 AI，中文能力强。
3. DeepSeek，便宜。

### **利用 cc-switch 接入国产大模型**

gitHub链接：[点击进入](https://github.com/farion1231/cc-switch)

#### 问题：

由于Codex使用了Response API，而大部分国内模型还提供的是Chat completion API

#### 解决办法：codex-bridge

gitHub链接：[点击进入](https://github.com/JiaxinTech/codex-bridge)

**注意事项：如果运行codex-bridge项目的终端窗口不小心关掉了，重新运行启动代理命令的时候，一定要在codex-bridge目录下。如下例子：**

![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260530223101262.webp)

报错是因为在 `~/` 目录直接运行：node --env-file=.env proxy.mjs，但当前目录没有 `.env` 文件，所以：node: .env: not found。

# 常见问题&解决方案

### 网络问题

VPN一定要开启**TUN模式**，“全局模式”并不能完全覆盖到终端窗口。。

### 1、安装Codex CLI报错

**问题表现：**

![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260530223118300.webp)

**原因：**

Codex 的 2026 年 4 月更新版在配置 shell 补全时，使用的语法与你当前旧版本的 Homebrew 发生了冲突 ，Homebrew 在尝试帮你自动生成命令行补全（bash/zsh）时卡住了，这不影响 Codex 本身的运行

**解决：**

方案一：跳过补全脚本安装，你可以强制忽略它

```bash
# 尝试带上环境变量跳过验证，直接安装核心二进制文件
HOMEBREW_NO_INSTALL_CLEANUP=1 brew install --cask --no-quarantine codex
```

方案二：更新 Homebrew 核心（治本）

```bash
brew update && brew upgrade
```

### Codex 登录失败

**问题表现：**

浏览器授权后回到终端，提示失败。

**解决方法**：

1. 检查网络连接。
2. 清除浏览器缓存重试。
3. 换用 API Key 方式。
4. 执行 `codex logout` 后重新登录。

### codex 相关命令找不到

**问题表现：**

`提示错误 codex: command not found`

**解决方法**：

```bash
# 重新安装
npm install -g @openai/codex
   
# 检查 npm 全局路径
npm config get prefix
```
