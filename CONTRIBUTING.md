# 贡献指南

感谢关注 **小元教培管理系统** 开源精简版！欢迎通过 Issue 与 Pull Request 参与改进。

## 仓库范围

本仓库仅包含精简骨架：`admin-lite/`（Vue 3 + Ant Design Vue，Mock 数据）与 `app-lite/`（uni-app，Mock 数据）。
请勿提交：密钥 / AppID 等私密配置、真实域名或内网 IP、真实机构 / 学员 / 家长数据（截图须打码）。

## 开发环境

```bash
# 管理后台
cd admin-lite && npm install && npm run dev    # http://localhost:5778
npm run build                                  # 提交前确保类型检查与构建通过

# uni-app
cd app-lite && npm install && npm run dev:h5   # 或 npm run dev:mp-weixin
```

## 提交流程

1. Fork 仓库，从 `main` 新建分支，如 `feat/xxx`、`fix/xxx`、`docs/xxx`。
2. 单个 PR 聚焦一件事，附改动说明；界面改动附打码截图。
3. 提交信息建议 `类型: 描述`，类型如 `feat` / `fix` / `docs` / `chore` / `refactor`。
4. 按模板填写 PR，等待评审。

## 问题反馈

通过 Issue 反馈 Bug 或建议。商务合作与定制开发见 [README 联系方式](README.md#-商务合作--联系我们)。
