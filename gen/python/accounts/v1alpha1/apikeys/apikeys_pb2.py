# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/apikeys/apikeys.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from accounts.v1alpha1 import accounts_pb2 as accounts_dot_v1alpha1_dot_accounts__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='accounts/v1alpha1/apikeys/apikeys.proto',
  package='accounts.v1alpha1.apikeys.v1',
  syntax='proto3',
  serialized_options=b'Z:github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/apikeys',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\'accounts/v1alpha1/apikeys/apikeys.proto\x12\x1c\x61\x63\x63ounts.v1alpha1.apikeys.v1\x1a accounts/v1alpha1/accounts.proto\"\xef\x01\n\x13\x43reateApiKeyRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x17\n\x07user_id\x18\x02 \x01(\tR\x06userId\x12\'\n\x0fpermissions_ids\x18\x04 \x03(\rR\x0epermissionsIds\x12\'\n\x0forganization_id\x18\x05 \x01(\tR\x0eorganizationId\x12\x1b\n\tis_active\x18\x06 \x01(\x08R\x08isActive\x12\x1d\n\nproject_id\x18\x07 \x01(\tR\tprojectId\x12\x1d\n\nexpired_at\x18\x08 \x01(\tR\texpiredAt\"U\n\x14\x43reateApiKeyResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\x12\x17\n\x07\x61pi_key\x18\x02 \x01(\tR\x06\x61piKey\x12\x12\n\x04uuid\x18\x04 \x01(\tR\x04uuid\"?\n\x13GetOneApiKeyRequest\x12\x12\n\x04uuid\x18\x01 \x01(\tR\x04uuid\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value\"\x95\x03\n\x14GetOneApiKeyResponse\x12\x12\n\x04uuid\x18\x01 \x01(\tR\x04uuid\x12\x17\n\x07\x61pi_key\x18\x02 \x01(\tR\x06\x61piKey\x12\x12\n\x04name\x18\x03 \x01(\tR\x04name\x12\x17\n\x07user_id\x18\x04 \x01(\tR\x06userId\x12+\n\x04role\x18\x05 \x01(\x0b\x32\x17.accounts.v1alpha1.RoleR\x04role\x12?\n\x0bpermissions\x18\x06 \x03(\x0b\x32\x1d.accounts.v1alpha1.PermissionR\x0bpermissions\x12\x1b\n\tis_active\x18\x08 \x01(\x08R\x08isActive\x12\x34\n\x07project\x18\t \x01(\x0b\x32\x1a.accounts.v1alpha1.ProjectR\x07project\x12\x43\n\x0corganization\x18\n \x01(\x0b\x32\x1f.accounts.v1alpha1.OrganizationR\x0corganization\x12\x1d\n\nexpired_at\x18\x0b \x01(\tR\texpiredAt\"U\n\x11ListApiKeyRequest\x12\x17\n\x07user_id\x18\x01 \x01(\tR\x06userId\x12\'\n\x0forganization_id\x18\x02 \x01(\tR\x0eorganizationId\"\x9d\x02\n\nApiKeyList\x12\x12\n\x04uuid\x18\x01 \x01(\tR\x04uuid\x12\x17\n\x07\x61pi_key\x18\x02 \x01(\tR\x06\x61piKey\x12\x12\n\x04name\x18\x03 \x01(\tR\x04name\x12\x17\n\x07user_id\x18\x04 \x01(\tR\x06userId\x12\x1b\n\tis_active\x18\x06 \x01(\x08R\x08isActive\x12\x34\n\x07project\x18\x07 \x01(\x0b\x32\x1a.accounts.v1alpha1.ProjectR\x07project\x12\x43\n\x0corganization\x18\x08 \x01(\x0b\x32\x1f.accounts.v1alpha1.OrganizationR\x0corganization\x12\x1d\n\nexpired_at\x18\t \x01(\tR\texpiredAt\"Y\n\x12ListApiKeyResponse\x12\x43\n\x08\x61pi_keys\x18\x01 \x03(\x0b\x32(.accounts.v1alpha1.apikeys.v1.ApiKeyListR\x07\x61piKeys\"u\n\x13UpdateApiKeyRequest\x12\x12\n\x04uuid\x18\x01 \x01(\tR\x04uuid\x12J\n\x07\x61pi_key\x18\x06 \x01(\x0b\x32\x31.accounts.v1alpha1.apikeys.v1.CreateApiKeyRequestR\x06\x61piKey\"A\n\x14UpdateApiKeyResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\x12\x17\n\x07\x61pi_key\x18\x02 \x01(\tR\x06\x61piKey\")\n\x13\x44\x65leteApiKeyRequest\x12\x12\n\x04uuid\x18\x01 \x01(\tR\x04uuid\"A\n\x14\x44\x65leteApiKeyResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\x12\x17\n\x07\x61pi_key\x18\x02 \x01(\tR\x06\x61piKeyB<Z:github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/apikeysb\x06proto3'
  ,
  dependencies=[accounts_dot_v1alpha1_dot_accounts__pb2.DESCRIPTOR,])




