import React, { useState } from 'react';

import { MainContainer } from './MainContainer';
import { Header } from './Header';
import { Form } from './Form';
import { Input } from './Input';
import { PrimaryButton } from './PrimaryButton';
import MultipleSelect from './MultiSelect';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import Swal from 'sweetalert2';
import { DynamicField } from './DynamicField';

const schema = yup.object().shape({});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  half: {
    width: '70%',
    marginTop: theme.spacing(1),
  },
  halfRight: {
    width: '27%',
    marginLeft: '10px',
    marginTop: theme.spacing(1),
  },
}));

const values = {
  issue: '',
  diagnosticStatus: '',
  serviceTag: '',
  dispatchType: '',
  commodityRequested: '',
  paymentMethod: '',
  submitterEmail: '',
  name: '',
  phone: '',
  ext: '',
  customerEmail: '',
  bestTime: '',
  shippingLine1: '',
  shippingLine2: '',
  shippingCity: '',
  shippingState: '',
  shippingZIP: '',
  shippingCountry: '',
  billingLine1: '',
  billingLine2: '',
  billingCity: '',
  billingState: '',
  billingZIP: '',
  billingCountry: '',
};

const dispatchTypeOptions = [
  'Parts Only',
  'Onsite',
  'Depot Diagnostics',
  'Depot',
  'Labor Only',
  'Other',
];

const commodityRequestedOptions = [
  'Commodity 1',
  'Commodity 2',
  'Commodity 3',
  'Commodity 4',
  'Commodity 5',
  'Commodity 6',
];

const paymentMethodOptions = [
  'Credit/Debit Card',
  'PO',
  'DPA',
  'Undecided/Unknown',
];

const countryOptions = [
  'Germany',
  'Switzerland',
  'Austria',
  'UK',
  'Ireland',
  'South Africa',
  'France',
  'Belgium',
  'Netherlands',
  'Luxemburg',
  'Greece',
  'Italy',
  'Spain',
  'Denmark',
  'Sweden',
  'Norway',
  'Finland',
  'Slovakia',
  'Czech Republic',
  'Poland',
];

//************************************************COMMODITY TYPES BASED ON SELECTED DISPATCH TYPE
const optionDepotDiagnostics = [
  { label: 'C2R Diag', value: '687-12131' },
  { label: 'I WANT TO UPGRADE PARTS', value: '' },
];

const optionDepotParts = [
  { label: 'Freight', value: '687-12131' },
  { label: 'Labour', value: '891-10766' },
  { label: 'Motherboard', value: '739-56820' },
  { label: 'LCD', value: '739-56821' },
  { label: 'HDD', value: '739-56822' },
  { label: 'SSD', value: '739-56826' },
  { label: 'Memory', value: '739-56832' },
  { label: 'NB Battery', value: '739-56828' },
  { label: 'NB Keyboard', value: '739-56833' },
  { label: 'Graphics', value: '739-56834' },
  { label: 'Processor', value: '739-56827' },
  { label: 'Major Misc', value: '739-56836' },
  { label: 'Minor Misc', value: '891-10768' },
  { label: 'I WANT TO UPGRADE PARTS', value: '' },
];

const optionPartsOnly = [
  { label: 'Freight', value: '687-10988' },
  { label: 'Motherboard', value: '739-56837' },
  { label: 'LCD', value: '739-56838' },
  { label: 'HDD', value: '739-56839' },
  { label: 'SSD', value: '739-56840' },
  { label: 'Processor', value: '739-56841' },
  { label: 'NB Battery', value: '739-56842' },
  { label: 'Memory', value: '739-56843' },
  { label: 'NB Keyboard', value: '739-56844' },
  { label: 'Graphics Card', value: '739-56845' },
  { label: 'Major Misc', value: '739-56846' },
  { label: 'Minor Misc', value: '891-10769' },
  { label: 'I WANT TO UPGRADE PARTS', value: '' },
];

