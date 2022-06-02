// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var billing_v1alpha1_billing_api_pb = require('../../billing/v1alpha1/billing_api_pb.js');
var billing_v1alpha1_billing_pb = require('../../billing/v1alpha1/billing_pb.js');

function serialize_billing_v1alpha1_ReadBillingRequest(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.ReadBillingRequest)) {
    throw new Error('Expected argument of type billing.v1alpha1.ReadBillingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_ReadBillingRequest(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.ReadBillingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_v1alpha1_ReadBillingResponse(arg) {
  if (!(arg instanceof billing_v1alpha1_billing_api_pb.ReadBillingResponse)) {
    throw new Error('Expected argument of type billing.v1alpha1.ReadBillingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_billing_v1alpha1_ReadBillingResponse(buffer_arg) {
  return billing_v1alpha1_billing_api_pb.ReadBillingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BillingServiceService = exports.BillingServiceService = {
  readBilling: {
    path: '/billing.v1alpha1.BillingService/ReadBilling',
    requestStream: false,
    responseStream: false,
    requestType: billing_v1alpha1_billing_api_pb.ReadBillingRequest,
    responseType: billing_v1alpha1_billing_api_pb.ReadBillingResponse,
    requestSerialize: serialize_billing_v1alpha1_ReadBillingRequest,
    requestDeserialize: deserialize_billing_v1alpha1_ReadBillingRequest,
    responseSerialize: serialize_billing_v1alpha1_ReadBillingResponse,
    responseDeserialize: deserialize_billing_v1alpha1_ReadBillingResponse,
  },
};

exports.BillingServiceClient = grpc.makeGenericClientConstructor(BillingServiceService);
