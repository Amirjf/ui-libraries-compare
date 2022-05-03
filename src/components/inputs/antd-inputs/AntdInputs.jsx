import {
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DatePicker, Input, Select, Switch, Radio } from 'antd';
import React from 'react';
import SectionHeading from '../../section-heading/SectionHeading';

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

const AntdInputs = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6 xl:grid-cols-6 gap-6">
        <Input placeholder="Basic usage" />
        <Input placeholder="default size" prefix={<UserOutlined />} />
        <Input.Group compact>
          <Select defaultValue="Zhejiang">
            <Select.Option value="Zhejiang">Zhejiang</Select.Option>
            <Select.Option value="Jiangsu">Jiangsu</Select.Option>
          </Select>
          <Input style={{ width: '25%' }} defaultValue="text" />
        </Input.Group>
        <Input.Search placeholder="input search text" allowClear />
        <Input.Password placeholder="input password" />
        <Input
          status="error"
          prefix={<ClockCircleOutlined />}
          placeholder="Error with prefix"
        />
        <Input.Search
          placeholder="input search loading with enterButton"
          loading
          enterButton
        />
        <Input prefix="￥" suffix="RMB" />
        <Input.Group compact>
          <Input style={{ width: '50%' }} defaultValue="text" />
          <DatePicker style={{ width: '50%' }} />
        </Input.Group>
      </div>
      <SectionHeading title="Switch" />
      <div className="flex justify-evenly">
        <Switch defaultChecked />
        <Switch
          checkedChildren="Label"
          unCheckedChildren="off"
          defaultChecked
        />

        <Switch checkedChildren="1" unCheckedChildren="0" />

        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
        <Switch loading defaultChecked />
      </div>
      <SectionHeading title="Switch" />
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

export default AntdInputs;
