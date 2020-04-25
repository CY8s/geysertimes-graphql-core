const express = require('express')
const graphqlHTTP = require('express-graphql')
const { printSchema } = require('graphql')

const schema = require('./src/schema')
const resolvers = require('./src/resolvers')
const loaders = require('./src/loaders');

const app = express()

app.use(
  graphqlHTTP(req => {
    return {
      context: { loaders },
      schema,
      graphiql: true
    }
  })
)

module.exports = {
  schema,
  schemaString: printSchema(schema),
  resolvers,
  loaders,
  app
};