// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var payment_v1alpha1_payment_api_pb = require('../../payment/v1alpha1/payment_api_pb.js');
var payment_v1alpha1_payment_pb = require('../../payment/v1alpha1/payment_pb.js');

function serialize_payment_v1alpha1_CancelSuscriptionRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CancelSuscriptionRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.CancelSuscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CancelSuscriptionRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CancelSuscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CancelSuscriptionResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CancelSuscriptionResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.CancelSuscriptionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CancelSuscriptionResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CancelSuscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateCustomerRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateCustomerRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateCustomerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateCustomerRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateCustomerResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateCustomerResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateCustomerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateCustomerResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreatePaymentRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreatePaymentRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreatePaymentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreatePaymentRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreatePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreatePaymentResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreatePaymentResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreatePaymentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreatePaymentResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreatePaymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateSuscriptionRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateSuscriptionRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateSuscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateSuscriptionRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateSuscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateSuscriptionResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateSuscriptionResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateSuscriptionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateSuscriptionResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateSuscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_DeleteCustomerRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.DeleteCustomerRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.DeleteCustomerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_DeleteCustomerRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.DeleteCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_DeleteCustomerResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.DeleteCustomerResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.DeleteCustomerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_DeleteCustomerResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.DeleteCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_DeletePaymentRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.DeletePaymentRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.DeletePaymentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_DeletePaymentRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.DeletePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_DeletePaymentResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.DeletePaymentResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.DeletePaymentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_DeletePaymentResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.DeletePaymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetPaymentRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetPaymentRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetPaymentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetPaymentRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetPaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetPaymentResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetPaymentResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetPaymentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetPaymentResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetPaymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetSuscriptionRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetSuscriptionRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetSuscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetSuscriptionRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetSuscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetSuscriptionResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetSuscriptionResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetSuscriptionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetSuscriptionResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetSuscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_ListPaymentRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.ListPaymentRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.ListPaymentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_ListPaymentRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.ListPaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_ListPaymentResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.ListPaymentResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.ListPaymentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_ListPaymentResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.ListPaymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_UpdatePaymentRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.UpdatePaymentRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.UpdatePaymentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_UpdatePaymentRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.UpdatePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_UpdatePaymentResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.UpdatePaymentResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.UpdatePaymentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_UpdatePaymentResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.UpdatePaymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_UpdateSuscriptionRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.UpdateSuscriptionRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.UpdateSuscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_UpdateSuscriptionRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.UpdateSuscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_UpdateSuscriptionResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.UpdateSuscriptionResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.UpdateSuscriptionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_UpdateSuscriptionResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.UpdateSuscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "payment.proto";
var PaymentAPIServiceService = exports.PaymentAPIServiceService = {
  createSuscription: {
    path: '/payment.v1alpha1.PaymentAPIService/CreateSuscription',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.CreateSuscriptionRequest,
    responseType: payment_v1alpha1_payment_api_pb.CreateSuscriptionResponse,
    requestSerialize: serialize_payment_v1alpha1_CreateSuscriptionRequest,
    requestDeserialize: deserialize_payment_v1alpha1_CreateSuscriptionRequest,
    responseSerialize: serialize_payment_v1alpha1_CreateSuscriptionResponse,
    responseDeserialize: deserialize_payment_v1alpha1_CreateSuscriptionResponse,
  },
  updateSuscription: {
    path: '/payment.v1alpha1.PaymentAPIService/UpdateSuscription',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.UpdateSuscriptionRequest,
    responseType: payment_v1alpha1_payment_api_pb.UpdateSuscriptionResponse,
    requestSerialize: serialize_payment_v1alpha1_UpdateSuscriptionRequest,
    requestDeserialize: deserialize_payment_v1alpha1_UpdateSuscriptionRequest,
    responseSerialize: serialize_payment_v1alpha1_UpdateSuscriptionResponse,
    responseDeserialize: deserialize_payment_v1alpha1_UpdateSuscriptionResponse,
  },
  cancelSuscription: {
    path: '/payment.v1alpha1.PaymentAPIService/CancelSuscription',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.CancelSuscriptionRequest,
    responseType: payment_v1alpha1_payment_api_pb.CancelSuscriptionResponse,
    requestSerialize: serialize_payment_v1alpha1_CancelSuscriptionRequest,
    requestDeserialize: deserialize_payment_v1alpha1_CancelSuscriptionRequest,
    responseSerialize: serialize_payment_v1alpha1_CancelSuscriptionResponse,
    responseDeserialize: deserialize_payment_v1alpha1_CancelSuscriptionResponse,
  },
  getSuscription: {
    path: '/payment.v1alpha1.PaymentAPIService/GetSuscription',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.GetSuscriptionRequest,
    responseType: payment_v1alpha1_payment_api_pb.GetSuscriptionResponse,
    requestSerialize: serialize_payment_v1alpha1_GetSuscriptionRequest,
    requestDeserialize: deserialize_payment_v1alpha1_GetSuscriptionRequest,
    responseSerialize: serialize_payment_v1alpha1_GetSuscriptionResponse,
    responseDeserialize: deserialize_payment_v1alpha1_GetSuscriptionResponse,
  },
  createCustomer: {
    path: '/payment.v1alpha1.PaymentAPIService/CreateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.CreateCustomerRequest,
    responseType: payment_v1alpha1_payment_api_pb.CreateCustomerResponse,
    requestSerialize: serialize_payment_v1alpha1_CreateCustomerRequest,
    requestDeserialize: deserialize_payment_v1alpha1_CreateCustomerRequest,
    responseSerialize: serialize_payment_v1alpha1_CreateCustomerResponse,
    responseDeserialize: deserialize_payment_v1alpha1_CreateCustomerResponse,
  },
  deleteCustomer: {
    path: '/payment.v1alpha1.PaymentAPIService/DeleteCustomer',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.DeleteCustomerRequest,
    responseType: payment_v1alpha1_payment_api_pb.DeleteCustomerResponse,
    requestSerialize: serialize_payment_v1alpha1_DeleteCustomerRequest,
    requestDeserialize: deserialize_payment_v1alpha1_DeleteCustomerRequest,
    responseSerialize: serialize_payment_v1alpha1_DeleteCustomerResponse,
    responseDeserialize: deserialize_payment_v1alpha1_DeleteCustomerResponse,
  },
  getPayment: {
    path: '/payment.v1alpha1.PaymentAPIService/GetPayment',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.GetPaymentRequest,
    responseType: payment_v1alpha1_payment_api_pb.GetPaymentResponse,
    requestSerialize: serialize_payment_v1alpha1_GetPaymentRequest,
    requestDeserialize: deserialize_payment_v1alpha1_GetPaymentRequest,
    responseSerialize: serialize_payment_v1alpha1_GetPaymentResponse,
    responseDeserialize: deserialize_payment_v1alpha1_GetPaymentResponse,
  },
  createPayment: {
    path: '/payment.v1alpha1.PaymentAPIService/CreatePayment',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.CreatePaymentRequest,
    responseType: payment_v1alpha1_payment_api_pb.CreatePaymentResponse,
    requestSerialize: serialize_payment_v1alpha1_CreatePaymentRequest,
    requestDeserialize: deserialize_payment_v1alpha1_CreatePaymentRequest,
    responseSerialize: serialize_payment_v1alpha1_CreatePaymentResponse,
    responseDeserialize: deserialize_payment_v1alpha1_CreatePaymentResponse,
  },
  updatePayment: {
    path: '/payment.v1alpha1.PaymentAPIService/UpdatePayment',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.UpdatePaymentRequest,
    responseType: payment_v1alpha1_payment_api_pb.UpdatePaymentResponse,
    requestSerialize: serialize_payment_v1alpha1_UpdatePaymentRequest,
    requestDeserialize: deserialize_payment_v1alpha1_UpdatePaymentRequest,
    responseSerialize: serialize_payment_v1alpha1_UpdatePaymentResponse,
    responseDeserialize: deserialize_payment_v1alpha1_UpdatePaymentResponse,
  },
  deletePayment: {
    path: '/payment.v1alpha1.PaymentAPIService/DeletePayment',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.DeletePaymentRequest,
    responseType: payment_v1alpha1_payment_api_pb.DeletePaymentResponse,
    requestSerialize: serialize_payment_v1alpha1_DeletePaymentRequest,
    requestDeserialize: deserialize_payment_v1alpha1_DeletePaymentRequest,
    responseSerialize: serialize_payment_v1alpha1_DeletePaymentResponse,
    responseDeserialize: deserialize_payment_v1alpha1_DeletePaymentResponse,
  },
  listPayment: {
    path: '/payment.v1alpha1.PaymentAPIService/ListPayment',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.ListPaymentRequest,
    responseType: payment_v1alpha1_payment_api_pb.ListPaymentResponse,
    requestSerialize: serialize_payment_v1alpha1_ListPaymentRequest,
    requestDeserialize: deserialize_payment_v1alpha1_ListPaymentRequest,
    responseSerialize: serialize_payment_v1alpha1_ListPaymentResponse,
    responseDeserialize: deserialize_payment_v1alpha1_ListPaymentResponse,
  },
};

exports.PaymentAPIServiceClient = grpc.makeGenericClientConstructor(PaymentAPIServiceService);
