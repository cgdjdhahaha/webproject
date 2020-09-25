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

export function selectUnit(param) {
    return axios({
        url: '/estate/selectUnit',
        method: 'post',
        data: param,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function updateUnit(param) {
    return axios({
        url: '/estate/updateUnit',
        method: 'post',
        data: param
    })
}

export function insertCell(param) {
    return axios({
        url: '/estate/insertCell',
        method: 'post',
        data: param,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function selectBuildingByEstate(param) {
    return axios({
        url: '/estate/selectBuildingByEstate',
        method: 'post',
        data: param
    })
}
