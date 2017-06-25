import Subject from '../index'
import sinon from 'sinon'

describe('libs::requestsManager', function () {
  beforeEach(function () {
    this.server = sinon.fakeServer.create()
  })

  afterEach(function () {
    this.server.restore()
  })

  describe('send', function () {
    it('sets method', function () {
      const method = 'POST'
      Subject.send(method)
      expect(this.server.requests.length).to.eq(1)
      expect(this.server.requests[0].method).to.eq(method)
    })

    it('sets path', function () {
      const url = '/api/data'
      Subject.send(null, url)
      expect(this.server.requests.length).to.eq(1)
      expect(this.server.requests[0].url).to.eq(url)
    })

    it('decamelizes body', function () {
      const body = {
        testProp: 1
      }
      Subject.send('POST', null, body)
      expect(this.server.requests.length).to.eq(1)
      expect(this.server.requests[0].requestBody).to.eq(JSON.stringify({
        test_prop: 1
      }))
    })

    describe('response', function () {
      beforeEach(function () {
        this.server.configure({autoRespond: true})
      })

      it('is camelized', function () {
        this.server.respondWith([200,
          { 'Content-Type': 'application/json' },
          '{ "prop_test": 1 }'
        ])

        return Subject.send('GET').then(function (response) {
          expect(response).to.eql({
            propTest: 1
          })
        })
      })

      it('rejected on unsuccessful request', function () {
        return Subject.send('GET').should.be.rejected
      })
    })
  })

  describe('post', function () {
    it('send POST request', function () {
      Subject.post()
      expect(this.server.requests.length).to.eq(1)
      expect(this.server.requests[0].method).to.eq('POST')
    })
  })
})
