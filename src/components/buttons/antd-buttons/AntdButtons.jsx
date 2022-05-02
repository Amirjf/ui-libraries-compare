import React from 'react';
import { DownloadOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const AntdButtons = () => {
  return (
    <div className="grid grid-cols-6 my-4">
      <span className="text-bold text-xl flex items-center">Ant Design : </span>
      <div>
        <Button type="primary">Salam</Button>
      </div>
      <div>
        <Button>Default Button</Button>
      </div>
      <div>
        <Button className="mx-2" type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
      </div>
      <div>
        <Button type="primary" ghost>
          Primary
        </Button>
      </div>
      <div>
        <Button type="primary" danger>
          Primary
        </Button>
      </div>
    </div>
  );
};

export default AntdButtons;
