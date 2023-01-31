# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/quotas/v1alpha1/registry_quotas_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from artifacts.quotas.v1alpha1 import registry_quotas_pb2 as artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='artifacts/quotas/v1alpha1/registry_quotas_api.proto',
  package='artifacts.quotas.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n#io.cuemby.artifacts.quotas.v1alpha1B\026RegistryQuotasProtoAPIP\001Z:github.com/cuemby/ccp-sdk/gen/go/artifacts/quotas/v1alpha1\242\002\003PPX\252\002\031Artifacts.Quotas.V1Alpha1\312\002\031Artifacts\\Quotas\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n3artifacts/quotas/v1alpha1/registry_quotas_api.proto\x12\x19\x61rtifacts.quotas.v1alpha1\x1a/artifacts/quotas/v1alpha1/registry_quotas.proto\"\x8f\x01\n!ListQuotaArtifactRegistryResponse\x12R\n\x0fquotas_registry\x18\x01 \x03(\x0b\x32).artifacts.quotas.v1alpha1.QuotasRegistryR\x0equotasRegistry\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\"n\n\x1aUpdateQuotaRegistryRequest\x12P\n\x0equota_registry\x18\x01 \x01(\x0b\x32).artifacts.quotas.v1alpha1.QuotasRegistryR\rquotaRegistry\"\x87\x01\n\x1bUpdateQuotaRegistryResponse\x12P\n\x0equota_registry\x18\x01 \x01(\x0b\x32).artifacts.quotas.v1alpha1.QuotasRegistryR\rquotaRegistry\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\"\x8a\x02\n\x19ListQuotasRegistryRequest\x12\'\n\x0forganization_id\x18\x01 \x01(\tR\x0eorganizationId\x12\x1d\n\nproject_id\x18\x02 \x01(\tR\tprojectId\x12\'\n\x0frepository_name\x18\x03 \x01(\tR\x0erepositoryName\x12\x14\n\x05query\x18\x04 \x01(\tR\x05query\x12\x12\n\x04page\x18\x05 \x01(\rR\x04page\x12\x1b\n\tpage_size\x18\x06 \x01(\rR\x08pageSize\x12\x12\n\x04sort\x18\x07 \x01(\tR\x04sort\x12!\n\x0creference_id\x18\x08 \x01(\tR\x0breferenceId\"\xae\x04\n ListQuotaArtifactRegistryRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\'\n\x0forganization_id\x18\x02 \x01(\tR\x0eorganizationId\x12\x1d\n\nproject_id\x18\x03 \x01(\tR\tprojectId\x12\'\n\x0frepository_name\x18\x04 \x01(\tR\x0erepositoryName\x12\x14\n\x05query\x18\x05 \x01(\tR\x05query\x12\x12\n\x04page\x18\x06 \x01(\rR\x04page\x12\x1b\n\tpage_size\x18\x07 \x01(\rR\x08pageSize\x12\x12\n\x04sort\x18\x08 \x01(\tR\x04sort\x12!\n\x0creference_id\x18\t \x01(\tR\x0breferenceId\x12!\n\x0cproject_name\x18\n \x01(\tR\x0bprojectName\x12\x19\n\x08with_tag\x18\x0b \x01(\x08R\x07withTag\x12\x1d\n\nwith_label\x18\x0c \x01(\x08R\twithLabel\x12,\n\x12with_scan_overview\x18\r \x01(\x08R\x10withScanOverview\x12%\n\x0ewith_signature\x18\x0e \x01(\x08R\rwithSignature\x12\x32\n\x15with_immutable_status\x18\x0f \x01(\x08R\x13withImmutableStatus\x12%\n\x0ewith_accessory\x18\x10 \x01(\x08R\rwithAccessory\"\x88\x01\n\x1aListQuotasRegistryResponse\x12R\n\x0fquotas_registry\x18\x01 \x03(\x0b\x32).artifacts.quotas.v1alpha1.QuotasRegistryR\x0equotasRegistry\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status2\xbe\x03\n\x18RegistryQuotasAPIService\x12\x81\x01\n\x12ListQuotasRegistry\x12\x34.artifacts.quotas.v1alpha1.ListQuotasRegistryRequest\x1a\x35.artifacts.quotas.v1alpha1.ListQuotasRegistryResponse\x12\x84\x01\n\x13UpdateQuotaRegistry\x12\x35.artifacts.quotas.v1alpha1.UpdateQuotaRegistryRequest\x1a\x36.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse\x12\x96\x01\n\x19ListQuotaArtifactRegistry\x12;.artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest\x1a<.artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryResponseB\xb9\x01\n#io.cuemby.artifacts.quotas.v1alpha1B\x16RegistryQuotasProtoAPIP\x01Z:github.com/cuemby/ccp-sdk/gen/go/artifacts/quotas/v1alpha1\xa2\x02\x03PPX\xaa\x02\x19\x41rtifacts.Quotas.V1Alpha1\xca\x02\x19\x41rtifacts\\Quotas\\V1Alpha1b\x06proto3'
  ,
  dependencies=[artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__pb2.DESCRIPTOR,])




