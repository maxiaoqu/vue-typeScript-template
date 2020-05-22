import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface AppState {
  size: string
}

/*
@Module()
  参数一：module名称，开启命名空间后会以name为命名空间
  参数二：是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网
  参数三：是否开启命名空间，如果你的模块很多，强烈建议开启
  参数四：挂载的store目标
*/
@Module({ name: 'app', dynamic: true, namespaced: true, store })

class App extends VuexModule implements AppState {
  // state
  public size = 'large' || 'medium'

  // actions
  get getSize() {
    return this.size
  }

  // mutations
  @Mutation
  private SET_SIZE(size: string) {
    this.size = size
  }

  // actions
  @Action
  public setSize(size: string) {
    this.SET_SIZE(size)
  }
}

export const AppModule = getModule(App)
