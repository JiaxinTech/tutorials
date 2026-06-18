---
order: 3
---
[![](https://cdn.jsdelivr.net/gh/JiaxinTech/tutorials-static@main/posts/20260618170431874.webp)](https://www.youtube.com/watch?v=3yeTUUVQclE)
# [Codex APP“0基础“保姆级全攻略：从入门到进阶，自动生成內容、网页、视频和ppt等海量实战教程，一期精通Codex](https://www.youtube.com/watch?v=3yeTUUVQclE)

---
## 自定义全局误删md

```bash
禁止批量删除文件或目录
不要使用：
`del /s`
`rd /s`
`rmdir /s`
`Remove-Item -Recurse`
`rm -rf`
需要删除文件时，只能一次删除一个明确路径的文件。
正确示例：
Remove-Item "/Users/file.txt"
如果需要批量删除文件，应停止操作，并向用户请求，让用户手动删除。
```