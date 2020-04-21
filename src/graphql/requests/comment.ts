// Graphql
import gql from 'graphql-tag'


export const COMMENTS = gql`
    query Comments {
        comments {
            content
            author
            id
        }
    }
`

export const ADD_COMMENT = gql`
    mutation AddComment(
        $input: AddCommentInput!
    ) {
        addComment(input: $input) {
            comment {
                id
            }
        }
    }
`

export const COMMENT_ADDED = gql`
    subscription onCommentAdded($author: String!) {
        commentAdded(author: $author) {
            content
            author
            id
        }
    }
`