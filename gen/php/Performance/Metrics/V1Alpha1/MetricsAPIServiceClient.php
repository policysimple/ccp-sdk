<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Performance\Metrics\V1Alpha1;

/**
 */
class MetricsAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Performance\Metrics\V1Alpha1\GetMetricsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetMetrics(\Performance\Metrics\V1Alpha1\GetMetricsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.metrics.v1alpha1.MetricsAPIService/GetMetrics',
        $argument,
        ['\Performance\Metrics\V1Alpha1\GetMetricsResponse', 'decode'],
        $metadata, $options);
    }

}
