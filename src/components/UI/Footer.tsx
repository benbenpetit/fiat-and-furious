import { useEffect, useState, useRef, FC } from 'react'
import ButtonOrange from './ButtonOrange'
import ButtonViolet from './ButtonViolet'
import ButtonSound from './ButtonSound'

interface Props {
  footerStart: Function
  footerSound: Function
  goRight: Function
  goLeft: Function
}

const Footer: FC<Props> = ({ footerStart, footerSound, goRight, goLeft }) => {
  const clickStart = () => {
    footerStart()
  }

  const clickSound = (isSoundActive: boolean) => {
    footerSound(isSoundActive)
  }

  useEffect(() => {}, [])

  return (
    <div className='footer'>
      <ButtonSound
        imgSrc='src/assets/img/sound-on.png'
        trigger={false}
        onPress={(isSoundActive: boolean) => {
          {
            clickSound(isSoundActive)
          }
        }}
      />
      <ButtonOrange
        imgSrc='src/assets/img/arrow-l.svg'
        trigger={true}
        onPress={() => goLeft()}
      />
      <ButtonOrange
        imgSrc='src/assets/img/arrow-r.svg'
        trigger={true}
        onPress={() => goRight()}
      />
      <ButtonViolet
        title='start'
        trigger={true}
        onPress={() => {
          clickStart()
        }}
      />
    </div>
  )
}

export default Footer
