import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import AutoNavPlugin from 'vitepress-auto-nav-sidebar'


const { nav, sidebar } = AutoNavPlugin({
  ignoreFolders: ["node_modules", "assets", "public", ".vitepress", "code", ".obsidian", "utils"], // 需要排除的一些目录
  ignoreFiles: ['index.md'], // 需要排除的一些文件
  dirPrefix: '',
  filePrefix: '',
  showNavIcon:false,
  isCollapsible:true,
  showSideIcon:true,
  collapsed: true,
  singleLayerNav:true
})

export default {
  base: '/PersonalLearningBlog/',
  title: '千变万化',
  description: '！',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.jpeg' }]],
  vite: {
    plugins: [
      AutoSidebar({
        deletePrefix: /\d+\./,
        collapsed: false,
        ignoreList: ['font'],
        // 按照文件名排序
        beforeCreateSideBarItems(data) {
          const regex = /^\d+/
          return data.sort((a, b) => {
            const aOrder = a.match(regex)?.[0]
            const bOrder = b.match(regex)?.[0]
            if (!aOrder || !bOrder) {
              return 0
            }
            return Number(aOrder) - Number(bOrder)
          })
        },
      }),
    ],
    // ...
    ssr: {
      noExternal: ['oh-vue-icons'],
    },
  },
  themeConfig: {
    repo: 'wushijiang13/vue3-vite-cli',
    repoLabel: '测试',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '欢迎帮助我们改善页面!',
    lastUpdated: '最近更新时间',
    // nav: [
    //   { text: '前端', link: '/1.前端知识/导读' },
    //   { text: '其他', link: '/其他/导读' },
    // ],
    nav,
    sidebar,
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2023-present DDDDDDuck出品'
    }
  }

}