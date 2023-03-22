import { getTransItems } from '../../../services/getTransItems';
import { useTransStore } from '../../../zustand/useTransStore';
import { useSqlErrorStore } from '../../../zustand/useSqlErrorStore';

const useAccountBook = () => {
  const { sqlError, setSqlError } = useSqlErrorStore();
  const { amountList, setTransWithFetchData } = useTransStore((state) => {
    return {
      amountList: state.amountList,
      setTransWithFetchData: state.setTransWithFetchData,
    };
  });

  const fetchData = async () => {
    const { data, error } = (await getTransItems(null)) as any;

    if (error) {
      setSqlError(error);
      setTransWithFetchData([]);
      console.log('Error: ' + sqlError.message);
    }
    if (data) {
      setTransWithFetchData(data);
      setSqlError(null);
    }
  };

  return { amountList, fetchData };
};

export { useAccountBook };
