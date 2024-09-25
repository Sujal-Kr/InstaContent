export interface Template{
name:string,
desc:string,
icon:string,
category:string,
slug:string,
aiPrompt:string,
form?:Form[],
}

export interface  Form{
    label:string,
    field:string,
    name:string,
    required?:boolean,
}