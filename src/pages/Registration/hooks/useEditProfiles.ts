import { supabaseClient } from '../../../supabaseClient';
import createProfile from '../../../services/createProfile';
import { ROUTES } from '../../../constants/routes';
import { useNavigate } from 'react-router-dom';

const useEditProfiles = (form) => {
  const navigateTo = useNavigate();

  const finilizeProfiles = async () => {
    const { email, phonenumber, birthday, ...extraData } = form.getFieldsValue();
    const { data: emailData, error: emailError } = await supabaseClient
      .from('profiles')
      .select()
      .eq('email', email);
    const { data: phoneData, error: phoneError } = await supabaseClient
      .from('profiles')
      .select()
      .eq('phone_number', phonenumber);

    if (emailData.length > 0 || phoneData.length > 0) {
      if (emailData.length > 0) {
        form.setFields([
          {
            name: 'email',
            errors: ['This email has been used. Please choose another email.'],
          },
        ]);
      }
      if (phoneData.length > 0) {
        form.setFields([
          {
            name: 'phonenumber',
            errors: ['This phone number has been used. Please choose another phone number.'],
          },
        ]);
      }
    } else if (emailError || phoneError) {
      alert('Something wrong happened. Please try again later.');
      return;
    } else {
      const postData = {
        birthday: birthday?.format('YYYY/MM/DD'),
        email,
        phonenumber,
        ...extraData,
      };

      await createProfile(postData);
      navigateTo(ROUTES.home);
    }
  };

  const skipProfiles = async () => {
    await createProfile(form.getFieldsValue());
  };

  return { finilizeProfiles, skipProfiles };
};

export default useEditProfiles;