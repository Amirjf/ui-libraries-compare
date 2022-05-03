import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Image, Tooltip } from 'antd';
import React from 'react';

const AntdAvatars = () => {
  return (
    <div className="flex justify-evenly">
      <Avatar>U</Avatar>
      <Avatar size={40}>USER</Avatar>
      <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 32 }}
          />
        }
      />
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <div>
        <Avatar.Group
          maxCount={2}
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </div>
    </div>
  );
};

export default AntdAvatars;
