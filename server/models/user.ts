import mongoose, {Types} from 'mongoose';
import {User} from "../interfaces/User";

const User = new mongoose.Schema({
  name: String,
  last_name: String,
  user_name: {
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
  created_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  userImage: {
    type: Types.ObjectId,
    ref: 'Image',
  },
});

export default mongoose.model<User & mongoose.Document>('User', User);