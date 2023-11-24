import mongoose, { Document, Model, model, Schema } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  verifyToken: string;
  verifyExpires: Date;
  forgotPasswordToken: string;
  forgotPasswordExpires: Date;
  userIsVerified: boolean;
  isAdmin: boolean; // Change the type here to boolean
  cellphone: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verifyToken: { type: String },
  verifyExpires: { type: Date },
  forgotPasswordToken: { type: String },
  forgotPasswordExpires: { type: Date },
  userIsVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  cellphone: { type: String, required: true }
});

const userModel: Model<IUser> = mongoose.models?.user || model<IUser>('user', userSchema, 'users');
export default userModel;
