<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: search/v1alpha1/search.proto

namespace GPBMetadata\Search\V1Alpha1;

class Search
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
search/v1alpha1/search.protosearch.v1alpha1"�

SearchItem
	object_id (	RobjectId
type (	Rtype
name (	Rname
org_id (	RorgId 
description (	Rdescription
metadata (	Rmetadata9
data (2%.search.v1alpha1.SearchItem.DataEntryRdata7
	DataEntry
key (	Rkey
value (	Rvalue:8B�
io.cuemby.search.v1alpha1BSearchProtoPZ0github.com/cuemby/ccp-sdk/gen/go/search/v1alpha1�PPX�Search.V1Alpha1�Search\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

