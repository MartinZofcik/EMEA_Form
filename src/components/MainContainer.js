import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    boxShadow: '0 14px 28px rgba(0,0,0,0.07), 0 10px 10px rgba(0,0,0,0.001)',
    borderRadius: '10px',
    padding: '40px',
  },
}));

export const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container
      className={styles.root}
      component="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};
