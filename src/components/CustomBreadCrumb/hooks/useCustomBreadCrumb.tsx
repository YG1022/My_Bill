import { useLocation } from 'react-router-dom';
import { ROUTES_PATH_NAME } from '../../../constants/routes';

const useCustomBreadCrumb = () => {
  const location = useLocation();

  const routes = location.pathname
    .split('/')
    .map((path) => ({
      path,
      breadcrumbName: ROUTES_PATH_NAME[path] || path,
    }));

  return { routes };
};

export { useCustomBreadCrumb };