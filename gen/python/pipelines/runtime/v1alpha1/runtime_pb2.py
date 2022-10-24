# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='pipelines/runtime/v1alpha1/runtime.proto',
  package='pipelines.runtime.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n$io.cuemby.pipelines.runtime.v1alpha1B\014RuntimeProtoP\001Z5github.com/cuemby/ccp-runtime-service/runtimev1alpha1\242\002\003PPX\252\002\032Pipelines.Runtime.V1Alpha1\312\002\032Pipelines\\Runtime\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n(pipelines/runtime/v1alpha1/runtime.proto\x12\x1apipelines.runtime.v1alpha1\"\x85\x0c\n\x07Runtime\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12N\n\x0einstance_types\x18\x03 \x03(\x0b\x32\'.pipelines.runtime.v1alpha1.IntanceTypeR\rinstanceTypes\x12\'\n\x0forganization_id\x18\x04 \x01(\rR\x0eorganizationId\x12\x1d\n\nproject_id\x18\x05 \x01(\rR\tprojectId\x12%\n\x0e\x61pplication_id\x18\x06 \x01(\tR\rapplicationId\x12!\n\x0cworkspace_id\x18\x07 \x01(\tR\x0bworkspaceId\x12%\n\x0e\x65nvironment_id\x18\x08 \x01(\tR\renvironmentId\x12\x16\n\x06scaler\x18\t \x01(\tR\x06scaler\x12\x1d\n\npod_status\x18\n \x01(\tR\tpodStatus\x12$\n\x0epod_status_msg\x18\x0b \x01(\tR\x0cpodStatusMsg\x12V\n\x0bintegration\x18\x0c \x03(\x0b\x32\x34.pipelines.runtime.v1alpha1.Runtime.IntegrationEntryR\x0bintegration\x12r\n\x15\x65nvironment_variables\x18\r \x03(\x0b\x32=.pipelines.runtime.v1alpha1.Runtime.EnvironmentVariablesEntryR\x14\x65nvironmentVariables\x12M\n\x08\x63ommands\x18\x0e \x03(\x0b\x32\x31.pipelines.runtime.v1alpha1.Runtime.CommandsEntryR\x08\x63ommands\x12J\n\x07secrets\x18\x0f \x03(\x0b\x32\x30.pipelines.runtime.v1alpha1.Runtime.SecretsEntryR\x07secrets\x12Q\n\nextra_args\x18\x10 \x03(\x0b\x32\x32.pipelines.runtime.v1alpha1.Runtime.ExtraArgsEntryR\textraArgs\x12J\n\x0ctraffic_type\x18\x11 \x01(\x0e\x32\'.pipelines.runtime.v1alpha1.TrafficTypeR\x0btrafficType\x12)\n\x10response_message\x18\x12 \x01(\tR\x0fresponseMessage\x12)\n\x10\x65nvironment_name\x18\x13 \x01(\tR\x0f\x65nvironmentName\x12:\n\x19\x65nvironment_internal_name\x18\x14 \x01(\tR\x17\x65nvironmentInternalName\x12)\n\x10\x61pplication_name\x18\x15 \x01(\tR\x0f\x61pplicationName\x12!\n\x0cstorage_used\x18\x16 \x01(\rR\x0bstorageUsed\x12#\n\rstorage_limit\x18\x17 \x01(\rR\x0cstorageLimit\x12%\n\x0eintegration_id\x18\x18 \x01(\tR\rintegrationId\x1a>\n\x10IntegrationEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1aG\n\x19\x45nvironmentVariablesEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a;\n\rCommandsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a:\n\x0cSecretsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a<\n\x0e\x45xtraArgsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"H\n\x0bRuntimeList\x12\x39\n\x05items\x18\x01 \x03(\x0b\x32#.pipelines.runtime.v1alpha1.RuntimeR\x05items\"\x86\x01\n\x0bIntanceType\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12S\n\x0fresources_rules\x18\x03 \x03(\x0b\x32*.pipelines.runtime.v1alpha1.ResourcesRulesR\x0eresourcesRules\"\x88\x01\n\x0eResourcesRules\x12\x37\n\x05limit\x18\x01 \x03(\x0b\x32!.pipelines.runtime.v1alpha1.LimitR\x05limit\x12=\n\x07request\x18\x02 \x03(\x0b\x32#.pipelines.runtime.v1alpha1.RequestR\x07request\"+\n\x05Limit\x12\x10\n\x03\x63pu\x18\x01 \x01(\tR\x03\x63pu\x12\x10\n\x03ram\x18\x02 \x01(\tR\x03ram\"-\n\x07Request\x12\x10\n\x03\x63pu\x18\x01 \x01(\tR\x03\x63pu\x12\x10\n\x03ram\x18\x02 \x01(\tR\x03ram*a\n\x0bTrafficType\x12\x1c\n\x18TRAFFIC_TYPE_UNSPECIFIED\x10\x00\x12\x19\n\x15TRAFFIC_TYPE_EXTERNAL\x10\x01\x12\x19\n\x15TRAFFIC_TYPE_INTERNAL\x10\x02\x42\xad\x01\n$io.cuemby.pipelines.runtime.v1alpha1B\x0cRuntimeProtoP\x01Z5github.com/cuemby/ccp-runtime-service/runtimev1alpha1\xa2\x02\x03PPX\xaa\x02\x1aPipelines.Runtime.V1Alpha1\xca\x02\x1aPipelines\\Runtime\\V1Alpha1b\x06proto3'
)

_TRAFFICTYPE = _descriptor.EnumDescriptor(
  name='TrafficType',
  full_name='pipelines.runtime.v1alpha1.TrafficType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='TRAFFIC_TYPE_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='TRAFFIC_TYPE_EXTERNAL', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='TRAFFIC_TYPE_INTERNAL', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=2058,
  serialized_end=2155,
)
_sym_db.RegisterEnumDescriptor(_TRAFFICTYPE)

TrafficType = enum_type_wrapper.EnumTypeWrapper(_TRAFFICTYPE)
TRAFFIC_TYPE_UNSPECIFIED = 0
TRAFFIC_TYPE_EXTERNAL = 1
TRAFFIC_TYPE_INTERNAL = 2



_RUNTIME_INTEGRATIONENTRY = _descriptor.Descriptor(
  name='IntegrationEntry',
  full_name='pipelines.runtime.v1alpha1.Runtime.IntegrationEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.runtime.v1alpha1.Runtime.IntegrationEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.runtime.v1alpha1.Runtime.IntegrationEntry.value', index=1,
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
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1296,
  serialized_end=1358,
)

_RUNTIME_ENVIRONMENTVARIABLESENTRY = _descriptor.Descriptor(
  name='EnvironmentVariablesEntry',
  full_name='pipelines.runtime.v1alpha1.Runtime.EnvironmentVariablesEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.runtime.v1alpha1.Runtime.EnvironmentVariablesEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.runtime.v1alpha1.Runtime.EnvironmentVariablesEntry.value', index=1,
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
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1360,
  serialized_end=1431,
)

_RUNTIME_COMMANDSENTRY = _descriptor.Descriptor(
  name='CommandsEntry',
  full_name='pipelines.runtime.v1alpha1.Runtime.CommandsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.runtime.v1alpha1.Runtime.CommandsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.runtime.v1alpha1.Runtime.CommandsEntry.value', index=1,
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
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1433,
  serialized_end=1492,
)

_RUNTIME_SECRETSENTRY = _descriptor.Descriptor(
  name='SecretsEntry',
  full_name='pipelines.runtime.v1alpha1.Runtime.SecretsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.runtime.v1alpha1.Runtime.SecretsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.runtime.v1alpha1.Runtime.SecretsEntry.value', index=1,
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
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1494,
  serialized_end=1552,
)

_RUNTIME_EXTRAARGSENTRY = _descriptor.Descriptor(
  name='ExtraArgsEntry',
  full_name='pipelines.runtime.v1alpha1.Runtime.ExtraArgsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.runtime.v1alpha1.Runtime.ExtraArgsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.runtime.v1alpha1.Runtime.ExtraArgsEntry.value', index=1,
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
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1554,
  serialized_end=1614,
)

