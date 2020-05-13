## Como usar gRPC-Web com ReactJS ?

- <strong>gRPC</strong> é uma estrutura RPC moderna de alto desempenho e código aberto que pode ser executada em qualquer ambiente. Ele pode conectar de forma eficiente serviços, dentro e, entre centros de dados com suporte conectável para balanceamento de carga, rastreamento, verificação de integridade e autenticação. Também é aplicável em computação distribuída para conectar dispositivos, aplicativos móveis e navegadores aos serviços de back-end. [Saiba mais](https://grpc.io/).

- <strong>gRPC-Web</strong> fornece uma biblioteca JavaScript que permite que os clientes do navegador acessem um serviço gRPC.

#### Pontos importantes ao trabalhar com gRPC

1. Um fator importante para a escolha do gRPC é fato de já termos os 'proto files' que usamos tanto no Front-end como no Back-end. O Arquivo .proto define o contrato de comunicação entre as duas partes. E através deles é possivel gerar código Javascript que irá auxiliar em todo processo.

``` bash
syntax = "proto3";

package pb;

message Driver {
    string name = 1;
    string cpf = 2;
}

message CreateDriverRequest {
    Driver driver = 1;
}
message CreateDriverResponse {
    string id = 1;
}

message GetListDriverRequest {
    string page = 1;
    string countPerPage = 2;
}
message GetListDriverResponse {
    repeated Driver driver = 1;
}

service DriverService {
    rpc CreateDriver ( CreateDriverRequest ) returns (CreateDriverResponse) {}
    rpc GetListDriver ( GetListDriverRequest ) returns ( GetListDriverResponse ) {}
}

```

2. O cliente Web gRPC (Navegador) não envia solicitações HTTP2. Em vez disso, você precisa de um proxy entre o Cliente e o Serviço de back-end gRPC para converter a solicitação HTTP1 em HTTP2. O cliente da Web gRPC possui suporte interno para o Envoy como proxy. Você pode encontrar mais informações sobre isso [aqui](https://grpc.io/blog/state-of-grpc-web).

3. As equipes do Google e da Improbable implementaram as especificações em dois repositórios diferentes. Usaremos o cliente da web gRPC fornecido pelo Google. Você pode encontrar a implementação pelo Google [aqui](https://github.com/grpc/grpc-web) e pelo Improvável [aqui](https://github.com/improbable-eng/grpc-web).

#### Bora rodar o exemplo em sua máquina ?

``` bash
docker-compose up -d
```

<img src='/static/example.gif'>

REF: https://morioh.com/p/ae48b33d10a0