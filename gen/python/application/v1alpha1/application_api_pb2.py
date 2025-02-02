# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: application/v1alpha1/application_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from application.v1alpha1 import application_pb2 as application_dot_v1alpha1_dot_application__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='application/v1alpha1/application_api.proto',
  package='application.v1alpha1',
  syntax='proto3',
  serialized_options=b'Z5github.com/cuemby/ccp-sdk/gen/go/application/v1alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n*application/v1alpha1/application_api.proto\x12\x14\x61pplication.v1alpha1\x1a&application/v1alpha1/application.proto\"O\n&DeleteApplicationsByIntegrationRequest\x12%\n\x0eintegration_id\x18\x01 \x01(\tR\rintegrationId\";\n\'DeleteApplicationsByIntegrationResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\"_\n\x18\x43reateApplicationRequest\x12\x43\n\x0b\x61pplication\x18\x01 \x01(\x0b\x32!.application.v1alpha1.ApplicationR\x0b\x61pplication\"=\n\x19\x43reateApplicationResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\x12\x0e\n\x02id\x18\x03 \x01(\tR\x02id\"7\n\x16ListApplicationRequest\x12\x1d\n\nproject_id\x18\x01 \x01(\tR\tprojectId\"d\n\x17ListApplicationResponse\x12I\n\x0c\x61pplications\x18\x01 \x03(\x0b\x32%.application.v1alpha1.ListApplicationR\x0c\x61pplications\"\'\n\x15GetApplicationRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\"]\n\x16GetApplicationResponse\x12\x43\n\x0b\x61pplication\x18\x01 \x01(\x0b\x32!.application.v1alpha1.ApplicationR\x0b\x61pplication\"\xa8\x01\n\x18\x44\x65leteApplicationRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12 \n\x0bintegration\x18\x03 \x01(\tR\x0bintegration\x12\x1d\n\nproject_id\x18\x04 \x01(\tR\tprojectId\x12\'\n\x0forganization_id\x18\x05 \x01(\tR\x0eorganizationId\"-\n\x19\x44\x65leteApplicationResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\"|\n\x18UpdateApplicationRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12P\n\x0b\x61pplication\x18\x02 \x01(\x0b\x32..application.v1alpha1.CreateApplicationRequestR\x0b\x61pplication\"-\n\x19UpdateApplicationResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\"P\n%ListApplicationsByOrganizationRequest\x12\'\n\x0forganization_id\x18\x01 \x01(\tR\x0eorganizationId\"o\n&ListApplicationsByOrganizationResponse\x12\x45\n\x0c\x61pplications\x18\x01 \x03(\x0b\x32!.application.v1alpha1.ApplicationR\x0c\x61pplications\"M\n$ListApplicationsByIntegrationRequest\x12%\n\x0eintegration_id\x18\x01 \x01(\tR\rintegrationId\"n\n%ListApplicationsByIntegrationResponse\x12\x45\n\x0c\x61pplications\x18\x01 \x03(\x0b\x32!.application.v1alpha1.ApplicationR\x0c\x61pplications2\xad\x08\n\x12\x41pplicationService\x12t\n\x11\x43reateApplication\x12..application.v1alpha1.CreateApplicationRequest\x1a/.application.v1alpha1.CreateApplicationResponse\x12n\n\x0fListApplication\x12,.application.v1alpha1.ListApplicationRequest\x1a-.application.v1alpha1.ListApplicationResponse\x12k\n\x0eGetApplication\x12+.application.v1alpha1.GetApplicationRequest\x1a,.application.v1alpha1.GetApplicationResponse\x12t\n\x11\x44\x65leteApplication\x12..application.v1alpha1.DeleteApplicationRequest\x1a/.application.v1alpha1.DeleteApplicationResponse\x12t\n\x11UpdateApplication\x12..application.v1alpha1.UpdateApplicationRequest\x1a/.application.v1alpha1.UpdateApplicationResponse\x12\x9e\x01\n\x1f\x44\x65leteApplicationsByIntegration\x12<.application.v1alpha1.DeleteApplicationsByIntegrationRequest\x1a=.application.v1alpha1.DeleteApplicationsByIntegrationResponse\x12\x9b\x01\n\x1eListApplicationsByOrganization\x12;.application.v1alpha1.ListApplicationsByOrganizationRequest\x1a<.application.v1alpha1.ListApplicationsByOrganizationResponse\x12\x98\x01\n\x1dListApplicationsByIntegration\x12:.application.v1alpha1.ListApplicationsByIntegrationRequest\x1a;.application.v1alpha1.ListApplicationsByIntegrationResponseB7Z5github.com/cuemby/ccp-sdk/gen/go/application/v1alpha1b\x06proto3'
  ,
  dependencies=[application_dot_v1alpha1_dot_application__pb2.DESCRIPTOR,])




