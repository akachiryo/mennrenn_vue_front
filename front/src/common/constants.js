export default {
  logoutLists: [
    {
      name: 'ホーム',
      url: '/',
    },
    {
      name: 'コンテンツ',
      url: '/about',
    },
    {
      name: '新規登録',
      url: '/signup',
    },
    {
      name: 'ログイン',
      url: '/signin',
    },
  ],
  loginLists: [
    {
      name: 'マイページ',
      url: "/users/${$store.getters['auth/currentUser'].id}/account/profile",
    },
    {
      name: '部屋一覧',
      url: '/rooms',
    },
    {
      name: '部屋作成',
      url: '/rooms/new',
    },
    // {
    //   name: '通知一覧',
    //   url: '/signin',
    // },
    {
      name: 'ログアウト',
      url: '/',
    },
  ],
};
