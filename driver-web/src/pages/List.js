import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { 
  Box,
  Link as MuiLink,
  Container, Fab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

import {Link} from "react-router-dom";



const { DriverServiceClient } = require('./../proto/services_grpc_web_pb');
const { GetListDriverRequest, GetListDriverResponse } = require('./../proto/services_pb');

var client = new DriverServiceClient('http://127.0.0.1:9090', null, null);

function App() {


  const [data, setData] = useState([]); 

  useEffect( () => {

    const request = new GetListDriverRequest();
    request.setPage('1');
    request.setCountperpage('10');

    client.getListDriver(request, {}, (err, response) => {
      if (response == null) {
        console.log(err)
      }else {
        
        let data = [];
        const drivers = response.getDriverList();
        drivers.map(function(d){
            data.push({
                name: d.getName(),
                cpf: d.getCpf()
            });
        });

        setData(data);
        
      }
    });

  }, []);


  return (
    <Container>

        <Typography variant={"h4"}>Driver List</Typography>
        <Box dir={'rtl'} paddingBottom={2}>
            <Fab
                title="Adicionar nova live"
                color="primary"
                size={'small'}
                component={Link}
                to="/driver/create"
            >
                <AddIcon/>
            </Fab>
        </Box>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>CPF</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, key) => (
                    <TableRow key={key}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.cpf}</TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    </Container>
  );
}

export default App;
