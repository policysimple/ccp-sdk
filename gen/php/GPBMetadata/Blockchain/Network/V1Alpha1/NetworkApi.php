<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace GPBMetadata\Blockchain\Network\V1Alpha1;

class NetworkApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Blockchain\Network\V1Alpha1\Network::initOnce();
        \GPBMetadata\Google\Protobuf\GPBEmpty::initOnce();
        $pool->internalAddGeneratedFile(
            '
�(
-blockchain/network/v1alpha1/network_api.protoblockchain.network.v1alpha1google/protobuf/empty.proto"�
CreateNetworkRequest>
network (2$.blockchain.network.v1alpha1.NetworkRnetworkJ
corporation (2(.blockchain.network.v1alpha1.CorporationRcorporation.
ccp_organization_id (	RccpOrganizationId$
ccp_project_id (	RccpProjectId"�
AddPeerToCorporationRequest.
ccp_organization_id (	RccpOrganizationId$
ccp_project_id (	RccpProjectId%
corporation_id (	RcorporationId"�
AddOrdererByNetworkIdRequest>
orderer (2$.blockchain.network.v1alpha1.OrdererRorderer.
ccp_organization_id (	RccpOrganizationId$
ccp_project_id (	RccpProjectId"V
CreateChannelRequest>
channel (2$.blockchain.network.v1alpha1.ChannelRchannel"h
GetBlockchainsRequest
offset (Roffset
limit (Rlimit!
query_params (	RqueryParams"f
GetBlockchainsByUserIdRequest
user_id (	RuserId
offset (Roffset
limit (Rlimit"u
GetPeersByCorporationIdRequest%
corporation_id (	RcorporationId
offset (Roffset
limit (Rlimit"l
GetOrderersByNetworkIdRequest

network_id (	R	networkId
offset (Roffset
limit (Rlimit"*
GetBlockchainByIdRequest
id (	Rid"y
$GetCorporationsByBlockchainIdRequest#
blockchain_id (	RblockchainId
offset (Roffset
limit (Rlimit"�
CreateCorporationRequestJ
corporation (2(.blockchain.network.v1alpha1.CorporationRcorporation.
ccp_organization_id (	RccpOrganizationId$
ccp_project_id (	RccpProjectId"`
SendInvitationRequestG

invitation (2\'.blockchain.network.v1alpha1.InvitationR
invitation"q
CreateNetworkResponse>
network (2$.blockchain.network.v1alpha1.NetworkRnetwork
message (	Rmessage"�
AddPeerToCorporationResponseJ
corporation (2(.blockchain.network.v1alpha1.CorporationRcorporation
message (	Rmessage"y
AddOrdererByNetworkIdResponse>
orderer (2$.blockchain.network.v1alpha1.OrdererRorderer
message (	Rmessage"q
CreateChannelResponse>
channel (2$.blockchain.network.v1alpha1.ChannelRchannel
message (	Rmessage"�
GetBlockchainsResponse@
networks (2$.blockchain.network.v1alpha1.NetworkRnetworks
total (Rtotal
next_url (	RnextUrl!
previous_url (	RpreviousUrl"�
GetBlockchainsByUserIdResponse@
networks (2$.blockchain.network.v1alpha1.NetworkRnetworks
total (Rtotal
next_url (	RnextUrl!
previous_url (	RpreviousUrl"�
GetOrderersByNetworkIdResponse@
orderers (2$.blockchain.network.v1alpha1.OrdererRorderers
total (Rtotal
next_url (	RnextUrl!
previous_url (	RpreviousUrl"�
GetPeersByCorporationIdResponse5
peer (2!.blockchain.network.v1alpha1.PeerRpeer
total (Rtotal
next_url (	RnextUrl!
previous_url (	RpreviousUrl"[
GetBlockchainByIdResponse>
network (2$.blockchain.network.v1alpha1.NetworkRnetwork"�
%GetCorporationsByBlockchainIdResponseL
corporations (2(.blockchain.network.v1alpha1.CorporationRcorporations
total (Rtotal
next_url (	RnextUrl!
previous_url (	RpreviousUrl"�
CreateCorporationResponseJ
corporation (2(.blockchain.network.v1alpha1.CorporationRcorporation
message (	Rmessage"{
SendInvitationResponseG

invitation (2\'.blockchain.network.v1alpha1.InvitationR
invitation
message (	Rmessage2�
BlockchainAPIServicev
CreateNetwork1.blockchain.network.v1alpha1.CreateNetworkRequest2.blockchain.network.v1alpha1.CreateNetworkResponse�
AddPeerToCorporation8.blockchain.network.v1alpha1.AddPeerToCorporationRequest9.blockchain.network.v1alpha1.AddPeerToCorporationResponsey
GetBlockchains2.blockchain.network.v1alpha1.GetBlockchainsRequest3.blockchain.network.v1alpha1.GetBlockchainsResponse�
GetBlockchainsByUserId:.blockchain.network.v1alpha1.GetBlockchainsByUserIdRequest;.blockchain.network.v1alpha1.GetBlockchainsByUserIdResponse�
GetBlockchainById5.blockchain.network.v1alpha1.GetBlockchainByIdRequest6.blockchain.network.v1alpha1.GetBlockchainByIdResponse�
GetCorporationsByBlockchainIdA.blockchain.network.v1alpha1.GetCorporationsByBlockchainIdRequestB.blockchain.network.v1alpha1.GetCorporationsByBlockchainIdResponsey
SendInvitation2.blockchain.network.v1alpha1.SendInvitationRequest3.blockchain.network.v1alpha1.SendInvitationResponse�
CreateCorporation5.blockchain.network.v1alpha1.CreateCorporationRequest6.blockchain.network.v1alpha1.CreateCorporationResponsev
CreateChannel1.blockchain.network.v1alpha1.CreateChannelRequest2.blockchain.network.v1alpha1.CreateChannelResponse�
GetPeersByCorporationId;.blockchain.network.v1alpha1.GetPeersByCorporationIdRequest<.blockchain.network.v1alpha1.GetPeersByCorporationIdResponse�
GetOrderersByNetworkId:.blockchain.network.v1alpha1.GetOrderersByNetworkIdRequest;.blockchain.network.v1alpha1.GetOrderersByNetworkIdResponse�
AddOrdererByNetworkId9.blockchain.network.v1alpha1.AddOrdererByNetworkIdRequest:.blockchain.network.v1alpha1.AddOrdererByNetworkIdResponseB>Z<github.com/cuemby/ccp-sdk/gen/go/blockchain/network/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

