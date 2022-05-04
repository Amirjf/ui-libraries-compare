import { Alert, Button, Space } from 'antd';
import React from 'react';

const AntdAlerts = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="w-1/2 flex flex-col gap-4">
          <Alert message="Success Text" type="success" />
          <Alert message="Info Text" type="info" />
          <Alert message="Warning Text" type="warning" />
          <Alert message="Error Text" type="error" />
          <Alert
            message="Success Tips"
            type="success"
            showIcon
            action={
              <Button size="small" type="text">
                UNDO
              </Button>
            }
            closable
          />
          <Alert
            message="Error Text"
            showIcon
            description="Error Description Error Description Error Description Error Description"
            type="error"
            action={
              <Button size="small" danger>
                Detail
              </Button>
            }
          />
          <Alert
            message="Warning Text"
            type="warning"
            action={
              <Space>
                <Button size="small" type="ghost">
                  Done
                </Button>
              </Space>
            }
            closable
          />
          <Alert
            message="Info Text"
            description="Info Description Info Description Info Description Info Description"
            type="info"
            action={
              <Space direction="vertical">
                <Button size="small" type="primary">
                  Accept
                </Button>
                <Button size="small" danger type="ghost">
                  Decline
                </Button>
              </Space>
            }
            closable
          />
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          <Alert message="Success Tips" type="success" showIcon />
          <Alert message="Informational Notes" type="info" showIcon />
          <Alert message="Warning" type="warning" showIcon closable />
          <Alert message="Error" type="error" showIcon />
          <Alert
            message="Success Tips"
            description="Detailed description and advice about successful copywriting."
            type="success"
            showIcon
          />
          <Alert
            message="Informational Notes"
            description="Additional description and information about copywriting."
            type="info"
            showIcon
          />
          <Alert
            message="Warning"
            description="This is a warning notice about copywriting."
            type="warning"
            showIcon
            closable
          />
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
        </div>
      </div>
    </div>
  );
};

export default AntdAlerts;
