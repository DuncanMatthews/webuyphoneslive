import mongoose, { Document, Model, Schema, model } from 'mongoose';

interface IPhone extends Document {
  phoneModel: string;
  storage: string;
  condition: string;
  price: number;
  color: string;
  userId: string;
}

const phoneSchema = new Schema<IPhone>({
  phoneModel: { type: String, required: true },
  storage: { type: String, required: true },
  condition: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  userId: { type: String, required: true }
});

const PhoneModel: Model<IPhone> =
  mongoose.models?.iPhone || model<IPhone>('iPhone', phoneSchema, 'iPhoneSubmissions');

export default PhoneModel;
