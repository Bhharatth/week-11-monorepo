import mongoose from "mongoose";
let alreadyDone = true;


export async function ensureDbConnected(){
    if(alreadyDone){
        return
    }
    alreadyDone = true;
    await mongoose.connect("mongodb://localhost:27017/100x-dev-course");
}