import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import { Redirect } from 'react-router-dom';
import { 
  Button, Container, Grid, TextField, Typography
} from '@material-ui/core';

import * as yup from 'yup';

const { DriverServiceClient } = require('./../proto/services_grpc_web_pb');
const { CreateDriverRequest, Driver, CreateDriverResponse } = require('./../proto/services_pb');

var client = new DriverServiceClient('http://127.0.0.1:9090', null, null);

function App() {

  const [redirect, setRedirect] = useState(false);

  const {register, handleSubmit, errors} = useForm({
      validationSchema: yup.object({
          name: yup.string()
              .required('O campo é requerido')
              .max(255, 'O campo deve ter no máximo 255 caracteres'),

          cpf: yup.string()
              .required('O campo é requerido')
              .max(255, 'O campo deve ter no máximo 255 caracteres'),
      }),
  });

  const onSubmit = async (values) => {

    const request = new CreateDriverRequest();
    const driver = new Driver();

    driver.setName(values.name);
    driver.setCpf(values.cpf);
    request.setDriver(driver);


    client.createDriver(request, {}, (err, response) => {
      if (response == null) {
        console.log(err)
      }else {
        console.log("ID: "+response.getId());
        setRedirect(true);
      }
    });
  };
  
  /*const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('...');

  useEffect( () => {
    const newSocket = io('http://localhost:3000/driver');
    newSocket.on('callback_socket', 
      data => setMessage(data)
    );
    setSocket(newSocket);
  }, []);

  function handleSenMessage(e){
    e.preventDefault();
    socket.emit('location',{name:"callback_socket"});
  }*/

  return (
    <Container>

      {redirect !== false ? <Redirect to="/driver"/> : '' }

      <Grid container>
          <Grid item xs={12} sm={6}>
              <Typography variant="h4">New Drive</Typography>
              <form method="post" onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                      name="name"
                      label="Name"
                      margin="normal"
                      fullWidth
                      inputRef={register}
                      InputLabelProps={{shrink: true}}
                      error={errors.name !== undefined}
                      helperText={errors.name && errors.name.message}
                  />

                  <TextField
                      multiline
                      name="cpf"
                      label="CPF"
                      margin="normal"
                      fullWidth
                      inputRef={register}
                      InputLabelProps={{shrink: true}}
                      error={errors.cpf !== undefined}
                      helperText={errors.cpf && errors.cpf.message}
                  />

                  <Button type="submit" variant="contained" color="primary">Enviar</Button>
              </form>
          </Grid>
      </Grid>
  </Container>
  );
}

export default App;
