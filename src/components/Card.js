import React, { Component } from 'react';

export class Card extends Component {
  render() {
    let { title, description, images, newsurl, sourcename, author, publishedAt } = this.props;
    return (
      <div>

        <div className="card"> {/* Note the double curly braces */}
          <div>
            <span className="badge rounded-pill bg-danger" style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>{sourcename}</span>
        </div>

        <img src={images} className="card-img-top" alt="IMAGES NOT AVAILABLE" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p>Author-{author}</p>
          <p>Time-{new Date(publishedAt).toGMTString()}</p>
          {/* <p>Source-{sourcename}</p> */}


          <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
      </div >
    );
  }
}

export default Card;
