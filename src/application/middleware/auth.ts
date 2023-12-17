import { Request, Response,NextFunction } from 'express';
import * as dotenv from 'dotenv';
// personal auth for one person only

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    try {
        
        if (!token || token!=process.env.PRIVATE_TOKEN) {
         
        return res.status(401).json({ message: 'Unauthorized' });
        }
        
        next();
    } catch (error) {
      return res.status(403).json({ message: 'Forbidden' });
    }
  };

