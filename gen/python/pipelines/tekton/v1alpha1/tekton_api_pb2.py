# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pipelines.tekton.v1alpha1 import tekton_pb2 as pipelines_dot_tekton_dot_v1alpha1_dot_tekton__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pipelines/tekton/v1alpha1/tekton_api.proto',
  package='pipelines.tekton.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n#io.cuemby.pipelines.tekton.v1alpha1B\016TektonAPIProtoP\001Z:github.com/cuemby/ccp-sdk/gen/go/pipelines/tekton/v1alpha1\242\002\003PPX\252\002\031Pipelines.Tekton.V1Alpha1\312\002\031Pipelines\\Tekton\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n*pipelines/tekton/v1alpha1/tekton_api.proto\x12\x19pipelines.tekton.v1alpha1\x1a&pipelines/tekton/v1alpha1/tekton.proto\"\x84\x01\n\x1b\x43reateTektonPipelineRequest\x12L\n\x0ftekton_pipeline\x18\x01 \x01(\x0b\x32#.pipelines.tekton.v1alpha1.PipelineR\x0etektonPipeline\x12\x17\n\x07user_id\x18\x02 \x01(\tR\x06userId\"\x84\x01\n\x1c\x43reateTektonPipelineResponse\x12L\n\x0ftekton_pipeline\x18\x01 \x01(\x0b\x32#.pipelines.tekton.v1alpha1.PipelineR\x0etektonPipeline\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\"\x8e\x01\n\x1b\x44\x65leteTektonPipelineRequest\x12!\n\x0cruntime_name\x18\x01 \x01(\tR\x0bruntimeName\x12%\n\x0e\x61pplication_id\x18\x02 \x01(\tR\rapplicationId\x12%\n\x0e\x65nvironment_id\x18\x03 \x01(\tR\renvironmentId\"6\n\x1c\x44\x65leteTektonPipelineResponse\x12\x16\n\x06status\x18\x01 \x01(\tR\x06status\"\x1f\n\x1dListTektonTaskPipelineRequest\"\x80\x01\n\x1eListTektonTaskPipelineResponse\x12\x46\n\ttask_list\x18\x01 \x01(\x0b\x32).pipelines.tekton.v1alpha1.TektonTaskListR\x08taskList\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\"6\n\x15GetPipelineRunRequest\x12\x1d\n\nruntime_id\x18\x01 \x01(\tR\truntimeId\"{\n\x16GetPipelineRunResponse\x12I\n\x0cpipeline_run\x18\x01 \x01(\x0b\x32&.pipelines.tekton.v1alpha1.PipelineRunR\x0bpipelineRun\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\"7\n\x16ListPipelineRunRequest\x12\x1d\n\nruntime_id\x18\x01 \x01(\tR\truntimeId\"\x89\x01\n\x17ListPipelineRunResponse\x12V\n\x11pipeline_run_list\x18\x01 \x01(\x0b\x32*.pipelines.tekton.v1alpha1.PipelineRunListR\x0fpipelineRunList\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\"8\n\x17GetStatusRuntimeRequest\x12\x1d\n\nruntime_id\x18\x01 \x01(\tR\truntimeId\"R\n\x18GetStatusRuntimeResponse\x12\x36\n\x05\x65vent\x18\x01 \x01(\x0b\x32 .pipelines.tekton.v1alpha1.EventR\x05\x65vent\"\xf9\x01\n(ChangeStatusRuntimeAndApplicationRequest\x12%\n\x0e\x61pplication_id\x18\x01 \x01(\tR\rapplicationId\x12\x1d\n\nproject_id\x18\x02 \x01(\tR\tprojectId\x12\'\n\x0forganization_id\x18\x03 \x01(\tR\x0eorganizationId\x12!\n\x0cruntime_name\x18\x04 \x01(\tR\x0bruntimeName\x12\x1c\n\tnamespace\x18\x05 \x01(\tR\tnamespace\x12\x1d\n\nruntime_id\x18\x06 \x01(\tR\truntimeId\"S\n)ChangeStatusRuntimeAndApplicationResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\x12\x14\n\x05\x65rror\x18\x02 \x01(\tR\x05\x65rror2\xe1\x07\n\x18TektonPipelineAPIService\x12\x87\x01\n\x14\x43reateTektonPipeline\x12\x36.pipelines.tekton.v1alpha1.CreateTektonPipelineRequest\x1a\x37.pipelines.tekton.v1alpha1.CreateTektonPipelineResponse\x12\x87\x01\n\x14\x44\x65leteTektonPipeline\x12\x36.pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest\x1a\x37.pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse\x12\x8d\x01\n\x16ListTektonTaskPipeline\x12\x38.pipelines.tekton.v1alpha1.ListTektonTaskPipelineRequest\x1a\x39.pipelines.tekton.v1alpha1.ListTektonTaskPipelineResponse\x12u\n\x0eGetPipelineRun\x12\x30.pipelines.tekton.v1alpha1.GetPipelineRunRequest\x1a\x31.pipelines.tekton.v1alpha1.GetPipelineRunResponse\x12x\n\x0fListPipelineRun\x12\x31.pipelines.tekton.v1alpha1.ListPipelineRunRequest\x1a\x32.pipelines.tekton.v1alpha1.ListPipelineRunResponse\x12}\n\x10GetStatusRuntime\x12\x32.pipelines.tekton.v1alpha1.GetStatusRuntimeRequest\x1a\x33.pipelines.tekton.v1alpha1.GetStatusRuntimeResponse0\x01\x12\xb0\x01\n!ChangeStatusRuntimeAndApplication\x12\x43.pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest\x1a\x44.pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationResponse\"\x00\x42\xb1\x01\n#io.cuemby.pipelines.tekton.v1alpha1B\x0eTektonAPIProtoP\x01Z:github.com/cuemby/ccp-sdk/gen/go/pipelines/tekton/v1alpha1\xa2\x02\x03PPX\xaa\x02\x19Pipelines.Tekton.V1Alpha1\xca\x02\x19Pipelines\\Tekton\\V1Alpha1b\x06proto3'
  ,
  dependencies=[pipelines_dot_tekton_dot_v1alpha1_dot_tekton__pb2.DESCRIPTOR,])




