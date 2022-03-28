# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='pipelines/environment/v1alpha1/environment.proto',
  package='pipelines.environment.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n(io.cuemby.pipelines.environment.v1alpha1B\020EnvironmentProtoP\001Z?github.com/cuemby/ccp-sdk/gen/go/pipelines/environment/v1alpha1\242\002\003PPX\252\002\036Pipelines.Environment.V1Alpha1\312\002\036Pipelines\\Environment\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n0pipelines/environment/v1alpha1/environment.proto\x12\x1epipelines.environment.v1alpha1\"\xb2\x01\n\x0b\x45nvironment\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\'\n\x0forganization_id\x18\x02 \x01(\rR\x0eorganizationId\x12\x1d\n\nproject_id\x18\x03 \x01(\rR\tprojectId\x12\x12\n\x04name\x18\x04 \x01(\tR\x04name\x12\x16\n\x06\x61\x63tive\x18\x05 \x01(\x08R\x06\x61\x63tive\x12\x1f\n\x0bstatus_type\x18\x06 \x01(\tR\nstatusTypeB\xc7\x01\n(io.cuemby.pipelines.environment.v1alpha1B\x10\x45nvironmentProtoP\x01Z?github.com/cuemby/ccp-sdk/gen/go/pipelines/environment/v1alpha1\xa2\x02\x03PPX\xaa\x02\x1ePipelines.Environment.V1Alpha1\xca\x02\x1ePipelines\\Environment\\V1Alpha1b\x06proto3'
)




_ENVIRONMENT = _descriptor.Descriptor(
  name='Environment',
  full_name='pipelines.environment.v1alpha1.Environment',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='pipelines.environment.v1alpha1.Environment.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='pipelines.environment.v1alpha1.Environment.organization_id', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='pipelines.environment.v1alpha1.Environment.project_id', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='pipelines.environment.v1alpha1.Environment.name', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='active', full_name='pipelines.environment.v1alpha1.Environment.active', index=4,
      number=5, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='active', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status_type', full_name='pipelines.environment.v1alpha1.Environment.status_type', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='statusType', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=85,
  serialized_end=263,
)

DESCRIPTOR.message_types_by_name['Environment'] = _ENVIRONMENT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Environment = _reflection.GeneratedProtocolMessageType('Environment', (_message.Message,), {
  'DESCRIPTOR' : _ENVIRONMENT,
  '__module__' : 'pipelines.environment.v1alpha1.environment_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.environment.v1alpha1.Environment)
  })
_sym_db.RegisterMessage(Environment)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
