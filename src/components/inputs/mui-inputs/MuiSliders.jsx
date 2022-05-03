import { Slider, Stack } from '@mui/material';
import React from 'react';
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import SectionHeading from '../../section-heading/SectionHeading';
import CustomDivider from '../../custom-divider/CustomDivider';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const MuiSliders = () => {
  const [value, setValue] = React.useState([20, 37]);

  return (
    <>
      <SectionHeading title="Slider" />
      <div className="flex justify-evenly items-center">
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, width: '200px' }}
          alignItems="center"
        >
          <VolumeDown />
          <Slider aria-label="Volume" />
          <VolumeUp />
        </Stack>
        <CustomDivider vertical />

        <Slider
          sx={{ width: '200px' }}
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <CustomDivider vertical />

        <Slider
          sx={{ width: '200px' }}
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <CustomDivider vertical />

        <Slider
          sx={{ width: '200px' }}
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
    </>
  );
};

export default MuiSliders;
