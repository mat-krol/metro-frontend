import React from 'react';

import useCountdown from '../../../../helpers/hooks/countdown/useCountdown';
import ProgressNumerical from '../../../../ui/progress/numerical/ProgressNumerical';

function AppHeaderTimer({ duration, finishQuiz }) {
  const countdown = useCountdown({ duration: duration, interval: 1000, onEnd: finishQuiz })

  return (
    <ProgressNumerical
      text={countdown.secsRemaining(0)}
    />
  )
}

export default AppHeaderTimer