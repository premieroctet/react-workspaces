import { init, RematchRootState } from '@rematch/core'
import models from './models'

export const store = init({
    models,
});
  
export type Store = typeof store
export type RootState = RematchRootState<typeof models>
