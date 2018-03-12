const express = require('express');
const expressGaphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGaphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('listening...');
});
