import ReactOnRails from 'react-on-rails'

export default {
  /**
   * Post data
   *
   * @returns {Promise} - Result of post.
   */
  post (path, body) {
    return fetch(path, {
      method: 'POST',
      credentials: 'include',
      headers: ReactOnRails.authenticityHeaders({
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(body)
    }).then(function (response) {
      if (response.ok) {
        return response.json()
      }
      throw new Error(response.status)
    })
  }
}
