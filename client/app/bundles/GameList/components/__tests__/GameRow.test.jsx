import Subject from '../GameRow'
import ReactTestUtils from 'react-dom/test-utils'
import { drill, m } from 'react-drill'

describe('GameList::components::GameRow', function() {
  const game = {
    name: 'Best Game'
  }
  const subject = ReactTestUtils.renderIntoDocument(Subject({ game }))

  it('renders name', function() {
    expect(drill(subject).has('h2', m.hasText(game.name))).to.be.true
  })
})