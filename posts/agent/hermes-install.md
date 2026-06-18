---
order: 2
---
[![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260618165211583.webp)](https://www.youtube.com/watch?v=jobEOvaPxTI)
# [超越 OpenClaw！手把手教你搭建Hermes Agent 部署全攻略｜手把手教你搭建AI只能助手，24小时不闭眼帮你干杂活](https://www.youtube.com/watch?v=jobEOvaPxTI)

---
# 官方链接

### 文档：[点击进入](https://hermes-agent.nousresearch.com/docs)

### GitHub 仓库：[点击进入](https://github.com/NousResearch/hermes-agent)

### Skils市场：[点击进入](https://hermes-agent.nousresearch.com/docs/skills)

---

# 安装前准备

### 系统要求：

- Linux
- macOS
- Windows （官方建议安装 WSL2）

注意：Windows 用户建议直接装WSL2（Windows Subsystem for Linux）。

安装方法很简单，直接在在 shell 里运行下面命令，然后重启电脑。

```bash
wsl --install
```

- Git

```bash
# Linux/WSL2   
sudo apt install git      

# macOS   
brew install git
```

### 其他材料：

- API Key
- 电脑/云服务器
- 飞书/微信/Telegram等

Telegram user bot：@userinfobot 

---

# 安装

打开终端，输入以下命令后回车：

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

### 安装后操作

验证是否安装成功：（有版本号输出，说明安装成功）

```bash
hermes version
```

若发现`hermes`命令无效，运行下面命令重新加载一下 shell 配置：

```bash
# 如果你用的是 bash 
source ~/.bashrc

# 如果你用的是 zsh        
source ~/.zshrc
```

### 配置

安装好后，一般会自动弹出配置向导，若未弹出输入以下命令：

```bash
hermes setup
```

### 启动

- 打开聊天界面：

```bash
hermes
```

- 继续上次的对话：

```bash
hermes -c
```

- 全面健康检查，检查配置、依赖、连接等是否正常：

```bash
hermes doctor
```

- 打开Web UI：

```bash
hermes dashboard
```

- 如果觉得官方UI太丑，可以用下面的：（hermes-web-ui）
    
    ```bash
    # 安装 
    npm install -g hermes-web-ui
    
    # 启动   
    hermes-web-ui start
    
    # 若启动命令不生效，请配置环境变量
    # 找到npm路径   
    NPM_BIN=$(npm config get prefix)/bin
    
    # 配置环境变量   
    echo "export PATH=$NPM_BIN:\$PATH" >> /root/.bashrc
    
    # 激活配置   
    source /root/.bashrc
    ```
    
    相关命令速查表
    
    | 命令 | 说明 |
    | --- | --- |
    | `hermes-web-ui start` | 后台启动（守护进程模式） |
    | `hermes-web-ui start --port 9000` | 自定义端口启动 |
    | `hermes-web-ui stop` | 停止后台进程 |
    | `hermes-web-ui restart` | 重启后台进程 |
    | `hermes-web-ui status` | 查看运行状态 |
    | `hermes-web-ui update` | 更新到最新版本并重启 |
    | `hermes-web-ui -v` | 显示版本号 |
    | `hermes-web-ui -h` | 显示帮助信息 |

# 进阶

### 核心命令

| 命令 | 说明 |
| --- | --- |
| `hermes` | 启动交互式聊天 |
| `hermes chat -q "消息"` | 单次提问直接返回结果 |
| `hermes -c` | 恢复最近会话 |
| `hermes -c "会话名"` | 恢复指定名称会话 |
| `hermes setup` | 初始化配置向导 |
| `hermes model` | 选择默认模型 |
| `hermes config` | 查看 / 编辑配置 |
| `hermes login` | 登录模型服务商 |
| `hermes logout` | 登出清除认证 |
| `hermes status` | 查看组件运行状态 |
| `hermes logs` | 查看最近日志 |
| `hermes logs -f` | 实时跟踪日志 |
| `hermes sessions list` | 列出历史会话 |
| `hermes skills` | 管理技能 |
| `hermes update` | 更新 Hermes |
| `hermes backup` | 备份配置数据 |
| `hermes dashboard` | 启动 Web 面板 |
| `hermes doctor` | 检查依赖与配置问题 |
| `hermes claw migrate` | 从openclaw一键迁移 |

### 文件解读

- SOUL.md：  定义它的"人格"，让它更符合你的喜好。

内置记忆（默认开启）

- `MEMORY.md：` Agent 的工作笔记，记录环境事实、项目惯例、踩过的坑
- `USER.md：` 你的画像，记录偏好、沟通风格、工作习惯

内置数据库（会存放理事会话、Token等信息）

- state.db (SQLite)

### 个性化

#### 偏好设置

比如：直接告诉它，把这个偏好写入你的长期记忆

#### 技能自我进化

当 Hermes Agent 完成一个复杂任务，它会把解决过程提炼成一个可复用的技能文件，保存在 `~/.hermes/skills/` 目录，下次遇到类似问题，它会直接调用这个技能，不用从头摸索。

你也可以主动引导它把刚才的数据处理流程保存为一个 Skill，命名为“name###”

- 查看技能列表：

```bash
hermes skills list
```

# 常见错误

### API Key 配置问题

```bash
#若要更换，直接在文件中修改
# 文件位置：
~/.hermes/.env
```

### 发消息无回应

将`~/.hermes/.env`里面的属性 `FEISHU_ALLOW_ALL_USERS`设置为`true`

### hermes 提示命令找不到

```bash
# 重新加载配置文件

# 如果你用的是 bash 
source ~/.bashrc

# 如果你用的是 zsh        
source ~/.zshrc
```

### 输入内容填写错误想删除，却发现无法删除

原因：键盘不兼容引起的，按`ctrl + del`就可以删除了

