// Entry point for server
//import app from "./app.js";
import app from "./app.js";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/connection.js";

// Load environmental variables from env file
dotenv.config({ path: "../../../.env" });

// Set up: Connect to DB and start HTTP server
connectToDatabase()
  .then(() => {
    app.listen(5000, () =>
      console.log("Server Open and connected to database")
    );
  })
  .catch((err) => console.log(err));
