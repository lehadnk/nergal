export declare enum DatabaseErrorCode {
    ConstraintViolation = 0,
    NoResult = 1,
    Other = 2
}
export declare class DatabaseError {
    private code;
    private text;
    constructor(code: DatabaseErrorCode, text: string);
}
