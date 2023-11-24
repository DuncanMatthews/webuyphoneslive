import mongoose, { Document, Model, Schema, model } from 'mongoose';

interface MacBook extends Document {
  macModel: string;
  screenSize: string;
  releaseDate: string;
  processor: string;
  ram: string;
  storage: string;
  gpu: string;
  price: number;
  userId: mongoose.Schema.Types.ObjectId;
  status: string;
}

const macBookSchema = new Schema<MacBook>(
  {
    macModel: { type: String, required: true },
    screenSize: { type: String, required: true },
    releaseDate: { type: String, required: true },
    processor: { type: String, required: true },
    ram: { type: String, required: true },
    storage: { type: String, required: true },
    gpu: { type: String, required: false },
    price: { type: Number, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user' // Ensure this matches your User model name
    },
    status: {
      type: String,
      default: 'new'
    }
  },
  { timestamps: true }
);

const MacBookModel: Model<MacBook> =
  mongoose.models.Macbook || model<MacBook>('Macbook', macBookSchema, 'MacbookSubmissions');

export default MacBookModel;
