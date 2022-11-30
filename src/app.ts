import express from 'express'
import { connectDB } from './Config/db';
import routerUser from './router/Router'

const app=express();
connectDB()

app.use(express.json())

//middlware __________________________________________________
app.use('/api/v1/user', routerUser)




//_____________________________________________________
 const PORT =process.env.PORT || 5005
 app.listen(PORT ,()=>{
    console.log("The server that has port "+PORT+" is work ")
 })
   