const optionPartsAndLabor = [
  { label: 'Labour', value: '687-10977' },
  { label: 'Motherboard', value: '739-56817' },
  { label: 'LCD', value: '739-56818' },
  { label: 'HDD', value: '739-56819' },
  { label: 'SSD', value: '739-56823' },
  { label: 'Processor', value: '739-56824' },
  { label: 'NB Battery', value: '739-56825' },
  { label: 'Memory', value: '739-56829' },
  { label: 'NB Keyboard', value: '739-56830' },
  { label: 'Graphics', value: '739-56831' },
  { label: 'Major Misc', value: '739-56835' },
  { label: 'Minor Misc', value: '891-10767' },
  { label: 'I WANT TO UPGRADE PARTS', value: '' },
];

const optionOther = [
  { label: 'Service upgrade', value: '687-10972' },
  { label: 'Motherboard refurbishment', value: '687-12129' },
  { label: 'OEM Media', value: '682-19848' },
  { label: 'Software support', value: '701-16641' },
  { label: 'I WANT TO UPGRADE PARTS', value: '' },
];
//************************************************COMMODITY TYPES BASED ON SELECTED DISPATCH TYPE

const output = `Please educate customer about online quote from OOP in 24 hrs. (M-F)
Type of Request: TOTAL SOLUTIONS
Submitter: ${values.submitterEmail}
Issue: ${values.issue}
Diagnostic Status: ${values.diagnosticStatus}
Commodity Requested: ${values.commodityRequested}
Dispatch Type: ${values.dispatchType}
Payment Method: ${values.paymentMethod}\n
Service Tag: ${values.serviceTag}\n
Customer Name: ${values.name}
Customer Phone: ${values.phone} ext: ${values.ext}
Customer Email: ${values.customerEmail}
Best Time To Reach: ${values.bestTime}\n
Shipping address:
Shipping Line1: ${values.shippingLine1}
Shipping Line2: ${values.shippingLine2}
Shipping City: ${values.shippingCity}
Shipping State: ${values.shippingState}
Shipping PostalCode: ${values.shippingZIP}
Shipping Country: ${values.shippingCountry}\n
Billing address:
Billing Line1: ${values.billingLine1}
Billing Line2: ${values.billingLine2}
Billing City: ${values.billingCity}
Billing State: ${values.billingState}
Billing PostalCode: ${values.billingZIP}
Billing Country: ${values.billingCountry}\n`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const EMEA_FORM = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  //   const handleChange = (input) => (e) => {
  //     this.setState({ [input]: e.target.value });
  //   };

  const styles = useStyles();

  const [repairUpgrade, setrepairUpgrade] = useState(true);

  const handleRepair = () => {
    setrepairUpgrade(!repairUpgrade);
  };

  const [billingCheck, setBillingCheck] = useState(false);

  const handleBillingCheck = () => {
    setBillingCheck(!billingCheck);
  };

  const onSubmit = () => {
    Swal.fire(
      'Copied to clipboard',
      'Please do NOT alter the output in SFDC',
      'success'
    );
    navigator.clipboard.writeText(output);
  };

  return (
    <MainContainer>
      <Header title="Issue Info" />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          style={{ marginTop: '-10px' }}
          //* *********************************************************************REQUEST TYPE
          //required
          //variant="outlined"
          className={styles.root}
        >
          <InputLabel>Request Type</InputLabel>
          <Select
            ref={register}
            name="repairUpgrade"
            onChange={handleRepair}
            label="Request Type"
            defaultValue={true}
          >
            <MenuItem value={true}>Repair/Upgrade</MenuItem>
            <MenuItem value={false}>Spare Parts/S&P/Kits</MenuItem>
          </Select>
        </FormControl>

        {repairUpgrade && (
          <div className="repair-upgrade">
            <Input
              //* *********************************************************************ISSUE
              className={styles.root}
              ref={register}
              name="issue"
              type="text"
              label="Issue"
              //onChange={handleChange('issue')}
              error={!!errors.issue}
              helperText={errors?.issue?.message}
            />

            <Input
              //* *********************************************************************DIAGNOSTIC STATUS
              className={styles.root}
              ref={register}
              name="diagnosticStatus"
              type="text"
              label="Diagnostic status (passed/error#) *"
              //onChange={handleChange('diagnosticStatus')}
              error={!!errors.diagnosticStatus}
              helperText={errors?.diagnosticStatus?.message}
            />

            <Input
              //* *********************************************************************SERVICE TAG
              className={styles.root}
              ref={register}
              name="serviceTag"
              type="text"
              label="Service Tag *"
              //onChange={handleChange('serviceTag')}
              error={!!errors.serviceTag}
              helperText={errors?.serviceTag?.message}
            />

            <FormControl
              //* *********************************************************************DISPATCH TYPE
              //required
              // variant="outlined"
              className={styles.root}
            >
              <InputLabel>Dispatch Type</InputLabel>
              <Select
                ref={register}
                name="dispatchType"
                value={values.dispatchType}
                //onChange={handleChange('dispatchType')}
                label="Dispatch Type"
                error={!!errors.dispatchType}
              >
                {dispatchTypeOptions.map((option, index) => (
                  <MenuItem value={option} key={index}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <MultipleSelect
              //* *********************************************************************COMMODITY REQUESTED
              //onChange={handleChange}
              options={commodityRequestedOptions}
            />
          </div>
        )}

        {!repairUpgrade && <DynamicField />}
        <FormControl
          //* *********************************************************************PAYMENT METHOD
          //required
          //variant="outlined"
          className={styles.root}
        >
          <InputLabel>Payment Method</InputLabel>
          <Select
            ref={register}
            name="paymentMethod"
            value={values.paymentMethod}
            //onChange={handleChange('paymentMethod')}
            label="Payment Method"
            //error={!!errors.paymentMethod}
          >
            {paymentMethodOptions.map((option, index) => (
              <MenuItem value={option} key={index}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography component="h3" variant="h4" style={{ marginTop: '20px' }}>
          Customer Contact
        </Typography>

        <Input
          //* *********************************************************************CUSTOMER NAME
          className={styles.root}
          ref={register}
          name="name"
          type="text"
          label="Name *"
          //onChange={handleChange('name')}
          error={!!errors.name}
          helperText={errors?.name?.message}
        />

        <Input
          //* *********************************************************************CUSTOMER PHONE
          className={styles.half}
          ref={register}
          name="phone"
          type="text"
          label="Phone *"
          //onChange={handleChange('phone')}
          error={!!errors.phone}
          helperText={errors?.phone?.message}
        />

        <Input
          //* *********************************************************************PHONE EXT
          className={styles.halfRight}
          ref={register}
          name="ext"
          type="text"
          label="Phone Ext"
          //onChange={handleChange('ext')}
          error={!!errors.ext}
          helperText={errors?.ext?.message}
        />

        <Input
          //* *********************************************************************CUSTOMER EMAIL
          className={styles.root}
          ref={register}
          name="customerEmail"
          type="text"
          label="Customer Email *"
          //onChange={handleChange('customerEmail')}
          error={!!errors.customerEmail}
          helperText={errors?.customerEmail?.message}
        />

        <Input
          //* *********************************************************************BEST TIME TO REACH
          className={styles.root}
          ref={register}
          name="bestTime"
          type="text"
          label="Best Time to Reach"
          //onChange={handleChange('bestTime')}
          error={!!errors.bestTime}
          helperText={errors?.bestTime?.message}
        />

        <Typography component="h3" variant="h4" style={{ marginTop: '20px' }}>
          Shipping Address
        </Typography>

        <Input
          //* *********************************************************************SH LINE1
          className={styles.root}
          ref={register}
          name="shippingLine1"
          type="text"
          label="Line 1 *"
          //onChange={handleChange('shippingLine1')}
          error={!!errors.shippingLine1}
          helperText={errors?.shippingLine1?.message}
        />

        <Input
          //* *********************************************************************SH LINE2
          className={styles.root}
          ref={register}
          name="shippingLine2"
          type="text"
          label="Line 2"
          //onChange={handleChange('shippingLine2')}
          error={!!errors.shippingLine2}
          helperText={errors?.shippingLine2?.message}
        />

        <Input
          //* *********************************************************************SH CITY
          className={styles.root}
          ref={register}
          name="shippingCity"
          type="text"
          label="City *"
          //onChange={handleChange('shippingCity')}
          error={!!errors.shippingCity}
          helperText={errors?.shippingCity?.message}
        />

        <Input
          //* *********************************************************************SH STATE
          className={styles.root}
          ref={register}
          name="shippingState"
          type="text"
          label="State *"
          //onChange={handleChange('shippingState')}
          error={!!errors.shippingState}
          helperText={errors?.shippingState?.message}
        />

        <Input
          //* *********************************************************************SH ZIP
          className={styles.root}
          ref={register}
          name="shippingZIP"
          type="text"
          label="Zip/Postal (not APO/FPO) *"
          //onChange={handleChange('shippingZIP')}
          error={!!errors.shippingZIP}
          helperText={errors?.shippingZIP?.message}
        />

        <FormControl
          //* *********************************************************************SH COUNTRY
          //required
          // variant="outlined"
          className={styles.root}
        >
          <InputLabel>Country *</InputLabel>
          <Select
            ref={register}
            name="shippingCountry"
            value={values.shippingCountry}
            //onChange={handleChange('shippingCountry')}
            label="Country *"
            error={!!errors.shippingCountry}
          >
            {countryOptions.map((country, index) => (
              <MenuItem value={country} key={index}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControlLabel
          style={{ marginTop: '15px', marginBottom: '15px' }}
          control={
            <Checkbox
              checked={billingCheck}
              onChange={handleBillingCheck}
              name="BillingAddress"
              color="primary"
            />
          }
          label="Billing Address is different from Shipping"
        />

        {billingCheck && (
          <div>
            <Typography component="h3" variant="h4">
              Billing Address
            </Typography>
            <Input
              //* *********************************************************************SH LINE1
              className={styles.root}
              ref={register}
              name="billingLine1"
              type="text"
              label="Line 1"
              //onChange={handleChange('billingLine1')}
              error={!!errors.billingLine1}
              helperText={errors?.billingLine1?.message}
            />

            <Input
              //* *********************************************************************SH LINE2
              className={styles.root}
              ref={register}
              name="billingLine2"
              type="text"
              label="Line 2"
              //onChange={handleChange('billingLine2')}
              error={!!errors.billingLine2}
              helperText={errors?.billingLine2?.message}
            />

            <Input
              //* *********************************************************************SH CITY
              className={styles.root}
              ref={register}
              name="billingCity"
              type="text"
              label="City"
              //onChange={handleChange('billingCity')}
              error={!!errors.billingCity}
              helperText={errors?.billingCity?.message}
            />

            <Input
              //* *********************************************************************SH STATE
              className={styles.root}
              ref={register}
              name="billingState"
              type="text"
              label="State"
              //onChange={handleChange('billingState')}
              error={!!errors.billingState}
              helperText={errors?.billingState?.message}
            />

            <Input
              //* *********************************************************************SH ZIP
              className={styles.root}
              ref={register}
              name="billingZIP"
              type="text"
              label="Zip/Postal (not APO/FPO)"
              //onChange={handleChange('billingZIP')}
              error={!!errors.billingZIP}
              helperText={errors?.billingZIP?.message}
            />

            <FormControl
              //* *********************************************************************SH COUNTRY
              //required
              // variant="outlined"
              className={styles.root}
            >
              <InputLabel>Country</InputLabel>
              <Select
                ref={register}
                name="billingCountry"
                value={values.billingCountry}
                //onChange={handleChange('billingCountry')}
                label="Country"
                error={!!errors.billingCountry}
              >
                {countryOptions.map((country, index) => (
                  <MenuItem value={country} key={index}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}
      </Form>

      <PrimaryButton
        color="primary"
        onClick={onSubmit}
        //style={{ marginTop: '30px' }}
      >
        Copy to Clipboard
      </PrimaryButton>
      <PrimaryButton
        color="secondary"
        //onClick={resetForm}
      >
        Reset
      </PrimaryButton>
    </MainContainer>
  );
};
