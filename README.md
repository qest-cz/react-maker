# React maker


[![Version](https://vsmarketplacebadge.apphb.com/version/Qest-cz.react-maker.svg)](https://marketplace.visualstudio.com/items?itemName=Qest-cz.react-maker)
[![Install](https://vsmarketplacebadge.apphb.com/installs/Qest-cz.react-maker.svg)](https://marketplace.visualstudio.com/items?itemName=Qest-cz.react-maker)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/Qest-cz.react-maker.svg)](https://marketplace.visualstudio.com/items?itemName=Qest-cz.react-maker)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/Qest-cz.react-maker.svg)](https://marketplace.visualstudio.com/items?itemName=Qest-cz.react-maker&ssr=false#review-details)

This extension creates a function component in a named folder with index.tsx/{componentName}.tsx

## Usages

![Usage](images/usage.gif)

You can create a component either by typing `Create component` in the vscode command palette or by right-clicking any folder in the tree view.

```js
import React from 'react';
        
interface Props {
}
        
const ShowCase = (props: Props) => {
    return null;
};
        
export default ShowCase;
```

## Configuration
-   `reactMaker.useComponentNameAsFileName`: If filename should be name of component or index.tsx. Default value is index.tsx.