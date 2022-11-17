# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vault/v1alpha1/vault.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='vault/v1alpha1/vault.proto',
  package='vault.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n\030io.cuemby.vault.v1alpha1B\nVaultProtoP\001Z1github.com/cuemby/ccp-vault-service/vaultv1alpha1\242\002\003PPX\252\002\016Vault.V1Alpha1\312\002\016Vault\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1avault/v1alpha1/vault.proto\x12\x0evault.v1alpha1\"\xc5\x01\n\x08Metadata\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12!\n\x0c\x63reated_time\x18\x02 \x01(\tR\x0b\x63reatedTime\x12\'\n\x0f\x63ustom_metadata\x18\x03 \x01(\tR\x0e\x63ustomMetadata\x12#\n\rdeletion_time\x18\x04 \x01(\tR\x0c\x64\x65letionTime\x12\x1c\n\tdestroyed\x18\x05 \x01(\x08R\tdestroyed\x12\x18\n\x07version\x18\x06 \x01(\x05R\x07version\"\x7f\n\nSecretData\x12\x38\n\x04\x64\x61ta\x18\x01 \x03(\x0b\x32$.vault.v1alpha1.SecretData.DataEntryR\x04\x64\x61ta\x1a\x37\n\tDataEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\",\n\x0eSecretWarnings\x12\x1a\n\x08warnings\x18\x01 \x03(\tR\x08warnings\"\xcb\x02\n\x06Secret\x12\'\n\x0forganization_id\x18\x01 \x01(\tR\x0eorganizationId\x12\x1d\n\nproject_id\x18\x02 \x01(\tR\tprojectId\x12%\n\x0e\x61pplication_id\x18\x03 \x01(\tR\rapplicationId\x12\x1c\n\tnamespace\x18\x04 \x01(\tR\tnamespace\x12\x12\n\x04name\x18\x05 \x01(\tR\x04name\x12\x34\n\x08metadata\x18\x06 \x01(\x0b\x32\x18.vault.v1alpha1.MetadataR\x08metadata\x12.\n\x04\x64\x61ta\x18\x07 \x01(\x0b\x32\x1a.vault.v1alpha1.SecretDataR\x04\x64\x61ta\x12:\n\x08warnings\x18\x08 \x01(\x0b\x32\x1e.vault.v1alpha1.SecretWarningsR\x08warnings\"x\n\x10TokenIntegration\x12\'\n\x0forganization_id\x18\x01 \x01(\tR\x0eorganizationId\x12%\n\x0eintegration_id\x18\x02 \x01(\tR\rintegrationId\x12\x14\n\x05token\x18\x03 \x01(\tR\x05token\"B\n\x10\x42lockchainSecret\x12.\n\x04\x64\x61ta\x18\x03 \x01(\x0b\x32\x1a.vault.v1alpha1.SecretDataR\x04\x64\x61taB\x83\x01\n\x18io.cuemby.vault.v1alpha1B\nVaultProtoP\x01Z1github.com/cuemby/ccp-vault-service/vaultv1alpha1\xa2\x02\x03PPX\xaa\x02\x0eVault.V1Alpha1\xca\x02\x0eVault\\V1Alpha1b\x06proto3'
)




_METADATA = _descriptor.Descriptor(
  name='Metadata',
  full_name='vault.v1alpha1.Metadata',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='vault.v1alpha1.Metadata.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='created_time', full_name='vault.v1alpha1.Metadata.created_time', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='createdTime', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='custom_metadata', full_name='vault.v1alpha1.Metadata.custom_metadata', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='customMetadata', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='deletion_time', full_name='vault.v1alpha1.Metadata.deletion_time', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='deletionTime', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='destroyed', full_name='vault.v1alpha1.Metadata.destroyed', index=4,
      number=5, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='destroyed', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='version', full_name='vault.v1alpha1.Metadata.version', index=5,
      number=6, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='version', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=47,
  serialized_end=244,
)


_SECRETDATA_DATAENTRY = _descriptor.Descriptor(
  name='DataEntry',
  full_name='vault.v1alpha1.SecretData.DataEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='vault.v1alpha1.SecretData.DataEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='vault.v1alpha1.SecretData.DataEntry.value', index=1,
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
  serialized_start=318,
  serialized_end=373,
)

_SECRETDATA = _descriptor.Descriptor(
  name='SecretData',
  full_name='vault.v1alpha1.SecretData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='vault.v1alpha1.SecretData.data', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='data', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_SECRETDATA_DATAENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=246,
  serialized_end=373,
)


_SECRETWARNINGS = _descriptor.Descriptor(
  name='SecretWarnings',
  full_name='vault.v1alpha1.SecretWarnings',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='warnings', full_name='vault.v1alpha1.SecretWarnings.warnings', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='warnings', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=375,
  serialized_end=419,
)


