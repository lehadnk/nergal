import { DatabaseErrorCode } from "./DatabaseErrorCode";
export declare class DatabaseError {
    private code;
    private text;
    constructor(code: DatabaseErrorCode, text: string);
}
