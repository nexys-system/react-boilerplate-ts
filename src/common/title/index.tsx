import React from 'react';

import Typography from '@material-ui/core/Typography';

type Type = 'pageTitle' | 'subtitle' | 'groupTitle';

interface Props {
  title: string;
  type: Type;
  className?: string;
}

export default (props: Props) => {
  const { title, type, className } = props;

  const getComponentByType = (): 'h1' | 'h2' | 'h3' => {
    if (type === 'subtitle') return 'h2';
    if (type === 'groupTitle') return 'h3';
    return 'h1';
  };

  const getVariantByType = () => {
    if (type === 'subtitle') return 'h5';
    if (type === 'groupTitle') return 'h6';
    return 'h4';
  };

  return (
    <Typography
      component={getComponentByType()}
      variant={getVariantByType()}
      className={`${className ? ' ' + className : ''}`}
    >
      {title}
    </Typography>
  );
};
