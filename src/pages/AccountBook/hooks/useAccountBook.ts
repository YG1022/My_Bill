import { useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { getTransItems } from '../../../services/getTransItems';

const useAccountBook = () => {
  const [error, setError] = useState<PostgrestError>(null);
  const [amountList, setAmountList] = useState([]);

  const fetchData = async () => {
    const { data, error: sqlError } = await getTransItems();

    if (sqlError) {
      setError(sqlError);
      setAmountList([]);
      console.log(error);
    }
    if (data) {
      setAmountList(data);
      setError(null);
    }
  };

  return { amountList, fetchData };
};

export { useAccountBook };
