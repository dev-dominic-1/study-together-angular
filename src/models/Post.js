export default class {

  username
  timestamp
  content
  images
  stat

  constructor (username, timestamp, content, images = [], stat) {
    this.username = username
    this.timestamp = timestamp
    this.content = content
    this.images = images
    this.stat = stat
  }

  getUser (context) {
    return context.$store.state.users?.find(u => u.username = this.username) ?? {}
  }
}