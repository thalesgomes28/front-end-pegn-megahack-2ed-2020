
import React, { Component } from 'react';
import MaterialTable from 'material-table';

import api from "../../services/api";

export default function MaterialTableDemo() {  

  const [state, setState] = React.useState([]);

  
  async function loadUsers() {
    const response = await api.get('/listProvider')
    setState(

        {
          columns: [
            { title: 'Provedor', field: 'username' },
            { title: 'CNPJ', field: 'cnpj' },
            { title: 'Telefone', field: 'phone_number' },
            { title: 'state', field: 'state', type: 'numeric' },
            
          ],
          data: response.data

          /*
          ["username", "email", "password", "permission"]
          
          */
        }
    );
  }

  

  loadUsers();


  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}