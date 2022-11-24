// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var search_v1alpha1_search_api_pb = require('../../search/v1alpha1/search_api_pb.js');
var search_v1alpha1_search_pb = require('../../search/v1alpha1/search_pb.js');

function serialize_search_v1alpha1_SearchRequest(arg) {
  if (!(arg instanceof search_v1alpha1_search_api_pb.SearchRequest)) {
    throw new Error('Expected argument of type search.v1alpha1.SearchRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_search_v1alpha1_SearchRequest(buffer_arg) {
  return search_v1alpha1_search_api_pb.SearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_search_v1alpha1_SearchResponse(arg) {
  if (!(arg instanceof search_v1alpha1_search_api_pb.SearchResponse)) {
    throw new Error('Expected argument of type search.v1alpha1.SearchResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_search_v1alpha1_SearchResponse(buffer_arg) {
  return search_v1alpha1_search_api_pb.SearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SearchAPIServiceService = exports.SearchAPIServiceService = {
  search: {
    path: '/search.v1alpha1.SearchAPIService/Search',
    requestStream: false,
    responseStream: false,
    requestType: search_v1alpha1_search_api_pb.SearchRequest,
    responseType: search_v1alpha1_search_api_pb.SearchResponse,
    requestSerialize: serialize_search_v1alpha1_SearchRequest,
    requestDeserialize: deserialize_search_v1alpha1_SearchRequest,
    responseSerialize: serialize_search_v1alpha1_SearchResponse,
    responseDeserialize: deserialize_search_v1alpha1_SearchResponse,
  },
};

exports.SearchAPIServiceClient = grpc.makeGenericClientConstructor(SearchAPIServiceService);
