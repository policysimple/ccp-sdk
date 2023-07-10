// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var vault_v1alpha1_vault_api_pb = require('../../vault/v1alpha1/vault_api_pb.js');
var vault_v1alpha1_vault_pb = require('../../vault/v1alpha1/vault_pb.js');

function serialize_vault_v1alpha1_CreateSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.CreateSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.CreateSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_CreateSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.CreateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_CreateSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.CreateSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.CreateSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_CreateSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.CreateSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_DeleteOrganizationRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.DeleteOrganizationRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.DeleteOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_DeleteOrganizationRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.DeleteOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_DeleteOrganizationResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.DeleteOrganizationResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.DeleteOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_DeleteOrganizationResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.DeleteOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_DeleteSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.DeleteSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.DeleteSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_DeleteSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.DeleteSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_DeleteSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.DeleteSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.DeleteSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_DeleteSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.DeleteSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetSecretsServiceNotificationRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetSecretsServiceNotificationRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetSecretsServiceNotificationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetSecretsServiceNotificationRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetSecretsServiceNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetSecretsServiceNotificationResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetSecretsServiceNotificationResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetSecretsServiceNotificationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetSecretsServiceNotificationResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetSecretsServiceNotificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetSecretsServiceRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetSecretsServiceRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetSecretsServiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetSecretsServiceRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetSecretsServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetSecretsServiceResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetSecretsServiceResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetSecretsServiceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetSecretsServiceResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetSecretsServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetTokenBlockChainRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetTokenBlockChainRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetTokenBlockChainRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetTokenBlockChainRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetTokenBlockChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetTokenBlockChainResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetTokenBlockChainResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetTokenBlockChainResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetTokenBlockChainResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetTokenBlockChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetTokenFirebaseRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetTokenFirebaseRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetTokenFirebaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetTokenFirebaseRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetTokenFirebaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetTokenFirebaseResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetTokenFirebaseResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetTokenFirebaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetTokenFirebaseResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetTokenFirebaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetTokenIntegrationsRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetTokenIntegrationsRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetTokenIntegrationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetTokenIntegrationsRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetTokenIntegrationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetTokenIntegrationsResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetTokenIntegrationsResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetTokenIntegrationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetTokenIntegrationsResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetTokenIntegrationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_SaveTokenBlockChainRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.SaveTokenBlockChainRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.SaveTokenBlockChainRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_SaveTokenBlockChainRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.SaveTokenBlockChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_SaveTokenBlockChainResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.SaveTokenBlockChainResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.SaveTokenBlockChainResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_SaveTokenBlockChainResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.SaveTokenBlockChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_SaveTokenFirebaseRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.SaveTokenFirebaseRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.SaveTokenFirebaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_SaveTokenFirebaseRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.SaveTokenFirebaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_SaveTokenFirebaseResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.SaveTokenFirebaseResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.SaveTokenFirebaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_SaveTokenFirebaseResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.SaveTokenFirebaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_SaveTokenIntegrationsRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.SaveTokenIntegrationsRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.SaveTokenIntegrationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_SaveTokenIntegrationsRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.SaveTokenIntegrationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_SaveTokenIntegrationsResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.SaveTokenIntegrationsResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.SaveTokenIntegrationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_SaveTokenIntegrationsResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.SaveTokenIntegrationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_UpdateSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.UpdateSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.UpdateSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_UpdateSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.UpdateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_UpdateSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.UpdateSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.UpdateSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_UpdateSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.UpdateSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var VaultAPIServiceService = exports.VaultAPIServiceService = {
  createSecret: {
    path: '/vault.v1alpha1.VaultAPIService/CreateSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.CreateSecretRequest,
    responseType: vault_v1alpha1_vault_api_pb.CreateSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_CreateSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_CreateSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_CreateSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_CreateSecretResponse,
  },
  updateSecret: {
    path: '/vault.v1alpha1.VaultAPIService/UpdateSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.UpdateSecretRequest,
    responseType: vault_v1alpha1_vault_api_pb.UpdateSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_UpdateSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_UpdateSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_UpdateSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_UpdateSecretResponse,
  },
  deleteSecret: {
    path: '/vault.v1alpha1.VaultAPIService/DeleteSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.DeleteSecretRequest,
    responseType: vault_v1alpha1_vault_api_pb.DeleteSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_DeleteSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_DeleteSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_DeleteSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_DeleteSecretResponse,
  },
  getSecret: {
    path: '/vault.v1alpha1.VaultAPIService/GetSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.GetSecretRequest,
    responseType: vault_v1alpha1_vault_api_pb.GetSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_GetSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_GetSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_GetSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_GetSecretResponse,
  },
  deleteOrganization: {
    path: '/vault.v1alpha1.VaultAPIService/DeleteOrganization',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.DeleteOrganizationRequest,
    responseType: vault_v1alpha1_vault_api_pb.DeleteOrganizationResponse,
    requestSerialize: serialize_vault_v1alpha1_DeleteOrganizationRequest,
    requestDeserialize: deserialize_vault_v1alpha1_DeleteOrganizationRequest,
    responseSerialize: serialize_vault_v1alpha1_DeleteOrganizationResponse,
    responseDeserialize: deserialize_vault_v1alpha1_DeleteOrganizationResponse,
  },
  saveTokenIntegrations: {
    path: '/vault.v1alpha1.VaultAPIService/SaveTokenIntegrations',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.SaveTokenIntegrationsRequest,
    responseType: vault_v1alpha1_vault_api_pb.SaveTokenIntegrationsResponse,
    requestSerialize: serialize_vault_v1alpha1_SaveTokenIntegrationsRequest,
    requestDeserialize: deserialize_vault_v1alpha1_SaveTokenIntegrationsRequest,
    responseSerialize: serialize_vault_v1alpha1_SaveTokenIntegrationsResponse,
    responseDeserialize: deserialize_vault_v1alpha1_SaveTokenIntegrationsResponse,
  },
  getTokenIntegrations: {
    path: '/vault.v1alpha1.VaultAPIService/GetTokenIntegrations',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.GetTokenIntegrationsRequest,
    responseType: vault_v1alpha1_vault_api_pb.GetTokenIntegrationsResponse,
    requestSerialize: serialize_vault_v1alpha1_GetTokenIntegrationsRequest,
    requestDeserialize: deserialize_vault_v1alpha1_GetTokenIntegrationsRequest,
    responseSerialize: serialize_vault_v1alpha1_GetTokenIntegrationsResponse,
    responseDeserialize: deserialize_vault_v1alpha1_GetTokenIntegrationsResponse,
  },
  // BlockChain
  saveTokenBlockChain: {
    path: '/vault.v1alpha1.VaultAPIService/SaveTokenBlockChain',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.SaveTokenBlockChainRequest,
    responseType: vault_v1alpha1_vault_api_pb.SaveTokenBlockChainResponse,
    requestSerialize: serialize_vault_v1alpha1_SaveTokenBlockChainRequest,
    requestDeserialize: deserialize_vault_v1alpha1_SaveTokenBlockChainRequest,
    responseSerialize: serialize_vault_v1alpha1_SaveTokenBlockChainResponse,
    responseDeserialize: deserialize_vault_v1alpha1_SaveTokenBlockChainResponse,
  },
  getTokenBlockChain: {
    path: '/vault.v1alpha1.VaultAPIService/GetTokenBlockChain',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.GetTokenBlockChainRequest,
    responseType: vault_v1alpha1_vault_api_pb.GetTokenBlockChainResponse,
    requestSerialize: serialize_vault_v1alpha1_GetTokenBlockChainRequest,
    requestDeserialize: deserialize_vault_v1alpha1_GetTokenBlockChainRequest,
    responseSerialize: serialize_vault_v1alpha1_GetTokenBlockChainResponse,
    responseDeserialize: deserialize_vault_v1alpha1_GetTokenBlockChainResponse,
  },
  // Firebase
  saveTokenFirebase: {
    path: '/vault.v1alpha1.VaultAPIService/SaveTokenFirebase',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.SaveTokenFirebaseRequest,
    responseType: vault_v1alpha1_vault_api_pb.SaveTokenFirebaseResponse,
    requestSerialize: serialize_vault_v1alpha1_SaveTokenFirebaseRequest,
    requestDeserialize: deserialize_vault_v1alpha1_SaveTokenFirebaseRequest,
    responseSerialize: serialize_vault_v1alpha1_SaveTokenFirebaseResponse,
    responseDeserialize: deserialize_vault_v1alpha1_SaveTokenFirebaseResponse,
  },
  getTokenFirebase: {
    path: '/vault.v1alpha1.VaultAPIService/GetTokenFirebase',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.GetTokenFirebaseRequest,
    responseType: vault_v1alpha1_vault_api_pb.GetTokenFirebaseResponse,
    requestSerialize: serialize_vault_v1alpha1_GetTokenFirebaseRequest,
    requestDeserialize: deserialize_vault_v1alpha1_GetTokenFirebaseRequest,
    responseSerialize: serialize_vault_v1alpha1_GetTokenFirebaseResponse,
    responseDeserialize: deserialize_vault_v1alpha1_GetTokenFirebaseResponse,
  },
  // Getsecret to service
  getSecretsService: {
    path: '/vault.v1alpha1.VaultAPIService/GetSecretsService',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.GetSecretsServiceRequest,
    responseType: vault_v1alpha1_vault_api_pb.GetSecretsServiceResponse,
    requestSerialize: serialize_vault_v1alpha1_GetSecretsServiceRequest,
    requestDeserialize: deserialize_vault_v1alpha1_GetSecretsServiceRequest,
    responseSerialize: serialize_vault_v1alpha1_GetSecretsServiceResponse,
    responseDeserialize: deserialize_vault_v1alpha1_GetSecretsServiceResponse,
  },
  getSecretsServiceNotification: {
    path: '/vault.v1alpha1.VaultAPIService/GetSecretsServiceNotification',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.GetSecretsServiceNotificationRequest,
    responseType: vault_v1alpha1_vault_api_pb.GetSecretsServiceNotificationResponse,
    requestSerialize: serialize_vault_v1alpha1_GetSecretsServiceNotificationRequest,
    requestDeserialize: deserialize_vault_v1alpha1_GetSecretsServiceNotificationRequest,
    responseSerialize: serialize_vault_v1alpha1_GetSecretsServiceNotificationResponse,
    responseDeserialize: deserialize_vault_v1alpha1_GetSecretsServiceNotificationResponse,
  },
};

exports.VaultAPIServiceClient = grpc.makeGenericClientConstructor(VaultAPIServiceService);
