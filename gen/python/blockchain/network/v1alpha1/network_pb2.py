# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='blockchain/network/v1alpha1/network.proto',
  package='blockchain.network.v1alpha1',
  syntax='proto3',
  serialized_options=b'Z<github.com/cuemby/ccp-sdk/gen/go/blockchain/network/v1alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n)blockchain/network/v1alpha1/network.proto\x12\x1b\x62lockchain.network.v1alpha1\"\xce\x03\n\x07Network\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12!\n\x0cnetwork_name\x18\x02 \x01(\tR\x0bnetworkName\x12\x1c\n\tframework\x18\x03 \x01(\tR\tframework\x12\x12\n\x04type\x18\x04 \x01(\tR\x04type\x12\x17\n\x07user_id\x18\x05 \x01(\tR\x06userId\x12\x16\n\x06status\x18\x06 \x01(\tR\x06status\x12#\n\rerror_details\x18\x07 \x01(\tR\x0c\x65rrorDetails\x12\x1d\n\ncreated_at\x18\x08 \x01(\tR\tcreatedAt\x12\x1d\n\nupdated_at\x18\t \x01(\tR\tupdatedAt\x12L\n\x0c\x63orporations\x18\n \x03(\x0b\x32(.blockchain.network.v1alpha1.CorporationR\x0c\x63orporations\x12.\n\x13\x63\x63p_organization_id\x18\x0b \x01(\tR\x11\x63\x63pOrganizationId\x12L\n\x0b\x65nvironment\x18\x0c \x01(\x0e\x32*.blockchain.network.v1alpha1.BlockchainEnvR\x0b\x65nvironment\"\xa1\x03\n\x0b\x43orporation\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x17\n\x07user_id\x18\x02 \x01(\tR\x06userId\x12\x16\n\x06\x64omain\x18\x03 \x01(\tR\x06\x64omain\x12%\n\x0e\x61\x64min_password\x18\x04 \x01(\tR\radminPassword\x12\x1d\n\nadmin_user\x18\x05 \x01(\tR\tadminUser\x12#\n\rblockchain_id\x18\x06 \x01(\tR\x0c\x62lockchainId\x12\x37\n\x05peers\x18\x07 \x03(\x0b\x32!.blockchain.network.v1alpha1.PeerR\x05peers\x12\x16\n\x06status\x18\x08 \x01(\tR\x06status\x12#\n\rerror_details\x18\t \x01(\tR\x0c\x65rrorDetails\x12\x1d\n\ncreated_at\x18\n \x01(\tR\tcreatedAt\x12\x1d\n\nupdated_at\x18\x0b \x01(\tR\tupdatedAt\x12\x17\n\x07name_ca\x18\x0c \x01(\tR\x06nameCa\x12\x19\n\x08name_msp\x18\r \x01(\tR\x07nameMsp\"\x94\x01\n\x04Peer\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12\x12\n\x04type\x18\x03 \x01(\tR\x04type\x12\x16\n\x06status\x18\x04 \x01(\tR\x06status\x12\x1d\n\ncreated_at\x18\x05 \x01(\tR\tcreatedAt\x12\x1d\n\nupdated_at\x18\x06 \x01(\tR\tupdatedAt\"\xbc\x01\n\x07Orderer\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12#\n\rblockchain_id\x18\x03 \x01(\tR\x0c\x62lockchainId\x12\x12\n\x04type\x18\x04 \x01(\tR\x04type\x12\x16\n\x06status\x18\x05 \x01(\tR\x06status\x12\x1d\n\ncreated_at\x18\x06 \x01(\tR\tcreatedAt\x12\x1d\n\nupdated_at\x18\x07 \x01(\tR\tupdatedAt\"\xf8\x01\n\x07\x43hannel\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12%\n\x0e\x63orporation_id\x18\x02 \x01(\tR\rcorporationId\x12#\n\rblockchain_id\x18\x03 \x01(\tR\x0c\x62lockchainId\x12\x12\n\x04name\x18\x04 \x01(\tR\x04name\x12\'\n\x0f\x63orporation_ids\x18\x05 \x03(\tR\x0e\x63orporationIds\x12\x16\n\x06status\x18\x06 \x01(\tR\x06status\x12\x1d\n\ncreated_at\x18\x07 \x01(\tR\tcreatedAt\x12\x1d\n\nupdated_at\x18\x08 \x01(\tR\tupdatedAt\"\xcf\x01\n\nInvitation\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12 \n\x0c\x66rom_user_id\x18\x02 \x01(\tR\nfromUserId\x12\x14\n\x05\x65mail\x18\x03 \x01(\tR\x05\x65mail\x12\x16\n\x06status\x18\x04 \x01(\tR\x06status\x12#\n\rblockchain_id\x18\x05 \x01(\tR\x0c\x62lockchainId\x12\x1d\n\ncreated_at\x18\x06 \x01(\tR\tcreatedAt\x12\x1d\n\nupdated_at\x18\x07 \x01(\tR\tupdatedAt*g\n\rBlockchainEnv\x12\x1e\n\x1a\x42LOCKCHAIN_ENV_UNSPECIFIED\x10\x00\x12\x1a\n\x16\x42LOCKCHAIN_ENV_TESTNET\x10\x01\x12\x1a\n\x16\x42LOCKCHAIN_ENV_MAINNET\x10\x02\x42>Z<github.com/cuemby/ccp-sdk/gen/go/blockchain/network/v1alpha1b\x06proto3'
)