_CREATETEKTONPIPELINEREQUEST = _descriptor.Descriptor(
  name='CreateTektonPipelineRequest',
  full_name='pipelines.tekton.v1alpha1.CreateTektonPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='tekton_pipeline', full_name='pipelines.tekton.v1alpha1.CreateTektonPipelineRequest.tekton_pipeline', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tektonPipeline', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='pipelines.tekton.v1alpha1.CreateTektonPipelineRequest.user_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=114,
  serialized_end=246,
)


_CREATETEKTONPIPELINERESPONSE = _descriptor.Descriptor(
  name='CreateTektonPipelineResponse',
  full_name='pipelines.tekton.v1alpha1.CreateTektonPipelineResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='tekton_pipeline', full_name='pipelines.tekton.v1alpha1.CreateTektonPipelineResponse.tekton_pipeline', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tektonPipeline', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='pipelines.tekton.v1alpha1.CreateTektonPipelineResponse.status', index=1,
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
  serialized_start=249,
  serialized_end=381,
)


_DELETETEKTONPIPELINEREQUEST = _descriptor.Descriptor(
  name='DeleteTektonPipelineRequest',
  full_name='pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='runtime_name', full_name='pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest.runtime_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='runtimeName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='application_id', full_name='pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest.application_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='applicationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='environment_id', full_name='pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest.environment_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environmentId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=384,
  serialized_end=526,
)


_DELETETEKTONPIPELINERESPONSE = _descriptor.Descriptor(
  name='DeleteTektonPipelineResponse',
  full_name='pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse.status', index=0,
      number=1, type=9, cpp_type=9, label=1,
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
  serialized_start=528,
  serialized_end=582,
)


_LISTTEKTONTASKPIPELINEREQUEST = _descriptor.Descriptor(
  name='ListTektonTaskPipelineRequest',
  full_name='pipelines.tekton.v1alpha1.ListTektonTaskPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
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
  serialized_start=584,
  serialized_end=615,
)


