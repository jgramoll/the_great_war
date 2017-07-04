import Subject, { RouterStore } from '../index'
import sinon from 'sinon'

describe('libs::StoreManager', function () {
  const props = { prop_name: '1' }
  Subject.initialize(props)

  describe('initialize', function () {
    it('sets props', function () {
      expect(Subject.props).to.eql(props)
    })
  })

  describe('RouterStore', function () {
    it('calls initialState with camelized props', function () {
      const initialState = sinon.stub()
      RouterStore({ initialState })

      sinon.assert.calledWith(initialState, {
        propName: '1'
      })
    })
  })
})
