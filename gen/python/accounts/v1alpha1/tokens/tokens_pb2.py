# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/tokens/tokens.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='accounts/v1alpha1/tokens/tokens.proto',
  package='accounts.v1alpha1.tokens.v1',
  syntax='proto3',
  serialized_options=b'Z9github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/tokens',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n%accounts/v1alpha1/tokens/tokens.proto\x12\x1b\x61\x63\x63ounts.v1alpha1.tokens.v1\"a\n\x15GetOneTokenCCPRequest\x12\x14\n\x05token\x18\x01 \x01(\tR\x05token\x12\x32\n\x03log\x18\x02 \x01(\x0b\x32 .accounts.v1alpha1.tokens.v1.LogR\x03log\"\xc3\x01\n\x16GetOneTokenCCPResponse\x12\x17\n\x07user_id\x18\x01 \x01(\rR\x06userId\x12\x14\n\x05token\x18\x02 \x01(\tR\x05token\x12\x14\n\x05\x65mail\x18\x03 \x01(\tR\x05\x65mail\x12\x1e\n\x0buser_id_dex\x18\x04 \x01(\tR\tuserIdDex\x12\x1d\n\nfirst_name\x18\x05 \x01(\tR\tfirstName\x12%\n\x0e\x65mail_verified\x18\x06 \x01(\x08R\remailVerified\"4\n\x15\x43reateTokenCCPRequest\x12\x1b\n\ttoken_dex\x18\x01 \x01(\tR\x08tokenDex\"\x90\x01\n\x16\x43reateTokenCCPResponse\x12\x1b\n\ttoken_ccp\x18\x01 \x01(\tR\x08tokenCcp\x12\x10\n\x03msg\x18\x02 \x01(\tR\x03msg\x12.\n\x13time_expiration_mfa\x18\x05 \x01(\x03R\x11timeExpirationMfa\x12\x17\n\x07user_id\x18\x06 \x01(\tR\x06userId\"1\n\x12LogoutTokenRequest\x12\x1b\n\ttoken_ccp\x18\x01 \x01(\tR\x08tokenCcp\"\'\n\x13LogoutTokenResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\"\xa7\x01\n\x03Log\x12\x17\n\x07user_id\x18\x01 \x01(\tR\x06userId\x12\x16\n\x06system\x18\x02 \x01(\tR\x06system\x12\x1d\n\nclient_web\x18\x03 \x01(\tR\tclientWeb\x12\x0e\n\x02ip\x18\x04 \x01(\tR\x02ip\x12\x12\n\x04\x64\x61te\x18\x05 \x01(\tR\x04\x64\x61te\x12\x14\n\x05token\x18\x06 \x01(\tR\x05token\x12\x16\n\x06status\x18\x07 \x01(\x08R\x06status\"E\n\x0fSaveLogsRequest\x12\x32\n\x03log\x18\x01 \x01(\x0b\x32 .accounts.v1alpha1.tokens.v1.LogR\x03log\"$\n\x10SaveLogsResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\"&\n\x0bLogsRequest\x12\x17\n\x07user_id\x18\x01 \x01(\tR\x06userId\"D\n\x0cLogsResponse\x12\x34\n\x04logs\x18\x01 \x03(\x0b\x32 .accounts.v1alpha1.tokens.v1.LogR\x04logs\"4\n\x19\x45nableOrDisableMFARequest\x12\x17\n\x07user_id\x18\x01 \x01(\tR\x06userId\"D\n\x1a\x45nableOrDisableMFAResponse\x12\x10\n\x03msg\x18\x01 \x01(\tR\x03msg\x12\x14\n\x05\x65rror\x18\x02 \x01(\tR\x05\x65rror\"?\n\nMFARequest\x12\x17\n\x07user_id\x18\x01 \x01(\tR\x06userId\x12\x18\n\x07numbers\x18\x03 \x03(\x05R\x07numbers\"R\n\x0bMFAResponse\x12\x1b\n\ttoken_ccp\x18\x01 \x01(\tR\x08tokenCcp\x12\x10\n\x03msg\x18\x02 \x01(\tR\x03msg\x12\x14\n\x05\x65rror\x18\x03 \x01(\tR\x05\x65rrorB;Z9github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/tokensb\x06proto3'
)




