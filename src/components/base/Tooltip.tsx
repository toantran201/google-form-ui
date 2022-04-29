import React from 'react'

interface TooltipProps {
  label: string
  position?: string
  delay?: number
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  let timeout: number | undefined
  const [onShow, setOnShow] = React.useState(false)

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setOnShow(true)
    }, props.delay || 200)
  }

  const hideTooltip = () => {
    clearInterval(timeout)
    setOnShow(false)
  }

  return (
    <div
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      className={'tooltip-container'}
    >
      {props.children}
      {onShow && (
        <div className={`tooltip-block ${props.position || 'bottom'}`}>
          {props.label}
        </div>
      )}
    </div>
  )
}

export default Tooltip
