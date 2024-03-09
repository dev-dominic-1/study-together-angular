import {PostStat} from "../app/core/components/post-card/post-stat-icon/PostStat";

export class Post {
  username!: string
  timestamp!: string
  content!: string
  images?: any[]
  stat?: PostStat
  liked?: boolean

  constructor(username: string, timestamp?: string, content?: string, images?: any[], stat?: PostStat) {
    this.username = username
    this.timestamp = timestamp ?? new Date()?.toLocaleString()
    this.content = content ?? ''
    this.images = images
    this.stat = stat
  }

}
