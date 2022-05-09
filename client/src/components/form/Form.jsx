import React from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';

// material  ui
import { TextField, Button, Typography, Paper } from '@material-ui/core';

// filebase 64
import FileBase from 'react-file-base64';

// makeStyles
import useStyles from './styles';

// actions
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null,
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const [postData, setPostData] = React.useState({
    // creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  React.useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      // dispatch(updatePost(currentId, postData));
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
    } else {
      // dispatch(createPost(postData));
      dispatch(createPost({...postData, name: user?.result?.name}));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      // creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }


  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          {currentId ? 'Editing' : 'Creating'} a Memory
        </Typography>
        {/* <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        /> */}
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          size='large'
          fullWidth
          className={classes.buttonSubmit}
        >
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={clear}
          size='small'
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
