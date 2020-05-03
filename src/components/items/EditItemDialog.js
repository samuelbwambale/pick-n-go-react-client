import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { IconButton } from '@material-ui/core';
import { FormControl } from '@material-ui/core'
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import { updateItem } from '../../actions/index';

const EditItemDialog = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const { itemId, itemName, description, category} = props.item;
    const [form, setForm] = useState({
        itemName: itemName,
        description: description,
        category: category
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: +value ? +value : value });
    };

    const handleClose = () => {
        setOpen(!open);
    };

    const handleSubmit = (props) => {
        setIsLoading(true);
        axios.put(`http://localhost:8083/pick_n_go_app_war_exploded/items?itemId=${itemId}`, form)
            .then(response => {
                console.log('update response', response)
                dispatch(updateItem({ payload: response.data.data }));
                setIsLoading(false);
                setOpen(false);
            })
    }

    return (
        <div>
            <IconButton onClick={handleClose}>
                <EditIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Item Details</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText> */}
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
                    <Button onClick={handleSubmit} color="primary">
                        Submit
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default withRouter(EditItemDialog);
