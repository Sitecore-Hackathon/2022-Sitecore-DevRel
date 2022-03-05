import type {
  HookFetcherContext,
  MutationHookContext,
} from '../../../../commerce/src/utils/types'
import type { UpdateItemHook, Card } from '../../../../commerce/src/types/customer/card'

import { useCallback } from 'react'

import { MutationHook } from '../../../../commerce/src/utils/types'
import useUpdateItem, {
  UseUpdateItem,
} from '../../../../commerce/src/customer/card/use-update-item'

import useCards from './use-cards'

export type UpdateItemActionInput<T = any> = T extends Card
  ? Partial<UpdateItemHook['actionInput']>
  : UpdateItemHook['actionInput']

export default useUpdateItem as UseUpdateItem<any>

export const handler: MutationHook<any> = {
  fetchOptions: {
    url: '/api/customer/card',
    method: 'PUT',
  },
  async fetcher({
    input: { itemId, item },
    options,
    fetch,
  }: HookFetcherContext<UpdateItemHook>) {
    return await fetch({
      ...options,
      body: { itemId, item },
    })
  },
  useHook: ({ fetch }: MutationHookContext<UpdateItemHook>) =>
    function useHook() {
      const { mutate } = useCards()

      return useCallback(
        async function updateItem(input) {
          const data = await fetch({ input })

          await mutate([], false)

          return data
        },
        [fetch, mutate]
      )
    },
}
