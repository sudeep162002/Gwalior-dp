import 'dotenv/config';
import mongoose from "mongoose";
import express from "express";
import { User } from './types/user';
// import { Course } from "./models/courseShema";
import { Users} from "./models/user";
import * as dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
  res.status(200).send("this is backend routes")
})


app.post('/insert', async (req,res)=>{
  const user: User = req.body;

  console.log(req.body)
  if (!req.body || !req.body.fullName) {
    return res.status(400).json({ message: 'Invalid request body.' });
  }
  const existingUser = await Users.findOne({ fullName: user.fullName });
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
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL || "", { dbName: "users"});

