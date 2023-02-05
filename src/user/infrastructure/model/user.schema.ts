import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true},
        uuid: { type: String, required: true },
        description: { type: String, required: true }
    },{
        timestamps: true,
        versionKey: false
    }
);

const UserModel = model('User', UserSchema);

export default UserModel;