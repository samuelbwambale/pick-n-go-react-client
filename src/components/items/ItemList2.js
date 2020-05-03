import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getAllItems } from '../../actions/index';
import SingleItem from './SingleItem';

export class ItemList2 extends Component {
  componentDidMount() {
    const { getAllItems } = this.props;
    getAllItems();
  }

  componentDidUpdate(prevProps) {
    if(this.props.allItems !== prevProps.allItems) {
        console.log('Prev :', prevProps)
    }
  }

 

  

  render() {
    const { allItems } = this.props;
    console.log('allItems in render ', allItems)

    return allItems.length > 0 ? (
      <div className="mb-3 mt-3">
        {allItems.map(item => (
          <SingleItem key={item.itemId} item={item} />
        ))}
      </div>
    ) : (
      <div>There are no Items. Please add an item</div>
    );
  }
}

const mapStateToProps = state => ({
    allItems: state.itemsReducer.allItems,
});

const matchDispatchToProps = dispatch =>
  bindActionCreators(
    {
        getAllItems,
    },
    dispatch,
  );

  ItemList2.propTypes = {
    getAllItems: PropTypes.func.isRequired,
    allItems: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(ItemList2);