import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'absolute',
    //width: '100vw',
    height: '63px',
    backgroundColor: '#0065B1',
  },
  img: {
    position: 'absolute',
    left: '3%',
    top: '14px',
    width: '200px',
    height: '40px',
    marginLeft: '2em',
  },
}));

export const Banner = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <img
        className={styles.img}
        src="https://www.delltechnologies.com/content/dam/delltechnologies/images/ghf/dell-tech-logo.svg"
      ></img>
      <p
        style={{
          color: 'white',
          fontSize: 'larger',
          marginLeft: '16em',
          fontWeight: 'lighter',
          padding: '1em',
        }}
      >
        EMEA ProSupport to PON Handshake
      </p>
    </div>
  );
};
