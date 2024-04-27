
import { gql } from "@apollo/client";

// create student 
export const CREATE_STUDENT = gql`
      mutation createStudent(
        $name: String!,
        $age: Int!,
        $email: String!,
        $phone: String!, 
        $location: String!, 
        $gender: String!,
        ){
      createStudent(
      name: $name, 
      age: $age, 
      email: $email,
      phone: $phone, 
      location: $location, 
      gender: $gender) {
      id,
      name,
      email,
      }
}`


// delete student 
export const DELETE_STUDENT = gql`
  mutation deleteStudentMutation ($deleteStudentId: ID!){
    deleteStudent(id: $deleteStudentId) {
       id,
       name,
       age,
       email
  }
}`








