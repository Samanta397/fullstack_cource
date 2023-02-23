const typeDefs = `
   type Book {
    title: String!
    published: Int!
    author: String!
    id: ID!
    genres: [String!]!
  }
  
  type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int!
  }
  
  type User {
    username: String!
    id: ID!
  }
  
  type Token {
    value: String!
  }
  
  type Subscription {
    bookAdded: Book!
  }    
  
  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
    me: User
  }
  
  type Mutation {
    addBook (
      title: String!
      published: Int!
      author: String!
      genres: [String!]!
    ): Book
    editAuthor(
      name: String!
      born: Int!
    ): Author
    
    createUser(
      username: String!
    ): User
    login(
      username: String!
      password: String!
   ): Token
  }
`

module.exports = typeDefs