import { uploadOnCloudinary } from "../services/cloidinary.js";
import { File } from "../model/file.model.js";
const uploadFile = async (req, res) => {
  const fileLocalPath = req.files?.photo[0]?.path;
  // console.log("local file path will be", fileLocalPath);
  if (!fileLocalPath) {
    res.status(400).send("Please upload file");
  }

  try {
    // Upload the file to Cloudinary
    const photo = await uploadOnCloudinary(fileLocalPath);
    console.log("File on cloudinary", photo);
    if (!photo || !photo.url) {
      throw new Error("Failed to upload file to Cloudinary");
    }

    // Create file record in the database
    const file = await File.create({
      file: photo.url,
    });

    // Respond with success message or appropriate response
    res.status(200).json({ success: true, file });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Internal server error");
  }
};

export { uploadFile };
