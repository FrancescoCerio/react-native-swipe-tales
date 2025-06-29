import { DeviceEventEmitter } from 'react-native'

export enum EventNames {
  storyActiveIndex = 'story/activeIndex',
  storyOpen = 'story/open',
  storyProgressPause = 'story/progress/pause',
  storyProgressPlay = 'story/progress/play',
  storySwipeEnd = 'story/swipe/end',
  storySwipeStart = 'story/swipe/start',
}

// events
export const Events = DeviceEventEmitter
