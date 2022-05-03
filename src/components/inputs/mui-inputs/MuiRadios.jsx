import React from 'react';

import {
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  FormControlLabel,
} from '@mui/material';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import CustomDivider from '../../custom-divider/CustomDivider';

const MuiRadios = () => {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <CustomDivider bg="secondary" textAlign="left" title="Radio" />
      <div className="flex justify-evenly">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
        <Radio
          sx={{
            color: 'red',
            '&.Mui-checked': {
              color: 'red',
            },
          }}
        />
        <Radio
          sx={{
            color: 'red',
            '&.Mui-checked': {
              color: 'red',
            },
          }}
        />
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">iOS</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default MuiRadios;
