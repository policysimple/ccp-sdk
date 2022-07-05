// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var performance_logs_v1alpha1_logs_api_pb = require('../../../performance/logs/v1alpha1/logs_api_pb.js');
var performance_logs_v1alpha1_logs_pb = require('../../../performance/logs/v1alpha1/logs_pb.js');

function serialize_performance_logs_v1alpha1_GetLogsRequest(arg) {
  if (!(arg instanceof performance_logs_v1alpha1_logs_api_pb.GetLogsRequest)) {
    throw new Error('Expected argument of type performance.logs.v1alpha1.GetLogsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_logs_v1alpha1_GetLogsRequest(buffer_arg) {
  return performance_logs_v1alpha1_logs_api_pb.GetLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_logs_v1alpha1_GetLogsResponse(arg) {
  if (!(arg instanceof performance_logs_v1alpha1_logs_api_pb.GetLogsResponse)) {
    throw new Error('Expected argument of type performance.logs.v1alpha1.GetLogsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_logs_v1alpha1_GetLogsResponse(buffer_arg) {
  return performance_logs_v1alpha1_logs_api_pb.GetLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LogsAPIServiceService = exports.LogsAPIServiceService = {
  getLogs: {
    path: '/performance.logs.v1alpha1.LogsAPIService/GetLogs',
    requestStream: false,
    responseStream: false,
    requestType: performance_logs_v1alpha1_logs_api_pb.GetLogsRequest,
    responseType: performance_logs_v1alpha1_logs_api_pb.GetLogsResponse,
    requestSerialize: serialize_performance_logs_v1alpha1_GetLogsRequest,
    requestDeserialize: deserialize_performance_logs_v1alpha1_GetLogsRequest,
    responseSerialize: serialize_performance_logs_v1alpha1_GetLogsResponse,
    responseDeserialize: deserialize_performance_logs_v1alpha1_GetLogsResponse,
  },
};

exports.LogsAPIServiceClient = grpc.makeGenericClientConstructor(LogsAPIServiceService);
