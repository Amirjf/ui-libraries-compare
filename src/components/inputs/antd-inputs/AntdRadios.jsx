import { Radio } from 'antd';
import React from 'react';
import SectionHeading from '../../section-heading/SectionHeading';

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

const AntdRadios = () => {
  return (
    <>
      <SectionHeading title="Radio" />
      <div className="flex justify-evenly">
        <Radio.Group>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
        <Radio.Group
          options={optionsWithDisabled}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
    </>
  );
};

export default AntdRadios;
