import Link from 'next/link'

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default () =>
  <div>
    {posts.map(id =>
      <div key={id} className="post">
        <Link href={`/post?id=${id}`} as={`/blog/${id}`}>
          <a>
            Go to post {id}
          </a>
        </Link>
      </div>
    )}
    <style jsx>{`
      .post {
        border: 1px solid black;
        padding: 1em 2em;
        margin: .5em 0;
      }
    `}</style>
  </div>
