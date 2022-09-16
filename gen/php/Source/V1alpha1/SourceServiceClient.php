<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Source\V1alpha1;

/**
 */
class SourceServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * PROVIDERS
     * @param \Source\V1alpha1\CreateProviderRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateProvider(\Source\V1alpha1\CreateProviderRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/CreateProvider',
        $argument,
        ['\Source\V1alpha1\CreateProviderResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\ListProvidersRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListProviders(\Source\V1alpha1\ListProvidersRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/ListProviders',
        $argument,
        ['\Source\V1alpha1\ListProvidersResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\GetProviderRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetProvider(\Source\V1alpha1\GetProviderRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/GetProvider',
        $argument,
        ['\Source\V1alpha1\GetProviderResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\GetOneProviderByNameRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneProviderByName(\Source\V1alpha1\GetOneProviderByNameRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/GetOneProviderByName',
        $argument,
        ['\Source\V1alpha1\GetOneProviderByNameResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\UpdateProviderRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateProvider(\Source\V1alpha1\UpdateProviderRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/UpdateProvider',
        $argument,
        ['\Source\V1alpha1\UpdateProviderResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\DeleteProviderRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteProvider(\Source\V1alpha1\DeleteProviderRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/DeleteProvider',
        $argument,
        ['\Source\V1alpha1\DeleteProviderResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\AccountsProvidersRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AccountsProviders(\Source\V1alpha1\AccountsProvidersRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/AccountsProviders',
        $argument,
        ['\Source\V1alpha1\AccountsProvidersResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * INTEGRATIONS
     * @param \Source\V1alpha1\CreateIntegrationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateIntegration(\Source\V1alpha1\CreateIntegrationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/CreateIntegration',
        $argument,
        ['\Source\V1alpha1\CreateIntegrationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\ListIntegrationsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListIntegrations(\Source\V1alpha1\ListIntegrationsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/ListIntegrations',
        $argument,
        ['\Source\V1alpha1\ListIntegrationsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\GetIntegrationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetIntegration(\Source\V1alpha1\GetIntegrationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/GetIntegration',
        $argument,
        ['\Source\V1alpha1\GetIntegrationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\UpdateIntegrationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateIntegration(\Source\V1alpha1\UpdateIntegrationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/UpdateIntegration',
        $argument,
        ['\Source\V1alpha1\UpdateIntegrationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\DeleteIntegrationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteIntegration(\Source\V1alpha1\DeleteIntegrationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/DeleteIntegration',
        $argument,
        ['\Source\V1alpha1\DeleteIntegrationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\DeleteIntegrationsByOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteIntegrationsByOrganization(\Source\V1alpha1\DeleteIntegrationsByOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/DeleteIntegrationsByOrganization',
        $argument,
        ['\Source\V1alpha1\DeleteIntegrationsByOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * List Repositories providers by integrations
     * @param \Source\V1alpha1\ListRepositoriesProviderRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListRepositoriesProvider(\Source\V1alpha1\ListRepositoriesProviderRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/ListRepositoriesProvider',
        $argument,
        ['\Source\V1alpha1\ListRepositoriesProviderResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\GetRepositoryProviderRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetRepositoryProvider(\Source\V1alpha1\GetRepositoryProviderRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/GetRepositoryProvider',
        $argument,
        ['\Source\V1alpha1\GetRepositoryProviderResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * REPOSITORIES
     * @param \Source\V1alpha1\CreateRepositoryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateRepository(\Source\V1alpha1\CreateRepositoryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/CreateRepository',
        $argument,
        ['\Source\V1alpha1\CreateRepositoryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\ListRepositoriesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListRepositories(\Source\V1alpha1\ListRepositoriesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/ListRepositories',
        $argument,
        ['\Source\V1alpha1\ListRepositoriesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\GetRepositoryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetRepository(\Source\V1alpha1\GetRepositoryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/GetRepository',
        $argument,
        ['\Source\V1alpha1\GetRepositoryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\DeleteRepositoryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteRepository(\Source\V1alpha1\DeleteRepositoryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/DeleteRepository',
        $argument,
        ['\Source\V1alpha1\DeleteRepositoryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Source\V1alpha1\UpdateRepositoryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateRepository(\Source\V1alpha1\UpdateRepositoryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/source.v1alpha1.SourceService/UpdateRepository',
        $argument,
        ['\Source\V1alpha1\UpdateRepositoryResponse', 'decode'],
        $metadata, $options);
    }

}
