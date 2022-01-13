<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Vault\V1alpha1;

/**
 */
class VaultServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * /CRUD
     * @param \Vault\V1alpha1\WriteSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function WriteSecret(\Vault\V1alpha1\WriteSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultService/WriteSecret',
        $argument,
        ['\Vault\V1alpha1\WriteSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1alpha1\ReadSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ReadSecret(\Vault\V1alpha1\ReadSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultService/ReadSecret',
        $argument,
        ['\Vault\V1alpha1\ReadSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1alpha1\DeleteSecretRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteSecret(\Vault\V1alpha1\DeleteSecretRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultService/DeleteSecret',
        $argument,
        ['\Vault\V1alpha1\DeleteSecretResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Vault\V1alpha1\ListSecretsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListSecrets(\Vault\V1alpha1\ListSecretsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/vault.v1alpha1.VaultService/ListSecrets',
        $argument,
        ['\Vault\V1alpha1\ListSecretsResponse', 'decode'],
        $metadata, $options);
    }

}
