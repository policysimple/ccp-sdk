# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/metrics/v1alpha1/metrics_api.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from performance.metrics.v1alpha1 import metrics_pb2 as performance_dot_metrics_dot_v1alpha1_dot_metrics__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='performance/metrics/v1alpha1/metrics_api.proto',
  package='performance.metrics.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n&io.cuemby.performance.metrics.v1alpha1B\017MetricsApiProtoP\001Z/github.com/performance-grpc-sdk/metricsv1alpha1\242\002\003PFX\252\002\034Performance.Metrics.V1Alpha1\312\002\034Performance\\Metrics\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n.performance/metrics/v1alpha1/metrics_api.proto\x12\x1cperformance.metrics.v1alpha1\x1a*performance/metrics/v1alpha1/metrics.proto\"Y\n\x05Range\x12\x1b\n\tdate_from\x18\x01 \x01(\tR\x08\x64\x61teFrom\x12\x17\n\x07\x64\x61te_to\x18\x02 \x01(\tR\x06\x64\x61teTo\x12\x1a\n\x08timezone\x18\x03 \x01(\tR\x08timezone\"\xf1\x02\n\x11GetMetricsRequest\x12S\n\x06labels\x18\x01 \x03(\x0b\x32;.performance.metrics.v1alpha1.GetMetricsRequest.LabelsEntryR\x06labels\x12\x1e\n\ncontainers\x18\x02 \x03(\tR\ncontainers\x12I\n\x08interval\x18\x03 \x01(\x0e\x32-.performance.metrics.v1alpha1.MetricsIntervalR\x08interval\x12\x39\n\x05range\x18\x04 \x01(\x0b\x32#.performance.metrics.v1alpha1.RangeR\x05range\x12\x12\n\x04page\x18\x05 \x01(\x05R\x04page\x12\x12\n\x04size\x18\x06 \x01(\x05R\x04size\x1a\x39\n\x0bLabelsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"\x92\x01\n\x12GetMetricsResponse\x12@\n\x06memory\x18\x01 \x03(\x0b\x32(.performance.metrics.v1alpha1.MetricItemR\x06memory\x12:\n\x03\x63pu\x18\x02 \x03(\x0b\x32(.performance.metrics.v1alpha1.MetricItemR\x03\x63pu\"\xa8\x01\n\x17GetTektonMetricsRequest\x12*\n\x11name_pipeline_run\x18\x01 \x01(\tR\x0fnamePipelineRun\x12\x39\n\x05range\x18\x02 \x01(\x0b\x32#.performance.metrics.v1alpha1.RangeR\x05range\x12\x12\n\x04page\x18\x03 \x01(\x05R\x04page\x12\x12\n\x04size\x18\x04 \x01(\x05R\x04size\"d\n\x18GetTektonMetricsResponse\x12H\n\x07results\x18\x01 \x03(\x0b\x32..performance.metrics.v1alpha1.TektonMetricItemR\x07results*\xa9\x02\n\x0fMetricsInterval\x12 \n\x1cMETRICS_INTERVAL_UNSPECIFIED\x10\x00\x12\x1d\n\x19METRICS_INTERVAL_1_MUNITE\x10\x01\x12\x1e\n\x1aMETRICS_INTERVAL_5_MUNITES\x10\x02\x12\x1f\n\x1bMETRICS_INTERVAL_15_MUNITES\x10\x03\x12\x1f\n\x1bMETRICS_INTERVAL_30_MUNITES\x10\x04\x12\x1b\n\x17METRICS_INTERVAL_1_HOUR\x10\x05\x12\x1d\n\x19METRICS_INTERVAL_12_HOURS\x10\x06\x12\x1a\n\x16METRICS_INTERVAL_1_DAY\x10\x07\x12\x1b\n\x17METRICS_INTERVAL_1_WEEK\x10\x08\x32\x8c\x02\n\x11MetricsAPIService\x12q\n\nGetMetrics\x12/.performance.metrics.v1alpha1.GetMetricsRequest\x1a\x30.performance.metrics.v1alpha1.GetMetricsResponse\"\x00\x12\x83\x01\n\x10GetTektonMetrics\x12\x35.performance.metrics.v1alpha1.GetTektonMetricsRequest\x1a\x36.performance.metrics.v1alpha1.GetTektonMetricsResponse\"\x00\x42\xb0\x01\n&io.cuemby.performance.metrics.v1alpha1B\x0fMetricsApiProtoP\x01Z/github.com/performance-grpc-sdk/metricsv1alpha1\xa2\x02\x03PFX\xaa\x02\x1cPerformance.Metrics.V1Alpha1\xca\x02\x1cPerformance\\Metrics\\V1Alpha1b\x06proto3'
  ,
  dependencies=[performance_dot_metrics_dot_v1alpha1_dot_metrics__pb2.DESCRIPTOR,])

