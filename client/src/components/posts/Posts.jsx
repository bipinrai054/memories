import React from 'react';

// material ui
import { Grid, CircularProgress } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// components
import Post from './post/Post';

// makeStyles
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map((post) => {
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