_GETONETOKENCCPREQUEST = _descriptor.Descriptor(
  name='GetOneTokenCCPRequest',
  full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='token', full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPRequest.token', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='token', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='log', full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPRequest.log', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='log', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=70,
  serialized_end=167,
)


_GETONETOKENCCPRESPONSE = _descriptor.Descriptor(
  name='GetOneTokenCCPResponse',
  full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse.user_id', index=0,
      number=1, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='token', full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse.token', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='token', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='email', full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse.email', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='email', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='user_id_dex', full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse.user_id_dex', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userIdDex', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='first_name', full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse.first_name', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='firstName', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='email_verified', full_name='accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse.email_verified', index=5,
      number=6, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='emailVerified', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=170,
  serialized_end=365,
)


_CREATETOKENCCPREQUEST = _descriptor.Descriptor(
  name='CreateTokenCCPRequest',
  full_name='accounts.v1alpha1.tokens.v1.CreateTokenCCPRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='token_dex', full_name='accounts.v1alpha1.tokens.v1.CreateTokenCCPRequest.token_dex', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tokenDex', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=367,
  serialized_end=419,
)


_CREATETOKENCCPRESPONSE = _descriptor.Descriptor(
  name='CreateTokenCCPResponse',
  full_name='accounts.v1alpha1.tokens.v1.CreateTokenCCPResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='token_ccp', full_name='accounts.v1alpha1.tokens.v1.CreateTokenCCPResponse.token_ccp', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tokenCcp', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='msg', full_name='accounts.v1alpha1.tokens.v1.CreateTokenCCPResponse.msg', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='time_expiration_mfa', full_name='accounts.v1alpha1.tokens.v1.CreateTokenCCPResponse.time_expiration_mfa', index=2,
      number=5, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='timeExpirationMfa', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.tokens.v1.CreateTokenCCPResponse.user_id', index=3,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_end=566,
)


_LOGOUTTOKENREQUEST = _descriptor.Descriptor(
  name='LogoutTokenRequest',
  full_name='accounts.v1alpha1.tokens.v1.LogoutTokenRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='token_ccp', full_name='accounts.v1alpha1.tokens.v1.LogoutTokenRequest.token_ccp', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tokenCcp', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=568,
  serialized_end=617,
)


_LOGOUTTOKENRESPONSE = _descriptor.Descriptor(
  name='LogoutTokenResponse',
  full_name='accounts.v1alpha1.tokens.v1.LogoutTokenResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='accounts.v1alpha1.tokens.v1.LogoutTokenResponse.msg', index=0,
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
  serialized_start=619,
  serialized_end=658,
)


_LOG = _descriptor.Descriptor(
  name='Log',
  full_name='accounts.v1alpha1.tokens.v1.Log',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.tokens.v1.Log.user_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='system', full_name='accounts.v1alpha1.tokens.v1.Log.system', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='system', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='client_web', full_name='accounts.v1alpha1.tokens.v1.Log.client_web', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='clientWeb', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ip', full_name='accounts.v1alpha1.tokens.v1.Log.ip', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ip', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='date', full_name='accounts.v1alpha1.tokens.v1.Log.date', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='date', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='token', full_name='accounts.v1alpha1.tokens.v1.Log.token', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='token', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='accounts.v1alpha1.tokens.v1.Log.status', index=6,
      number=7, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
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
  serialized_start=661,
  serialized_end=828,
)


_SAVELOGSREQUEST = _descriptor.Descriptor(
  name='SaveLogsRequest',
  full_name='accounts.v1alpha1.tokens.v1.SaveLogsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='log', full_name='accounts.v1alpha1.tokens.v1.SaveLogsRequest.log', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='log', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=830,
  serialized_end=899,
)


_SAVELOGSRESPONSE = _descriptor.Descriptor(
  name='SaveLogsResponse',
  full_name='accounts.v1alpha1.tokens.v1.SaveLogsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='accounts.v1alpha1.tokens.v1.SaveLogsResponse.msg', index=0,
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
  serialized_start=901,
  serialized_end=937,
)


_LOGSREQUEST = _descriptor.Descriptor(
  name='LogsRequest',
  full_name='accounts.v1alpha1.tokens.v1.LogsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.tokens.v1.LogsRequest.user_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=939,
  serialized_end=977,
)


