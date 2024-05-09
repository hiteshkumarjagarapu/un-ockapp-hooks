import {useState} from 'react'
import {ImageSetting, Para} from './styledComponents'

const Unlock = () => {
  const [value, valueMeth] = useState(true)

  const butClick = () => {
    valueMeth(prev => !prev)
  }
  const butText = value ? 'Unlock' : 'Lock'
  return (
    <div>
      {value ? (
        <ImageSetting
          value={value}
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <ImageSetting
          value={value}
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      {value ? (
        <Para>Your Device is Locked</Para>
      ) : (
        <Para>Your Device is Unlocked</Para>
      )}
      <button type="button" onClick={butClick}>
        {butText}
      </button>
    </div>
  )
}

export default Unlock
