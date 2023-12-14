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


  
}

export default new UsersHandler();


