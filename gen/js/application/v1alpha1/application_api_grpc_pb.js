// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var application_v1alpha1_application_api_pb = require('../../application/v1alpha1/application_api_pb.js');
var application_v1alpha1_application_pb = require('../../application/v1alpha1/application_pb.js');

function serialize_application_v1alpha1_CreateApplicationRequest(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.CreateApplicationRequest)) {
    throw new Error('Expected argument of type application.v1alpha1.CreateApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_CreateApplicationRequest(buffer_arg) {
  return application_v1alpha1_application_api_pb.CreateApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_CreateApplicationResponse(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.CreateApplicationResponse)) {
    throw new Error('Expected argument of type application.v1alpha1.CreateApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_CreateApplicationResponse(buffer_arg) {
  return application_v1alpha1_application_api_pb.CreateApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_DeleteApplicationRequest(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.DeleteApplicationRequest)) {
    throw new Error('Expected argument of type application.v1alpha1.DeleteApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_DeleteApplicationRequest(buffer_arg) {
  return application_v1alpha1_application_api_pb.DeleteApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_DeleteApplicationResponse(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.DeleteApplicationResponse)) {
    throw new Error('Expected argument of type application.v1alpha1.DeleteApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_DeleteApplicationResponse(buffer_arg) {
  return application_v1alpha1_application_api_pb.DeleteApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_DeleteApplicationsByIntegrationRequest(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.DeleteApplicationsByIntegrationRequest)) {
    throw new Error('Expected argument of type application.v1alpha1.DeleteApplicationsByIntegrationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_DeleteApplicationsByIntegrationRequest(buffer_arg) {
  return application_v1alpha1_application_api_pb.DeleteApplicationsByIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_DeleteApplicationsByIntegrationResponse(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.DeleteApplicationsByIntegrationResponse)) {
    throw new Error('Expected argument of type application.v1alpha1.DeleteApplicationsByIntegrationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_DeleteApplicationsByIntegrationResponse(buffer_arg) {
  return application_v1alpha1_application_api_pb.DeleteApplicationsByIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_GetApplicationRequest(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.GetApplicationRequest)) {
    throw new Error('Expected argument of type application.v1alpha1.GetApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_GetApplicationRequest(buffer_arg) {
  return application_v1alpha1_application_api_pb.GetApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_GetApplicationResponse(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.GetApplicationResponse)) {
    throw new Error('Expected argument of type application.v1alpha1.GetApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_GetApplicationResponse(buffer_arg) {
  return application_v1alpha1_application_api_pb.GetApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_ListApplicationRequest(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.ListApplicationRequest)) {
    throw new Error('Expected argument of type application.v1alpha1.ListApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_ListApplicationRequest(buffer_arg) {
  return application_v1alpha1_application_api_pb.ListApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_ListApplicationResponse(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.ListApplicationResponse)) {
    throw new Error('Expected argument of type application.v1alpha1.ListApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_ListApplicationResponse(buffer_arg) {
  return application_v1alpha1_application_api_pb.ListApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_ListApplicationsByOrganizationRequest(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.ListApplicationsByOrganizationRequest)) {
    throw new Error('Expected argument of type application.v1alpha1.ListApplicationsByOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_ListApplicationsByOrganizationRequest(buffer_arg) {
  return application_v1alpha1_application_api_pb.ListApplicationsByOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_ListApplicationsByOrganizationResponse(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.ListApplicationsByOrganizationResponse)) {
    throw new Error('Expected argument of type application.v1alpha1.ListApplicationsByOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_ListApplicationsByOrganizationResponse(buffer_arg) {
  return application_v1alpha1_application_api_pb.ListApplicationsByOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_UpdateApplicationRequest(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.UpdateApplicationRequest)) {
    throw new Error('Expected argument of type application.v1alpha1.UpdateApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_UpdateApplicationRequest(buffer_arg) {
  return application_v1alpha1_application_api_pb.UpdateApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_application_v1alpha1_UpdateApplicationResponse(arg) {
  if (!(arg instanceof application_v1alpha1_application_api_pb.UpdateApplicationResponse)) {
    throw new Error('Expected argument of type application.v1alpha1.UpdateApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_application_v1alpha1_UpdateApplicationResponse(buffer_arg) {
  return application_v1alpha1_application_api_pb.UpdateApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "application.proto";
var ApplicationServiceService = exports.ApplicationServiceService = {
  // Application
  createApplication: {
    path: '/application.v1alpha1.ApplicationService/CreateApplication',
    requestStream: false,
    responseStream: false,
    requestType: application_v1alpha1_application_api_pb.CreateApplicationRequest,
    responseType: application_v1alpha1_application_api_pb.CreateApplicationResponse,
    requestSerialize: serialize_application_v1alpha1_CreateApplicationRequest,
    requestDeserialize: deserialize_application_v1alpha1_CreateApplicationRequest,
    responseSerialize: serialize_application_v1alpha1_CreateApplicationResponse,
    responseDeserialize: deserialize_application_v1alpha1_CreateApplicationResponse,
  },
  listApplication: {
    path: '/application.v1alpha1.ApplicationService/ListApplication',
    requestStream: false,
    responseStream: false,
    requestType: application_v1alpha1_application_api_pb.ListApplicationRequest,
    responseType: application_v1alpha1_application_api_pb.ListApplicationResponse,
    requestSerialize: serialize_application_v1alpha1_ListApplicationRequest,
    requestDeserialize: deserialize_application_v1alpha1_ListApplicationRequest,
    responseSerialize: serialize_application_v1alpha1_ListApplicationResponse,
    responseDeserialize: deserialize_application_v1alpha1_ListApplicationResponse,
  },
  getApplication: {
    path: '/application.v1alpha1.ApplicationService/GetApplication',
    requestStream: false,
    responseStream: false,
    requestType: application_v1alpha1_application_api_pb.GetApplicationRequest,
    responseType: application_v1alpha1_application_api_pb.GetApplicationResponse,
    requestSerialize: serialize_application_v1alpha1_GetApplicationRequest,
    requestDeserialize: deserialize_application_v1alpha1_GetApplicationRequest,
    responseSerialize: serialize_application_v1alpha1_GetApplicationResponse,
    responseDeserialize: deserialize_application_v1alpha1_GetApplicationResponse,
  },
  deleteApplication: {
    path: '/application.v1alpha1.ApplicationService/DeleteApplication',
    requestStream: false,
    responseStream: false,
    requestType: application_v1alpha1_application_api_pb.DeleteApplicationRequest,
    responseType: application_v1alpha1_application_api_pb.DeleteApplicationResponse,
    requestSerialize: serialize_application_v1alpha1_DeleteApplicationRequest,
    requestDeserialize: deserialize_application_v1alpha1_DeleteApplicationRequest,
    responseSerialize: serialize_application_v1alpha1_DeleteApplicationResponse,
    responseDeserialize: deserialize_application_v1alpha1_DeleteApplicationResponse,
  },
  updateApplication: {
    path: '/application.v1alpha1.ApplicationService/UpdateApplication',
    requestStream: false,
    responseStream: false,
    requestType: application_v1alpha1_application_api_pb.UpdateApplicationRequest,
    responseType: application_v1alpha1_application_api_pb.UpdateApplicationResponse,
    requestSerialize: serialize_application_v1alpha1_UpdateApplicationRequest,
    requestDeserialize: deserialize_application_v1alpha1_UpdateApplicationRequest,
    responseSerialize: serialize_application_v1alpha1_UpdateApplicationResponse,
    responseDeserialize: deserialize_application_v1alpha1_UpdateApplicationResponse,
  },
  deleteApplicationsByIntegration: {
    path: '/application.v1alpha1.ApplicationService/DeleteApplicationsByIntegration',
    requestStream: false,
    responseStream: false,
    requestType: application_v1alpha1_application_api_pb.DeleteApplicationsByIntegrationRequest,
    responseType: application_v1alpha1_application_api_pb.DeleteApplicationsByIntegrationResponse,
    requestSerialize: serialize_application_v1alpha1_DeleteApplicationsByIntegrationRequest,
    requestDeserialize: deserialize_application_v1alpha1_DeleteApplicationsByIntegrationRequest,
    responseSerialize: serialize_application_v1alpha1_DeleteApplicationsByIntegrationResponse,
    responseDeserialize: deserialize_application_v1alpha1_DeleteApplicationsByIntegrationResponse,
  },
  listApplicationsByOrganization: {
    path: '/application.v1alpha1.ApplicationService/ListApplicationsByOrganization',
    requestStream: false,
    responseStream: false,
    requestType: application_v1alpha1_application_api_pb.ListApplicationsByOrganizationRequest,
    responseType: application_v1alpha1_application_api_pb.ListApplicationsByOrganizationResponse,
    requestSerialize: serialize_application_v1alpha1_ListApplicationsByOrganizationRequest,
    requestDeserialize: deserialize_application_v1alpha1_ListApplicationsByOrganizationRequest,
    responseSerialize: serialize_application_v1alpha1_ListApplicationsByOrganizationResponse,
    responseDeserialize: deserialize_application_v1alpha1_ListApplicationsByOrganizationResponse,
  },
};

exports.ApplicationServiceClient = grpc.makeGenericClientConstructor(ApplicationServiceService);
