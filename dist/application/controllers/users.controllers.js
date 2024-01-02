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
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
class UsersHandler {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const usersList= await Users.findMany();
                const usersList = yield user_1.Users.find();
                if (!usersList || usersList.length == 0)
                    res.status(200).json({ message: 'No usrs find in databse. ' });
                res.status(200).json(usersList);
            }
            catch (err) {
                res.status(500).json({ error: err });
            }
        });
    }
    getUsersById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const usersList= await Users.findMany();
                const userId = req.params.id;
                console.log(userId);
                // const usersList = await Users.find();
                const familyUsers = yield user_1.Users.find({ userId: userId });
                if (!familyUsers || familyUsers.length == 0)
                    res.status(200).json({ message: 'No users find in databse. ' });
                res.status(200).json(familyUsers);
            }
            catch (err) {
                res.status(500).json({ error: err });
            }
        });
    }
    insertUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            // console.log(req.body);
            if (!req.body || !req.body.fullName) {
                return res.status(200).json({ message: 'Invalid request body.' });
            }
            const { userId, fullName, ritwickName } = req.body;
            if (!userId || userId === undefined)
                return res.status(200).json({ message: 'Family Code Is Required' });
            if (!fullName || fullName === undefined)
                return res.status(200).json({ message: 'fullName Is Required' });
            if (!ritwickName || ritwickName === undefined)
                return res.status(200).json({ message: 'ritwickName Is Required' });
            try {
                const existingUser = yield user_1.Users.findOne({ fullName: user.fullName });
                if (existingUser) {
                    return res.status(200).json({ message: 'User already exists.' });
                }
                const newUser = new user_1.Users(Object.assign({}, user));
                // console.log('this is new user ',newUser)
                const result = yield newUser.save();
                res.status(200).json({ message: 'Data successfully inserted.', user });
            }
            catch (error) {
                res.status(500).json({ message: 'Error inserting data.', error: error });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            const fullName = req.body.fullName;
            const newField = req.body;
            try {
                // console.log(fullName)
                if (fullName === undefined || fullName === null) {
                    return res.status(200).json({ message: "Adding fullName is mandatory" });
                }
                const user = yield user_1.Users.findOne({ userId: userId, fullName: fullName });
                if (!user) {
                    return res.status(200).json({ message: "User not found" });
                }
                Object.keys(newField).forEach(key => {
                    user[key] = newField[key];
                });
                yield user.save();
                res.status(200).json({ message: 'Data successfully updated.' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error updating data.', error: error });
            }
        });
    }
}
exports.default = new UsersHandler();
