import { FC, useEffect, useState } from 'react'

import './App.css'


interface CardData {
  title: string
  key:string
}

interface CardProps {
  data: CardData
}

const enum stateEnum {
  /**抢购*/
  PanicBuying = '抢购',
  /**已抢购*/
  RushedToPurchase = '已抢购'
}

const useCountDown = (initTime:number): [number, boolean] => {

  const [clock, setClock] = useState<number>(initTime)
  const [flag, setFlag] = useState<boolean>(false)

  // 定时器
  useEffect(() => {
    let timer: any
    if (clock === 0) {
      setFlag(true)
    }
    if (!flag) {
      timer = setInterval(() => {
        setClock(clock - 1)
      }, 1000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [clock, flag])

  return [clock, flag]

}

function App() {

  const [clock, flag] = useCountDown(10)

  const cardDataList: CardData[] = [
    {key:'1', title: '杭州市通用5元卷' },
    {key:'2' ,title: '杭州市10元卷' },
  ]


  function onBuy(e: any) {
    if (clock > 0 || e.target.innerHTML === stateEnum.RushedToPurchase) {
      return false
    }
    e.target.innerHTML = '抢购中...'
    setTimeout(() => {
      e.target.innerHTML = stateEnum.RushedToPurchase
    }, 1000)
  }

  const Card: FC<CardProps> = (props) => {
    const { data } = props
    return <div className='card'>
      <div className='title'>{data.title}</div>
      <div className='buy' onClick={onBuy} >{ flag ? stateEnum.PanicBuying: clock + 's'}</div>
    </div>
  }

  return (
    <>
      {cardDataList.map((c) => {
        return <Card data={c} key={c.key} />
      })}
    </>
  )
}

export default App
