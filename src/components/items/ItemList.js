import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SingleItem from './SingleItem';
import NewItemDialog from './NewItemDialog'



const ItemList = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:8083/pick_n_go_app_war_exploded/items')
      .then(response => {
        console.log("get all Items response -->>> ", response);
        setAllItems(response.data.data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (<div>Loading.......</div>) : (
    allItems.length > 0 ? (
      <div>
        <div className="mb-3 mt-3
        ">
        <NewItemDialog history={props.history} />
        </div>
        {allItems.map(item => (
          <SingleItem key={item.itemId} item={item} />
        ))}
      </div>
    ) : (
        <div>There are no items at the moment</div>
      )
  )


};

export default withRouter(ItemList);

