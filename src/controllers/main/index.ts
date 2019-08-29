const route = [{
  path: ['/backstage'], // 支持的路径
  exact: true, // 严格匹配
  title: '', // 页面标题
  keywords: '', // 关键词
  description: '', // 描述
  component: () => import('../../client/container/Main'),
}]

export default route
