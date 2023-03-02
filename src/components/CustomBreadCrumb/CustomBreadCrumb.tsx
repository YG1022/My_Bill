import React from 'react';
import { Breadcrumb } from 'antd';
import { useCustomBreadCrumb } from './hooks/useCustomBreadCrumb';

const CustomBreadCrumb: React.FC = () => {
  const { routes } = useCustomBreadCrumb();

  return (
    <Breadcrumb className='site-breadcrumb' routes={routes}>
    </Breadcrumb>
  );
};

export default CustomBreadCrumb;