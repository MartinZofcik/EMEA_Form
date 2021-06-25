import { Typography } from '@material-ui/core';
import Button from './Button';

export const Header = ({ title }) => {
  const showHelp = () => {
    window.open('./help.html', '_blank');
  };

  return (
    <header className="header">
      <Typography component="h3" variant="h4">
        {title}
      </Typography>
      <Button color="black" text="Help" onClick={showHelp} />
    </header>
  );
};