_LISTTEKTONTASKPIPELINERESPONSE = _descriptor.Descriptor(
  name='ListTektonTaskPipelineResponse',
  full_name='pipelines.tekton.v1alpha1.ListTektonTaskPipelineResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='task_list', full_name='pipelines.tekton.v1alpha1.ListTektonTaskPipelineResponse.task_list', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='taskList', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='pipelines.tekton.v1alpha1.ListTektonTaskPipelineResponse.status', index=1,
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
  serialized_start=618,
  serialized_end=746,
)


_GETPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='GetPipelineRunRequest',
  full_name='pipelines.tekton.v1alpha1.GetPipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='runtime_id', full_name='pipelines.tekton.v1alpha1.GetPipelineRunRequest.runtime_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='runtimeId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=748,
  serialized_end=802,
)


_GETPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='GetPipelineRunResponse',
  full_name='pipelines.tekton.v1alpha1.GetPipelineRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='pipeline_run', full_name='pipelines.tekton.v1alpha1.GetPipelineRunResponse.pipeline_run', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pipelineRun', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='pipelines.tekton.v1alpha1.GetPipelineRunResponse.status', index=1,
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
  serialized_start=804,
  serialized_end=927,
)


_LISTPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='ListPipelineRunRequest',
  full_name='pipelines.tekton.v1alpha1.ListPipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='runtime_id', full_name='pipelines.tekton.v1alpha1.ListPipelineRunRequest.runtime_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='runtimeId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=929,
  serialized_end=984,
)


_LISTPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='ListPipelineRunResponse',
  full_name='pipelines.tekton.v1alpha1.ListPipelineRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='pipeline_run_list', full_name='pipelines.tekton.v1alpha1.ListPipelineRunResponse.pipeline_run_list', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pipelineRunList', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='pipelines.tekton.v1alpha1.ListPipelineRunResponse.status', index=1,
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
  serialized_start=987,
  serialized_end=1124,
)


_GETSTATUSRUNTIMEREQUEST = _descriptor.Descriptor(
  name='GetStatusRuntimeRequest',
  full_name='pipelines.tekton.v1alpha1.GetStatusRuntimeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='runtime_id', full_name='pipelines.tekton.v1alpha1.GetStatusRuntimeRequest.runtime_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='runtimeId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1126,
  serialized_end=1182,
)


_GETSTATUSRUNTIMERESPONSE = _descriptor.Descriptor(
  name='GetStatusRuntimeResponse',
  full_name='pipelines.tekton.v1alpha1.GetStatusRuntimeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='event', full_name='pipelines.tekton.v1alpha1.GetStatusRuntimeResponse.event', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='event', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1184,
  serialized_end=1266,
)


_CHANGESTATUSRUNTIMEANDAPPLICATIONREQUEST = _descriptor.Descriptor(
  name='ChangeStatusRuntimeAndApplicationRequest',
  full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='application_id', full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest.application_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='applicationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest.project_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest.organization_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='runtime_name', full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest.runtime_name', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='runtimeName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='namespace', full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest.namespace', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='namespace', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='runtime_id', full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest.runtime_id', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='runtimeId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1269,
  serialized_end=1518,
)


_CHANGESTATUSRUNTIMEANDAPPLICATIONRESPONSE = _descriptor.Descriptor(
  name='ChangeStatusRuntimeAndApplicationResponse',
  full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationResponse.msg', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error', full_name='pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationResponse.error', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='error', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1520,
  serialized_end=1603,
)

