import React, { Component } from 'react';

class SearchBar extends Component {
   render() {
      return (
         <div className="ui segment">
            <form className="ui form">
               <div className="field">
                  <label>Image Search
                     <input type="text"/>
                  </label>   
               </div>
            </form>
         </div>
      );
   }
}
export default SearchBar;