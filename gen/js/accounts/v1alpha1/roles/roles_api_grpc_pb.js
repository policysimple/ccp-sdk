// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_roles_roles_pb = require('../../../accounts/v1alpha1/roles/roles_pb.js');

function serialize_accounts_v1alpha1_roles_v1_CreateRoleRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.CreateRoleRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.CreateRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_CreateRoleRequest(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.CreateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_CreateRoleResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.CreateRoleResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.CreateRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_CreateRoleResponse(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.CreateRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_DeleteRoleRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.DeleteRoleRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.DeleteRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_DeleteRoleRequest(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.DeleteRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_DeleteRoleResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.DeleteRoleResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.DeleteRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_DeleteRoleResponse(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.DeleteRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_GetOneRoleRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.GetOneRoleRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.GetOneRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_GetOneRoleRequest(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.GetOneRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_GetOneRoleResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.GetOneRoleResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.GetOneRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_GetOneRoleResponse(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.GetOneRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_GetRolesByOrgUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.GetRolesByOrgUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.GetRolesByOrgUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_GetRolesByOrgUserRequest(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.GetRolesByOrgUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_GetRolesByOrgUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.GetRolesByOrgUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.GetRolesByOrgUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_GetRolesByOrgUserResponse(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.GetRolesByOrgUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_GetRolesByUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.GetRolesByUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.GetRolesByUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_GetRolesByUserRequest(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.GetRolesByUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_GetRolesByUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.GetRolesByUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.GetRolesByUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_GetRolesByUserResponse(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.GetRolesByUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_ListRolesRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.ListRolesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_ListRolesRequest(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_ListRolesResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.ListRolesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_ListRolesResponse(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_UpdateRoleRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.UpdateRoleRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.UpdateRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_UpdateRoleRequest(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.UpdateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_roles_v1_UpdateRoleResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_roles_roles_pb.UpdateRoleResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.roles.v1.UpdateRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_roles_v1_UpdateRoleResponse(buffer_arg) {
  return accounts_v1alpha1_roles_roles_pb.UpdateRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoleServiceService = exports.RoleServiceService = {
  // CRUD Project
  createRole: {
    path: '/accounts.v1alpha1.roles.v1.RoleService/CreateRole',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_roles_roles_pb.CreateRoleRequest,
    responseType: accounts_v1alpha1_roles_roles_pb.CreateRoleResponse,
    requestSerialize: serialize_accounts_v1alpha1_roles_v1_CreateRoleRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_roles_v1_CreateRoleRequest,
    responseSerialize: serialize_accounts_v1alpha1_roles_v1_CreateRoleResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_roles_v1_CreateRoleResponse,
  },
  listRoles: {
    path: '/accounts.v1alpha1.roles.v1.RoleService/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_roles_roles_pb.ListRolesRequest,
    responseType: accounts_v1alpha1_roles_roles_pb.ListRolesResponse,
    requestSerialize: serialize_accounts_v1alpha1_roles_v1_ListRolesRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_roles_v1_ListRolesRequest,
    responseSerialize: serialize_accounts_v1alpha1_roles_v1_ListRolesResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_roles_v1_ListRolesResponse,
  },
  updateRole: {
    path: '/accounts.v1alpha1.roles.v1.RoleService/UpdateRole',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_roles_roles_pb.UpdateRoleRequest,
    responseType: accounts_v1alpha1_roles_roles_pb.UpdateRoleResponse,
    requestSerialize: serialize_accounts_v1alpha1_roles_v1_UpdateRoleRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_roles_v1_UpdateRoleRequest,
    responseSerialize: serialize_accounts_v1alpha1_roles_v1_UpdateRoleResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_roles_v1_UpdateRoleResponse,
  },
  getOneRole: {
    path: '/accounts.v1alpha1.roles.v1.RoleService/GetOneRole',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_roles_roles_pb.GetOneRoleRequest,
    responseType: accounts_v1alpha1_roles_roles_pb.GetOneRoleResponse,
    requestSerialize: serialize_accounts_v1alpha1_roles_v1_GetOneRoleRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_roles_v1_GetOneRoleRequest,
    responseSerialize: serialize_accounts_v1alpha1_roles_v1_GetOneRoleResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_roles_v1_GetOneRoleResponse,
  },
  deleteRole: {
    path: '/accounts.v1alpha1.roles.v1.RoleService/DeleteRole',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_roles_roles_pb.DeleteRoleRequest,
    responseType: accounts_v1alpha1_roles_roles_pb.DeleteRoleResponse,
    requestSerialize: serialize_accounts_v1alpha1_roles_v1_DeleteRoleRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_roles_v1_DeleteRoleRequest,
    responseSerialize: serialize_accounts_v1alpha1_roles_v1_DeleteRoleResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_roles_v1_DeleteRoleResponse,
  },
  // Users
  getRolesByUser: {
    path: '/accounts.v1alpha1.roles.v1.RoleService/GetRolesByUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_roles_roles_pb.GetRolesByUserRequest,
    responseType: accounts_v1alpha1_roles_roles_pb.GetRolesByUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_roles_v1_GetRolesByUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_roles_v1_GetRolesByUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_roles_v1_GetRolesByUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_roles_v1_GetRolesByUserResponse,
  },
  getRolesByOrgUser: {
    path: '/accounts.v1alpha1.roles.v1.RoleService/GetRolesByOrgUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_roles_roles_pb.GetRolesByOrgUserRequest,
    responseType: accounts_v1alpha1_roles_roles_pb.GetRolesByOrgUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_roles_v1_GetRolesByOrgUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_roles_v1_GetRolesByOrgUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_roles_v1_GetRolesByOrgUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_roles_v1_GetRolesByOrgUserResponse,
  },
};

exports.RoleServiceClient = grpc.makeGenericClientConstructor(RoleServiceService);
