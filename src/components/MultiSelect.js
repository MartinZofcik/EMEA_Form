import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },

  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function MultipleSelect({ options, onChange, value }) {
  const classes = useStyles();

  return (
    <div>
      <FormControl
        //required
        fullWidth
        className={classes.root}
      >
        <InputLabel>Commodity Requested</InputLabel>
        <Select
          multiple
          fullWidth
          value={value}
          onChange={onChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
        >
          {options.map((option) => (
            <MenuItem
              key={option.label}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
