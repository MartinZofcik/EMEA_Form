import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0, 0),
  },
}));

export const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Button
      type="submit"
      className={styles.root}
      fullWidth
      variant="contained"
      color={props.color}
      {...props}
    >
      {children}
    </Button>
  );
};
