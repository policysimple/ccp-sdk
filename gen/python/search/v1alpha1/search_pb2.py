# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: search/v1alpha1/search.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='search/v1alpha1/search.proto',
  package='search.v1alpha1',
  syntax='proto3',
  serialized_options=b'Z0github.com/cuemby/ccp-sdk/gen/go/search/v1alpha1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1csearch/v1alpha1/search.proto\x12\x0fsearch.v1alpha1\"\x9a\x02\n\nSearchItem\x12\x1b\n\tobject_id\x18\x01 \x01(\tR\x08objectId\x12\x12\n\x04type\x18\x02 \x01(\tR\x04type\x12\x12\n\x04name\x18\x03 \x01(\tR\x04name\x12\x15\n\x06org_id\x18\x04 \x01(\tR\x05orgId\x12 \n\x0b\x64\x65scription\x18\x05 \x01(\tR\x0b\x64\x65scription\x12\x1a\n\x08metadata\x18\x06 \x01(\tR\x08metadata\x12\x39\n\x04\x64\x61ta\x18\x07 \x03(\x0b\x32%.search.v1alpha1.SearchItem.DataEntryR\x04\x64\x61ta\x1a\x37\n\tDataEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x42\x32Z0github.com/cuemby/ccp-sdk/gen/go/search/v1alpha1b\x06proto3'
)




_SEARCHITEM_DATAENTRY = _descriptor.Descriptor(
  name='DataEntry',
  full_name='search.v1alpha1.SearchItem.DataEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='search.v1alpha1.SearchItem.DataEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='search.v1alpha1.SearchItem.DataEntry.value', index=1,
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
  serialized_start=277,
  serialized_end=332,
)

_SEARCHITEM = _descriptor.Descriptor(
  name='SearchItem',
  full_name='search.v1alpha1.SearchItem',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='object_id', full_name='search.v1alpha1.SearchItem.object_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='objectId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='search.v1alpha1.SearchItem.type', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='type', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='search.v1alpha1.SearchItem.name', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='name', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='org_id', full_name='search.v1alpha1.SearchItem.org_id', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='orgId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='description', full_name='search.v1alpha1.SearchItem.description', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='description', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='metadata', full_name='search.v1alpha1.SearchItem.metadata', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='metadata', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='data', full_name='search.v1alpha1.SearchItem.data', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='data', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_SEARCHITEM_DATAENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=50,
  serialized_end=332,
)

_SEARCHITEM_DATAENTRY.containing_type = _SEARCHITEM
_SEARCHITEM.fields_by_name['data'].message_type = _SEARCHITEM_DATAENTRY
DESCRIPTOR.message_types_by_name['SearchItem'] = _SEARCHITEM
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

SearchItem = _reflection.GeneratedProtocolMessageType('SearchItem', (_message.Message,), {

  'DataEntry' : _reflection.GeneratedProtocolMessageType('DataEntry', (_message.Message,), {
    'DESCRIPTOR' : _SEARCHITEM_DATAENTRY,
    '__module__' : 'search.v1alpha1.search_pb2'
    # @@protoc_insertion_point(class_scope:search.v1alpha1.SearchItem.DataEntry)
    })
  ,
  'DESCRIPTOR' : _SEARCHITEM,
  '__module__' : 'search.v1alpha1.search_pb2'
  # @@protoc_insertion_point(class_scope:search.v1alpha1.SearchItem)
  })
_sym_db.RegisterMessage(SearchItem)
_sym_db.RegisterMessage(SearchItem.DataEntry)


DESCRIPTOR._options = None
_SEARCHITEM_DATAENTRY._options = None
# @@protoc_insertion_point(module_scope)
