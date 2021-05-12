const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

/// Testqs

const PORT = process.env.PORT || 6746;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
