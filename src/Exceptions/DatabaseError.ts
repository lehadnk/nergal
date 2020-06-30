export enum DatabaseErrorCode {
    ConstraintViolation = 0,
    NoResult = 1,
    Other = 2,
}

export class DatabaseError {
    private code: DatabaseErrorCode;
    private text: string;

    constructor(code: DatabaseErrorCode, text: string) {
        this.code = code;
        this.text = text;
    }
}