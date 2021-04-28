import mongoose from "mongoose";
import {Image} from "../interfaces/Image";

const Image = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  imageMiniUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<Image & mongoose.Document>('Image', Image);
