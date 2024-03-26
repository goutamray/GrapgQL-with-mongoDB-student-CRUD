
import mongoose from "mongoose";

// create mongodb connection 
 const mongoDBConnection = async(req, res) => {
  try {
      const connection = await mongoose.connect(process.env.MONGO_URL);
      console.log(` MongoDB Connection Successfull`.bgCyan.black);
  } catch (error) {
     console.log(`MongoDB Connection Failed`.bgRed.black);
  }
 }

// export default 
export default mongoDBConnection; 

















