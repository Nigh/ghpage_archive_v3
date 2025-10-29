# My ghpage archive

It's my GitHub page archive of [this](https://github.com/Nigh/nigh.github.io/releases/tag/twitter-style) commit.


# Archive Notes

把这个 Astro 项目重新部署到子路径下，遇到的路径问题折腾了好几天。得到经验如下：

1. 需要将 `package.json` 中 `build` 命令的 `cross-env` 环境变量移除。因为 GitHub action 使用了这个命令，它会覆盖 action 中配置的环境变量。
2. 即便在 `astro.config` 中配置了 `base` ， astro 也只能处理 astro 文件中的直接路径，其他比如 ts 脚本和 svelte 模块中定义的路径，它都没法处理，这时需要通过 `import.meta.env.PUBLIC_BASE_URL` 自己从环境中获取 `base` 路径。

## Notes(Origin)

带备案信息**本地**调试与编译，因为在 action 中设置了环境变量，所以部署时请移除build命令中的环境变量。

```json
"scripts": {
    "dev": "cross-env PUBLIC_BASE_URL='/' BEIAN='京ICP备xxxxxxxxxx号' astro dev",
    "build": "cross-env PUBLIC_BASE_URL='/' BEIAN='京ICP备xxxxxxxxxx号' astro build",
	...
}
```
