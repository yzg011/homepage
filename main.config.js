export default {
  site: {
    title: 'Saimen 的个人主页', //网站标题
    icon: 'https://img.131213.xyz/tfile/BQACAgUAAx0Eflp52gABASoGagROrYjKvhiuNs6FoVSVGXPVyZoAAnYfAAKWzCBUC2AlnrHr6z47BA', //网站图标
    background: 'https://img.xscnet.cn//i/2026/04/11/69da185da44e4.png', //网站背景
    useSpecialLightPalette: true, // 是否启用白天特殊配色
    useSpecialDarkPalette: false // 是否启用黑夜特殊配色
  },
  author: {
    name: 'Saimen', //你的名称
    avatar: 'https://img.131213.xyz/tfile/BQACAgUAAx0Eflp52gABASoGagROrYjKvhiuNs6FoVSVGXPVyZoAAnYfAAKWzCBUC2AlnrHr6z47BA', //你的头像
    intro: '你好，欢迎来到我的博客主页', //你的简介
    aiPortrait: 'https://img.131213.xyz/tfile/BQACAgUAAx0Eflp52gABASoGagROrYjKvhiuNs6FoVSVGXPVyZoAAnYfAAKWzCBUC2AlnrHr6z47BA', //你的画像
    mbti: 'INTP', //你的MBTI人格类型(影响到关于我页面)
    aboutMeintro: '读史可以明智,知古方能鉴今。喜欢读历史，一个十几年安防的老安防人，也会分享更多的安防知识。' //关于我的介绍
  },
  navLinks: [ //导航栏
    { name: '首页', url: '/' },
    { name: '社交', url: '#socials' },
    { name: '项目', url: '#projects' },
    { name: '文章', url: '#articles' },
    { name: '关于我', url: '/about' }
  ],
  blog: { //跳转博客相关配置
    url: 'https://com.z2m.store/',
    rssFeed: 'https://com.z2m.store/atom.xml',
    randomCoverApi: 'https://rand.xscnet.cn/mix' //随机封面API（可选，文章列表会使用这个接口获取随机封面图）
  },
  github: {
    useGithubApi: false, // 是否使用 GitHub API 获取项目（如果为 false，则只显示 manualRepos 中的项目）
    username: 'yzg011', // GitHub 用户名
    maxRepos: 1, // 最大显示仓库数量
    excludeForks: false,  // 是否排除 Fork 的仓库

    // API 模式下：按仓库名称匹配封面
    covers: {
      // 'repo-name': 'https://example.com/repo-cover.jpg'
      // 'minimal-homepage': 'https://img.xscnet.cn//i/2026/04/12/69db326f931e2.webp',
      // 'Minecraft-Tree-Hole': 'https://img.xscnet.cn//i/2026/04/12/69db32f13bd07.webp',
      // 'Mete0r-Tree-Hole': 'https://img.xscnet.cn//i/2026/04/12/69db348b726e1.webp',
      // 'valaxy-yun-external-link': 'https://img.xscnet.cn//i/2026/04/12/69db34f47cc87.webp',
    },

    // 非 API 模式下：手动维护项目（不会显示 Star）
    manualRepos: [
      {
        name: '我的主页项目',
        url: 'https://github.com/yzg011/homepage',
        description: '首页 /社交链接卡片/GitHub 项目展示（可选择 API 模式 / 手动模式）/RSS 博客文章拉取与展示/全局配置化（main.config.js）',
        language: 'Vue',
        visibility: 'public',
        // cover: 'https://example.com/cover.jpg'
      }
    ]
  },
  socials: [ //社交链接
    { name: '微信', label: '联系作者', icon: 'https://img.131213.xyz/tfile/BQACAgUAAx0Eflp52gABASoHagUurs-zuF7pwusOBzeJTzvoAAEYAAIUHQAClswoVB6Rf1419YfsOwQ', url: 'https://work.weixin.qq.com/kfid/kfc90518b0eacba59c3' },
    { name: 'GitHub', label: 'Open Source', icon: 'https://res.xscnet.cn/BlogStatic/Icon/svg/github-line.svg', url: 'https://github.com/yzg011/' },
    { name: '博客', label: '另一博客', icon: 'https://img.131213.xyz/tfile/BQACAgUAAx0Eflp52gABASoIagVgdANtywPVHVC-jHR6V3-T3JMAAqwdAAKWzChUeJYMlTwL3Lo7BA', url: 'https://blog.z2m.store' },
    { name: 'Bilibili', label: 'Videos', icon: 'https://res.xscnet.cn/BlogStatic/Icon/svg/bilibili-line.svg', url: 'https://space.bilibili.com/589691048' },
    // { name: '163Music', label: 'Music', icon: 'https://res.xscnet.cn/BlogStatic/Icon/svg/MdiMusicClefTreble.svg', url: 'https://music.163.com/#/artist?id=95704903' },
    { name: 'Email', label: 'Contact Me', icon: 'https://res.xscnet.cn/BlogStatic/Icon/svg/mail-line.svg', url: 'mailto:357239268@qq.com' },
    // { name: 'Youtube', label: 'Community', icon: 'https://res.xscnet.cn/BlogStatic/Icon/svg/LineMdYoutubeFilled.svg', url: 'https://www.youtube.com/@Mete0r7023' }
  ],
  footer: {
    icp: '粤0041220-2', //ICP备案号
    copyright: '© 2026 saimen. All rights reserved.', //版权信息
    email: '357239268@qq.com', //联系邮箱
    links: [ //页脚右下角链接，可不写icon
      {
        name: 'Email',
        icon: 'https://res.xscnet.cn/BlogStatic/Icon/svg/mail-line.svg',
        url: 'mailto:357239268@qq.com'
      },
      {
        name: 'GitHub',
        icon: 'https://res.xscnet.cn/BlogStatic/Icon/svg/github-line.svg',
        url: 'https://github.com/yzg011/homepage'
      }
    ]
  }
}

