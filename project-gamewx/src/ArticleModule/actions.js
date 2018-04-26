/**
 * Created by Administrator on 2018/4/26.
 */

import { REQUEST_ARTILCES_START,REQUEST_ARTICLES_SUCCESS,REQUEST_ARTILCES_FAIL } from './actionTypes';

/**
 * 开始请求 文章列表
 * @returns {{type: string}}
 */
const requestArticlestart = () => {
    return {
        type:REQUEST_ARTILCES_START,
    }
}

/**
 * 请求 文章列表 成功，并返回数据
 * @param articles json数据
 * @returns {{type: string, articles: *}}
 */
const requestArticlesSuccess = (articles) => {
    return {
        type:REQUEST_ARTICLES_SUCCESS,
        articles
    }
}

/**
 * 请求 文章列表 失败，并返回失败提示信息
 * @param error 失败提示信息
 * @returns {{type: string, error: *}}
 */
const requestArticlesFail = (error) => {
    return {
        type:REQUEST_ARTILCES_FAIL,
        error
    }
}


export const fetchArticles = (pageIndex = 0,pageSize = 10,dicItemId = 0) => (dispatch) => {
    // 开始请求
    dispatch(requestArticlestart());

    let url = `http://localhost:8080/articles/page?page=${pageIndex}&rows=${pageSize}&dicItemId=${dicItemId}`;

    return fetch(url,{
        method:'GET'
    }).then((res) => {
        if(res.status !== 200){
            throw new Error('Fail to get response with status ' + res.status);
        }
        return res.json()
    }).then((res) => {
        // 请求成功
        dispatch(requestArticlesSuccess(res.rows));
    }).catch((error) => {
        dispatch(requestArticlesFail(error));
    })
}