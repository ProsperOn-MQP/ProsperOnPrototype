// Entry point for server
import app from "./app.js";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/connection.js";
import seedDatabase from "./db/seed.js";
const port = process.env.PORT || 5000;

// Load environmental variables from env file
dotenv.config({ path: "../../.env" });

// Set up: Connect to DB and start HTTP server
connectToDatabase()
  .then(() => {
    app.listen(port, "0.0.0.0", () =>
      console.log(
        `Server Open and connected to database. Listening on port ${port}`
      )
    );
    //seedDatabase();
    console.log("done");
  })
  .catch((err) => console.log(err));
