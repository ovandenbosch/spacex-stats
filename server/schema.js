const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
} = require("graphql");

const axios = require("axios");

// Launch type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    id: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: MainRocketType },
  }),
});

// Rocket Type
const MainRocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  }),
});

// Seperate Rocket type (for rocket api)
const SeperateRocketType = new GraphQLObjectType({
  name: "Rockets",
  fields: () => ({
    name: { type: GraphQLString },
    id: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacex.land/rest/launches-past?")
          .then((res) => res.data);
      },
    },
    launch: {
      type: LaunchType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacex.land/rest/launch/${args.id}`)
          .then((res) => res.data);
      },
    },
    rockets: {
      type: new GraphQLList(SeperateRocketType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacex.land/rest/rockets")
          .then((res) => res.data);
      },
    },
    rocket: {
      type: SeperateRocketType,
      args: {
        id: { type: GraphQLString },  // It is graphql string because id is falcon9 for example
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacex.land/rest/rocket/${args.id}`)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});