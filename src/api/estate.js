import { axios } from '@/utils/request'

export function selectCompany() {
    return axios({
        url: '/estate/selectCompany',
        method: 'get'
    })
}

export function insertEstate(param) {
    return axios({
        url: '/estate/insertEstate',
        method: 'post',
        data: param
    })
}

export function selectBuilding(param) {
    return axios({
        url: '/estate/selectBuilding',
        method: 'post',
        data: param
    })
}

export function updateBuilding(param) {
    return axios({
        url: '/estate/updateBuilding',
        method: 'post',
        data: param
    })
}
