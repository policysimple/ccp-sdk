<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Application\V1alpha1;

/**
 * import "application.proto";
 */
class ApplicationServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * Application
     * @param \Application\V1alpha1\CreateApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateApplication(\Application\V1alpha1\CreateApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/application.v1alpha1.ApplicationService/CreateApplication',
        $argument,
        ['\Application\V1alpha1\CreateApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Application\V1alpha1\ListApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListApplication(\Application\V1alpha1\ListApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/application.v1alpha1.ApplicationService/ListApplication',
        $argument,
        ['\Application\V1alpha1\ListApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Application\V1alpha1\GetApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetApplication(\Application\V1alpha1\GetApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/application.v1alpha1.ApplicationService/GetApplication',
        $argument,
        ['\Application\V1alpha1\GetApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Application\V1alpha1\DeleteApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteApplication(\Application\V1alpha1\DeleteApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/application.v1alpha1.ApplicationService/DeleteApplication',
        $argument,
        ['\Application\V1alpha1\DeleteApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Application\V1alpha1\UpdateApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateApplication(\Application\V1alpha1\UpdateApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/application.v1alpha1.ApplicationService/UpdateApplication',
        $argument,
        ['\Application\V1alpha1\UpdateApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Application\V1alpha1\DeleteApplicationsByIntegrationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteApplicationsByIntegration(\Application\V1alpha1\DeleteApplicationsByIntegrationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/application.v1alpha1.ApplicationService/DeleteApplicationsByIntegration',
        $argument,
        ['\Application\V1alpha1\DeleteApplicationsByIntegrationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Application\V1alpha1\ListApplicationsByOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListApplicationsByOrganization(\Application\V1alpha1\ListApplicationsByOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/application.v1alpha1.ApplicationService/ListApplicationsByOrganization',
        $argument,
        ['\Application\V1alpha1\ListApplicationsByOrganizationResponse', 'decode'],
        $metadata, $options);
    }

}
