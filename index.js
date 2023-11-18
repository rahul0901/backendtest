// console.log("Hi")
import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import route from './Routes/index.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

// app.use('/', function(req,res){
//     res.send('hiiiii backend')
// })

app.use('/api/v1', route)

mongoose.connect(process.env.mongourl).then(console.log('database connected'))

app.listen(8000,()=>console.log('port running on 8000'))