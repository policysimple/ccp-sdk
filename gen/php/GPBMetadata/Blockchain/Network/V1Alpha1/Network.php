<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network.proto

namespace GPBMetadata\Blockchain\Network\V1Alpha1;

class Network
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
)blockchain/network/v1alpha1/network.protoblockchain.network.v1alpha1"�
Network
id (	Rid!
network_name (	RnetworkName
	framework (	R	framework
type (	Rtype
user_id (	RuserId
status (	Rstatus"�
Organization
id (	Rid
user_id (	RuserId
domain (	Rdomain%
admin_password (	R

admin_user (	R	adminUser#

Channel
id (	Rid\'
organization_id (	RorganizationId#

name (	Rname
org_ids (	RorgIds"�

Invitation
id (	Rid 
from_user_id (	R
fromUserId
email (	Remail
status (	Rstatus#

        , true);

        static::$is_initialized = true;
    }
}
