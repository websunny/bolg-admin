import { Context } from 'koa'
import { UserHelper } from '../helpers'

export default class UserController {
    public static async login(ctx: Context) {
        const response = await UserHelper.findUser(ctx.request.body)
        if (response) {
            ctx.body = response
        }
    }
}
