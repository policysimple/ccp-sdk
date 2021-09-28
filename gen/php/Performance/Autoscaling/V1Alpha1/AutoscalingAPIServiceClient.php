<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Performance\Autoscaling\V1Alpha1;

/**
 */
class AutoscalingAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\CreateAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateAutoscaling(\Performance\Autoscaling\V1Alpha1\CreateAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAPIService/CreateAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\CreateAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\UpdateAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateAutoscaling(\Performance\Autoscaling\V1Alpha1\UpdateAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAPIService/UpdateAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\UpdateAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\DeleteAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteAutoscaling(\Performance\Autoscaling\V1Alpha1\DeleteAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAPIService/DeleteAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\DeleteAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\GetAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAutoscaling(\Performance\Autoscaling\V1Alpha1\GetAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAPIService/GetAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\GetAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\ListAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ListAutoscaling(\Performance\Autoscaling\V1Alpha1\ListAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAPIService/ListAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\ListAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

}
