import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail} from "@cloudinary/url-gen/actions/resize";

// Import plugins
import {lazyload,  responsive, placeholder} from '@cloudinary/react';

const Img = ({uploadedImage}) => {
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dw0tdvwlh'
        }
      }); 
        // Use the image with public ID, 'front_face'.
  const myImage = cld.image('uploadedImage');
myImage
  .resize(thumbnail().width(100).height(100))  
  return (
    <>
     <AdvancedImage cldImg={myImage}
     plugins={[lazyload(), responsive(), placeholder({mode: `predominat-color`})]}/>
    </>
  )
}

export default Img
