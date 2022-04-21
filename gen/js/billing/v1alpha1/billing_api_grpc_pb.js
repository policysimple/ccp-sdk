// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var billing_v1alpha1_billing_api_pb = require('../../billing/v1alpha1/billing_api_pb.js');
var billing_v1alpha1_billing_pb = require('../../billing/v1alpha1/billing_pb.js');

function serialize_billing_v1alpha1_CreateBillingRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.CreateBillingRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.CreateBillingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_CreateBillingRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.CreateBillingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_CreateBillingResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.CreateBillingResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.CreateBillingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_CreateBillingResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.CreateBillingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_GetBillingRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.GetBillingRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.GetBillingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_GetBillingRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.GetBillingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_GetBillingResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.GetBillingResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.GetBillingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_GetBillingResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.GetBillingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_ListBillingsRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.ListBillingsRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.ListBillingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_ListBillingsRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.ListBillingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_ListBillingsResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.ListBillingsResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.ListBillingsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_ListBillingsResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.ListBillingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_UpdateBillingRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.UpdateBillingRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.UpdateBillingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_UpdateBillingRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.UpdateBillingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_UpdateBillingResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.UpdateBillingResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.UpdateBillingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_UpdateBillingResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.UpdateBillingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BillingServiceService = exports.BillingServiceService = {
  createBilling: {
    path: '/billing.v1alpha1.BillingService/CreateBilling',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.CreateBillingRequest,
    responseType: billing_v1alpha1_billing_api_pb.CreateBillingResponse,
    requestSerialize: serialize_billing_v1alpha1_CreateBillingRequest,
    requestDeserialize: deserialize_billing_v1alpha1_CreateBillingRequest,
    responseSerialize: serialize_billing_v1alpha1_CreateBillingResponse,
    responseDeserialize: deserialize_billing_v1alpha1_CreateBillingResponse,
  },
  getBilling: {
    path: '/billing.v1alpha1.BillingService/GetBilling',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.GetBillingRequest,
    responseType: billing_v1alpha1_billing_api_pb.GetBillingResponse,
    requestSerialize: serialize_billing_v1alpha1_GetBillingRequest,
    requestDeserialize: deserialize_billing_v1alpha1_GetBillingRequest,
    responseSerialize: serialize_billing_v1alpha1_GetBillingResponse,
    responseDeserialize: deserialize_billing_v1alpha1_GetBillingResponse,
  },
  listBillings: {
    path: '/billing.v1alpha1.BillingService/ListBillings',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.ListBillingsRequest,
    responseType: billing_v1alpha1_billing_api_pb.ListBillingsResponse,
    requestSerialize: serialize_billing_v1alpha1_ListBillingsRequest,
    requestDeserialize: deserialize_billing_v1alpha1_ListBillingsRequest,
    responseSerialize: serialize_billing_v1alpha1_ListBillingsResponse,
    responseDeserialize: deserialize_billing_v1alpha1_ListBillingsResponse,
  },
  updateBilling: {
    path: '/billing.v1alpha1.BillingService/UpdateBilling',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.UpdateBillingRequest,
    responseType: billing_v1alpha1_billing_api_pb.UpdateBillingResponse,
    requestSerialize: serialize_billing_v1alpha1_UpdateBillingRequest,
    requestDeserialize: deserialize_billing_v1alpha1_UpdateBillingRequest,
    responseSerialize: serialize_billing_v1alpha1_UpdateBillingResponse,
    responseDeserialize: deserialize_billing_v1alpha1_UpdateBillingResponse,
  },
};

exports.BillingServiceClient = grpc.makeGenericClientConstructor(BillingServiceService);
