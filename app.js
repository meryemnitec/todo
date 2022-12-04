const express= require('express');
const mongoose= require('mongoose');
require(`dotenv/config`);


const PORT=process.env.PORT || 3000;
const app=express();

app.use(express.json());

const todoRoutes=require("./routes/todo");

app.use("/",todoRoutes);

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
},()=>console.log('Mongo DB Connected'));

app.listen(3000,()=>

console.log(`Listening Port On ${PORT}`));



