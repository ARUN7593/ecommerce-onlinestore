// import mongoose from "mongoose";

// const mongoURI = process.env.MONGO_URI;

// export const connectDb = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB Connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     throw err; // Re-throwing the error to handle it wherever connectDb is called
//   }
// };
import mongoose from "mongoose";

const connectDb = () => {
  const uri = process.env.MONGODB_URI || "";
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDb;
