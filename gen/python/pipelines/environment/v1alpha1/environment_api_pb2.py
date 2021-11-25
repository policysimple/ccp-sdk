# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pipelines.environment.v1alpha1 import environment_pb2 as pipelines_dot_environment_dot_v1alpha1_dot_environment__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pipelines/environment/v1alpha1/environment_api.proto',
  package='pipelines.environment.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n(io.cuemby.pipelines.environment.v1alpha1B\023EnvironmentAPIProtoP\001Z;github.com/cuemby/ccp-pipelines-service/environmentv1alpha1\242\002\003PPX\252\002\036Pipelines.Environment.V1Alpha1\312\002\036Pipelines\\Environment\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n4pipelines/environment/v1alpha1/environment_api.proto\x12\x1epipelines.environment.v1alpha1\x1a\x30pipelines/environment/v1alpha1/environment.proto\"i\n\x18\x43reateEnvironmentRequest\x12M\n\x0b\x65nvironment\x18\x01 \x01(\x0b\x32+.pipelines.environment.v1alpha1.EnvironmentR\x0b\x65nvironment\"\x82\x01\n\x19\x43reateEnvironmentResponse\x12M\n\x0b\x65nvironment\x18\x01 \x01(\x0b\x32+.pipelines.environment.v1alpha1.EnvironmentR\x0b\x65nvironment\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status2\xa4\x01\n\x15\x45nvinromentAPIService\x12\x8a\x01\n\x11\x43reateEnvironment\x12\x38.pipelines.environment.v1alpha1.CreateEnvironmentRequest\x1a\x39.pipelines.environment.v1alpha1.CreateEnvironmentResponse\"\x00\x42\xc6\x01\n(io.cuemby.pipelines.environment.v1alpha1B\x13\x45nvironmentAPIProtoP\x01Z;github.com/cuemby/ccp-pipelines-service/environmentv1alpha1\xa2\x02\x03PPX\xaa\x02\x1ePipelines.Environment.V1Alpha1\xca\x02\x1ePipelines\\Environment\\V1Alpha1b\x06proto3'
  ,
  dependencies=[pipelines_dot_environment_dot_v1alpha1_dot_environment__pb2.DESCRIPTOR,])




_CREATEENVIRONMENTREQUEST = _descriptor.Descriptor(
  name='CreateEnvironmentRequest',
  full_name='pipelines.environment.v1alpha1.CreateEnvironmentRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='environment', full_name='pipelines.environment.v1alpha1.CreateEnvironmentRequest.environment', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environment', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=138,
  serialized_end=243,
)


_CREATEENVIRONMENTRESPONSE = _descriptor.Descriptor(
  name='CreateEnvironmentResponse',
  full_name='pipelines.environment.v1alpha1.CreateEnvironmentResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='environment', full_name='pipelines.environment.v1alpha1.CreateEnvironmentResponse.environment', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environment', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='pipelines.environment.v1alpha1.CreateEnvironmentResponse.status', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=246,
  serialized_end=376,
)

_CREATEENVIRONMENTREQUEST.fields_by_name['environment'].message_type = pipelines_dot_environment_dot_v1alpha1_dot_environment__pb2._ENVIRONMENT
_CREATEENVIRONMENTRESPONSE.fields_by_name['environment'].message_type = pipelines_dot_environment_dot_v1alpha1_dot_environment__pb2._ENVIRONMENT
DESCRIPTOR.message_types_by_name['CreateEnvironmentRequest'] = _CREATEENVIRONMENTREQUEST
DESCRIPTOR.message_types_by_name['CreateEnvironmentResponse'] = _CREATEENVIRONMENTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CreateEnvironmentRequest = _reflection.GeneratedProtocolMessageType('CreateEnvironmentRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEENVIRONMENTREQUEST,
  '__module__' : 'pipelines.environment.v1alpha1.environment_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
  })
_sym_db.RegisterMessage(CreateEnvironmentRequest)

CreateEnvironmentResponse = _reflection.GeneratedProtocolMessageType('CreateEnvironmentResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEENVIRONMENTRESPONSE,
  '__module__' : 'pipelines.environment.v1alpha1.environment_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
  })
_sym_db.RegisterMessage(CreateEnvironmentResponse)


DESCRIPTOR._options = None

_ENVINROMENTAPISERVICE = _descriptor.ServiceDescriptor(
  name='EnvinromentAPIService',
  full_name='pipelines.environment.v1alpha1.EnvinromentAPIService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=379,
  serialized_end=543,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateEnvironment',
    full_name='pipelines.environment.v1alpha1.EnvinromentAPIService.CreateEnvironment',
    index=0,
    containing_service=None,
    input_type=_CREATEENVIRONMENTREQUEST,
    output_type=_CREATEENVIRONMENTRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_ENVINROMENTAPISERVICE)

DESCRIPTOR.services_by_name['EnvinromentAPIService'] = _ENVINROMENTAPISERVICE

# @@protoc_insertion_point(module_scope)
