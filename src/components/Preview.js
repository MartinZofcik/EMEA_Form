import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 'bold',
  },
}));

export const Preview = ({ values }) => {
  const styles = useStyles();

  return (
    <div className="preview">
      <label className={styles.root}>
        Please educate customer about online quote from PON in 24 hrs. (M-F)
      </label>
      <br />

      <label className={styles.root}>Type of Request:&nbsp;</label>
      <label>{values.repairUpgrade}</label>
      <br />

      <label className={styles.root}>Issue:&nbsp;</label>
      <label>{values.issue}</label>
      <br />

      <label className={styles.root}>Diagnostics Status:&nbsp;</label>
      <label>{values.diagnosticStatus}</label>
      <br />

      <label className={styles.root}>Commodity Requested:&nbsp;</label>
      <label>{values.commodityRequested.join(', ')}</label>
      <label>
        {Object.values(values.spareKits)?.map(
          ({ value, quantity }) => `${quantity}x ${value}, `
        )}
      </label>
      <label>
        {Object.values(values.partsToUpgrade)?.map(({ value }) => `, ${value}`)}
      </label>
      <br />

      <label className={styles.root}>Dispatch Type:&nbsp;</label>
      <label>{values.dispatchType}</label>
      <br />

      <label className={styles.root}>Payment Method:&nbsp;</label>
      <label>{values.paymentMethod}</label>
      <br />
      <br />

      <label className={styles.root}>Service Tag:&nbsp;</label>
      <label>{values.serviceTag}</label>
      <br />
      <br />

      <label className={styles.root}>Customer Name:&nbsp;</label>
      <label>{values.name}</label>
      <br />

      <label className={styles.root}>Customer Phone:&nbsp;</label>
      <label>{values.phone}</label>
      <label className={styles.root}>&nbsp;Ext:&nbsp;</label>
      <label>{values.ext}</label>
      <br />

      <label className={styles.root}>Customer Email:&nbsp;</label>
      <label>{values.customerEmail}</label>
      <br />

      <label className={styles.root}>Best Time To Reach:&nbsp;</label>
      <label>{values.bestTime}</label>
      <br />
      <br />

      <label className={styles.root}>SHIPPING ADDRESS:&nbsp;</label>
      <br />

      <label className={styles.root}>Shipping Line1:&nbsp;</label>
      <label>{values.shippingLine1}</label>
      <br />

      <label className={styles.root}>Shipping Line2:&nbsp;</label>
      <label>{values.shippingLine2}</label>
      <br />

      <label className={styles.root}>Shipping City:&nbsp;</label>
      <label>{values.shippingCity}</label>
      <br />

      <label className={styles.root}>Shipping State:&nbsp;</label>
      <label>{values.shippingState}</label>
      <br />

      <label className={styles.root}>Shipping ZIP:&nbsp;</label>
      <label>{values.shippingZIP}</label>
      <br />

      <label className={styles.root}>Shipping Country:&nbsp;</label>
      <label>{values.shippingCountry}</label>
      <br />
      <br />

      <label className={styles.root}>BILLING ADDRESS:&nbsp;</label>
      <br />

      <label className={styles.root}>Billing Line1:&nbsp;</label>
      <label>{values.billingLine1}</label>
      <br />

      <label className={styles.root}>Billing Line2:&nbsp;</label>
      <label>{values.billingLine2}</label>
      <br />

      <label className={styles.root}>Billing City:&nbsp;</label>
      <label>{values.billingCity}</label>
      <br />

      <label className={styles.root}>Billing State:&nbsp;</label>
      <label>{values.billingState}</label>
      <br />

      <label className={styles.root}>Billing ZIP:&nbsp;</label>
      <label>{values.billingZIP}</label>
      <br />

      <label className={styles.root}>Billing Country:&nbsp;</label>
      <label>{values.billingCountry}</label>
      <br />
    </div>
  );
};
