import { DeleteColumnOutlined } from '@ant-design/icons';
import { Button } from '@mui/material';
import React from 'react';

const MuiButtons = () => {
  return (
    <div className="grid grid-cols-6 my-16">
      <span className="text-bold text-xl flex items-center">
        Material Ui :{' '}
      </span>
      <div>
        <Button variant="contained">Salam</Button>
      </div>
      <div>
        <Button>Default Button</Button>
      </div>
      <div>
        <Button variant="contained" startIcon={<DeleteColumnOutlined />}>
          Delete
        </Button>
      </div>
      <div>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div>
        <Button variant="contained" color="error">
          Error
        </Button>
      </div>
    </div>
  );
};

export default MuiButtons;