_METRICSINTERVAL = _descriptor.EnumDescriptor(
  name='MetricsInterval',
  full_name='performance.metrics.v1alpha1.MetricsInterval',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='METRICS_INTERVAL_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='METRICS_INTERVAL_1_MUNITE', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='METRICS_INTERVAL_5_MUNITES', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='METRICS_INTERVAL_15_MUNITES', index=3, number=3,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='METRICS_INTERVAL_30_MUNITES', index=4, number=4,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='METRICS_INTERVAL_1_HOUR', index=5, number=5,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='METRICS_INTERVAL_12_HOURS', index=6, number=6,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='METRICS_INTERVAL_1_DAY', index=7, number=7,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='METRICS_INTERVAL_1_WEEK', index=8, number=8,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1010,
  serialized_end=1307,
)
_sym_db.RegisterEnumDescriptor(_METRICSINTERVAL)

MetricsInterval = enum_type_wrapper.EnumTypeWrapper(_METRICSINTERVAL)
METRICS_INTERVAL_UNSPECIFIED = 0
METRICS_INTERVAL_1_MUNITE = 1
METRICS_INTERVAL_5_MUNITES = 2
METRICS_INTERVAL_15_MUNITES = 3
METRICS_INTERVAL_30_MUNITES = 4
METRICS_INTERVAL_1_HOUR = 5
METRICS_INTERVAL_12_HOURS = 6
METRICS_INTERVAL_1_DAY = 7
METRICS_INTERVAL_1_WEEK = 8



_RANGE = _descriptor.Descriptor(
  name='Range',
  full_name='performance.metrics.v1alpha1.Range',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='date_from', full_name='performance.metrics.v1alpha1.Range.date_from', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='dateFrom', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='date_to', full_name='performance.metrics.v1alpha1.Range.date_to', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='dateTo', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='timezone', full_name='performance.metrics.v1alpha1.Range.timezone', index=2,
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
  serialized_start=124,
  serialized_end=213,
)


_GETMETRICSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='performance.metrics.v1alpha1.GetMetricsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='performance.metrics.v1alpha1.GetMetricsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='performance.metrics.v1alpha1.GetMetricsRequest.LabelsEntry.value', index=1,
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
  serialized_start=528,
  serialized_end=585,
)

_GETMETRICSREQUEST = _descriptor.Descriptor(
  name='GetMetricsRequest',
  full_name='performance.metrics.v1alpha1.GetMetricsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='labels', full_name='performance.metrics.v1alpha1.GetMetricsRequest.labels', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='labels', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='containers', full_name='performance.metrics.v1alpha1.GetMetricsRequest.containers', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='containers', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='interval', full_name='performance.metrics.v1alpha1.GetMetricsRequest.interval', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='interval', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='range', full_name='performance.metrics.v1alpha1.GetMetricsRequest.range', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='range', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page', full_name='performance.metrics.v1alpha1.GetMetricsRequest.page', index=4,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='page', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='size', full_name='performance.metrics.v1alpha1.GetMetricsRequest.size', index=5,
      number=6, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='size', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_GETMETRICSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=216,
  serialized_end=585,
)


_GETMETRICSRESPONSE = _descriptor.Descriptor(
  name='GetMetricsResponse',
  full_name='performance.metrics.v1alpha1.GetMetricsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='memory', full_name='performance.metrics.v1alpha1.GetMetricsResponse.memory', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='memory', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='cpu', full_name='performance.metrics.v1alpha1.GetMetricsResponse.cpu', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='cpu', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=588,
  serialized_end=734,
)


_GETTEKTONMETRICSREQUEST = _descriptor.Descriptor(
  name='GetTektonMetricsRequest',
  full_name='performance.metrics.v1alpha1.GetTektonMetricsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name_pipeline_run', full_name='performance.metrics.v1alpha1.GetTektonMetricsRequest.name_pipeline_run', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='namePipelineRun', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='range', full_name='performance.metrics.v1alpha1.GetTektonMetricsRequest.range', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='range', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page', full_name='performance.metrics.v1alpha1.GetTektonMetricsRequest.page', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='page', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='size', full_name='performance.metrics.v1alpha1.GetTektonMetricsRequest.size', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='size', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=737,
  serialized_end=905,
)


_GETTEKTONMETRICSRESPONSE = _descriptor.Descriptor(
  name='GetTektonMetricsResponse',
  full_name='performance.metrics.v1alpha1.GetTektonMetricsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='results', full_name='performance.metrics.v1alpha1.GetTektonMetricsResponse.results', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='results', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=907,
  serialized_end=1007,
)

