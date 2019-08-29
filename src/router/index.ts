import * as KoaRouter from 'koa-router'
import { user } from '../controllers'
const router = new KoaRouter()
router
  // 用户信息
  .post('/api/login', user.login)
export default router