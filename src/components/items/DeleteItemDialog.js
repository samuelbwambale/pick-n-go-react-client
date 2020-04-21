import React, { useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const DeleteItemDialog = props => {
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const { itemId, itemName } = props.item;

  function handleClose() {
    setOpen(!open);
    setIsDeleting(!isDeleting);
  }

  function handleSubmit() {
    setIsDeleting(true);
    axios.delete(`http://localhost:8083/pick_n_go_app_war_exploded/items?itemId=${itemId}`)
          .then(response => {
              console.log("delete item response -->>> ", response);
              console.log(props.history)
              setIsDeleting(false);
              setOpen(false);
              // props.history.push(`/items`);
          })
   
  }

  return (
    <React.Fragment>
        {/* <Button
          className="ml-10"
          id="submitButton"
          onClick={handleClose}
          color="default"
          variant="contained"
        >
          Delete Vendor
        </Button> */}
        <IconButton onClick={handleClose}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete {itemName}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {itemName} will be deleted from the list of Items.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            id="submitButton"
            onClick={handleSubmit}
            color="primary"
            autoFocus
            type="submit"
            variant="contained"
            value="legacy"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteItemDialog;