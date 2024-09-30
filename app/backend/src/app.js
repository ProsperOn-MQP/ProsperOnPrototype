"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Creates an express application
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const chatLogSchema = new mongoose_1.default.Schema({
    message: String,
    response: String,
    timestamp: { type: Date, default: Date.now },
});
const ChatLogModel = mongoose_1.default.model("ChatLog", chatLogSchema);
// handle chat messages
app.post("/api/chat", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = req.body;
    const chatLog = new ChatLogModel({ message, response: "" });
    yield chatLog.save();
    const botResponse = `Your message is stored in id: ${chatLog._id}`;
    chatLog.response = botResponse;
    yield chatLog.save();
    res.json(botResponse);
}));
// fetch all chat logs
app.get("/chat/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chatLogs = yield ChatLogModel.find();
        res.json(chatLogs);
    }
    catch (error) {
        console.error("UHHH PROBLEM:", error);
        res.status(500).json({ error: "FAILED UHH" });
    }
}));
// Get request for "Hello"
app.get("/hello", (req, res, next) => {
    return res.send("Hello");
});
exports.default = app;
