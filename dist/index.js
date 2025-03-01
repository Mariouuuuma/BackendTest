"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs = __importStar(require("fs"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
console.log(process.env.PORT);
const app = (0, express_1.default)();
const port = process.env.PORT;
app.listen(port, () => {
    console.log('server is running');
});
app.get("/", (req, res) => {
    res.send("response from API");
});
const text = fs.readFileSync("./src/input.txt", "utf-8");
console.log("text");
mongoose_1.default.connect("mongodb+srv://maryemsmadhi:kZfaAlD57Mxlm4I1@cluster0.p05upvb.mongodb.net/").then(() => { console.log("Connected successfully"); })
    .catch(() => {
    console.log("Connexion failed");
});
