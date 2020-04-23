import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';

import IFInput from '../reusable/IFInput';
import IFRoundButton from '../reusable/IFRoundButton';
import avatar from '../../assets/png/avatar.png';
import AddImage from '../../assets/svg/add-image.svg';
import './style.scss';


const MyInformationForm = () => {
  const [firstname, setFirstname] = useState('Ashley');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('Adams');
  const [company, setCompany] = useState('Equifax');
  const [address, setAddress] = useState('Atlanta, GA');
  const [email, setEmail] = useState('Ashley@equifax.com');

  return (
    <div className="information-form-container">
      <div className="content">
        <div className="profile">
          <div className="image">
            <img src={avatar} alt="avatar" />
            <div className="upload-control">
              <input accept="image/*" id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <img src={AddImage} width="40" height="40" alt="add" />
                </IconButton>
              </label>
            </div>
          </div>
          <div className="information">
            <h2>{firstname} {middlename} {lastname}</h2>
            <h4>Equifax</h4>
            <h4>Atlanta, GA</h4>
            <h4>Ashley@Equifax.com</h4>
          </div>
        </div>
        <div className="information-form">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={2}>
              <label>Name:*</label>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <IFInput
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <IFInput
                value={middlename}
                onChange={(e) => setMiddlename(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <IFInput
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <label>Company:*</label>
            </Grid>
            <Grid item xs={12} md={10}>
              <IFInput
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <label>City, State:*</label>
            </Grid>
            <Grid item xs={12} md={10}>
              <IFInput
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <label>Degrees:</label>
            </Grid>
            <Grid item xs={12} md={10}>
              <IFInput />
            </Grid>

            <Grid item xs={12} md={2}>
              <label>Certification:</label>
            </Grid>
            <Grid item xs={12} md={10}>
              <IFInput />
            </Grid>

            <Grid item xs={12} md={2}>
              <label>Job Title:</label>
            </Grid>
            <Grid item xs={12} md={10}>
              <IFInput />
            </Grid>

            <Grid item xs={12} md={2}>
              <label>Honors:</label>
            </Grid>
            <Grid item xs={12} md={10}>
              <IFInput />
            </Grid>

            <Grid item xs={12} md={2}>
              <label>Email:</label>
            </Grid>
            <Grid item xs={12} md={10}>
              <IFInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <label>Phone #:</label>
            </Grid>
            <Grid item xs={12} md={10}>
              <IFInput />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="controls">
        <IFRoundButton color="secondary" endIcon={<Clear />}>Cancel</IFRoundButton>
        <IFRoundButton color="primary" endIcon={<Check />}>Save</IFRoundButton>
      </div>
    </div>
  );
};

export default MyInformationForm;
