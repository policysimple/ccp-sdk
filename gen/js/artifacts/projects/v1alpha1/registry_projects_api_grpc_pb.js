// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var artifacts_projects_v1alpha1_registry_projects_api_pb = require('../../../artifacts/projects/v1alpha1/registry_projects_api_pb.js');
var artifacts_projects_v1alpha1_registry_projects_pb = require('../../../artifacts/projects/v1alpha1/registry_projects_pb.js');

function serialize_artifacts_projects_v1alpha1_CreateProjectRegistryRequest(arg) {
  if (!(arg instanceof artifacts_projects_v1alpha1_registry_projects_api_pb.CreateProjectRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.projects.v1alpha1.CreateProjectRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_projects_v1alpha1_CreateProjectRegistryRequest(buffer_arg) {
  return artifacts_projects_v1alpha1_registry_projects_api_pb.CreateProjectRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_projects_v1alpha1_CreateProjectRegistryResponse(arg) {
  if (!(arg instanceof artifacts_projects_v1alpha1_registry_projects_api_pb.CreateProjectRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.projects.v1alpha1.CreateProjectRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_projects_v1alpha1_CreateProjectRegistryResponse(buffer_arg) {
  return artifacts_projects_v1alpha1_registry_projects_api_pb.CreateProjectRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_projects_v1alpha1_DeleteProjectRegistryRequest(arg) {
  if (!(arg instanceof artifacts_projects_v1alpha1_registry_projects_api_pb.DeleteProjectRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.projects.v1alpha1.DeleteProjectRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_projects_v1alpha1_DeleteProjectRegistryRequest(buffer_arg) {
  return artifacts_projects_v1alpha1_registry_projects_api_pb.DeleteProjectRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_projects_v1alpha1_DeleteProjectRegistryResponse(arg) {
  if (!(arg instanceof artifacts_projects_v1alpha1_registry_projects_api_pb.DeleteProjectRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.projects.v1alpha1.DeleteProjectRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_projects_v1alpha1_DeleteProjectRegistryResponse(buffer_arg) {
  return artifacts_projects_v1alpha1_registry_projects_api_pb.DeleteProjectRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_projects_v1alpha1_ListProjectsRegistryRequest(arg) {
  if (!(arg instanceof artifacts_projects_v1alpha1_registry_projects_api_pb.ListProjectsRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.projects.v1alpha1.ListProjectsRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_projects_v1alpha1_ListProjectsRegistryRequest(buffer_arg) {
  return artifacts_projects_v1alpha1_registry_projects_api_pb.ListProjectsRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_projects_v1alpha1_ListProjectsRegistryResponse(arg) {
  if (!(arg instanceof artifacts_projects_v1alpha1_registry_projects_api_pb.ListProjectsRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.projects.v1alpha1.ListProjectsRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_projects_v1alpha1_ListProjectsRegistryResponse(buffer_arg) {
  return artifacts_projects_v1alpha1_registry_projects_api_pb.ListProjectsRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_projects_v1alpha1_UpdateProjectRegistryRequest(arg) {
  if (!(arg instanceof artifacts_projects_v1alpha1_registry_projects_api_pb.UpdateProjectRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.projects.v1alpha1.UpdateProjectRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_projects_v1alpha1_UpdateProjectRegistryRequest(buffer_arg) {
  return artifacts_projects_v1alpha1_registry_projects_api_pb.UpdateProjectRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_projects_v1alpha1_UpdateProjectRegistryResponse(arg) {
  if (!(arg instanceof artifacts_projects_v1alpha1_registry_projects_api_pb.UpdateProjectRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.projects.v1alpha1.UpdateProjectRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_projects_v1alpha1_UpdateProjectRegistryResponse(buffer_arg) {
  return artifacts_projects_v1alpha1_registry_projects_api_pb.UpdateProjectRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RegistryProjectsAPIServiceService = exports.RegistryProjectsAPIServiceService = {
  createProjectRegistry: {
    path: '/artifacts.projects.v1alpha1.RegistryProjectsAPIService/CreateProjectRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_projects_v1alpha1_registry_projects_api_pb.CreateProjectRegistryRequest,
    responseType: artifacts_projects_v1alpha1_registry_projects_api_pb.CreateProjectRegistryResponse,
    requestSerialize: serialize_artifacts_projects_v1alpha1_CreateProjectRegistryRequest,
    requestDeserialize: deserialize_artifacts_projects_v1alpha1_CreateProjectRegistryRequest,
    responseSerialize: serialize_artifacts_projects_v1alpha1_CreateProjectRegistryResponse,
    responseDeserialize: deserialize_artifacts_projects_v1alpha1_CreateProjectRegistryResponse,
  },
  listProjectsRegistry: {
    path: '/artifacts.projects.v1alpha1.RegistryProjectsAPIService/ListProjectsRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_projects_v1alpha1_registry_projects_api_pb.ListProjectsRegistryRequest,
    responseType: artifacts_projects_v1alpha1_registry_projects_api_pb.ListProjectsRegistryResponse,
    requestSerialize: serialize_artifacts_projects_v1alpha1_ListProjectsRegistryRequest,
    requestDeserialize: deserialize_artifacts_projects_v1alpha1_ListProjectsRegistryRequest,
    responseSerialize: serialize_artifacts_projects_v1alpha1_ListProjectsRegistryResponse,
    responseDeserialize: deserialize_artifacts_projects_v1alpha1_ListProjectsRegistryResponse,
  },
  updateProjectRegistry: {
    path: '/artifacts.projects.v1alpha1.RegistryProjectsAPIService/UpdateProjectRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_projects_v1alpha1_registry_projects_api_pb.UpdateProjectRegistryRequest,
    responseType: artifacts_projects_v1alpha1_registry_projects_api_pb.UpdateProjectRegistryResponse,
    requestSerialize: serialize_artifacts_projects_v1alpha1_UpdateProjectRegistryRequest,
    requestDeserialize: deserialize_artifacts_projects_v1alpha1_UpdateProjectRegistryRequest,
    responseSerialize: serialize_artifacts_projects_v1alpha1_UpdateProjectRegistryResponse,
    responseDeserialize: deserialize_artifacts_projects_v1alpha1_UpdateProjectRegistryResponse,
  },
  deleteProjectRegistry: {
    path: '/artifacts.projects.v1alpha1.RegistryProjectsAPIService/DeleteProjectRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_projects_v1alpha1_registry_projects_api_pb.DeleteProjectRegistryRequest,
    responseType: artifacts_projects_v1alpha1_registry_projects_api_pb.DeleteProjectRegistryResponse,
    requestSerialize: serialize_artifacts_projects_v1alpha1_DeleteProjectRegistryRequest,
    requestDeserialize: deserialize_artifacts_projects_v1alpha1_DeleteProjectRegistryRequest,
    responseSerialize: serialize_artifacts_projects_v1alpha1_DeleteProjectRegistryResponse,
    responseDeserialize: deserialize_artifacts_projects_v1alpha1_DeleteProjectRegistryResponse,
  },
};

exports.RegistryProjectsAPIServiceClient = grpc.makeGenericClientConstructor(RegistryProjectsAPIServiceService);
