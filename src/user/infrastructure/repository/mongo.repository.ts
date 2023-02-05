import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.schema";

export class MongoRepository implements UserRepository {
    async findUserById(uuid: string): Promise<UserEntity | null> {
        const user = await UserModel.findOne({uuid}) as UserEntity;
        return user;
    }
    async registerUser(newUser: UserEntity): Promise<any> {
        const user = await UserModel.create(newUser);
        return user;
    }
    async listUser(): Promise<UserEntity[] | null> {
        const users = await UserModel.find() as UserEntity[];
        return users
    }

}