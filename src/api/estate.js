import {axios} from '@/utils/request'

export function selectCompany(){
    return axios({
        url: '/estate/selectCompany',
        method: 'get'
    })
}

export function insertCompany(param){
    return axios({
        url: '/estate/insertCompany',
        method: 'post',
        message: param
    })
}