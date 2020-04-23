import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const CustomInput = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent'
      },
      '& input': {
        backgroundColor: 'white',
        padding: '12px 14px',
        borderRadius: 4
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1
      }
    }
  }
})(TextField);

const IFInput = (props) => <CustomInput fullWidth variant="outlined" {...props} />;

export default IFInput;
