# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='pipelines/tekton/v1alpha1/tekton.proto',
  package='pipelines.tekton.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n#io.cuemby.pipelines.tekton.v1alpha1B\013TektonProtoP\001Z:github.com/cuemby/ccp-sdk/gen/go/pipelines/tekton/v1alpha1\242\002\003PPX\252\002\031Pipelines.Tekton.V1Alpha1\312\002\031Pipelines\\Tekton\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n&pipelines/tekton/v1alpha1/tekton.proto\x12\x19pipelines.tekton.v1alpha1\"\x7f\n\x06Params\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12!\n\x0cvalue_string\x18\x02 \x01(\tR\x0bvalueString\x12\x1f\n\x0bvalue_array\x18\x03 \x03(\tR\nvalueArray\x12\x1d\n\nvalue_type\x18\x04 \x01(\tR\tvalueType\"\xa2\x01\n\nTaskParams\x12\x1d\n\nparam_name\x18\x01 \x01(\tR\tparamName\x12(\n\x10param_value_type\x18\x02 \x01(\tR\x0eparamValueType\x12\x1f\n\x0bparam_value\x18\x03 \x01(\tR\nparamValue\x12*\n\x11param_value_array\x18\x04 \x03(\tR\x0fparamValueArray\"H\n\nWorkspaces\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x12\n\x04main\x18\x02 \x01(\tR\x04main\x12\x12\n\x04type\x18\x03 \x01(\tR\x04type\"\xcb\x02\n\x04Task\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1b\n\ttask_name\x18\x02 \x01(\tR\x08taskName\x12\"\n\rtask_ref_name\x18\x03 \x01(\tR\x0btaskRefName\x12\x1b\n\ttask_kind\x18\x04 \x01(\tR\x08taskKind\x12$\n\x0etask_run_after\x18\x05 \x03(\tR\x0ctaskRunAfter\x12\x45\n\nworkspaces\x18\x06 \x03(\x0b\x32%.pipelines.tekton.v1alpha1.WorkspacesR\nworkspaces\x12\x46\n\x0btask_params\x18\x07 \x03(\x0b\x32%.pipelines.tekton.v1alpha1.TaskParamsR\ntaskParams\x12 \n\x0b\x64\x65scription\x18\x08 \x01(\tR\x0b\x64\x65scription\"\xc9\n\n\x08Pipeline\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\'\n\x0forganization_id\x18\x02 \x01(\rR\x0eorganizationId\x12\x1d\n\nproject_id\x18\x03 \x01(\rR\tprojectId\x12$\n\x0etype_meta_kind\x18\x04 \x01(\tR\x0ctypeMetaKind\x12\x31\n\x15type_meta_api_version\x18\x05 \x01(\tR\x12typeMetaApiVersion\x12(\n\x10object_meta_name\x18\x06 \x01(\tR\x0eobjectMetaName\x12\x32\n\x15object_meta_namespace\x18\x07 \x01(\tR\x13objectMetaNamespace\x12\x39\n\x06params\x18\x08 \x03(\x0b\x32!.pipelines.tekton.v1alpha1.ParamsR\x06params\x12\x35\n\x05tasks\x18\t \x03(\x0b\x32\x1f.pipelines.tekton.v1alpha1.TaskR\x05tasks\x12\x1f\n\x0bstatus_type\x18\n \x01(\tR\nstatusType\x12V\n\x0bintegration\x18\x0b \x03(\x0b\x32\x34.pipelines.tekton.v1alpha1.Pipeline.IntegrationEntryR\x0bintegration\x12r\n\x15\x65nvironment_variables\x18\x0c \x03(\x0b\x32=.pipelines.tekton.v1alpha1.Pipeline.EnvironmentVariablesEntryR\x14\x65nvironmentVariables\x12M\n\x08\x63ommands\x18\r \x03(\x0b\x32\x31.pipelines.tekton.v1alpha1.Pipeline.CommandsEntryR\x08\x63ommands\x12J\n\x07secrets\x18\x0e \x03(\x0b\x32\x30.pipelines.tekton.v1alpha1.Pipeline.SecretsEntryR\x07secrets\x12G\n\x06labels\x18\x0f \x03(\x0b\x32/.pipelines.tekton.v1alpha1.Pipeline.LabelsEntryR\x06labels\x12\x16\n\x06\x61\x63tive\x18\x10 \x01(\x08R\x06\x61\x63tive\x12#\n\rinstance_type\x18\x11 \x01(\tR\x0cinstanceType\x12N\n\x0fworkspaces_main\x18\x12 \x03(\x0b\x32%.pipelines.tekton.v1alpha1.WorkspacesR\x0eworkspacesMain\x12!\n\x0ctraffic_type\x18\x13 \x01(\x05R\x0btrafficType\x1a>\n\x10IntegrationEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1aG\n\x19\x45nvironmentVariablesEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a;\n\rCommandsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a:\n\x0cSecretsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a\x39\n\x0bLabelsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x42\xae\x01\n#io.cuemby.pipelines.tekton.v1alpha1B\x0bTektonProtoP\x01Z:github.com/cuemby/ccp-sdk/gen/go/pipelines/tekton/v1alpha1\xa2\x02\x03PPX\xaa\x02\x19Pipelines.Tekton.V1Alpha1\xca\x02\x19Pipelines\\Tekton\\V1Alpha1b\x06proto3'
)




