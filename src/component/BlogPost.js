import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import * as Markdown from 'react-markdown'
import ContentfulUtil from '../utils/ContentfulUtil'

class BlogPost extends React.Component {
  state = {
    date: "",
    title: "",
    icon: "",
    content: ""
  };

  setPost = post => {
    if (post && post.items.length) {
      this.setState({
        date: post.items[0].fields.date,
        title: post.items[0].fields.title,
        icon: post.items[0].fields.icon,
        content: post.items[0].fields.content
      });
    }
  };

  componentDidMount() {
    if (this.isBlogPostInProps()) {
      this.setState({
        date: this.props.location.date,
        title: this.props.location.title,
        icon: this.props.location.icon,
        content: this.props.location.content
      });
    } else {
      ContentfulUtil.fetchPostByPathName(this.props.match.params.blogPost)
          .then((response) => this.setPost(response));
    }
  };

  isBlogPostInProps = () => 
      this.props &&
      this.props.location &&
      this.props.location.date &&
      this.props.location.title &&
      this.props.location.icon &&
      this.props.location.content;

  isBlogPostLoaded = () => 
      this.state &&
      this.state.date &&
      this.state.title &&
      this.state.icon &&
      this.state.content;

  renderBlogPost = () => (
    <>
      <Link to="/blog">Back to Blog</Link>
      <p>
        {moment(this.state.date).calendar(null, {
          sameDay: '[Today]',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM Do YYYY'
        })}
      </p>
      <img src={this.state.icon} style={{ maxHeight: 200 }} />
      <h1>{this.state.title}</h1>
      <Markdown source={this.state.content} />
    </>
  );

  render = () => {
    return this.isBlogPostLoaded() ? this.renderBlogPost() : ('Loading...');
  }
}

export default BlogPost
