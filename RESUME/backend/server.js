import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import {connectDB} from './config/db.js';
import userRouter from './routes/userRouter.js'



const app = express();
const PORT = 4000;

app.use(cors())

//connect DB
connectDB(); 
//Middleware
app.use(express.json());

app.use('/api/auth', userRouter)

//Routes
app.get('/', (req, res) =>{
    res.send('API WORKING')
})

app.listen(PORT, () =>{
    console.log(`server started on http://localhost:${PORT}`)
})

