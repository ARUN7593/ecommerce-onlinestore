import { connectDb } from "./";

async function startApp() {
  try {
    await connectDb();
    // MongoDB is connected, proceed with your application logic here
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    // Handle error gracefully, e.g., show error message, retry connection, etc.
  }
}

startApp();
