module.exports = {
  title: '蜗牛会飞',
  description: '蜗牛会飞的博客',
  themeConfig: {
    lastUpdated: '更新时间: ',
    logo: '/assets/img/hero.png',
    sidebar: [
      '/',
      '/about/',
      ['/about', 'Explicit link text']
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about/' },
      { text: 'about', link: '/about.html' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/about/' },
        ]
      },
      {
        text: 'Languages2',
        items: [
          { text: 'Group1', items: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
          ] },
          { text: 'Group2', items: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
          ] }
        ]
      }
    ]
  }
}