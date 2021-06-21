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
      <br />

      <label className={styles.root}>Issue:&nbsp;</label>
      <label>{values.issue}</label>
      <br />

      <label className={styles.root}>Diagnostics Status:&nbsp;</label>
      <label>{values.diagnosticStatus}</label>
      <br />

      <label className={styles.root}>Commodity Requested:&nbsp;</label>
      <label>
        {/* {values.commodityRequested.length > 0
          ? values.commodityRequested.join(', ')
          : values.commodityRequested} */}
        {values.commodityRequested.join(', ')}
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

      <label className={styles.root}>Line1:&nbsp;</label>
      <label>{values.shippingLine1}</label>
      <br />

      <label className={styles.root}>Line2:&nbsp;</label>
      <label>{values.shippingLine2}</label>
      <br />

      <label className={styles.root}>City:&nbsp;</label>
      <label>{values.shippingCity}</label>
      <br />

      <label className={styles.root}>State:&nbsp;</label>
      <label>{values.shippingState}</label>
      <br />

      <label className={styles.root}>ZIP:&nbsp;</label>
      <label>{values.shippingZIP}</label>
      <br />

      <label className={styles.root}>Country:&nbsp;</label>
      <label>{values.shippingCountry}</label>
      <br />
      <br />

      <label className={styles.root}>BILLING ADDRESS:&nbsp;</label>
      <br />

      <label className={styles.root}>Line1:&nbsp;</label>
      <label>{values.billingLine1}</label>
      <br />

      <label className={styles.root}>Line2:&nbsp;</label>
      <label>{values.billingLine2}</label>
      <br />

      <label className={styles.root}>City:&nbsp;</label>
      <label>{values.billingCity}</label>
      <br />

      <label className={styles.root}>State:&nbsp;</label>
      <label>{values.billingState}</label>
      <br />

      <label className={styles.root}>ZIP:&nbsp;</label>
      <label>{values.billingZIP}</label>
      <br />

      <label className={styles.root}>Country:&nbsp;</label>
      <label>{values.billingCountry}</label>
      <br />
    </div>
  );
};
