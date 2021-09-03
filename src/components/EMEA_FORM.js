import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
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
import { Preview } from './Preview';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Banner } from './Banner';
import { HelpPage } from './HelpPage';

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

const dispatchTypeOptions = [
  'Parts Only',
  'Onsite',
  'Depot Diagnostics',
  'Depot',
  'Labour Only',
  'Other',
];

const paymentMethodOptions = [
  'Credit/Debit Card',
  'Prepaid',
  'Invoice',
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
const optionEmpty = [];

const optionDepotDiagnostics = [{ label: 'C2R Diag', value: '687-12131' }];

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
];

const optionOnsite = [
  { label: 'Labour', value: '687-10977', disabled: true },
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
];

const optionOther = [
  { label: 'Service upgrade', value: '687-10972' },
  { label: 'Motherboard refurbishment', value: '687-12129' },
  { label: 'OEM Media', value: '682-19848' },
  { label: 'Software support', value: '701-16641' },
];

const optionLabourOnly = [
  { label: 'Labour', value: '687-10977', disabled: true },
];

const commodityOptionsSwitch = (dispatchType) => {
  switch (dispatchType) {
    case '':
      return optionEmpty;

    case 'Parts Only':
      return optionPartsOnly;

    case 'Onsite':
      return optionOnsite;

    case 'Depot Diagnostics':
      return optionDepotDiagnostics;

    case 'Depot':
      return optionDepotParts;

    case 'Labour Only':
      return optionLabourOnly;

    case 'Other':
      return optionOther;
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const EMEA_FORM = () => {
  const [values, setValue] = useState({
    repairUpgrade: 'Repair',
    issue: '',
    diagnosticStatus: '',
    serviceTag: '',
    dispatchType: '',
    commodityRequested: [],
    partsToUpgrade: [],
    spareKits: [],
    paymentMethod: '',
    //submitterEmail: '',
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
  });

  const output = `Please educate customer about online quote from OOP in 24 hrs. (M-F)
Type of Request: TOTAL SOLUTIONS
Issue: ${values.issue}
Diagnostic Status: ${values.diagnosticStatus}
Commodity Requested:${
    values.repairUpgrade === 'Repair' ? ' ' : ''
  }${values.commodityRequested.join(',')}${Object.values(values.spareKits)?.map(
    ({ value, quantity }) => `${quantity}x ${value},`
  )}${Object.values(values.partsToUpgrade)?.map(({ value }) => `,${value}`)}
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

  useEffect(() => {
    if (
      values.dispatchType === 'Parts Only' ||
      values.dispatchType === 'Depot' ||
      values.dispatchType === 'Depot Diagnostics' ||
      values.dispatchType === 'Other'
    ) {
      setValue({ ...values, commodityRequested: [] });
    } else if (
      values.dispatchType === 'Onsite' ||
      values.dispatchType === 'Labour Only'
    ) {
      setValue({ ...values, commodityRequested: ['687-10977'] });
    }
  }, [values.dispatchType]);

  useEffect(() => {
    setValue({
      ...values,
      spareKits: [],
      commodityRequested: [],
      issue: '',
      diagnosticStatus: '',
      serviceTag: '',
      dispatchType: '',
    });
  }, [values.repairUpgrade]);

  const handleChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value ?? '' });
  };

  const styles = useStyles();

  const [billingCheck, setBillingCheck] = useState(false);

  const [upgradeParts, setUpgradeParts] = useState(false);

  const [step, setStep] = useState(1);

  const mainPage = () => {
    setStep(1);
  };

  const helpPage = () => {
    setStep(2);
  };

  const handleBillingCheck = () => {
    setBillingCheck(!billingCheck);
  };

  const handleUpgradePartsCheck = () => {
    setUpgradeParts(!upgradeParts);
  };

  // useEffect(() => {
  //   setValue({
  //     partsToUpgrade: [],
  //   });
  // }, [upgradeParts]);

  const handleChangeMultiSelect = (event) => {
    setValue({
      ...values,
      commodityRequested: event.target.value,
    });
  };

  const onSubmit = () => {
    var toAlert = '';
    if (values.repairUpgrade === 'Repair') {
      if (values.dispatchType === '') {
        toAlert += ' * Dispatch Type\n';
      }

      if (values.commodityRequested.length === 0) {
        toAlert += ' * Commodity Requested\n';
      }

      if (
        values.dispatchType === 'Onsite' &&
        values.commodityRequested.length === 1
      ) {
        toAlert += ' * At least one additional Commodity must be selected\n';
      }
    }

    if (values.paymentMethod === '') {
      toAlert += ' * Payment Method\n';
    }

    if (values.shippingCountry === '') {
      toAlert += ' * Shipping Country\n';
    }

    if (toAlert === '') {
      Swal.fire(
        'Output succesfully copied to clipboard',
        'Please paste this output in SFDC as it is. Thanks',
        'success'
      );
      navigator.clipboard.writeText(output);
    } else {
      alert(
        'You can not copy to clipboard because the following information \nis missing in the form: \n\n' +
          toAlert
      );
      return;
    }
  };

  ///////////////////// DYNAMIC FIELD FOR SPARE KITS
  const [spareKitsFields, setSpareKitsFields] = useState([
    { id: uuidv4(), commodityNum: '', quantity: '' },
  ]);

  const handleSpareKits = (event, index) => {
    console.log(values.spareKits);
    event.target.name === 'commodityCodeValue'
      ? setValue({
          ...values,
          spareKits: {
            ...values.spareKits,
            [`${index}`]: {
              ...values.spareKits[`${index}`],
              value: event.target.value,
            },
          },
        })
      : setValue({
          ...values,
          spareKits: {
            ...values.spareKits,
            [`${index}`]: {
              ...values.spareKits[`${index}`],
              quantity: event.target.value,
            },
          },
        });
  };

  const handleAddFieldsSpareKits = () => {
    setSpareKitsFields([
      ...spareKitsFields,
      { id: uuidv4(), commodityNum: '', quantity: '' },
    ]);
  };

  const handleRemoveFieldsSpareKits = (id) => {
    const values = [...spareKitsFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setSpareKitsFields(values);
  };

  ///////////////////// DYNAMIC FIELD FOR UPGRADE PARTS
  const [upgradePartsFields, setUpgradePartsFields] = useState([
    { id: uuidv4(), commodityNum: '' },
  ]);

  const handleUpgradeParts = (event, index) => {
    setValue({
      ...values,
      partsToUpgrade: {
        ...values.partsToUpgrade,
        [`${index}`]: {
          ...values.partsToUpgrade[`${index}`],
          value: event.target.value,
        },
      },
    });
  };

  const handleAddFieldsUpgradeParts = () => {
    setUpgradePartsFields([
      ...upgradePartsFields,
      { id: uuidv4(), commodityNum: '' },
    ]);
  };

  const handleRemoveFieldsUpgradeParts = (id) => {
    const values = [...upgradePartsFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setUpgradePartsFields(values);
  };

  //*************************************************************** YUP VALIDATION START

  const repairUpgradeSchema =
    values.repairUpgrade === 'Repair'
      ? {
          issue: yup
            .string()
            //.matches(/^([^0-9]*)$/, 'Issue should not contain numbers')
            .required('Issue is a required field'),

          diagnosticStatus: yup
            .string()
            // .matches(
            //   /^([^0-9]*)$/,
            //   'Diagnostic status should not contain numbers'
            // )
            .required('Diagnostic status is a required field'),

          serviceTag: yup
            .string()
            .test(
              'len',
              'Service Tag must be exactly 7 characters long',
              (val) => val.length === 7
            )
            .required('Service Tag is a required field'),
        }
      : {};

  const schema = yup.object().shape({
    ...repairUpgradeSchema,

    name: yup
      .string()
      .matches(/^([^*~^;:<>]*)$/, 'Customer Name is not valid')
      .required('Customer Name is a required field'),

    phone: yup.string().required('Customer Phone is a required field'),

    customerEmail: yup
      .string()
      .email()
      .required('Customer Email is a required field'),

    shippingLine1: yup
      .string()
      .matches(/^([^*~^;:<>]*)$/, 'Line1 is not valid')
      .required('Shipping Line 1 is a required field'),

    shippingLine2: yup
      .string()
      .matches(/^([^*~^;:<>]*)$/, 'Line2 is not valid'),

    shippingCity: yup
      .string()
      .matches(/^([^*~^;:<>]*)$/, 'City is not valid')
      .required('Shipping City is a required field'),

    shippingState: yup
      .string()
      .matches(/^([^*~^;:<>]*)$/, 'State is not valid'),

    shippingZIP: yup
      .string()
      .required('Shipping ZIP/Postal is a required field'),
  });

  //*************************************************************** VALIDATION END

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  switch (step) {
    case 1:
      return (
        <>
          <Banner />
          <Container fluid>
            <Row>
              <Col>
                <MainContainer>
                  <Header title="Issue Info" helpPage={helpPage} />
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
                        value={values.repairUpgrade}
                        name="repairUpgrade"
                        onChange={handleChange}
                        label="Request Type"
                        defaultValue={true}
                      >
                        <MenuItem value={'Repair'}>Repair</MenuItem>
                        <MenuItem value={'Upgrade/Spare Parts/S&P/Kits'}>
                          Upgrade/Spare Parts/S&P/Kits
                        </MenuItem>
                      </Select>
                    </FormControl>

                    {values.repairUpgrade === 'Repair' && (
                      <div>
                        <Input
                          //* *********************************************************************ISSUE
                          //required
                          className={styles.root}
                          ref={register}
                          value={values.issue}
                          //defaultValue={values.issue}
                          name="issue"
                          type="text"
                          label="Issue"
                          onChange={handleChange}
                          error={!!errors.issue}
                          helperText={errors?.issue?.message}
                        />

                        <Input
                          //* *********************************************************************DIAGNOSTIC STATUS
                          className={styles.root}
                          ref={register}
                          value={values.diagnosticStatus}
                          name="diagnosticStatus"
                          type="text"
                          label="Diagnostic status (passed/error#)"
                          onChange={handleChange}
                          error={!!errors.diagnosticStatus}
                          helperText={errors?.diagnosticStatus?.message}
                        />

                        <Input
                          //* *********************************************************************SERVICE TAG
                          className={styles.root}
                          ref={register}
                          value={values.serviceTag}
                          name="serviceTag"
                          type="text"
                          label="Service Tag"
                          onChange={handleChange}
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
                            onChange={handleChange}
                            label="Dispatch Type"
                            error={!!errors?.dispatchType?.message}
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
                          onChange={handleChangeMultiSelect}
                          value={values.commodityRequested}
                          options={commodityOptionsSwitch(values.dispatchType)}
                        />

                        <FormControlLabel
                          style={{ marginBottom: '-15px' }}
                          control={
                            <Checkbox
                              checked={upgradeParts}
                              onChange={handleUpgradePartsCheck}
                              name="UpgradeParts"
                              color="primary"
                            />
                          }
                          label="Upgrade Parts"
                        />

                        {upgradeParts &&
                          upgradePartsFields.map((inputField, index) => (
                            <div
                              //* *********************************************************************UPGRADE PARTS

                              key={inputField.id}
                              style={{
                                marginTop: '20px',
                                marginBottom: '20px',
                              }}
                            >
                              <TextField
                                name="upgradePartsValue"
                                label="SKU Number"
                                style={{ width: '53%' }}
                                //variant="filled"
                                value={values?.partsToUpgrade[index]?.value}
                                onChange={(event) =>
                                  handleUpgradeParts(event, index)
                                }
                                // error={!!errors.commodityCodeValue}
                                // helperText={errors?.commodityCodeValue?.message}
                              />

                              <IconButton
                                disabled={upgradePartsFields.length === 1}
                                onClick={() =>
                                  handleRemoveFieldsUpgradeParts(inputField.id)
                                }
                              >
                                <RemoveIcon />
                              </IconButton>
                              <IconButton onClick={handleAddFieldsUpgradeParts}>
                                <AddIcon />
                              </IconButton>
                            </div>
                          ))}
                      </div>
                    )}

                    {values.repairUpgrade === 'Upgrade/Spare Parts/S&P/Kits' &&
                      spareKitsFields.map((inputField, index) => (
                        <div key={inputField.id} style={{ marginTop: '10px' }}>
                          <TextField
                            name="commodityCodeValue"
                            label="Commodity Code"
                            style={{ width: '53%' }}
                            //variant="filled"
                            value={values?.spareKits[index]?.value}
                            onChange={(event) => handleSpareKits(event, index)}
                            // error={!!errors.commodityCodeValue}
                            // helperText={errors?.commodityCodeValue?.message}
                          />
                          <TextField
                            name="commodityCodeQuantity"
                            label="Quantity"
                            type="number"
                            style={{ marginLeft: '10px', width: '17%' }}
                            //variant="filled"
                            value={values?.spareKits[index]?.quantity}
                            onChange={(event) => handleSpareKits(event, index)}
                          />
                          <br />
                          <IconButton
                            disabled={spareKitsFields.length === 1}
                            onClick={() =>
                              handleRemoveFieldsSpareKits(inputField.id)
                            }
                          >
                            <RemoveIcon />
                          </IconButton>
                          <IconButton onClick={handleAddFieldsSpareKits}>
                            <AddIcon />
                          </IconButton>
                        </div>
                      ))}

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
                        onChange={handleChange}
                        label="Payment Method"
                        error={!!errors.paymentMethod}
                      >
                        {paymentMethodOptions.map((option, index) => (
                          <MenuItem value={option} key={index}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <Typography
                      component="h3"
                      variant="h4"
                      style={{ marginTop: '20px' }}
                    >
                      Customer Contact
                    </Typography>

                    <Input
                      //* *********************************************************************CUSTOMER NAME
                      className={styles.root}
                      ref={register}
                      name="name"
                      type="text"
                      label="Name"
                      value={values.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                    />

                    <Input
                      //* *********************************************************************CUSTOMER PHONE
                      //className={styles.half}
                      className={styles.root}
                      ref={register}
                      name="phone"
                      type="text"
                      label="Phone"
                      value={values.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors?.phone?.message}
                    />

                    <Input
                      //* *********************************************************************PHONE EXT
                      //className={styles.halfRight}
                      className={styles.root}
                      ref={register}
                      name="ext"
                      type="text"
                      label="Phone Ext"
                      value={values.ext}
                      onChange={handleChange}
                      error={!!errors.ext}
                      helperText={errors?.ext?.message}
                    />

                    <Input
                      //* *********************************************************************CUSTOMER EMAIL
                      className={styles.root}
                      ref={register}
                      name="customerEmail"
                      type="text"
                      label="Customer Email"
                      value={values.customerEmail}
                      onChange={handleChange}
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
                      value={values.bestTime}
                      onChange={handleChange}
                      error={!!errors.bestTime}
                      helperText={errors?.bestTime?.message}
                    />
                    <small style={{ color: 'grey' }}>
                      *2 hour window (e.g. 2PM-4PM CST)*
                    </small>

                    <Typography
                      component="h3"
                      variant="h4"
                      style={{ marginTop: '20px' }}
                    >
                      Shipping Address
                    </Typography>
                    <small>*can not ship to PO BOX*</small>

                    <Input
                      //* *********************************************************************SH LINE1
                      className={styles.root}
                      ref={register}
                      name="shippingLine1"
                      type="text"
                      label="Line 1"
                      value={values.shippingLine1}
                      onChange={handleChange}
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
                      value={values.shippingLine2}
                      onChange={handleChange}
                      error={!!errors.shippingLine2}
                      helperText={errors?.shippingLine2?.message}
                    />

                    <Input
                      //* *********************************************************************SH CITY
                      className={styles.root}
                      ref={register}
                      name="shippingCity"
                      type="text"
                      label="City"
                      value={values.shippingCity}
                      onChange={handleChange}
                      error={!!errors.shippingCity}
                      helperText={errors?.shippingCity?.message}
                    />

                    <Input
                      //* *********************************************************************SH STATE
                      className={styles.root}
                      ref={register}
                      name="shippingState"
                      type="text"
                      label="State"
                      value={values.shippingState}
                      onChange={handleChange}
                      error={!!errors.shippingState}
                      helperText={errors?.shippingState?.message}
                    />

                    <Input
                      //* *********************************************************************SH ZIP
                      className={styles.root}
                      ref={register}
                      name="shippingZIP"
                      type="text"
                      label="Zip/Postal (not APO/FPO)"
                      value={values.shippingZIP}
                      onChange={handleChange}
                      error={!!errors.shippingZIP}
                      helperText={errors?.shippingZIP?.message}
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
                        name="shippingCountry"
                        value={values.shippingCountry}
                        value={values.shippingCountry}
                        onChange={handleChange}
                        label="Country"
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
                          value={values.billingLine1}
                          onChange={handleChange}
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
                          value={values.billingLine2}
                          onChange={handleChange}
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
                          value={values.billingCity}
                          onChange={handleChange}
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
                          value={values.billingState}
                          onChange={handleChange}
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
                          value={values.billingZIP}
                          onChange={handleChange}
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
                            onChange={handleChange}
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
                    <PrimaryButton
                      type="submit"
                      color="primary"
                      //style={{ marginTop: '30px' }}
                    >
                      Copy to Clipboard
                    </PrimaryButton>
                    {/* <PrimaryButton
                  color="secondary"
                  //onClick={resetForm}
                >
                  Reset
                </PrimaryButton> */}
                  </Form>
                </MainContainer>
              </Col>
              <Col>
                <Preview
                  //******************************************************PREVIEW
                  values={values}
                />
              </Col>
            </Row>
          </Container>
        </>
      );
    case 2:
      return <HelpPage mainPage={mainPage} />;
  }
};
