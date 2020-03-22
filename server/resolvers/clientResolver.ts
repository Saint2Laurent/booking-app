import { getModelForClass } from '@typegoose/typegoose';

export default {
  Query: {
    clients: () => {},
    client: () => {}
  },
  Mutation: {
    addClient: () => {
      console.log('hitted addcleint router');
    }
  }
};
