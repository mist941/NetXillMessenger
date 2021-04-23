import mongoose from 'mongoose';
import {User} from "../interfaces/User";

const User = new mongoose.Schema({
  name: String,
  lastName: String,
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  userImage: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  }],
});

export default mongoose.model<User & mongoose.Document>('User', User);
