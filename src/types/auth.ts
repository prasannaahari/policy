export type AuthState={
    isLoggedIn:boolean;
    user:{name:string; email:string}|null;
    login:(user:{name:string;email:string})=>void;
    logout:()=>void
}