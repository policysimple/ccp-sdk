# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/autoscaling/v1alpha1/autoscaling_agent_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from performance.autoscaling.v1alpha1 import autoscaling_pb2 as performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='performance/autoscaling/v1alpha1/autoscaling_agent_api.proto',
  package='performance.autoscaling.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n*io.cuemby.performance.autoscaling.v1alpha1B\030AutoscalingAgentApiProtoP\001Z4github.com/performance-grpc-sdk/autoscaling/v1alpha1\242\002\003PFX\252\002 Performance.Autoscaling.V1Alpha1\312\002 Performance\\Autoscaling\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n<performance/autoscaling/v1alpha1/autoscaling_agent_api.proto\x12 performance.autoscaling.v1alpha1\x1a\x32performance/autoscaling/v1alpha1/autoscaling.proto\"\x89\x01\n\x1e\x41gentCreateAutoscalingResponse\x12O\n\x0b\x61utoscaling\x18\x01 \x01(\x0b\x32-.performance.autoscaling.v1alpha1.AutoscalingR\x0b\x61utoscaling\x12\x16\n\x06origin\x18\x02 \x01(\tR\x06origin\"\xa0\x01\n\x1d\x41gentCreateAutoscalingRequest\x12O\n\x0b\x61utoscaling\x18\x01 \x01(\x0b\x32-.performance.autoscaling.v1alpha1.AutoscalingR\x0b\x61utoscaling\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\x12\x16\n\x06origin\x18\x03 \x01(\tR\x06origin\"\x89\x01\n\x1e\x41gentUpdateAutoscalingResponse\x12O\n\x0b\x61utoscaling\x18\x01 \x01(\x0b\x32-.performance.autoscaling.v1alpha1.AutoscalingR\x0b\x61utoscaling\x12\x16\n\x06origin\x18\x02 \x01(\tR\x06origin\"\xa0\x01\n\x1d\x41gentUpdateAutoscalingRequest\x12O\n\x0b\x61utoscaling\x18\x01 \x01(\x0b\x32-.performance.autoscaling.v1alpha1.AutoscalingR\x0b\x61utoscaling\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\x12\x16\n\x06origin\x18\x03 \x01(\tR\x06origin\"\x80\x01\n\x1e\x41gentDeleteAutoscalingResponse\x12\x46\n\x08metadata\x18\x01 \x01(\x0b\x32*.performance.autoscaling.v1alpha1.MetadataR\x08metadata\x12\x16\n\x06origin\x18\x02 \x01(\tR\x06origin\"\x7f\n\x1d\x41gentDeleteAutoscalingRequest\x12\x46\n\x08metadata\x18\x01 \x01(\x0b\x32*.performance.autoscaling.v1alpha1.MetadataR\x08metadata\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\"}\n\x1b\x41gentGetAutoscalingResponse\x12\x46\n\x08metadata\x18\x01 \x01(\x0b\x32*.performance.autoscaling.v1alpha1.MetadataR\x08metadata\x12\x16\n\x06origin\x18\x02 \x01(\tR\x06origin\"\x9d\x01\n\x1a\x41gentGetAutoscalingRequest\x12O\n\x0b\x61utoscaling\x18\x01 \x01(\x0b\x32-.performance.autoscaling.v1alpha1.AutoscalingR\x0b\x61utoscaling\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\x12\x16\n\x06origin\x18\x03 \x01(\tR\x06origin\"~\n\x1c\x41gentListAutoscalingResponse\x12\x46\n\x08metadata\x18\x01 \x01(\x0b\x32*.performance.autoscaling.v1alpha1.MetadataR\x08metadata\x12\x16\n\x06origin\x18\x02 \x01(\tR\x06origin\"\x88\x01\n\x1b\x41gentListAutoscalingRequest\x12Q\n\x0c\x61utoscalings\x18\x01 \x03(\x0b\x32-.performance.autoscaling.v1alpha1.AutoscalingR\x0c\x61utoscalings\x12\x16\n\x06origin\x18\x02 \x01(\tR\x06origin2\xc1\x06\n\x1a\x41utoscalingAgentAPIService\x12\xa1\x01\n\x16\x41gentCreateAutoscaling\x12?.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest\x1a@.performance.autoscaling.v1alpha1.AgentCreateAutoscalingResponse\"\x00(\x01\x30\x01\x12\xa1\x01\n\x16\x41gentUpdateAutoscaling\x12?.performance.autoscaling.v1alpha1.AgentUpdateAutoscalingRequest\x1a@.performance.autoscaling.v1alpha1.AgentUpdateAutoscalingResponse\"\x00(\x01\x30\x01\x12\xa1\x01\n\x16\x41gentDeleteAutoscaling\x12?.performance.autoscaling.v1alpha1.AgentDeleteAutoscalingRequest\x1a@.performance.autoscaling.v1alpha1.AgentDeleteAutoscalingResponse\"\x00(\x01\x30\x01\x12\x98\x01\n\x13\x41gentGetAutoscaling\x12<.performance.autoscaling.v1alpha1.AgentGetAutoscalingRequest\x1a=.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse\"\x00(\x01\x30\x01\x12\x9b\x01\n\x14\x41gentListAutoscaling\x12=.performance.autoscaling.v1alpha1.AgentListAutoscalingRequest\x1a>.performance.autoscaling.v1alpha1.AgentListAutoscalingResponse\"\x00(\x01\x30\x01\x42\xca\x01\n*io.cuemby.performance.autoscaling.v1alpha1B\x18\x41utoscalingAgentApiProtoP\x01Z4github.com/performance-grpc-sdk/autoscaling/v1alpha1\xa2\x02\x03PFX\xaa\x02 Performance.Autoscaling.V1Alpha1\xca\x02 Performance\\Autoscaling\\V1Alpha1b\x06proto3'
  ,
  dependencies=[performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2.DESCRIPTOR,])




