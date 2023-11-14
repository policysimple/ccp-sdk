// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pipelines_tekton_v1alpha1_tekton_api_pb = require('../../../pipelines/tekton/v1alpha1/tekton_api_pb.js');
var pipelines_tekton_v1alpha1_tekton_pb = require('../../../pipelines/tekton/v1alpha1/tekton_pb.js');

function serialize_pipelines_tekton_v1alpha1_ChangeStatusRuntimeAndApplicationRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ChangeStatusRuntimeAndApplicationRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ChangeStatusRuntimeAndApplicationRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ChangeStatusRuntimeAndApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ChangeStatusRuntimeAndApplicationResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ChangeStatusRuntimeAndApplicationResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ChangeStatusRuntimeAndApplicationResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ChangeStatusRuntimeAndApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_CreateTektonPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.CreateTektonPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_CreateTektonPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_CreateTektonPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.CreateTektonPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_CreateTektonPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetPipelineRunRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetPipelineRunRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetPipelineRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetPipelineRunRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetPipelineRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetPipelineRunResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetPipelineRunResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetPipelineRunResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetPipelineRunResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetPipelineRunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetStatusRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetStatusRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetStatusRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetStatusRuntimeRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetStatusRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetStatusRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetStatusRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetStatusRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetStatusRuntimeResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetStatusRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListPipelineRunRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListPipelineRunRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListPipelineRunRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListPipelineRunRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListPipelineRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListPipelineRunResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListPipelineRunResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListPipelineRunResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListPipelineRunResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListPipelineRunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListTektonTaskPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListTektonTaskPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListTektonTaskPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListTektonTaskPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListTektonTaskPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListTektonTaskPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_MakeRollbackRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.MakeRollbackRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.MakeRollbackRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_MakeRollbackRuntimeRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.MakeRollbackRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_MakeRollbackRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.MakeRollbackRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.MakeRollbackRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_MakeRollbackRuntimeResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.MakeRollbackRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_RebuildTektonPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.RebuildTektonPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.RebuildTektonPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_RebuildTektonPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.RebuildTektonPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_RebuildTektonPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.RebuildTektonPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.RebuildTektonPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_RebuildTektonPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.RebuildTektonPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TektonPipelineAPIServiceService = exports.TektonPipelineAPIServiceService = {
  createTektonPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/CreateTektonPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_CreateTektonPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_CreateTektonPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_CreateTektonPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_CreateTektonPipelineResponse,
  },
  deleteTektonPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/DeleteTektonPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineResponse,
  },
  listTektonTaskPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ListTektonTaskPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_ListTektonTaskPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_ListTektonTaskPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_ListTektonTaskPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_ListTektonTaskPipelineResponse,
  },
  getPipelineRun: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/GetPipelineRun',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.GetPipelineRunRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.GetPipelineRunResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_GetPipelineRunRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_GetPipelineRunRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_GetPipelineRunResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_GetPipelineRunResponse,
  },
  listPipelineRun: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ListPipelineRun',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.ListPipelineRunRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.ListPipelineRunResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_ListPipelineRunRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_ListPipelineRunRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_ListPipelineRunResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_ListPipelineRunResponse,
  },
  getStatusRuntime: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/GetStatusRuntime',
    requestStream: false,
    responseStream: true,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.GetStatusRuntimeRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.GetStatusRuntimeResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_GetStatusRuntimeRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_GetStatusRuntimeRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_GetStatusRuntimeResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_GetStatusRuntimeResponse,
  },
  changeStatusRuntimeAndApplication: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ChangeStatusRuntimeAndApplication',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.ChangeStatusRuntimeAndApplicationRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.ChangeStatusRuntimeAndApplicationResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_ChangeStatusRuntimeAndApplicationRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_ChangeStatusRuntimeAndApplicationRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_ChangeStatusRuntimeAndApplicationResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_ChangeStatusRuntimeAndApplicationResponse,
  },
  rebuildTektonPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/RebuildTektonPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.RebuildTektonPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.RebuildTektonPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_RebuildTektonPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_RebuildTektonPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_RebuildTektonPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_RebuildTektonPipelineResponse,
  },
  makeRollbackRuntime: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/MakeRollbackRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.MakeRollbackRuntimeRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.MakeRollbackRuntimeResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_MakeRollbackRuntimeRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_MakeRollbackRuntimeRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_MakeRollbackRuntimeResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_MakeRollbackRuntimeResponse,
  },
};

exports.TektonPipelineAPIServiceClient = grpc.makeGenericClientConstructor(TektonPipelineAPIServiceService);
