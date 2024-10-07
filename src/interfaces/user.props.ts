import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface UserAttributes
  extends Model<InferAttributes<UserAttributes>, InferCreationAttributes<UserAttributes>> {
  userId: CreationOptional<string>;
  name: string;
  email: string;
  password: string;
  role: string;
}
