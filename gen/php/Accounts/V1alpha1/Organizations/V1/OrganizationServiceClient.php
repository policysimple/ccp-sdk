<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Organizations\V1;

/**
 */
class OrganizationServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * /Organization
     * @param \Accounts\V1alpha1\Organizations\V1\CreateOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateOrganization(\Accounts\V1alpha1\Organizations\V1\CreateOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.organizations.v1.OrganizationService/CreateOrganization',
        $argument,
        ['\Accounts\V1alpha1\Organizations\V1\CreateOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Organizations\V1\ListOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListOrganization(\Accounts\V1alpha1\Organizations\V1\ListOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.organizations.v1.OrganizationService/ListOrganization',
        $argument,
        ['\Accounts\V1alpha1\Organizations\V1\ListOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Organizations\V1\GetOneOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneOrganization(\Accounts\V1alpha1\Organizations\V1\GetOneOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.organizations.v1.OrganizationService/GetOneOrganization',
        $argument,
        ['\Accounts\V1alpha1\Organizations\V1\GetOneOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Organizations\V1\UpdateOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateOrganization(\Accounts\V1alpha1\Organizations\V1\UpdateOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.organizations.v1.OrganizationService/UpdateOrganization',
        $argument,
        ['\Accounts\V1alpha1\Organizations\V1\UpdateOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Organizations\V1\DeleteOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteOrganization(\Accounts\V1alpha1\Organizations\V1\DeleteOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.organizations.v1.OrganizationService/DeleteOrganization',
        $argument,
        ['\Accounts\V1alpha1\Organizations\V1\DeleteOrganizationResponse', 'decode'],
        $metadata, $options);
    }

}
