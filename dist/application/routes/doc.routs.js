"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocRouts = void 0;
const auth_1 = require("../middleware/auth");
const doc_controllers_1 = __importDefault(require("../controllers/doc.controllers"));
function DocRouts(app) {
    app.post('/insert-doc', auth_1.authenticateToken, doc_controllers_1.default.insertDocument);
    app.put('/update-doc/:id', auth_1.authenticateToken, doc_controllers_1.default.updateDocument);
}
exports.DocRouts = DocRouts;
