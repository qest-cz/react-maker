export default (componentName: string) => {
  return `import React from 'react';
import { Wrapper } from './styled';

interface Props {
}

const ${componentName} = (props: Props) => {
    return <Wrapper></Wrapper>;
};

export default ${componentName};
`;
};
