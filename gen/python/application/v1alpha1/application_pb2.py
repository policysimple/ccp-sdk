# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: application/v1alpha1/application.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='application/v1alpha1/application.proto',
  package='application.v1alpha1',
  syntax='proto3',
  serialized_options=b'Z5github.com/cuemby/ccp-sdk/gen/go/application/v1alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n&application/v1alpha1/application.proto\x12\x14\x61pplication.v1alpha1\"@\n\x06\x42ranch\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x10\n\x03sha\x18\x02 \x01(\tR\x03sha\x12\x10\n\x03url\x18\x03 \x01(\tR\x03url\"\xe0\x01\n\nRepository\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x1b\n\tfull_name\x18\x02 \x01(\tR\x08\x66ullName\x12 \n\x0b\x64\x65scription\x18\x03 \x01(\tR\x0b\x64\x65scription\x12\x12\n\x04\x66ork\x18\x04 \x01(\x08R\x04\x66ork\x12\x1b\n\tclone_url\x18\x05 \x01(\tR\x08\x63loneUrl\x12\x18\n\x07private\x18\x06 \x01(\x08R\x07private\x12\x34\n\x06\x62ranch\x18\x07 \x01(\x0b\x32\x1c.application.v1alpha1.BranchR\x06\x62ranch\"1\n\x07\x43ommand\x12\x14\n\x05\x62uild\x18\x01 \x01(\tR\x05\x62uild\x12\x10\n\x03run\x18\x02 \x01(\tR\x03run\"K\n\x03\x45nv\x12\x14\n\x05value\x18\x01 \x01(\tR\x05value\x12\x10\n\x03key\x18\x02 \x01(\tR\x03key\x12\x1c\n\tencrypted\x18\x03 \x01(\x08R\tencrypted\"\xb0\x01\n\rConfiguration\x12-\n\x04\x65nvs\x18\x01 \x03(\x0b\x32\x19.application.v1alpha1.EnvR\x04\x65nvs\x12\x39\n\x08\x63ommands\x18\x02 \x03(\x0b\x32\x1d.application.v1alpha1.CommandR\x08\x63ommands\x12\x12\n\x04port\x18\x03 \x01(\x05R\x04port\x12!\n\x0cruntime_type\x18\x04 \x01(\tR\x0bruntimeType\"\xdc\x01\n\x07Scaling\x12\x19\n\x08\x63pu_rule\x18\x01 \x01(\tR\x07\x63puRule\x12(\n\x10\x63ool_down_period\x18\x02 \x01(\tR\x0e\x63oolDownPeriod\x12)\n\x10polling_interval\x18\x03 \x01(\tR\x0fpollingInterval\x12\x1f\n\x0bmin_replica\x18\x04 \x01(\tR\nminReplica\x12\x1f\n\x0bmax_replica\x18\x05 \x01(\tR\nmaxReplica\x12\x1f\n\x0bmemory_rule\x18\x06 \x01(\tR\nmemoryRule\"\xdb\x05\n\x0b\x41pplication\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12 \n\x0bintegration\x18\x03 \x01(\tR\x0bintegration\x12@\n\nrepository\x18\x04 \x01(\x0b\x32 .application.v1alpha1.RepositoryR\nrepository\x12I\n\rconfiguration\x18\x05 \x01(\x0b\x32#.application.v1alpha1.ConfigurationR\rconfiguration\x12\x1d\n\nproject_id\x18\x06 \x01(\tR\tprojectId\x12!\n\x0cname_project\x18\x07 \x01(\tR\x0bnameProject\x12#\n\rproject_image\x18\x08 \x01(\tR\x0cprojectImage\x12/\n\x13project_description\x18\t \x01(\tR\x12projectDescription\x12\'\n\x0forganization_id\x18\n \x01(\tR\x0eorganizationId\x12\x37\n\x07scaling\x18\x0b \x01(\x0b\x32\x1d.application.v1alpha1.ScalingR\x07scaling\x12\x44\n\x0ctraffic_type\x18\x0c \x01(\x0e\x32!.application.v1alpha1.TrafficTypeR\x0btrafficType\x12-\n\x12integration_status\x18\r \x01(\x08R\x11integrationStatus\x12`\n\x16\x64ocker_image_buildpack\x18\x0e \x01(\x0e\x32*.application.v1alpha1.DockerImageBuildpackR\x14\x64ockerImageBuildpack\x12(\n\x10no_docker_exists\x18\x0f \x01(\x08R\x0enoDockerExists\"\xee\x01\n\x0fListApplication\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12@\n\nrepository\x18\x03 \x01(\x0b\x32 .application.v1alpha1.RepositoryR\nrepository\x12\x1d\n\nproject_id\x18\x06 \x01(\tR\tprojectId\x12\'\n\x0forganization_id\x18\x07 \x01(\tR\x0eorganizationId\x12-\n\x12integration_status\x18\x08 \x01(\x08R\x11integrationStatus*a\n\x0bTrafficType\x12\x1c\n\x18TRAFFIC_TYPE_UNSPECIFIED\x10\x00\x12\x19\n\x15TRAFFIC_TYPE_EXTERNAL\x10\x01\x12\x19\n\x15TRAFFIC_TYPE_INTERNAL\x10\x02*\xcc\x01\n\x14\x44ockerImageBuildpack\x12&\n\"DOCKER_IMAGE_BUILDPACK_UNSPECIFIED\x10\x00\x12!\n\x1d\x44OCKER_IMAGE_BUILDPACK_GOLANG\x10\x01\x12\x1f\n\x1b\x44OCKER_IMAGE_BUILDPACK_JAVA\x10\x02\x12%\n!DOCKER_IMAGE_BUILDPACK_JAVASCRIPT\x10\x03\x12!\n\x1d\x44OCKER_IMAGE_BUILDPACK_PYTHON\x10\x04\x42\x37Z5github.com/cuemby/ccp-sdk/gen/go/application/v1alpha1b\x06proto3'
)