_LISTQUOTAARTIFACTREGISTRYRESPONSE = _descriptor.Descriptor(
  name='ListQuotaArtifactRegistryResponse',
  full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='quotas_registry', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryResponse.quotas_registry', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='quotasRegistry', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryResponse.status', index=1,
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
  serialized_start=132,
  serialized_end=275,
)


_UPDATEQUOTAREGISTRYREQUEST = _descriptor.Descriptor(
  name='UpdateQuotaRegistryRequest',
  full_name='artifacts.quotas.v1alpha1.UpdateQuotaRegistryRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='quota_registry', full_name='artifacts.quotas.v1alpha1.UpdateQuotaRegistryRequest.quota_registry', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='quotaRegistry', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=277,
  serialized_end=387,
)


_UPDATEQUOTAREGISTRYRESPONSE = _descriptor.Descriptor(
  name='UpdateQuotaRegistryResponse',
  full_name='artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='quota_registry', full_name='artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse.quota_registry', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='quotaRegistry', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse.status', index=1,
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
  serialized_start=390,
  serialized_end=525,
)


_LISTQUOTASREGISTRYREQUEST = _descriptor.Descriptor(
  name='ListQuotasRegistryRequest',
  full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryRequest.organization_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryRequest.project_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='repository_name', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryRequest.repository_name', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='repositoryName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='query', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryRequest.query', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='query', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryRequest.page', index=4,
      number=5, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='page', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryRequest.page_size', index=5,
      number=6, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pageSize', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='sort', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryRequest.sort', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sort', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='reference_id', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryRequest.reference_id', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='referenceId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_end=794,
)


_LISTQUOTAARTIFACTREGISTRYREQUEST = _descriptor.Descriptor(
  name='ListQuotaArtifactRegistryRequest',
  full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.organization_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.project_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='repository_name', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.repository_name', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='repositoryName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='query', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.query', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='query', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.page', index=5,
      number=6, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='page', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.page_size', index=6,
      number=7, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pageSize', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='sort', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.sort', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sort', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='reference_id', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.reference_id', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='referenceId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_name', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.project_name', index=9,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='with_tag', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.with_tag', index=10,
      number=11, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='withTag', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='with_label', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.with_label', index=11,
      number=12, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='withLabel', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='with_scan_overview', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.with_scan_overview', index=12,
      number=13, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='withScanOverview', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='with_signature', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.with_signature', index=13,
      number=14, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='withSignature', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='with_immutable_status', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.with_immutable_status', index=14,
      number=15, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='withImmutableStatus', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='with_accessory', full_name='artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest.with_accessory', index=15,
      number=16, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='withAccessory', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=797,
  serialized_end=1355,
)


_LISTQUOTASREGISTRYRESPONSE = _descriptor.Descriptor(
  name='ListQuotasRegistryResponse',
  full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='quotas_registry', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryResponse.quotas_registry', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='quotasRegistry', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='artifacts.quotas.v1alpha1.ListQuotasRegistryResponse.status', index=1,
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
  serialized_start=1358,
  serialized_end=1494,
)