_PARAMS = _descriptor.Descriptor(
  name='Params',
  full_name='pipelines.tekton.v1alpha1.Params',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='pipelines.tekton.v1alpha1.Params.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value_string', full_name='pipelines.tekton.v1alpha1.Params.value_string', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='valueString', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value_array', full_name='pipelines.tekton.v1alpha1.Params.value_array', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='valueArray', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value_type', full_name='pipelines.tekton.v1alpha1.Params.value_type', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='valueType', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=69,
  serialized_end=196,
)


_TASKPARAMS = _descriptor.Descriptor(
  name='TaskParams',
  full_name='pipelines.tekton.v1alpha1.TaskParams',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='param_name', full_name='pipelines.tekton.v1alpha1.TaskParams.param_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='paramName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='param_value_type', full_name='pipelines.tekton.v1alpha1.TaskParams.param_value_type', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='paramValueType', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='param_value', full_name='pipelines.tekton.v1alpha1.TaskParams.param_value', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='paramValue', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='param_value_array', full_name='pipelines.tekton.v1alpha1.TaskParams.param_value_array', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='paramValueArray', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=199,
  serialized_end=361,
)


_WORKSPACES = _descriptor.Descriptor(
  name='Workspaces',
  full_name='pipelines.tekton.v1alpha1.Workspaces',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='pipelines.tekton.v1alpha1.Workspaces.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='main', full_name='pipelines.tekton.v1alpha1.Workspaces.main', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='main', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='pipelines.tekton.v1alpha1.Workspaces.type', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='type', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=363,
  serialized_end=435,
)


_TASK = _descriptor.Descriptor(
  name='Task',
  full_name='pipelines.tekton.v1alpha1.Task',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='pipelines.tekton.v1alpha1.Task.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='task_name', full_name='pipelines.tekton.v1alpha1.Task.task_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='taskName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='task_ref_name', full_name='pipelines.tekton.v1alpha1.Task.task_ref_name', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='taskRefName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='task_kind', full_name='pipelines.tekton.v1alpha1.Task.task_kind', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='taskKind', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='task_run_after', full_name='pipelines.tekton.v1alpha1.Task.task_run_after', index=4,
      number=5, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='taskRunAfter', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='workspaces', full_name='pipelines.tekton.v1alpha1.Task.workspaces', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='workspaces', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='task_params', full_name='pipelines.tekton.v1alpha1.Task.task_params', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='taskParams', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='description', full_name='pipelines.tekton.v1alpha1.Task.description', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='description', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=438,
  serialized_end=769,
)


_PIPELINE_INTEGRATIONENTRY = _descriptor.Descriptor(
  name='IntegrationEntry',
  full_name='pipelines.tekton.v1alpha1.Pipeline.IntegrationEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.tekton.v1alpha1.Pipeline.IntegrationEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.tekton.v1alpha1.Pipeline.IntegrationEntry.value', index=1,
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
  serialized_start=1810,
  serialized_end=1872,
)

_PIPELINE_ENVIRONMENTVARIABLESENTRY = _descriptor.Descriptor(
  name='EnvironmentVariablesEntry',
  full_name='pipelines.tekton.v1alpha1.Pipeline.EnvironmentVariablesEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.tekton.v1alpha1.Pipeline.EnvironmentVariablesEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.tekton.v1alpha1.Pipeline.EnvironmentVariablesEntry.value', index=1,
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
  serialized_start=1874,
  serialized_end=1945,
)

