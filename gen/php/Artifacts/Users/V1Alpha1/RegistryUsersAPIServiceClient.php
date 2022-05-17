<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Artifacts\Users\V1Alpha1;

/**
 */
class RegistryUsersAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Artifacts\Users\V1Alpha1\CreateUserRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateUserRegistry(\Artifacts\Users\V1Alpha1\CreateUserRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.users.v1alpha1.RegistryUsersAPIService/CreateUserRegistry',
        $argument,
        ['\Artifacts\Users\V1Alpha1\CreateUserRegistryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Artifacts\Users\V1Alpha1\DeleteUserRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteUserRegistry(\Artifacts\Users\V1Alpha1\DeleteUserRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.users.v1alpha1.RegistryUsersAPIService/DeleteUserRegistry',
        $argument,
        ['\Artifacts\Users\V1Alpha1\DeleteUserRegistryResponse', 'decode'],
        $metadata, $options);
    }

}
