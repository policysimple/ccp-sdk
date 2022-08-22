// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_countries_countries_pb = require('../../../accounts/v1alpha1/countries/countries_pb.js');

function serialize_accounts_v1alpha1_countries_v1_GetOneCountryRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_countries_countries_pb.GetOneCountryRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.countries.v1.GetOneCountryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_countries_v1_GetOneCountryRequest(buffer_arg) {
  return accounts_v1alpha1_countries_countries_pb.GetOneCountryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_countries_v1_GetOneCountryResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_countries_countries_pb.GetOneCountryResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.countries.v1.GetOneCountryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_countries_v1_GetOneCountryResponse(buffer_arg) {
  return accounts_v1alpha1_countries_countries_pb.GetOneCountryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_countries_v1_ListCountriesRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_countries_countries_pb.ListCountriesRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.countries.v1.ListCountriesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_countries_v1_ListCountriesRequest(buffer_arg) {
  return accounts_v1alpha1_countries_countries_pb.ListCountriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_countries_v1_ListCountriesResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_countries_countries_pb.ListCountriesResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.countries.v1.ListCountriesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_countries_v1_ListCountriesResponse(buffer_arg) {
  return accounts_v1alpha1_countries_countries_pb.ListCountriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CountriesServiceService = exports.CountriesServiceService = {
  listCountries: {
    path: '/accounts.v1alpha1.countries.v1.CountriesService/ListCountries',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_countries_countries_pb.ListCountriesRequest,
    responseType: accounts_v1alpha1_countries_countries_pb.ListCountriesResponse,
    requestSerialize: serialize_accounts_v1alpha1_countries_v1_ListCountriesRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_countries_v1_ListCountriesRequest,
    responseSerialize: serialize_accounts_v1alpha1_countries_v1_ListCountriesResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_countries_v1_ListCountriesResponse,
  },
  getOneCountry: {
    path: '/accounts.v1alpha1.countries.v1.CountriesService/GetOneCountry',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_countries_countries_pb.GetOneCountryRequest,
    responseType: accounts_v1alpha1_countries_countries_pb.GetOneCountryResponse,
    requestSerialize: serialize_accounts_v1alpha1_countries_v1_GetOneCountryRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_countries_v1_GetOneCountryRequest,
    responseSerialize: serialize_accounts_v1alpha1_countries_v1_GetOneCountryResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_countries_v1_GetOneCountryResponse,
  },
};

exports.CountriesServiceClient = grpc.makeGenericClientConstructor(CountriesServiceService);