_PIPELINE_COMMANDSENTRY = _descriptor.Descriptor(
  name='CommandsEntry',
  full_name='pipelines.tekton.v1alpha1.Pipeline.CommandsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.tekton.v1alpha1.Pipeline.CommandsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.tekton.v1alpha1.Pipeline.CommandsEntry.value', index=1,
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
  serialized_start=1947,
  serialized_end=2006,
)

_PIPELINE_SECRETSENTRY = _descriptor.Descriptor(
  name='SecretsEntry',
  full_name='pipelines.tekton.v1alpha1.Pipeline.SecretsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.tekton.v1alpha1.Pipeline.SecretsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.tekton.v1alpha1.Pipeline.SecretsEntry.value', index=1,
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
  serialized_start=2008,
  serialized_end=2066,
)

_PIPELINE_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='pipelines.tekton.v1alpha1.Pipeline.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='pipelines.tekton.v1alpha1.Pipeline.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='pipelines.tekton.v1alpha1.Pipeline.LabelsEntry.value', index=1,
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
  serialized_start=2068,
  serialized_end=2125,
)

_PIPELINE = _descriptor.Descriptor(
  name='Pipeline',
  full_name='pipelines.tekton.v1alpha1.Pipeline',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='pipelines.tekton.v1alpha1.Pipeline.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='pipelines.tekton.v1alpha1.Pipeline.organization_id', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='pipelines.tekton.v1alpha1.Pipeline.project_id', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type_meta_kind', full_name='pipelines.tekton.v1alpha1.Pipeline.type_meta_kind', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='typeMetaKind', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type_meta_api_version', full_name='pipelines.tekton.v1alpha1.Pipeline.type_meta_api_version', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='typeMetaApiVersion', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='object_meta_name', full_name='pipelines.tekton.v1alpha1.Pipeline.object_meta_name', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='objectMetaName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='object_meta_namespace', full_name='pipelines.tekton.v1alpha1.Pipeline.object_meta_namespace', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='objectMetaNamespace', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='params', full_name='pipelines.tekton.v1alpha1.Pipeline.params', index=7,
      number=8, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='params', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='tasks', full_name='pipelines.tekton.v1alpha1.Pipeline.tasks', index=8,
      number=9, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tasks', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status_type', full_name='pipelines.tekton.v1alpha1.Pipeline.status_type', index=9,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='statusType', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='integration', full_name='pipelines.tekton.v1alpha1.Pipeline.integration', index=10,
      number=11, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integration', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='environment_variables', full_name='pipelines.tekton.v1alpha1.Pipeline.environment_variables', index=11,
      number=12, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environmentVariables', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='commands', full_name='pipelines.tekton.v1alpha1.Pipeline.commands', index=12,
      number=13, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='commands', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='secrets', full_name='pipelines.tekton.v1alpha1.Pipeline.secrets', index=13,
      number=14, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='secrets', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='pipelines.tekton.v1alpha1.Pipeline.labels', index=14,
      number=15, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='labels', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='active', full_name='pipelines.tekton.v1alpha1.Pipeline.active', index=15,
      number=16, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='active', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='instance_type', full_name='pipelines.tekton.v1alpha1.Pipeline.instance_type', index=16,
      number=17, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='instanceType', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='workspaces_main', full_name='pipelines.tekton.v1alpha1.Pipeline.workspaces_main', index=17,
      number=18, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='workspacesMain', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='traffic_type', full_name='pipelines.tekton.v1alpha1.Pipeline.traffic_type', index=18,
      number=19, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='trafficType', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_PIPELINE_INTEGRATIONENTRY, _PIPELINE_ENVIRONMENTVARIABLESENTRY, _PIPELINE_COMMANDSENTRY, _PIPELINE_SECRETSENTRY, _PIPELINE_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=772,
  serialized_end=2125,
)

