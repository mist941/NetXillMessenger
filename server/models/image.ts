import mongoose from 'mongoose';
import {Image} from "../interfaces/Image";

const Image = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  image_mini_url: {
    type: String,
    required: true,
  },
  created_ar: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<Image & mongoose.Document>('Image', Image);