_RUNTIME = _descriptor.Descriptor(
  name='Runtime',
  full_name='pipelines.runtime.v1alpha1.Runtime',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='pipelines.runtime.v1alpha1.Runtime.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='pipelines.runtime.v1alpha1.Runtime.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='instance_types', full_name='pipelines.runtime.v1alpha1.Runtime.instance_types', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='instanceTypes', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='pipelines.runtime.v1alpha1.Runtime.organization_id', index=3,
      number=4, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='pipelines.runtime.v1alpha1.Runtime.project_id', index=4,
      number=5, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='application_id', full_name='pipelines.runtime.v1alpha1.Runtime.application_id', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='applicationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='workspace_id', full_name='pipelines.runtime.v1alpha1.Runtime.workspace_id', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='workspaceId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='environment_id', full_name='pipelines.runtime.v1alpha1.Runtime.environment_id', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environmentId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='scaler', full_name='pipelines.runtime.v1alpha1.Runtime.scaler', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='scaler', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='pod_status', full_name='pipelines.runtime.v1alpha1.Runtime.pod_status', index=9,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='podStatus', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='pod_status_msg', full_name='pipelines.runtime.v1alpha1.Runtime.pod_status_msg', index=10,
      number=11, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='podStatusMsg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='integration', full_name='pipelines.runtime.v1alpha1.Runtime.integration', index=11,
      number=12, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integration', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='environment_variables', full_name='pipelines.runtime.v1alpha1.Runtime.environment_variables', index=12,
      number=13, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environmentVariables', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='commands', full_name='pipelines.runtime.v1alpha1.Runtime.commands', index=13,
      number=14, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='commands', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='secrets', full_name='pipelines.runtime.v1alpha1.Runtime.secrets', index=14,
      number=15, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='secrets', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='extra_args', full_name='pipelines.runtime.v1alpha1.Runtime.extra_args', index=15,
      number=16, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='extraArgs', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='traffic_type', full_name='pipelines.runtime.v1alpha1.Runtime.traffic_type', index=16,
      number=17, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='trafficType', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='response_message', full_name='pipelines.runtime.v1alpha1.Runtime.response_message', index=17,
      number=18, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='responseMessage', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='environment_name', full_name='pipelines.runtime.v1alpha1.Runtime.environment_name', index=18,
      number=19, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environmentName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='environment_internal_name', full_name='pipelines.runtime.v1alpha1.Runtime.environment_internal_name', index=19,
      number=20, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environmentInternalName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='application_name', full_name='pipelines.runtime.v1alpha1.Runtime.application_name', index=20,
      number=21, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='applicationName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='storage_used', full_name='pipelines.runtime.v1alpha1.Runtime.storage_used', index=21,
      number=22, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='storageUsed', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='storage_limit', full_name='pipelines.runtime.v1alpha1.Runtime.storage_limit', index=22,
      number=23, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='storageLimit', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='integration_id', full_name='pipelines.runtime.v1alpha1.Runtime.integration_id', index=23,
      number=24, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integrationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_RUNTIME_INTEGRATIONENTRY, _RUNTIME_ENVIRONMENTVARIABLESENTRY, _RUNTIME_COMMANDSENTRY, _RUNTIME_SECRETSENTRY, _RUNTIME_EXTRAARGSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=73,
  serialized_end=1614,
)


_RUNTIMELIST = _descriptor.Descriptor(
  name='RuntimeList',
  full_name='pipelines.runtime.v1alpha1.RuntimeList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='pipelines.runtime.v1alpha1.RuntimeList.items', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='items', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1616,
  serialized_end=1688,
)


_INTANCETYPE = _descriptor.Descriptor(
  name='IntanceType',
  full_name='pipelines.runtime.v1alpha1.IntanceType',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='pipelines.runtime.v1alpha1.IntanceType.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='pipelines.runtime.v1alpha1.IntanceType.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='resources_rules', full_name='pipelines.runtime.v1alpha1.IntanceType.resources_rules', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='resourcesRules', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1691,
  serialized_end=1825,
)


_RESOURCESRULES = _descriptor.Descriptor(
  name='ResourcesRules',
  full_name='pipelines.runtime.v1alpha1.ResourcesRules',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='limit', full_name='pipelines.runtime.v1alpha1.ResourcesRules.limit', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='limit', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='request', full_name='pipelines.runtime.v1alpha1.ResourcesRules.request', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='request', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1828,
  serialized_end=1964,
)


_LIMIT = _descriptor.Descriptor(
  name='Limit',
  full_name='pipelines.runtime.v1alpha1.Limit',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='cpu', full_name='pipelines.runtime.v1alpha1.Limit.cpu', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='cpu', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ram', full_name='pipelines.runtime.v1alpha1.Limit.ram', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ram', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1966,
  serialized_end=2009,
)


_REQUEST = _descriptor.Descriptor(
  name='Request',
  full_name='pipelines.runtime.v1alpha1.Request',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='cpu', full_name='pipelines.runtime.v1alpha1.Request.cpu', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='cpu', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ram', full_name='pipelines.runtime.v1alpha1.Request.ram', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ram', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=2011,
  serialized_end=2056,
)