_TASK.fields_by_name['workspaces'].message_type = _WORKSPACES
_TASK.fields_by_name['task_params'].message_type = _TASKPARAMS
_PIPELINE_INTEGRATIONENTRY.containing_type = _PIPELINE
_PIPELINE_ENVIRONMENTVARIABLESENTRY.containing_type = _PIPELINE
_PIPELINE_COMMANDSENTRY.containing_type = _PIPELINE
_PIPELINE_SECRETSENTRY.containing_type = _PIPELINE
_PIPELINE_LABELSENTRY.containing_type = _PIPELINE
_PIPELINE.fields_by_name['params'].message_type = _PARAMS
_PIPELINE.fields_by_name['tasks'].message_type = _TASK
_PIPELINE.fields_by_name['integration'].message_type = _PIPELINE_INTEGRATIONENTRY
_PIPELINE.fields_by_name['environment_variables'].message_type = _PIPELINE_ENVIRONMENTVARIABLESENTRY
_PIPELINE.fields_by_name['commands'].message_type = _PIPELINE_COMMANDSENTRY
_PIPELINE.fields_by_name['secrets'].message_type = _PIPELINE_SECRETSENTRY
_PIPELINE.fields_by_name['labels'].message_type = _PIPELINE_LABELSENTRY
_PIPELINE.fields_by_name['workspaces_main'].message_type = _WORKSPACES
DESCRIPTOR.message_types_by_name['Params'] = _PARAMS
DESCRIPTOR.message_types_by_name['TaskParams'] = _TASKPARAMS
DESCRIPTOR.message_types_by_name['Workspaces'] = _WORKSPACES
DESCRIPTOR.message_types_by_name['Task'] = _TASK
DESCRIPTOR.message_types_by_name['Pipeline'] = _PIPELINE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Params = _reflection.GeneratedProtocolMessageType('Params', (_message.Message,), {
  'DESCRIPTOR' : _PARAMS,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Params)
  })
_sym_db.RegisterMessage(Params)

TaskParams = _reflection.GeneratedProtocolMessageType('TaskParams', (_message.Message,), {
  'DESCRIPTOR' : _TASKPARAMS,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.TaskParams)
  })
_sym_db.RegisterMessage(TaskParams)

Workspaces = _reflection.GeneratedProtocolMessageType('Workspaces', (_message.Message,), {
  'DESCRIPTOR' : _WORKSPACES,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Workspaces)
  })
_sym_db.RegisterMessage(Workspaces)

Task = _reflection.GeneratedProtocolMessageType('Task', (_message.Message,), {
  'DESCRIPTOR' : _TASK,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Task)
  })
_sym_db.RegisterMessage(Task)

Pipeline = _reflection.GeneratedProtocolMessageType('Pipeline', (_message.Message,), {

  'IntegrationEntry' : _reflection.GeneratedProtocolMessageType('IntegrationEntry', (_message.Message,), {
    'DESCRIPTOR' : _PIPELINE_INTEGRATIONENTRY,
    '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Pipeline.IntegrationEntry)
    })
  ,

  'EnvironmentVariablesEntry' : _reflection.GeneratedProtocolMessageType('EnvironmentVariablesEntry', (_message.Message,), {
    'DESCRIPTOR' : _PIPELINE_ENVIRONMENTVARIABLESENTRY,
    '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Pipeline.EnvironmentVariablesEntry)
    })
  ,

  'CommandsEntry' : _reflection.GeneratedProtocolMessageType('CommandsEntry', (_message.Message,), {
    'DESCRIPTOR' : _PIPELINE_COMMANDSENTRY,
    '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Pipeline.CommandsEntry)
    })
  ,

  'SecretsEntry' : _reflection.GeneratedProtocolMessageType('SecretsEntry', (_message.Message,), {
    'DESCRIPTOR' : _PIPELINE_SECRETSENTRY,
    '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Pipeline.SecretsEntry)
    })
  ,

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _PIPELINE_LABELSENTRY,
    '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
    # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Pipeline.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _PIPELINE,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Pipeline)
  })
_sym_db.RegisterMessage(Pipeline)
_sym_db.RegisterMessage(Pipeline.IntegrationEntry)
_sym_db.RegisterMessage(Pipeline.EnvironmentVariablesEntry)
_sym_db.RegisterMessage(Pipeline.CommandsEntry)
_sym_db.RegisterMessage(Pipeline.SecretsEntry)
_sym_db.RegisterMessage(Pipeline.LabelsEntry)


DESCRIPTOR._options = None
_PIPELINE_INTEGRATIONENTRY._options = None
_PIPELINE_ENVIRONMENTVARIABLESENTRY._options = None
_PIPELINE_COMMANDSENTRY._options = None
_PIPELINE_SECRETSENTRY._options = None
_PIPELINE_LABELSENTRY._options = None
# @@protoc_insertion_point(module_scope)