_DELETEAPPLICATIONSBYINTEGRATIONREQUEST = _descriptor.Descriptor(
  name='DeleteApplicationsByIntegrationRequest',
  full_name='application.v1alpha1.DeleteApplicationsByIntegrationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='integration_id', full_name='application.v1alpha1.DeleteApplicationsByIntegrationRequest.integration_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integrationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=108,
  serialized_end=187,
)


_DELETEAPPLICATIONSBYINTEGRATIONRESPONSE = _descriptor.Descriptor(
  name='DeleteApplicationsByIntegrationResponse',
  full_name='application.v1alpha1.DeleteApplicationsByIntegrationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='application.v1alpha1.DeleteApplicationsByIntegrationResponse.msg', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=189,
  serialized_end=248,
)


_CREATEAPPLICATIONREQUEST = _descriptor.Descriptor(
  name='CreateApplicationRequest',
  full_name='application.v1alpha1.CreateApplicationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='application', full_name='application.v1alpha1.CreateApplicationRequest.application', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='application', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=250,
  serialized_end=345,
)


_CREATEAPPLICATIONRESPONSE = _descriptor.Descriptor(
  name='CreateApplicationResponse',
  full_name='application.v1alpha1.CreateApplicationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='application.v1alpha1.CreateApplicationResponse.msg', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='id', full_name='application.v1alpha1.CreateApplicationResponse.id', index=1,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=347,
  serialized_end=408,
)


_LISTAPPLICATIONREQUEST = _descriptor.Descriptor(
  name='ListApplicationRequest',
  full_name='application.v1alpha1.ListApplicationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='project_id', full_name='application.v1alpha1.ListApplicationRequest.project_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=410,
  serialized_end=465,
)


_LISTAPPLICATIONRESPONSE = _descriptor.Descriptor(
  name='ListApplicationResponse',
  full_name='application.v1alpha1.ListApplicationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='applications', full_name='application.v1alpha1.ListApplicationResponse.applications', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='applications', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=467,
  serialized_end=567,
)


_GETAPPLICATIONREQUEST = _descriptor.Descriptor(
  name='GetApplicationRequest',
  full_name='application.v1alpha1.GetApplicationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='application.v1alpha1.GetApplicationRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=569,
  serialized_end=608,
)


_GETAPPLICATIONRESPONSE = _descriptor.Descriptor(
  name='GetApplicationResponse',
  full_name='application.v1alpha1.GetApplicationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='application', full_name='application.v1alpha1.GetApplicationResponse.application', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='application', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=610,
  serialized_end=703,
)


_DELETEAPPLICATIONREQUEST = _descriptor.Descriptor(
  name='DeleteApplicationRequest',
  full_name='application.v1alpha1.DeleteApplicationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='application.v1alpha1.DeleteApplicationRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='application.v1alpha1.DeleteApplicationRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='integration', full_name='application.v1alpha1.DeleteApplicationRequest.integration', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integration', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='project_id', full_name='application.v1alpha1.DeleteApplicationRequest.project_id', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='projectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='application.v1alpha1.DeleteApplicationRequest.organization_id', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=706,
  serialized_end=874,
)


_DELETEAPPLICATIONRESPONSE = _descriptor.Descriptor(
  name='DeleteApplicationResponse',
  full_name='application.v1alpha1.DeleteApplicationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='application.v1alpha1.DeleteApplicationResponse.msg', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=876,
  serialized_end=921,
)


