// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pipelines_tekton_v1alpha1_tekton_api_pb = require('../../../pipelines/tekton/v1alpha1/tekton_api_pb.js');
var pipelines_tekton_v1alpha1_tekton_pb = require('../../../pipelines/tekton/v1alpha1/tekton_pb.js');

function serialize_pipelines_tekton_v1alpha1_CreateCustomPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.CreateCustomPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.CreateCustomPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_CreateCustomPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.CreateCustomPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_CreateCustomPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.CreateCustomPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.CreateCustomPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_CreateCustomPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.CreateCustomPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_pipelines_tekton_v1alpha1_CreateTektonTaskPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonTaskPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.CreateTektonTaskPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_CreateTektonTaskPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonTaskPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_CreateTektonTaskPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonTaskPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.CreateTektonTaskPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_CreateTektonTaskPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonTaskPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_DeleteCustomPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.DeleteCustomPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.DeleteCustomPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_DeleteCustomPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.DeleteCustomPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_DeleteCustomPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.DeleteCustomPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.DeleteCustomPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_DeleteCustomPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.DeleteCustomPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonTaskPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonTaskPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonTaskPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonTaskPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetCustomPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetCustomPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetCustomPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetCustomPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetCustomPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetCustomPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetCustomPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetCustomPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetCustomPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetCustomPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetTektonTaskPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetTektonTaskPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetTektonTaskPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetTektonTaskPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetTektonTaskPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetTektonTaskPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetTektonTaskPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetTektonTaskPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetTektonTaskPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetTektonTaskPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListCustomPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListCustomPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListCustomPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListCustomPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListCustomPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListCustomPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListCustomPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListCustomPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListCustomPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListCustomPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_pipelines_tekton_v1alpha1_UpdateCustomPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.UpdateCustomPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.UpdateCustomPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_UpdateCustomPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.UpdateCustomPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_UpdateCustomPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.UpdateCustomPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.UpdateCustomPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_UpdateCustomPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.UpdateCustomPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  createTektonTaskPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/CreateTektonTaskPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonTaskPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonTaskPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_CreateTektonTaskPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_CreateTektonTaskPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_CreateTektonTaskPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_CreateTektonTaskPipelineResponse,
  },
  deleteTektonTaskPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/DeleteTektonTaskPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonTaskPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonTaskPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineResponse,
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
  getTektonTaskPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/GetTektonTaskPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.GetTektonTaskPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.GetTektonTaskPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_GetTektonTaskPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_GetTektonTaskPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_GetTektonTaskPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_GetTektonTaskPipelineResponse,
  },
  createCustomPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/CreateCustomPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.CreateCustomPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.CreateCustomPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_CreateCustomPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_CreateCustomPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_CreateCustomPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_CreateCustomPipelineResponse,
  },
  deleteCustomPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/DeleteCustomPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.DeleteCustomPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.DeleteCustomPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_DeleteCustomPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_DeleteCustomPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_DeleteCustomPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_DeleteCustomPipelineResponse,
  },
  listCustomPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ListCustomPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.ListCustomPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.ListCustomPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_ListCustomPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_ListCustomPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_ListCustomPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_ListCustomPipelineResponse,
  },
  getCustomPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/GetCustomPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.GetCustomPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.GetCustomPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_GetCustomPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_GetCustomPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_GetCustomPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_GetCustomPipelineResponse,
  },
  updateCustomPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/UpdateCustomPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.UpdateCustomPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.UpdateCustomPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_UpdateCustomPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_UpdateCustomPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_UpdateCustomPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_UpdateCustomPipelineResponse,
  },
};

exports.TektonPipelineAPIServiceClient = grpc.makeGenericClientConstructor(TektonPipelineAPIServiceService);
