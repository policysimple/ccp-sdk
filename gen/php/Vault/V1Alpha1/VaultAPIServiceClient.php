<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Vault\V1Alpha1;

/**
 */
class VaultAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Vault\V1Alpha1\CreateSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateSecret(\Vault\V1Alpha1\CreateSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/CreateSecret',
        $argument,
        ['\Vault\V1Alpha1\CreateSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1Alpha1\UpdateSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateSecret(\Vault\V1Alpha1\UpdateSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/UpdateSecret',
        $argument,
        ['\Vault\V1Alpha1\UpdateSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1Alpha1\DeleteSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteSecret(\Vault\V1Alpha1\DeleteSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/DeleteSecret',
        $argument,
        ['\Vault\V1Alpha1\DeleteSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1Alpha1\GetSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetSecret(\Vault\V1Alpha1\GetSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/GetSecret',
        $argument,
        ['\Vault\V1Alpha1\GetSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1Alpha1\DeleteOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteOrganization(\Vault\V1Alpha1\DeleteOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/DeleteOrganization',
        $argument,
        ['\Vault\V1Alpha1\DeleteOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1Alpha1\SaveTokenIntegrationsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SaveTokenIntegrations(\Vault\V1Alpha1\SaveTokenIntegrationsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/SaveTokenIntegrations',
        $argument,
        ['\Vault\V1Alpha1\SaveTokenIntegrationsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1Alpha1\GetTokenIntegrationsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetTokenIntegrations(\Vault\V1Alpha1\GetTokenIntegrationsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/GetTokenIntegrations',
        $argument,
        ['\Vault\V1Alpha1\GetTokenIntegrationsResponse', 'decode'],
        $metadata, $options);
    }

}
