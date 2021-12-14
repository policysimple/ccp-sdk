// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var source_v1alpha1_source_pb = require('../../source/v1alpha1/source_pb.js');

function serialize_source_v1alpha1_CreateIntegrationRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.CreateIntegrationRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.CreateIntegrationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_CreateIntegrationRequest(buffer_arg) {
  return source_v1alpha1_source_pb.CreateIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_CreateIntegrationResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.CreateIntegrationResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.CreateIntegrationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_CreateIntegrationResponse(buffer_arg) {
  return source_v1alpha1_source_pb.CreateIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_CreateProviderRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.CreateProviderRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.CreateProviderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_CreateProviderRequest(buffer_arg) {
  return source_v1alpha1_source_pb.CreateProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_CreateProviderResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.CreateProviderResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.CreateProviderResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_CreateProviderResponse(buffer_arg) {
  return source_v1alpha1_source_pb.CreateProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_DeleteIntegrationRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.DeleteIntegrationRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.DeleteIntegrationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_DeleteIntegrationRequest(buffer_arg) {
  return source_v1alpha1_source_pb.DeleteIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_DeleteIntegrationResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.DeleteIntegrationResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.DeleteIntegrationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_DeleteIntegrationResponse(buffer_arg) {
  return source_v1alpha1_source_pb.DeleteIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_DeleteProviderRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.DeleteProviderRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.DeleteProviderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_DeleteProviderRequest(buffer_arg) {
  return source_v1alpha1_source_pb.DeleteProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_DeleteProviderResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.DeleteProviderResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.DeleteProviderResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_DeleteProviderResponse(buffer_arg) {
  return source_v1alpha1_source_pb.DeleteProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_GetIntegrationRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetIntegrationRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.GetIntegrationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetIntegrationRequest(buffer_arg) {
  return source_v1alpha1_source_pb.GetIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_GetIntegrationResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetIntegrationResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.GetIntegrationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetIntegrationResponse(buffer_arg) {
  return source_v1alpha1_source_pb.GetIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_GetProviderRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetProviderRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.GetProviderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetProviderRequest(buffer_arg) {
  return source_v1alpha1_source_pb.GetProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_GetProviderResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetProviderResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.GetProviderResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetProviderResponse(buffer_arg) {
  return source_v1alpha1_source_pb.GetProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_ListIntegrationsRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.ListIntegrationsRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.ListIntegrationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_ListIntegrationsRequest(buffer_arg) {
  return source_v1alpha1_source_pb.ListIntegrationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_ListIntegrationsResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.ListIntegrationsResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.ListIntegrationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_ListIntegrationsResponse(buffer_arg) {
  return source_v1alpha1_source_pb.ListIntegrationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_ListProvidersRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.ListProvidersRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.ListProvidersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_ListProvidersRequest(buffer_arg) {
  return source_v1alpha1_source_pb.ListProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_ListProvidersResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.ListProvidersResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.ListProvidersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_ListProvidersResponse(buffer_arg) {
  return source_v1alpha1_source_pb.ListProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_UpdateIntegrationRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.UpdateIntegrationRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.UpdateIntegrationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_UpdateIntegrationRequest(buffer_arg) {
  return source_v1alpha1_source_pb.UpdateIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_UpdateIntegrationResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.UpdateIntegrationResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.UpdateIntegrationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_UpdateIntegrationResponse(buffer_arg) {
  return source_v1alpha1_source_pb.UpdateIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_UpdateProviderRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.UpdateProviderRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.UpdateProviderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_UpdateProviderRequest(buffer_arg) {
  return source_v1alpha1_source_pb.UpdateProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_UpdateProviderResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.UpdateProviderResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.UpdateProviderResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_UpdateProviderResponse(buffer_arg) {
  return source_v1alpha1_source_pb.UpdateProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SourceServiceService = exports.SourceServiceService = {
  // PROVIDERS
  //
  createProvider: {
    path: '/source.v1alpha1.SourceService/CreateProvider',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.CreateProviderRequest,
    responseType: source_v1alpha1_source_pb.CreateProviderResponse,
    requestSerialize: serialize_source_v1alpha1_CreateProviderRequest,
    requestDeserialize: deserialize_source_v1alpha1_CreateProviderRequest,
    responseSerialize: serialize_source_v1alpha1_CreateProviderResponse,
    responseDeserialize: deserialize_source_v1alpha1_CreateProviderResponse,
  },
  listProviders: {
    path: '/source.v1alpha1.SourceService/ListProviders',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.ListProvidersRequest,
    responseType: source_v1alpha1_source_pb.ListProvidersResponse,
    requestSerialize: serialize_source_v1alpha1_ListProvidersRequest,
    requestDeserialize: deserialize_source_v1alpha1_ListProvidersRequest,
    responseSerialize: serialize_source_v1alpha1_ListProvidersResponse,
    responseDeserialize: deserialize_source_v1alpha1_ListProvidersResponse,
  },
  getProvider: {
    path: '/source.v1alpha1.SourceService/GetProvider',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.GetProviderRequest,
    responseType: source_v1alpha1_source_pb.GetProviderResponse,
    requestSerialize: serialize_source_v1alpha1_GetProviderRequest,
    requestDeserialize: deserialize_source_v1alpha1_GetProviderRequest,
    responseSerialize: serialize_source_v1alpha1_GetProviderResponse,
    responseDeserialize: deserialize_source_v1alpha1_GetProviderResponse,
  },
  updateProvider: {
    path: '/source.v1alpha1.SourceService/UpdateProvider',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.UpdateProviderRequest,
    responseType: source_v1alpha1_source_pb.UpdateProviderResponse,
    requestSerialize: serialize_source_v1alpha1_UpdateProviderRequest,
    requestDeserialize: deserialize_source_v1alpha1_UpdateProviderRequest,
    responseSerialize: serialize_source_v1alpha1_UpdateProviderResponse,
    responseDeserialize: deserialize_source_v1alpha1_UpdateProviderResponse,
  },
  deleteProvider: {
    path: '/source.v1alpha1.SourceService/DeleteProvider',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.DeleteProviderRequest,
    responseType: source_v1alpha1_source_pb.DeleteProviderResponse,
    requestSerialize: serialize_source_v1alpha1_DeleteProviderRequest,
    requestDeserialize: deserialize_source_v1alpha1_DeleteProviderRequest,
    responseSerialize: serialize_source_v1alpha1_DeleteProviderResponse,
    responseDeserialize: deserialize_source_v1alpha1_DeleteProviderResponse,
  },
  // INTEGRATIONS
  //
  createIntegration: {
    path: '/source.v1alpha1.SourceService/CreateIntegration',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.CreateIntegrationRequest,
    responseType: source_v1alpha1_source_pb.CreateIntegrationResponse,
    requestSerialize: serialize_source_v1alpha1_CreateIntegrationRequest,
    requestDeserialize: deserialize_source_v1alpha1_CreateIntegrationRequest,
    responseSerialize: serialize_source_v1alpha1_CreateIntegrationResponse,
    responseDeserialize: deserialize_source_v1alpha1_CreateIntegrationResponse,
  },
  listIntegrations: {
    path: '/source.v1alpha1.SourceService/ListIntegrations',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.ListIntegrationsRequest,
    responseType: source_v1alpha1_source_pb.ListIntegrationsResponse,
    requestSerialize: serialize_source_v1alpha1_ListIntegrationsRequest,
    requestDeserialize: deserialize_source_v1alpha1_ListIntegrationsRequest,
    responseSerialize: serialize_source_v1alpha1_ListIntegrationsResponse,
    responseDeserialize: deserialize_source_v1alpha1_ListIntegrationsResponse,
  },
  getIntegration: {
    path: '/source.v1alpha1.SourceService/GetIntegration',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.GetIntegrationRequest,
    responseType: source_v1alpha1_source_pb.GetIntegrationResponse,
    requestSerialize: serialize_source_v1alpha1_GetIntegrationRequest,
    requestDeserialize: deserialize_source_v1alpha1_GetIntegrationRequest,
    responseSerialize: serialize_source_v1alpha1_GetIntegrationResponse,
    responseDeserialize: deserialize_source_v1alpha1_GetIntegrationResponse,
  },
  updateIntegration: {
    path: '/source.v1alpha1.SourceService/UpdateIntegration',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.UpdateIntegrationRequest,
    responseType: source_v1alpha1_source_pb.UpdateIntegrationResponse,
    requestSerialize: serialize_source_v1alpha1_UpdateIntegrationRequest,
    requestDeserialize: deserialize_source_v1alpha1_UpdateIntegrationRequest,
    responseSerialize: serialize_source_v1alpha1_UpdateIntegrationResponse,
    responseDeserialize: deserialize_source_v1alpha1_UpdateIntegrationResponse,
  },
  deleteIntegration: {
    path: '/source.v1alpha1.SourceService/DeleteIntegration',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.DeleteIntegrationRequest,
    responseType: source_v1alpha1_source_pb.DeleteIntegrationResponse,
    requestSerialize: serialize_source_v1alpha1_DeleteIntegrationRequest,
    requestDeserialize: deserialize_source_v1alpha1_DeleteIntegrationRequest,
    responseSerialize: serialize_source_v1alpha1_DeleteIntegrationResponse,
    responseDeserialize: deserialize_source_v1alpha1_DeleteIntegrationResponse,
  },
};

exports.SourceServiceClient = grpc.makeGenericClientConstructor(SourceServiceService);
