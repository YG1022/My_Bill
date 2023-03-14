import React from 'react';
import { Breadcrumb } from 'antd';
import { useCustomBreadCrumb } from './hooks/useCustomBreadCrumb';

const CustomBreadCrumb: React.FC = () => {
  const { breadcrumbItems } = useCustomBreadCrumb();

  return <Breadcrumb className="site-breadcrumb" items={breadcrumbItems}></Breadcrumb>;
};

export default CustomBreadCrumb;
