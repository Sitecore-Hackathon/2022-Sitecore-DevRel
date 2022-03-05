import { MutationHook } from '../../../commerce/src/utils/types'
import useLogout, { UseLogout } from '../../../commerce/src/auth/use-logout'

export default useLogout as UseLogout<typeof handler>

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher() {
    return null
  },
  useHook:
    ({ fetch }) =>
    () =>
    async () => {},
}
