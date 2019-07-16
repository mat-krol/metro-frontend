import React from 'react';
// import { executeIfFunction } from '../../utils/component/utilsComponent';

const executeIfFunction = (callback, ...args) => {
  try {
    if (typeof callback === 'function') {
      return callback(...args)
    }
  } catch (err) {
    console.log(err)
  }
}

function useCountdown({ duration, interval = 1000, onEnd } = {}) {
  const [remaining, setRemaining] = React.useState(duration)
  const [timeout, updateTimeout] = React.useState()

  const decrementRemaining = () => (
    remaining > interval
      ? setRemaining(remaining - interval)
      : handleTimeoutEnd()
  )

  const handleTimeoutEnd = () => {
    clearTimeout(timeout)
    // Only trigger onEnd callback if remaining is not already 0
    if (remaining > 0) {
      setRemaining(0)
      executeIfFunction(onEnd)
    }
  }

  // Reset remaining on changes to duration
  React.useEffect(() => {
    setRemaining(duration)
  }, [duration])

  // Set timeout for next decrement on changes to either
  //    duration or remaining
  React.useEffect(() => {
    clearTimeout(timeout)   // clear before setting a new one
    const newTimeout = setTimeout(decrementRemaining, interval)
    updateTimeout(newTimeout)
    return function cleanup() {
      [timeout, newTimeout].forEach(handler => clearTimeout(handler))
    }
  }, [duration, remaining, interval]) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    duration,
    finished: remaining === 0,
    remaining,
    pctRemaining: 100 * remaining / duration,
    secsRemaining: (n = 0) => (remaining/1000).toFixed(n)
  }
}

export default useCountdown;