// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var performance_autoscaling_v1alpha1_autoscaling_agent_api_pb = require('../../../performance/autoscaling/v1alpha1/autoscaling_agent_api_pb.js');
var performance_autoscaling_v1alpha1_autoscaling_pb = require('../../../performance/autoscaling/v1alpha1/autoscaling_pb.js');

function serialize_performance_autoscaling_v1alpha1_AgentCreateAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentCreateAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentCreateAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentCreateAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_AgentCreateAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentCreateAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentCreateAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentCreateAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentCreateAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_AgentDeleteAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentDeleteAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentDeleteAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentDeleteAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentDeleteAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_AgentDeleteAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentDeleteAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentDeleteAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentDeleteAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentDeleteAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_AgentGetAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentGetAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentGetAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentGetAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentGetAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_AgentGetAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentGetAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentGetAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentGetAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_AgentListAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentListAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentListAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentListAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentListAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_AgentListAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentListAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentListAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentListAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentListAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_AgentUpdateAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentUpdateAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentUpdateAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentUpdateAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentUpdateAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_AgentUpdateAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentUpdateAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.AgentUpdateAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_AgentUpdateAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentUpdateAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AutoscalingAgentAPIServiceService = exports.AutoscalingAgentAPIServiceService = {
  agentCreateAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentCreateAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentCreateAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentCreateAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_AgentCreateAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentCreateAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_AgentCreateAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentCreateAutoscalingResponse,
  },
  agentUpdateAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentUpdateAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentUpdateAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentUpdateAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_AgentUpdateAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentUpdateAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_AgentUpdateAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentUpdateAutoscalingResponse,
  },
  agentDeleteAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentDeleteAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentDeleteAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentDeleteAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_AgentDeleteAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentDeleteAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_AgentDeleteAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentDeleteAutoscalingResponse,
  },
  agentGetAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentGetAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentGetAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentGetAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_AgentGetAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentGetAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_AgentGetAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentGetAutoscalingResponse,
  },
  agentListAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentListAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentListAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_agent_api_pb.AgentListAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_AgentListAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentListAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_AgentListAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_AgentListAutoscalingResponse,
  },
};

exports.AutoscalingAgentAPIServiceClient = grpc.makeGenericClientConstructor(AutoscalingAgentAPIServiceService);
