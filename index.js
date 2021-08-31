// const { ApolloServer, gql } = require("apollo-server");

// Toda request é POST
// Toda request bate no MESMO endpoint ( /graphql )

// Query  -> Obter informações ( GET )
// Scalar Types -> String, Int, Boolean, Float e ID


const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');



const server = new ApolloServer({ typeDefs, resolvers });



// const server = new ApolloServer({ typeDefs, resolvers });
 server.listen().then(({ url }) => console.log(`Server started at ${url}`));

//server.listen().then(() => {
 //   console.log(`
//      Server is running!
 //     Listening on port 4000
 //     Explore at https://studio.apollographql.com/sandbox
 //   `);
//  });