_GETMETRICSREQUEST_LABELSENTRY.containing_type = _GETMETRICSREQUEST
_GETMETRICSREQUEST.fields_by_name['labels'].message_type = _GETMETRICSREQUEST_LABELSENTRY
_GETMETRICSREQUEST.fields_by_name['interval'].enum_type = _METRICSINTERVAL
_GETMETRICSREQUEST.fields_by_name['range'].message_type = _RANGE
_GETMETRICSRESPONSE.fields_by_name['memory'].message_type = performance_dot_metrics_dot_v1alpha1_dot_metrics__pb2._METRICITEM
_GETMETRICSRESPONSE.fields_by_name['cpu'].message_type = performance_dot_metrics_dot_v1alpha1_dot_metrics__pb2._METRICITEM
_GETTEKTONMETRICSREQUEST.fields_by_name['range'].message_type = _RANGE
_GETTEKTONMETRICSRESPONSE.fields_by_name['results'].message_type = performance_dot_metrics_dot_v1alpha1_dot_metrics__pb2._TEKTONMETRICITEM
DESCRIPTOR.message_types_by_name['Range'] = _RANGE
DESCRIPTOR.message_types_by_name['GetMetricsRequest'] = _GETMETRICSREQUEST
DESCRIPTOR.message_types_by_name['GetMetricsResponse'] = _GETMETRICSRESPONSE
DESCRIPTOR.message_types_by_name['GetTektonMetricsRequest'] = _GETTEKTONMETRICSREQUEST
DESCRIPTOR.message_types_by_name['GetTektonMetricsResponse'] = _GETTEKTONMETRICSRESPONSE
DESCRIPTOR.enum_types_by_name['MetricsInterval'] = _METRICSINTERVAL
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Range = _reflection.GeneratedProtocolMessageType('Range', (_message.Message,), {
  'DESCRIPTOR' : _RANGE,
  '__module__' : 'performance.metrics.v1alpha1.metrics_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.metrics.v1alpha1.Range)
  })
_sym_db.RegisterMessage(Range)

GetMetricsRequest = _reflection.GeneratedProtocolMessageType('GetMetricsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _GETMETRICSREQUEST_LABELSENTRY,
    '__module__' : 'performance.metrics.v1alpha1.metrics_api_pb2'
    # @@protoc_insertion_point(class_scope:performance.metrics.v1alpha1.GetMetricsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _GETMETRICSREQUEST,
  '__module__' : 'performance.metrics.v1alpha1.metrics_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.metrics.v1alpha1.GetMetricsRequest)
  })
_sym_db.RegisterMessage(GetMetricsRequest)
_sym_db.RegisterMessage(GetMetricsRequest.LabelsEntry)

GetMetricsResponse = _reflection.GeneratedProtocolMessageType('GetMetricsResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETMETRICSRESPONSE,
  '__module__' : 'performance.metrics.v1alpha1.metrics_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.metrics.v1alpha1.GetMetricsResponse)
  })
_sym_db.RegisterMessage(GetMetricsResponse)

GetTektonMetricsRequest = _reflection.GeneratedProtocolMessageType('GetTektonMetricsRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETTEKTONMETRICSREQUEST,
  '__module__' : 'performance.metrics.v1alpha1.metrics_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.metrics.v1alpha1.GetTektonMetricsRequest)
  })
_sym_db.RegisterMessage(GetTektonMetricsRequest)

GetTektonMetricsResponse = _reflection.GeneratedProtocolMessageType('GetTektonMetricsResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETTEKTONMETRICSRESPONSE,
  '__module__' : 'performance.metrics.v1alpha1.metrics_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.metrics.v1alpha1.GetTektonMetricsResponse)
  })
_sym_db.RegisterMessage(GetTektonMetricsResponse)


DESCRIPTOR._options = None
_GETMETRICSREQUEST_LABELSENTRY._options = None

_METRICSAPISERVICE = _descriptor.ServiceDescriptor(
  name='MetricsAPIService',
  full_name='performance.metrics.v1alpha1.MetricsAPIService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1310,
  serialized_end=1578,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetMetrics',
    full_name='performance.metrics.v1alpha1.MetricsAPIService.GetMetrics',
    index=0,
    containing_service=None,
    input_type=_GETMETRICSREQUEST,
    output_type=_GETMETRICSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetTektonMetrics',
    full_name='performance.metrics.v1alpha1.MetricsAPIService.GetTektonMetrics',
    index=1,
    containing_service=None,
    input_type=_GETTEKTONMETRICSREQUEST,
    output_type=_GETTEKTONMETRICSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_METRICSAPISERVICE)

DESCRIPTOR.services_by_name['MetricsAPIService'] = _METRICSAPISERVICE

# @@protoc_insertion_point(module_scope)
