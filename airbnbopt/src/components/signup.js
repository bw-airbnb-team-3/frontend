import React from 'react';
import axios from 'axios';



export default Signup => {


    return (
        <div>
        <form >
          <input
              type="text"
              name="username"
   
            />
          <input
              type="password"
              name="password"

            />
          <button>Log in</button>
      </form>
        </div>
    )
}