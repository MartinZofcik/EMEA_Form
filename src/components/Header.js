import { Typography } from '@material-ui/core';
import Button from './Button';

export const Header = ({ title, helpPage }) => {
  return (
    <header className="header">
      <Typography component="h3" variant="h4">
        {title}
      </Typography>
      <Button color="black" text="Instructions & Links" onClick={helpPage} />
    </header>
  );
};
