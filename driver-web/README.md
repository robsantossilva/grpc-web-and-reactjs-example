
gRPC for Web Clients
https://github.com/grpc/grpc-web

protoc -I=. src/proto/services.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.


For this message: 'proto' is not defined
Set -> /* eslint-disable */