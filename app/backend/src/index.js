"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Entry point for server
//import app from "./app.js";
const app_js_1 = __importDefault(require("./app.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_js_1 = require("./db/connection.js");
// Load environmental variables from env file
dotenv_1.default.config({ path: "../../.env" });
// Set up: Connect to DB and start HTTP server
(0, connection_js_1.connectToDatabase)()
    .then(() => {
    app_js_1.default.listen(5000, () => console.log("Server Open and connected to database"));
})
    .catch((err) => console.log(err));