_TRAFFICTYPE = _descriptor.EnumDescriptor(
  name='TrafficType',
  full_name='application.v1alpha1.TrafficType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='TRAFFIC_TYPE_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='TRAFFIC_TYPE_EXTERNAL', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='TRAFFIC_TYPE_INTERNAL', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1862,
  serialized_end=1959,
)
_sym_db.RegisterEnumDescriptor(_TRAFFICTYPE)

TrafficType = enum_type_wrapper.EnumTypeWrapper(_TRAFFICTYPE)
_DOCKERIMAGEBUILDPACK = _descriptor.EnumDescriptor(
  name='DockerImageBuildpack',
  full_name='application.v1alpha1.DockerImageBuildpack',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DOCKER_IMAGE_BUILDPACK_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='DOCKER_IMAGE_BUILDPACK_GOLANG', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='DOCKER_IMAGE_BUILDPACK_JAVA', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='DOCKER_IMAGE_BUILDPACK_JAVASCRIPT', index=3, number=3,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='DOCKER_IMAGE_BUILDPACK_PYTHON', index=4, number=4,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1962,
  serialized_end=2166,
)
_sym_db.RegisterEnumDescriptor(_DOCKERIMAGEBUILDPACK)

DockerImageBuildpack = enum_type_wrapper.EnumTypeWrapper(_DOCKERIMAGEBUILDPACK)
TRAFFIC_TYPE_UNSPECIFIED = 0
TRAFFIC_TYPE_EXTERNAL = 1
TRAFFIC_TYPE_INTERNAL = 2
DOCKER_IMAGE_BUILDPACK_UNSPECIFIED = 0
DOCKER_IMAGE_BUILDPACK_GOLANG = 1
DOCKER_IMAGE_BUILDPACK_JAVA = 2
DOCKER_IMAGE_BUILDPACK_JAVASCRIPT = 3
DOCKER_IMAGE_BUILDPACK_PYTHON = 4



_BRANCH = _descriptor.Descriptor(
  name='Branch',
  full_name='application.v1alpha1.Branch',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='application.v1alpha1.Branch.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='sha', full_name='application.v1alpha1.Branch.sha', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sha', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='url', full_name='application.v1alpha1.Branch.url', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='url', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=64,
  serialized_end=128,
)


