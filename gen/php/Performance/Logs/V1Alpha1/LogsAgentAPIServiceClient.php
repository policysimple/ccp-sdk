<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Performance\Logs\V1Alpha1;

/**
 */
class LogsAgentAPIServiceClient extends \Grpc\BaseStub {

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
    public function SaveLogs($metadata = [], $options = []) {
        return $this->_bidiRequest('/performance.logs.v1alpha1.LogsAgentAPIService/SaveLogs',
        ['\Performance\Logs\V1Alpha1\SaveLogsResponse','decode'],
        $metadata, $options);
    }

}
