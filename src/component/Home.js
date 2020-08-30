import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <div>
          This is the home page.
        </div>
        <Link to="blog">Go to blog</Link>
      </>
    );
  }
}

export default Home;