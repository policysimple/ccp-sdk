// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var performance_logs_v1alpha1_logs_agent_api_pb = require('../../../performance/logs/v1alpha1/logs_agent_api_pb.js');
var performance_logs_v1alpha1_logs_pb = require('../../../performance/logs/v1alpha1/logs_pb.js');

function serialize_performance_logs_v1alpha1_SaveLogsRequest(arg) {
  if (!(arg instanceof performance_logs_v1alpha1_logs_agent_api_pb.SaveLogsRequest)) {
    throw new Error('Expected argument of type performance.logs.v1alpha1.SaveLogsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_logs_v1alpha1_SaveLogsRequest(buffer_arg) {
  return performance_logs_v1alpha1_logs_agent_api_pb.SaveLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_logs_v1alpha1_SaveLogsResponse(arg) {
  if (!(arg instanceof performance_logs_v1alpha1_logs_agent_api_pb.SaveLogsResponse)) {
    throw new Error('Expected argument of type performance.logs.v1alpha1.SaveLogsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_logs_v1alpha1_SaveLogsResponse(buffer_arg) {
  return performance_logs_v1alpha1_logs_agent_api_pb.SaveLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LogsAgentAPIServiceService = exports.LogsAgentAPIServiceService = {
  saveLogs: {
    path: '/performance.logs.v1alpha1.LogsAgentAPIService/SaveLogs',
    requestStream: true,
    responseStream: true,
    requestType: performance_logs_v1alpha1_logs_agent_api_pb.SaveLogsRequest,
    responseType: performance_logs_v1alpha1_logs_agent_api_pb.SaveLogsResponse,
    requestSerialize: serialize_performance_logs_v1alpha1_SaveLogsRequest,
    requestDeserialize: deserialize_performance_logs_v1alpha1_SaveLogsRequest,
    responseSerialize: serialize_performance_logs_v1alpha1_SaveLogsResponse,
    responseDeserialize: deserialize_performance_logs_v1alpha1_SaveLogsResponse,
  },
};

exports.LogsAgentAPIServiceClient = grpc.makeGenericClientConstructor(LogsAgentAPIServiceService);