_BLOCKCHAINENV = _descriptor.EnumDescriptor(
  name='BlockchainEnv',
  full_name='blockchain.network.v1alpha1.BlockchainEnv',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='BLOCKCHAIN_ENV_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BLOCKCHAIN_ENV_TESTNET', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BLOCKCHAIN_ENV_MAINNET', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1762,
  serialized_end=1865,
)
_sym_db.RegisterEnumDescriptor(_BLOCKCHAINENV)

BlockchainEnv = enum_type_wrapper.EnumTypeWrapper(_BLOCKCHAINENV)
BLOCKCHAIN_ENV_UNSPECIFIED = 0
BLOCKCHAIN_ENV_TESTNET = 1
BLOCKCHAIN_ENV_MAINNET = 2



_NETWORK = _descriptor.Descriptor(
  name='Network',
  full_name='blockchain.network.v1alpha1.Network',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='blockchain.network.v1alpha1.Network.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='network_name', full_name='blockchain.network.v1alpha1.Network.network_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='networkName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='framework', full_name='blockchain.network.v1alpha1.Network.framework', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='framework', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='blockchain.network.v1alpha1.Network.type', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='type', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='blockchain.network.v1alpha1.Network.user_id', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='blockchain.network.v1alpha1.Network.status', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error_details', full_name='blockchain.network.v1alpha1.Network.error_details', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='errorDetails', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='blockchain.network.v1alpha1.Network.created_at', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='createdAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='updated_at', full_name='blockchain.network.v1alpha1.Network.updated_at', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='updatedAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='corporations', full_name='blockchain.network.v1alpha1.Network.corporations', index=9,
      number=10, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='corporations', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ccp_organization_id', full_name='blockchain.network.v1alpha1.Network.ccp_organization_id', index=10,
      number=11, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ccpOrganizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='environment', full_name='blockchain.network.v1alpha1.Network.environment', index=11,
      number=12, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environment', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=75,
  serialized_end=537,
)


_CORPORATION = _descriptor.Descriptor(
  name='Corporation',
  full_name='blockchain.network.v1alpha1.Corporation',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='blockchain.network.v1alpha1.Corporation.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='blockchain.network.v1alpha1.Corporation.user_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='domain', full_name='blockchain.network.v1alpha1.Corporation.domain', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='domain', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='admin_password', full_name='blockchain.network.v1alpha1.Corporation.admin_password', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='adminPassword', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='admin_user', full_name='blockchain.network.v1alpha1.Corporation.admin_user', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='adminUser', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='blockchain_id', full_name='blockchain.network.v1alpha1.Corporation.blockchain_id', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='blockchainId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='peers', full_name='blockchain.network.v1alpha1.Corporation.peers', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='peers', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='blockchain.network.v1alpha1.Corporation.status', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error_details', full_name='blockchain.network.v1alpha1.Corporation.error_details', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='errorDetails', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='blockchain.network.v1alpha1.Corporation.created_at', index=9,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='createdAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='updated_at', full_name='blockchain.network.v1alpha1.Corporation.updated_at', index=10,
      number=11, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='updatedAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name_ca', full_name='blockchain.network.v1alpha1.Corporation.name_ca', index=11,
      number=12, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nameCa', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name_msp', full_name='blockchain.network.v1alpha1.Corporation.name_msp', index=12,
      number=13, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nameMsp', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=540,
  serialized_end=957,
)


_PEER = _descriptor.Descriptor(
  name='Peer',
  full_name='blockchain.network.v1alpha1.Peer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='blockchain.network.v1alpha1.Peer.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='blockchain.network.v1alpha1.Peer.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='blockchain.network.v1alpha1.Peer.type', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='type', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='blockchain.network.v1alpha1.Peer.status', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='blockchain.network.v1alpha1.Peer.created_at', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='createdAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='updated_at', full_name='blockchain.network.v1alpha1.Peer.updated_at', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='updatedAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=960,
  serialized_end=1108,
)


