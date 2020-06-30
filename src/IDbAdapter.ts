export interface IDbAdapter {
    value(sql: string, placeholders?: object): Promise<string>;

    one(sql: string, placeholders?: object): Promise<any>;

    all(sql: string, placeholders?: object): Promise<any[]>;

    run(sql: string, placeholders?: object): Promise<void>;
}