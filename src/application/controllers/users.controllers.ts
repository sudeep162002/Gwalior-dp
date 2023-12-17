import { Request, Response } from 'express';
import { User } from '../../types/user';
import { Users } from '../../models/user';

class UsersHandler  {
  async getUsers(req: Request, res: Response): Promise<void> {
    try{
        // const usersList= await Users.findMany();
        const usersList = await Users.find();
        if(!usersList || usersList.length==0) res.status(400).json({message: 'No usrs find in databse. '})
    
        res.status(200).json(usersList);
      }catch(err){
        res.status(500).json({error: err});
      }
  }



  async getUsersById(req: Request, res: Response): Promise<void> {
    try{
        // const usersList= await Users.findMany();
        const userId: any = req.params.id;


        console.log(userId)
        // const usersList = await Users.find();
        const familyUsers = await Users.find({ userId: userId });


        if(!familyUsers || familyUsers.length==0) res.status(400).json({message: 'No users find in databse. '})
    
        res.status(200).json(familyUsers);
      }catch(err){
        res.status(500).json({error: err});
      }
  }

  

  async insertUser(req: Request, res: Response): Promise<void> {

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


  async updateUser(req: Request, res: Response): Promise<void> {
    const userId: any = req.params.id;
    const fullName: any=req.body.fullName;
    const newField: any = req.body;

    try {
      // console.log(fullName)
      if (fullName === undefined || fullName === null) {
        return res.status(400).json({ message: "Adding fullName is mandatory" });

      }
      const user = await Users.findOne({ userId: userId, fullName:fullName });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        Object.keys(newField).forEach(key => {
            user[key] = newField[key];
        });

        await user.save(); 

        res.status(200).json({ message: 'Data successfully updated.' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating data.', error: error });
    }
  }
  


  
}

export default new UsersHandler();


