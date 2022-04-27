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

function serialize_source_v1alpha1_CreateRepositoryRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.CreateRepositoryRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.CreateRepositoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_CreateRepositoryRequest(buffer_arg) {
  return source_v1alpha1_source_pb.CreateRepositoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_CreateRepositoryResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.CreateRepositoryResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.CreateRepositoryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_CreateRepositoryResponse(buffer_arg) {
  return source_v1alpha1_source_pb.CreateRepositoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_source_v1alpha1_DeleteIntegrationsByOrganizationRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.DeleteIntegrationsByOrganizationRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.DeleteIntegrationsByOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_DeleteIntegrationsByOrganizationRequest(buffer_arg) {
  return source_v1alpha1_source_pb.DeleteIntegrationsByOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_DeleteIntegrationsByOrganizationResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.DeleteIntegrationsByOrganizationResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.DeleteIntegrationsByOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_DeleteIntegrationsByOrganizationResponse(buffer_arg) {
  return source_v1alpha1_source_pb.DeleteIntegrationsByOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_source_v1alpha1_DeleteRepositoryRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.DeleteRepositoryRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.DeleteRepositoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_DeleteRepositoryRequest(buffer_arg) {
  return source_v1alpha1_source_pb.DeleteRepositoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_DeleteRepositoryResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.DeleteRepositoryResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.DeleteRepositoryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_DeleteRepositoryResponse(buffer_arg) {
  return source_v1alpha1_source_pb.DeleteRepositoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_source_v1alpha1_GetOneProviderByNameRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetOneProviderByNameRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.GetOneProviderByNameRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetOneProviderByNameRequest(buffer_arg) {
  return source_v1alpha1_source_pb.GetOneProviderByNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_GetOneProviderByNameResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetOneProviderByNameResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.GetOneProviderByNameResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetOneProviderByNameResponse(buffer_arg) {
  return source_v1alpha1_source_pb.GetOneProviderByNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_source_v1alpha1_GetRepositoryProviderRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetRepositoryProviderRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.GetRepositoryProviderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetRepositoryProviderRequest(buffer_arg) {
  return source_v1alpha1_source_pb.GetRepositoryProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_GetRepositoryProviderResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetRepositoryProviderResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.GetRepositoryProviderResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetRepositoryProviderResponse(buffer_arg) {
  return source_v1alpha1_source_pb.GetRepositoryProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_GetRepositoryRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetRepositoryRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.GetRepositoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetRepositoryRequest(buffer_arg) {
  return source_v1alpha1_source_pb.GetRepositoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_GetRepositoryResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.GetRepositoryResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.GetRepositoryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_GetRepositoryResponse(buffer_arg) {
  return source_v1alpha1_source_pb.GetRepositoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_source_v1alpha1_ListRepositoriesProviderRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.ListRepositoriesProviderRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.ListRepositoriesProviderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_ListRepositoriesProviderRequest(buffer_arg) {
  return source_v1alpha1_source_pb.ListRepositoriesProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_ListRepositoriesProviderResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.ListRepositoriesProviderResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.ListRepositoriesProviderResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_ListRepositoriesProviderResponse(buffer_arg) {
  return source_v1alpha1_source_pb.ListRepositoriesProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_ListRepositoriesRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.ListRepositoriesRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.ListRepositoriesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_ListRepositoriesRequest(buffer_arg) {
  return source_v1alpha1_source_pb.ListRepositoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_ListRepositoriesResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.ListRepositoriesResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.ListRepositoriesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_ListRepositoriesResponse(buffer_arg) {
  return source_v1alpha1_source_pb.ListRepositoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_source_v1alpha1_UpdateRepositoryRequest(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.UpdateRepositoryRequest)) {
    throw new Error('Expected argument of type source.v1alpha1.UpdateRepositoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_UpdateRepositoryRequest(buffer_arg) {
  return source_v1alpha1_source_pb.UpdateRepositoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_source_v1alpha1_UpdateRepositoryResponse(arg) {
  if (!(arg instanceof source_v1alpha1_source_pb.UpdateRepositoryResponse)) {
    throw new Error('Expected argument of type source.v1alpha1.UpdateRepositoryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_source_v1alpha1_UpdateRepositoryResponse(buffer_arg) {
  return source_v1alpha1_source_pb.UpdateRepositoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SourceServiceService = exports.SourceServiceService = {
  // PROVIDERS
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
  getOneProviderByName: {
    path: '/source.v1alpha1.SourceService/GetOneProviderByName',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.GetOneProviderByNameRequest,
    responseType: source_v1alpha1_source_pb.GetOneProviderByNameResponse,
    requestSerialize: serialize_source_v1alpha1_GetOneProviderByNameRequest,
    requestDeserialize: deserialize_source_v1alpha1_GetOneProviderByNameRequest,
    responseSerialize: serialize_source_v1alpha1_GetOneProviderByNameResponse,
    responseDeserialize: deserialize_source_v1alpha1_GetOneProviderByNameResponse,
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
  deleteIntegrationsByOrganization: {
    path: '/source.v1alpha1.SourceService/DeleteIntegrationsByOrganization',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.DeleteIntegrationsByOrganizationRequest,
    responseType: source_v1alpha1_source_pb.DeleteIntegrationsByOrganizationResponse,
    requestSerialize: serialize_source_v1alpha1_DeleteIntegrationsByOrganizationRequest,
    requestDeserialize: deserialize_source_v1alpha1_DeleteIntegrationsByOrganizationRequest,
    responseSerialize: serialize_source_v1alpha1_DeleteIntegrationsByOrganizationResponse,
    responseDeserialize: deserialize_source_v1alpha1_DeleteIntegrationsByOrganizationResponse,
  },
  // List Repositories providers by integrations
  listRepositoriesProvider: {
    path: '/source.v1alpha1.SourceService/ListRepositoriesProvider',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.ListRepositoriesProviderRequest,
    responseType: source_v1alpha1_source_pb.ListRepositoriesProviderResponse,
    requestSerialize: serialize_source_v1alpha1_ListRepositoriesProviderRequest,
    requestDeserialize: deserialize_source_v1alpha1_ListRepositoriesProviderRequest,
    responseSerialize: serialize_source_v1alpha1_ListRepositoriesProviderResponse,
    responseDeserialize: deserialize_source_v1alpha1_ListRepositoriesProviderResponse,
  },
  getRepositoryProvider: {
    path: '/source.v1alpha1.SourceService/GetRepositoryProvider',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.GetRepositoryProviderRequest,
    responseType: source_v1alpha1_source_pb.GetRepositoryProviderResponse,
    requestSerialize: serialize_source_v1alpha1_GetRepositoryProviderRequest,
    requestDeserialize: deserialize_source_v1alpha1_GetRepositoryProviderRequest,
    responseSerialize: serialize_source_v1alpha1_GetRepositoryProviderResponse,
    responseDeserialize: deserialize_source_v1alpha1_GetRepositoryProviderResponse,
  },
  // REPOSITORIES
  createRepository: {
    path: '/source.v1alpha1.SourceService/CreateRepository',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.CreateRepositoryRequest,
    responseType: source_v1alpha1_source_pb.CreateRepositoryResponse,
    requestSerialize: serialize_source_v1alpha1_CreateRepositoryRequest,
    requestDeserialize: deserialize_source_v1alpha1_CreateRepositoryRequest,
    responseSerialize: serialize_source_v1alpha1_CreateRepositoryResponse,
    responseDeserialize: deserialize_source_v1alpha1_CreateRepositoryResponse,
  },
  listRepositories: {
    path: '/source.v1alpha1.SourceService/ListRepositories',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.ListRepositoriesRequest,
    responseType: source_v1alpha1_source_pb.ListRepositoriesResponse,
    requestSerialize: serialize_source_v1alpha1_ListRepositoriesRequest,
    requestDeserialize: deserialize_source_v1alpha1_ListRepositoriesRequest,
    responseSerialize: serialize_source_v1alpha1_ListRepositoriesResponse,
    responseDeserialize: deserialize_source_v1alpha1_ListRepositoriesResponse,
  },
  getRepository: {
    path: '/source.v1alpha1.SourceService/GetRepository',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.GetRepositoryRequest,
    responseType: source_v1alpha1_source_pb.GetRepositoryResponse,
    requestSerialize: serialize_source_v1alpha1_GetRepositoryRequest,
    requestDeserialize: deserialize_source_v1alpha1_GetRepositoryRequest,
    responseSerialize: serialize_source_v1alpha1_GetRepositoryResponse,
    responseDeserialize: deserialize_source_v1alpha1_GetRepositoryResponse,
  },
  deleteRepository: {
    path: '/source.v1alpha1.SourceService/DeleteRepository',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.DeleteRepositoryRequest,
    responseType: source_v1alpha1_source_pb.DeleteRepositoryResponse,
    requestSerialize: serialize_source_v1alpha1_DeleteRepositoryRequest,
    requestDeserialize: deserialize_source_v1alpha1_DeleteRepositoryRequest,
    responseSerialize: serialize_source_v1alpha1_DeleteRepositoryResponse,
    responseDeserialize: deserialize_source_v1alpha1_DeleteRepositoryResponse,
  },
  updateRepository: {
    path: '/source.v1alpha1.SourceService/UpdateRepository',
    requestStream: false,
    responseStream: false,
    requestType: source_v1alpha1_source_pb.UpdateRepositoryRequest,
    responseType: source_v1alpha1_source_pb.UpdateRepositoryResponse,
    requestSerialize: serialize_source_v1alpha1_UpdateRepositoryRequest,
    requestDeserialize: deserialize_source_v1alpha1_UpdateRepositoryRequest,
    responseSerialize: serialize_source_v1alpha1_UpdateRepositoryResponse,
    responseDeserialize: deserialize_source_v1alpha1_UpdateRepositoryResponse,
  },
};

exports.SourceServiceClient = grpc.makeGenericClientConstructor(SourceServiceService);
