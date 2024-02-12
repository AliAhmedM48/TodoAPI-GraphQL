require("dotenv").config();
const express = require('express');
// !---------------------------------------------------
const { ApolloServer, gql } = require('apollo-server-express');


const app = express();
const port = process.env.PORT;
const connectDB = require("./db");

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');


// const { graphqlHTTP } = require('express-graphql');
// app.use('/graphql',
//     graphqlHTTP({
//         schema: qraphqlSchema,
//         rootValue: qraphqlResolver,
//         graphiql: true
//     }))


// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}

//* Listening to server and connecting to db
startServer().then(() => {
    app.listen(port, "localhost", () => {
        console.log(`Example app listening on port ${port}`);
    });
});