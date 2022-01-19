// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var email_v1alpha1_email_api_pb = require('../../email/v1alpha1/email_api_pb.js');

function serialize_email_v1alpha1_SendEmailRequest(arg) {
  if (!(arg instanceof email_v1alpha1_email_api_pb.SendEmailRequest)) {
    throw new Error('Expected argument of type email.v1alpha1.SendEmailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_email_v1alpha1_SendEmailRequest(buffer_arg) {
  return email_v1alpha1_email_api_pb.SendEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_email_v1alpha1_SendEmailResponse(arg) {
  if (!(arg instanceof email_v1alpha1_email_api_pb.SendEmailResponse)) {
    throw new Error('Expected argument of type email.v1alpha1.SendEmailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_email_v1alpha1_SendEmailResponse(buffer_arg) {
  return email_v1alpha1_email_api_pb.SendEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmailServiceService = exports.EmailServiceService = {
  // Email
  sendEmail: {
    path: '/email.v1alpha1.EmailService/SendEmail',
    requestStream: false,
    responseStream: false,
    requestType: email_v1alpha1_email_api_pb.SendEmailRequest,
    responseType: email_v1alpha1_email_api_pb.SendEmailResponse,
    requestSerialize: serialize_email_v1alpha1_SendEmailRequest,
    requestDeserialize: deserialize_email_v1alpha1_SendEmailRequest,
    responseSerialize: serialize_email_v1alpha1_SendEmailResponse,
    responseDeserialize: deserialize_email_v1alpha1_SendEmailResponse,
  },
};

exports.EmailServiceClient = grpc.makeGenericClientConstructor(EmailServiceService);