_UPDATEAPPLICATIONREQUEST = _descriptor.Descriptor(
  name='UpdateApplicationRequest',
  full_name='application.v1alpha1.UpdateApplicationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='application.v1alpha1.UpdateApplicationRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='application', full_name='application.v1alpha1.UpdateApplicationRequest.application', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='application', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=923,
  serialized_end=1047,
)


_UPDATEAPPLICATIONRESPONSE = _descriptor.Descriptor(
  name='UpdateApplicationResponse',
  full_name='application.v1alpha1.UpdateApplicationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='application.v1alpha1.UpdateApplicationResponse.msg', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1049,
  serialized_end=1094,
)


_LISTAPPLICATIONSBYORGANIZATIONREQUEST = _descriptor.Descriptor(
  name='ListApplicationsByOrganizationRequest',
  full_name='application.v1alpha1.ListApplicationsByOrganizationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization_id', full_name='application.v1alpha1.ListApplicationsByOrganizationRequest.organization_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='organizationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1096,
  serialized_end=1176,
)


_LISTAPPLICATIONSBYORGANIZATIONRESPONSE = _descriptor.Descriptor(
  name='ListApplicationsByOrganizationResponse',
  full_name='application.v1alpha1.ListApplicationsByOrganizationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='applications', full_name='application.v1alpha1.ListApplicationsByOrganizationResponse.applications', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='applications', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1178,
  serialized_end=1289,
)


_LISTAPPLICATIONSBYINTEGRATIONREQUEST = _descriptor.Descriptor(
  name='ListApplicationsByIntegrationRequest',
  full_name='application.v1alpha1.ListApplicationsByIntegrationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='integration_id', full_name='application.v1alpha1.ListApplicationsByIntegrationRequest.integration_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='integrationId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1291,
  serialized_end=1368,
)


_LISTAPPLICATIONSBYINTEGRATIONRESPONSE = _descriptor.Descriptor(
  name='ListApplicationsByIntegrationResponse',
  full_name='application.v1alpha1.ListApplicationsByIntegrationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='applications', full_name='application.v1alpha1.ListApplicationsByIntegrationResponse.applications', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='applications', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1370,
  serialized_end=1480,
)

_CREATEAPPLICATIONREQUEST.fields_by_name['application'].message_type = application_dot_v1alpha1_dot_application__pb2._APPLICATION
_LISTAPPLICATIONRESPONSE.fields_by_name['applications'].message_type = application_dot_v1alpha1_dot_application__pb2._LISTAPPLICATION
_GETAPPLICATIONRESPONSE.fields_by_name['application'].message_type = application_dot_v1alpha1_dot_application__pb2._APPLICATION
_UPDATEAPPLICATIONREQUEST.fields_by_name['application'].message_type = _CREATEAPPLICATIONREQUEST
_LISTAPPLICATIONSBYORGANIZATIONRESPONSE.fields_by_name['applications'].message_type = application_dot_v1alpha1_dot_application__pb2._APPLICATION
_LISTAPPLICATIONSBYINTEGRATIONRESPONSE.fields_by_name['applications'].message_type = application_dot_v1alpha1_dot_application__pb2._APPLICATION
DESCRIPTOR.message_types_by_name['DeleteApplicationsByIntegrationRequest'] = _DELETEAPPLICATIONSBYINTEGRATIONREQUEST
DESCRIPTOR.message_types_by_name['DeleteApplicationsByIntegrationResponse'] = _DELETEAPPLICATIONSBYINTEGRATIONRESPONSE
DESCRIPTOR.message_types_by_name['CreateApplicationRequest'] = _CREATEAPPLICATIONREQUEST
DESCRIPTOR.message_types_by_name['CreateApplicationResponse'] = _CREATEAPPLICATIONRESPONSE
DESCRIPTOR.message_types_by_name['ListApplicationRequest'] = _LISTAPPLICATIONREQUEST
DESCRIPTOR.message_types_by_name['ListApplicationResponse'] = _LISTAPPLICATIONRESPONSE
DESCRIPTOR.message_types_by_name['GetApplicationRequest'] = _GETAPPLICATIONREQUEST
DESCRIPTOR.message_types_by_name['GetApplicationResponse'] = _GETAPPLICATIONRESPONSE
DESCRIPTOR.message_types_by_name['DeleteApplicationRequest'] = _DELETEAPPLICATIONREQUEST
DESCRIPTOR.message_types_by_name['DeleteApplicationResponse'] = _DELETEAPPLICATIONRESPONSE
DESCRIPTOR.message_types_by_name['UpdateApplicationRequest'] = _UPDATEAPPLICATIONREQUEST
DESCRIPTOR.message_types_by_name['UpdateApplicationResponse'] = _UPDATEAPPLICATIONRESPONSE
DESCRIPTOR.message_types_by_name['ListApplicationsByOrganizationRequest'] = _LISTAPPLICATIONSBYORGANIZATIONREQUEST
DESCRIPTOR.message_types_by_name['ListApplicationsByOrganizationResponse'] = _LISTAPPLICATIONSBYORGANIZATIONRESPONSE
DESCRIPTOR.message_types_by_name['ListApplicationsByIntegrationRequest'] = _LISTAPPLICATIONSBYINTEGRATIONREQUEST
DESCRIPTOR.message_types_by_name['ListApplicationsByIntegrationResponse'] = _LISTAPPLICATIONSBYINTEGRATIONRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

