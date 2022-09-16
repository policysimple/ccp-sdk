// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var performance_metrics_v1alpha1_metrics_api_pb = require('../../../performance/metrics/v1alpha1/metrics_api_pb.js');
var performance_metrics_v1alpha1_metrics_pb = require('../../../performance/metrics/v1alpha1/metrics_pb.js');

function serialize_performance_metrics_v1alpha1_GetMetricsRequest(arg) {
  if (!(arg instanceof performance_metrics_v1alpha1_metrics_api_pb.GetMetricsRequest)) {
    throw new Error('Expected argument of type performance.metrics.v1alpha1.GetMetricsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_metrics_v1alpha1_GetMetricsRequest(buffer_arg) {
  return performance_metrics_v1alpha1_metrics_api_pb.GetMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_metrics_v1alpha1_GetMetricsResponse(arg) {
  if (!(arg instanceof performance_metrics_v1alpha1_metrics_api_pb.GetMetricsResponse)) {
    throw new Error('Expected argument of type performance.metrics.v1alpha1.GetMetricsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_metrics_v1alpha1_GetMetricsResponse(buffer_arg) {
  return performance_metrics_v1alpha1_metrics_api_pb.GetMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_metrics_v1alpha1_GetTektonMetricsRequest(arg) {
  if (!(arg instanceof performance_metrics_v1alpha1_metrics_api_pb.GetTektonMetricsRequest)) {
    throw new Error('Expected argument of type performance.metrics.v1alpha1.GetTektonMetricsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_metrics_v1alpha1_GetTektonMetricsRequest(buffer_arg) {
  return performance_metrics_v1alpha1_metrics_api_pb.GetTektonMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_metrics_v1alpha1_GetTektonMetricsResponse(arg) {
  if (!(arg instanceof performance_metrics_v1alpha1_metrics_api_pb.GetTektonMetricsResponse)) {
    throw new Error('Expected argument of type performance.metrics.v1alpha1.GetTektonMetricsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_metrics_v1alpha1_GetTektonMetricsResponse(buffer_arg) {
  return performance_metrics_v1alpha1_metrics_api_pb.GetTektonMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MetricsAPIServiceService = exports.MetricsAPIServiceService = {
  getMetrics: {
    path: '/performance.metrics.v1alpha1.MetricsAPIService/GetMetrics',
    requestStream: false,
    responseStream: false,
    requestType: performance_metrics_v1alpha1_metrics_api_pb.GetMetricsRequest,
    responseType: performance_metrics_v1alpha1_metrics_api_pb.GetMetricsResponse,
    requestSerialize: serialize_performance_metrics_v1alpha1_GetMetricsRequest,
    requestDeserialize: deserialize_performance_metrics_v1alpha1_GetMetricsRequest,
    responseSerialize: serialize_performance_metrics_v1alpha1_GetMetricsResponse,
    responseDeserialize: deserialize_performance_metrics_v1alpha1_GetMetricsResponse,
  },
  getTektonMetrics: {
    path: '/performance.metrics.v1alpha1.MetricsAPIService/GetTektonMetrics',
    requestStream: false,
    responseStream: false,
    requestType: performance_metrics_v1alpha1_metrics_api_pb.GetTektonMetricsRequest,
    responseType: performance_metrics_v1alpha1_metrics_api_pb.GetTektonMetricsResponse,
    requestSerialize: serialize_performance_metrics_v1alpha1_GetTektonMetricsRequest,
    requestDeserialize: deserialize_performance_metrics_v1alpha1_GetTektonMetricsRequest,
    responseSerialize: serialize_performance_metrics_v1alpha1_GetTektonMetricsResponse,
    responseDeserialize: deserialize_performance_metrics_v1alpha1_GetTektonMetricsResponse,
  },
};

exports.MetricsAPIServiceClient = grpc.makeGenericClientConstructor(MetricsAPIServiceService);
