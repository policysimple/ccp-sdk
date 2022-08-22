// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_permissions_permissions_pb = require('../../../accounts/v1alpha1/permissions/permissions_pb.js');

function serialize_accounts_v1alpha1_permissions_v1_CreatePermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.CreatePermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.CreatePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_CreatePermissionRequest(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.CreatePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_permissions_v1_CreatePermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.CreatePermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.CreatePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_CreatePermissionResponse(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.CreatePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_permissions_v1_DeletePermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.DeletePermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.DeletePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_DeletePermissionRequest(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.DeletePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_permissions_v1_DeletePermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.DeletePermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.DeletePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_DeletePermissionResponse(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.DeletePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_permissions_v1_GetOnePermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.GetOnePermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.GetOnePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_GetOnePermissionRequest(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.GetOnePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_permissions_v1_GetOnePermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.GetOnePermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.GetOnePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_GetOnePermissionResponse(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.GetOnePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_permissions_v1_ListPermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.ListPermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.ListPermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_ListPermissionRequest(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.ListPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_permissions_v1_ListPermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.ListPermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.ListPermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_ListPermissionResponse(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.ListPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_permissions_v1_UpdatePermissionRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.UpdatePermissionRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.UpdatePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_UpdatePermissionRequest(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.UpdatePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_permissions_v1_UpdatePermissionResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_permissions_permissions_pb.UpdatePermissionResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.permissions.v1.UpdatePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_permissions_v1_UpdatePermissionResponse(buffer_arg) {
  return accounts_v1alpha1_permissions_permissions_pb.UpdatePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PermissionServiceService = exports.PermissionServiceService = {
  createPermission: {
    path: '/accounts.v1alpha1.permissions.v1.PermissionService/CreatePermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_permissions_permissions_pb.CreatePermissionRequest,
    responseType: accounts_v1alpha1_permissions_permissions_pb.CreatePermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_permissions_v1_CreatePermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_permissions_v1_CreatePermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_permissions_v1_CreatePermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_permissions_v1_CreatePermissionResponse,
  },
  listPermission: {
    path: '/accounts.v1alpha1.permissions.v1.PermissionService/ListPermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_permissions_permissions_pb.ListPermissionRequest,
    responseType: accounts_v1alpha1_permissions_permissions_pb.ListPermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_permissions_v1_ListPermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_permissions_v1_ListPermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_permissions_v1_ListPermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_permissions_v1_ListPermissionResponse,
  },
  getOnePermission: {
    path: '/accounts.v1alpha1.permissions.v1.PermissionService/GetOnePermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_permissions_permissions_pb.GetOnePermissionRequest,
    responseType: accounts_v1alpha1_permissions_permissions_pb.GetOnePermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_permissions_v1_GetOnePermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_permissions_v1_GetOnePermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_permissions_v1_GetOnePermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_permissions_v1_GetOnePermissionResponse,
  },
  updatePermission: {
    path: '/accounts.v1alpha1.permissions.v1.PermissionService/UpdatePermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_permissions_permissions_pb.UpdatePermissionRequest,
    responseType: accounts_v1alpha1_permissions_permissions_pb.UpdatePermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_permissions_v1_UpdatePermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_permissions_v1_UpdatePermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_permissions_v1_UpdatePermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_permissions_v1_UpdatePermissionResponse,
  },
  deletePermission: {
    path: '/accounts.v1alpha1.permissions.v1.PermissionService/DeletePermission',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_permissions_permissions_pb.DeletePermissionRequest,
    responseType: accounts_v1alpha1_permissions_permissions_pb.DeletePermissionResponse,
    requestSerialize: serialize_accounts_v1alpha1_permissions_v1_DeletePermissionRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_permissions_v1_DeletePermissionRequest,
    responseSerialize: serialize_accounts_v1alpha1_permissions_v1_DeletePermissionResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_permissions_v1_DeletePermissionResponse,
  },
};

exports.PermissionServiceClient = grpc.makeGenericClientConstructor(PermissionServiceService);
