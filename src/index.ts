import 'dotenv/config';
import mongoose from "mongoose";
import express from "express";
import { User } from './types/user';
// import { Course } from "./models/courseShema";
import cors from 'cors'; // Import the cors middleware
import { Users} from "./models/user";
import * as dotenv from 'dotenv';
import {DocRouts}  from './application/routes/doc.routs'
import {UserRouts} from './application/routes/users.routs'



dotenv.config();


const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.static('public'));
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))
app.get('/',(req,res)=>{
  
  res.status(200).send("this is backend routes and health checkup")
})

DocRouts(app);
UserRouts(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL || "", { dbName: "users"});
