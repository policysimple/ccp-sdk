# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/invitations/invitations_api.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from accounts.v1alpha1.invitations import invitations_pb2 as accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='accounts/v1alpha1/invitations/invitations_api.proto',
  package='accounts.v1alpha1.invitations.v1',
  syntax='proto3',
  serialized_options=b'Z>github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/invitations',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n3accounts/v1alpha1/invitations/invitations_api.proto\x12 accounts.v1alpha1.invitations.v1\x1a/accounts/v1alpha1/invitations/invitations.proto2\xff\x06\n\x11InvitationService\x12\x8f\x01\n\x12SendInvitationUser\x12;.accounts.v1alpha1.invitations.v1.SendInvitationUserRequest\x1a<.accounts.v1alpha1.invitations.v1.SendInvitationUserResponse\x12\x8c\x01\n\x11GetInvitationUser\x12:.accounts.v1alpha1.invitations.v1.GetInvitationUserRequest\x1a;.accounts.v1alpha1.invitations.v1.GetInvitationUserResponse\x12\x92\x01\n\x13\x41greeInvitationUser\x12<.accounts.v1alpha1.invitations.v1.AgreeInvitationUserRequest\x1a=.accounts.v1alpha1.invitations.v1.AgreeInvitationUserResponse\x12\x8f\x01\n\x12ListInvitationSend\x12;.accounts.v1alpha1.invitations.v1.ListInvitationSendRequest\x1a<.accounts.v1alpha1.invitations.v1.ListInvitationSendResponse\x12\x89\x01\n\x10\x44\x65leteInvitation\x12\x39.accounts.v1alpha1.invitations.v1.DeleteInvitationRequest\x1a:.accounts.v1alpha1.invitations.v1.DeleteInvitationResponse\x12\x95\x01\n\x14ReactivateInvitation\x12=.accounts.v1alpha1.invitations.v1.ReactivateInvitationRequest\x1a>.accounts.v1alpha1.invitations.v1.ReactivateInvitationResponseB@Z>github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/invitationsb\x06proto3'
  ,
  dependencies=[accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.DESCRIPTOR,])



_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None

_INVITATIONSERVICE = _descriptor.ServiceDescriptor(
  name='InvitationService',
  full_name='accounts.v1alpha1.invitations.v1.InvitationService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=139,
  serialized_end=1034,
  methods=[
  _descriptor.MethodDescriptor(
    name='SendInvitationUser',
    full_name='accounts.v1alpha1.invitations.v1.InvitationService.SendInvitationUser',
    index=0,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._SENDINVITATIONUSERREQUEST,
    output_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._SENDINVITATIONUSERRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetInvitationUser',
    full_name='accounts.v1alpha1.invitations.v1.InvitationService.GetInvitationUser',
    index=1,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._GETINVITATIONUSERREQUEST,
    output_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._GETINVITATIONUSERRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='AgreeInvitationUser',
    full_name='accounts.v1alpha1.invitations.v1.InvitationService.AgreeInvitationUser',
    index=2,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._AGREEINVITATIONUSERREQUEST,
    output_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._AGREEINVITATIONUSERRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListInvitationSend',
    full_name='accounts.v1alpha1.invitations.v1.InvitationService.ListInvitationSend',
    index=3,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._LISTINVITATIONSENDREQUEST,
    output_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._LISTINVITATIONSENDRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteInvitation',
    full_name='accounts.v1alpha1.invitations.v1.InvitationService.DeleteInvitation',
    index=4,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._DELETEINVITATIONREQUEST,
    output_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._DELETEINVITATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ReactivateInvitation',
    full_name='accounts.v1alpha1.invitations.v1.InvitationService.ReactivateInvitation',
    index=5,
    containing_service=None,
    input_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._REACTIVATEINVITATIONREQUEST,
    output_type=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2._REACTIVATEINVITATIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_INVITATIONSERVICE)

DESCRIPTOR.services_by_name['InvitationService'] = _INVITATIONSERVICE

# @@protoc_insertion_point(module_scope)