_AGENTCREATEAUTOSCALINGRESPONSE = _descriptor.Descriptor(
  name='AgentCreateAutoscalingResponse',
  full_name='performance.autoscaling.v1alpha1.AgentCreateAutoscalingResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='autoscaling', full_name='performance.autoscaling.v1alpha1.AgentCreateAutoscalingResponse.autoscaling', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='autoscaling', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='origin', full_name='performance.autoscaling.v1alpha1.AgentCreateAutoscalingResponse.origin', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='origin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=151,
  serialized_end=288,
)


_AGENTCREATEAUTOSCALINGREQUEST = _descriptor.Descriptor(
  name='AgentCreateAutoscalingRequest',
  full_name='performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='autoscaling', full_name='performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.autoscaling', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='autoscaling', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.status', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='origin', full_name='performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.origin', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='origin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=291,
  serialized_end=451,
)


_AGENTUPDATEAUTOSCALINGRESPONSE = _descriptor.Descriptor(
  name='AgentUpdateAutoscalingResponse',
  full_name='performance.autoscaling.v1alpha1.AgentUpdateAutoscalingResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='autoscaling', full_name='performance.autoscaling.v1alpha1.AgentUpdateAutoscalingResponse.autoscaling', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='autoscaling', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='origin', full_name='performance.autoscaling.v1alpha1.AgentUpdateAutoscalingResponse.origin', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='origin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=454,
  serialized_end=591,
)


_AGENTUPDATEAUTOSCALINGREQUEST = _descriptor.Descriptor(
  name='AgentUpdateAutoscalingRequest',
  full_name='performance.autoscaling.v1alpha1.AgentUpdateAutoscalingRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='autoscaling', full_name='performance.autoscaling.v1alpha1.AgentUpdateAutoscalingRequest.autoscaling', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='autoscaling', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='performance.autoscaling.v1alpha1.AgentUpdateAutoscalingRequest.status', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='origin', full_name='performance.autoscaling.v1alpha1.AgentUpdateAutoscalingRequest.origin', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='origin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=594,
  serialized_end=754,
)