_LOGSRESPONSE = _descriptor.Descriptor(
  name='LogsResponse',
  full_name='accounts.v1alpha1.tokens.v1.LogsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='logs', full_name='accounts.v1alpha1.tokens.v1.LogsResponse.logs', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='logs', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=979,
  serialized_end=1047,
)


_ENABLEORDISABLEMFAREQUEST = _descriptor.Descriptor(
  name='EnableOrDisableMFARequest',
  full_name='accounts.v1alpha1.tokens.v1.EnableOrDisableMFARequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.tokens.v1.EnableOrDisableMFARequest.user_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_end=1101,
)


_ENABLEORDISABLEMFARESPONSE = _descriptor.Descriptor(
  name='EnableOrDisableMFAResponse',
  full_name='accounts.v1alpha1.tokens.v1.EnableOrDisableMFAResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='msg', full_name='accounts.v1alpha1.tokens.v1.EnableOrDisableMFAResponse.msg', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error', full_name='accounts.v1alpha1.tokens.v1.EnableOrDisableMFAResponse.error', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='error', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1103,
  serialized_end=1171,
)


_MFAREQUEST = _descriptor.Descriptor(
  name='MFARequest',
  full_name='accounts.v1alpha1.tokens.v1.MFARequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='user_id', full_name='accounts.v1alpha1.tokens.v1.MFARequest.user_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='userId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='numbers', full_name='accounts.v1alpha1.tokens.v1.MFARequest.numbers', index=1,
      number=3, type=5, cpp_type=1, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='numbers', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1173,
  serialized_end=1236,
)


_MFARESPONSE = _descriptor.Descriptor(
  name='MFAResponse',
  full_name='accounts.v1alpha1.tokens.v1.MFAResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='token_ccp', full_name='accounts.v1alpha1.tokens.v1.MFAResponse.token_ccp', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tokenCcp', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='msg', full_name='accounts.v1alpha1.tokens.v1.MFAResponse.msg', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='msg', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error', full_name='accounts.v1alpha1.tokens.v1.MFAResponse.error', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='error', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=1238,
  serialized_end=1320,
)

_GETONETOKENCCPREQUEST.fields_by_name['log'].message_type = _LOG
_SAVELOGSREQUEST.fields_by_name['log'].message_type = _LOG
_LOGSRESPONSE.fields_by_name['logs'].message_type = _LOG
DESCRIPTOR.message_types_by_name['GetOneTokenCCPRequest'] = _GETONETOKENCCPREQUEST
DESCRIPTOR.message_types_by_name['GetOneTokenCCPResponse'] = _GETONETOKENCCPRESPONSE
DESCRIPTOR.message_types_by_name['CreateTokenCCPRequest'] = _CREATETOKENCCPREQUEST
DESCRIPTOR.message_types_by_name['CreateTokenCCPResponse'] = _CREATETOKENCCPRESPONSE
DESCRIPTOR.message_types_by_name['LogoutTokenRequest'] = _LOGOUTTOKENREQUEST
DESCRIPTOR.message_types_by_name['LogoutTokenResponse'] = _LOGOUTTOKENRESPONSE
DESCRIPTOR.message_types_by_name['Log'] = _LOG
DESCRIPTOR.message_types_by_name['SaveLogsRequest'] = _SAVELOGSREQUEST
DESCRIPTOR.message_types_by_name['SaveLogsResponse'] = _SAVELOGSRESPONSE
DESCRIPTOR.message_types_by_name['LogsRequest'] = _LOGSREQUEST
DESCRIPTOR.message_types_by_name['LogsResponse'] = _LOGSRESPONSE
DESCRIPTOR.message_types_by_name['EnableOrDisableMFARequest'] = _ENABLEORDISABLEMFAREQUEST
DESCRIPTOR.message_types_by_name['EnableOrDisableMFAResponse'] = _ENABLEORDISABLEMFARESPONSE
DESCRIPTOR.message_types_by_name['MFARequest'] = _MFAREQUEST
DESCRIPTOR.message_types_by_name['MFAResponse'] = _MFARESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GetOneTokenCCPRequest = _reflection.GeneratedProtocolMessageType('GetOneTokenCCPRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETONETOKENCCPREQUEST,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.GetOneTokenCCPRequest)
  })
