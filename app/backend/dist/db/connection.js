import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        console.log(process.env.DATABASE_URI);
        await connect(process.env.DATABASE_URI);
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