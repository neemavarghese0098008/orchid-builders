const configuredApi=import.meta.env.VITE_API_URL||(import.meta.env.DEV?'http://localhost:5000/api':`${window.location.origin}/api`);
const apiUrl=new URL(configuredApi,window.location.origin);
const apiPath=apiUrl.pathname.replace(/\/+$/,'');
const API_ROOT=/\/api$/.test(apiPath)?apiUrl.origin+apiPath:apiUrl.origin+apiPath+'/api';
const API_ORIGIN=apiUrl.origin;
export async function api(path,options={}){const suffix=String(path||'').replace(/^\/+/, '');const requestOptions={...options};if(typeof requestOptions.body==='string'){try{JSON.parse(requestOptions.body);const headers=new Headers(requestOptions.headers);headers.set('Content-Type','application/json');requestOptions.headers=headers;}catch{}}const response=await fetch(API_ROOT+'/'+suffix,requestOptions);const payload=await response.json().catch(()=>({}));if(!response.ok)throw new Error(payload.message||'The service could not complete this request');return payload;}
export async function fetchData(path){try{const result=await api(path);return result.data||[];}catch{return [];}}
export const imageUrl=path=>!path?'':path.startsWith('http')?path:path.startsWith('/')?API_ORIGIN+path:'/'+path;