_sym_db.RegisterMessage(GetOneTokenCCPRequest)

GetOneTokenCCPResponse = _reflection.GeneratedProtocolMessageType('GetOneTokenCCPResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETONETOKENCCPRESPONSE,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse)
  })
_sym_db.RegisterMessage(GetOneTokenCCPResponse)

CreateTokenCCPRequest = _reflection.GeneratedProtocolMessageType('CreateTokenCCPRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATETOKENCCPREQUEST,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.CreateTokenCCPRequest)
  })
_sym_db.RegisterMessage(CreateTokenCCPRequest)

CreateTokenCCPResponse = _reflection.GeneratedProtocolMessageType('CreateTokenCCPResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATETOKENCCPRESPONSE,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.CreateTokenCCPResponse)
  })
_sym_db.RegisterMessage(CreateTokenCCPResponse)

LogoutTokenRequest = _reflection.GeneratedProtocolMessageType('LogoutTokenRequest', (_message.Message,), {
  'DESCRIPTOR' : _LOGOUTTOKENREQUEST,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.LogoutTokenRequest)
  })
_sym_db.RegisterMessage(LogoutTokenRequest)

LogoutTokenResponse = _reflection.GeneratedProtocolMessageType('LogoutTokenResponse', (_message.Message,), {
  'DESCRIPTOR' : _LOGOUTTOKENRESPONSE,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.LogoutTokenResponse)
  })
_sym_db.RegisterMessage(LogoutTokenResponse)

Log = _reflection.GeneratedProtocolMessageType('Log', (_message.Message,), {
  'DESCRIPTOR' : _LOG,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.Log)
  })
_sym_db.RegisterMessage(Log)

SaveLogsRequest = _reflection.GeneratedProtocolMessageType('SaveLogsRequest', (_message.Message,), {
  'DESCRIPTOR' : _SAVELOGSREQUEST,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.SaveLogsRequest)
  })
_sym_db.RegisterMessage(SaveLogsRequest)

SaveLogsResponse = _reflection.GeneratedProtocolMessageType('SaveLogsResponse', (_message.Message,), {
  'DESCRIPTOR' : _SAVELOGSRESPONSE,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.SaveLogsResponse)
  })
_sym_db.RegisterMessage(SaveLogsResponse)

LogsRequest = _reflection.GeneratedProtocolMessageType('LogsRequest', (_message.Message,), {
  'DESCRIPTOR' : _LOGSREQUEST,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.LogsRequest)
  })
_sym_db.RegisterMessage(LogsRequest)

LogsResponse = _reflection.GeneratedProtocolMessageType('LogsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LOGSRESPONSE,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.LogsResponse)
  })
_sym_db.RegisterMessage(LogsResponse)

EnableOrDisableMFARequest = _reflection.GeneratedProtocolMessageType('EnableOrDisableMFARequest', (_message.Message,), {
  'DESCRIPTOR' : _ENABLEORDISABLEMFAREQUEST,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.EnableOrDisableMFARequest)
  })
_sym_db.RegisterMessage(EnableOrDisableMFARequest)

EnableOrDisableMFAResponse = _reflection.GeneratedProtocolMessageType('EnableOrDisableMFAResponse', (_message.Message,), {
  'DESCRIPTOR' : _ENABLEORDISABLEMFARESPONSE,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.EnableOrDisableMFAResponse)
  })
_sym_db.RegisterMessage(EnableOrDisableMFAResponse)

MFARequest = _reflection.GeneratedProtocolMessageType('MFARequest', (_message.Message,), {
  'DESCRIPTOR' : _MFAREQUEST,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.MFARequest)
  })
_sym_db.RegisterMessage(MFARequest)

MFAResponse = _reflection.GeneratedProtocolMessageType('MFAResponse', (_message.Message,), {
  'DESCRIPTOR' : _MFARESPONSE,
  '__module__' : 'accounts.v1alpha1.tokens.tokens_pb2'
  # @@protoc_insertion_point(class_scope:accounts.v1alpha1.tokens.v1.MFAResponse)
  })
_sym_db.RegisterMessage(MFAResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
