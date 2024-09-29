// Entry point for server
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
import dotenv from "dotenv";
import initializeDatabase from "./db/initialize.js";

// Load environmental variables from env file
dotenv.config({ path: "../../.env" });

// Connect to DB and start HTTP server
connectToDatabase()
  .then(() => {
    initializeDatabase();
    app.listen(5001, () =>
      console.log("Server running and connected to database")
    );
  })
  .catch((err) => console.log(err));
