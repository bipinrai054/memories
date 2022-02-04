import React from 'react';

// material ui
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// image
import memories from './images/memories.png';

// compoenents
import Posts from './components/posts/Posts';
import Form from './components/form/Form';

// makeStyles
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
            <Form />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
