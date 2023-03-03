import { useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { getBillItems } from '../services/getBillItems';

const useAccountBook = () => {
  const [error, setError] = useState<PostgrestError>(null);
  const [amountList, setAmountList] = useState([]);

  const fetchData = async () => {
    const { data, error: sqlError } = await getBillItems();
    console.log(data);

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
