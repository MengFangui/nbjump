# 快速开始

## 安装和使用

```bash
# 安装 nbjump-cli 0.2.x
npm install -g @nbjump/cli

# 0.3.x
npm install -g @nbjump/cli@next

# 创建项目
nbjump create [projectName]

# 可选项：
# 是否支持 H5，如需支持 H5 请选择：小程序和 H5
? 选择创建项目类型： (Use arrow keys)
❯ 小程序和 H5
  仅小程序

# 开发模式
nbjump serve [--target, -t swan (默认) | wx | h5]

# 构建模式
nbjump build [--target, -t swan (默认) | wx | h5]

# 更新所有 nbjump 相关依赖
# 默认相当于 npm update。-f 时，强制更新到最新版本
nbjump update [--registry, -r url] [-force, -f]

# 获取当前环境信息
nbjump info
```
