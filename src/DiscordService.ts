import {Client} from 'discord.js';
import {DiscordController} from "./Controllers/DiscordController";

export class DiscordService {
    private readonly discordClient;
    private readonly token: string;
    private readonly controller: DiscordController;
    private readonly contestChannel: string;
    private readonly messageLifeTime: number;

    constructor(controller: DiscordController, discordClient: Client, token: string, contestChannel: string) {
        this.discordClient = discordClient;
        this.token = token;
        this.contestChannel = contestChannel;

        // It's not injectable, since DiscordService logic is highly couped with DiscordController
        this.controller = controller;
        this.messageLifeTime = process.env.MESSAGE_LIFE_SPAN != undefined ? parseInt(process.env.MESSAGE_LIFE_SPAN) : 10000;
        this.setupHandlers();
    }

    private setupHandlers() {
        this.discordClient.on("message", msg => {
            this.discordClient.guilds.cache.each(g => console.log(g.name));
            console.log("Handling message in the channel " + msg.channel.name + " on server " + msg.guild.name);
        });
    }

    start() {
        this.discordClient
            .login(this.token)
            .then(() => {
                console.info('Bot is up!');
            })
    }
}