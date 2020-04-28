import React, { Component}from "react";
import MaterialTable from 'material-table';
import api from "../../services/api";


export default class TableProvider extends  Component {

  state = {
    
      columns:[
        
        { title: "Nome", field: "username" },
        { title: "CNPJ", field: "cnpj" },
       
        { title: "telefone", field: "phone_number" },
        { title: "Status", field: "state" },
       
        ],
      data:[],           
      userUp:[],
      userDestroy:[],
      flag:-4, // -2 update // -3 delete
      error: 0,
   
  }; 


  
  
 
componentDidMount= async e =>{
  const response = await api.get('/listProvider')
  console.log(response.data);
  this.setState(
  {
    data: response.data
    })


   
}

componentDidUpdate= async e =>{
 
  switch (this.state.flag) {
    
    case -2:
      await api.put(`/updateProvider/${this.state.userUp.id}`,  this.state.userUp );
      console.log('Update');
      window.location.reload()
      break;
    case -3:
      await api.delete(`/deleteProvider/${this.state.userDestroy}`);
      console.log('Delete');   
      window.location.reload() 
      break;
    default:
      console.log('Sorry, we are out of ' + this.state.flag + '.');
      break;
  }

}

  render(){
    return (
      <div style={{ maxWidth: "100%" }}>
         
        <MaterialTable
          columns={this.state.columns}
          data={this.state.data}
          title=""

          editable={{
            isEditable: rowData => rowData.name === "a", // only name(a) rows would be editable
            isDeletable: rowData => rowData.name === "b", // only name(a) rows would be deletable
       
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                            /* const data = this.state.data;
                            const index = data.indexOf(oldData);
                            data[index] = newData;                
                            this.setState({ data }, () => resolve()); */
                           
                            this.setState({ userUp: newData , flag:-2}, () => resolve()); 
                            console.log(newData)
                        }
                        resolve();
                    }, 1000);
                }),
            onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                             /*let data = this.state.data;
                            const index = data.indexOf(oldData);
                            data.splice(index, 1);
                            this.setState({ data }, () => resolve()); */
                            this.setState({userDestroy: oldData.id , flag: -3}, () => resolve()); 
                            console.log(oldData.id)

                        }
                        resolve();
                    }, 1000);
                })
        }}
        />
        
      </div>
    );
  }
}

//const salve = async() =>{ await api.post("/updateUser/1",  this.state.data )};
//this.setState({ userUp: newdata  }, () => resolve()); 