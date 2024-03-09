import {
  animate, AnimationAnimateMetadata, AnimationQueryMetadata,
  AnimationStyleMetadata,
  AnimationTransitionMetadata, AnimationTriggerMetadata, query,
  style,
  transition,
  trigger
} from "@angular/animations";

export default class AnimationBuilder {

  private name!: string
  private enter?:AnimationTransitionMetadata
  private leave?: AnimationTransitionMetadata

  constructor(name: string) {
    this.name = name
  }

  public setEnter (steps: (AnimationStyleMetadata | AnimationAnimateMetadata | AnimationQueryMetadata)[], isQuery?: boolean, stateChangeExpr?: string): AnimationBuilder {
    return this.setAnimation(':enter', steps, isQuery, stateChangeExpr)
  }

  public setLeave(steps: (AnimationStyleMetadata | AnimationAnimateMetadata | AnimationQueryMetadata)[], isQuery?: boolean, stateChangeExpr?: string): AnimationBuilder {
    return this.setAnimation(':leave', steps, isQuery, stateChangeExpr)
  }

  private setAnimation (selector: string, steps: (AnimationStyleMetadata | AnimationAnimateMetadata | AnimationQueryMetadata)[], isQuery?: boolean, stateChangeExpr?: string) {
    const setProperty: 'leave' | 'enter' = selector === ':leave' ? 'leave' : 'enter'
    if (isQuery) {
      this[setProperty] = transition(stateChangeExpr ?? '* <=> *', [
        query(selector, steps)
      ])
    } else this[setProperty] = transition(selector, steps)
    return this
  }

  public getTrigger(): AnimationTriggerMetadata {
    let steps: AnimationTransitionMetadata[] = []
    if (this.enter != null) steps.push(this.enter)
    if (this.leave != null) steps.push(this.leave)
    return trigger(this.name, steps)
  }

  public static start(name: string) {
    return new AnimationBuilder(name)
  }
}
