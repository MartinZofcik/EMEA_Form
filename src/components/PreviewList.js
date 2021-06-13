import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

export const PreviewList = ({ values }) => {
  return (
    <List>
      <ListItem divider>
        <ListItemText primary="Issue" secondary={values.issue} />
      </ListItem>

      <ListItem divider>
        <ListItemText
          primary="Diagnostic Status"
          secondary={values.diagnosticStatus}
        />
      </ListItem>

      <ListItem divider>
        <ListItemText primary="Service Tag" secondary={values.serviceTag} />
      </ListItem>

      <ListItem divider>
        <ListItemText primary="Dispatch Type" secondary={values.dispatchType} />
      </ListItem>

      <ListItem divider>
        <ListItemText
          primary="Commodity requested"
          secondary={values.commodityRequested}
        />
      </ListItem>

      <ListItem divider>
        <ListItemText
          primary="Payment Method"
          secondary={values.paymentMethod}
        />
      </ListItem>

      <ListItem divider>
        <ListItemText
          primary="Submitter Email"
          secondary={values.submitterEmail}
        />
      </ListItem>
    </List>
  );
};
