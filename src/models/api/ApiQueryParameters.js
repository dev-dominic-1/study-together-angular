export default class ApiQueryParameters {

  #parameters

  constructor (initParams = {}) {
    this.#parameters = initParams
  }

  addParameter (key, value) {
    this.#parameters[key] = value
  }

  removeParameter (key) {
    delete this.#parameters[key]
  }

  toQueryString () {
    let result = Object.entries(this.#parameters).reduce(
      (acc, [key, value]) => [...acc, `${key}=${value}`], []
    )
    return `?${result.join('&&')}`
  }
}