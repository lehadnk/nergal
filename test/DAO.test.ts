import {expect} from "chai";
import {UsersDAO} from "../src/DAO/UsersDAO";
import User from "../src/Models/User";
import UnitTestServiceContainer from "./app/UnitTestServiceContainer";

describe('Tests DAO', () => {
    it('should create user', async () => {
        let dao = new UsersDAO(UnitTestServiceContainer.db, () => new User);
        let user = new User();
        user.id = 1;
        user.name = 'Test';
        user.discord_user_id = '123';
        let operationResult = await dao.save(user);

        expect(operationResult).to.be.true;
    });

    it('should return correct user', async () => {
        let dao = new UsersDAO(UnitTestServiceContainer.db, () => new User);
        let user = await dao.get(1);

        expect(user.id).to.be.equal(1);
        expect(user.name).to.be.equal('Test');
        expect(user.discord_user_id).to.be.equal('123');
    });

    it('should update user', async () => {
        let dao = new UsersDAO(UnitTestServiceContainer.db, () => new User);
        let user = await dao.get(1);
        user.discord_user_id = '321';
        let operationResult = dao.save(user);

        let fieldValue = await UnitTestServiceContainer.db.value("SELECT discord_user_id FROM users WHERE id = 1");

        expect(fieldValue).to.be.equal('321');
    });

    it('should return user by field value', async () => {
        let dao = new UsersDAO(UnitTestServiceContainer.db, () => new User);
        let user = await dao.getOneByField('discord_user_id', '321');
        expect(user.id).to.be.equal(1);
    });

    it('should return all users by field value', async () => {
        let dao = new UsersDAO(UnitTestServiceContainer.db, () => new User);
        let users = await dao.getAllByField('discord_user_id', '321');
        expect(users[0].id).to.be.equal(1);
    });

    it('should return all users', async () => {
        let dao = new UsersDAO(UnitTestServiceContainer.db, () => new User);
        let users = await dao.getAll();
        expect(users[0].id).to.be.equal(1);
    });
});