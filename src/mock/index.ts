import data from './data.json'
export default [
    {
        url: '/api/getDataList',
        mothod: 'get',
        response: () => data
    }
]