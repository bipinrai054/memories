import React from 'react';

// material ui
import { Grow, Grid, Container } from '@material-ui/core';

// components
import Posts from '../posts/Posts';
import Form from '../form/Form';

// dispatch
import { useDispatch } from 'react-redux';

// actions
import { getPosts } from '../../actions/posts';

export default function () {
  const [currentId, setCurrentId] = React.useState(null);
  // const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          // className={classes.mainContainer}
          container
          justifyContent='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