_AGENTDELETEAUTOSCALINGRESPONSE = _descriptor.Descriptor(
  name='AgentDeleteAutoscalingResponse',
  full_name='performance.autoscaling.v1alpha1.AgentDeleteAutoscalingResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='performance.autoscaling.v1alpha1.AgentDeleteAutoscalingResponse.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='metadata', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='origin', full_name='performance.autoscaling.v1alpha1.AgentDeleteAutoscalingResponse.origin', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='origin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=757,
  serialized_end=885,
)


_AGENTDELETEAUTOSCALINGREQUEST = _descriptor.Descriptor(
  name='AgentDeleteAutoscalingRequest',
  full_name='performance.autoscaling.v1alpha1.AgentDeleteAutoscalingRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='performance.autoscaling.v1alpha1.AgentDeleteAutoscalingRequest.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='metadata', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='performance.autoscaling.v1alpha1.AgentDeleteAutoscalingRequest.status', index=1,
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
  serialized_start=887,
  serialized_end=1014,
)


_AGENTGETAUTOSCALINGRESPONSE = _descriptor.Descriptor(
  name='AgentGetAutoscalingResponse',
  full_name='performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='metadata', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='origin', full_name='performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse.origin', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='origin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1016,
  serialized_end=1141,
)


_AGENTGETAUTOSCALINGREQUEST = _descriptor.Descriptor(
  name='AgentGetAutoscalingRequest',
  full_name='performance.autoscaling.v1alpha1.AgentGetAutoscalingRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='autoscaling', full_name='performance.autoscaling.v1alpha1.AgentGetAutoscalingRequest.autoscaling', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='autoscaling', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='performance.autoscaling.v1alpha1.AgentGetAutoscalingRequest.status', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='origin', full_name='performance.autoscaling.v1alpha1.AgentGetAutoscalingRequest.origin', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='origin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1144,
  serialized_end=1301,
)


_AGENTLISTAUTOSCALINGRESPONSE = _descriptor.Descriptor(
  name='AgentListAutoscalingResponse',
  full_name='performance.autoscaling.v1alpha1.AgentListAutoscalingResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='performance.autoscaling.v1alpha1.AgentListAutoscalingResponse.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='metadata', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='origin', full_name='performance.autoscaling.v1alpha1.AgentListAutoscalingResponse.origin', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='origin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1303,
  serialized_end=1429,
)


_AGENTLISTAUTOSCALINGREQUEST = _descriptor.Descriptor(
  name='AgentListAutoscalingRequest',
  full_name='performance.autoscaling.v1alpha1.AgentListAutoscalingRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='autoscalings', full_name='performance.autoscaling.v1alpha1.AgentListAutoscalingRequest.autoscalings', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='autoscalings', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='origin', full_name='performance.autoscaling.v1alpha1.AgentListAutoscalingRequest.origin', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='origin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1432,
  serialized_end=1568,
)

