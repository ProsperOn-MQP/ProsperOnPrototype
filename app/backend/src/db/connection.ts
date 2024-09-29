import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect(process.env.DATABASE_URI);
    }
    catch (error) {
        console.log(error);
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
    }
}

export { connectToDatabase, disconnectFromDatabase }
