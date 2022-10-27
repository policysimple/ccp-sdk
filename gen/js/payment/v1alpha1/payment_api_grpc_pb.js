// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var payment_v1alpha1_payment_api_pb = require('../../payment/v1alpha1/payment_api_pb.js');
var payment_v1alpha1_payment_pb = require('../../payment/v1alpha1/payment_pb.js');

function serialize_payment_v1alpha1_CancelSubscriptionRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CancelSubscriptionRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.CancelSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CancelSubscriptionRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CancelSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CancelSubscriptionResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CancelSubscriptionResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.CancelSubscriptionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CancelSubscriptionResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CancelSubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_ConsumeByProjectRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.ConsumeByProjectRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.ConsumeByProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_ConsumeByProjectRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.ConsumeByProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_ConsumeByProjectResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.ConsumeByProjectResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.ConsumeByProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_ConsumeByProjectResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.ConsumeByProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateCardRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateCardRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateCardRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateCardRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateCardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateCardResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateCardResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateCardResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateCardResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateCardResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_payment_v1alpha1_CreateInvoiceRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateInvoiceRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateInvoiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateInvoiceRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateInvoiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateInvoiceResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateInvoiceResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateInvoiceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateInvoiceResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateInvoiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_payment_v1alpha1_CreateProjectRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateProjectRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateProjectResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateProjectResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateProjectResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateSubscriptionRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateSubscriptionRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateSubscriptionRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_CreateSubscriptionResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.CreateSubscriptionResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.CreateSubscriptionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_CreateSubscriptionResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.CreateSubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_payment_v1alpha1_DeleteProjectRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.DeleteProjectRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.DeleteProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_DeleteProjectRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.DeleteProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_DeleteProjectResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.DeleteProjectResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.DeleteProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_DeleteProjectResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.DeleteProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetBilingMonthRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetBilingMonthRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetBilingMonthRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetBilingMonthRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetBilingMonthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetBilingMonthResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetBilingMonthResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetBilingMonthResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetBilingMonthResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetBilingMonthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetCustomerRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetCustomerRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetCustomerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetCustomerRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetCustomerResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetCustomerResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetCustomerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetCustomerResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetOrganizationRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetOrganizationRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetOrganizationRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetOrganizationResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetOrganizationResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetOrganizationResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_payment_v1alpha1_GetPaymentsRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetPaymentsRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetPaymentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetPaymentsRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetPaymentsResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetPaymentsResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetPaymentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetPaymentsResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetPaymentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetSubscriptionRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetSubscriptionRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetSubscriptionRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_GetSubscriptionResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.GetSubscriptionResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.GetSubscriptionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_GetSubscriptionResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.GetSubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_InvoiceFilterRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.InvoiceFilterRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.InvoiceFilterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_InvoiceFilterRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.InvoiceFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_InvoiceFilterResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.InvoiceFilterResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.InvoiceFilterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_InvoiceFilterResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.InvoiceFilterResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_payment_v1alpha1_ListProjectsRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.ListProjectsRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.ListProjectsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_ListProjectsRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.ListProjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_ListProjectsResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.ListProjectsResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.ListProjectsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_ListProjectsResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.ListProjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_ListSubscriptionItemsRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.ListSubscriptionItemsRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.ListSubscriptionItemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_ListSubscriptionItemsRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.ListSubscriptionItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_ListSubscriptionItemsResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.ListSubscriptionItemsResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.ListSubscriptionItemsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_ListSubscriptionItemsResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.ListSubscriptionItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_SetDefaultPaymentMethodRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.SetDefaultPaymentMethodRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.SetDefaultPaymentMethodRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_SetDefaultPaymentMethodRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.SetDefaultPaymentMethodRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_SetDefaultPaymentMethodResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.SetDefaultPaymentMethodResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.SetDefaultPaymentMethodResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_SetDefaultPaymentMethodResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.SetDefaultPaymentMethodResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_StopProjectRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.StopProjectRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.StopProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_StopProjectRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.StopProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_StopProjectResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.StopProjectResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.StopProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_StopProjectResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.StopProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_UpdateSubscriptionRequest(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.UpdateSubscriptionRequest)) {
    throw new Error('Expected argument of type payment.v1alpha1.UpdateSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_UpdateSubscriptionRequest(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.UpdateSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_v1alpha1_UpdateSubscriptionResponse(arg) {
  if (!(arg instanceof payment_v1alpha1_payment_api_pb.UpdateSubscriptionResponse)) {
    throw new Error('Expected argument of type payment.v1alpha1.UpdateSubscriptionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_payment_v1alpha1_UpdateSubscriptionResponse(buffer_arg) {
  return payment_v1alpha1_payment_api_pb.UpdateSubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PaymentAPIServiceService = exports.PaymentAPIServiceService = {
  // Create a new service 
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
  createSubscription: {
    path: '/payment.v1alpha1.PaymentAPIService/CreateSubscription',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.CreateSubscriptionRequest,
    responseType: payment_v1alpha1_payment_api_pb.CreateSubscriptionResponse,
    requestSerialize: serialize_payment_v1alpha1_CreateSubscriptionRequest,
    requestDeserialize: deserialize_payment_v1alpha1_CreateSubscriptionRequest,
    responseSerialize: serialize_payment_v1alpha1_CreateSubscriptionResponse,
    responseDeserialize: deserialize_payment_v1alpha1_CreateSubscriptionResponse,
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
  createCard: {
    path: '/payment.v1alpha1.PaymentAPIService/CreateCard',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.CreateCardRequest,
    responseType: payment_v1alpha1_payment_api_pb.CreateCardResponse,
    requestSerialize: serialize_payment_v1alpha1_CreateCardRequest,
    requestDeserialize: deserialize_payment_v1alpha1_CreateCardRequest,
    responseSerialize: serialize_payment_v1alpha1_CreateCardResponse,
    responseDeserialize: deserialize_payment_v1alpha1_CreateCardResponse,
  },
  createProject: {
    path: '/payment.v1alpha1.PaymentAPIService/CreateProject',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.CreateProjectRequest,
    responseType: payment_v1alpha1_payment_api_pb.CreateProjectResponse,
    requestSerialize: serialize_payment_v1alpha1_CreateProjectRequest,
    requestDeserialize: deserialize_payment_v1alpha1_CreateProjectRequest,
    responseSerialize: serialize_payment_v1alpha1_CreateProjectResponse,
    responseDeserialize: deserialize_payment_v1alpha1_CreateProjectResponse,
  },
  createInvoice: {
    path: '/payment.v1alpha1.PaymentAPIService/CreateInvoice',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.CreateInvoiceRequest,
    responseType: payment_v1alpha1_payment_api_pb.CreateInvoiceResponse,
    requestSerialize: serialize_payment_v1alpha1_CreateInvoiceRequest,
    requestDeserialize: deserialize_payment_v1alpha1_CreateInvoiceRequest,
    responseSerialize: serialize_payment_v1alpha1_CreateInvoiceResponse,
    responseDeserialize: deserialize_payment_v1alpha1_CreateInvoiceResponse,
  },
  // Get the service
  getOrganization: {
    path: '/payment.v1alpha1.PaymentAPIService/GetOrganization',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.GetOrganizationRequest,
    responseType: payment_v1alpha1_payment_api_pb.GetOrganizationResponse,
    requestSerialize: serialize_payment_v1alpha1_GetOrganizationRequest,
    requestDeserialize: deserialize_payment_v1alpha1_GetOrganizationRequest,
    responseSerialize: serialize_payment_v1alpha1_GetOrganizationResponse,
    responseDeserialize: deserialize_payment_v1alpha1_GetOrganizationResponse,
  },
  getSubscription: {
    path: '/payment.v1alpha1.PaymentAPIService/GetSubscription',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.GetSubscriptionRequest,
    responseType: payment_v1alpha1_payment_api_pb.GetSubscriptionResponse,
    requestSerialize: serialize_payment_v1alpha1_GetSubscriptionRequest,
    requestDeserialize: deserialize_payment_v1alpha1_GetSubscriptionRequest,
    responseSerialize: serialize_payment_v1alpha1_GetSubscriptionResponse,
    responseDeserialize: deserialize_payment_v1alpha1_GetSubscriptionResponse,
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
  getCustomer: {
    path: '/payment.v1alpha1.PaymentAPIService/GetCustomer',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.GetCustomerRequest,
    responseType: payment_v1alpha1_payment_api_pb.GetCustomerResponse,
    requestSerialize: serialize_payment_v1alpha1_GetCustomerRequest,
    requestDeserialize: deserialize_payment_v1alpha1_GetCustomerRequest,
    responseSerialize: serialize_payment_v1alpha1_GetCustomerResponse,
    responseDeserialize: deserialize_payment_v1alpha1_GetCustomerResponse,
  },
  getBilingMonth: {
    path: '/payment.v1alpha1.PaymentAPIService/GetBilingMonth',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.GetBilingMonthRequest,
    responseType: payment_v1alpha1_payment_api_pb.GetBilingMonthResponse,
    requestSerialize: serialize_payment_v1alpha1_GetBilingMonthRequest,
    requestDeserialize: deserialize_payment_v1alpha1_GetBilingMonthRequest,
    responseSerialize: serialize_payment_v1alpha1_GetBilingMonthResponse,
    responseDeserialize: deserialize_payment_v1alpha1_GetBilingMonthResponse,
  },
  getPayments: {
    path: '/payment.v1alpha1.PaymentAPIService/GetPayments',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.GetPaymentsRequest,
    responseType: payment_v1alpha1_payment_api_pb.GetPaymentsResponse,
    requestSerialize: serialize_payment_v1alpha1_GetPaymentsRequest,
    requestDeserialize: deserialize_payment_v1alpha1_GetPaymentsRequest,
    responseSerialize: serialize_payment_v1alpha1_GetPaymentsResponse,
    responseDeserialize: deserialize_payment_v1alpha1_GetPaymentsResponse,
  },
  // List the service
  listProjects: {
    path: '/payment.v1alpha1.PaymentAPIService/ListProjects',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.ListProjectsRequest,
    responseType: payment_v1alpha1_payment_api_pb.ListProjectsResponse,
    requestSerialize: serialize_payment_v1alpha1_ListProjectsRequest,
    requestDeserialize: deserialize_payment_v1alpha1_ListProjectsRequest,
    responseSerialize: serialize_payment_v1alpha1_ListProjectsResponse,
    responseDeserialize: deserialize_payment_v1alpha1_ListProjectsResponse,
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
  listSubscriptionItems: {
    path: '/payment.v1alpha1.PaymentAPIService/ListSubscriptionItems',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.ListSubscriptionItemsRequest,
    responseType: payment_v1alpha1_payment_api_pb.ListSubscriptionItemsResponse,
    requestSerialize: serialize_payment_v1alpha1_ListSubscriptionItemsRequest,
    requestDeserialize: deserialize_payment_v1alpha1_ListSubscriptionItemsRequest,
    responseSerialize: serialize_payment_v1alpha1_ListSubscriptionItemsResponse,
    responseDeserialize: deserialize_payment_v1alpha1_ListSubscriptionItemsResponse,
  },
  // Update service
  updateSubscription: {
    path: '/payment.v1alpha1.PaymentAPIService/UpdateSubscription',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.UpdateSubscriptionRequest,
    responseType: payment_v1alpha1_payment_api_pb.UpdateSubscriptionResponse,
    requestSerialize: serialize_payment_v1alpha1_UpdateSubscriptionRequest,
    requestDeserialize: deserialize_payment_v1alpha1_UpdateSubscriptionRequest,
    responseSerialize: serialize_payment_v1alpha1_UpdateSubscriptionResponse,
    responseDeserialize: deserialize_payment_v1alpha1_UpdateSubscriptionResponse,
  },
  setDefaultPaymentMethod: {
    path: '/payment.v1alpha1.PaymentAPIService/SetDefaultPaymentMethod',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.SetDefaultPaymentMethodRequest,
    responseType: payment_v1alpha1_payment_api_pb.SetDefaultPaymentMethodResponse,
    requestSerialize: serialize_payment_v1alpha1_SetDefaultPaymentMethodRequest,
    requestDeserialize: deserialize_payment_v1alpha1_SetDefaultPaymentMethodRequest,
    responseSerialize: serialize_payment_v1alpha1_SetDefaultPaymentMethodResponse,
    responseDeserialize: deserialize_payment_v1alpha1_SetDefaultPaymentMethodResponse,
  },
  // Delete service
  deleteProject: {
    path: '/payment.v1alpha1.PaymentAPIService/DeleteProject',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.DeleteProjectRequest,
    responseType: payment_v1alpha1_payment_api_pb.DeleteProjectResponse,
    requestSerialize: serialize_payment_v1alpha1_DeleteProjectRequest,
    requestDeserialize: deserialize_payment_v1alpha1_DeleteProjectRequest,
    responseSerialize: serialize_payment_v1alpha1_DeleteProjectResponse,
    responseDeserialize: deserialize_payment_v1alpha1_DeleteProjectResponse,
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
  cancelSubscription: {
    path: '/payment.v1alpha1.PaymentAPIService/CancelSubscription',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.CancelSubscriptionRequest,
    responseType: payment_v1alpha1_payment_api_pb.CancelSubscriptionResponse,
    requestSerialize: serialize_payment_v1alpha1_CancelSubscriptionRequest,
    requestDeserialize: deserialize_payment_v1alpha1_CancelSubscriptionRequest,
    responseSerialize: serialize_payment_v1alpha1_CancelSubscriptionResponse,
    responseDeserialize: deserialize_payment_v1alpha1_CancelSubscriptionResponse,
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
  // Filter service
  invoiceFilter: {
    path: '/payment.v1alpha1.PaymentAPIService/InvoiceFilter',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.InvoiceFilterRequest,
    responseType: payment_v1alpha1_payment_api_pb.InvoiceFilterResponse,
    requestSerialize: serialize_payment_v1alpha1_InvoiceFilterRequest,
    requestDeserialize: deserialize_payment_v1alpha1_InvoiceFilterRequest,
    responseSerialize: serialize_payment_v1alpha1_InvoiceFilterResponse,
    responseDeserialize: deserialize_payment_v1alpha1_InvoiceFilterResponse,
  },
  consumeByProject: {
    path: '/payment.v1alpha1.PaymentAPIService/ConsumeByProject',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.ConsumeByProjectRequest,
    responseType: payment_v1alpha1_payment_api_pb.ConsumeByProjectResponse,
    requestSerialize: serialize_payment_v1alpha1_ConsumeByProjectRequest,
    requestDeserialize: deserialize_payment_v1alpha1_ConsumeByProjectRequest,
    responseSerialize: serialize_payment_v1alpha1_ConsumeByProjectResponse,
    responseDeserialize: deserialize_payment_v1alpha1_ConsumeByProjectResponse,
  },
  // Pause Project Consumption
  stopProject: {
    path: '/payment.v1alpha1.PaymentAPIService/StopProject',
    requestStream: false,
    responseStream: false,
    requestType: payment_v1alpha1_payment_api_pb.StopProjectRequest,
    responseType: payment_v1alpha1_payment_api_pb.StopProjectResponse,
    requestSerialize: serialize_payment_v1alpha1_StopProjectRequest,
    requestDeserialize: deserialize_payment_v1alpha1_StopProjectRequest,
    responseSerialize: serialize_payment_v1alpha1_StopProjectResponse,
    responseDeserialize: deserialize_payment_v1alpha1_StopProjectResponse,
  },
};

exports.PaymentAPIServiceClient = grpc.makeGenericClientConstructor(PaymentAPIServiceService);
