import axios from "axios";
import { IJSONResponse } from "./interfaces/JSONReponse";
import { IUser } from "./interfaces/User";
import { IChallenge } from "./interfaces/Challenge";
import { ICommit } from "./interfaces/Commit";
import { IJoinRequest } from './interfaces/JoinRequest';

const REACT_API_HOST = process.env.REACT_APP_API_HOST;

export async function getUserInfo(user_name: string) {
    const response = await axios.get<IUserResponse>(
        `${REACT_API_HOST}/api/users/${user_name}`
    );
    return response.data;
}

export async function getUserAuth() {
    const response = await axios.get<IUserAuthReponse>(
        `${REACT_API_HOST}/api/users/auth`
    );
    return response.data;
}

export async function getUsersInfo() {
    const response = await axios.get<IUsersResponse>(
        `${REACT_API_HOST}/api/users`
    );
    return response.data;
}

export async function deleteUser(user_name: string) {
    const response = await axios.delete<IJSONResponse>(
        `${REACT_API_HOST}/api/users/${user_name}`
    );
    return response.data;
}

export async function fetchUserInfo(user_name: string) {
    const response = await axios.post<IJSONResponse>(
        `${REACT_API_HOST}/api/users/${user_name}/fetch`
    );
    return response.data;
}

export async function getUsersSearch(user_name: string) {
    const reponse = await axios.get<IUsersResponse>(
        `${REACT_API_HOST}/api/users/search`,
        {
            params: {
                user_name: user_name.trim(),
            },
        }
    );
    return reponse.data;
}

export async function getUserLatestFetchLog(user_name: string) {
    const response = await axios.get<IJSONResponse>(
        `${REACT_API_HOST}/api/users/${user_name}/fetch`
    );
    return response.data;
}

export async function getUsersInProject(challenge_id: string) {
    const response = await axios.get<IUsersInProjectReponse>(
        `${REACT_API_HOST}/api/users/challenges/${challenge_id}`
    );
    return response.data;
}

export async function getUserJoinRequest(challenge_id : string){
    const response = await axios.get<IGetUserJoinRequestResponse>(
        `${REACT_API_HOST}/api/users/challenges/${challenge_id}/request`
    );
    return response.data;
}

export async function postUserJoinRequest(challenge_id:string){
    const response = await axios.post<IJSONResponse>(
        `${REACT_API_HOST}/api/users/challenges/${challenge_id}/request`
    );
    return response.data;
}

interface IGetUserJoinRequestResponse extends IJSONResponse{
    data : IJoinRequest
}

export interface IUsersResponse extends IJSONResponse {
    data: [IUser];
}

export interface IUserResponse extends IJSONResponse {
    data: IUser;
}

export interface IUserAuthReponse extends IJSONResponse {
    data: {
        is_authenticated: boolean;
        challenges: [IChallenge];
        user: IUser;
        latestCommits: [ICommit];
    };
}

export interface IUsersInProjectReponse extends IJSONResponse {
    data: [
        {
            user: IUser;
            attended: boolean;
        }
    ];
}
