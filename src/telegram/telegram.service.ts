import {Ctx, Message, On, Start, Update} from "nestjs-telegraf";
import {Markup, Telegraf, } from "telegraf";
import {SceneContext} from "telegraf/typings/scenes";
import * as process from "process";


@Update()
export class TelegramService extends Telegraf<SceneContext>{
    @Start()
    onStart(@Ctx() ctx: SceneContext) {
        ctx.reply('Здравстуйте!', Markup.keyboard(
            [
                [
                    {text: 'Открыть приложение для записи', web_app: { url: process.env.APP_URL }}
                ]
            ]
        ))
    }
}
