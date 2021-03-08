const syong = {
  name: "syongg",
  age: 30,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => syong,
  },
};

export default resolvers;
