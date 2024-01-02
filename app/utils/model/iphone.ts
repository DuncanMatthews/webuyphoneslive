/* eslint-disable unicorn/filename-case */

import mongoose, { Document, Model, model } from 'mongoose';

interface PhoneModel extends Document {
  phoneModel: string; // If you decide to use 'model', change this to 'model'
  storage: string;
  condition: string;
  color: string;
  price: number;
  userId: mongoose.Schema.Types.ObjectId; // Updated type to match schema definition
  status: string;
  instantCash: boolean;
}

const phoneSubmissionSchema = new mongoose.Schema(
  {
    phoneModel: String, // Ensure this matches the field in your interface
    storage: String,
    condition: String,
    color: String,
    price: Number,
    instantCash: Boolean,
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

const PhoneSubmission: Model<PhoneModel> =
  mongoose.models?.PhoneSubmission ||
  model<PhoneModel>('PhoneSubmission', phoneSubmissionSchema, 'PhoneSubmissions');

export default PhoneSubmission;
