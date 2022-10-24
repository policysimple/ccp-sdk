# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/countries/countries_apis.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from accounts.v1alpha1.countries import countries_pb2 as accounts_dot_v1alpha1_dot_countries_dot_countries__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='accounts/v1alpha1/countries/countries_apis.proto',
  package='accounts.v1alpha1.countries.v1',
  syntax='proto3',
  serialized_options=b'Z<github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/countries',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n0accounts/v1alpha1/countries/countries_apis.proto\x12\x1e\x61\x63\x63ounts.v1alpha1.countries.v1\x1a+accounts/v1alpha1/countries/countries.proto2\x8e\x02\n\x10\x43ountriesService\x12|\n\rListCountries\x12\x34.accounts.v1alpha1.countries.v1.ListCountriesRequest\x1a\x35.accounts.v1alpha1.countries.v1.ListCountriesResponse\x12|\n\rGetOneCountry\x12\x34.accounts.v1alpha1.countries.v1.GetOneCountryRequest\x1a\x35.accounts.v1alpha1.countries.v1.GetOneCountryResponseB>Z<github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/countriesb\x06proto3'
  ,
  dependencies=[accounts_dot_v1alpha1_dot_countries_dot_countries__pb2.DESCRIPTOR,])



_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None

_COUNTRIESSERVICE = _descriptor.ServiceDescriptor(
  name='CountriesService',
  full_name='accounts.v1alpha1.countries.v1.CountriesService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=130,
  serialized_end=400,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListCountries',
    full_name='accounts.v1alpha1.countries.v1.CountriesService.ListCountries',
    index=0,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_countries_dot_countries__pb2._LISTCOUNTRIESREQUEST,
    output_type=accounts_dot_v1alpha1_dot_countries_dot_countries__pb2._LISTCOUNTRIESRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetOneCountry',
    full_name='accounts.v1alpha1.countries.v1.CountriesService.GetOneCountry',
    index=1,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_countries_dot_countries__pb2._GETONECOUNTRYREQUEST,
    output_type=accounts_dot_v1alpha1_dot_countries_dot_countries__pb2._GETONECOUNTRYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_COUNTRIESSERVICE)

DESCRIPTOR.services_by_name['CountriesService'] = _COUNTRIESSERVICE

# @@protoc_insertion_point(module_scope)
