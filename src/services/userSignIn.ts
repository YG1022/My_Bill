import { fetchUser } from '../constants/types'
import repeatabilityCheck from './repeatabilityCheck'

const userSignIn = async (form): Promise<{ flag: boolean; checkData: fetchUser | null }> => {
  const { accountname, password } = form.getFieldsValue()
  const { nameCheck } = repeatabilityCheck(accountname, '', '')

  const { data, error } = await nameCheck()

  if (error) {
    console.log('Error: ' + error)
    return { flag: false, checkData: null }
  }

  return { flag: password === data[0]?.password, checkData: data[0] }
}

export default userSignIn
