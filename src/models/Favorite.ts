export default class Favorite {

  title!: string
  photoUrl!: string

  constructor(photoUrl: string, title?: string) {
    this.title = title ?? 'Title'
    this.photoUrl = photoUrl
  }

}
