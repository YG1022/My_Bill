import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { fetchUser } from '../../../constants/types';
import createUser from '../../../services/createUser';
import { supabaseClient } from '../../../supabaseClient';

const useRegistration = form => {
  const navigateTo = useNavigate();

  const toNextStep = async () => {
    const { accountname } = form.getFieldsValue();
    const { data, error } = await supabaseClient
      .from('users')
      .select<any, fetchUser>()
      .eq('account_name', accountname);

    if (data.length > 0) {
      form.setFields([
        {
          name: 'accountname',
          errors: [
            'This account name has been used. Please sign in directly or choose another account name.',
          ],
        },
      ]);
      return;
    } else if (error) {
      alert('Something wrong happened. Please try again later.');
      return;
    } else {
      navigateTo(ROUTES.profilesEdit);
      await createUser(form.getFieldsValue());
    }
  };

  return { toNextStep };
};

export default useRegistration;
