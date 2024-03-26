import colors from "colors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import mongoDBConnection from "./config/mongoDB.js";

// env config
dotenv.config();

// port config 
const PORT= process.env.PORT || 9090; 


// init apollo server 
const server = new ApolloServer({
  typeDefs,
  resolvers
});


// listen server 
const serverListen = async() => {
  await startStandaloneServer(server, {
    listen : {
      port : PORT
    }
  })
  mongoDBConnection();
  console.log(` Server is running on port ${PORT} `.bgGreen.black);
}

serverListen(); 




