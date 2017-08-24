import { Component } from 'react'
import Link from 'next/link'

export default class PostPage extends Component {
  static getInitialProps({ query }) {
    return { id: query.id }
  }

  render() {
    return (
      <div>
        <h1>
          Post: {this.props.id}
        </h1>
        <Link href="/" as="/blog">
          <a>Go back to the list of posts</a>
        </Link>
        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </div>
    )
  }
}
