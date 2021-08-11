# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/instance/v1alpha1/instance_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pipelines.instance.v1alpha1 import instance_pb2 as pipelines_dot_instance_dot_v1alpha1_dot_instance__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pipelines/instance/v1alpha1/instance_api.proto',
  package='pipelines.instance.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n%io.cuemby.pipelines.instance.v1alpha1B\020InstanceAPIProtoP\001Z8github.com/cuemby/ccp-pipelines-service/instancev1alpha1\242\002\003PPX\252\002\034Pipelines.Instances.V1Alpha1\312\002\033Pipelines\\Instance\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n.pipelines/instance/v1alpha1/instance_api.proto\x12\x1bpipelines.instance.v1alpha1\x1a*pipelines/instance/v1alpha1/instance.proto\"Z\n\x15\x43reateInstanceRequest\x12\x41\n\x08instance\x18\x01 \x01(\x0b\x32%.pipelines.instance.v1alpha1.InstanceR\x08instance\"s\n\x16\x43reateInstanceResponse\x12\x41\n\x08instance\x18\x01 \x01(\x0b\x32%.pipelines.instance.v1alpha1.InstanceR\x08instance\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status2\x91\x01\n\x12InstanceAPIService\x12{\n\x0e\x43reateInstance\x12\x32.pipelines.instance.v1alpha1.CreateInstanceRequest\x1a\x33.pipelines.instance.v1alpha1.CreateInstanceResponse\"\x00\x42\xb8\x01\n%io.cuemby.pipelines.instance.v1alpha1B\x10InstanceAPIProtoP\x01Z8github.com/cuemby/ccp-pipelines-service/instancev1alpha1\xa2\x02\x03PPX\xaa\x02\x1cPipelines.Instances.V1Alpha1\xca\x02\x1bPipelines\\Instance\\V1Alpha1b\x06proto3'
  ,
  dependencies=[pipelines_dot_instance_dot_v1alpha1_dot_instance__pb2.DESCRIPTOR,])




_CREATEINSTANCEREQUEST = _descriptor.Descriptor(
  name='CreateInstanceRequest',
  full_name='pipelines.instance.v1alpha1.CreateInstanceRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='instance', full_name='pipelines.instance.v1alpha1.CreateInstanceRequest.instance', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='instance', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=123,
  serialized_end=213,
)


_CREATEINSTANCERESPONSE = _descriptor.Descriptor(
  name='CreateInstanceResponse',
  full_name='pipelines.instance.v1alpha1.CreateInstanceResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='instance', full_name='pipelines.instance.v1alpha1.CreateInstanceResponse.instance', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='instance', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='pipelines.instance.v1alpha1.CreateInstanceResponse.status', index=1,
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
  serialized_start=215,
  serialized_end=330,
)

_CREATEINSTANCEREQUEST.fields_by_name['instance'].message_type = pipelines_dot_instance_dot_v1alpha1_dot_instance__pb2._INSTANCE
_CREATEINSTANCERESPONSE.fields_by_name['instance'].message_type = pipelines_dot_instance_dot_v1alpha1_dot_instance__pb2._INSTANCE
DESCRIPTOR.message_types_by_name['CreateInstanceRequest'] = _CREATEINSTANCEREQUEST
DESCRIPTOR.message_types_by_name['CreateInstanceResponse'] = _CREATEINSTANCERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CreateInstanceRequest = _reflection.GeneratedProtocolMessageType('CreateInstanceRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEINSTANCEREQUEST,
  '__module__' : 'pipelines.instance.v1alpha1.instance_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.instance.v1alpha1.CreateInstanceRequest)
  })
_sym_db.RegisterMessage(CreateInstanceRequest)

CreateInstanceResponse = _reflection.GeneratedProtocolMessageType('CreateInstanceResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEINSTANCERESPONSE,
  '__module__' : 'pipelines.instance.v1alpha1.instance_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.instance.v1alpha1.CreateInstanceResponse)
  })
_sym_db.RegisterMessage(CreateInstanceResponse)


DESCRIPTOR._options = None

_INSTANCEAPISERVICE = _descriptor.ServiceDescriptor(
  name='InstanceAPIService',
  full_name='pipelines.instance.v1alpha1.InstanceAPIService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=333,
  serialized_end=478,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateInstance',
    full_name='pipelines.instance.v1alpha1.InstanceAPIService.CreateInstance',
    index=0,
    containing_service=None,
    input_type=_CREATEINSTANCEREQUEST,
    output_type=_CREATEINSTANCERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_INSTANCEAPISERVICE)

DESCRIPTOR.services_by_name['InstanceAPIService'] = _INSTANCEAPISERVICE

# @@protoc_insertion_point(module_scope)