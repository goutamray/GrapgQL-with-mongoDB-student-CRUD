
 export const typeDefs = `#graphql
 
 
  type Student{
    id: ID
    name: String!
    email: String!
    password: String!
    age: Int
    phone: String
    location: String
    gender: String
    status: Boolean
    trash: Boolean
    createdAt: String
    updatedAt: String

  }  
 
  type Query{
    getAllStudents: [Student]
    getSingleStudent(id:ID!) : Student
  }

  type Mutation{
    createStudent(name: String!, age: Int!, email: String!, phone: String!, location: String!, gender: String!) : Student

    deleteStudent(id:ID!) : Student

    updateStudent(id:ID!, name: String!, age: Int!, email: String!, phone: String!, location: String!, gender: String!) : Student


    registerStudent(name: String!, email: String!, password: String!) : Student 

    loginStudent(email: String!, password: String!): Student
  }
  
 `

















