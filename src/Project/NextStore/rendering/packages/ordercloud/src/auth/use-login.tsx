import { MutationHook } from '../../../commerce/src/utils/types'
import useLogin, { UseLogin } from '../../../commerce/src/auth/use-login'

export default useLogin as UseLogin<typeof handler>

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher() {
    return null
  },
  useHook: () => () => {
    return async function () {}
  },
}
