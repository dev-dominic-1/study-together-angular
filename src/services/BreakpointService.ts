import {Injectable, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class BreakpointService implements OnDestroy {

  /**
   * Subscribe to this to pick up changes
   */
  currentBreakpointListener: Subject<string> = new Subject<string>() // Subscribe to this <---

  /**
   * Store a reference to the callback that handles our updates so `removeEventListener` works properly
   * with __1__ function namespace
   */
  readonly listenerCallbackWithContext: (() => void) = this.updateBreakpoint.bind(this)

  constructor() {
    window.addEventListener('resize', this.listenerCallbackWithContext)
    setTimeout(() => this.updateBreakpoint()) // Use setTimeout to wait out the async process
  }

  ngOnDestroy() {
    // Remove our event listener when the component using this service is destroyed. NO EVENT LISTENER STACKING
    window.removeEventListener('resize', this.listenerCallbackWithContext, false)
  }

  /**
   * Perform update to subscribed listener
   * @private
   */
  private updateBreakpoint(): void {
    console.log('UPDATING')
    const temp: string = window.getComputedStyle(document.getElementsByTagName('body')[0])
      .getPropertyValue('--current-breakpoint')
    this.currentBreakpointListener.next(temp)
  }

}

export const BREAKPOINT_OPTIONS: {DESKTOP: string, COMPACT_DESKTOP: string, TABLET: string, MOBILE: string, MOBILE_XS: string} = {
  DESKTOP: 'desktop',
  COMPACT_DESKTOP: 'compact-desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
  MOBILE_XS: 'mobile-xs'
}
