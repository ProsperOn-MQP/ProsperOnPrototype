// Entry point for server
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
import initializeDatabase from "./db/initialize.js";

// Load environmental variables from env file
// console.log("loading environmental variables");
// dotenv.config({ path: "../../.env" });

// Connect to DB and start HTTP server
connectToDatabase()
  .then(() => {
    initializeDatabase();
    app.listen(5001, () =>
      console.log("Server running and connected to database")
    );
  })
  .catch((err) => console.log(err));
