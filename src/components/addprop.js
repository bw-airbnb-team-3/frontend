import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addListing } from './actions/actionsIndex';

const Form = props => {
    const [newListing, setNewListing] = useState({});
  
    const handleInput = e => {
      setNewListing({ ...newListing, name: e.target.value });
    };
  
    const addListing = e => {
      e.preventDefault();
      console.log(newListing);
      props.addListing({ ...newListing, id: props.state.length});
      setNewListing({...newListing, amenities: '', bedrooms: '', host_identity_verified: '', 
      weekly_price: '', recommended_price: '' 
    });
    };
  
    return (
      <form action="">
        <input placeholder='amenities' onChange={handleInput} value={newListing.amenities} />
        <input placeholder='bedrooms' onChange={handleInput} value={newListing.bedrooms} />
        <input placeholder='host identity verified' onChange={handleInput} value={newListing.host_identity_verified} />
        <input placeholder='weekly price' onChange={handleInput} value={newListing.weekly_price} />
        <input placeholder='recommended price' onChange={handleInput} value={newListing.recommended_price} />
        <button onClick={addListing}>Add addListing</button>
      </form>
    );
  };
  
  const mapStateToProps = state => {
    return { state };
  };
  
  export default connect(mapStateToProps, { addListing })(Form);