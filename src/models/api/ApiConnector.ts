import ApiQueryParameters from './ApiQueryParameters'
import {defaultResponseHandler} from './ApiResponseHandler'
export class ApiConnector {

  #context!: any
  #url: string = 'http://localhost:5150/'
  #baseEndpoint: string
  #endpoint: string
  #queryParameters: ApiQueryParameters
  #options: {} = {mode: 'cors'}
  #suppress: boolean = false
  #suppressCritical: boolean = false

  /**
   * Initialize an ApiConnector with a given endpoint, additional path for url
   * and optionally an `ApiQueryParameters` object (can be defined later)
   * @param context Context provided by a VueComponent for error handling
   * @param {String} endpoint Endpoint of corresponding API controller
   * @param {Array<String>} adtlUrl Additional route information
   * @param queryParameters
   */
  constructor (context: any, endpoint: string, adtlUrl?: string[], queryParameters: ApiQueryParameters = new ApiQueryParameters()) {
    this.#context = context
    this.#baseEndpoint = endpoint
    this.#endpoint = ['api', endpoint, ...(adtlUrl ?? [])].join('/')
    this.#queryParameters = queryParameters
  }

  getContext () {
    return this.#context
  }

  getQueryParameters () {
    return this.#queryParameters
  }

  suppressErrors (bool = true) {
    this.#suppress = bool
    return this
  }

  suppressCriticalErrors (bool = true) {
    this.#suppressCritical = bool
    return this
  }

  setQueryParameters (parameters = {}) {
    if (parameters instanceof ApiQueryParameters) this.#queryParameters = parameters
    else this.#queryParameters = new ApiQueryParameters(parameters)
    return this
  }

  withAdditionalUrl (...adtlUrl: string[]) {
    this.#endpoint = ['api', this.#baseEndpoint, ...adtlUrl].join('/')
    return this
  }

  #getQueryResource = () => {
    return `${this.#url}${this.#endpoint}${this.#queryParameters?.toQueryString() ?? ''}`
  }
  async get () {
    return await defaultResponseHandler(
      this.#context,
      fetch(this.#getQueryResource(), {...this.#options, method: 'GET'}),
      this.#suppress,
      this.#suppressCritical
    )
  }

  async save () {
    // defaultResponseHandler(fetch())
  }
}
