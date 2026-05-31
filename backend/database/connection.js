import mongoose from 'mongoose';

export const mongoDBconnect = () =>{
    mongoose.connect(process.env.MONGO_URI,
        {dbName: "RESTAURANT",}
    ).then(()=>{
        console.log("connected to database success");
    }).catch((err)=>{
        console.log("error connecting to database");
    });
}
