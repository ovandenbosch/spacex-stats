const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require('cors')
const schema = require("./schema");
const expressPlayground = require("graphql-playground-middleware-express").default

const app = express();

// Allow cross-origin
app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

/// Testqs

// Playground route
app.get("/playground", expressPlayground({ endpoint: "graphql"}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
