# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/logs/v1alpha1/logs_agent_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from performance.logs.v1alpha1 import logs_pb2 as performance_dot_logs_dot_v1alpha1_dot_logs__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='performance/logs/v1alpha1/logs_agent_api.proto',
  package='performance.logs.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n#io.cuemby.performance.logs.v1alpha1B\021LogsAgentApiProtoP\001Z,github.com/performance-grpc-sdk/logsv1alpha1\242\002\003PFX\252\002\031Performance.Logs.V1Alpha1\312\002\031Performance\\Logs\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n.performance/logs/v1alpha1/logs_agent_api.proto\x12\x19performance.logs.v1alpha1\x1a$performance/logs/v1alpha1/logs.proto\"\xeb\x01\n\x0fSaveLogsRequest\x12!\n\x0c\x63luster_name\x18\x01 \x01(\tR\x0b\x63lusterName\x12H\n\x04meta\x18\x02 \x03(\x0b\x32\x34.performance.logs.v1alpha1.SaveLogsRequest.MetaEntryR\x04meta\x12\x32\n\x04logs\x18\x03 \x03(\x0b\x32\x1e.performance.logs.v1alpha1.LogR\x04logs\x1a\x37\n\tMetaEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\",\n\x10SaveLogsResponse\x12\x18\n\x07success\x18\x01 \x01(\x08R\x07success\"\x90\x01\n\x03Log\x12\x12\n\x04\x64\x61te\x18\x01 \x01(\x03R\x04\x64\x61te\x12\x10\n\x03log\x18\x02 \x01(\tR\x03log\x12L\n\nkubernetes\x18\x03 \x01(\x0b\x32,.performance.logs.v1alpha1.LogKuebrnetesInfoR\nkubernetes\x12\x15\n\x06log_id\x18\x04 \x01(\tR\x05logId\"\xf6\x05\n\x11LogKuebrnetesInfo\x12\x19\n\x08pod_name\x18\x01 \x01(\tR\x07podName\x12%\n\x0enamespace_name\x18\x02 \x01(\tR\rnamespaceName\x12\x15\n\x06pod_id\x18\x03 \x01(\tR\x05podId\x12P\n\x06labels\x18\x04 \x03(\x0b\x32\x38.performance.logs.v1alpha1.LogKuebrnetesInfo.LabelsEntryR\x06labels\x12_\n\x0b\x61nnotations\x18\x05 \x03(\x0b\x32=.performance.logs.v1alpha1.LogKuebrnetesInfo.AnnotationsEntryR\x0b\x61nnotations\x12\x12\n\x04host\x18\x06 \x01(\tR\x04host\x12%\n\x0e\x63ontainer_name\x18\x07 \x01(\tR\rcontainerName\x12\x1b\n\tdocker_id\x18\x08 \x01(\tR\x08\x64ockerId\x12%\n\x0e\x63ontainer_hash\x18\n \x01(\tR\rcontainerHash\x12\'\n\x0f\x63ontainer_image\x18\x0b \x01(\tR\x0e\x63ontainerImage\x12\x1d\n\nowner_name\x18\x0c \x01(\tR\townerName\x12\x30\n\x14owner_kubernetes_uid\x18\r \x01(\tR\x12ownerKubernetesUid\x12\x1d\n\nowner_kind\x18\x0e \x01(\tR\townerKind\x12*\n\x11owner_api_version\x18\x0f \x01(\tR\x0fownerApiVersion\x12\x16\n\x06status\x18\x10 \x01(\tR\x06status\x1a\x39\n\x0bLabelsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a>\n\x10\x41nnotationsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x32\x80\x01\n\x13LogsAgentAPIService\x12i\n\x08SaveLogs\x12*.performance.logs.v1alpha1.SaveLogsRequest\x1a+.performance.logs.v1alpha1.SaveLogsResponse\"\x00(\x01\x30\x01\x42\xa6\x01\n#io.cuemby.performance.logs.v1alpha1B\x11LogsAgentApiProtoP\x01Z,github.com/performance-grpc-sdk/logsv1alpha1\xa2\x02\x03PFX\xaa\x02\x19Performance.Logs.V1Alpha1\xca\x02\x19Performance\\Logs\\V1Alpha1b\x06proto3'
  ,
  dependencies=[performance_dot_logs_dot_v1alpha1_dot_logs__pb2.DESCRIPTOR,])




