import { getTransItems } from '../../../services/getTransItems';
import { useTransStore } from '../../../zustand/useTransStore';
import { useSqlErrorStore } from '../../../zustand/useSqlErrorStore';

const useAccountBook = () => {
  const { sqlError, setSqlError } = useSqlErrorStore();
  const { amountList, setTransWithFetchData: setTrans } = useTransStore();

  const fetchData = async () => {
    const { data, error } = (await getTransItems()) as any;

    if (error) {
      setSqlError(error);
      setTrans([]);
      console.log(sqlError);
    }
    if (data) {
      setTrans(data);
      setSqlError(null);
    }
  };

  return { amountList, fetchData };
};

export { useAccountBook };
