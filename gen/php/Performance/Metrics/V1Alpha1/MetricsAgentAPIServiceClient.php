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
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\BidiStreamingCall
     */
    public function SaveMetrics($metadata = [], $options = []) {
        return $this->_bidiRequest('/performance.metrics.v1alpha1.MetricsAgentAPIService/SaveMetrics',
        ['\Performance\Metrics\V1Alpha1\SaveMetricsResponse','decode'],
        $metadata, $options);
    }

}