_AGENTCREATEAUTOSCALINGRESPONSE.fields_by_name['autoscaling'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._AUTOSCALING
_AGENTCREATEAUTOSCALINGREQUEST.fields_by_name['autoscaling'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._AUTOSCALING
_AGENTUPDATEAUTOSCALINGRESPONSE.fields_by_name['autoscaling'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._AUTOSCALING
_AGENTUPDATEAUTOSCALINGREQUEST.fields_by_name['autoscaling'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._AUTOSCALING
_AGENTDELETEAUTOSCALINGRESPONSE.fields_by_name['metadata'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._METADATA
_AGENTDELETEAUTOSCALINGREQUEST.fields_by_name['metadata'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._METADATA
_AGENTGETAUTOSCALINGRESPONSE.fields_by_name['metadata'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._METADATA
_AGENTGETAUTOSCALINGREQUEST.fields_by_name['autoscaling'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._AUTOSCALING
_AGENTLISTAUTOSCALINGRESPONSE.fields_by_name['metadata'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._METADATA
_AGENTLISTAUTOSCALINGREQUEST.fields_by_name['autoscalings'].message_type = performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__pb2._AUTOSCALING
DESCRIPTOR.message_types_by_name['AgentCreateAutoscalingResponse'] = _AGENTCREATEAUTOSCALINGRESPONSE
DESCRIPTOR.message_types_by_name['AgentCreateAutoscalingRequest'] = _AGENTCREATEAUTOSCALINGREQUEST
DESCRIPTOR.message_types_by_name['AgentUpdateAutoscalingResponse'] = _AGENTUPDATEAUTOSCALINGRESPONSE
DESCRIPTOR.message_types_by_name['AgentUpdateAutoscalingRequest'] = _AGENTUPDATEAUTOSCALINGREQUEST
DESCRIPTOR.message_types_by_name['AgentDeleteAutoscalingResponse'] = _AGENTDELETEAUTOSCALINGRESPONSE
DESCRIPTOR.message_types_by_name['AgentDeleteAutoscalingRequest'] = _AGENTDELETEAUTOSCALINGREQUEST
DESCRIPTOR.message_types_by_name['AgentGetAutoscalingResponse'] = _AGENTGETAUTOSCALINGRESPONSE
DESCRIPTOR.message_types_by_name['AgentGetAutoscalingRequest'] = _AGENTGETAUTOSCALINGREQUEST
DESCRIPTOR.message_types_by_name['AgentListAutoscalingResponse'] = _AGENTLISTAUTOSCALINGRESPONSE
DESCRIPTOR.message_types_by_name['AgentListAutoscalingRequest'] = _AGENTLISTAUTOSCALINGREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AgentCreateAutoscalingResponse = _reflection.GeneratedProtocolMessageType('AgentCreateAutoscalingResponse', (_message.Message,), {
  'DESCRIPTOR' : _AGENTCREATEAUTOSCALINGRESPONSE,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentCreateAutoscalingResponse)
  })
_sym_db.RegisterMessage(AgentCreateAutoscalingResponse)

AgentCreateAutoscalingRequest = _reflection.GeneratedProtocolMessageType('AgentCreateAutoscalingRequest', (_message.Message,), {
  'DESCRIPTOR' : _AGENTCREATEAUTOSCALINGREQUEST,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest)
  })
_sym_db.RegisterMessage(AgentCreateAutoscalingRequest)

AgentUpdateAutoscalingResponse = _reflection.GeneratedProtocolMessageType('AgentUpdateAutoscalingResponse', (_message.Message,), {
  'DESCRIPTOR' : _AGENTUPDATEAUTOSCALINGRESPONSE,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentUpdateAutoscalingResponse)
  })
_sym_db.RegisterMessage(AgentUpdateAutoscalingResponse)

AgentUpdateAutoscalingRequest = _reflection.GeneratedProtocolMessageType('AgentUpdateAutoscalingRequest', (_message.Message,), {
  'DESCRIPTOR' : _AGENTUPDATEAUTOSCALINGREQUEST,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentUpdateAutoscalingRequest)
  })
_sym_db.RegisterMessage(AgentUpdateAutoscalingRequest)

AgentDeleteAutoscalingResponse = _reflection.GeneratedProtocolMessageType('AgentDeleteAutoscalingResponse', (_message.Message,), {
  'DESCRIPTOR' : _AGENTDELETEAUTOSCALINGRESPONSE,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentDeleteAutoscalingResponse)
  })
_sym_db.RegisterMessage(AgentDeleteAutoscalingResponse)

AgentDeleteAutoscalingRequest = _reflection.GeneratedProtocolMessageType('AgentDeleteAutoscalingRequest', (_message.Message,), {
  'DESCRIPTOR' : _AGENTDELETEAUTOSCALINGREQUEST,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentDeleteAutoscalingRequest)
  })
_sym_db.RegisterMessage(AgentDeleteAutoscalingRequest)

AgentGetAutoscalingResponse = _reflection.GeneratedProtocolMessageType('AgentGetAutoscalingResponse', (_message.Message,), {
  'DESCRIPTOR' : _AGENTGETAUTOSCALINGRESPONSE,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse)
  })
_sym_db.RegisterMessage(AgentGetAutoscalingResponse)

AgentGetAutoscalingRequest = _reflection.GeneratedProtocolMessageType('AgentGetAutoscalingRequest', (_message.Message,), {
  'DESCRIPTOR' : _AGENTGETAUTOSCALINGREQUEST,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentGetAutoscalingRequest)
  })
_sym_db.RegisterMessage(AgentGetAutoscalingRequest)

AgentListAutoscalingResponse = _reflection.GeneratedProtocolMessageType('AgentListAutoscalingResponse', (_message.Message,), {
  'DESCRIPTOR' : _AGENTLISTAUTOSCALINGRESPONSE,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentListAutoscalingResponse)
  })
