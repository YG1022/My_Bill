import { useLocation } from 'react-router-dom';
import { ROUTES_PATH_NAME } from '../../../constants/routes';

const useCustomBreadCrumb = () => {
  const numberReg = /^\d+$/;
  const location = useLocation();
  const routes = location.pathname
    .split('/')
    .filter((path) => !numberReg.test(path))
    .map((path) => ({
      path,
      breadcrumbName: ROUTES_PATH_NAME[path] || path,
    }));

  return { routes };
};

export { useCustomBreadCrumb };