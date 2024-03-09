export default class ApiQueryParameters {

  #parameters: {[key: string]: string}

  constructor (initParams = {}) {
    this.#parameters = initParams
  }

  addParameter (key: string, value: any) {
    this.#parameters[key] = value
  }

  removeParameter (key: string) {
    delete this.#parameters[key]
  }

  toQueryString () {
    let result = Object.entries(this.#parameters).reduce(
      (acc: string[], [key, value]): string[] => [...acc, `${key}=${value}`], []
    )
    return `?${result.join('&&')}`
  }
}
