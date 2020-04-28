
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
      name: "Painel",
      rtlName: "لوحة القيادة",
      icon: Dashboard,
      component: DashboardPage,
      layout: "/admin",
      permission:0
      
      
    },
    {
      path: "/table",
      name: "loren ipsum",      
      icon: "content_paste",
      component: TableList,
      layout: "/admin",
      permission:2
    },

    {
      path: "/singupprovider",
      name: "Lorem ipsum",
      rtlName: "ملف تعريفي للمستخدم",
      icon: "content_paste",
      component: CadastrarProvedor,
      layout: "/admin",
      permission:2
    },

    {
      path: "/tableCustomers",
      name: "loren ipsum",      
      icon: "content_paste",
      component: TableCustomers,
      layout: "/admin",
      permission:1
    },

  
    {
      path: "/singupcustomer",
      name: " loren ipsum",      
      icon: Person,
      component: SingUpCustomer,
      layout: "/admin",
      permission:1
    },
    {
      path: "/about",
      name: "Sobre o projeto",     
      icon: "security",
      component: Icons,
      layout: "/admin",
      permission:0
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

