
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

// export const ADD_REVIEW = gql`
//   mutation addReview($reviewText: String!) {
//     addReview(reviewText: $reviewText) {
//       _id
//       reviewText
//       createdAt
//       username
//     }
//   }
// `;


// export const REMOVE_REVIEW = gql`
//   mutation removeReview($id: ID!) {
//     removeReview(id: $id) {
//       _id
//       username
//     }
//   }
// `;

export const UPLOAD_FILE = gql`
mutation($file: Upload!) {
    uploadFile(file: $file)
}
`;