_CREATEAPIKEYREQUEST = _descriptor.Descriptor(
  name='CreateApiKeyRequest',
  full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest.user_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='permissions_ids', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest.permissions_ids', index=2,
      number=4, type=13, cpp_type=3, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='permissionsIds', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest.organization_id', index=3,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='is_active', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest.is_active', index=4,
      number=6, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='isActive', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest.project_id', index=5,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='expired_at', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest.expired_at', index=6,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='expiredAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=108,
  serialized_end=347,
)


_CREATEAPIKEYRESPONSE = _descriptor.Descriptor(
  name='CreateApiKeyResponse',
  full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyResponse.msg', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='api_key', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyResponse.api_key', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='apiKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='uuid', full_name='accounts.v1alpha1.apikeys.v1.CreateApiKeyResponse.uuid', index=2,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='uuid', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=349,
  serialized_end=434,
)


_GETONEAPIKEYREQUEST = _descriptor.Descriptor(
  name='GetOneApiKeyRequest',
  full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='uuid', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyRequest.uuid', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='uuid', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyRequest.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='value', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=436,
  serialized_end=499,
)


_GETONEAPIKEYRESPONSE = _descriptor.Descriptor(
  name='GetOneApiKeyResponse',
  full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='uuid', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.uuid', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='uuid', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='api_key', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.api_key', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='apiKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.name', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.user_id', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='role', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.role', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='role', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='permissions', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.permissions', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='permissions', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='is_active', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.is_active', index=6,
      number=8, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='isActive', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.project', index=7,
      number=9, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='project', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.organization', index=8,
      number=10, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organization', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='expired_at', full_name='accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.expired_at', index=9,
      number=11, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='expiredAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=502,
  serialized_end=907,
)


_LISTAPIKEYREQUEST = _descriptor.Descriptor(
  name='ListApiKeyRequest',
  full_name='accounts.v1alpha1.apikeys.v1.ListApiKeyRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.apikeys.v1.ListApiKeyRequest.user_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='accounts.v1alpha1.apikeys.v1.ListApiKeyRequest.organization_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=909,
  serialized_end=994,
)


_APIKEYLIST = _descriptor.Descriptor(
  name='ApiKeyList',
  full_name='accounts.v1alpha1.apikeys.v1.ApiKeyList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='uuid', full_name='accounts.v1alpha1.apikeys.v1.ApiKeyList.uuid', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='uuid', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='api_key', full_name='accounts.v1alpha1.apikeys.v1.ApiKeyList.api_key', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='apiKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='accounts.v1alpha1.apikeys.v1.ApiKeyList.name', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.apikeys.v1.ApiKeyList.user_id', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='is_active', full_name='accounts.v1alpha1.apikeys.v1.ApiKeyList.is_active', index=4,
      number=6, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='isActive', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project', full_name='accounts.v1alpha1.apikeys.v1.ApiKeyList.project', index=5,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='project', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization', full_name='accounts.v1alpha1.apikeys.v1.ApiKeyList.organization', index=6,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organization', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='expired_at', full_name='accounts.v1alpha1.apikeys.v1.ApiKeyList.expired_at', index=7,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='expiredAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=997,
  serialized_end=1282,
)