_LISTQUOTAARTIFACTREGISTRYRESPONSE.fields_by_name['quotas_registry'].message_type = artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__pb2._QUOTASREGISTRY
_UPDATEQUOTAREGISTRYREQUEST.fields_by_name['quota_registry'].message_type = artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__pb2._QUOTASREGISTRY
_UPDATEQUOTAREGISTRYRESPONSE.fields_by_name['quota_registry'].message_type = artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__pb2._QUOTASREGISTRY
_LISTQUOTASREGISTRYRESPONSE.fields_by_name['quotas_registry'].message_type = artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__pb2._QUOTASREGISTRY
DESCRIPTOR.message_types_by_name['ListQuotaArtifactRegistryResponse'] = _LISTQUOTAARTIFACTREGISTRYRESPONSE
DESCRIPTOR.message_types_by_name['UpdateQuotaRegistryRequest'] = _UPDATEQUOTAREGISTRYREQUEST
DESCRIPTOR.message_types_by_name['UpdateQuotaRegistryResponse'] = _UPDATEQUOTAREGISTRYRESPONSE
DESCRIPTOR.message_types_by_name['ListQuotasRegistryRequest'] = _LISTQUOTASREGISTRYREQUEST
DESCRIPTOR.message_types_by_name['ListQuotaArtifactRegistryRequest'] = _LISTQUOTAARTIFACTREGISTRYREQUEST
DESCRIPTOR.message_types_by_name['ListQuotasRegistryResponse'] = _LISTQUOTASREGISTRYRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListQuotaArtifactRegistryResponse = _reflection.GeneratedProtocolMessageType('ListQuotaArtifactRegistryResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTQUOTAARTIFACTREGISTRYRESPONSE,
  '__module__' : 'artifacts.quotas.v1alpha1.registry_quotas_api_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryResponse)
  })
_sym_db.RegisterMessage(ListQuotaArtifactRegistryResponse)

UpdateQuotaRegistryRequest = _reflection.GeneratedProtocolMessageType('UpdateQuotaRegistryRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEQUOTAREGISTRYREQUEST,
  '__module__' : 'artifacts.quotas.v1alpha1.registry_quotas_api_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.quotas.v1alpha1.UpdateQuotaRegistryRequest)
  })
_sym_db.RegisterMessage(UpdateQuotaRegistryRequest)

UpdateQuotaRegistryResponse = _reflection.GeneratedProtocolMessageType('UpdateQuotaRegistryResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEQUOTAREGISTRYRESPONSE,
  '__module__' : 'artifacts.quotas.v1alpha1.registry_quotas_api_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse)
  })
_sym_db.RegisterMessage(UpdateQuotaRegistryResponse)

ListQuotasRegistryRequest = _reflection.GeneratedProtocolMessageType('ListQuotasRegistryRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTQUOTASREGISTRYREQUEST,
  '__module__' : 'artifacts.quotas.v1alpha1.registry_quotas_api_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.quotas.v1alpha1.ListQuotasRegistryRequest)
  })
_sym_db.RegisterMessage(ListQuotasRegistryRequest)

ListQuotaArtifactRegistryRequest = _reflection.GeneratedProtocolMessageType('ListQuotaArtifactRegistryRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTQUOTAARTIFACTREGISTRYREQUEST,
  '__module__' : 'artifacts.quotas.v1alpha1.registry_quotas_api_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest)
  })
_sym_db.RegisterMessage(ListQuotaArtifactRegistryRequest)

ListQuotasRegistryResponse = _reflection.GeneratedProtocolMessageType('ListQuotasRegistryResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTQUOTASREGISTRYRESPONSE,
  '__module__' : 'artifacts.quotas.v1alpha1.registry_quotas_api_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.quotas.v1alpha1.ListQuotasRegistryResponse)
  })
_sym_db.RegisterMessage(ListQuotasRegistryResponse)


DESCRIPTOR._options = None

_REGISTRYQUOTASAPISERVICE = _descriptor.ServiceDescriptor(
  name='RegistryQuotasAPIService',
  full_name='artifacts.quotas.v1alpha1.RegistryQuotasAPIService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1497,
  serialized_end=1943,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListQuotasRegistry',
    full_name='artifacts.quotas.v1alpha1.RegistryQuotasAPIService.ListQuotasRegistry',
    index=0,
    containing_service=None,
    input_type=_LISTQUOTASREGISTRYREQUEST,
    output_type=_LISTQUOTASREGISTRYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateQuotaRegistry',
    full_name='artifacts.quotas.v1alpha1.RegistryQuotasAPIService.UpdateQuotaRegistry',
    index=1,
    containing_service=None,
    input_type=_UPDATEQUOTAREGISTRYREQUEST,
    output_type=_UPDATEQUOTAREGISTRYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListQuotaArtifactRegistry',
    full_name='artifacts.quotas.v1alpha1.RegistryQuotasAPIService.ListQuotaArtifactRegistry',
    index=2,
    containing_service=None,
    input_type=_LISTQUOTAARTIFACTREGISTRYREQUEST,
    output_type=_LISTQUOTAARTIFACTREGISTRYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_REGISTRYQUOTASAPISERVICE)

DESCRIPTOR.services_by_name['RegistryQuotasAPIService'] = _REGISTRYQUOTASAPISERVICE

# @@protoc_insertion_point(module_scope)
