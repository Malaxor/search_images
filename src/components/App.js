import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
   state = {
      images: []
   };
   onSearchSubmit = async term => {
      const { data: { results } } = await axios.get('https://api.unsplash.com/search/photos', {
         params: { 
            query: term 
         },
         headers: { 
            Authorization: `Client-ID 4rck814Vk6fHTTlK7SZExJRzKSqZZYVJV2ZY665z_Eg` 
         }
      });
      this.setState(() => ({ images: results }));
   }
   render() {
      return (
         <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar 
               onSubmit={this.onSearchSubmit}
            />
         </div>
      )
   }
}
export default App;