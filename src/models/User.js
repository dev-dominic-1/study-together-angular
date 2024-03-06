import ApiConnector from "./api/ApiConnector";

export default class User extends ApiConnector {

  #includeFriends = false
  #includePosts = false

  constructor (context) {
    super(context, 'user')
  }

  includeFriends (bool) {
    this.#includeFriends = bool
    return this
  }

  includePosts (bool) {
    this.#includePosts = bool
    return this
  }

  async getById (id) {
    if (isNaN(id)) this.getContext().$store.commit('setApiErrors', ['`id` parameter must be a number'])
    this.withAdditionalUrl(`${id}/include`)
    this.setQueryParameters({includeFriends: this.#includeFriends, includePosts: this.#includePosts})
    return await this.get()
  }

}