_sym_db.RegisterMessage(AgentListAutoscalingResponse)

AgentListAutoscalingRequest = _reflection.GeneratedProtocolMessageType('AgentListAutoscalingRequest', (_message.Message,), {
  'DESCRIPTOR' : _AGENTLISTAUTOSCALINGREQUEST,
  '__module__' : 'performance.autoscaling.v1alpha1.autoscaling_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentListAutoscalingRequest)
  })
_sym_db.RegisterMessage(AgentListAutoscalingRequest)


DESCRIPTOR._options = None

_AUTOSCALINGAGENTAPISERVICE = _descriptor.ServiceDescriptor(
  name='AutoscalingAgentAPIService',
  full_name='performance.autoscaling.v1alpha1.AutoscalingAgentAPIService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1571,
  serialized_end=2404,
  methods=[
  _descriptor.MethodDescriptor(
    name='AgentCreateAutoscaling',
    full_name='performance.autoscaling.v1alpha1.AutoscalingAgentAPIService.AgentCreateAutoscaling',
    index=0,
    containing_service=None,
    input_type=_AGENTCREATEAUTOSCALINGREQUEST,
    output_type=_AGENTCREATEAUTOSCALINGRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='AgentUpdateAutoscaling',
    full_name='performance.autoscaling.v1alpha1.AutoscalingAgentAPIService.AgentUpdateAutoscaling',
    index=1,
    containing_service=None,
    input_type=_AGENTUPDATEAUTOSCALINGREQUEST,
    output_type=_AGENTUPDATEAUTOSCALINGRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='AgentDeleteAutoscaling',
    full_name='performance.autoscaling.v1alpha1.AutoscalingAgentAPIService.AgentDeleteAutoscaling',
    index=2,
    containing_service=None,
    input_type=_AGENTDELETEAUTOSCALINGREQUEST,
    output_type=_AGENTDELETEAUTOSCALINGRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='AgentGetAutoscaling',
    full_name='performance.autoscaling.v1alpha1.AutoscalingAgentAPIService.AgentGetAutoscaling',
    index=3,
    containing_service=None,
    input_type=_AGENTGETAUTOSCALINGREQUEST,
    output_type=_AGENTGETAUTOSCALINGRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='AgentListAutoscaling',
    full_name='performance.autoscaling.v1alpha1.AutoscalingAgentAPIService.AgentListAutoscaling',
    index=4,
    containing_service=None,
    input_type=_AGENTLISTAUTOSCALINGREQUEST,
    output_type=_AGENTLISTAUTOSCALINGRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_AUTOSCALINGAGENTAPISERVICE)

DESCRIPTOR.services_by_name['AutoscalingAgentAPIService'] = _AUTOSCALINGAGENTAPISERVICE

# @@protoc_insertion_point(module_scope)
