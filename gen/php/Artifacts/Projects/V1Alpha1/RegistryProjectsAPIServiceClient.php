<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Artifacts\Projects\V1Alpha1;

/**
 */
class RegistryProjectsAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Artifacts\Projects\V1Alpha1\CreateProjectRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateProjectRegistry(\Artifacts\Projects\V1Alpha1\CreateProjectRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.projects.v1alpha1.RegistryProjectsAPIService/CreateProjectRegistry',
        $argument,
        ['\Artifacts\Projects\V1Alpha1\CreateProjectRegistryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Artifacts\Projects\V1Alpha1\ListProjectsRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListProjectsRegistry(\Artifacts\Projects\V1Alpha1\ListProjectsRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.projects.v1alpha1.RegistryProjectsAPIService/ListProjectsRegistry',
        $argument,
        ['\Artifacts\Projects\V1Alpha1\ListProjectsRegistryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Artifacts\Projects\V1Alpha1\UpdateProjectRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateProjectRegistry(\Artifacts\Projects\V1Alpha1\UpdateProjectRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.projects.v1alpha1.RegistryProjectsAPIService/UpdateProjectRegistry',
        $argument,
        ['\Artifacts\Projects\V1Alpha1\UpdateProjectRegistryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Artifacts\Projects\V1Alpha1\DeleteProjectRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteProjectRegistry(\Artifacts\Projects\V1Alpha1\DeleteProjectRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.projects.v1alpha1.RegistryProjectsAPIService/DeleteProjectRegistry',
        $argument,
        ['\Artifacts\Projects\V1Alpha1\DeleteProjectRegistryResponse', 'decode'],
        $metadata, $options);
    }

}
