
import mongoose from "mongoose";

// create student schema 
const studentSchema = mongoose.Schema({

  name : {
     type : String,
     required : true,
     trim : true
  },
  email : {
     type : String,
     required : true,
     trim : true
  },
  password : {
     type : String,
     required : true,
     trim : true
  },
  phone : {
     type : String,
     trim : true
  },
  age : {
     type : Number,
  },
  location : {
  type : String,
  trim : true
  },
  status : {
   type : Boolean,
   default : true
  },
  trash : {
   type : Boolean,
   default : false,
  },
  gender : {
  type : String,
  trim : true,
  enum : ["Male", "Female", "Other"]
  },


},

{
  timestamps : true, 
}



)




// export default
export default mongoose.model("Student", studentSchema)















