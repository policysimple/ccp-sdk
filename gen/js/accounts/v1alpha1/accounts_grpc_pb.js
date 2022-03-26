// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_accounts_pb = require('../../accounts/v1alpha1/accounts_pb.js');

function serialize_accounts_v1alpha1_AgreeInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.AgreeInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.AgreeInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_AgreeInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.AgreeInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_AgreeInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.AgreeInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.AgreeInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_AgreeInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.AgreeInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CheckUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CheckUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CheckUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CheckUserRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CheckUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CheckUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CheckUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CheckUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CheckUserResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CheckUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreatePermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreatePermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreatePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreatePermissionRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreatePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreatePermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreatePermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreatePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreatePermissionResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreatePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateProjectRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateProjectResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateRoleRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateRoleRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateRoleRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateRoleResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateRoleResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateRoleResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateUserRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_CreateUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.CreateUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_CreateUserResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeletePermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeletePermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeletePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeletePermissionRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeletePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeletePermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeletePermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeletePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeletePermissionResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeletePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteProjectRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteProjectResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteRoleRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteRoleRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteRoleRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteRoleResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteRoleResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteRoleResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteUserRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_DeleteUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.DeleteUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_DeleteUserResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetListUserDexRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetListUserDexRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetListUserDexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetListUserDexRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetListUserDexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetListUserDexResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetListUserDexResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetListUserDexResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetListUserDexResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetListUserDexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneCountryRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneCountryRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneCountryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneCountryRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneCountryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneCountryResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneCountryResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneCountryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneCountryResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneCountryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOnePermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOnePermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOnePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOnePermissionRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOnePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOnePermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOnePermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOnePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOnePermissionResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOnePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneProjectRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneProjectResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneRoleRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneRoleRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneRoleRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneRoleResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneRoleResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneRoleResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneUserDexRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneUserDexRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneUserDexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneUserDexRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneUserDexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneUserDexResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneUserDexResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneUserDexResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneUserDexResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneUserDexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneUserRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_GetOneUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.GetOneUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.GetOneUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_GetOneUserResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.GetOneUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListCountriesRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListCountriesRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListCountriesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListCountriesRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListCountriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListCountriesResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListCountriesResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListCountriesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListCountriesResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListCountriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListPermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListPermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListPermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListPermissionRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListPermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListPermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListPermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListPermissionResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListProjectRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListProjectResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListRolesRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListRolesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListRolesRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListRolesResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListRolesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListRolesResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListUserPaginationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListUserPaginationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListUserPaginationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListUserPaginationRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListUserPaginationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListUserPaginationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListUserPaginationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListUserPaginationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListUserPaginationResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListUserPaginationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListUserRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_ListUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.ListUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.ListUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_ListUserResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.ListUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_SendInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.SendInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.SendInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_SendInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.SendInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_SendInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.SendInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.SendInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_SendInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.SendInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_SendVerificationEmailRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.SendVerificationEmailRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.SendVerificationEmailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_SendVerificationEmailRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.SendVerificationEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_SendVerificationEmailResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.SendVerificationEmailResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.SendVerificationEmailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_SendVerificationEmailResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.SendVerificationEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdatePermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdatePermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdatePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdatePermissionRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdatePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdatePermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdatePermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdatePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdatePermissionResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdatePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateProjectRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateProjectResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateRoleRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateRoleRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateRoleRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateRoleResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateRoleResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateRoleResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateUserRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_UpdateUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.UpdateUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_UpdateUserResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_VerifyEmailRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.VerifyEmailRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.VerifyEmailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_VerifyEmailRequest(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.VerifyEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_VerifyEmailResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_accounts_pb.VerifyEmailResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.VerifyEmailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_VerifyEmailResponse(buffer_arg) {
  return accounts_v1alpha1_accounts_pb.VerifyEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountServiceService = exports.AccountServiceService = {
  // /AUTH
  createUser: {
    path: '/accounts.v1alpha1.AccountService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.CreateUserRequest,
    responseType: accounts_v1alpha1_accounts_pb.CreateUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_CreateUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_CreateUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_CreateUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_CreateUserResponse,
  },
  listUser: {
    path: '/accounts.v1alpha1.AccountService/ListUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.ListUserRequest,
    responseType: accounts_v1alpha1_accounts_pb.ListUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_ListUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_ListUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_ListUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_ListUserResponse,
  },
  getOneUser: {
    path: '/accounts.v1alpha1.AccountService/GetOneUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetOneUserRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetOneUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetOneUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetOneUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetOneUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetOneUserResponse,
  },
  updateUser: {
    path: '/accounts.v1alpha1.AccountService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.UpdateUserRequest,
    responseType: accounts_v1alpha1_accounts_pb.UpdateUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_UpdateUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_UpdateUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_UpdateUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_UpdateUserResponse,
  },
  deleteUser: {
    path: '/accounts.v1alpha1.AccountService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.DeleteUserRequest,
    responseType: accounts_v1alpha1_accounts_pb.DeleteUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_DeleteUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_DeleteUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_DeleteUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_DeleteUserResponse,
  },
  listUserPagination: {
    path: '/accounts.v1alpha1.AccountService/ListUserPagination',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.ListUserPaginationRequest,
    responseType: accounts_v1alpha1_accounts_pb.ListUserPaginationResponse,
    requestSerialize: serialize_accounts_v1alpha1_ListUserPaginationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_ListUserPaginationRequest,
    responseSerialize: serialize_accounts_v1alpha1_ListUserPaginationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_ListUserPaginationResponse,
  },
  sendInvitationUser: {
    path: '/accounts.v1alpha1.AccountService/SendInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.SendInvitationUserRequest,
    responseType: accounts_v1alpha1_accounts_pb.SendInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_SendInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_SendInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_SendInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_SendInvitationUserResponse,
  },
  getInvitationUser: {
    path: '/accounts.v1alpha1.AccountService/GetInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetInvitationUserRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetInvitationUserResponse,
  },
  agreeInvitationUser: {
    path: '/accounts.v1alpha1.AccountService/AgreeInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.AgreeInvitationUserRequest,
    responseType: accounts_v1alpha1_accounts_pb.AgreeInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_AgreeInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_AgreeInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_AgreeInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_AgreeInvitationUserResponse,
  },
  // /PERMISSION
  createPermission: {
    path: '/accounts.v1alpha1.AccountService/CreatePermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.CreatePermissionRequest,
    responseType: accounts_v1alpha1_accounts_pb.CreatePermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_CreatePermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_CreatePermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_CreatePermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_CreatePermissionResponse,
  },
  listPermission: {
    path: '/accounts.v1alpha1.AccountService/ListPermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.ListPermissionRequest,
    responseType: accounts_v1alpha1_accounts_pb.ListPermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_ListPermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_ListPermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_ListPermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_ListPermissionResponse,
  },
  getOnePermission: {
    path: '/accounts.v1alpha1.AccountService/GetOnePermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetOnePermissionRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetOnePermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetOnePermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetOnePermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetOnePermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetOnePermissionResponse,
  },
  updatePermission: {
    path: '/accounts.v1alpha1.AccountService/UpdatePermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.UpdatePermissionRequest,
    responseType: accounts_v1alpha1_accounts_pb.UpdatePermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_UpdatePermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_UpdatePermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_UpdatePermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_UpdatePermissionResponse,
  },
  deletePermission: {
    path: '/accounts.v1alpha1.AccountService/DeletePermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.DeletePermissionRequest,
    responseType: accounts_v1alpha1_accounts_pb.DeletePermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_DeletePermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_DeletePermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_DeletePermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_DeletePermissionResponse,
  },
  // /Organization
  createOrganization: {
    path: '/accounts.v1alpha1.AccountService/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.CreateOrganizationRequest,
    responseType: accounts_v1alpha1_accounts_pb.CreateOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_CreateOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_CreateOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_CreateOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_CreateOrganizationResponse,
  },
  listOrganization: {
    path: '/accounts.v1alpha1.AccountService/ListOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.ListOrganizationRequest,
    responseType: accounts_v1alpha1_accounts_pb.ListOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_ListOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_ListOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_ListOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_ListOrganizationResponse,
  },
  getOneOrganization: {
    path: '/accounts.v1alpha1.AccountService/GetOneOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetOneOrganizationRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetOneOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetOneOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetOneOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetOneOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetOneOrganizationResponse,
  },
  updateOrganization: {
    path: '/accounts.v1alpha1.AccountService/UpdateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.UpdateOrganizationRequest,
    responseType: accounts_v1alpha1_accounts_pb.UpdateOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_UpdateOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_UpdateOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_UpdateOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_UpdateOrganizationResponse,
  },
  deleteOrganization: {
    path: '/accounts.v1alpha1.AccountService/DeleteOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.DeleteOrganizationRequest,
    responseType: accounts_v1alpha1_accounts_pb.DeleteOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_DeleteOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_DeleteOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_DeleteOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_DeleteOrganizationResponse,
  },
  // Roles 
  createRole: {
    path: '/accounts.v1alpha1.AccountService/CreateRole',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.CreateRoleRequest,
    responseType: accounts_v1alpha1_accounts_pb.CreateRoleResponse,
    requestSerialize: serialize_accounts_v1alpha1_CreateRoleRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_CreateRoleRequest,
    responseSerialize: serialize_accounts_v1alpha1_CreateRoleResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_CreateRoleResponse,
  },
  listRoles: {
    path: '/accounts.v1alpha1.AccountService/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.ListRolesRequest,
    responseType: accounts_v1alpha1_accounts_pb.ListRolesResponse,
    requestSerialize: serialize_accounts_v1alpha1_ListRolesRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_ListRolesRequest,
    responseSerialize: serialize_accounts_v1alpha1_ListRolesResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_ListRolesResponse,
  },
  updateRole: {
    path: '/accounts.v1alpha1.AccountService/UpdateRole',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.UpdateRoleRequest,
    responseType: accounts_v1alpha1_accounts_pb.UpdateRoleResponse,
    requestSerialize: serialize_accounts_v1alpha1_UpdateRoleRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_UpdateRoleRequest,
    responseSerialize: serialize_accounts_v1alpha1_UpdateRoleResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_UpdateRoleResponse,
  },
  getOneRole: {
    path: '/accounts.v1alpha1.AccountService/GetOneRole',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetOneRoleRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetOneRoleResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetOneRoleRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetOneRoleRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetOneRoleResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetOneRoleResponse,
  },
  deleteRole: {
    path: '/accounts.v1alpha1.AccountService/DeleteRole',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.DeleteRoleRequest,
    responseType: accounts_v1alpha1_accounts_pb.DeleteRoleResponse,
    requestSerialize: serialize_accounts_v1alpha1_DeleteRoleRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_DeleteRoleRequest,
    responseSerialize: serialize_accounts_v1alpha1_DeleteRoleResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_DeleteRoleResponse,
  },
  // CRUD Project
  createProject: {
    path: '/accounts.v1alpha1.AccountService/CreateProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.CreateProjectRequest,
    responseType: accounts_v1alpha1_accounts_pb.CreateProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_CreateProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_CreateProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_CreateProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_CreateProjectResponse,
  },
  getOneProject: {
    path: '/accounts.v1alpha1.AccountService/GetOneProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetOneProjectRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetOneProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetOneProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetOneProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetOneProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetOneProjectResponse,
  },
  updateProject: {
    path: '/accounts.v1alpha1.AccountService/UpdateProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.UpdateProjectRequest,
    responseType: accounts_v1alpha1_accounts_pb.UpdateProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_UpdateProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_UpdateProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_UpdateProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_UpdateProjectResponse,
  },
  deleteProject: {
    path: '/accounts.v1alpha1.AccountService/DeleteProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.DeleteProjectRequest,
    responseType: accounts_v1alpha1_accounts_pb.DeleteProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_DeleteProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_DeleteProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_DeleteProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_DeleteProjectResponse,
  },
  listProject: {
    path: '/accounts.v1alpha1.AccountService/ListProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.ListProjectRequest,
    responseType: accounts_v1alpha1_accounts_pb.ListProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_ListProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_ListProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_ListProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_ListProjectResponse,
  },
  // Get Users Dex
  getListUserDex: {
    path: '/accounts.v1alpha1.AccountService/GetListUserDex',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetListUserDexRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetListUserDexResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetListUserDexRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetListUserDexRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetListUserDexResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetListUserDexResponse,
  },
  getOneUserDex: {
    path: '/accounts.v1alpha1.AccountService/GetOneUserDex',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetOneUserDexRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetOneUserDexResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetOneUserDexRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetOneUserDexRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetOneUserDexResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetOneUserDexResponse,
  },
  checkUser: {
    path: '/accounts.v1alpha1.AccountService/CheckUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.CheckUserRequest,
    responseType: accounts_v1alpha1_accounts_pb.CheckUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_CheckUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_CheckUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_CheckUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_CheckUserResponse,
  },
  // Send Verification
  sendVerificationEmail: {
    path: '/accounts.v1alpha1.AccountService/SendVerificationEmail',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.SendVerificationEmailRequest,
    responseType: accounts_v1alpha1_accounts_pb.SendVerificationEmailResponse,
    requestSerialize: serialize_accounts_v1alpha1_SendVerificationEmailRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_SendVerificationEmailRequest,
    responseSerialize: serialize_accounts_v1alpha1_SendVerificationEmailResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_SendVerificationEmailResponse,
  },
  verifyEmail: {
    path: '/accounts.v1alpha1.AccountService/VerifyEmail',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.VerifyEmailRequest,
    responseType: accounts_v1alpha1_accounts_pb.VerifyEmailResponse,
    requestSerialize: serialize_accounts_v1alpha1_VerifyEmailRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_VerifyEmailRequest,
    responseSerialize: serialize_accounts_v1alpha1_VerifyEmailResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_VerifyEmailResponse,
  },
  //  Countries
  listCountries: {
    path: '/accounts.v1alpha1.AccountService/ListCountries',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.ListCountriesRequest,
    responseType: accounts_v1alpha1_accounts_pb.ListCountriesResponse,
    requestSerialize: serialize_accounts_v1alpha1_ListCountriesRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_ListCountriesRequest,
    responseSerialize: serialize_accounts_v1alpha1_ListCountriesResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_ListCountriesResponse,
  },
  getOneCountry: {
    path: '/accounts.v1alpha1.AccountService/GetOneCountry',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetOneCountryRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetOneCountryResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetOneCountryRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetOneCountryRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetOneCountryResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetOneCountryResponse,
  },
  // Tokens
  createApiKey: {
    path: '/accounts.v1alpha1.AccountService/CreateApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.CreateApiKeyRequest,
    responseType: accounts_v1alpha1_accounts_pb.CreateApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_CreateApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_CreateApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_CreateApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_CreateApiKeyResponse,
  },
  getOneApiKey: {
    path: '/accounts.v1alpha1.AccountService/GetOneApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.GetOneApiKeyRequest,
    responseType: accounts_v1alpha1_accounts_pb.GetOneApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_GetOneApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_GetOneApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_GetOneApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_GetOneApiKeyResponse,
  },
  listApiKey: {
    path: '/accounts.v1alpha1.AccountService/ListApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.ListApiKeyRequest,
    responseType: accounts_v1alpha1_accounts_pb.ListApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_ListApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_ListApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_ListApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_ListApiKeyResponse,
  },
  updateApiKey: {
    path: '/accounts.v1alpha1.AccountService/UpdateApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.UpdateApiKeyRequest,
    responseType: accounts_v1alpha1_accounts_pb.UpdateApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_UpdateApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_UpdateApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_UpdateApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_UpdateApiKeyResponse,
  },
  deleteApiKey: {
    path: '/accounts.v1alpha1.AccountService/DeleteApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_accounts_pb.DeleteApiKeyRequest,
    responseType: accounts_v1alpha1_accounts_pb.DeleteApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_DeleteApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_DeleteApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_DeleteApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_DeleteApiKeyResponse,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