_CREATETEKTONPIPELINEREQUEST.fields_by_name['tekton_pipeline'].message_type = pipelines_dot_tekton_dot_v1alpha1_dot_tekton__pb2._PIPELINE
_CREATETEKTONPIPELINERESPONSE.fields_by_name['tekton_pipeline'].message_type = pipelines_dot_tekton_dot_v1alpha1_dot_tekton__pb2._PIPELINE
_LISTTEKTONTASKPIPELINERESPONSE.fields_by_name['task_list'].message_type = pipelines_dot_tekton_dot_v1alpha1_dot_tekton__pb2._TEKTONTASKLIST
_GETPIPELINERUNRESPONSE.fields_by_name['pipeline_run'].message_type = pipelines_dot_tekton_dot_v1alpha1_dot_tekton__pb2._PIPELINERUN
_LISTPIPELINERUNRESPONSE.fields_by_name['pipeline_run_list'].message_type = pipelines_dot_tekton_dot_v1alpha1_dot_tekton__pb2._PIPELINERUNLIST
_GETSTATUSRUNTIMERESPONSE.fields_by_name['event'].message_type = pipelines_dot_tekton_dot_v1alpha1_dot_tekton__pb2._EVENT
DESCRIPTOR.message_types_by_name['CreateTektonPipelineRequest'] = _CREATETEKTONPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['CreateTektonPipelineResponse'] = _CREATETEKTONPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['DeleteTektonPipelineRequest'] = _DELETETEKTONPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['DeleteTektonPipelineResponse'] = _DELETETEKTONPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['ListTektonTaskPipelineRequest'] = _LISTTEKTONTASKPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['ListTektonTaskPipelineResponse'] = _LISTTEKTONTASKPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['GetPipelineRunRequest'] = _GETPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['GetPipelineRunResponse'] = _GETPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['ListPipelineRunRequest'] = _LISTPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['ListPipelineRunResponse'] = _LISTPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['GetStatusRuntimeRequest'] = _GETSTATUSRUNTIMEREQUEST
DESCRIPTOR.message_types_by_name['GetStatusRuntimeResponse'] = _GETSTATUSRUNTIMERESPONSE
DESCRIPTOR.message_types_by_name['ChangeStatusRuntimeAndApplicationRequest'] = _CHANGESTATUSRUNTIMEANDAPPLICATIONREQUEST
DESCRIPTOR.message_types_by_name['ChangeStatusRuntimeAndApplicationResponse'] = _CHANGESTATUSRUNTIMEANDAPPLICATIONRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CreateTektonPipelineRequest = _reflection.GeneratedProtocolMessageType('CreateTektonPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATETEKTONPIPELINEREQUEST,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.CreateTektonPipelineRequest)
  })
_sym_db.RegisterMessage(CreateTektonPipelineRequest)

CreateTektonPipelineResponse = _reflection.GeneratedProtocolMessageType('CreateTektonPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATETEKTONPIPELINERESPONSE,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.CreateTektonPipelineResponse)
  })
_sym_db.RegisterMessage(CreateTektonPipelineResponse)

DeleteTektonPipelineRequest = _reflection.GeneratedProtocolMessageType('DeleteTektonPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETETEKTONPIPELINEREQUEST,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest)
  })
_sym_db.RegisterMessage(DeleteTektonPipelineRequest)

DeleteTektonPipelineResponse = _reflection.GeneratedProtocolMessageType('DeleteTektonPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETETEKTONPIPELINERESPONSE,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse)
  })
_sym_db.RegisterMessage(DeleteTektonPipelineResponse)

ListTektonTaskPipelineRequest = _reflection.GeneratedProtocolMessageType('ListTektonTaskPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTTEKTONTASKPIPELINEREQUEST,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.ListTektonTaskPipelineRequest)
  })
_sym_db.RegisterMessage(ListTektonTaskPipelineRequest)

ListTektonTaskPipelineResponse = _reflection.GeneratedProtocolMessageType('ListTektonTaskPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTTEKTONTASKPIPELINERESPONSE,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.ListTektonTaskPipelineResponse)
  })
_sym_db.RegisterMessage(ListTektonTaskPipelineResponse)

GetPipelineRunRequest = _reflection.GeneratedProtocolMessageType('GetPipelineRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETPIPELINERUNREQUEST,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.GetPipelineRunRequest)
  })
_sym_db.RegisterMessage(GetPipelineRunRequest)

GetPipelineRunResponse = _reflection.GeneratedProtocolMessageType('GetPipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETPIPELINERUNRESPONSE,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.GetPipelineRunResponse)
  })
_sym_db.RegisterMessage(GetPipelineRunResponse)

ListPipelineRunRequest = _reflection.GeneratedProtocolMessageType('ListPipelineRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTPIPELINERUNREQUEST,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.ListPipelineRunRequest)
  })
_sym_db.RegisterMessage(ListPipelineRunRequest)

ListPipelineRunResponse = _reflection.GeneratedProtocolMessageType('ListPipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTPIPELINERUNRESPONSE,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.ListPipelineRunResponse)
  })
_sym_db.RegisterMessage(ListPipelineRunResponse)

