import { createReducer } from "typesafe-actions";
import { AnalyticsAction, AnalyticsState } from "./types";
import {
    GET_SUMMARY,
    GET_SUMMARY_ERROR,
    GET_SUMMARY_SUCCESS,
    GET_ALL_ATTENDANCES,
    GET_ALL_ATTENDANCES_ERROR,
    GET_ALL_ATTENDANCES_SUCCESS,
    GET_ALL_ATTENDANCES_BY_DATES,
    GET_ALL_ATTENDANCES_BY_DATES_SUCCESS,
    GET_ALL_ATTENDANCES_BY_DATES_ERROR,
    GET_LANGUAGES_POPULARITY,
    GET_LANGUAGES_POPULARITY_SUCCESS,
    GET_LANGUAGES_POPULARITY_ERROR,
    GET_POPULAR_REPOSITORY,
    GET_POPULAR_REPOSITORY_SUCCESS,
    GET_POPULAR_REPOSITORY_ERROR,
    GET_HOTTEST_REPOSITORY,
    GET_HOTTEST_REPOSITORY_SUCCESS,
    GET_HOTTEST_REPOSITORY_ERROR,
    GET_LATEST_CHALLENGE_ATTENDANCES_BY_USER,
    GET_LATEST_CHALLENGE_ATTENDANCES_BY_USER_SUCCESS,
    GET_LATEST_CHALLENGE_ATTENDANCES_BY_USER_ERROR,
    CLEAR_LATEST_CHALLENGE_ATTENDANCES_BY_USER,
} from "./actions";

const intialState:AnalyticsState = {
    summary: {
        loading: false,
        error: null,
        data: null,
    },
    all_attendances:{
        loading: false,
        error: null,
        data: null,
    },
    languages: {
        loading: false,
        error : null,
        data: null,
    },
    popular_repo: {
        loading: false,
        error :null,
        data: null,
    },
    hottest_repo: {
        loading: false,
        error : null,
        data : null,
    },
    all_attendances_by_dates: {
        loading : false,
        error : null,
        data : null,
    },
    latest_challenge_attendances_by_user:{
        loading: false,
        error: null,
        data : null,
    }
}

const analytics = createReducer<AnalyticsState, AnalyticsAction>(intialState, {
    [GET_SUMMARY]: state=>({
        ...state,
        summary: {
            loading:true,
            error:null,
            data:null,
        }
    }),
    [GET_SUMMARY_SUCCESS]:(state, action)=>({
        ...state,
        summary:{
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_SUMMARY_ERROR]:(state, action)=>({
        ...state,
        summary:{
            loading: false,
            error: action.payload,
            data: null,
        }
    }),
    // 모든 인원의 참석률 
    [GET_ALL_ATTENDANCES]:state=>({
        ...state,
        all_attendances:{
            loading:true,
            error:null,
            data:null,
        },
    }),
    [GET_ALL_ATTENDANCES_SUCCESS]:(state,action)=>({
        ...state, 
        all_attendances:{
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_ALL_ATTENDANCES_ERROR]:(state, action)=>({
        ...state,
        all_attendances:{
            loading:false,
            error: action.payload,
            data: null,
        }
    }),
    // 일자별 참석률 
    [GET_ALL_ATTENDANCES_BY_DATES]:state=>({
        ...state,
        all_attendances_by_dates:{
            loading:true,
            error:null,
            data:null,
        },
    }),
    [GET_ALL_ATTENDANCES_BY_DATES_SUCCESS]:(state,action)=>({
        ...state, 
        all_attendances_by_dates:{
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_ALL_ATTENDANCES_BY_DATES_ERROR]:(state, action)=>({
        ...state,
        all_attendances_by_dates:{
            loading:false,
            error: action.payload,
            data: null,
        }
    }),
    // 언어 사용률 조회
    [GET_LANGUAGES_POPULARITY]:state=>({
        ...state,
        languages:{
            loading:true,
            error:null,
            data:null,
        },
    }),
    [GET_LANGUAGES_POPULARITY_SUCCESS]:(state,action)=>({
        ...state, 
        languages:{
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_LANGUAGES_POPULARITY_ERROR]:(state, action)=>({
        ...state,
        languages:{
            loading:false,
            error: action.payload,
            data: null,
        }
    }),
    // 유명한 저장소 
    [GET_POPULAR_REPOSITORY]:state=>({
        ...state,
        popular_repo:{
            loading:true,
            error:null,
            data:null
        }
    }),
    [GET_POPULAR_REPOSITORY_SUCCESS]:(state,action)=>({
        ...state, 
        popular_repo:{
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_POPULAR_REPOSITORY_ERROR]:(state, action)=>({
        ...state,
        popular_repo:{
            loading:false,
            error: action.payload,
            data: null
        }
    }),
    // 인증 저장소 
    [GET_HOTTEST_REPOSITORY]:state=>({
        ...state,
        hottest_repo:{
            loading:true,
            error:null,
            data:null,
        }
    }),
    [GET_HOTTEST_REPOSITORY_SUCCESS]:(state,action)=>({
        ...state, 
        hottest_repo:{
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_HOTTEST_REPOSITORY_ERROR]:(state, action)=>({
        ...state,
        hottest_repo:{
            loading:false,
            error: action.payload,
            data: null,
        }
    }),
    //
    [GET_LATEST_CHALLENGE_ATTENDANCES_BY_USER]:state=>({
        ...state,
        latest_challenge_attendances_by_user:{
            loading:true,
            error:null,
            data:null,
        }
    }),
    [GET_LATEST_CHALLENGE_ATTENDANCES_BY_USER_SUCCESS]:(state,action)=>({
        ...state, 
        latest_challenge_attendances_by_user:{
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_LATEST_CHALLENGE_ATTENDANCES_BY_USER_ERROR]:(state, action)=>({
        ...state,
        latest_challenge_attendances_by_user:{
            loading:false,
            error: action.payload,
            data: null,
        }
    }),
    [CLEAR_LATEST_CHALLENGE_ATTENDANCES_BY_USER]: (state)=>({
        ...state,
        latest_challenge_attendances_by_user:{
            ...intialState.latest_challenge_attendances_by_user
        }
    }),
});

export default analytics;