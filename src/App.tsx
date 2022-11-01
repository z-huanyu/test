import { SetStateAction, useEffect, useState } from 'react'
import { Radio, Col, Row } from 'antd'
import './App.css'
import List from './component/List'
import Card from './component/Card'
import { dataObj } from './typings'
import axios from 'axios'


function App() {
  const [btnValue, setBtnValue] = useState<string>('card')
  const [data, setData] = useState<dataObj[]>([])


  useEffect(() => {
    axios.get('/api/getDataList').then((res) => {
      if (res && res.data) {
        setData(res.data)
      }
    })
  }, [])

  return (
    <div className="App">
      <div className='content'>
        <div style={{ textAlign: 'right', paddingBottom: 20 }}>
          <Radio.Group defaultValue="card" onChange={(e: any) => setBtnValue(e.target.value)}>
            <Radio.Button value="card">卡片</Radio.Button>
            <Radio.Button value="list">列表</Radio.Button>
          </Radio.Group>
        </div>
        <Row gutter={[16, 16]} wrap>
          {
            btnValue === 'card'
              ?
              data && data.map((item, index) => {
                return (
                  <Col sm={24} lg={12} xl={8} xxl={6} key={item.guid}>
                    <Card datalist={item} key={index}></Card>
                  </Col>
                )
              })
              :
              <List datalist={data}></List>
          }
        </Row>


      </div>
    </div>
  )
}

export default App
