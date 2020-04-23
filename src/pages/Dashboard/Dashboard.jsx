import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Tabs, Tab, Typography, Box
} from '@material-ui/core';

import MyInformationForm from '../../components/MyInformationForm';

import Bg from '../../assets/png/bg.png';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 'calc(100vh - 108px)',
    padding: 30,
    background: `url(${Bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  tab: {
    minWidth: 'auto',
    padding: '6px 0',
    margin: '0 30px',
    color: 'white',
    textTransform: 'capitalize'
  }
}));

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const Dashboard = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(1);

  const onTabChanage = (event, value) => {
    setTab(value);
  };

  return (
    <div className={classes.container}>
      <Tabs
        value={tab}
        indicatorColor="primary"
        onChange={onTabChanage}
        centered
      >
        <Tab label="My iFOLIO's" className={classes.tab} />
        <Tab label="My Information" className={classes.tab} />
        <Tab label="Share Settings" className={classes.tab} />
        <Tab label="Tips/Resources" className={classes.tab} />
      </Tabs>
      <TabPanel value={tab} index={0}>
        Panel 1
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <MyInformationForm />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        Panel 3
      </TabPanel>
      <TabPanel value={tab} index={3}>
        Panel 4
      </TabPanel>
    </div>
  );
};

export default Dashboard;
