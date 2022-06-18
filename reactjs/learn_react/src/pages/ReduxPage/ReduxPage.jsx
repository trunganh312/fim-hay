import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReduxList from '../../components/ReduxList/ReduxList';
import casual from 'casual-browserify';
import { addHobby, setActiveHobby } from './reduxListDemo';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';

const useStyles = makeStyles()(() => {
  return {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black !important',
      height: 32,
      padding: '0 30px',
    },
  };
});

function ReduxPage() {
  const { classes } = useStyles();
  const hobbyList = useSelector((state) => state.hobby.list);
  const actionId = useSelector((state) => state.hobby.actionId);

  const dispatch = useDispatch();

  const handleClick = () => {
    const objValue = {
      id: casual.uuid,
      title: casual.title,
    };

    const action = addHobby(objValue);
    dispatch(action);
  };

  const handleClickActive = (id) => {
    const action = setActiveHobby(id);
    dispatch(action);
  };

  return (
    <div>
      <h1>Redux page</h1>
      <Button className={classes.root} onClick={handleClick}>
        Add list
      </Button>
      <ReduxList hobbyList={hobbyList} onClickActive={handleClickActive} actionId={actionId} />
    </div>
  );
}

export default ReduxPage;