GetStatusRuntimeRequest = _reflection.GeneratedProtocolMessageType('GetStatusRuntimeRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETSTATUSRUNTIMEREQUEST,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.GetStatusRuntimeRequest)
  })
_sym_db.RegisterMessage(GetStatusRuntimeRequest)

GetStatusRuntimeResponse = _reflection.GeneratedProtocolMessageType('GetStatusRuntimeResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETSTATUSRUNTIMERESPONSE,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.GetStatusRuntimeResponse)
  })
_sym_db.RegisterMessage(GetStatusRuntimeResponse)

ChangeStatusRuntimeAndApplicationRequest = _reflection.GeneratedProtocolMessageType('ChangeStatusRuntimeAndApplicationRequest', (_message.Message,), {
  'DESCRIPTOR' : _CHANGESTATUSRUNTIMEANDAPPLICATIONREQUEST,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest)
  })
_sym_db.RegisterMessage(ChangeStatusRuntimeAndApplicationRequest)

ChangeStatusRuntimeAndApplicationResponse = _reflection.GeneratedProtocolMessageType('ChangeStatusRuntimeAndApplicationResponse', (_message.Message,), {
  'DESCRIPTOR' : _CHANGESTATUSRUNTIMEANDAPPLICATIONRESPONSE,
  '__module__' : 'pipelines.tekton.v1alpha1.tekton_api_pb2'
  # @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationResponse)
  })
_sym_db.RegisterMessage(ChangeStatusRuntimeAndApplicationResponse)


DESCRIPTOR._options = None

_TEKTONPIPELINEAPISERVICE = _descriptor.ServiceDescriptor(
  name='TektonPipelineAPIService',
  full_name='pipelines.tekton.v1alpha1.TektonPipelineAPIService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1606,
  serialized_end=2599,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateTektonPipeline',
    full_name='pipelines.tekton.v1alpha1.TektonPipelineAPIService.CreateTektonPipeline',
    index=0,
    containing_service=None,
    input_type=_CREATETEKTONPIPELINEREQUEST,
    output_type=_CREATETEKTONPIPELINERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteTektonPipeline',
    full_name='pipelines.tekton.v1alpha1.TektonPipelineAPIService.DeleteTektonPipeline',
    index=1,
    containing_service=None,
    input_type=_DELETETEKTONPIPELINEREQUEST,
    output_type=_DELETETEKTONPIPELINERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListTektonTaskPipeline',
    full_name='pipelines.tekton.v1alpha1.TektonPipelineAPIService.ListTektonTaskPipeline',
    index=2,
    containing_service=None,
    input_type=_LISTTEKTONTASKPIPELINEREQUEST,
    output_type=_LISTTEKTONTASKPIPELINERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetPipelineRun',
    full_name='pipelines.tekton.v1alpha1.TektonPipelineAPIService.GetPipelineRun',
    index=3,
    containing_service=None,
    input_type=_GETPIPELINERUNREQUEST,
    output_type=_GETPIPELINERUNRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListPipelineRun',
    full_name='pipelines.tekton.v1alpha1.TektonPipelineAPIService.ListPipelineRun',
    index=4,
    containing_service=None,
    input_type=_LISTPIPELINERUNREQUEST,
    output_type=_LISTPIPELINERUNRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetStatusRuntime',
    full_name='pipelines.tekton.v1alpha1.TektonPipelineAPIService.GetStatusRuntime',
    index=5,
    containing_service=None,
    input_type=_GETSTATUSRUNTIMEREQUEST,
    output_type=_GETSTATUSRUNTIMERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ChangeStatusRuntimeAndApplication',
    full_name='pipelines.tekton.v1alpha1.TektonPipelineAPIService.ChangeStatusRuntimeAndApplication',
    index=6,
    containing_service=None,
    input_type=_CHANGESTATUSRUNTIMEANDAPPLICATIONREQUEST,
    output_type=_CHANGESTATUSRUNTIMEANDAPPLICATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_TEKTONPIPELINEAPISERVICE)

DESCRIPTOR.services_by_name['TektonPipelineAPIService'] = _TEKTONPIPELINEAPISERVICE

# @@protoc_insertion_point(module_scope)
