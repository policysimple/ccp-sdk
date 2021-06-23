# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/instance/v1alpha1/instance.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='pipelines/instance/v1alpha1/instance.proto',
  package='pipelines.instance.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n%io.cuemby.pipelines.instance.v1alpha1B\rInstanceProtoP\001Z8github.com/cuemby/ccp-pipelines-service/instancev1alpha1\242\002\003PPX\252\002\033Pipelines.Instance.V1Alpha1\312\002\033Pipelines\\Instance\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n*pipelines/instance/v1alpha1/instance.proto\x12\x1bpipelines.instance.v1alpha1\"j\n\x0fTypeGitProvider\x12\x17\n\x07ssh_url\x18\x01 \x01(\tR\x06sshUrl\x12\x16\n\x06\x62ranch\x18\x02 \x01(\tR\x06\x62ranch\x12&\n\x0fssh_private_key\x18\x03 \x01(\tR\rsshPrivateKey\"\xd9\x01\n\x08Instance\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x1c\n\tnamespace\x18\x02 \x01(\tR\tnamespace\x12J\n\x0btype_source\x18\x03 \x01(\x0e\x32).pipelines.instance.v1alpha1.InstanceTypeR\ntypeSource\x12O\n\x0cgit_provider\x18\x04 \x01(\x0b\x32,.pipelines.instance.v1alpha1.TypeGitProviderR\x0bgitProvider*D\n\x0cInstanceType\x12\x1d\n\x19INSTANCE_TYPE_UNSPECIFIED\x10\x00\x12\x15\n\x11INSTANCE_TYPE_GIT\x10\x01\x42\xb4\x01\n%io.cuemby.pipelines.instance.v1alpha1B\rInstanceProtoP\x01Z8github.com/cuemby/ccp-pipelines-service/instancev1alpha1\xa2\x02\x03PPX\xaa\x02\x1bPipelines.Instance.V1Alpha1\xca\x02\x1bPipelines\\Instance\\V1Alpha1b\x06proto3'
)

_INSTANCETYPE = _descriptor.EnumDescriptor(
  name='InstanceType',
  full_name='pipelines.instance.v1alpha1.InstanceType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='INSTANCE_TYPE_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='INSTANCE_TYPE_GIT', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=403,
  serialized_end=471,
)
_sym_db.RegisterEnumDescriptor(_INSTANCETYPE)

InstanceType = enum_type_wrapper.EnumTypeWrapper(_INSTANCETYPE)
INSTANCE_TYPE_UNSPECIFIED = 0
INSTANCE_TYPE_GIT = 1



_TYPEGITPROVIDER = _descriptor.Descriptor(
  name='TypeGitProvider',
  full_name='pipelines.instance.v1alpha1.TypeGitProvider',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='ssh_url', full_name='pipelines.instance.v1alpha1.TypeGitProvider.ssh_url', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sshUrl', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='branch', full_name='pipelines.instance.v1alpha1.TypeGitProvider.branch', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='branch', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ssh_private_key', full_name='pipelines.instance.v1alpha1.TypeGitProvider.ssh_private_key', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sshPrivateKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=75,
  serialized_end=181,
)


_INSTANCE = _descriptor.Descriptor(
  name='Instance',
  full_name='pipelines.instance.v1alpha1.Instance',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='pipelines.instance.v1alpha1.Instance.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='namespace', full_name='pipelines.instance.v1alpha1.Instance.namespace', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='namespace', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type_source', full_name='pipelines.instance.v1alpha1.Instance.type_source', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='typeSource', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='git_provider', full_name='pipelines.instance.v1alpha1.Instance.git_provider', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='gitProvider', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=184,
  serialized_end=401,
)

_INSTANCE.fields_by_name['type_source'].enum_type = _INSTANCETYPE
_INSTANCE.fields_by_name['git_provider'].message_type = _TYPEGITPROVIDER
DESCRIPTOR.message_types_by_name['TypeGitProvider'] = _TYPEGITPROVIDER
DESCRIPTOR.message_types_by_name['Instance'] = _INSTANCE
DESCRIPTOR.enum_types_by_name['InstanceType'] = _INSTANCETYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TypeGitProvider = _reflection.GeneratedProtocolMessageType('TypeGitProvider', (_message.Message,), {
  'DESCRIPTOR' : _TYPEGITPROVIDER,
  '__module__' : 'pipelines.instance.v1alpha1.instance_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.instance.v1alpha1.TypeGitProvider)
  })
_sym_db.RegisterMessage(TypeGitProvider)

Instance = _reflection.GeneratedProtocolMessageType('Instance', (_message.Message,), {
  'DESCRIPTOR' : _INSTANCE,
  '__module__' : 'pipelines.instance.v1alpha1.instance_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.instance.v1alpha1.Instance)
  })
_sym_db.RegisterMessage(Instance)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
