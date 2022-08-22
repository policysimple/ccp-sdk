<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Countries\V1;

/**
 */
class CountriesServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Accounts\V1alpha1\Countries\V1\ListCountriesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListCountries(\Accounts\V1alpha1\Countries\V1\ListCountriesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.countries.v1.CountriesService/ListCountries',
        $argument,
        ['\Accounts\V1alpha1\Countries\V1\ListCountriesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Countries\V1\GetOneCountryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneCountry(\Accounts\V1alpha1\Countries\V1\GetOneCountryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.countries.v1.CountriesService/GetOneCountry',
        $argument,
        ['\Accounts\V1alpha1\Countries\V1\GetOneCountryResponse', 'decode'],
        $metadata, $options);
    }

}
