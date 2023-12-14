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
    const updatedUser: User = req.body;
  
    if (!updatedUser || !updatedUser._id) {
      return res.status(400).json({ message: 'Invalid request body.' });
    }
  
    try {
      // Use findOneAndUpdate to update the existing user
      const updatedUserResult = await Users.findOneAndUpdate(
        { _id: updatedUser._id },
        updatedUser,
        { new: true } // Return the updated document
      );
  
      if (!updatedUserResult) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      res.status(200).json({ message: 'Data successfully updated.', result: updatedUserResult });
    } catch (error) {
      res.status(500).json({ message: 'Error updating data.', error: error });
    }
  }
  
  

  
}

export default new DocumentHandler();


