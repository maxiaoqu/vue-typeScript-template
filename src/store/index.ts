import Vue from 'vue'
import Vuex from 'vuex'
import { AppState } from './modules/app'
import { UserState } from './modules/user'

Vue.use(Vuex)

export interface RootState {
  app: AppState
  user: UserState
}

export default new Vuex.Store<RootState>({})
