# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/permissions/permissions_apis.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from accounts.v1alpha1.permissions import permissions_pb2 as accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='accounts/v1alpha1/permissions/permissions_apis.proto',
  package='accounts.v1alpha1.permissions.v1',
  syntax='proto3',
  serialized_options=b'Z>github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/permissions',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n4accounts/v1alpha1/permissions/permissions_apis.proto\x12 accounts.v1alpha1.permissions.v1\x1a/accounts/v1alpha1/permissions/permissions.proto2\xc9\x05\n\x11PermissionService\x12\x89\x01\n\x10\x43reatePermission\x12\x39.accounts.v1alpha1.permissions.v1.CreatePermissionRequest\x1a:.accounts.v1alpha1.permissions.v1.CreatePermissionResponse\x12\x83\x01\n\x0eListPermission\x12\x37.accounts.v1alpha1.permissions.v1.ListPermissionRequest\x1a\x38.accounts.v1alpha1.permissions.v1.ListPermissionResponse\x12\x89\x01\n\x10GetOnePermission\x12\x39.accounts.v1alpha1.permissions.v1.GetOnePermissionRequest\x1a:.accounts.v1alpha1.permissions.v1.GetOnePermissionResponse\x12\x89\x01\n\x10UpdatePermission\x12\x39.accounts.v1alpha1.permissions.v1.UpdatePermissionRequest\x1a:.accounts.v1alpha1.permissions.v1.UpdatePermissionResponse\x12\x89\x01\n\x10\x44\x65letePermission\x12\x39.accounts.v1alpha1.permissions.v1.DeletePermissionRequest\x1a:.accounts.v1alpha1.permissions.v1.DeletePermissionResponseB@Z>github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/permissionsb\x06proto3'
  ,
  dependencies=[accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2.DESCRIPTOR,])



_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None

_PERMISSIONSERVICE = _descriptor.ServiceDescriptor(
  name='PermissionService',
  full_name='accounts.v1alpha1.permissions.v1.PermissionService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=140,
  serialized_end=853,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreatePermission',
    full_name='accounts.v1alpha1.permissions.v1.PermissionService.CreatePermission',
    index=0,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._CREATEPERMISSIONREQUEST,
    output_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._CREATEPERMISSIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListPermission',
    full_name='accounts.v1alpha1.permissions.v1.PermissionService.ListPermission',
    index=1,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._LISTPERMISSIONREQUEST,
    output_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._LISTPERMISSIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetOnePermission',
    full_name='accounts.v1alpha1.permissions.v1.PermissionService.GetOnePermission',
    index=2,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._GETONEPERMISSIONREQUEST,
    output_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._GETONEPERMISSIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdatePermission',
    full_name='accounts.v1alpha1.permissions.v1.PermissionService.UpdatePermission',
    index=3,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._UPDATEPERMISSIONREQUEST,
    output_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._UPDATEPERMISSIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeletePermission',
    full_name='accounts.v1alpha1.permissions.v1.PermissionService.DeletePermission',
    index=4,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._DELETEPERMISSIONREQUEST,
    output_type=accounts_dot_v1alpha1_dot_permissions_dot_permissions__pb2._DELETEPERMISSIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_PERMISSIONSERVICE)

DESCRIPTOR.services_by_name['PermissionService'] = _PERMISSIONSERVICE

# @@protoc_insertion_point(module_scope)
