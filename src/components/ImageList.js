import React from 'react';

const ImageList = ({ images }) => {
   const imgs = images.map(({ id, description, urls }) => 
      <img alt={description} key={id} src={urls.small} />
   );
   return <div>{imgs}</div>;
}
export default ImageList;