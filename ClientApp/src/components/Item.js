import React from 'react';

const Item = ({ item, drag, itemImgObj }) => {
  return (
    <div className='unranked-cell'>
      <img
        id={`item-${item.id}`}
        src={itemImgObj.image}
        alt={item.id}
        style={{ cursor: 'pointer' }}
        draggable='true'
        onDragStart={drag}
      />
    </div>
  );
};

export default Item;
