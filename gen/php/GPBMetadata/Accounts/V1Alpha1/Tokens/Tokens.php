<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/tokens/tokens.proto

namespace GPBMetadata\Accounts\V1Alpha1\Tokens;

class Tokens
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�

%accounts/v1alpha1/tokens/tokens.protoaccounts.v1alpha1.tokens.v1"a
GetOneTokenCCPRequest
token (	Rtoken2
log (2 .accounts.v1alpha1.tokens.v1.LogRlog"�
GetOneTokenCCPResponse
user_id (RuserId
token (	Rtoken
email (	Remail
user_id_dex (	R	userIdDex

first_name (	R	firstName%
email_verified (RemailVerified"4
CreateTokenCCPRequest
	token_dex (	RtokenDex"�
CreateTokenCCPResponse
	token_ccp (	RtokenCcp
msg (	Rmsg.
time_expiration_mfa (RtimeExpirationMfa
user_id (	RuserId"1
LogoutTokenRequest
	token_ccp (	RtokenCcp"\'
LogoutTokenResponse
msg (	Rmsg"�
Log
user_id (	RuserId
system (	Rsystem

client_web (	R	clientWeb
ip (	Rip
date (	Rdate
token (	Rtoken
status (Rstatus"E
SaveLogsRequest2
log (2 .accounts.v1alpha1.tokens.v1.LogRlog"$
SaveLogsResponse
msg (	Rmsg"&
LogsRequest
user_id (	RuserId"D
LogsResponse4
logs (2 .accounts.v1alpha1.tokens.v1.LogRlogs"4
EnableOrDisableMFARequest
user_id (	RuserId"D
EnableOrDisableMFAResponse
msg (	Rmsg
error (	Rerror"?

MFARequest
user_id (	RuserId
numbers (Rnumbers"R
MFAResponse
	token_ccp (	RtokenCcp
msg (	Rmsg
error (	RerrorB;Z9github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/tokensbproto3'
        , true);

        static::$is_initialized = true;
    }
}

