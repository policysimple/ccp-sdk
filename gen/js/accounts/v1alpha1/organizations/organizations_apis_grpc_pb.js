// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_organizations_organizations_pb = require('../../../accounts/v1alpha1/organizations/organizations_pb.js');

function serialize_accounts_v1alpha1_organizations_v1_CreateOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.CreateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_CreateOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_organizations_v1_CreateOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.CreateOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.CreateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_CreateOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.CreateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_organizations_v1_DeleteOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.DeleteOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.DeleteOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_DeleteOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.DeleteOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_organizations_v1_DeleteOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.DeleteOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.DeleteOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_DeleteOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.DeleteOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_organizations_v1_GetOneOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.GetOneOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.GetOneOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_GetOneOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.GetOneOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_organizations_v1_GetOneOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.GetOneOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.GetOneOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_GetOneOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.GetOneOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_organizations_v1_ListOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.ListOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.ListOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_ListOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.ListOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_organizations_v1_ListOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.ListOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.ListOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_ListOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.ListOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_organizations_v1_UpdateOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.UpdateOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.UpdateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_UpdateOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.UpdateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_organizations_v1_UpdateOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_organizations_organizations_pb.UpdateOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.organizations.v1.UpdateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_organizations_v1_UpdateOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_organizations_organizations_pb.UpdateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "organizations.proto";
// import "../accounts.proto";
//
var OrganizationServiceService = exports.OrganizationServiceService = {
  // /Organization
  createOrganization: {
    path: '/accounts.v1alpha1.organizations.v1.OrganizationService/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_organizations_organizations_pb.CreateOrganizationRequest,
    responseType: accounts_v1alpha1_organizations_organizations_pb.CreateOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_organizations_v1_CreateOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_organizations_v1_CreateOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_organizations_v1_CreateOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_organizations_v1_CreateOrganizationResponse,
  },
  listOrganization: {
    path: '/accounts.v1alpha1.organizations.v1.OrganizationService/ListOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_organizations_organizations_pb.ListOrganizationRequest,
    responseType: accounts_v1alpha1_organizations_organizations_pb.ListOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_organizations_v1_ListOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_organizations_v1_ListOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_organizations_v1_ListOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_organizations_v1_ListOrganizationResponse,
  },
  getOneOrganization: {
    path: '/accounts.v1alpha1.organizations.v1.OrganizationService/GetOneOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_organizations_organizations_pb.GetOneOrganizationRequest,
    responseType: accounts_v1alpha1_organizations_organizations_pb.GetOneOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_organizations_v1_GetOneOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_organizations_v1_GetOneOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_organizations_v1_GetOneOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_organizations_v1_GetOneOrganizationResponse,
  },
  updateOrganization: {
    path: '/accounts.v1alpha1.organizations.v1.OrganizationService/UpdateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_organizations_organizations_pb.UpdateOrganizationRequest,
    responseType: accounts_v1alpha1_organizations_organizations_pb.UpdateOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_organizations_v1_UpdateOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_organizations_v1_UpdateOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_organizations_v1_UpdateOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_organizations_v1_UpdateOrganizationResponse,
  },
  deleteOrganization: {
    path: '/accounts.v1alpha1.organizations.v1.OrganizationService/DeleteOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_organizations_organizations_pb.DeleteOrganizationRequest,
    responseType: accounts_v1alpha1_organizations_organizations_pb.DeleteOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_organizations_v1_DeleteOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_organizations_v1_DeleteOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_organizations_v1_DeleteOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_organizations_v1_DeleteOrganizationResponse,
  },
  // rpc UpdateOrganizationPermissions(UpdateOrganizationPermissionsRequest) returns (UpdateOrganizationResponse);
};

exports.OrganizationServiceClient = grpc.makeGenericClientConstructor(OrganizationServiceService);
