<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Vault\V1alpha1;

/**
 * ======= Metadata =======
 * Key                Value
 * ---                -----
 * created_time       2022-01-21T16:44:14.254178235Z
 * custom_metadata    <nil>
 * deletion_time      n/a
 * destroyed          false
 * version            1
 *
 * ====== Data ======
 * Key         Value
 * ---         -----
 * password    static-password
 * username    static-user
 *
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
     * @param \Vault\V1alpha1\CreateSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateSecret(\Vault\V1alpha1\CreateSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/CreateSecret',
        $argument,
        ['\Vault\V1alpha1\CreateSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1alpha1\UpdateSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateSecret(\Vault\V1alpha1\UpdateSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/UpdateSecret',
        $argument,
        ['\Vault\V1alpha1\UpdateSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1alpha1\DeleteSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteSecret(\Vault\V1alpha1\DeleteSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/DeleteSecret',
        $argument,
        ['\Vault\V1alpha1\DeleteSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1alpha1\GetSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetSecret(\Vault\V1alpha1\GetSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/GetSecret',
        $argument,
        ['\Vault\V1alpha1\GetSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1alpha1\ListSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListSecret(\Vault\V1alpha1\ListSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultAPIService/ListSecret',
        $argument,
        ['\Vault\V1alpha1\ListSecretResponse', 'decode'],
        $metadata, $options);
    }

}
