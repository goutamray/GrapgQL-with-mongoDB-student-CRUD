
import { gql } from "@apollo/client";

export const GET_ALL_STUDENTS  = gql`
      query studentQuery {
        getAllStudents {
          id,
          name,
          email,
          age,
          location,
          phone,
          gender

        }
}`












