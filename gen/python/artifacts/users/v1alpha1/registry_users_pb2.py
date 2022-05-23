# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/users/v1alpha1/registry_users.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='artifacts/users/v1alpha1/registry_users.proto',
  package='artifacts.users.v1alpha1',
  syntax='proto3',
  serialized_options=b'\n\"io.cuemby.artifacts.users.v1alpha1B\022RegistryUsersProtoP\001Z9github.com/cuemby/ccp-sdk/gen/go/artifacts/users/v1alpha1\242\002\003PPX\252\002\030Artifacts.Users.V1Alpha1\312\002\030Artifacts\\Users\\V1Alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n-artifacts/users/v1alpha1/registry_users.proto\x12\x18\x61rtifacts.users.v1alpha1\"Z\n\x0c\x41\x63\x63\x65ssHarbor\x12\x16\n\x06\x61\x63tion\x18\x01 \x01(\tR\x06\x61\x63tion\x12\x1a\n\x08resource\x18\x02 \x01(\tR\x08resource\x12\x16\n\x06\x65\x66\x66\x65\x63t\x18\x03 \x01(\tR\x06\x65\x66\x66\x65\x63t\"\x85\x01\n\x11PermissionsHarbor\x12>\n\x06\x61\x63\x63\x65ss\x18\x01 \x03(\x0b\x32&.artifacts.users.v1alpha1.AccessHarborR\x06\x61\x63\x63\x65ss\x12\x12\n\x04kind\x18\x02 \x01(\tR\x04kind\x12\x1c\n\tnamespace\x18\x03 \x01(\tR\tnamespace\"\xfe\x01\n\x06Harbor\x12\x16\n\x06secret\x18\x01 \x01(\tR\x06secret\x12\x18\n\x07\x64isable\x18\x02 \x01(\x08R\x07\x64isable\x12\x12\n\x04name\x18\x03 \x01(\tR\x04name\x12\x14\n\x05level\x18\x04 \x01(\tR\x05level\x12\x1a\n\x08\x64uration\x18\x05 \x01(\rR\x08\x64uration\x12 \n\x0b\x64\x65scription\x18\x06 \x01(\tR\x0b\x64\x65scription\x12Z\n\x12permissions_harbor\x18\x07 \x03(\x0b\x32+.artifacts.users.v1alpha1.PermissionsHarborR\x11permissionsHarbor\"\xe0\x01\n\rUsersRegistry\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\'\n\x0forganization_id\x18\x02 \x01(\rR\x0eorganizationId\x12\x1d\n\nproject_id\x18\x03 \x01(\rR\tprojectId\x12%\n\x0e\x65nvironment_id\x18\x04 \x01(\tR\renvironmentId\x12\x16\n\x06\x61\x63tive\x18\x06 \x01(\x08R\x06\x61\x63tive\x12\x38\n\x06harbor\x18\x07 \x01(\x0b\x32 .artifacts.users.v1alpha1.HarborR\x06harborB\xb1\x01\n\"io.cuemby.artifacts.users.v1alpha1B\x12RegistryUsersProtoP\x01Z9github.com/cuemby/ccp-sdk/gen/go/artifacts/users/v1alpha1\xa2\x02\x03PPX\xaa\x02\x18\x41rtifacts.Users.V1Alpha1\xca\x02\x18\x41rtifacts\\Users\\V1Alpha1b\x06proto3'
)




_ACCESSHARBOR = _descriptor.Descriptor(
  name='AccessHarbor',
  full_name='artifacts.users.v1alpha1.AccessHarbor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='action', full_name='artifacts.users.v1alpha1.AccessHarbor.action', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='action', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='resource', full_name='artifacts.users.v1alpha1.AccessHarbor.resource', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='resource', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='effect', full_name='artifacts.users.v1alpha1.AccessHarbor.effect', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='effect', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_end=165,
)


