import mongoose, { Schema } from "mongoose";

const fileSchema = new Schema(
  {
    file: {
      type: String,
      required: true, // Fixed typo in 'required'
    },
  },
  {
    timestamps: true,
  }
);

export const File = mongoose.model("File", fileSchema); // Changed model name to 'File'
