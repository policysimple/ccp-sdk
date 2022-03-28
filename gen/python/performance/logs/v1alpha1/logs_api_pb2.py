# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/logs/v1alpha1/logs_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from performance.logs.v1alpha1 import logs_pb2 as performance_dot_logs_dot_v1alpha1_dot_logs__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='performance/logs/v1alpha1/logs_api.proto',
  package='performance.logs.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n#io.cuemby.performance.logs.v1alpha1B\014LogsApiProtoP\001Z,github.com/performance-grpc-sdk/logsv1alpha1\242\002\003PFX\252\002\031Performance.Logs.V1Alpha1\312\002\031Performance\\Logs\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n(performance/logs/v1alpha1/logs_api.proto\x12\x19performance.logs.v1alpha1\x1a$performance/logs/v1alpha1/logs.proto\"Y\n\x05Range\x12\x1b\n\tdate_from\x18\x01 \x01(\tR\x08\x64\x61teFrom\x12\x17\n\x07\x64\x61te_to\x18\x02 \x01(\tR\x06\x64\x61teTo\x12\x1a\n\x08timezone\x18\x03 \x01(\tR\x08timezone\"\xa8\x02\n\x0eGetLogsRequest\x12M\n\x06labels\x18\x01 \x03(\x0b\x32\x35.performance.logs.v1alpha1.GetLogsRequest.LabelsEntryR\x06labels\x12\x1e\n\ncontainers\x18\x02 \x03(\tR\ncontainers\x12\x36\n\x05range\x18\x03 \x01(\x0b\x32 .performance.logs.v1alpha1.RangeR\x05range\x12\x12\n\x04size\x18\x04 \x01(\x05R\x04size\x12 \n\x0cnext_page_id\x18\x05 \x01(\tR\nnextPageId\x1a\x39\n\x0bLabelsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"k\n\x0fGetLogsResponse\x12\x36\n\x04logs\x18\x01 \x03(\x0b\x32\".performance.logs.v1alpha1.LogItemR\x04logs\x12 \n\x0cnext_page_id\x18\x02 \x01(\tR\nnextPageId2t\n\x0eLogsAPIService\x12\x62\n\x07GetLogs\x12).performance.logs.v1alpha1.GetLogsRequest\x1a*.performance.logs.v1alpha1.GetLogsResponse\"\x00\x42\xa1\x01\n#io.cuemby.performance.logs.v1alpha1B\x0cLogsApiProtoP\x01Z,github.com/performance-grpc-sdk/logsv1alpha1\xa2\x02\x03PFX\xaa\x02\x19Performance.Logs.V1Alpha1\xca\x02\x19Performance\\Logs\\V1Alpha1b\x06proto3'
  ,
  dependencies=[performance_dot_logs_dot_v1alpha1_dot_logs__pb2.DESCRIPTOR,])




_RANGE = _descriptor.Descriptor(
  name='Range',
  full_name='performance.logs.v1alpha1.Range',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='date_from', full_name='performance.logs.v1alpha1.Range.date_from', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='dateFrom', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='date_to', full_name='performance.logs.v1alpha1.Range.date_to', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='dateTo', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='timezone', full_name='performance.logs.v1alpha1.Range.timezone', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='timezone', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=109,
  serialized_end=198,
)


_GETLOGSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='performance.logs.v1alpha1.GetLogsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='performance.logs.v1alpha1.GetLogsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='performance.logs.v1alpha1.GetLogsRequest.LabelsEntry.value', index=1,
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
  serialized_start=440,
  serialized_end=497,
)

_GETLOGSREQUEST = _descriptor.Descriptor(
  name='GetLogsRequest',
  full_name='performance.logs.v1alpha1.GetLogsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='labels', full_name='performance.logs.v1alpha1.GetLogsRequest.labels', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='labels', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='containers', full_name='performance.logs.v1alpha1.GetLogsRequest.containers', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='containers', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='range', full_name='performance.logs.v1alpha1.GetLogsRequest.range', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='range', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='size', full_name='performance.logs.v1alpha1.GetLogsRequest.size', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='size', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_id', full_name='performance.logs.v1alpha1.GetLogsRequest.next_page_id', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nextPageId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_GETLOGSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=201,
  serialized_end=497,
)


_GETLOGSRESPONSE = _descriptor.Descriptor(
  name='GetLogsResponse',
  full_name='performance.logs.v1alpha1.GetLogsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='logs', full_name='performance.logs.v1alpha1.GetLogsResponse.logs', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='logs', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_id', full_name='performance.logs.v1alpha1.GetLogsResponse.next_page_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nextPageId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=499,
  serialized_end=606,
)

_GETLOGSREQUEST_LABELSENTRY.containing_type = _GETLOGSREQUEST
_GETLOGSREQUEST.fields_by_name['labels'].message_type = _GETLOGSREQUEST_LABELSENTRY
_GETLOGSREQUEST.fields_by_name['range'].message_type = _RANGE
_GETLOGSRESPONSE.fields_by_name['logs'].message_type = performance_dot_logs_dot_v1alpha1_dot_logs__pb2._LOGITEM
DESCRIPTOR.message_types_by_name['Range'] = _RANGE
DESCRIPTOR.message_types_by_name['GetLogsRequest'] = _GETLOGSREQUEST
DESCRIPTOR.message_types_by_name['GetLogsResponse'] = _GETLOGSRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Range = _reflection.GeneratedProtocolMessageType('Range', (_message.Message,), {
  'DESCRIPTOR' : _RANGE,
  '__module__' : 'performance.logs.v1alpha1.logs_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.Range)
  })
_sym_db.RegisterMessage(Range)

GetLogsRequest = _reflection.GeneratedProtocolMessageType('GetLogsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _GETLOGSREQUEST_LABELSENTRY,
    '__module__' : 'performance.logs.v1alpha1.logs_api_pb2'
    # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.GetLogsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _GETLOGSREQUEST,
  '__module__' : 'performance.logs.v1alpha1.logs_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.GetLogsRequest)
  })
_sym_db.RegisterMessage(GetLogsRequest)
_sym_db.RegisterMessage(GetLogsRequest.LabelsEntry)

GetLogsResponse = _reflection.GeneratedProtocolMessageType('GetLogsResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETLOGSRESPONSE,
  '__module__' : 'performance.logs.v1alpha1.logs_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.GetLogsResponse)
  })
_sym_db.RegisterMessage(GetLogsResponse)


DESCRIPTOR._options = None
_GETLOGSREQUEST_LABELSENTRY._options = None

_LOGSAPISERVICE = _descriptor.ServiceDescriptor(
  name='LogsAPIService',
  full_name='performance.logs.v1alpha1.LogsAPIService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=608,
  serialized_end=724,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetLogs',
    full_name='performance.logs.v1alpha1.LogsAPIService.GetLogs',
    index=0,
    containing_service=None,
    input_type=_GETLOGSREQUEST,
    output_type=_GETLOGSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_LOGSAPISERVICE)

DESCRIPTOR.services_by_name['LogsAPIService'] = _LOGSAPISERVICE

# @@protoc_insertion_point(module_scope)
