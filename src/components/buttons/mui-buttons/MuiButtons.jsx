import { DeleteColumnOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import React from 'react';

const MuiButtons = () => {
  return (
    <div className="grid grid-cols-6 my-16">
      <span className="text-bold text-xl flex items-center">Material Ui :</span>
      <div>
        <Button variant="contained">Contained</Button>
      </div>
      <div>
        <Button>Default Button</Button>
      </div>
      <div>
        <Button variant="contained" startIcon={<DeleteColumnOutlined />}>
          Delete
        </Button>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
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
