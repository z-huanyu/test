import { Table, Badge } from 'antd'
import { dataObj } from '../../typings'
import { getDateFormat } from '../../utils'
import './index.css'

interface listProps {
    datalist: dataObj[]
}
const listColumn = [
    {
        title: '所属品类',
        dataIndex: 'productCategory',
        key: 'productCategory'
    },
    {
        title: '项目类别',
        dataIndex: 'prjCategory',
        key: 'prjCategory'
    },
    {
        title: '项目编号',
        dataIndex: 'index',
        key: 'index'
    },
    {
        title: '项目名称',
        dataIndex: 'prjName',
        key: 'prjName'
    },
    {
        title: '项目状态',
        dataIndex: 'projectStatus',
        key: 'projectStatus',
        render: (text: string) => (
            <span>
                <Badge color={text === 'processing' ? 'blue' : 'red'} status={text === 'processing' ? text : 'Error'} text={text === 'processing' ? '进行中' : '审核中'} />
            </span>
        ),
    },
    {
        title: '项目经理',
        dataIndex: 'prjManager',
        key: 'prjManager'
    },
    {
        title: '所属部门',
        dataIndex: 'department',
        key: 'department'
    },
    {
        title: '项目计划时间',
        dataIndex: 'prjStartDate',
        key: 'prjStartDate',
        render: (text: string, record: any) => (
            <span>
                {getDateFormat(text) + '~' + getDateFormat(record.prjEndDate)}
            </span>
        )
    },
]
const List = (props: listProps) => {
    const { datalist } = props
    return (

        <div className="list" >
            <Table columns={listColumn} dataSource={datalist} pagination={false} rowKey={'guid'} />
        </div>

    )
}
export default List