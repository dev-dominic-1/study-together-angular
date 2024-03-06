/**
 * Default response handler for API
 * @param context Reference to `this` from parent component
 * @param {Promise<*>} promise Promise from fetch
 * @param {Boolean} suppress Suppress non-critical errors
 * @param {Boolean} suppressCritical Suppress critical errors
 */
export const defaultResponseHandler = async (context, promise, suppress, suppressCritical) => {
  let r = await promise
  return ApiResponseHandler.from(context, r, suppress, suppressCritical)
}

export default class ApiResponseHandler {

  statusCode
  body

  /** Suppress non-critical errors like NOT_FOUND */
  #suppress
  /** Suppress all errors, including 5xx response codes */
  #suppressCritical

  constructor (statusCode, body, suppress, suppressCritical) {
    this.statusCode = statusCode
    this.body = body
    this.#suppress = suppress
    this.#suppressCritical = suppressCritical
  }

  /**
   *
   * @param {VueComponent} context
   * @param response
   * @param suppress
   * @param suppressCritical
   * @returns {Promise<ApiResponseHandler>}
   */
  static async from (context, response, suppress, suppressCritical) {
    const {ok: success} = response
    let bodyPromise = await (success ? response.json() : response.text())
    if (!success) {
      try {
        if (suppressCritical) throw Error('Skip logging')
        Object.values(JSON.parse(bodyPromise).errors).forEach(v => {
          context.$store.commit('addApiError', ...v)
        })
      } catch { // IF response is NOT a JSON Object, just print the response into the error context
        if (!suppress) context.$store.commit('setApiErrors', [bodyPromise])
      }
    }
    return new ApiResponseHandler(response.status, bodyPromise, suppress, suppressCritical)
  }

}