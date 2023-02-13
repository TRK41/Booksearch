import { gql } from "graohql-tag";

export const GET_ME = gql`
{
  me{
    _id
    username
    email
    bookCount
    savedBooks{
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;