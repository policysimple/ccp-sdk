<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Searchs\V1;

/**
 */
class SearchServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Accounts\V1alpha1\Searchs\V1\SearchGlobalRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SearchGlobal(\Accounts\V1alpha1\Searchs\V1\SearchGlobalRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.searchs.v1.SearchService/SearchGlobal',
        $argument,
        ['\Accounts\V1alpha1\Searchs\V1\SearchGlobalResponse', 'decode'],
        $metadata, $options);
    }

}