_LISTAPIKEYRESPONSE = _descriptor.Descriptor(
  name='ListApiKeyResponse',
  full_name='accounts.v1alpha1.apikeys.v1.ListApiKeyResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='api_keys', full_name='accounts.v1alpha1.apikeys.v1.ListApiKeyResponse.api_keys', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='apiKeys', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1284,
  serialized_end=1373,
)


_UPDATEAPIKEYREQUEST = _descriptor.Descriptor(
  name='UpdateApiKeyRequest',
  full_name='accounts.v1alpha1.apikeys.v1.UpdateApiKeyRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='uuid', full_name='accounts.v1alpha1.apikeys.v1.UpdateApiKeyRequest.uuid', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='uuid', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='api_key', full_name='accounts.v1alpha1.apikeys.v1.UpdateApiKeyRequest.api_key', index=1,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='apiKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1375,
  serialized_end=1492,
)


_UPDATEAPIKEYRESPONSE = _descriptor.Descriptor(
  name='UpdateApiKeyResponse',
  full_name='accounts.v1alpha1.apikeys.v1.UpdateApiKeyResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='accounts.v1alpha1.apikeys.v1.UpdateApiKeyResponse.msg', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='api_key', full_name='accounts.v1alpha1.apikeys.v1.UpdateApiKeyResponse.api_key', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='apiKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1494,
  serialized_end=1559,
)


_DELETEAPIKEYREQUEST = _descriptor.Descriptor(
  name='DeleteApiKeyRequest',
  full_name='accounts.v1alpha1.apikeys.v1.DeleteApiKeyRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='uuid', full_name='accounts.v1alpha1.apikeys.v1.DeleteApiKeyRequest.uuid', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='uuid', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1561,
  serialized_end=1602,
)


_DELETEAPIKEYRESPONSE = _descriptor.Descriptor(
  name='DeleteApiKeyResponse',
  full_name='accounts.v1alpha1.apikeys.v1.DeleteApiKeyResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='accounts.v1alpha1.apikeys.v1.DeleteApiKeyResponse.msg', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='api_key', full_name='accounts.v1alpha1.apikeys.v1.DeleteApiKeyResponse.api_key', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='apiKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1604,
  serialized_end=1669,
)

_GETONEAPIKEYRESPONSE.fields_by_name['role'].message_type = accounts_dot_v1alpha1_dot_accounts__pb2._ROLE
_GETONEAPIKEYRESPONSE.fields_by_name['permissions'].message_type = accounts_dot_v1alpha1_dot_accounts__pb2._PERMISSION
_GETONEAPIKEYRESPONSE.fields_by_name['project'].message_type = accounts_dot_v1alpha1_dot_accounts__pb2._PROJECT
_GETONEAPIKEYRESPONSE.fields_by_name['organization'].message_type = accounts_dot_v1alpha1_dot_accounts__pb2._ORGANIZATION
_APIKEYLIST.fields_by_name['project'].message_type = accounts_dot_v1alpha1_dot_accounts__pb2._PROJECT
_APIKEYLIST.fields_by_name['organization'].message_type = accounts_dot_v1alpha1_dot_accounts__pb2._ORGANIZATION
_LISTAPIKEYRESPONSE.fields_by_name['api_keys'].message_type = _APIKEYLIST
_UPDATEAPIKEYREQUEST.fields_by_name['api_key'].message_type = _CREATEAPIKEYREQUEST
DESCRIPTOR.message_types_by_name['CreateApiKeyRequest'] = _CREATEAPIKEYREQUEST
DESCRIPTOR.message_types_by_name['CreateApiKeyResponse'] = _CREATEAPIKEYRESPONSE
DESCRIPTOR.message_types_by_name['GetOneApiKeyRequest'] = _GETONEAPIKEYREQUEST
DESCRIPTOR.message_types_by_name['GetOneApiKeyResponse'] = _GETONEAPIKEYRESPONSE
DESCRIPTOR.message_types_by_name['ListApiKeyRequest'] = _LISTAPIKEYREQUEST
DESCRIPTOR.message_types_by_name['ApiKeyList'] = _APIKEYLIST
DESCRIPTOR.message_types_by_name['ListApiKeyResponse'] = _LISTAPIKEYRESPONSE
DESCRIPTOR.message_types_by_name['UpdateApiKeyRequest'] = _UPDATEAPIKEYREQUEST
DESCRIPTOR.message_types_by_name['UpdateApiKeyResponse'] = _UPDATEAPIKEYRESPONSE
DESCRIPTOR.message_types_by_name['DeleteApiKeyRequest'] = _DELETEAPIKEYREQUEST
DESCRIPTOR.message_types_by_name['DeleteApiKeyResponse'] = _DELETEAPIKEYRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CreateApiKeyRequest = _reflection.GeneratedProtocolMessageType('CreateApiKeyRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEAPIKEYREQUEST,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest)
  })
