import React from 'react';
import { useState } from 'react';
import {FaStar} from 'react-icons/fa';

const StarRating = ({totalStars=5}) => {

  const [selectedStars,setSelectedStar] = useState(0);


  const Star = ({selected = false, onselect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onselect} />

  )

  const createArray = length => [...Array(length)];


  return (
    <>
    {createArray(totalStars).map((n,i) => (
      <Star 
      key={i}
      selected={selectedStars > i}
      onselect={()=> setSelectedStar(i+1)}
      />
    ))}
    <p>{selectedStars} of {totalStars} stars</p>
       </> 
  );
  
}
export default StarRating;