_REPOSITORY = _descriptor.Descriptor(
  name='Repository',
  full_name='application.v1alpha1.Repository',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='application.v1alpha1.Repository.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='full_name', full_name='application.v1alpha1.Repository.full_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='fullName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='description', full_name='application.v1alpha1.Repository.description', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='description', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='fork', full_name='application.v1alpha1.Repository.fork', index=3,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='fork', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='clone_url', full_name='application.v1alpha1.Repository.clone_url', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='cloneUrl', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='private', full_name='application.v1alpha1.Repository.private', index=5,
      number=6, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='private', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='branch', full_name='application.v1alpha1.Repository.branch', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='branch', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=131,
  serialized_end=355,
)


_COMMAND = _descriptor.Descriptor(
  name='Command',
  full_name='application.v1alpha1.Command',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='build', full_name='application.v1alpha1.Command.build', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='build', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='run', full_name='application.v1alpha1.Command.run', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='run', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=357,
  serialized_end=406,
)


_ENV = _descriptor.Descriptor(
  name='Env',
  full_name='application.v1alpha1.Env',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='application.v1alpha1.Env.value', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='value', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='key', full_name='application.v1alpha1.Env.key', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='encrypted', full_name='application.v1alpha1.Env.encrypted', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='encrypted', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=408,
  serialized_end=483,
)


_CONFIGURATION = _descriptor.Descriptor(
  name='Configuration',
  full_name='application.v1alpha1.Configuration',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='envs', full_name='application.v1alpha1.Configuration.envs', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='envs', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='commands', full_name='application.v1alpha1.Configuration.commands', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='commands', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='port', full_name='application.v1alpha1.Configuration.port', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='port', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='runtime_type', full_name='application.v1alpha1.Configuration.runtime_type', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='runtimeType', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=486,
  serialized_end=662,
)


_SCALING = _descriptor.Descriptor(
  name='Scaling',
  full_name='application.v1alpha1.Scaling',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='cpu_rule', full_name='application.v1alpha1.Scaling.cpu_rule', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='cpuRule', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='cool_down_period', full_name='application.v1alpha1.Scaling.cool_down_period', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='coolDownPeriod', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='polling_interval', full_name='application.v1alpha1.Scaling.polling_interval', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='pollingInterval', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='min_replica', full_name='application.v1alpha1.Scaling.min_replica', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='minReplica', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='max_replica', full_name='application.v1alpha1.Scaling.max_replica', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='maxReplica', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='memory_rule', full_name='application.v1alpha1.Scaling.memory_rule', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='memoryRule', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=665,
  serialized_end=885,
)


_APPLICATION = _descriptor.Descriptor(
  name='Application',
  full_name='application.v1alpha1.Application',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='application.v1alpha1.Application.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='application.v1alpha1.Application.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='integration', full_name='application.v1alpha1.Application.integration', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integration', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='repository', full_name='application.v1alpha1.Application.repository', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='repository', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='configuration', full_name='application.v1alpha1.Application.configuration', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='configuration', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='application.v1alpha1.Application.project_id', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name_project', full_name='application.v1alpha1.Application.name_project', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nameProject', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_image', full_name='application.v1alpha1.Application.project_image', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectImage', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_description', full_name='application.v1alpha1.Application.project_description', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectDescription', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='application.v1alpha1.Application.organization_id', index=9,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='scaling', full_name='application.v1alpha1.Application.scaling', index=10,
      number=11, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='scaling', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='traffic_type', full_name='application.v1alpha1.Application.traffic_type', index=11,
      number=12, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='trafficType', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='integration_status', full_name='application.v1alpha1.Application.integration_status', index=12,
      number=13, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integrationStatus', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='docker_image_buildpack', full_name='application.v1alpha1.Application.docker_image_buildpack', index=13,
      number=14, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='dockerImageBuildpack', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='no_docker_exists', full_name='application.v1alpha1.Application.no_docker_exists', index=14,
      number=15, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='noDockerExists', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=888,
  serialized_end=1619,
)


