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

}
