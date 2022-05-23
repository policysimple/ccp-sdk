// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var billing_v1alpha1_billing_api_pb = require('../../billing/v1alpha1/billing_api_pb.js');
var billing_v1alpha1_billing_pb = require('../../billing/v1alpha1/billing_pb.js');

function serialize_billing_v1alpha1_CreateApplicationRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.CreateApplicationRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.CreateApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_CreateApplicationRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.CreateApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_CreateApplicationResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.CreateApplicationResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.CreateApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_CreateApplicationResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.CreateApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_CreateMetricRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.CreateMetricRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.CreateMetricRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_CreateMetricRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.CreateMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_CreateMetricResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.CreateMetricResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.CreateMetricResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_CreateMetricResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.CreateMetricResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_CreateOrganizationRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.CreateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_CreateOrganizationRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_CreateOrganizationResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.CreateOrganizationResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.CreateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_CreateOrganizationResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.CreateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_GetApplicationRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.GetApplicationRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.GetApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_GetApplicationRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.GetApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_GetApplicationResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.GetApplicationResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.GetApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_GetApplicationResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.GetApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_GetMetricRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.GetMetricRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.GetMetricRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_GetMetricRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.GetMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_GetMetricResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.GetMetricResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.GetMetricResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_GetMetricResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.GetMetricResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_GetOrganizationRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.GetOrganizationRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.GetOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_GetOrganizationRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_GetOrganizationResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.GetOrganizationResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.GetOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_GetOrganizationResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.GetOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_UpdateApplicationRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.UpdateApplicationRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.UpdateApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_UpdateApplicationRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.UpdateApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_UpdateApplicationResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.UpdateApplicationResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.UpdateApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_UpdateApplicationResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.UpdateApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_UpdateMetricRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.UpdateMetricRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.UpdateMetricRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_UpdateMetricRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.UpdateMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_UpdateMetricResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.UpdateMetricResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.UpdateMetricResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_UpdateMetricResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.UpdateMetricResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_UpdateOrganizationRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.UpdateOrganizationRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.UpdateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_UpdateOrganizationRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.UpdateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_UpdateOrganizationResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.UpdateOrganizationResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.UpdateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_UpdateOrganizationResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.UpdateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BillingServiceService = exports.BillingServiceService = {
  createOrganization: {
    path: '/billing.v1alpha1.BillingService/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.CreateOrganizationRequest,
    responseType: billing_v1alpha1_billing_api_pb.CreateOrganizationResponse,
    requestSerialize: serialize_billing_v1alpha1_CreateOrganizationRequest,
    requestDeserialize: deserialize_billing_v1alpha1_CreateOrganizationRequest,
    responseSerialize: serialize_billing_v1alpha1_CreateOrganizationResponse,
    responseDeserialize: deserialize_billing_v1alpha1_CreateOrganizationResponse,
  },
  getOrganization: {
    path: '/billing.v1alpha1.BillingService/GetOrganization',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.GetOrganizationRequest,
    responseType: billing_v1alpha1_billing_api_pb.GetOrganizationResponse,
    requestSerialize: serialize_billing_v1alpha1_GetOrganizationRequest,
    requestDeserialize: deserialize_billing_v1alpha1_GetOrganizationRequest,
    responseSerialize: serialize_billing_v1alpha1_GetOrganizationResponse,
    responseDeserialize: deserialize_billing_v1alpha1_GetOrganizationResponse,
  },
  updateOrganization: {
    path: '/billing.v1alpha1.BillingService/UpdateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.UpdateOrganizationRequest,
    responseType: billing_v1alpha1_billing_api_pb.UpdateOrganizationResponse,
    requestSerialize: serialize_billing_v1alpha1_UpdateOrganizationRequest,
    requestDeserialize: deserialize_billing_v1alpha1_UpdateOrganizationRequest,
    responseSerialize: serialize_billing_v1alpha1_UpdateOrganizationResponse,
    responseDeserialize: deserialize_billing_v1alpha1_UpdateOrganizationResponse,
  },
  createApplication: {
    path: '/billing.v1alpha1.BillingService/CreateApplication',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.CreateApplicationRequest,
    responseType: billing_v1alpha1_billing_api_pb.CreateApplicationResponse,
    requestSerialize: serialize_billing_v1alpha1_CreateApplicationRequest,
    requestDeserialize: deserialize_billing_v1alpha1_CreateApplicationRequest,
    responseSerialize: serialize_billing_v1alpha1_CreateApplicationResponse,
    responseDeserialize: deserialize_billing_v1alpha1_CreateApplicationResponse,
  },
  getApplication: {
    path: '/billing.v1alpha1.BillingService/GetApplication',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.GetApplicationRequest,
    responseType: billing_v1alpha1_billing_api_pb.GetApplicationResponse,
    requestSerialize: serialize_billing_v1alpha1_GetApplicationRequest,
    requestDeserialize: deserialize_billing_v1alpha1_GetApplicationRequest,
    responseSerialize: serialize_billing_v1alpha1_GetApplicationResponse,
    responseDeserialize: deserialize_billing_v1alpha1_GetApplicationResponse,
  },
  updateApplication: {
    path: '/billing.v1alpha1.BillingService/UpdateApplication',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.UpdateApplicationRequest,
    responseType: billing_v1alpha1_billing_api_pb.UpdateApplicationResponse,
    requestSerialize: serialize_billing_v1alpha1_UpdateApplicationRequest,
    requestDeserialize: deserialize_billing_v1alpha1_UpdateApplicationRequest,
    responseSerialize: serialize_billing_v1alpha1_UpdateApplicationResponse,
    responseDeserialize: deserialize_billing_v1alpha1_UpdateApplicationResponse,
  },
  createMetric: {
    path: '/billing.v1alpha1.BillingService/CreateMetric',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.CreateMetricRequest,
    responseType: billing_v1alpha1_billing_api_pb.CreateMetricResponse,
    requestSerialize: serialize_billing_v1alpha1_CreateMetricRequest,
    requestDeserialize: deserialize_billing_v1alpha1_CreateMetricRequest,
    responseSerialize: serialize_billing_v1alpha1_CreateMetricResponse,
    responseDeserialize: deserialize_billing_v1alpha1_CreateMetricResponse,
  },
  getMetric: {
    path: '/billing.v1alpha1.BillingService/GetMetric',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.GetMetricRequest,
    responseType: billing_v1alpha1_billing_api_pb.GetMetricResponse,
    requestSerialize: serialize_billing_v1alpha1_GetMetricRequest,
    requestDeserialize: deserialize_billing_v1alpha1_GetMetricRequest,
    responseSerialize: serialize_billing_v1alpha1_GetMetricResponse,
    responseDeserialize: deserialize_billing_v1alpha1_GetMetricResponse,
  },
  updateMetric: {
    path: '/billing.v1alpha1.BillingService/UpdateMetric',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.UpdateMetricRequest,
    responseType: billing_v1alpha1_billing_api_pb.UpdateMetricResponse,
    requestSerialize: serialize_billing_v1alpha1_UpdateMetricRequest,
    requestDeserialize: deserialize_billing_v1alpha1_UpdateMetricRequest,
    responseSerialize: serialize_billing_v1alpha1_UpdateMetricResponse,
    responseDeserialize: deserialize_billing_v1alpha1_UpdateMetricResponse,
  },
};

exports.BillingServiceClient = grpc.makeGenericClientConstructor(BillingServiceService);
