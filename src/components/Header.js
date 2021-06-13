import { Typography } from '@material-ui/core';
import Button from './Button';

export const Header = ({ title }) => {
  const showHelp = () => {
    window.open(
      'http://ausdwoopweb01/Intake_EMEA/EMEA_OOP_Handshake_Form.html',
      '_blank'
    );
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
