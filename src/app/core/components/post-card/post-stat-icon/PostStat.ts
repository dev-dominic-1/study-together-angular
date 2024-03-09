export class PostStat {

  static readonly DOUBLE_CHECK = new PostStat('DOUBLE_CHECK', 'Double Check', 'done_all')
  static readonly RESOURCES = new PostStat('RESOURCES', 'Resources', 'description')
  static readonly BOOKMARK = new PostStat('BOOKMARK', "Bookmark", 'bookmark_border')

  key!: string
  text!: string
  icon!: string

  constructor(key: string, text: string, icon: string) {
    this.key = key
    this.text = text
    this.icon = icon
  }
}
