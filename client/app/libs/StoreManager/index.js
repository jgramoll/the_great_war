import RouterStoreFactory from './RouterStore'

const StoreManager = {
  initialize (props) {
    this.props = Object.assign({}, props)
  }
}

const RouterStore = function (attrs) {
  return RouterStoreFactory(StoreManager.props, attrs)
}

export default StoreManager
export {
  RouterStore
}
