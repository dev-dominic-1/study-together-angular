export enum ContentOptionsEnum {
  MOST_RECENT = 'MOST_RECENT',
  MOST_RELEVANT = 'MOST_RELEVANT'
}

export class ContentOptions {

  static readonly MOST_RECENT = new ContentOptions(ContentOptionsEnum.MOST_RECENT, 'Most Recent', true)
  static readonly MOST_RELEVANT = new ContentOptions(ContentOptionsEnum.MOST_RELEVANT, 'Most Relevant')

  static readonly values: ContentOptions[] = [ContentOptions.MOST_RECENT, ContentOptions.MOST_RELEVANT]

  static fromEnum(v: ContentOptionsEnum | string): ContentOptions | undefined {
    return this.values.find(val => val.key === v)
  }

  key!: string
  text!: string
  disabled: boolean = false

  constructor(key: string, text: string, disabled: boolean = false) {
    this.key = key
    this.text = text
    this.disabled = disabled
  }

}
