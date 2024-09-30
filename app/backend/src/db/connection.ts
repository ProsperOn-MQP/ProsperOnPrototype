import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    const dbUri = process.env.DATABASE_URI || "mongodb://localhost:27017/local";
    console.log(dbUri);
    await connect(dbUri);
  } catch (error) {
    console.log(error);
    throw new Error("Cannot connect to database");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Cannot disconnect from database");
  }
}

export { connectToDatabase, disconnectFromDatabase };
