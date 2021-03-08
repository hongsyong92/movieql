import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({});

server.start(() => console.log("Graphql 서버 동작 중"));
