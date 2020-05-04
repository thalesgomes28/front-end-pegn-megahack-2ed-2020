
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import CadastrarProvedor from "views/CadastrarProvedor/index";
import TableList from "views/TableList/TableList.js";
import SingUpCustomer from "views/SingUpCustomer";
import TableCustomers from "views/TableCustomers/TableCustomers";
import Icons from "views/Icons/Icons.js";




   var dashboardRoutes = [

    // Admin
    {
      path: "/dashboard",
      name: "Home",
      rtlName: "لوحة القيادة",
      icon: 'home',
      component: DashboardPage,
      layout: "/admin",
      permission:0
      
      
    },

    {
      path: "/singupcustomer",
      name: "Perfil",      
      icon: Person,
      component: SingUpCustomer,
      layout: "/admin",
      permission:1
    },

    {
      path: "/about",
      name: "Startup",     
      icon: "near_me",
      component: Icons,
      layout: "/admin",
      permission:0
    },
     
    
    {
      path: "/table",
      name: "Desafios",      
      icon: "content_paste",
      component: TableList,
      layout: "/admin",
      permission:2
    },

 

    {
      path: "/singupprovider",
      name: "Ideias de negócio",
      rtlName: "ملف تعريفي للمستخدم",
      icon: "lightbulb_outline",
      component: CadastrarProvedor,
      layout: "/admin",
      permission:2
    },

   
  ];






export default dashboardRoutes;

/*

  compo= async e =>{
  const data = localStorage.getItem('email')
  var object = {}

  object.email = data          
  perm = await api.post("/permissionUser", object).then( dashRoutes(perm.data),  null)

  console.log(perm.data)
  
  
}

*/

