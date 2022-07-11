import React, { useState } from "react";

const Photolist = ({ category }) => {
  const [photos] =useState([
    {
      name: 'American Traditonal',
      category: 'American Traditonal'
    },
    {
      name: 'American Traditional',
      category: 'American Traditonal'
    },
    {
      name: 'American Traditional',
      category: 'American Traditonal'
    },
    {
      name: 'American Traditional',
      category: 'American Traditonal'
    },
    {
      name: 'American Traditional',
      category: 'American Traditonal'
    },
    {
      name: 'American Traditional',
      category: 'American Traditonal'
    },
    {
      name: 'Color',
      category: 'Color'
    },
    {
      name: 'Color',
      category: 'Color'
    },
    {
      name: 'Color',
      category: 'Color'
    },
    {
      name: 'Color',
      category: 'Color'
    },
    {
      name: 'Color',
      category: 'Color'
    },
    {
      name: 'Color',
      category: 'Color'
    },
    {
      name: 'Black & Grey',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey',
      category: 'Black & Grey'
    },
    {
      name: 'Realism',
      category: 'Realism'
    },
    {
      name: 'Realism',
      category: 'Realism'
    },
    {
      name: 'Realism',
      category: 'Realism'
    },
    {
      name: 'Realism',
      category: 'Realism'
    },
    {
      name: 'Realism',
      category: 'Realism'
    },
    {
      name: 'Realism',
      category: 'Realism'
    },
    {
      name: 'Japanese',
      category: 'Japanese'
    },
    {
      name: 'Japanese',
      category: 'Japanese'
    },
    {
      name: 'Japanese',
      category: 'Japanese'
    },
    {
      name: 'Japanese',
      category: 'Japanese'
    },
    {
      name: 'Japanese',
      category: 'Japanese'
    },
    {
      name: 'Japanese',
      category: 'Japanese'
    },
  ])


const currentPhotos = photos.filter(photo => photo.catergory === category)

return (
  <div>
    <div className="flex-row">
      {currentPhotos.map((image, i) => (
        <img 
        src={require(`../../image/tattoo ideas/${category}/${i}.jpg`).default}
        alt={image.name}
        className='img-thumbnail mx-1'
        key={image.name}
        />
      ))}
    </div>
  </div>
)
}

export default Photolist;