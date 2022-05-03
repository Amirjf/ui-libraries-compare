import { ClockCircleOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Input, Select } from 'antd';
import React from 'react';
import AntdRadios from './AntdRadios';
import AntdSliders from './AntdSliders';
import AntdSwitches from './AntdSwitches';

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
      <AntdSwitches />
      <AntdRadios />
      <AntdSliders />
    </>
  );
};

export default AntdInputs;
