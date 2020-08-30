import React from 'react'
import BlogPreviewItem from './BlogPreviewItem'
import ContentfulUtil from '../utils/ContentfulUtil'

class Blog extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    ContentfulUtil.fetchAllBlogPosts().then(this.setPosts);
  }

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <div>
        <p>This is the Blog Page</p>
        {
          this.state.posts.map(({fields}, i) =>
              <BlogPreviewItem key={i} {...fields} />
        )}
      </div>
    )
  }
}

export default Blog