_ORDERER = _descriptor.Descriptor(
  name='Orderer',
  full_name='blockchain.network.v1alpha1.Orderer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='blockchain.network.v1alpha1.Orderer.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='blockchain.network.v1alpha1.Orderer.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='blockchain_id', full_name='blockchain.network.v1alpha1.Orderer.blockchain_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='blockchainId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='blockchain.network.v1alpha1.Orderer.type', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='type', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='blockchain.network.v1alpha1.Orderer.status', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='blockchain.network.v1alpha1.Orderer.created_at', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='createdAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='updated_at', full_name='blockchain.network.v1alpha1.Orderer.updated_at', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='updatedAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1111,
  serialized_end=1299,
)


_CHANNEL = _descriptor.Descriptor(
  name='Channel',
  full_name='blockchain.network.v1alpha1.Channel',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='blockchain.network.v1alpha1.Channel.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='corporation_id', full_name='blockchain.network.v1alpha1.Channel.corporation_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='corporationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='blockchain_id', full_name='blockchain.network.v1alpha1.Channel.blockchain_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='blockchainId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='blockchain.network.v1alpha1.Channel.name', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='corporation_ids', full_name='blockchain.network.v1alpha1.Channel.corporation_ids', index=4,
      number=5, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='corporationIds', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='blockchain.network.v1alpha1.Channel.status', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='blockchain.network.v1alpha1.Channel.created_at', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='createdAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='updated_at', full_name='blockchain.network.v1alpha1.Channel.updated_at', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='updatedAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1302,
  serialized_end=1550,
)


_INVITATION = _descriptor.Descriptor(
  name='Invitation',
  full_name='blockchain.network.v1alpha1.Invitation',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='blockchain.network.v1alpha1.Invitation.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='from_user_id', full_name='blockchain.network.v1alpha1.Invitation.from_user_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='fromUserId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='email', full_name='blockchain.network.v1alpha1.Invitation.email', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='email', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='blockchain.network.v1alpha1.Invitation.status', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='status', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='blockchain_id', full_name='blockchain.network.v1alpha1.Invitation.blockchain_id', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='blockchainId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='blockchain.network.v1alpha1.Invitation.created_at', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='createdAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='updated_at', full_name='blockchain.network.v1alpha1.Invitation.updated_at', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='updatedAt', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1553,
  serialized_end=1760,
)

_NETWORK.fields_by_name['corporations'].message_type = _CORPORATION
_NETWORK.fields_by_name['environment'].enum_type = _BLOCKCHAINENV
_CORPORATION.fields_by_name['peers'].message_type = _PEER
DESCRIPTOR.message_types_by_name['Network'] = _NETWORK
DESCRIPTOR.message_types_by_name['Corporation'] = _CORPORATION
DESCRIPTOR.message_types_by_name['Peer'] = _PEER
DESCRIPTOR.message_types_by_name['Orderer'] = _ORDERER
DESCRIPTOR.message_types_by_name['Channel'] = _CHANNEL
DESCRIPTOR.message_types_by_name['Invitation'] = _INVITATION
DESCRIPTOR.enum_types_by_name['BlockchainEnv'] = _BLOCKCHAINENV
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Network = _reflection.GeneratedProtocolMessageType('Network', (_message.Message,), {
  'DESCRIPTOR' : _NETWORK,
  '__module__' : 'blockchain.network.v1alpha1.network_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.network.v1alpha1.Network)
  })
_sym_db.RegisterMessage(Network)

Corporation = _reflection.GeneratedProtocolMessageType('Corporation', (_message.Message,), {
  'DESCRIPTOR' : _CORPORATION,
  '__module__' : 'blockchain.network.v1alpha1.network_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.network.v1alpha1.Corporation)
  })
_sym_db.RegisterMessage(Corporation)

Peer = _reflection.GeneratedProtocolMessageType('Peer', (_message.Message,), {
  'DESCRIPTOR' : _PEER,
  '__module__' : 'blockchain.network.v1alpha1.network_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.network.v1alpha1.Peer)
  })
_sym_db.RegisterMessage(Peer)

Orderer = _reflection.GeneratedProtocolMessageType('Orderer', (_message.Message,), {
  'DESCRIPTOR' : _ORDERER,
  '__module__' : 'blockchain.network.v1alpha1.network_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.network.v1alpha1.Orderer)
  })
_sym_db.RegisterMessage(Orderer)

Channel = _reflection.GeneratedProtocolMessageType('Channel', (_message.Message,), {
  'DESCRIPTOR' : _CHANNEL,
  '__module__' : 'blockchain.network.v1alpha1.network_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.network.v1alpha1.Channel)
  })
_sym_db.RegisterMessage(Channel)

Invitation = _reflection.GeneratedProtocolMessageType('Invitation', (_message.Message,), {
  'DESCRIPTOR' : _INVITATION,
  '__module__' : 'blockchain.network.v1alpha1.network_pb2'
  # @@protoc_insertion_point(class_scope:blockchain.network.v1alpha1.Invitation)
  })
_sym_db.RegisterMessage(Invitation)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
