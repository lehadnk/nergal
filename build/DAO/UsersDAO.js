"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDAO = void 0;
const AbstractDAO_1 = require("./AbstractDAO");
class UsersDAO extends AbstractDAO_1.AbstractDAO {
    constructor() {
        super(...arguments);
        this.table = 'users';
        this.fields = ['id', 'name', 'discord_user_id'];
    }
}
exports.UsersDAO = UsersDAO;
//# sourceMappingURL=UsersDAO.js.map