_sym_db.RegisterMessage(CreateApiKeyRequest)

CreateApiKeyResponse = _reflection.GeneratedProtocolMessageType('CreateApiKeyResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEAPIKEYRESPONSE,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.CreateApiKeyResponse)
  })
_sym_db.RegisterMessage(CreateApiKeyResponse)

GetOneApiKeyRequest = _reflection.GeneratedProtocolMessageType('GetOneApiKeyRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETONEAPIKEYREQUEST,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.GetOneApiKeyRequest)
  })
_sym_db.RegisterMessage(GetOneApiKeyRequest)

GetOneApiKeyResponse = _reflection.GeneratedProtocolMessageType('GetOneApiKeyResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETONEAPIKEYRESPONSE,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse)
  })
_sym_db.RegisterMessage(GetOneApiKeyResponse)

ListApiKeyRequest = _reflection.GeneratedProtocolMessageType('ListApiKeyRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPIKEYREQUEST,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.ListApiKeyRequest)
  })
_sym_db.RegisterMessage(ListApiKeyRequest)

ApiKeyList = _reflection.GeneratedProtocolMessageType('ApiKeyList', (_message.Message,), {
  'DESCRIPTOR' : _APIKEYLIST,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.ApiKeyList)
  })
_sym_db.RegisterMessage(ApiKeyList)

ListApiKeyResponse = _reflection.GeneratedProtocolMessageType('ListApiKeyResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPIKEYRESPONSE,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.ListApiKeyResponse)
  })
_sym_db.RegisterMessage(ListApiKeyResponse)

UpdateApiKeyRequest = _reflection.GeneratedProtocolMessageType('UpdateApiKeyRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEAPIKEYREQUEST,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.UpdateApiKeyRequest)
  })
_sym_db.RegisterMessage(UpdateApiKeyRequest)

UpdateApiKeyResponse = _reflection.GeneratedProtocolMessageType('UpdateApiKeyResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEAPIKEYRESPONSE,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.UpdateApiKeyResponse)
  })
_sym_db.RegisterMessage(UpdateApiKeyResponse)

DeleteApiKeyRequest = _reflection.GeneratedProtocolMessageType('DeleteApiKeyRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEAPIKEYREQUEST,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.DeleteApiKeyRequest)
  })
_sym_db.RegisterMessage(DeleteApiKeyRequest)

DeleteApiKeyResponse = _reflection.GeneratedProtocolMessageType('DeleteApiKeyResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEAPIKEYRESPONSE,
  '__module__' : 'accounts.v1alpha1.apikeys.apikeys_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.apikeys.v1.DeleteApiKeyResponse)
  })
_sym_db.RegisterMessage(DeleteApiKeyResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
