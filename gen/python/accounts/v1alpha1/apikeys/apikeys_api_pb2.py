# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/apikeys/apikeys_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from accounts.v1alpha1.apikeys import apikeys_pb2 as accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='accounts/v1alpha1/apikeys/apikeys_api.proto',
  package='accounts.v1alpha1.apikeys.v1',
  syntax='proto3',
  serialized_options=b'Z:github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/apikeys',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n+accounts/v1alpha1/apikeys/apikeys_api.proto\x12\x1c\x61\x63\x63ounts.v1alpha1.apikeys.v1\x1a\'accounts/v1alpha1/apikeys/apikeys.proto2\xdc\x04\n\rApiKeyService\x12u\n\x0c\x43reateApiKey\x12\x31.accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest\x1a\x32.accounts.v1alpha1.apikeys.v1.CreateApiKeyResponse\x12u\n\x0cGetOneApiKey\x12\x31.accounts.v1alpha1.apikeys.v1.GetOneApiKeyRequest\x1a\x32.accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse\x12o\n\nListApiKey\x12/.accounts.v1alpha1.apikeys.v1.ListApiKeyRequest\x1a\x30.accounts.v1alpha1.apikeys.v1.ListApiKeyResponse\x12u\n\x0cUpdateApiKey\x12\x31.accounts.v1alpha1.apikeys.v1.UpdateApiKeyRequest\x1a\x32.accounts.v1alpha1.apikeys.v1.UpdateApiKeyResponse\x12u\n\x0c\x44\x65leteApiKey\x12\x31.accounts.v1alpha1.apikeys.v1.DeleteApiKeyRequest\x1a\x32.accounts.v1alpha1.apikeys.v1.DeleteApiKeyResponseB<Z:github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/apikeysb\x06proto3'
  ,
  dependencies=[accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.DESCRIPTOR,])



_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None

_APIKEYSERVICE = _descriptor.ServiceDescriptor(
  name='ApiKeyService',
  full_name='accounts.v1alpha1.apikeys.v1.ApiKeyService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=119,
  serialized_end=723,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateApiKey',
    full_name='accounts.v1alpha1.apikeys.v1.ApiKeyService.CreateApiKey',
    index=0,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._CREATEAPIKEYREQUEST,
    output_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._CREATEAPIKEYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetOneApiKey',
    full_name='accounts.v1alpha1.apikeys.v1.ApiKeyService.GetOneApiKey',
    index=1,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._GETONEAPIKEYREQUEST,
    output_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._GETONEAPIKEYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListApiKey',
    full_name='accounts.v1alpha1.apikeys.v1.ApiKeyService.ListApiKey',
    index=2,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._LISTAPIKEYREQUEST,
    output_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._LISTAPIKEYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateApiKey',
    full_name='accounts.v1alpha1.apikeys.v1.ApiKeyService.UpdateApiKey',
    index=3,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._UPDATEAPIKEYREQUEST,
    output_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._UPDATEAPIKEYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteApiKey',
    full_name='accounts.v1alpha1.apikeys.v1.ApiKeyService.DeleteApiKey',
    index=4,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._DELETEAPIKEYREQUEST,
    output_type=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2._DELETEAPIKEYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_APIKEYSERVICE)

DESCRIPTOR.services_by_name['ApiKeyService'] = _APIKEYSERVICE

# @@protoc_insertion_point(module_scope)
