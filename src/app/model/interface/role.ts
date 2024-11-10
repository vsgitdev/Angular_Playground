export interface IRole {
    roleId: number,
    role: string
}


export interface iDesignation {
    message : string;
    result: boolean;
    data:any;
    designationId: number,
    designation: string
}

export interface APIResponseModel {
    data: any;
    result: boolean;
    message: string;
    
}

export interface Employee {
    empName: string
    empId: string
    empCode: string
    empEmailId: string
    empDesignation: string
    role: string
}

export interface Project {
    empName: string
    empId: string
    empCode: string
    empEmailId: string
    empDesignation: string
    projectName: string
    startDate: Date
    expectedEndDate: Date
    clientName:  string
} 