_SECRET = _descriptor.Descriptor(
  name='Secret',
  full_name='vault.v1alpha1.Secret',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='vault.v1alpha1.Secret.organization_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='vault.v1alpha1.Secret.project_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='application_id', full_name='vault.v1alpha1.Secret.application_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='applicationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='namespace', full_name='vault.v1alpha1.Secret.namespace', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='namespace', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='vault.v1alpha1.Secret.name', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='metadata', full_name='vault.v1alpha1.Secret.metadata', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='metadata', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='data', full_name='vault.v1alpha1.Secret.data', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='data', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='warnings', full_name='vault.v1alpha1.Secret.warnings', index=7,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='warnings', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=422,
  serialized_end=753,
)


_TOKENINTEGRATION = _descriptor.Descriptor(
  name='TokenIntegration',
  full_name='vault.v1alpha1.TokenIntegration',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='vault.v1alpha1.TokenIntegration.organization_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='integration_id', full_name='vault.v1alpha1.TokenIntegration.integration_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integrationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='token', full_name='vault.v1alpha1.TokenIntegration.token', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='token', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=755,
  serialized_end=875,
)


_BLOCKCHAINSECRET = _descriptor.Descriptor(
  name='BlockchainSecret',
  full_name='vault.v1alpha1.BlockchainSecret',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='vault.v1alpha1.BlockchainSecret.data', index=0,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='data', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=877,
  serialized_end=943,
)

_SECRETDATA_DATAENTRY.containing_type = _SECRETDATA
_SECRETDATA.fields_by_name['data'].message_type = _SECRETDATA_DATAENTRY
_SECRET.fields_by_name['metadata'].message_type = _METADATA
_SECRET.fields_by_name['data'].message_type = _SECRETDATA
_SECRET.fields_by_name['warnings'].message_type = _SECRETWARNINGS
_BLOCKCHAINSECRET.fields_by_name['data'].message_type = _SECRETDATA
DESCRIPTOR.message_types_by_name['Metadata'] = _METADATA
DESCRIPTOR.message_types_by_name['SecretData'] = _SECRETDATA
DESCRIPTOR.message_types_by_name['SecretWarnings'] = _SECRETWARNINGS
DESCRIPTOR.message_types_by_name['Secret'] = _SECRET
DESCRIPTOR.message_types_by_name['TokenIntegration'] = _TOKENINTEGRATION
DESCRIPTOR.message_types_by_name['BlockchainSecret'] = _BLOCKCHAINSECRET
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Metadata = _reflection.GeneratedProtocolMessageType('Metadata', (_message.Message,), {
  'DESCRIPTOR' : _METADATA,
  '__module__' : 'vault.v1alpha1.vault_pb2'
  # @@protoc_insertion_point(class_scope:vault.v1alpha1.Metadata)
  })
_sym_db.RegisterMessage(Metadata)

SecretData = _reflection.GeneratedProtocolMessageType('SecretData', (_message.Message,), {

  'DataEntry' : _reflection.GeneratedProtocolMessageType('DataEntry', (_message.Message,), {
    'DESCRIPTOR' : _SECRETDATA_DATAENTRY,
    '__module__' : 'vault.v1alpha1.vault_pb2'
    # @@protoc_insertion_point(class_scope:vault.v1alpha1.SecretData.DataEntry)
    })
  ,
  'DESCRIPTOR' : _SECRETDATA,
  '__module__' : 'vault.v1alpha1.vault_pb2'
  # @@protoc_insertion_point(class_scope:vault.v1alpha1.SecretData)
  })
_sym_db.RegisterMessage(SecretData)
_sym_db.RegisterMessage(SecretData.DataEntry)

SecretWarnings = _reflection.GeneratedProtocolMessageType('SecretWarnings', (_message.Message,), {
  'DESCRIPTOR' : _SECRETWARNINGS,
  '__module__' : 'vault.v1alpha1.vault_pb2'
  # @@protoc_insertion_point(class_scope:vault.v1alpha1.SecretWarnings)
  })
_sym_db.RegisterMessage(SecretWarnings)

Secret = _reflection.GeneratedProtocolMessageType('Secret', (_message.Message,), {
  'DESCRIPTOR' : _SECRET,
  '__module__' : 'vault.v1alpha1.vault_pb2'
  # @@protoc_insertion_point(class_scope:vault.v1alpha1.Secret)
  })
_sym_db.RegisterMessage(Secret)

TokenIntegration = _reflection.GeneratedProtocolMessageType('TokenIntegration', (_message.Message,), {
  'DESCRIPTOR' : _TOKENINTEGRATION,
  '__module__' : 'vault.v1alpha1.vault_pb2'
  # @@protoc_insertion_point(class_scope:vault.v1alpha1.TokenIntegration)
  })
_sym_db.RegisterMessage(TokenIntegration)

BlockchainSecret = _reflection.GeneratedProtocolMessageType('BlockchainSecret', (_message.Message,), {
  'DESCRIPTOR' : _BLOCKCHAINSECRET,
  '__module__' : 'vault.v1alpha1.vault_pb2'
  # @@protoc_insertion_point(class_scope:vault.v1alpha1.BlockchainSecret)
  })
_sym_db.RegisterMessage(BlockchainSecret)


DESCRIPTOR._options = None
_SECRETDATA_DATAENTRY._options = None
# @@protoc_insertion_point(module_scope)
