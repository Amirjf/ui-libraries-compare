import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import React from 'react';
import CustomDivider from '../../custom-divider/CustomDivider';

const AntdSwitches = () => {
  return (
    <>
      <CustomDivider bg="secondary" textAlign="left" title="Switch" />
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
    </>
  );
};

export default AntdSwitches;