DeleteApplicationsByIntegrationRequest = _reflection.GeneratedProtocolMessageType('DeleteApplicationsByIntegrationRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEAPPLICATIONSBYINTEGRATIONREQUEST,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.DeleteApplicationsByIntegrationRequest)
  })
_sym_db.RegisterMessage(DeleteApplicationsByIntegrationRequest)

DeleteApplicationsByIntegrationResponse = _reflection.GeneratedProtocolMessageType('DeleteApplicationsByIntegrationResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEAPPLICATIONSBYINTEGRATIONRESPONSE,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.DeleteApplicationsByIntegrationResponse)
  })
_sym_db.RegisterMessage(DeleteApplicationsByIntegrationResponse)

CreateApplicationRequest = _reflection.GeneratedProtocolMessageType('CreateApplicationRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEAPPLICATIONREQUEST,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.CreateApplicationRequest)
  })
_sym_db.RegisterMessage(CreateApplicationRequest)

CreateApplicationResponse = _reflection.GeneratedProtocolMessageType('CreateApplicationResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEAPPLICATIONRESPONSE,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.CreateApplicationResponse)
  })
_sym_db.RegisterMessage(CreateApplicationResponse)

ListApplicationRequest = _reflection.GeneratedProtocolMessageType('ListApplicationRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPPLICATIONREQUEST,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.ListApplicationRequest)
  })
_sym_db.RegisterMessage(ListApplicationRequest)

ListApplicationResponse = _reflection.GeneratedProtocolMessageType('ListApplicationResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPPLICATIONRESPONSE,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.ListApplicationResponse)
  })
_sym_db.RegisterMessage(ListApplicationResponse)

GetApplicationRequest = _reflection.GeneratedProtocolMessageType('GetApplicationRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETAPPLICATIONREQUEST,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.GetApplicationRequest)
  })
_sym_db.RegisterMessage(GetApplicationRequest)

GetApplicationResponse = _reflection.GeneratedProtocolMessageType('GetApplicationResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETAPPLICATIONRESPONSE,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.GetApplicationResponse)
  })
_sym_db.RegisterMessage(GetApplicationResponse)

DeleteApplicationRequest = _reflection.GeneratedProtocolMessageType('DeleteApplicationRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEAPPLICATIONREQUEST,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.DeleteApplicationRequest)
  })
_sym_db.RegisterMessage(DeleteApplicationRequest)

DeleteApplicationResponse = _reflection.GeneratedProtocolMessageType('DeleteApplicationResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEAPPLICATIONRESPONSE,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.DeleteApplicationResponse)
  })
_sym_db.RegisterMessage(DeleteApplicationResponse)

UpdateApplicationRequest = _reflection.GeneratedProtocolMessageType('UpdateApplicationRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEAPPLICATIONREQUEST,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.UpdateApplicationRequest)
  })
_sym_db.RegisterMessage(UpdateApplicationRequest)

UpdateApplicationResponse = _reflection.GeneratedProtocolMessageType('UpdateApplicationResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEAPPLICATIONRESPONSE,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.UpdateApplicationResponse)
  })
