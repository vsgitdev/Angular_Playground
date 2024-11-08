export interface IRole {
    roleId: number,
    role: string
}


export interface iDesignation {
    userId: number
    id: number
    title: string
    body: string
}

export interface APIResponseModel {
    data: any;
    result: any;
    message: string;
    
}