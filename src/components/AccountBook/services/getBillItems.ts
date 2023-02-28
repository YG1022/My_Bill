import { supabase } from '../../../supabaseClient';

const getBillItems = async (error, setError, setAmountList): Promise<void> => {
    const { data: bills, error: sqlError } = await supabase.from('bills').select();
    if (sqlError) {
        setError('Could not fetch the bills.');
        setAmountList(null);
        console.log(error);
    }
    if (bills) {
        setAmountList(bills);
        setError(null);
    }
};

export { getBillItems };
