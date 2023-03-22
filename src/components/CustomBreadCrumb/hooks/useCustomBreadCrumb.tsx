import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { breadcrumbNameMap } from '../../../constants/routes';

const useCustomBreadCrumb = () => {
  const location = useLocation();
  const numberReg = /^\d+$/;

  const pathSnippets = location.pathname
    .split('/')
    .filter(i => !numberReg.test(i))
    .filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      key: url,
      title: <NavLink to={url}>{breadcrumbNameMap[url]}</NavLink>,
    };
  });

  const breadcrumbItems = [
    {
      title: <NavLink to="/">Home</NavLink>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);

  return { breadcrumbItems };
};

export { useCustomBreadCrumb };