_SAVELOGSREQUEST_METAENTRY = _descriptor.Descriptor(
  name='MetaEntry',
  full_name='performance.logs.v1alpha1.SaveLogsRequest.MetaEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='performance.logs.v1alpha1.SaveLogsRequest.MetaEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='performance.logs.v1alpha1.SaveLogsRequest.MetaEntry.value', index=1,
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
  serialized_start=296,
  serialized_end=351,
)

_SAVELOGSREQUEST = _descriptor.Descriptor(
  name='SaveLogsRequest',
  full_name='performance.logs.v1alpha1.SaveLogsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='cluster_name', full_name='performance.logs.v1alpha1.SaveLogsRequest.cluster_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='clusterName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='meta', full_name='performance.logs.v1alpha1.SaveLogsRequest.meta', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='meta', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='logs', full_name='performance.logs.v1alpha1.SaveLogsRequest.logs', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='logs', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_SAVELOGSREQUEST_METAENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=116,
  serialized_end=351,
)


_SAVELOGSRESPONSE = _descriptor.Descriptor(
  name='SaveLogsResponse',
  full_name='performance.logs.v1alpha1.SaveLogsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='performance.logs.v1alpha1.SaveLogsResponse.success', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='success', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=353,
  serialized_end=397,
)


_LOG = _descriptor.Descriptor(
  name='Log',
  full_name='performance.logs.v1alpha1.Log',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='date', full_name='performance.logs.v1alpha1.Log.date', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='date', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='log', full_name='performance.logs.v1alpha1.Log.log', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='log', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='kubernetes', full_name='performance.logs.v1alpha1.Log.kubernetes', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='kubernetes', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='log_id', full_name='performance.logs.v1alpha1.Log.log_id', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='logId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=400,
  serialized_end=544,
)


_LOGKUEBRNETESINFO_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.LabelsEntry.value', index=1,
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
  serialized_start=1184,
  serialized_end=1241,
)

_LOGKUEBRNETESINFO_ANNOTATIONSENTRY = _descriptor.Descriptor(
  name='AnnotationsEntry',
  full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.AnnotationsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.AnnotationsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.AnnotationsEntry.value', index=1,
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
  serialized_start=1243,
  serialized_end=1305,
)

_LOGKUEBRNETESINFO = _descriptor.Descriptor(
  name='LogKuebrnetesInfo',
  full_name='performance.logs.v1alpha1.LogKuebrnetesInfo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='pod_name', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.pod_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='podName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='namespace_name', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.namespace_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='namespaceName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='pod_id', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.pod_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='podId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.labels', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='labels', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='annotations', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.annotations', index=4,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='annotations', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='host', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.host', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='host', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='container_name', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.container_name', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='containerName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='docker_id', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.docker_id', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='dockerId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='container_hash', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.container_hash', index=8,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='containerHash', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='container_image', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.container_image', index=9,
      number=11, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='containerImage', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='owner_name', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.owner_name', index=10,
      number=12, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ownerName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='owner_kubernetes_uid', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.owner_kubernetes_uid', index=11,
      number=13, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ownerKubernetesUid', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='owner_kind', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.owner_kind', index=12,
      number=14, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ownerKind', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='owner_api_version', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.owner_api_version', index=13,
      number=15, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ownerApiVersion', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='performance.logs.v1alpha1.LogKuebrnetesInfo.status', index=14,
      number=16, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LOGKUEBRNETESINFO_LABELSENTRY, _LOGKUEBRNETESINFO_ANNOTATIONSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=547,
  serialized_end=1305,
)

_SAVELOGSREQUEST_METAENTRY.containing_type = _SAVELOGSREQUEST
_SAVELOGSREQUEST.fields_by_name['meta'].message_type = _SAVELOGSREQUEST_METAENTRY
_SAVELOGSREQUEST.fields_by_name['logs'].message_type = _LOG
_LOG.fields_by_name['kubernetes'].message_type = _LOGKUEBRNETESINFO
_LOGKUEBRNETESINFO_LABELSENTRY.containing_type = _LOGKUEBRNETESINFO
_LOGKUEBRNETESINFO_ANNOTATIONSENTRY.containing_type = _LOGKUEBRNETESINFO
_LOGKUEBRNETESINFO.fields_by_name['labels'].message_type = _LOGKUEBRNETESINFO_LABELSENTRY
_LOGKUEBRNETESINFO.fields_by_name['annotations'].message_type = _LOGKUEBRNETESINFO_ANNOTATIONSENTRY
DESCRIPTOR.message_types_by_name['SaveLogsRequest'] = _SAVELOGSREQUEST
DESCRIPTOR.message_types_by_name['SaveLogsResponse'] = _SAVELOGSRESPONSE
DESCRIPTOR.message_types_by_name['Log'] = _LOG
DESCRIPTOR.message_types_by_name['LogKuebrnetesInfo'] = _LOGKUEBRNETESINFO
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

