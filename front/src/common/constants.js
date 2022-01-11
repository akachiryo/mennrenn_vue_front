export default {
  logoutLists: [
    {
      name: 'Home',
      url:  '/'
    },
    {
      name: 'About',
      url:  '/about'
    },
    {
      name: 'SignUp',
      url:  '/signup'
    },
    {
      name: 'SignIn',
      url:  '/signin'
    }
  ],
  loginLists: [
    {
      name: 'マイページ',
      url:  '/'
    },
    {
      name: '部屋一覧',
      url:  '/about'
    },
    {
      name: '部屋作成',
      url:  '/signup'
    },
    {
      name: '通知一覧',
      url:  '/signin'
    },
    {
      name: "ログアウト",
      url: "/",
      action: "this.logout"
    }
  ]
}