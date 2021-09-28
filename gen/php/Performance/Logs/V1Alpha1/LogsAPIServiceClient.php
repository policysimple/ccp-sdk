<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Performance\Logs\V1Alpha1;

/**
 */
class LogsAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Performance\Logs\V1Alpha1\GetLogsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetLogs(\Performance\Logs\V1Alpha1\GetLogsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/performance.logs.v1alpha1.LogsAPIService/GetLogs',
        $argument,
        ['\Performance\Logs\V1Alpha1\GetLogsResponse', 'decode'],
        $metadata, $options);
    }

}
