import { gql } from "@pollo/client";

export const LOGIN_USER = gql`
mutation login ($email: String!, $password: String!) {
    login (email: $email, password: $password){
        token
        user {
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
}
`;
export const ADD_USER = gql`
mutation addUser ($username:String! $email: String!, $password: String!) {
    addUser (username: $username email: $email, password: $password){
        token
        user {
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
}
`;
export const ADD_BOOK = gql`
mutation addBook ($bookId:String! $image) {
    addBook (bookId: $bookId){
        token
        user {
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
}
`;
export const REMOVE_BOOK = gql`
mutation removeBook ($bookId:String!) {
    saveBook (bookId: $bookId){
        token
        user {
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
}
`;