SaveLogsRequest = _reflection.GeneratedProtocolMessageType('SaveLogsRequest', (_message.Message,), {

  'MetaEntry' : _reflection.GeneratedProtocolMessageType('MetaEntry', (_message.Message,), {
    'DESCRIPTOR' : _SAVELOGSREQUEST_METAENTRY,
    '__module__' : 'performance.logs.v1alpha1.logs_agent_api_pb2'
    # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.SaveLogsRequest.MetaEntry)
    })
  ,
  'DESCRIPTOR' : _SAVELOGSREQUEST,
  '__module__' : 'performance.logs.v1alpha1.logs_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.SaveLogsRequest)
  })
_sym_db.RegisterMessage(SaveLogsRequest)
_sym_db.RegisterMessage(SaveLogsRequest.MetaEntry)

SaveLogsResponse = _reflection.GeneratedProtocolMessageType('SaveLogsResponse', (_message.Message,), {
  'DESCRIPTOR' : _SAVELOGSRESPONSE,
  '__module__' : 'performance.logs.v1alpha1.logs_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.SaveLogsResponse)
  })
_sym_db.RegisterMessage(SaveLogsResponse)

Log = _reflection.GeneratedProtocolMessageType('Log', (_message.Message,), {
  'DESCRIPTOR' : _LOG,
  '__module__' : 'performance.logs.v1alpha1.logs_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.Log)
  })
_sym_db.RegisterMessage(Log)

LogKuebrnetesInfo = _reflection.GeneratedProtocolMessageType('LogKuebrnetesInfo', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LOGKUEBRNETESINFO_LABELSENTRY,
    '__module__' : 'performance.logs.v1alpha1.logs_agent_api_pb2'
    # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.LogKuebrnetesInfo.LabelsEntry)
    })
  ,

  'AnnotationsEntry' : _reflection.GeneratedProtocolMessageType('AnnotationsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LOGKUEBRNETESINFO_ANNOTATIONSENTRY,
    '__module__' : 'performance.logs.v1alpha1.logs_agent_api_pb2'
    # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.LogKuebrnetesInfo.AnnotationsEntry)
    })
  ,
  'DESCRIPTOR' : _LOGKUEBRNETESINFO,
  '__module__' : 'performance.logs.v1alpha1.logs_agent_api_pb2'
  # @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.LogKuebrnetesInfo)
  })
_sym_db.RegisterMessage(LogKuebrnetesInfo)
_sym_db.RegisterMessage(LogKuebrnetesInfo.LabelsEntry)
_sym_db.RegisterMessage(LogKuebrnetesInfo.AnnotationsEntry)


DESCRIPTOR._options = None
_SAVELOGSREQUEST_METAENTRY._options = None
_LOGKUEBRNETESINFO_LABELSENTRY._options = None
_LOGKUEBRNETESINFO_ANNOTATIONSENTRY._options = None

_LOGSAGENTAPISERVICE = _descriptor.ServiceDescriptor(
  name='LogsAgentAPIService',
  full_name='performance.logs.v1alpha1.LogsAgentAPIService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1308,
  serialized_end=1436,
  methods=[
  _descriptor.MethodDescriptor(
    name='SaveLogs',
    full_name='performance.logs.v1alpha1.LogsAgentAPIService.SaveLogs',
    index=0,
    containing_service=None,
    input_type=_SAVELOGSREQUEST,
    output_type=_SAVELOGSRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_LOGSAGENTAPISERVICE)

DESCRIPTOR.services_by_name['LogsAgentAPIService'] = _LOGSAGENTAPISERVICE

# @@protoc_insertion_point(module_scope)
