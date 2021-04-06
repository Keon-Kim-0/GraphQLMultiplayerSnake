const Parse = require('parse/node');

Parse.initialize("7SMXLNI6rLHJKq1SthFggmGrAUgpGWz45Om08vqE", "LDje3onIOfHlBAELBxVz4bsiiY9iviG3RFfoEPQF"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'


const MyFirstClass = Parse.Object.extend("MyFirstClass");
const myFirstClass = new MyFirstClass();

myFirstClass.set("name", "I'm able to save objects!");
myFirstClass.save()
    .then((object) => {
        // Success
        console.log('New object created with objectId: ' + object.id);
    }, (error) => {
        // Save fails
        console.log('Failed to create new object, with error code: ' + error.message);
    });






const { ApolloServer, gql } = require('apollo-server-express');

const users = require('../../data/users.json');
const typeDefs = gql`

type onlineUsers {
  users: [User]
}

type User {
    id: String!
    pw: String!
    nickName: String!
    level: Int!
    xp: Int!
    win: Int!
    loss: Int!
}

type Query {
    user(id: String!): User!
    allUsers: [User!]!
    totalUsers: Int!
}
type Mutation {
    updateUser(id: String!, pw: String, nickName: String,level: Int, xp: Int, win: Int, loss: Int ): User
    deleteUser(id: String!, pw: String, nickName: String,level: Int, xp: Int, win: Int, loss: Int ): User
}
`

const resolvers = {
    Query: {
        user: (_, args) => users.find(user => user.id === args.id),
        totalUsers: () => users.length,
        allUsers: () => users,
    },
    Mutation: {
        updateUser: (_, args) => {
            const user = users.find(users => users.id === args.id);
            if (!user) {
                console.log(`Couldn’t find user with id ${args.id}`);
            } else {
                for (i in user) {
                    console.log('args[i]: ', args[i])
                    console.log('user[i]: ', user[i])
                    if (args[i] === undefined) {
                        user[i] = user[i]
                    } else {
                        user[i] = args[i]
                    }
                }
            }
            return user;
        },
        deleteUser: (_, args) => {
            const user = users.find(users => users.id === args.id);
            if (!user) {
                console.log(`Couldn’t find user with id ${args.id}`);
            } else {
                user = null;
            }
            return;
        },
    }
}

//this is for dev mode, its graphiql for me to learn graphql as I go.
//dark mode is superior. But can be changed to any other themes.
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
