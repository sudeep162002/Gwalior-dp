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
app.use(cors());
app.get('/',(req,res)=>{
  
  res.status(200).send("this is backend routes")
})

DocRouts(app);
UserRouts(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL || "", { dbName: "users"});