<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.ListCountriesResponse</code>
 */
class ListCountriesResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.CountryList countries = 1 [json_name = "countries"];</code>
     */
    private $countries;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Accounts\V1alpha1\CountryList[]|\Google\Protobuf\Internal\RepeatedField $countries
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.CountryList countries = 1 [json_name = "countries"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getCountries()
    {
        return $this->countries;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.CountryList countries = 1 [json_name = "countries"];</code>
     * @param \Accounts\V1alpha1\CountryList[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setCountries($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\CountryList::class);
        $this->countries = $arr;

        return $this;
    }

}

