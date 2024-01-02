"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
// personal auth for one person only
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    try {
        if (!token || token != process.env.PRIVATE_TOKEN) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    }
    catch (error) {
        return res.status(403).json({ message: 'Forbidden' });
    }
};
exports.authenticateToken = authenticateToken;
