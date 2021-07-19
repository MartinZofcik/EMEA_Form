import { Typography } from '@material-ui/core';
import Button from './Button';

export const Header = ({ title }) => {
  const showHelp = () => {
    window.open(
      'http://ausdwoopweb01/HandshakeTemplate_Help/EMEA_help.html',
      '_blank'
    );
  };

  return (
    <header className="header">
      <Typography component="h3" variant="h4">
        {title}
      </Typography>
      <Button color="black" text="Instructions & Links" onClick={showHelp} />
    </header>
  );
};
