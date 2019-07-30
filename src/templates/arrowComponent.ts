export default (componentName: string) => {
  return `import React from 'react';

interface Props {
}

const ${componentName} = (props: Props) => {
    return null;
};

export default ${componentName};
`;
};
