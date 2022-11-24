<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Search\V1Alpha1;

/**
 */
class SearchAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Search\V1Alpha1\SearchRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function Search(\Search\V1Alpha1\SearchRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/search.v1alpha1.SearchAPIService/Search',
        $argument,
        ['\Search\V1Alpha1\SearchResponse', 'decode'],
        $metadata, $options);
    }

}
