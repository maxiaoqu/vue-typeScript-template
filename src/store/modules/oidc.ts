import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface UserState {
  user: null,
  scopes: null,
  error: null
}

/*
@Module()
  参数一：module名称，开启命名空间后会以name为命名空间
  参数二：是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网
  参数三：是否开启命名空间，如果你的模块很多，强烈建议开启
  参数四：挂载的store目标
*/
@Module({ name: 'user', dynamic: true, namespaced: true, store })
class User extends VuexModule implements UserState {
  // state
  public user = null
  public scopes = null
  public error = null

  // get
  get getToken() {
    return this.user
  }

  get getUserId() {
    return this.scopes
  }

  get getUserName() {
    return this.error
  }

  // mutations
  @Mutation
  private SET_TOKEN(token: string) {
    this.user = token
  }

  @Mutation
  private SET_USERID(uid: string) {
    this.scopes = uid
  }

  @Mutation
  private SET_USERNAME(name: string) {
    this.error = name
  }

  // actions
  @Action
  public async setUserInfo(user: any) {
    if (user) {
      this.SET_USERID(user.id)
      this.SET_USERNAME(user.name)
      this.SET_TOKEN(user.token)
    }
  }
}

export const UserModule = getModule(User)

export class OidcState {
}
