# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/metrics/v1alpha1/metrics.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='performance/metrics/v1alpha1/metrics.proto',
  package='performance.metrics.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n&io.cuemby.performance.metrics.v1alpha1B\014MetricsProtoP\001Z/github.com/performance-grpc-sdk/metricsv1alpha1\242\002\003PFX\252\002\034Performance.Metrics.V1Alpha1\312\002\034Performance\\Metrics\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n*performance/metrics/v1alpha1/metrics.proto\x12\x1cperformance.metrics.v1alpha1\"p\n\nMetricItem\x12\x12\n\x04\x64\x61te\x18\x01 \x01(\tR\x04\x64\x61te\x12\x1c\n\tcontainer\x18\x02 \x01(\tR\tcontainer\x12\x1a\n\x08resource\x18\x03 \x01(\tR\x08resource\x12\x14\n\x05value\x18\x04 \x01(\x01R\x05valueB\xad\x01\n&io.cuemby.performance.metrics.v1alpha1B\x0cMetricsProtoP\x01Z/github.com/performance-grpc-sdk/metricsv1alpha1\xa2\x02\x03PFX\xaa\x02\x1cPerformance.Metrics.V1Alpha1\xca\x02\x1cPerformance\\Metrics\\V1Alpha1b\x06proto3'
)




_METRICITEM = _descriptor.Descriptor(
  name='MetricItem',
  full_name='performance.metrics.v1alpha1.MetricItem',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='date', full_name='performance.metrics.v1alpha1.MetricItem.date', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='date', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='container', full_name='performance.metrics.v1alpha1.MetricItem.container', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='container', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='resource', full_name='performance.metrics.v1alpha1.MetricItem.resource', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='resource', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='performance.metrics.v1alpha1.MetricItem.value', index=3,
      number=4, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='value', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=76,
  serialized_end=188,
)

DESCRIPTOR.message_types_by_name['MetricItem'] = _METRICITEM
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MetricItem = _reflection.GeneratedProtocolMessageType('MetricItem', (_message.Message,), {
  'DESCRIPTOR' : _METRICITEM,
  '__module__' : 'performance.metrics.v1alpha1.metrics_pb2'
  # @@protoc_insertion_point(class_scope:performance.metrics.v1alpha1.MetricItem)
  })
_sym_db.RegisterMessage(MetricItem)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
