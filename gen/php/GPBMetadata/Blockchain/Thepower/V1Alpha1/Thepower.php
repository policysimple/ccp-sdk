<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/thepower/v1alpha1/thepower.proto

namespace GPBMetadata\Blockchain\Thepower\V1Alpha1;

class Thepower
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
+blockchain/thepower/v1alpha1/thepower.protoblockchain.thepower.v1alpha1"�
TpChain
id (	Rid!
chain_number (RchainNumber
user_id (	RuserIdE
chain_nodes (2$.blockchain.thepower.v1alpha1.TpNodeR
chainNodes
status (	Rstatus#
error_details (	RerrorDetails

created_at (	R	createdAt

updated_at (	R	updatedAt"�
TpNode
nodename (	Rnodename
	tpic_port (RtpicPort
api_port (RapiPort
	apis_port (RapisPort
cc_port (RccPorta
crosschain_external (20.blockchain.thepower.v1alpha1.CrosschainExternalRcrosschainExternal"<
CrosschainExternal
host (	Rhost
port (RportB?Z=github.com/cuemby/ccp-sdk/gen/go/blockchain/thepower/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

