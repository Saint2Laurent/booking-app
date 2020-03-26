import { getModelForClass } from '@typegoose/typegoose';
import bcrypt from 'bcryptjs';
import {User} from "../../../types/users/User";
import {Parent} from "../../../../shared/types/entity/user";
import {RegistrationPayload} from "../../../../shared/types/api/auth/register";
import {AlreadySigned, error} from "../../../utils/errors";
import {Access} from "../../../utils/auth";

const UserModel = getModelForClass(User);


export const isUserRegistered = async (_: Parent, { mail }: {
    mail: string
}) => {
    if (await UserModel.findOne({ mail })) return true;
    return false;
}

export const registerUser = async (_: Parent, args: RegistrationPayload) => {
    if (await UserModel.findOne({ mail: args.mail })) {
        return AlreadySigned;
    }
    try {
        const newUser = await UserModel.create({
            ...args, password: bcrypt.hashSync(args.password, 10)
        });

        return Access(newUser);
    } catch {
        return error
    }
};