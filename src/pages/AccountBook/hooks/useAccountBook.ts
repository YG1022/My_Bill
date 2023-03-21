import { useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { getTransItems } from '../../../services/getTransItems';
import { useTransStore } from '../../../zustand/useTransStore';

const useAccountBook = () => {
  const [error, setError] = useState<PostgrestError>(null);
  const { amountList, setTrans } = useTransStore();

  const fetchData = async () => {
    const { data, error: sqlError } = await getTransItems() as any;

    if (sqlError) {
      setError(sqlError);
      setTrans([]);
      console.log(error);
    }
    if (data) {
      setTrans(data);
      setError(null);
    }
  };

  return { amountList, fetchData };
};

export { useAccountBook };
