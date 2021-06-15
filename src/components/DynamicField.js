import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const DynamicField = () => {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), commodityNum: '', quantity: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('InputFields', inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      //console.log(i);
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), commodityNum: '', quantity: '' },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  return (
    <div>
      {inputFields.map((inputField) => (
        <div key={inputField.id} style={{ marginTop: '10px' }}>
          <TextField
            name="commodityNum"
            label="Commodity Code"
            style={{ width: '53%' }}
            //variant="filled"
            value={inputField.commodityNum}
            onChange={(event) => handleChangeInput(inputField.id, event)}
          />
          <TextField
            name="quantity"
            label="Quantity"
            style={{ marginLeft: '10px', width: '17%' }}
            //variant="filled"
            value={inputField.quantity}
            onChange={(event) => handleChangeInput(inputField.id, event)}
          />
          <br />
          <IconButton
            disabled={inputFields.length === 1}
            onClick={() => handleRemoveFields(inputField.id)}
          >
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={handleAddFields}>
            <AddIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};