_PERMISSIONSHARBOR = _descriptor.Descriptor(
  name='PermissionsHarbor',
  full_name='artifacts.users.v1alpha1.PermissionsHarbor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='access', full_name='artifacts.users.v1alpha1.PermissionsHarbor.access', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='access', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='kind', full_name='artifacts.users.v1alpha1.PermissionsHarbor.kind', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='kind', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='namespace', full_name='artifacts.users.v1alpha1.PermissionsHarbor.namespace', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='namespace', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=168,
  serialized_end=301,
)


_HARBOR = _descriptor.Descriptor(
  name='Harbor',
  full_name='artifacts.users.v1alpha1.Harbor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='secret', full_name='artifacts.users.v1alpha1.Harbor.secret', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='secret', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='disable', full_name='artifacts.users.v1alpha1.Harbor.disable', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='disable', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='artifacts.users.v1alpha1.Harbor.name', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='level', full_name='artifacts.users.v1alpha1.Harbor.level', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='level', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='duration', full_name='artifacts.users.v1alpha1.Harbor.duration', index=4,
      number=5, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='duration', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='description', full_name='artifacts.users.v1alpha1.Harbor.description', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='description', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='permissions_harbor', full_name='artifacts.users.v1alpha1.Harbor.permissions_harbor', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='permissionsHarbor', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=304,
  serialized_end=558,
)


_USERSREGISTRY = _descriptor.Descriptor(
  name='UsersRegistry',
  full_name='artifacts.users.v1alpha1.UsersRegistry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='artifacts.users.v1alpha1.UsersRegistry.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='artifacts.users.v1alpha1.UsersRegistry.organization_id', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='artifacts.users.v1alpha1.UsersRegistry.project_id', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='environment_id', full_name='artifacts.users.v1alpha1.UsersRegistry.environment_id', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='environmentId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='active', full_name='artifacts.users.v1alpha1.UsersRegistry.active', index=4,
      number=6, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='active', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='harbor', full_name='artifacts.users.v1alpha1.UsersRegistry.harbor', index=5,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='harbor', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=561,
  serialized_end=785,
)

_PERMISSIONSHARBOR.fields_by_name['access'].message_type = _ACCESSHARBOR
_HARBOR.fields_by_name['permissions_harbor'].message_type = _PERMISSIONSHARBOR
_USERSREGISTRY.fields_by_name['harbor'].message_type = _HARBOR
DESCRIPTOR.message_types_by_name['AccessHarbor'] = _ACCESSHARBOR
DESCRIPTOR.message_types_by_name['PermissionsHarbor'] = _PERMISSIONSHARBOR
DESCRIPTOR.message_types_by_name['Harbor'] = _HARBOR
DESCRIPTOR.message_types_by_name['UsersRegistry'] = _USERSREGISTRY
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AccessHarbor = _reflection.GeneratedProtocolMessageType('AccessHarbor', (_message.Message,), {
  'DESCRIPTOR' : _ACCESSHARBOR,
  '__module__' : 'artifacts.users.v1alpha1.registry_users_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.users.v1alpha1.AccessHarbor)
  })
_sym_db.RegisterMessage(AccessHarbor)

PermissionsHarbor = _reflection.GeneratedProtocolMessageType('PermissionsHarbor', (_message.Message,), {
  'DESCRIPTOR' : _PERMISSIONSHARBOR,
  '__module__' : 'artifacts.users.v1alpha1.registry_users_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.users.v1alpha1.PermissionsHarbor)
  })
_sym_db.RegisterMessage(PermissionsHarbor)

Harbor = _reflection.GeneratedProtocolMessageType('Harbor', (_message.Message,), {
  'DESCRIPTOR' : _HARBOR,
  '__module__' : 'artifacts.users.v1alpha1.registry_users_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.users.v1alpha1.Harbor)
  })
_sym_db.RegisterMessage(Harbor)

UsersRegistry = _reflection.GeneratedProtocolMessageType('UsersRegistry', (_message.Message,), {
  'DESCRIPTOR' : _USERSREGISTRY,
  '__module__' : 'artifacts.users.v1alpha1.registry_users_pb2'
  # @@protoc_insertion_point(class_scope:artifacts.users.v1alpha1.UsersRegistry)
  })
_sym_db.RegisterMessage(UsersRegistry)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)