_RUNTIME_INTEGRATIONENTRY.containing_type = _RUNTIME
_RUNTIME_ENVIRONMENTVARIABLESENTRY.containing_type = _RUNTIME
_RUNTIME_COMMANDSENTRY.containing_type = _RUNTIME
_RUNTIME_SECRETSENTRY.containing_type = _RUNTIME
_RUNTIME_EXTRAARGSENTRY.containing_type = _RUNTIME
_RUNTIME.fields_by_name['instance_types'].message_type = _INTANCETYPE
_RUNTIME.fields_by_name['integration'].message_type = _RUNTIME_INTEGRATIONENTRY
_RUNTIME.fields_by_name['environment_variables'].message_type = _RUNTIME_ENVIRONMENTVARIABLESENTRY
_RUNTIME.fields_by_name['commands'].message_type = _RUNTIME_COMMANDSENTRY
_RUNTIME.fields_by_name['secrets'].message_type = _RUNTIME_SECRETSENTRY
_RUNTIME.fields_by_name['extra_args'].message_type = _RUNTIME_EXTRAARGSENTRY
_RUNTIME.fields_by_name['traffic_type'].enum_type = _TRAFFICTYPE
_RUNTIMELIST.fields_by_name['items'].message_type = _RUNTIME
_INTANCETYPE.fields_by_name['resources_rules'].message_type = _RESOURCESRULES
_RESOURCESRULES.fields_by_name['limit'].message_type = _LIMIT
_RESOURCESRULES.fields_by_name['request'].message_type = _REQUEST
DESCRIPTOR.message_types_by_name['Runtime'] = _RUNTIME
DESCRIPTOR.message_types_by_name['RuntimeList'] = _RUNTIMELIST
DESCRIPTOR.message_types_by_name['IntanceType'] = _INTANCETYPE
DESCRIPTOR.message_types_by_name['ResourcesRules'] = _RESOURCESRULES
DESCRIPTOR.message_types_by_name['Limit'] = _LIMIT
DESCRIPTOR.message_types_by_name['Request'] = _REQUEST
DESCRIPTOR.enum_types_by_name['TrafficType'] = _TRAFFICTYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Runtime = _reflection.GeneratedProtocolMessageType('Runtime', (_message.Message,), {

  'IntegrationEntry' : _reflection.GeneratedProtocolMessageType('IntegrationEntry', (_message.Message,), {
    'DESCRIPTOR' : _RUNTIME_INTEGRATIONENTRY,
    '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.Runtime.IntegrationEntry)
    })
  ,

  'EnvironmentVariablesEntry' : _reflection.GeneratedProtocolMessageType('EnvironmentVariablesEntry', (_message.Message,), {
    'DESCRIPTOR' : _RUNTIME_ENVIRONMENTVARIABLESENTRY,
    '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.Runtime.EnvironmentVariablesEntry)
    })
  ,

  'CommandsEntry' : _reflection.GeneratedProtocolMessageType('CommandsEntry', (_message.Message,), {
    'DESCRIPTOR' : _RUNTIME_COMMANDSENTRY,
    '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.Runtime.CommandsEntry)
    })
  ,

  'SecretsEntry' : _reflection.GeneratedProtocolMessageType('SecretsEntry', (_message.Message,), {
    'DESCRIPTOR' : _RUNTIME_SECRETSENTRY,
    '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.Runtime.SecretsEntry)
    })
  ,

  'ExtraArgsEntry' : _reflection.GeneratedProtocolMessageType('ExtraArgsEntry', (_message.Message,), {
    'DESCRIPTOR' : _RUNTIME_EXTRAARGSENTRY,
    '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.Runtime.ExtraArgsEntry)
    })
  ,
  'DESCRIPTOR' : _RUNTIME,
  '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.Runtime)
  })
_sym_db.RegisterMessage(Runtime)
_sym_db.RegisterMessage(Runtime.IntegrationEntry)
_sym_db.RegisterMessage(Runtime.EnvironmentVariablesEntry)
_sym_db.RegisterMessage(Runtime.CommandsEntry)
_sym_db.RegisterMessage(Runtime.SecretsEntry)
_sym_db.RegisterMessage(Runtime.ExtraArgsEntry)

RuntimeList = _reflection.GeneratedProtocolMessageType('RuntimeList', (_message.Message,), {
  'DESCRIPTOR' : _RUNTIMELIST,
  '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.RuntimeList)
  })
_sym_db.RegisterMessage(RuntimeList)

IntanceType = _reflection.GeneratedProtocolMessageType('IntanceType', (_message.Message,), {
  'DESCRIPTOR' : _INTANCETYPE,
  '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.IntanceType)
  })
_sym_db.RegisterMessage(IntanceType)

ResourcesRules = _reflection.GeneratedProtocolMessageType('ResourcesRules', (_message.Message,), {
  'DESCRIPTOR' : _RESOURCESRULES,
  '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.ResourcesRules)
  })
_sym_db.RegisterMessage(ResourcesRules)

Limit = _reflection.GeneratedProtocolMessageType('Limit', (_message.Message,), {
  'DESCRIPTOR' : _LIMIT,
  '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.Limit)
  })
_sym_db.RegisterMessage(Limit)

Request = _reflection.GeneratedProtocolMessageType('Request', (_message.Message,), {
  'DESCRIPTOR' : _REQUEST,
  '__module__' : 'pipelines.runtime.v1alpha1.runtime_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.Request)
  })
_sym_db.RegisterMessage(Request)


DESCRIPTOR._options = None
_RUNTIME_INTEGRATIONENTRY._options = None
_RUNTIME_ENVIRONMENTVARIABLESENTRY._options = None
_RUNTIME_COMMANDSENTRY._options = None
_RUNTIME_SECRETSENTRY._options = None
_RUNTIME_EXTRAARGSENTRY._options = None
# @@protoc_insertion_point(module_scope)
