import type { AddItemHook } from '../../../commerce/src/types/cart'
import type { MutationHook } from '../../../commerce/src/utils/types'

import { useCallback } from 'react'
import { CommerceError } from '../../../commerce/src/utils/errors'
import useAddItem, { UseAddItem } from '../../../commerce/src/cart/use-add-item'
import useCart from './use-cart'

export default useAddItem as UseAddItem<typeof handler>

export const handler: MutationHook<AddItemHook> = {
  fetchOptions: {
    url: '/api/cart',
    method: 'POST',
  },
  async fetcher({ input: item, options, fetch }) {
    if (
      item.quantity &&
      (!Number.isInteger(item.quantity) || item.quantity! < 1)
    ) {
      throw new CommerceError({
        message: 'The item quantity has to be a valid integer greater than 0',
      })
    }

    const data = await fetch({
      ...options,
      body: { item },
    })

    return data
  },
  useHook: ({ fetch }) =>
    function useHook() {
      const { mutate } = useCart()

      return useCallback(
        async function addItem(input) {
          const data = await fetch({ input })

          await mutate(data, false)

          return data
        },
        [fetch, mutate]
      )
    },
}
