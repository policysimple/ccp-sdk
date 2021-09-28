// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var performance_metrics_v1alpha1_metrics_agent_api_pb = require('../../../performance/metrics/v1alpha1/metrics_agent_api_pb.js');
var performance_metrics_v1alpha1_metrics_pb = require('../../../performance/metrics/v1alpha1/metrics_pb.js');

function serialize_performance_metrics_v1alpha1_SaveMetricsRequest(arg) {
  if (!(arg instanceof performance_metrics_v1alpha1_metrics_agent_api_pb.SaveMetricsRequest)) {
    throw new Error('Expected argument of type performance.metrics.v1alpha1.SaveMetricsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_metrics_v1alpha1_SaveMetricsRequest(buffer_arg) {
  return performance_metrics_v1alpha1_metrics_agent_api_pb.SaveMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_metrics_v1alpha1_SaveMetricsResponse(arg) {
  if (!(arg instanceof performance_metrics_v1alpha1_metrics_agent_api_pb.SaveMetricsResponse)) {
    throw new Error('Expected argument of type performance.metrics.v1alpha1.SaveMetricsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_metrics_v1alpha1_SaveMetricsResponse(buffer_arg) {
  return performance_metrics_v1alpha1_metrics_agent_api_pb.SaveMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MetricsAgentAPIServiceService = exports.MetricsAgentAPIServiceService = {
  saveMetrics: {
    path: '/performance.metrics.v1alpha1.MetricsAgentAPIService/SaveMetrics',
    requestStream: false,
    responseStream: true,
    requestType: performance_metrics_v1alpha1_metrics_agent_api_pb.SaveMetricsRequest,
    responseType: performance_metrics_v1alpha1_metrics_agent_api_pb.SaveMetricsResponse,
    requestSerialize: serialize_performance_metrics_v1alpha1_SaveMetricsRequest,
    requestDeserialize: deserialize_performance_metrics_v1alpha1_SaveMetricsRequest,
    responseSerialize: serialize_performance_metrics_v1alpha1_SaveMetricsResponse,
    responseDeserialize: deserialize_performance_metrics_v1alpha1_SaveMetricsResponse,
  },
};

exports.MetricsAgentAPIServiceClient = grpc.makeGenericClientConstructor(MetricsAgentAPIServiceService);
