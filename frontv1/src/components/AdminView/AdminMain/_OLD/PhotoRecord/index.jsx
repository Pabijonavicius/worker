import React from 'react';
import FlexColumn from '../../../../shared/FlexColumn';
import './styles.css';

function renderComments(comments) {
  return comments.map((comment, index) => (
    <div key={`comment-${index}`} className="comment">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',

          padding: '.5rem 2rem .5rem 2rem'
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: '1.5rem'
            }}
          >
            @{comment.username}
          </div>
          <span>&nbsp;</span>
          <span style={{ fontSize: '1.6rem' }}>{comment.comment}</span>
        </div>
      </div>
    </div>
  ));
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(`ZJBS!`);
}

const PhotoRecord = props => {
  const { username, date, image, country, city, comments } = props.record;
  return (
    <div style={styles.mainContainer} class="photo-record">
      <FlexColumn>
        <FlexColumn style={{ padding: '1.5rem' }}>
          <div style={styles.flexRow}>
            <div style={styles.username}>@{username}</div>
            <span style={styles.date}>{date}</span>
          </div>
          <div style={styles.location}>
            {country} , {city}
          </div>
        </FlexColumn>

        <hr />
        <div style={styles.imageContainer}>
          <img style={styles.image} src={image} />
        </div>
        <div className="photo-comments">{renderComments(comments)}</div>
        <div
          style={{
            padding: '1.5rem'
          }}
          className="add-comment"
        ></div>
        <form class="form-submit" onSubmit={handleSubmit}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <textarea
              className="comment-box"
              placeholder="Add a comment..."
              style={{
                width: '90%',
                resize: 'none',
                height: 50,
                border: '1px solid gainsboro',
                borderRadius: '1rem'
              }}
            ></textarea>
          </div>

          <button
            style={{
              margin: '1rem',
              padding: '1.5rem',

              border: '1px solid gainsboro',
              borderRadius: '1rem 1rem'
            }}
            type="submit"
          >
            Add Comment
          </button>
        </form>
      </FlexColumn>
    </div>
  );
};

const styles = {
  mainContainer: {
    marginBottom: '1.5rem',
    border: '1px solid gainsboro'
  },
  username: {
    fontWeight: 550,
    fontSize: '1.4rem'
  },
  date: {
    fontSize: '1.1rem'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageContainer: {
    width: 'auto',
    height: 'auto'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  location: {
    fontSize: '1.3rem',
    alignSelf: 'flex-start',
    paddingLeft: '1rem'
  }
};
export default PhotoRecord;
