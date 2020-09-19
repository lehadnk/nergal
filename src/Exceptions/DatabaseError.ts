import {DatabaseErrorCode} from "./DatabaseErrorCode";

export class DatabaseError {
    private code: DatabaseErrorCode;
    private text: string;

    constructor(code: DatabaseErrorCode, text: string) {
        this.code = code;
        this.text = text;
    }
}