export default {
  base:'/PersonalLearningBlog/',
  title: 'Test',
  description: '基于vite为基础搭建的风格脚手架,提供多种模板以便于更高效的解决业务需求！',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.jpeg' }]],
  themeConfig: {
    repo: 'wushijiang13/vue3-vite-cli',
    repoLabel: '测试',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '欢迎帮助我们改善页面!',
    lastUpdated: '最近更新时间',
    nav: [
      { text: '入门', link: '/getting/why.html' },
      { text: '模板', link: '/template/template-vue3-ts-initial.html' },
      { text: '相关文档', link: '/documentation/vue.html' },
      { text: '码云', link: 'https://gitee.com/wushijiang13/vue3' },
    ],
    sidebar: [
      // '/getting/': 'auto',
      {
        text: '入门',
        items: [
          {
            text: '简介111',
            link: '/foo/one'
          },
          {
            text: '模板脚手架简介',
            link: '/getting/template_introduction'
          }
        ]
      },
      {
        text: '模板内部结构解析',
        items: [
          {
            text: 'vue3-ts-initial',
            link: '/template/template-vue3-ts-initial'
          },
          {
            text: 'vue3-google-extensions',
            link: '/template/template-vue3-google-extensions'
          },
          {
            text: 'webpack-protist-js',
            link: '/template/template-webpack-protist-js'
          }
        ]
      },
      {
        text: '相关文档',
        items: [
          {
            text: 'Vue 相关文档',
            link: '/documentation/vue'
          },
          {
            text: 'Webpack 相关文档',
            link: '/documentation/webpack'
          }
        ]
      }
    ],
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2019-present 吴先森出品'
    }
  }

}