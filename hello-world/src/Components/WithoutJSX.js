import React from 'react';

const WithoutJSX = () => {
    
            // must return three parameters, tag name(div), attribibutes, and the children
     return React.createElement('div', null, 'Hello WithoutJSX' ,React.createElement('h1', null, 'Hello Without JSX output as JSX'));


     
}
 
export default WithoutJSX;