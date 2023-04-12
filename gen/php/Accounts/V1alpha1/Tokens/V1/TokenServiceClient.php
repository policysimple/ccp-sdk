<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Tokens\V1;

/**
 */
class TokenServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * TOKEN CCP
     * @param \Accounts\V1alpha1\Tokens\V1\CreateTokenCCPRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateTokenCCP(\Accounts\V1alpha1\Tokens\V1\CreateTokenCCPRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.tokens.v1.TokenService/CreateTokenCCP',
        $argument,
        ['\Accounts\V1alpha1\Tokens\V1\CreateTokenCCPResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Tokens\V1\GetOneTokenCCPRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneTokenCCP(\Accounts\V1alpha1\Tokens\V1\GetOneTokenCCPRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.tokens.v1.TokenService/GetOneTokenCCP',
        $argument,
        ['\Accounts\V1alpha1\Tokens\V1\GetOneTokenCCPResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Get Users Email filter
     * Logs by redis
     * @param \Accounts\V1alpha1\Tokens\V1\LogsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function Logs(\Accounts\V1alpha1\Tokens\V1\LogsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.tokens.v1.TokenService/Logs',
        $argument,
        ['\Accounts\V1alpha1\Tokens\V1\LogsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Tokens\V1\SaveLogsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SaveLogs(\Accounts\V1alpha1\Tokens\V1\SaveLogsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.tokens.v1.TokenService/SaveLogs',
        $argument,
        ['\Accounts\V1alpha1\Tokens\V1\SaveLogsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * DOBLE AUTHETICATION
     * @param \Accounts\V1alpha1\Tokens\V1\MFARequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function MFA(\Accounts\V1alpha1\Tokens\V1\MFARequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.tokens.v1.TokenService/MFA',
        $argument,
        ['\Accounts\V1alpha1\Tokens\V1\MFAResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Tokens\V1\EnableOrDisableMFARequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function EnableOrDisableMFA(\Accounts\V1alpha1\Tokens\V1\EnableOrDisableMFARequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.tokens.v1.TokenService/EnableOrDisableMFA',
        $argument,
        ['\Accounts\V1alpha1\Tokens\V1\EnableOrDisableMFAResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Logout
     * @param \Accounts\V1alpha1\Tokens\V1\LogoutTokenRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function LogoutToken(\Accounts\V1alpha1\Tokens\V1\LogoutTokenRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.tokens.v1.TokenService/LogoutToken',
        $argument,
        ['\Accounts\V1alpha1\Tokens\V1\LogoutTokenResponse', 'decode'],
        $metadata, $options);
    }

}
