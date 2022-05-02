import { Checkbox } from 'antd';
import React from 'react';

const AntdCheckbox = () => {
  return (
    <div className="grid grid-cols-6 my-4">
      <span className="text-bold text-xl flex items-center">Ant Design :</span>
      <Checkbox checked>Checkbox</Checkbox>
      <Checkbox disabled>Checkbox</Checkbox>
      <span>----</span>
    </div>
  );
};

export default AntdCheckbox;
