import Student from "../models/Student.js"

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

    deleteStudent : async(_, {id }) => {
       const data = await Student.findByIdAndDelete(id);
       return data; 
    },

    updateStudent : async(_, {id, name, email, phone, age, location, gender}) => {
      const data = await Student.findByIdAndUpdate(id, { name, email, phone, age, location, gender }, {new : true})

      return data;
    }
 

  }
}














