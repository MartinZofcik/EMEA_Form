import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Banner } from './Banner';
import { MainContainer } from './MainContainer';
import Button from './Button';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'flex-start',
    boxShadow: '0 14px 28px rgba(0,0,0,0.07), 0 10px 10px rgba(0,0,0,0.001)',
    borderRadius: '15px',
    paddingLeft: '3em',
    paddingRight: '3em',
    paddingBottom: '3em',
    paddingTop: '1em',
    width: '80%',
    margin: 'auto',
  },
  margin14: {
    marginLeft: '1.4em',
  },
  margin14ListNone: {
    marginLeft: '1.4em',
    listStyleType: 'none',
  },
}));

export const HelpPage = ({ mainPage }) => {
  const styles = useStyles();

  return (
    <>
      <Banner />
      <div className={styles.container}>
        <Button color="red" text="<-- Back to Form" onClick={mainPage} />
        <h2 style={{ marginTop: '10px' }}>Helpful Links</h2>
        <li className={styles.margin14}>
          For PON SKUs Please Reference{' '}
          <a
            href="https://dellservices.lightning.force.com/lightning/r/Lightning_Knowledge__kav/ka02R00000014KdQAI/view"
            target="_blank"
          >
            000045169
          </a>
        </li>
        <li className={styles.margin14ListNone}>
          <small>
            - Services Lightning Knowledge Article - OOP Hardware Repair Policy
            - Dell EMEA Client Policy (Consumer / Commercial) | Article Number:
            000045169
          </small>
        </li>
        <li className={styles.margin14}>
          For New and Upgrade Parts use{' '}
          <a
            href="https://product-selectors.dell.com/Cust_Kit_Selector/main.aspx"
            target="_blank"
          >
            Customer Kit List
          </a>
        </li>
        <li className={styles.margin14}>
          For Spare Parts use{' '}
          <a
            href="https://spmd.dell.com/spmd/techsupport/default"
            target="_blank"
          >
            SPMD
          </a>
        </li>
        {/* <li className={styles.margin14}> */}
        <small className={styles.margin14}>
          - ensure that part numbers show they can be ordered
        </small>{' '}
        <br />
        <small className={styles.margin14}>
          - Parts Detail Tab will show if the part number is sellable
        </small>
        <li className={styles.margin14}>
          For upgrades, use:
          <br />
          <a
            href="https://www.dell.com/de-de/shop/partsforyourdell"
            target="_blank"
          >
            - Parts for your Dell DE&emsp;
          </a>
          <a
            href="https://www.dell.com/de-at/shop/partsforyourdell"
            target="_blank"
          >
            - Parts for your Dell AT&emsp;
          </a>
          <a
            href="https://www.dell.com/de-ch/shop/partsforyourdell"
            target="_blank"
          >
            - Parts for your Dell CH
          </a>
          <br />
          <a
            href="https://www.dell.com/pl-pl/shop/partsforyourdell"
            target="_blank"
          >
            - Parts for your Dell PL&emsp;
          </a>
          <a
            href="https://www.dell.com/nl-be/shop/partsforyourdell"
            target="_blank"
          >
            &nbsp;- Parts for your Dell BE&emsp;
          </a>
          <a
            href="https://www.dell.com/nl-nl/shop/partsforyourdell"
            target="_blank"
          >
            - Parts for your Dell NL
          </a>
          <br />
          <a
            href="https://www.dell.com/fr-fr/shop/partsforyourdell"
            target="_blank"
          >
            - Parts for your Dell FR&emsp;
          </a>
          <a
            href="https://www.dell.com/it-it/shop/partsforyourdell"
            target="_blank"
          >
            &nbsp;- Parts for your Dell IT&emsp;
          </a>
          <a
            href="https://www.dell.com/es-es/shop/partsforyourdell"
            target="_blank"
          >
            &nbsp;- Parts for your Dell SP
          </a>
          <br />
          <a
            href="https://www.dell.com/en-uk/shop/partsforyourdell"
            target="_blank"
          >
            - Parts for your Dell UK
          </a>
        </li>
        <br />
        <h2>Instructions</h2>
        <b>Upgrades in scope:</b>
        <li className={styles.margin14}>
          Memory, HDD/SSD (if only bracket needed, its not supported and
          brackets can be offered only with HDD/SSD){' '}
        </li>
        <li className={styles.margin14}>
          WWAN upgrade (possible only if antennas are already built in cover)
        </li>
        <li className={styles.margin14}>
          {' '}
          Desktop graphic cards (PSU with sufficient power must be in system)
        </li>
        <br />
        <span style={{ display: 'inline-block' }}>
          <b>Upgrades out of scope:</b>
          <li className={styles.margin14}>
            LCD (resolution change, non-touch to touch, webcam)
          </li>
          <li className={styles.margin14}>Motherboard upgrades</li>
          <li className={styles.margin14}>
            Major components on IWR systems are not supported
          </li>
        </span>
        <br />
        <br />
        <span style={{ display: 'inline-block' }}>
          <b>Common wrong transfers to PON:</b>
          <li className={styles.margin14}>
            Desktop Monitor not possible to repair
          </li>
          <li className={styles.margin14}>
            Accidental Damage /ProSupport Plus not available APOS in EMEA
          </li>
          <li className={styles.margin14}>
            Keep Your Hard Drive/Component KYHD/KYC possible only if there is no
            issue , not after warranty repair
          </li>
          <br />
          <b>Important: </b>
          <br />
          Also, please ensure all existing open tasks or unanswered emails
          before case assignment to PON.
          <br />
          Use this form to capture the details and paste the updated handshake
          template under a "No Contact” activity in SFDC Lightning before
          assigning Case to PON SFDC Lightning Queue:
          <li className={styles.margin14}>
            Germany, Switzerland, Austria - ProSupport OOS repair requests{' '}
            <span style={{ fontWeight: 'bold' }}>
              EM.DB.CSG.CLI.DM.DE.OOP.LEJTS
            </span>
          </li>
          <li className={styles.margin14}>
            Germany, Switzerland (DE), Austria - Spares and Upgrades{' '}
            <span style={{ fontWeight: 'bold' }}>
              EM.DB.TSP.CLI.DM.DE.OOP.BRAOWR
            </span>
          </li>
          <li className={styles.margin14}>
            Netherlands - ProSupport OOS repair requests{' '}
            <span style={{ fontWeight: 'bold' }}>
              EMEA.TS.CLI.SRO.EN.CORE.NL.REVENUE
            </span>
          </li>
          <li className={styles.margin14}>
            Netherlands - Spares and Upgrades{' '}
            <span style={{ fontWeight: 'bold' }}>
              EM.OS.CSG.CLI.DM.NL.OOP.NLTECH
            </span>
          </li>
          <li className={styles.margin14}>
            Czech Republic, Slovak Republic{' '}
            <span style={{ fontWeight: 'bold' }}>
              EM.DB.TSP.CLI.DM.DE.OOP.BRAOWR
            </span>
          </li>
          <li className={styles.margin14}>
            Poland{' '}
            <span style={{ fontWeight: 'bold' }}>
              EM.DB.TSP.CLI.DM.PL.OOP.BRAPL
            </span>
          </li>
          <li className={styles.margin14}>
            for Other countries please consult with your local PON Team and/or
            LKB article{' '}
            <a
              href="https://dellservices.lightning.force.com/lightning/r/Lightning_Knowledge__kav/ka02R00000014KdQAI/view"
              target="_blank"
            >
              000045169
            </a>{' '}
            <span style={{ fontWeight: 'bold' }}></span>
          </li>
          with Case title “ProSupport to PON” on it
          <br />
          <br />
          <span style={{ display: 'inline-block', fontWeight: 'bold' }}>
            Please educate customer about quote from PON in 24 hrs. (M-F)
            <br />
            SLA : 24 hrs M-F | Working hours – 8 AM to 6 PM CET (M-F)
          </span>
          <br />
        </span>
      </div>
    </>
  );
};
