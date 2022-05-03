import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const AntdSelects = () => {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  return (
    <div className="grid grid-cols-6 my-4">
      <span className="text-bold text-xl flex items-center">Ant Design : </span>

      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select defaultValue="Yiminghe" disabled style={{ width: 120 }}>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>

      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select
        style={{ width: 120 }}
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
      <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode">
        {children}
      </Select>
    </div>
  );
};

export default AntdSelects;
