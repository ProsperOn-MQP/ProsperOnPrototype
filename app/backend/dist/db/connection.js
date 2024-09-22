import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        console.log(process.env.DB_URL);
        await connect(process.env.DB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to database");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot disconnect from database");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map