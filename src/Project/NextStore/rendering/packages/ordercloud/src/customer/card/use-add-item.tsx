import type { AddItemHook } from '../../../../commerce/src/types/customer/card'
import type { MutationHook } from '../../../../commerce/src/utils/types'

import { useCallback } from 'react'
import useAddItem, { UseAddItem } from '../../../../commerce/src/customer/card/use-add-item'
import useCards from './use-cards'

export default useAddItem as UseAddItem<typeof handler>

export const handler: MutationHook<AddItemHook> = {
  fetchOptions: {
    url: '/api/customer/card',
    method: 'POST',
  },
  async fetcher({ input: item, options, fetch }) {
    const data = await fetch({
      ...options,
      body: { item },
    })

    return data
  },
  useHook: ({ fetch }) =>
    function useHook() {
      const { mutate } = useCards()

      return useCallback(
        async function addItem(input) {
          const data = await fetch({ input })

          await mutate([data], false)

          return data
        },
        [fetch, mutate]
      )
    },
}
