// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_users_users_pb = require('../../../accounts/v1alpha1/users/users_pb.js');

function serialize_accounts_v1alpha1_users_v1_AgreeInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.AgreeInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.AgreeInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_AgreeInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.AgreeInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_AgreeInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.AgreeInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.AgreeInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_AgreeInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.AgreeInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_CheckUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.CheckUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.CheckUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_CheckUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.CheckUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_CheckUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.CheckUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.CheckUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_CheckUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.CheckUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_CreateUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.CreateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_CreateUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_CreateUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.CreateUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_CreateUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_DeleteUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.DeleteUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_DeleteUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_DeleteUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.DeleteUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_DeleteUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetListUserDexRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetListUserDexRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetListUserDexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetListUserDexRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetListUserDexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetListUserDexResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetListUserDexResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetListUserDexResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetListUserDexResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetListUserDexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetOneUserDexRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetOneUserDexRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetOneUserDexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetOneUserDexRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetOneUserDexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetOneUserDexResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetOneUserDexResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetOneUserDexResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetOneUserDexResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetOneUserDexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetOneUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetOneUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetOneUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetOneUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetOneUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetOneUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetOneUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetOneUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetOneUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetOneUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetUsersEmailFilterRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetUsersEmailFilterRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetUsersEmailFilterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetUsersEmailFilterRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetUsersEmailFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_GetUsersEmailFilterResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.GetUsersEmailFilterResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.GetUsersEmailFilterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_GetUsersEmailFilterResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.GetUsersEmailFilterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_ListInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.ListInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.ListInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_ListInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.ListInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_ListInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.ListInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.ListInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_ListInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.ListInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_ListUserPaginationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.ListUserPaginationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.ListUserPaginationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_ListUserPaginationRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.ListUserPaginationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_ListUserPaginationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.ListUserPaginationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.ListUserPaginationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_ListUserPaginationResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.ListUserPaginationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_ListUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.ListUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.ListUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_ListUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.ListUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_ListUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.ListUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.ListUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_ListUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.ListUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_SendInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.SendInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.SendInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_SendInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.SendInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_SendInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.SendInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.SendInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_SendInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.SendInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_SendVerificationEmailRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.SendVerificationEmailRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.SendVerificationEmailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_SendVerificationEmailRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.SendVerificationEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_SendVerificationEmailResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.SendVerificationEmailResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.SendVerificationEmailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_SendVerificationEmailResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.SendVerificationEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_UpdateUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.UpdateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_UpdateUserRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_UpdateUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.UpdateUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_UpdateUserResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_VerifyEmailRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.VerifyEmailRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.VerifyEmailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_VerifyEmailRequest(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.VerifyEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_users_v1_VerifyEmailResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_users_users_pb.VerifyEmailResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.users.v1.VerifyEmailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_users_v1_VerifyEmailResponse(buffer_arg) {
  return accounts_v1alpha1_users_users_pb.VerifyEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  // /AUTH
  createUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.CreateUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.CreateUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_CreateUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_CreateUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_CreateUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_CreateUserResponse,
  },
  listUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/ListUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.ListUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.ListUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_ListUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_ListUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_ListUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_ListUserResponse,
  },
  getOneUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/GetOneUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.GetOneUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.GetOneUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_GetOneUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_GetOneUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_GetOneUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_GetOneUserResponse,
  },
  updateUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.UpdateUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.UpdateUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_UpdateUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_UpdateUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_UpdateUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_UpdateUserResponse,
  },
  deleteUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.DeleteUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.DeleteUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_DeleteUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_DeleteUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_DeleteUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_DeleteUserResponse,
  },
  listUserPagination: {
    path: '/accounts.v1alpha1.users.v1.UserService/ListUserPagination',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.ListUserPaginationRequest,
    responseType: accounts_v1alpha1_users_users_pb.ListUserPaginationResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_ListUserPaginationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_ListUserPaginationRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_ListUserPaginationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_ListUserPaginationResponse,
  },
  // invitation
  sendInvitationUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/SendInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.SendInvitationUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.SendInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_SendInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_SendInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_SendInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_SendInvitationUserResponse,
  },
  getInvitationUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/GetInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.GetInvitationUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.GetInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_GetInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_GetInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_GetInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_GetInvitationUserResponse,
  },
  agreeInvitationUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/AgreeInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.AgreeInvitationUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.AgreeInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_AgreeInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_AgreeInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_AgreeInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_AgreeInvitationUserResponse,
  },
  listInvitationUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/ListInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.ListInvitationUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.ListInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_ListInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_ListInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_ListInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_ListInvitationUserResponse,
  },
  // CHECK USER
  checkUser: {
    path: '/accounts.v1alpha1.users.v1.UserService/CheckUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.CheckUserRequest,
    responseType: accounts_v1alpha1_users_users_pb.CheckUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_CheckUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_CheckUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_CheckUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_CheckUserResponse,
  },
  sendVerificationEmail: {
    path: '/accounts.v1alpha1.users.v1.UserService/SendVerificationEmail',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.SendVerificationEmailRequest,
    responseType: accounts_v1alpha1_users_users_pb.SendVerificationEmailResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_SendVerificationEmailRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_SendVerificationEmailRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_SendVerificationEmailResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_SendVerificationEmailResponse,
  },
  verifyEmail: {
    path: '/accounts.v1alpha1.users.v1.UserService/VerifyEmail',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.VerifyEmailRequest,
    responseType: accounts_v1alpha1_users_users_pb.VerifyEmailResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_VerifyEmailRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_VerifyEmailRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_VerifyEmailResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_VerifyEmailResponse,
  },
  // FILTER
  getUsersEmailFilter: {
    path: '/accounts.v1alpha1.users.v1.UserService/GetUsersEmailFilter',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.GetUsersEmailFilterRequest,
    responseType: accounts_v1alpha1_users_users_pb.GetUsersEmailFilterResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_GetUsersEmailFilterRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_GetUsersEmailFilterRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_GetUsersEmailFilterResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_GetUsersEmailFilterResponse,
  },
  // DEX
  getListUserDex: {
    path: '/accounts.v1alpha1.users.v1.UserService/GetListUserDex',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.GetListUserDexRequest,
    responseType: accounts_v1alpha1_users_users_pb.GetListUserDexResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_GetListUserDexRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_GetListUserDexRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_GetListUserDexResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_GetListUserDexResponse,
  },
  getOneUserDex: {
    path: '/accounts.v1alpha1.users.v1.UserService/GetOneUserDex',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_users_users_pb.GetOneUserDexRequest,
    responseType: accounts_v1alpha1_users_users_pb.GetOneUserDexResponse,
    requestSerialize: serialize_accounts_v1alpha1_users_v1_GetOneUserDexRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_users_v1_GetOneUserDexRequest,
    responseSerialize: serialize_accounts_v1alpha1_users_v1_GetOneUserDexResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_users_v1_GetOneUserDexResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
