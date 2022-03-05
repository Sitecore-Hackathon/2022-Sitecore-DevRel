import type {
  MutationHookContext,
  HookFetcherContext,
} from '../../../../commerce/src/utils/types'
import type { Address, RemoveItemHook } from '../../../../commerce/src/types/customer/address'

import { useCallback } from 'react'

import { ValidationError } from '../../../../commerce/src/utils/errors'
import useRemoveItem, {
  UseRemoveItem,
} from '../../../../commerce/src/customer/address/use-remove-item'

import useAddresses from './use-addresses'

export type RemoveItemFn<T = any> = T extends Address
  ? (input?: RemoveItemActionInput<T>) => Promise<Address | null | undefined>
  : (input: RemoveItemActionInput<T>) => Promise<Address | null>

export type RemoveItemActionInput<T = any> = T extends Address
  ? Partial<RemoveItemHook['actionInput']>
  : RemoveItemHook['actionInput']

export default useRemoveItem as UseRemoveItem<typeof handler>

export const handler = {
  fetchOptions: {
    url: '/api/customer/address',
    method: 'DELETE',
  },
  async fetcher({
    input: { itemId },
    options,
    fetch,
  }: HookFetcherContext<RemoveItemHook>) {
    return await fetch({ ...options, body: { itemId } })
  },
  useHook: ({ fetch }: MutationHookContext<RemoveItemHook>) =>
    function useHook<T extends Address | undefined = undefined>(
      ctx: { item?: T } = {}
    ) {
      const { item } = ctx
      const { mutate } = useAddresses()
      const removeItem: RemoveItemFn<Address> = async (input) => {
        const itemId = input?.id ?? item?.id

        if (!itemId) {
          throw new ValidationError({
            message: 'Invalid input used for this operation',
          })
        }

        const data = await fetch({ input: { itemId } })

        await mutate([], false)

        return data
      }

      return useCallback(removeItem as RemoveItemFn<T>, [fetch, mutate])
    },
}
