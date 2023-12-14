import { Request, Response } from 'express';
import { User } from '../../types/user';
import { Users } from '../../models/user';

class DocumentHandler  {
  async insertDocument(req: Request, res: Response): Promise<void> {

    const user: User = req.body;

    // console.log(req.body);

    if (!req.body || !req.body.fullName) {
      return res.status(400).json({ message: 'Invalid request body.' });
    }

    try {
      const existingUser = await Users.findOne({ fullName: user.fullName });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
      }

      const newUser = new Users({
        ...user,
      });

      const result = await newUser.save();
      res.status(200).json({ message: 'Data successfully inserted.', result });
    } catch (error) {
      res.status(500).json({ message: 'Error inserting data.', error: error });
    }
  }



  async updateDocument(req: Request, res: Response): Promise<void> {

    const user: User = req.body;
  
    if (!req.body || !req.body.fullName) {
      return res.status(400).json({ message: 'Invalid request body.' });
    }
    const existingUser = await Users.findOne({ id: user._id });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
      }
  
    const newUser = new Users({
      ...user,
    });
    try {
      const result = await newUser.save();
      res.status(200).json({ message: 'Data successfully inserted.', result });
    } catch (error) {
      res.status(500).json({ message: 'Error inserting data.', error: error });
    }
    
  }


  
}

export default new DocumentHandler();


