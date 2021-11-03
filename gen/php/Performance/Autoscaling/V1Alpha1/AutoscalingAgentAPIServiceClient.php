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
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentCreateAutoscaling($metadata = [], $options = []) {
        return $this->_bidiRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentCreateAutoscaling',
        ['\Performance\Autoscaling\V1Alpha1\AgentCreateAutoscalingResponse','decode'],
        $metadata, $options);
    }

    /**
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentUpdateAutoscaling($metadata = [], $options = []) {
        return $this->_bidiRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentUpdateAutoscaling',
        ['\Performance\Autoscaling\V1Alpha1\AgentUpdateAutoscalingResponse','decode'],
        $metadata, $options);
    }

    /**
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentDeleteAutoscaling($metadata = [], $options = []) {
        return $this->_bidiRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentDeleteAutoscaling',
        ['\Performance\Autoscaling\V1Alpha1\AgentDeleteAutoscalingResponse','decode'],
        $metadata, $options);
    }

    /**
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentGetAutoscaling($metadata = [], $options = []) {
        return $this->_bidiRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentGetAutoscaling',
        ['\Performance\Autoscaling\V1Alpha1\AgentGetAutoscalingResponse','decode'],
        $metadata, $options);
    }

    /**
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgentListAutoscaling($metadata = [], $options = []) {
        return $this->_bidiRequest('/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentListAutoscaling',
        ['\Performance\Autoscaling\V1Alpha1\AgentListAutoscalingResponse','decode'],
        $metadata, $options);
    }

}
