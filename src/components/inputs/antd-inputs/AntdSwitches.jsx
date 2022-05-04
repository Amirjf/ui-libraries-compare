import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import React from 'react';
import CustomDivider from '../../custom-divider/CustomDivider';

const AntdSwitches = () => {
  return (
    <>
      <CustomDivider bg="secondary" textAlign="left" title="Switch" />
      <div className="flex justify-evenly">
        <Switch className="bg-blue-600" defaultChecked />
        <Switch
          className="bg-blue-600"
          checkedChildren="Label"
          unCheckedChildren="off"
          defaultChecked
        />

        <Switch
          className="bg-blue-600"
          checkedChildren="1"
          unCheckedChildren="0"
        />

        <Switch
          className="bg-blue-600"
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
        <Switch className="bg-blue-600" loading defaultChecked />
      </div>
    </>
  );
};

export default AntdSwitches;