_sym_db.RegisterMessage(UpdateApplicationResponse)

ListApplicationsByOrganizationRequest = _reflection.GeneratedProtocolMessageType('ListApplicationsByOrganizationRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPPLICATIONSBYORGANIZATIONREQUEST,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.ListApplicationsByOrganizationRequest)
  })
_sym_db.RegisterMessage(ListApplicationsByOrganizationRequest)

ListApplicationsByOrganizationResponse = _reflection.GeneratedProtocolMessageType('ListApplicationsByOrganizationResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPPLICATIONSBYORGANIZATIONRESPONSE,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.ListApplicationsByOrganizationResponse)
  })
_sym_db.RegisterMessage(ListApplicationsByOrganizationResponse)

ListApplicationsByIntegrationRequest = _reflection.GeneratedProtocolMessageType('ListApplicationsByIntegrationRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPPLICATIONSBYINTEGRATIONREQUEST,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.ListApplicationsByIntegrationRequest)
  })
_sym_db.RegisterMessage(ListApplicationsByIntegrationRequest)

ListApplicationsByIntegrationResponse = _reflection.GeneratedProtocolMessageType('ListApplicationsByIntegrationResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPPLICATIONSBYINTEGRATIONRESPONSE,
  '__module__' : 'application.v1alpha1.application_api_pb2'
  # @@protoc_insertion_point(class_scope:application.v1alpha1.ListApplicationsByIntegrationResponse)
  })
_sym_db.RegisterMessage(ListApplicationsByIntegrationResponse)


DESCRIPTOR._options = None

_APPLICATIONSERVICE = _descriptor.ServiceDescriptor(
  name='ApplicationService',
  full_name='application.v1alpha1.ApplicationService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1483,
  serialized_end=2552,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateApplication',
    full_name='application.v1alpha1.ApplicationService.CreateApplication',
    index=0,
    containing_service=None,
    input_type=_CREATEAPPLICATIONREQUEST,
    output_type=_CREATEAPPLICATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListApplication',
    full_name='application.v1alpha1.ApplicationService.ListApplication',
    index=1,
    containing_service=None,
    input_type=_LISTAPPLICATIONREQUEST,
    output_type=_LISTAPPLICATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetApplication',
    full_name='application.v1alpha1.ApplicationService.GetApplication',
    index=2,
    containing_service=None,
    input_type=_GETAPPLICATIONREQUEST,
    output_type=_GETAPPLICATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteApplication',
    full_name='application.v1alpha1.ApplicationService.DeleteApplication',
    index=3,
    containing_service=None,
    input_type=_DELETEAPPLICATIONREQUEST,
    output_type=_DELETEAPPLICATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateApplication',
    full_name='application.v1alpha1.ApplicationService.UpdateApplication',
    index=4,
    containing_service=None,
    input_type=_UPDATEAPPLICATIONREQUEST,
    output_type=_UPDATEAPPLICATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteApplicationsByIntegration',
    full_name='application.v1alpha1.ApplicationService.DeleteApplicationsByIntegration',
    index=5,
    containing_service=None,
    input_type=_DELETEAPPLICATIONSBYINTEGRATIONREQUEST,
    output_type=_DELETEAPPLICATIONSBYINTEGRATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListApplicationsByOrganization',
    full_name='application.v1alpha1.ApplicationService.ListApplicationsByOrganization',
    index=6,
    containing_service=None,
    input_type=_LISTAPPLICATIONSBYORGANIZATIONREQUEST,
    output_type=_LISTAPPLICATIONSBYORGANIZATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListApplicationsByIntegration',
    full_name='application.v1alpha1.ApplicationService.ListApplicationsByIntegration',
    index=7,
    containing_service=None,
    input_type=_LISTAPPLICATIONSBYINTEGRATIONREQUEST,
    output_type=_LISTAPPLICATIONSBYINTEGRATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_APPLICATIONSERVICE)

DESCRIPTOR.services_by_name['ApplicationService'] = _APPLICATIONSERVICE

# @@protoc_insertion_point(module_scope)
