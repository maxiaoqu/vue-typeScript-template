import Vue from 'vue'
import Vuex from 'vuex'
import { AppState } from './modules/app'
import { UserState } from './modules/user'
import { OidcState } from './modules/oidc'

Vue.use(Vuex)

Vue.use(Vuex)

export interface RootState {
  app: AppState
  user: UserState
  oidc: OidcState
}

export default new Vuex.Store<RootState>({})
