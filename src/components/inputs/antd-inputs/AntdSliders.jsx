import { Slider } from 'antd';
import React from 'react';
import CustomDivider from '../../custom-divider/CustomDivider';
import SectionHeading from '../../section-heading/SectionHeading';

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

const AntdSliders = () => {
  return (
    <>
      <SectionHeading title="Slider" />
      <div className="flex justify-evenly">
        <div style={{ width: 200 }}>
          <Slider defaultValue={30} />
        </div>
        <CustomDivider vertical />
        <div style={{ width: 200 }}>
          <Slider range defaultValue={[20, 50]} />
        </div>
        <CustomDivider vertical />

        <div style={{ width: 350 }}>
          <Slider marks={marks} step={10} defaultValue={37} />
        </div>
      </div>
    </>
  );
};

export default AntdSliders;
