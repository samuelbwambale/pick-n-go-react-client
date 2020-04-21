import React from 'react';
import DeleteItemDialog from './DeleteItemDialog';
import EditItemDialog from './EditItemDialog';




const SingleItem = props => (
    <div className="card mb-5">
      <div className="container">
        <h4 className="title"><b>{props.item.itemName}</b></h4>
        <p>{props.item.description}</p>
        <p>{props.item.category}</p>
        <div className="row">
          <div className="col-md-6">
                <DeleteItemDialog
                  item={props.item}
                  history={props.history}
                />
          </div>
          <div className="col-md-6">
                <EditItemDialog
                  item={props.item}
                  history={props.history}
                />
          </div>

        </div>
      </div>
    </div>
  );
  
  export default SingleItem;
  