declare module 'nergal' {
    import { Client } from "discord.js";
    import {Database} from "sqlite3";

    export class CommandService {
        private commands;
        constructor(discordClient: Client, db: IDbAdapter);
        run(command: string, args: string[]): Promise<void>;
    }

    export interface IRouter {
        route(msg: DiscordMessage): Promise<DiscordControllerResponse>;
    }

    export class DiscordService {
        private readonly discordClient;
        private readonly token;
        private readonly messageLifeTime;
        private readonly adminIds;
        private readonly router;
        constructor(discordClient: Client, router: IRouter, token: string, adminIds: Map<string, null>);
        private setupHandlers;
        start(): void;
    }

    export interface IDbAdapter {
        value(sql: string, placeholders?: object): Promise<string>;
        one(sql: string, placeholders?: object): Promise<any>;
        all(sql: string, placeholders?: object): Promise<any[]>;
        run(sql: string, placeholders?: object): Promise<void>;
    }

    export abstract class AbstractServiceContainer {
        static db: IDbAdapter;
        static discordClient: Client;
        static discordService: DiscordService;
        protected static router: IRouter;
        static init(): void;
        static start(): void;
    }

    export class SqliteDbAdapter implements IDbAdapter {
        private db;
        constructor(dbConnection: Database);
        value(sql: string, placeholders?: object): Promise<string>;
        one(sql: string, placeholders?: object): Promise<any>;
        all(sql: string, placeholders?: object): Promise<any[]>;
        run(sql: string, placeholders?: object): Promise<void>;
    }

    export class User {
        name: string;
        discord_user_id: string;
        id: number;
    }

    export function getMsgAuthorName(msg: any): string;

    export enum DatabaseErrorCode {
        ConstraintViolation = 0,
        NoResult = 1,
        Other = 2
    }
    export class DatabaseError {
        private code;
        private text;
        constructor(code: DatabaseErrorCode, text: string);
    }

    export class DiscordControllerResponse {
        responseMessage: string;
        removeOriginalMessage: boolean;
        constructor(responseMessage?: string, removeOriginalMessage?: boolean);
    }

    export class DiscordMessage {
        readonly authorId: string;
        readonly serverId: string;
        readonly channelId: string;
        readonly authorName: string;
        readonly message: string;
        readonly embedImageUrl: string[];
        readonly isAdmin: boolean;
        readonly isPrivate: boolean;
        constructor(authorId: string, authorName: string, serverId: string, channelId: string, message: string, embedImageUrl: string[], isAdmin: boolean, isPrivate: boolean);
    }

    export abstract class AbstractDAO {
        protected db: IDbAdapter;
        abstract table: string;
        constructor(db: IDbAdapter);
    }

    export class UsersDAO extends AbstractDAO {
        table: string;
        getAll(): Promise<User[]>;
    }

    export class AbstractCommand {
        discordClient: Client;
        db: IDbAdapter;
    }

    export interface ICommand {
        name: string;
        discordClient: Client;
        run(args: string[]): any;
    }
}


