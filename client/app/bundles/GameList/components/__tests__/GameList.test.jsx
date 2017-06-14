import React from 'react'
import Subject from '../GameList'
import ReactTestUtils from 'react-dom/test-utils'
import { drill, m } from 'react-drill'

import {
    IntlProvider,
} from 'react-intl';

describe('GameList::components::GameList', function() {
  const games = [
    {
      id: 1,
      name: 'First Game'
    },
    {
      id: 2,
      name: 'Best Game'
    },
    {
      id: 3,
      name: 'Worst Game'
    }
  ]
  const intlProvider = new IntlProvider({locale: 'en'});
  const { intl } = intlProvider.getChildContext();

  const subject = ReactTestUtils.renderIntoDocument(
    Subject.WrappedComponent({games, intl})
  )

  it('renders game rows', function() {
    expect(drill(subject).find('li').nodes.length).to.eq(3)
  })
})