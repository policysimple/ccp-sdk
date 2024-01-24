// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_projects_projects_pb = require('../../../accounts/v1alpha1/projects/projects_pb.js');

function serialize_accounts_v1alpha1_projects_v1_CreateProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.CreateProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_CreateProjectRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_CreateProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.CreateProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.CreateProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_CreateProjectResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.CreateProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_DeleteProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.DeleteProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.DeleteProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_DeleteProjectRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.DeleteProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_DeleteProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.DeleteProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.DeleteProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_DeleteProjectResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.DeleteProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_DeleteUserByProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.DeleteUserByProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.DeleteUserByProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_DeleteUserByProjectRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.DeleteUserByProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_DeleteUserByProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.DeleteUserByProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.DeleteUserByProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_DeleteUserByProjectResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.DeleteUserByProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_EditRoleUserByProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.EditRoleUserByProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.EditRoleUserByProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_EditRoleUserByProjectRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.EditRoleUserByProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_EditRoleUserByProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.EditRoleUserByProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.EditRoleUserByProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_EditRoleUserByProjectResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.EditRoleUserByProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_GetOneProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.GetOneProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.GetOneProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_GetOneProjectRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.GetOneProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_GetOneProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.GetOneProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.GetOneProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_GetOneProjectResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.GetOneProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_ListProjectByOrganizationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.ListProjectByOrganizationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.ListProjectByOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_ListProjectByOrganizationRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.ListProjectByOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_ListProjectByOrganizationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.ListProjectByOrganizationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.ListProjectByOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_ListProjectByOrganizationResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.ListProjectByOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_ListProjectPaginationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.ListProjectPaginationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.ListProjectPaginationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_ListProjectPaginationRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.ListProjectPaginationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_ListProjectPaginationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.ListProjectPaginationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.ListProjectPaginationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_ListProjectPaginationResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.ListProjectPaginationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_ListProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.ListProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.ListProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_ListProjectRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.ListProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_ListProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.ListProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.ListProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_ListProjectResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.ListProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_UpdateProjectRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.UpdateProjectRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.UpdateProjectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_UpdateProjectRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.UpdateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_UpdateProjectResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.UpdateProjectResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.UpdateProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_UpdateProjectResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.UpdateProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_UpdateProjectRoleRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.UpdateProjectRoleRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.UpdateProjectRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_UpdateProjectRoleRequest(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.UpdateProjectRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_projects_v1_UpdateProjectRoleResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_projects_projects_pb.UpdateProjectRoleResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.projects.v1.UpdateProjectRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_projects_v1_UpdateProjectRoleResponse(buffer_arg) {
  return accounts_v1alpha1_projects_projects_pb.UpdateProjectRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProjectServiceService = exports.ProjectServiceService = {
  // CRUD Project
  createProject: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/CreateProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.CreateProjectRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.CreateProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_CreateProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_CreateProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_CreateProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_CreateProjectResponse,
  },
  getOneProject: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/GetOneProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.GetOneProjectRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.GetOneProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_GetOneProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_GetOneProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_GetOneProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_GetOneProjectResponse,
  },
  updateProject: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/UpdateProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.UpdateProjectRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.UpdateProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_UpdateProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_UpdateProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_UpdateProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_UpdateProjectResponse,
  },
  deleteProject: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/DeleteProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.DeleteProjectRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.DeleteProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_DeleteProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_DeleteProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_DeleteProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_DeleteProjectResponse,
  },
  listProject: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/ListProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.ListProjectRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.ListProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_ListProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_ListProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_ListProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_ListProjectResponse,
  },
  listProjectPagination: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/ListProjectPagination',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.ListProjectPaginationRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.ListProjectPaginationResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_ListProjectPaginationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_ListProjectPaginationRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_ListProjectPaginationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_ListProjectPaginationResponse,
  },
  // EDITTS AND DELETE USERS
  deleteUserByProject: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/DeleteUserByProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.DeleteUserByProjectRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.DeleteUserByProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_DeleteUserByProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_DeleteUserByProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_DeleteUserByProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_DeleteUserByProjectResponse,
  },
  editRoleUserByProject: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/EditRoleUserByProject',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.EditRoleUserByProjectRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.EditRoleUserByProjectResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_EditRoleUserByProjectRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_EditRoleUserByProjectRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_EditRoleUserByProjectResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_EditRoleUserByProjectResponse,
  },
  listProjectByOrganization: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/ListProjectByOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.ListProjectByOrganizationRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.ListProjectByOrganizationResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_ListProjectByOrganizationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_ListProjectByOrganizationRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_ListProjectByOrganizationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_ListProjectByOrganizationResponse,
  },
  updateProjectRole: {
    path: '/accounts.v1alpha1.projects.v1.ProjectService/UpdateProjectRole',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_projects_projects_pb.UpdateProjectRoleRequest,
    responseType: accounts_v1alpha1_projects_projects_pb.UpdateProjectRoleResponse,
    requestSerialize: serialize_accounts_v1alpha1_projects_v1_UpdateProjectRoleRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_projects_v1_UpdateProjectRoleRequest,
    responseSerialize: serialize_accounts_v1alpha1_projects_v1_UpdateProjectRoleResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_projects_v1_UpdateProjectRoleResponse,
  },
};

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(ProjectServiceService);
