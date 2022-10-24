# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/thepower/v1alpha1/thepower.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='blockchain/thepower/v1alpha1/thepower.proto',
  package='blockchain.thepower.v1alpha1',
  syntax='proto3',
  serialized_options=b'Z=github.com/cuemby/ccp-sdk/gen/go/blockchain/thepower/v1alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n+blockchain/thepower/v1alpha1/thepower.proto\x12\x1c\x62lockchain.thepower.v1alpha1\"\xe6\x02\n\x07TpChain\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12!\n\x0c\x63hain_number\x18\x02 \x01(\x05R\x0b\x63hainNumber\x12\x17\n\x07user_id\x18\x03 \x01(\tR\x06userId\x12\x45\n\x0b\x63hain_nodes\x18\x04 \x03(\x0b\x32$.blockchain.thepower.v1alpha1.TpNodeR\nchainNodes\x12\x16\n\x06status\x18\x05 \x01(\tR\x06status\x12#\n\rerror_details\x18\x06 \x01(\tR\x0c\x65rrorDetails\x12\x1d\n\ncreated_at\x18\x07 \x01(\tR\tcreatedAt\x12\x1d\n\nupdated_at\x18\x08 \x01(\tR\tupdatedAt\x12M\n\x08settings\x18\t \x01(\x0b\x32\x31.blockchain.thepower.v1alpha1.TeaCeremonySettingsR\x08settings\"\xf5\x01\n\x06TpNode\x12\x1a\n\x08nodename\x18\x01 \x01(\tR\x08nodename\x12\x1b\n\ttpic_port\x18\x02 \x01(\x03R\x08tpicPort\x12\x19\n\x08\x61pi_port\x18\x03 \x01(\x03R\x07\x61piPort\x12\x1b\n\tapis_port\x18\x04 \x01(\x03R\x08\x61pisPort\x12\x17\n\x07\x63\x63_port\x18\x05 \x01(\x03R\x06\x63\x63Port\x12\x61\n\x13\x63rosschain_external\x18\x06 \x03(\x0b\x32\x30.blockchain.thepower.v1alpha1.CrosschainExternalR\x12\x63rosschainExternal\"<\n\x12\x43rosschainExternal\x12\x12\n\x04host\x18\x01 \x01(\tR\x04host\x12\x12\n\x04port\x18\x02 \x01(\x03R\x04port\"\xd0\x02\n\x13TeaCeremonySettings\x12\'\n\x0f\x63hain_blocktime\x18\x01 \x01(\x03R\x0e\x63hainBlocktime\x12!\n\x0c\x63hain_minsig\x18\x02 \x01(\x03R\x0b\x63hainMinsig\x12*\n\x11\x63hain_allow_empty\x18\x03 \x01(\x03R\x0f\x63hainAllowEmpty\x12(\n\x10\x63hain_patch_sigs\x18\x04 \x01(\x03R\x0e\x63hainPatchSigs\x12)\n\x10\x61llocblock_group\x18\x05 \x01(\x03R\x0f\x61llocblockGroup\x12\'\n\x0f\x61llocblock_last\x18\x06 \x01(\x03R\x0e\x61llocblockLast\x12\x18\n\x07\x66reegas\x18\x07 \x01(\x03R\x07\x66reegas\x12\x15\n\x06gas_sk\x18\x08 \x01(\x03R\x05gasSk\x12\x12\n\x04nosk\x18\t \x01(\x03R\x04noskB?Z=github.com/cuemby/ccp-sdk/gen/go/blockchain/thepower/v1alpha1b\x06proto3'
)




_TPCHAIN = _descriptor.Descriptor(
  name='TpChain',
  full_name='blockchain.thepower.v1alpha1.TpChain',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='blockchain.thepower.v1alpha1.TpChain.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='chain_number', full_name='blockchain.thepower.v1alpha1.TpChain.chain_number', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chainNumber', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='blockchain.thepower.v1alpha1.TpChain.user_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='chain_nodes', full_name='blockchain.thepower.v1alpha1.TpChain.chain_nodes', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chainNodes', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='blockchain.thepower.v1alpha1.TpChain.status', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error_details', full_name='blockchain.thepower.v1alpha1.TpChain.error_details', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='errorDetails', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='blockchain.thepower.v1alpha1.TpChain.created_at', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='createdAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='updated_at', full_name='blockchain.thepower.v1alpha1.TpChain.updated_at', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='updatedAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='settings', full_name='blockchain.thepower.v1alpha1.TpChain.settings', index=8,
      number=9, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='settings', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=78,
  serialized_end=436,
)


