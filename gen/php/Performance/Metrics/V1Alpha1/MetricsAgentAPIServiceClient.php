<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Performance\Metrics\V1Alpha1;

/**
 */
class MetricsAgentAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Performance\Metrics\V1Alpha1\SaveMetricsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function SaveMetrics(\Performance\Metrics\V1Alpha1\SaveMetricsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/performance.metrics.v1alpha1.MetricsAgentAPIService/SaveMetrics',
        $argument,
        ['\Performance\Metrics\V1Alpha1\SaveMetricsResponse', 'decode'],
        $metadata, $options);
    }

}
