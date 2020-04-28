import api from "../services/api";
export const TOKEN_KEY = "Sulamerica-Token";
export const EMAIL = "email";
//export const PERMISSION = "P";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token, email) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(EMAIL, email)
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EMAIL);
  window.location.reload() 
};









/*
export const setPermission = (params) => {
  localStorage.setItem('PERMISSION', params);
  
  };





  export var perm = async e =>{

  var data = localStorage.getItem('email')
  var object = {}        
  object.email = data     
  //console.log(perm.data)     
  permission = await api.post("/permissionUser", object)        
  

  
}
*/