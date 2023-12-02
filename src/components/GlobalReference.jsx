import React from 'react';
import { StoryblokComponent } from '@storyblok/react';

const GlobalReference = ({ blok }) => {
  return (
    <React.Fragment>
      {blok.reference.content.body.map(item => (
        <StoryblokComponent key={item._uid} blok={item} />
      ))}
    </React.Fragment>
  );
};

export default GlobalReference;
