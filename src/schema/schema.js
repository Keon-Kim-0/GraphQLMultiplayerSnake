const { makeExecutableSchema, schemaDefSymbol } = require('graphql-tools');
const { ApolloServer, gql } = require('apollo-server-express');

const users = require('../../data/users.json');
const typeDefs = gql`
  type Knowledge {
    language: String
    frameworks: [String]
}

type User {
    id: ID!
    name: String!
    full_name: String
    age: Int
    city: String
    tag: String
    url: String
    knowledge: [Knowledge]
}

type Query {
    user(id: Int!): User!
    allUsers: [User!]!
    totalUsers: Int!
}
`;
const resolvers = {
    Query: {
        user: (_, args) => users.find(user => user.id === args.id),
        totalUsers: () => users.length,
        allUsers: () => users,
    }
}

module.exports = schema = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: '/graphql',
        settings: {
            'editor.theme': 'dark'
        }
    }
});
