import {gql} from "@apollo/client";

export const ALL_AUTHORS = gql`
  query {
    allAuthors  {
      name,
      born,
      bookCount 
      id
    }
  }
`

export const ALL_BOOKS = gql`
  query {
    allBooks  {
      title,
      published,
      author 
      id
    }
  }
`

export const CREATE_BOOK = gql`
mutation createBook($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {
  addBook(
    title: $title,
    published: $published,
    author: $author,
    genres: $genres
  ) {
    title
    published
    author
    genres
  }
}
`

export const UPDATE_AUTHOR = gql`
mutation updateAuthor($name: String!, $born: Int!) {
  editAuthor(
    name: $name,
    born: $born
  ) {
    name
    born
  }
}
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`