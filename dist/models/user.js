"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    userId: String,
    fullName: String,
    ritwickName: String,
    swastyayani: String,
    istavrity: String,
    acharyavrity: String,
    dakshina: String,
    sangathani: String,
    ritwicki: String,
    proname: String,
    anandabazar: String,
    srimandir: String,
    parivrity: String,
    misc: String,
    address: String
});
exports.Users = mongoose_1.default.model('Users', userSchema);
