"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouts = void 0;
const auth_1 = require("../middleware/auth");
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
function UserRouts(app) {
    app.get('/get-users', auth_1.authenticateToken, users_controllers_1.default.getUsers);
    app.get('/get-users/:id', auth_1.authenticateToken, users_controllers_1.default.getUsersById);
    app.post('/insert-user', auth_1.authenticateToken, users_controllers_1.default.insertUser);
    app.put('/update-user/:id', auth_1.authenticateToken, users_controllers_1.default.updateUser);
}
exports.UserRouts = UserRouts;
