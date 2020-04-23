import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CustomButton = withStyles({
  root: {
    borderRadius: 18,
    width: 150
  }
})(Button);

const IFRoundButton = (props) => (
  <CustomButton variant="contained" {...props} />
);

export default IFRoundButton;
