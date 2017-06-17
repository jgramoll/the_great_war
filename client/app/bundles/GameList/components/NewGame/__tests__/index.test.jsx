import React from 'react'
import Subject from '../index'
import ReactTestUtils from 'react-dom/test-utils'
import { drill, m } from 'react-drill'
import sinon from 'sinon'

import {
    IntlProvider,
} from 'react-intl';

describe('NewGame::components::NewGame', function() {
  const intlProvider = new IntlProvider({locale: 'en'});
  const { intl } = intlProvider.getChildContext();

  const subject = ReactTestUtils.renderIntoDocument(
    <Subject.WrappedComponent
      intl={intl}
      createGame={sinon.stub()}
    />
  )

  describe('submit form', function() {
    it('calls createGame with name', function() {
      drill(subject).find('#name').fillIn('poo')
      drill(subject).find('input[type="submit"]').click()
      expect(subject.props.createGame.called).to.be.true

      drill(subject).find('#name').fillIn('')
    })

    context('no name', function() {
      it('renders error', function() {
        drill(subject).find('input[type="submit"]').click()
      })
    })

    context('failure', function() {
      it('renders error', function() {

      })
    })
  })
})