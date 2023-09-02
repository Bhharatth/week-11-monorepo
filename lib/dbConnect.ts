// import mongoose from "mongoose";
// let alreadyDone = false;


// export async function ensureDbConnected(){
//     if(alreadyDone){
//         return
//     }
//     alreadyDone = true;
//     await mongoose.connect("mongodb://localhost:27017/100x-course2");
// }


import mongoose from 'mongoose';

const connection = {
    isConnected: false
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  let db = await mongoose.connect('mongodb://localhost:27017/100x-course2');

  connection.isConnected = true;
}

export default dbConnect;