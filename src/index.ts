import 'dotenv/config';
import mongoose from "mongoose";
import express from "express";
import { User } from './types/user';
// import { Course } from "./models/courseShema";
import { Users} from "./models/user";
import * as dotenv from 'dotenv';
import {DocRouts}  from './application/routes/doc.routs'
import {UserRouts} from './application/routes/users.routs'



dotenv.config();


const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.get('/',(req,res)=>{
  res.status(200).send("this is backend routes")
})

DocRouts(app);
UserRouts(app);


// app.post('/insert', async (req,res)=>{
//   const user: User = req.body;

//   console.log(req.body)
//   if (!req.body || !req.body.fullName) {
//     return res.status(400).json({ message: 'Invalid request body.' });
//   }
//   const existingUser = await Users.findOne({ fullName: user.fullName });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//   const newUser = new Users({
//     ...user,
//   });
//   try {
//     const result = await newUser.save();
//     res.status(200).json({ message: 'Data successfully inserted.', result });
//   } catch (error) {
//     res.status(500).json({ message: 'Error inserting data.', error: error });
//   }
  
// })


// app.put('/update/:id', async (req,res)=>{
//   const user: User = req.body;

//   if (!req.body || !req.body.fullName) {
//     return res.status(400).json({ message: 'Invalid request body.' });
//   }
//   const existingUser = await Users.findOne({ id: user._id });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//   const newUser = new Users({
//     ...user,
//   });
//   try {
//     const result = await newUser.save();
//     res.status(200).json({ message: 'Data successfully inserted.', result });
//   } catch (error) {
//     res.status(500).json({ message: 'Error inserting data.', error: error });
//   }
  
// })

// app.get('/get-users', async (req,res)=>{
//   try{
//     // const usersList= await Users.findMany();
//     const usersList = await Users.find();
//     if(!usersList || usersList.length==0) res.status(400).json({message: 'No usrs find in databse. '})

//     res.status(200).json(usersList);
//   }catch(err){
//     res.status(500).json({error: err});
//   }
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL || "", { dbName: "users"});