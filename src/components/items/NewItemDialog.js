import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {FormControl} from '@material-ui/core'
import DialogTitle from '@material-ui/core/DialogTitle';

const NewItemDialog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    itemName: '',
    description: '',
    category: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: +value ? +value : value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveNewItem = (props) => {
    setIsLoading(true);
    axios.post('http://localhost:8083/pick_n_go_app_war_exploded/items', form)
          .then(response => {
              console.log("post item response -->>> ", response);
              console.log(props.history)
              setIsLoading(false);
              setOpen(false);
              // props.history.push(`/items`);
          })
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Item
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Item Details</DialogTitle>
        <DialogContent>
          <FormControl className="w-full">
          <TextField
            className="mb-16"
            label="Item Name"
            type="text"
            autoFocus
            id="itemName"
            name="itemName"
            value={form.itemName}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          </FormControl>
          <br />
          <FormControl className="w-full">
          <TextField
            className="mb-16"
            label="Description"
            type="text"
            autoFocus
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          </FormControl>
          <br />
          <FormControl className="w-full">
          <TextField
            className="mb-16"
            label="Category"
            type="text"
            autoFocus
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <br />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={saveNewItem} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewItemDialog;