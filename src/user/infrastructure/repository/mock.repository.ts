import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.schema";

const MOCK_USER = {
    name: 'Giordan',
    description: 'Hello!',
    uuid: '000-000'
};

export class MockRepository implements UserRepository {
    async findUserById(uuid: string): Promise<any> {
        const user = MOCK_USER;
        return user;
    }
    async registerUser(newUser: UserEntity): Promise<any> {
        const user = MOCK_USER;
        return user;
    }
    async listUser(): Promise<any> {
        const users = [MOCK_USER, MOCK_USER, MOCK_USER];
        return users
    }

}