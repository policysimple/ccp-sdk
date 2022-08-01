<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Performance\Autoscaling\V1Alpha1;

/**
 */
class AutoscalingAgentAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\AgentCreateAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentCreateAutoscaling(\Performance\Autoscaling\V1Alpha1\AgentCreateAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentCreateAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\AgentCreateAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\AgentUpdateAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentUpdateAutoscaling(\Performance\Autoscaling\V1Alpha1\AgentUpdateAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentUpdateAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\AgentUpdateAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\AgentDeleteAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentDeleteAutoscaling(\Performance\Autoscaling\V1Alpha1\AgentDeleteAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentDeleteAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\AgentDeleteAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\AgentGetAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentGetAutoscaling(\Performance\Autoscaling\V1Alpha1\AgentGetAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentGetAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\AgentGetAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Performance\Autoscaling\V1Alpha1\AgentListAutoscalingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentListAutoscaling(\Performance\Autoscaling\V1Alpha1\AgentListAutoscalingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentListAutoscaling',
        $argument,
        ['\Performance\Autoscaling\V1Alpha1\AgentListAutoscalingResponse', 'decode'],
        $metadata, $options);
    }

}
