const mongoose = require('mongoose');

const phoneSubmissionSchema = new mongoose.Schema(
  {
    model: String,
    storage: String,
    condition: String,
    color: String,
    price: Number,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      default: 'pending'
    }
  },
  { timestamps: true }
);

const PhoneSubmission = mongoose.model('PhoneSubmission', phoneSubmissionSchema);

module.exports = PhoneSubmission;
