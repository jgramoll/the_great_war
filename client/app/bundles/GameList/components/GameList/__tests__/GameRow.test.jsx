import Subject from '../GameRow'
import ReactTestUtils from 'react-dom/test-utils'
import { drill, m } from 'react-drill'

describe('GameList::components::GameList::GameRow', function () {
  const game = {
    name: 'Best Game',
    gameType: 'demo'
  }
  const subject = ReactTestUtils.renderIntoDocument(Subject({ game }))

  // test fails with [] instead of Array
  // eslint-disable-next-line no-array-constructor
  Array('name', 'gameType').forEach(function (field) {
    it(`renders game ${field}`, function () {
      expect(drill(subject).has('h2', m.hasText(game[field]))).to.be.true
    })
  })
})
