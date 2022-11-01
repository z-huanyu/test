import { Row, Col, Badge } from 'antd'
import './index.css'
import Image from '../../assets/image.jpg';
import { dataObj } from "../../typings";
import { getDateFormat } from '../../utils';


interface listProps {
    datalist: dataObj
}
const List = (props: listProps) => {
    const { datalist } = props
    return (

        <div className="card">
            <div style={{ width: 100, display: 'flex' }}>
                <img className="image" src={Image} alt="404" />
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 15 }}>{datalist.prjName}</div>
                <div>项目经理：{datalist.prjManager}</div>
                <div>立项日期：{getDateFormat(datalist.prjStartDate)}</div>
                {datalist.projectStatus === 'processing' ? <div >任务: {datalist.taskCount}完成: {datalist.taskDoneCount}进行: {datalist.taskDoingCount}</div> : ''}
            </div>
            <div style={{ width: 70, }}>
                <div style={{ fontWeight: 700 }}>
                    {<Badge color={datalist.projectStatus === 'processing' ? 'blue' : 'red'} text={datalist.projectStatus === 'processing' ? '进行中' : '审核中'} />}
                </div>
                <div></div>
            </div>
        </div >

    )
}
export default List