<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Permissions\V1;

/**
 */
class PermissionServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Accounts\V1alpha1\Permissions\V1\CreatePermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreatePermission(\Accounts\V1alpha1\Permissions\V1\CreatePermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.permissions.v1.PermissionService/CreatePermission',
        $argument,
        ['\Accounts\V1alpha1\Permissions\V1\CreatePermissionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Permissions\V1\ListPermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListPermission(\Accounts\V1alpha1\Permissions\V1\ListPermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.permissions.v1.PermissionService/ListPermission',
        $argument,
        ['\Accounts\V1alpha1\Permissions\V1\ListPermissionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Permissions\V1\GetOnePermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOnePermission(\Accounts\V1alpha1\Permissions\V1\GetOnePermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.permissions.v1.PermissionService/GetOnePermission',
        $argument,
        ['\Accounts\V1alpha1\Permissions\V1\GetOnePermissionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Permissions\V1\UpdatePermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdatePermission(\Accounts\V1alpha1\Permissions\V1\UpdatePermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.permissions.v1.PermissionService/UpdatePermission',
        $argument,
        ['\Accounts\V1alpha1\Permissions\V1\UpdatePermissionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Permissions\V1\DeletePermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeletePermission(\Accounts\V1alpha1\Permissions\V1\DeletePermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.permissions.v1.PermissionService/DeletePermission',
        $argument,
        ['\Accounts\V1alpha1\Permissions\V1\DeletePermissionResponse', 'decode'],
        $metadata, $options);
    }

}
