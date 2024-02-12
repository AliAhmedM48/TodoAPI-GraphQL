require("dotenv").config();
const express = require('express');

const app = express();
const port = process.env.PORT;
const connectDB = require("./db");

const { graphqlHTTP } = require('express-graphql');
const qraphqlSchema = require('./graphql/schema');
const qraphqlResolver = require('./graphql/resolvers');

app.use('/graphql',
    graphqlHTTP({
        schema: qraphqlSchema,
        rootValue: qraphqlResolver,
        graphiql: true
    }))

//* listening to server and connecting to db
connectDB();
app.listen(port, "localhost", () => {
    console.log(`Example app listening on port ${port}`)
})