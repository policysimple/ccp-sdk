<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Artifacts\Artifacts\V1Alpha1;

/**
 */
class RegistryArtifactsAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Artifacts\Artifacts\V1Alpha1\ListArtifactsRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListArtifactsRegistry(\Artifacts\Artifacts\V1Alpha1\ListArtifactsRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService/ListArtifactsRegistry',
        $argument,
        ['\Artifacts\Artifacts\V1Alpha1\ListArtifactsRegistryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Artifacts\Artifacts\V1Alpha1\CreateLabelArtifactsRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateLabelArtifactsRegistry(\Artifacts\Artifacts\V1Alpha1\CreateLabelArtifactsRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService/CreateLabelArtifactsRegistry',
        $argument,
        ['\Artifacts\Artifacts\V1Alpha1\CreateLabelArtifactsRegistryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Artifacts\Artifacts\V1Alpha1\AddLabelArtifactsRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AddLabelArtifactsRegistry(\Artifacts\Artifacts\V1Alpha1\AddLabelArtifactsRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService/AddLabelArtifactsRegistry',
        $argument,
        ['\Artifacts\Artifacts\V1Alpha1\AddLabelArtifactsRegistryResponse', 'decode'],
        $metadata, $options);
    }

}
