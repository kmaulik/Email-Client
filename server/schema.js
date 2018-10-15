// var {
//     GraphQLSchema,
//     GraphQLObjectType,
//     GraphQLID,
//     GraphQLString,
//     GraphQLInt,
//     GraphQLBoolean,
//     GraphQLList,
//     GraphQLNonNull
// } = require('graphql');

// var Db = require('./db');

// var Sectors = new GraphQLObjectType({
//     name: 'sectors',
//     description: 'list of all the sectors',
//     fields: () => {
//         return {
//             id: {
//                 type: GraphQLInt,
//                 resolve(sectors) {
//                     return sectors.id;
//                 }
//             },
//             email: {
//                 type: GraphQLString,
//                 resolve(sectors) {
//                     return sectors.email;
//                 }
//             }
//         };
//     }
// });

// var Query = new GraphQLObjectType({
//     name: 'Query',
//     description: 'Root query object',
//     fields: () => {
//         return {
//             sectors: {
//                 type: new GraphQLList(Sectors),
//                 args: {
//                     id: {
//                         type: GraphQLInt
//                     },
//                     email: {
//                         type: GraphQLString
//                     }
//                 },
//                 resolve(root, args) {
//                     return Db.models.sectors.findAll({ where: args });
//                 }
//             }
//         };
//     }
// });

// var Schema = new GraphQLSchema({ query: Query });
// // exports.default = Schema;
// module.exports = Schema


const { gql } = require('apollo-server');

const typeDefs = gql
`
    type Mail {
       id: Int       
       email: String
       notes:String
       password: String
       is_active: String
   }

   type Message {
       message: String
   }

   type Query{
        mails(is_active:String): [Mail],
   }

   type Mutation {
       addMail (
           email: String!,
           notes: String!,   
           password: String!,
           is_active: String,
       ): Mail,      
       login (
           email: String!,
           password: String!,
       ): Message,
       updateMail (
           id: Int!,           
           is_active: String,
       ): Mail
   }
   schema {
       query: Query
       mutation: Mutation
   }
`;

module.exports = typeDefs;