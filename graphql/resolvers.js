import Student from "../models/Student.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";


export const resolvers = {

  Query : {
    getAllStudents: async() => {
      return await Student.find();
    },
    getSingleStudent: async(_, { id }) => {
      const data = Student.findById(id);
      return data;
    }

  },

  Mutation : {

    // create student 
    createStudent: async(_, {name, email, phone, age, location, gender}) => {
      // check email 
      const checkEmail = await Student.findOne({ email});

      if (checkEmail) {
        throw new Error(`Email Already Exists`)
      }

      // check email 
      const checkPhone = await Student.findOne({ phone });

      if (checkPhone) {
        throw new Error(`Phone Already Exists`)
      }

      const data = await Student.create({ 
         name,
         email, 
         phone, 
         location,   
         gender,
         age  
        });

       return data; 
    },


    // delete student 
    deleteStudent : async(_, {id }) => {
       const data = await Student.findByIdAndDelete(id);
       return data; 
    },

    // update student 
    updateStudent : async(_, {id, name, email, phone, age, location, gender}) => {
      const data = await Student.findByIdAndUpdate(id, { name, email, phone, age, location, gender }, {new : true})

      return data;
    },


    //register student 
    registerStudent : async(_, {name, email, password}) => {
      // hash password 
      const hashPass =  bcryptjs.hashSync(password, 10);
   
        const data = await Student.create({ 
           name,
           email, 
           password : hashPass,
          });
   
         return data; 
       },
      
     // login student 
     loginStudent : async(_, { email, password})  => {
        const loginUser = await Student.findOne({ email });
        if (!email || !password) {
          throw new Error("All fields Are Required"); 
        }; 

        if (!loginUser) {
           throw new Error("Student not found"); 
        };
        const PassCheck = bcryptjs.compareSync(password, loginUser.password)
      
        if (!PassCheck) {
          throw new Error("Password Not Match"); 
        }
        // create jwt token 
        const accessToken = jwt.sign(
          { email : loginUser.email }, 
          process.env.LOGIN_SECRET, 
          {
          expiresIn : "30d"
          }
      ); 
  
        return loginUser;
     } 
  },
}














