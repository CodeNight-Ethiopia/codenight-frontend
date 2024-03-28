import mongoose from "mongoose";

let cachedConnection: mongoose.Connection | null = null;

const connectMongoDB = async () => {
  try {
    if (cachedConnection) {
      return cachedConnection;
    }

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const connection = await mongoose.connect(
      process.env.MONGODB_URI || "",
      options
    );
    cachedConnection = connection.connection;
    return connection.connection;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};

export default connectMongoDB;
