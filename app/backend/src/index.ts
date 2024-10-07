// Entry point for server
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
import initializeDatabase from "./db/initialize.js";

const port = Number(process.env.SERVER_PORT) || 5001;

// Connect to DB and start HTTP server
connectToDatabase()
  .then(() => {
    initializeDatabase();

    app.listen(port, "::", () =>
      console.log(
        `Server Open and connected to database. Listening on port ${port}`
      )
    );
    console.log("done");
  })
  .catch((err) => console.log(err));
