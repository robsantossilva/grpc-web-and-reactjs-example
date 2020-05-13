/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */
/* eslint-disable */
// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pb = require('./services_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.DriverServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.DriverServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CreateDriverRequest,
 *   !proto.pb.CreateDriverResponse>}
 */
const methodDescriptor_DriverService_CreateDriver = new grpc.web.MethodDescriptor(
  '/pb.DriverService/CreateDriver',
  grpc.web.MethodType.UNARY,
  proto.pb.CreateDriverRequest,
  proto.pb.CreateDriverResponse,
  /**
   * @param {!proto.pb.CreateDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.CreateDriverResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CreateDriverRequest,
 *   !proto.pb.CreateDriverResponse>}
 */
const methodInfo_DriverService_CreateDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.CreateDriverResponse,
  /**
   * @param {!proto.pb.CreateDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.CreateDriverResponse.deserializeBinary
);


/**
 * @param {!proto.pb.CreateDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.CreateDriverResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.CreateDriverResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.DriverServiceClient.prototype.createDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.DriverService/CreateDriver',
      request,
      metadata || {},
      methodDescriptor_DriverService_CreateDriver,
      callback);
};


/**
 * @param {!proto.pb.CreateDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.CreateDriverResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.DriverServicePromiseClient.prototype.createDriver =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.DriverService/CreateDriver',
      request,
      metadata || {},
      methodDescriptor_DriverService_CreateDriver);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.GetListDriverRequest,
 *   !proto.pb.GetListDriverResponse>}
 */
const methodDescriptor_DriverService_GetListDriver = new grpc.web.MethodDescriptor(
  '/pb.DriverService/GetListDriver',
  grpc.web.MethodType.UNARY,
  proto.pb.GetListDriverRequest,
  proto.pb.GetListDriverResponse,
  /**
   * @param {!proto.pb.GetListDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetListDriverResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.GetListDriverRequest,
 *   !proto.pb.GetListDriverResponse>}
 */
const methodInfo_DriverService_GetListDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.GetListDriverResponse,
  /**
   * @param {!proto.pb.GetListDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.GetListDriverResponse.deserializeBinary
);


/**
 * @param {!proto.pb.GetListDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.GetListDriverResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.GetListDriverResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.DriverServiceClient.prototype.getListDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.DriverService/GetListDriver',
      request,
      metadata || {},
      methodDescriptor_DriverService_GetListDriver,
      callback);
};


/**
 * @param {!proto.pb.GetListDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.GetListDriverResponse>}
 *     A native promise that resolves to the response
 */
proto.pb.DriverServicePromiseClient.prototype.getListDriver =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.DriverService/GetListDriver',
      request,
      metadata || {},
      methodDescriptor_DriverService_GetListDriver);
};


module.exports = proto.pb;

