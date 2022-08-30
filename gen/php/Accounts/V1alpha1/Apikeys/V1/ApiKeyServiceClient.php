<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Apikeys\V1;

/**
 */
class ApiKeyServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Accounts\V1alpha1\Apikeys\V1\CreateApiKeyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateApiKey(\Accounts\V1alpha1\Apikeys\V1\CreateApiKeyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.apikeys.v1.ApiKeyService/CreateApiKey',
        $argument,
        ['\Accounts\V1alpha1\Apikeys\V1\CreateApiKeyResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Apikeys\V1\GetOneApiKeyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneApiKey(\Accounts\V1alpha1\Apikeys\V1\GetOneApiKeyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.apikeys.v1.ApiKeyService/GetOneApiKey',
        $argument,
        ['\Accounts\V1alpha1\Apikeys\V1\GetOneApiKeyResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Apikeys\V1\ListApiKeyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListApiKey(\Accounts\V1alpha1\Apikeys\V1\ListApiKeyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.apikeys.v1.ApiKeyService/ListApiKey',
        $argument,
        ['\Accounts\V1alpha1\Apikeys\V1\ListApiKeyResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Apikeys\V1\UpdateApiKeyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateApiKey(\Accounts\V1alpha1\Apikeys\V1\UpdateApiKeyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.apikeys.v1.ApiKeyService/UpdateApiKey',
        $argument,
        ['\Accounts\V1alpha1\Apikeys\V1\UpdateApiKeyResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Apikeys\V1\DeleteApiKeyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteApiKey(\Accounts\V1alpha1\Apikeys\V1\DeleteApiKeyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.apikeys.v1.ApiKeyService/DeleteApiKey',
        $argument,
        ['\Accounts\V1alpha1\Apikeys\V1\DeleteApiKeyResponse', 'decode'],
        $metadata, $options);
    }

}