_TPNODE = _descriptor.Descriptor(
  name='TpNode',
  full_name='blockchain.thepower.v1alpha1.TpNode',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='nodename', full_name='blockchain.thepower.v1alpha1.TpNode.nodename', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nodename', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='tpic_port', full_name='blockchain.thepower.v1alpha1.TpNode.tpic_port', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tpicPort', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='api_port', full_name='blockchain.thepower.v1alpha1.TpNode.api_port', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='apiPort', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='apis_port', full_name='blockchain.thepower.v1alpha1.TpNode.apis_port', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='apisPort', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='cc_port', full_name='blockchain.thepower.v1alpha1.TpNode.cc_port', index=4,
      number=5, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ccPort', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='crosschain_external', full_name='blockchain.thepower.v1alpha1.TpNode.crosschain_external', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='crosschainExternal', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=439,
  serialized_end=684,
)


_CROSSCHAINEXTERNAL = _descriptor.Descriptor(
  name='CrosschainExternal',
  full_name='blockchain.thepower.v1alpha1.CrosschainExternal',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='host', full_name='blockchain.thepower.v1alpha1.CrosschainExternal.host', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='host', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='port', full_name='blockchain.thepower.v1alpha1.CrosschainExternal.port', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='port', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=686,
  serialized_end=746,
)


_TEACEREMONYSETTINGS = _descriptor.Descriptor(
  name='TeaCeremonySettings',
  full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='chain_blocktime', full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings.chain_blocktime', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chainBlocktime', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='chain_minsig', full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings.chain_minsig', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chainMinsig', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='chain_allow_empty', full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings.chain_allow_empty', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chainAllowEmpty', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='chain_patch_sigs', full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings.chain_patch_sigs', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chainPatchSigs', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='allocblock_group', full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings.allocblock_group', index=4,
      number=5, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='allocblockGroup', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='allocblock_last', full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings.allocblock_last', index=5,
      number=6, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='allocblockLast', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='freegas', full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings.freegas', index=6,
      number=7, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='freegas', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='gas_sk', full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings.gas_sk', index=7,
      number=8, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='gasSk', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='nosk', full_name='blockchain.thepower.v1alpha1.TeaCeremonySettings.nosk', index=8,
      number=9, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nosk', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=749,
  serialized_end=1085,
)

_TPCHAIN.fields_by_name['chain_nodes'].message_type = _TPNODE
_TPCHAIN.fields_by_name['settings'].message_type = _TEACEREMONYSETTINGS
_TPNODE.fields_by_name['crosschain_external'].message_type = _CROSSCHAINEXTERNAL
DESCRIPTOR.message_types_by_name['TpChain'] = _TPCHAIN
DESCRIPTOR.message_types_by_name['TpNode'] = _TPNODE
DESCRIPTOR.message_types_by_name['CrosschainExternal'] = _CROSSCHAINEXTERNAL
DESCRIPTOR.message_types_by_name['TeaCeremonySettings'] = _TEACEREMONYSETTINGS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TpChain = _reflection.GeneratedProtocolMessageType('TpChain', (_message.Message,), {
  'DESCRIPTOR' : _TPCHAIN,
  '__module__' : 'blockchain.thepower.v1alpha1.thepower_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.thepower.v1alpha1.TpChain)
  })
_sym_db.RegisterMessage(TpChain)

TpNode = _reflection.GeneratedProtocolMessageType('TpNode', (_message.Message,), {
  'DESCRIPTOR' : _TPNODE,
  '__module__' : 'blockchain.thepower.v1alpha1.thepower_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.thepower.v1alpha1.TpNode)
  })
_sym_db.RegisterMessage(TpNode)

CrosschainExternal = _reflection.GeneratedProtocolMessageType('CrosschainExternal', (_message.Message,), {
  'DESCRIPTOR' : _CROSSCHAINEXTERNAL,
  '__module__' : 'blockchain.thepower.v1alpha1.thepower_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.thepower.v1alpha1.CrosschainExternal)
  })
_sym_db.RegisterMessage(CrosschainExternal)

TeaCeremonySettings = _reflection.GeneratedProtocolMessageType('TeaCeremonySettings', (_message.Message,), {
  'DESCRIPTOR' : _TEACEREMONYSETTINGS,
  '__module__' : 'blockchain.thepower.v1alpha1.thepower_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.thepower.v1alpha1.TeaCeremonySettings)
  })
_sym_db.RegisterMessage(TeaCeremonySettings)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
