import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export const useOnUpdate = (effect: EffectCallback, deps?: DependencyList): void => {
  const initialMountRef = useRef(true)

  useEffect(() => {
    if (initialMountRef.current) {
      initialMountRef.current = false
    } else {
      effect()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
