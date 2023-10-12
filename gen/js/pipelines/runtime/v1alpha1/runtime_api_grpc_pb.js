// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pipelines_runtime_v1alpha1_runtime_api_pb = require('../../../pipelines/runtime/v1alpha1/runtime_api_pb.js');
var pipelines_runtime_v1alpha1_runtime_pb = require('../../../pipelines/runtime/v1alpha1/runtime_pb.js');

function serialize_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.AlreadyExistsRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.AlreadyExistsRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.AlreadyExistsRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.AlreadyExistsRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.AlreadyExistsRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_CreateRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.CreateRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_CreateRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_CreateRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.CreateRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_CreateRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_DeleteRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.DeleteRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_DeleteRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_DeleteRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.DeleteRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_DeleteRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_DeleteRuntimesByApplicationRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByApplicationRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.DeleteRuntimesByApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_DeleteRuntimesByApplicationRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_DeleteRuntimesByApplicationResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByApplicationResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.DeleteRuntimesByApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_DeleteRuntimesByApplicationResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_DeleteRuntimesByEnvironmentRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByEnvironmentRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.DeleteRuntimesByEnvironmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_DeleteRuntimesByEnvironmentRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_DeleteRuntimesByEnvironmentResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByEnvironmentResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.DeleteRuntimesByEnvironmentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_DeleteRuntimesByEnvironmentResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_GetRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.GetRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_GetRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_GetRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.GetRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_GetRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_GetRuntimesInLast24HoursRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimesInLast24HoursRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.GetRuntimesInLast24HoursRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_GetRuntimesInLast24HoursRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimesInLast24HoursRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_GetRuntimesInLast24HoursResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimesInLast24HoursResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.GetRuntimesInLast24HoursResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_GetRuntimesInLast24HoursResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimesInLast24HoursResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_ListRuntimesRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.ListRuntimesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_ListRuntimesRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_ListRuntimesResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.ListRuntimesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_ListRuntimesResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_RebuildRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.RebuildRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.RebuildRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_RebuildRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.RebuildRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_RebuildRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.RebuildRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.RebuildRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_RebuildRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.RebuildRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_ResponseMessageDeleteRuntimeByAppIdRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.ResponseMessageDeleteRuntimeByAppIdRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.ResponseMessageDeleteRuntimeByAppIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_ResponseMessageDeleteRuntimeByAppIdRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.ResponseMessageDeleteRuntimeByAppIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_ResponseMessageDeleteRuntimeByAppIdResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.ResponseMessageDeleteRuntimeByAppIdResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.ResponseMessageDeleteRuntimeByAppIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_ResponseMessageDeleteRuntimeByAppIdResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.ResponseMessageDeleteRuntimeByAppIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.UpdateResponseMessageRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.UpdateResponseMessageRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_UpdateRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.UpdateRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_UpdateRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_UpdateRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.UpdateRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_UpdateRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RuntimeAPIServiceService = exports.RuntimeAPIServiceService = {
  getRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/GetRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_GetRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_GetRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_GetRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_GetRuntimeResponse,
  },
  createRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/CreateRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_CreateRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_CreateRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_CreateRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_CreateRuntimeResponse,
  },
  updateRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_UpdateRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_UpdateRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_UpdateRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_UpdateRuntimeResponse,
  },
  updateResponseMessageRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateResponseMessageRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeResponse,
  },
  responseMessageDeleteRuntimeByAppId: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/ResponseMessageDeleteRuntimeByAppId',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.ResponseMessageDeleteRuntimeByAppIdRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.ResponseMessageDeleteRuntimeByAppIdResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_ResponseMessageDeleteRuntimeByAppIdRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_ResponseMessageDeleteRuntimeByAppIdRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_ResponseMessageDeleteRuntimeByAppIdResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_ResponseMessageDeleteRuntimeByAppIdResponse,
  },
  deleteRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_DeleteRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_DeleteRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_DeleteRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_DeleteRuntimeResponse,
  },
  deleteRuntimesByApplication: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntimesByApplication',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByApplicationRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByApplicationResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_DeleteRuntimesByApplicationRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_DeleteRuntimesByApplicationRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_DeleteRuntimesByApplicationResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_DeleteRuntimesByApplicationResponse,
  },
  deleteRuntimesByEnvironment: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntimesByEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByEnvironmentRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimesByEnvironmentResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_DeleteRuntimesByEnvironmentRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_DeleteRuntimesByEnvironmentRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_DeleteRuntimesByEnvironmentResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_DeleteRuntimesByEnvironmentResponse,
  },
  listRuntimes: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/ListRuntimes',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_ListRuntimesRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_ListRuntimesRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_ListRuntimesResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_ListRuntimesResponse,
  },
  rebuildRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/RebuildRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.RebuildRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.RebuildRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_RebuildRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_RebuildRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_RebuildRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_RebuildRuntimeResponse,
  },
  alreadyExistsRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/AlreadyExistsRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.AlreadyExistsRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.AlreadyExistsRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeResponse,
  },
  getRuntimesInLast24Hours: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/GetRuntimesInLast24Hours',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimesInLast24HoursRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimesInLast24HoursResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_GetRuntimesInLast24HoursRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_GetRuntimesInLast24HoursRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_GetRuntimesInLast24HoursResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_GetRuntimesInLast24HoursResponse,
  },
};

exports.RuntimeAPIServiceClient = grpc.makeGenericClientConstructor(RuntimeAPIServiceService);
