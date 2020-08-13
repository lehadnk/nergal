import TestServiceContainer from "./test/app/TestServiceContainer";
import {UsersDAO} from "./src/DAO/UsersDAO";
import User from "./src/Models/User";

TestServiceContainer.init();
TestServiceContainer.start().then(async () => {
    let dao = new UsersDAO(TestServiceContainer.db, () => new User());
    let obj = new User();
    obj.discord_user_id = '123';
    obj.name = 'Test10';
    obj.id = 1;
    await dao.save(obj);
});