_LISTAPPLICATION = _descriptor.Descriptor(
  name='ListApplication',
  full_name='application.v1alpha1.ListApplication',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='application.v1alpha1.ListApplication.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='application.v1alpha1.ListApplication.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='repository', full_name='application.v1alpha1.ListApplication.repository', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='repository', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='application.v1alpha1.ListApplication.project_id', index=3,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='application.v1alpha1.ListApplication.organization_id', index=4,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='integration_status', full_name='application.v1alpha1.ListApplication.integration_status', index=5,
      number=8, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integrationStatus', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1622,
  serialized_end=1860,
)

_REPOSITORY.fields_by_name['branch'].message_type = _BRANCH
_CONFIGURATION.fields_by_name['envs'].message_type = _ENV
_CONFIGURATION.fields_by_name['commands'].message_type = _COMMAND
_APPLICATION.fields_by_name['repository'].message_type = _REPOSITORY
_APPLICATION.fields_by_name['configuration'].message_type = _CONFIGURATION
_APPLICATION.fields_by_name['scaling'].message_type = _SCALING
_APPLICATION.fields_by_name['traffic_type'].enum_type = _TRAFFICTYPE
_APPLICATION.fields_by_name['docker_image_buildpack'].enum_type = _DOCKERIMAGEBUILDPACK
_LISTAPPLICATION.fields_by_name['repository'].message_type = _REPOSITORY
DESCRIPTOR.message_types_by_name['Branch'] = _BRANCH
DESCRIPTOR.message_types_by_name['Repository'] = _REPOSITORY
DESCRIPTOR.message_types_by_name['Command'] = _COMMAND
DESCRIPTOR.message_types_by_name['Env'] = _ENV
DESCRIPTOR.message_types_by_name['Configuration'] = _CONFIGURATION
DESCRIPTOR.message_types_by_name['Scaling'] = _SCALING
DESCRIPTOR.message_types_by_name['Application'] = _APPLICATION
DESCRIPTOR.message_types_by_name['ListApplication'] = _LISTAPPLICATION
DESCRIPTOR.enum_types_by_name['TrafficType'] = _TRAFFICTYPE
DESCRIPTOR.enum_types_by_name['DockerImageBuildpack'] = _DOCKERIMAGEBUILDPACK
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Branch = _reflection.GeneratedProtocolMessageType('Branch', (_message.Message,), {
  'DESCRIPTOR' : _BRANCH,
  '__module__' : 'application.v1alpha1.application_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.Branch)
  })
_sym_db.RegisterMessage(Branch)

Repository = _reflection.GeneratedProtocolMessageType('Repository', (_message.Message,), {
  'DESCRIPTOR' : _REPOSITORY,
  '__module__' : 'application.v1alpha1.application_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.Repository)
  })
_sym_db.RegisterMessage(Repository)

Command = _reflection.GeneratedProtocolMessageType('Command', (_message.Message,), {
  'DESCRIPTOR' : _COMMAND,
  '__module__' : 'application.v1alpha1.application_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.Command)
  })
_sym_db.RegisterMessage(Command)

Env = _reflection.GeneratedProtocolMessageType('Env', (_message.Message,), {
  'DESCRIPTOR' : _ENV,
  '__module__' : 'application.v1alpha1.application_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.Env)
  })
_sym_db.RegisterMessage(Env)

Configuration = _reflection.GeneratedProtocolMessageType('Configuration', (_message.Message,), {
  'DESCRIPTOR' : _CONFIGURATION,
  '__module__' : 'application.v1alpha1.application_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.Configuration)
  })
_sym_db.RegisterMessage(Configuration)

Scaling = _reflection.GeneratedProtocolMessageType('Scaling', (_message.Message,), {
  'DESCRIPTOR' : _SCALING,
  '__module__' : 'application.v1alpha1.application_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.Scaling)
  })
_sym_db.RegisterMessage(Scaling)

Application = _reflection.GeneratedProtocolMessageType('Application', (_message.Message,), {
  'DESCRIPTOR' : _APPLICATION,
  '__module__' : 'application.v1alpha1.application_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.Application)
  })
_sym_db.RegisterMessage(Application)

ListApplication = _reflection.GeneratedProtocolMessageType('ListApplication', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPPLICATION,
  '__module__' : 'application.v1alpha1.application_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.ListApplication)
  })
_sym_db.RegisterMessage(ListApplication)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
