import React, { useState } from "react";

const Photolist = ({ category }) => {
  const [photos] =useState([
    {
      name: 'AmericanTraditonal1',
      category: 'American Traditional'
    },
    {
      name: 'AmericanTraditional2',
      category: 'American Traditional'
    },
    {
      name: 'AmericanTraditional3',
      category: 'American Traditional'
    },
    {
      name: 'AmericanTraditional4',
      category: 'American Traditional'
    },
    {
      name: 'AmericanTraditional5',
      category: 'American Traditional'
    },
    {
      name: 'AmericanTraditional6',
      category: 'American Traditional'
    },
    {
      name: 'Color1',
      category: 'Color'
    },
    {
      name: 'Color2',
      category: 'Color'
    },
    {
      name: 'Color3',
      category: 'Color'
    },
    {
      name: 'Color4',
      category: 'Color'
    },
    {
      name: 'Color5',
      category: 'Color'
    },
    {
      name: 'Color6',
      category: 'Color'
    },
    {
      name: 'Black & Grey1',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey2',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey3',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey4',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey5',
      category: 'Black & Grey'
    },
    {
      name: 'Black & Grey6',
      category: 'Black & Grey'
    },
    {
      name: 'Realism1',
      category: 'Realism'
    },
    {
      name: 'Realism2',
      category: 'Realism'
    },
    {
      name: 'Realism3',
      category: 'Realism'
    },
    {
      name: 'Realism4',
      category: 'Realism'
    },
    {
      name: 'Realism5',
      category: 'Realism'
    },
    {
      name: 'Realism6',
      category: 'Realism'
    },
    {
      name: 'Japanese1',
      category: 'Japanese'
    },
    {
      name: 'Japanese2',
      category: 'Japanese'
    },
    {
      name: 'Japanese3',
      category: 'Japanese'
    },
    {
      name: 'Japanese4',
      category: 'Japanese'
    },
    {
      name: 'Japanese5',
      category: 'Japanese'
    },
    {
      name: 'Japanese6',
      category: 'Japanese'
    },
  ])
  

const currentPhotos = photos.filter(photo => photo.category === category)



return (
  <div className="container d-flex gallery-block">
    <div className="row d-flex justify-content-around">
      {currentPhotos.map((image, i) => (
        <>
        <img 
        src={require(`../image/tattooIdeas/${category}/${i}.jpg`)}
        alt={image.name}
        className='gallery-images col-4'
        key={image.name}
        />
        </>
      ))}
    </div>
  </div>
)
}

export default Photolist;