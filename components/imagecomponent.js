// components/ImageComponent.js
import { useEffect } from 'react';
import url from 'url';

const ImageComponent = () => {
  useEffect(() => {
    const imageUrl = 'https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png';

    const { hostname, pathname } = url.parse(imageUrl);

    console.log('Hostname:', hostname);
    console.log('Path:', pathname);
  }, []);

  return <div></div>;
};

export default ImageComponent;
