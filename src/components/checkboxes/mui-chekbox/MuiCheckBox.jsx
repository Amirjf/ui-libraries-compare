import { Checkbox, FormControlLabel } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import React from 'react';

const MuiCheckBox = () => {
  return (
    <div className="grid grid-cols-6 my-4">
      <span className="text-bold text-xl flex items-center">Material Ui :</span>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      <FormControlLabel
        control={<Checkbox color="secondary" />}
        label="Label"
      />
      <FormControlLabel
        control={
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        }
        label="Label"
      />
    </div>
  );
};

export default MuiCheckBox;
