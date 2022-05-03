import {
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DatePicker, Input, Select, Switch } from 'antd';
import React from 'react';
import SectionHeading from '../../section-heading/SectionHeading';

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
          <Input style={{ width: '50%' }} defaultValue="text" />
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
          checkedChildren="开启"
          unCheckedChildren="关闭"
          defaultChecked
        />

        <Switch checkedChildren="1" unCheckedChildren="0" />

        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </div>
    </>
  );
};

export default AntdInputs;
