import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/User';
const UserModel = getModelForClass(User);
import { Parent } from '../../../common/types/entity/user';


export const users = async () => {
    try {
        return await UserModel.find();
    } catch {
        throw new Error('Ωχχχ, κάτι πήγε στραβά...')
    }
}

export const isUserRegistered = async (_: Parent, { mail }: {
    mail: string
}) => {
    if (await UserModel.findOne({ mail })) return true;
    return false;
}