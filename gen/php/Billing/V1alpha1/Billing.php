<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/v1alpha1/billing.proto

namespace Billing\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>billing.v1alpha1.Billing</code>
 */
class Billing extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string billing_id = 1 [json_name = "billingId"];</code>
     */
    protected $billing_id = '';
    /**
     * Generated from protobuf field <code>string app_name = 2 [json_name = "appName"];</code>
     */
    protected $app_name = '';
    /**
     * Generated from protobuf field <code>string country = 3 [json_name = "country"];</code>
     */
    protected $country = '';
    /**
     * Generated from protobuf field <code>string organization = 4 [json_name = "organization"];</code>
     */
    protected $organization = '';
    /**
     * Generated from protobuf field <code>string about = 5 [json_name = "about"];</code>
     */
    protected $about = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $billing_id
     *     @type string $app_name
     *     @type string $country
     *     @type string $organization
     *     @type string $about
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Billing\V1Alpha1\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string billing_id = 1 [json_name = "billingId"];</code>
     * @return string
     */
    public function getBillingId()
    {
        return $this->billing_id;
    }

    /**
     * Generated from protobuf field <code>string billing_id = 1 [json_name = "billingId"];</code>
     * @param string $var
     * @return $this
     */
    public function setBillingId($var)
    {
        GPBUtil::checkString($var, True);
        $this->billing_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string app_name = 2 [json_name = "appName"];</code>
     * @return string
     */
    public function getAppName()
    {
        return $this->app_name;
    }

    /**
     * Generated from protobuf field <code>string app_name = 2 [json_name = "appName"];</code>
     * @param string $var
     * @return $this
     */
    public function setAppName($var)
    {
        GPBUtil::checkString($var, True);
        $this->app_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string country = 3 [json_name = "country"];</code>
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Generated from protobuf field <code>string country = 3 [json_name = "country"];</code>
     * @param string $var
     * @return $this
     */
    public function setCountry($var)
    {
        GPBUtil::checkString($var, True);
        $this->country = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string organization = 4 [json_name = "organization"];</code>
     * @return string
     */
    public function getOrganization()
    {
        return $this->organization;
    }

    /**
     * Generated from protobuf field <code>string organization = 4 [json_name = "organization"];</code>
     * @param string $var
     * @return $this
     */
    public function setOrganization($var)
    {
        GPBUtil::checkString($var, True);
        $this->organization = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string about = 5 [json_name = "about"];</code>
     * @return string
     */
    public function getAbout()
    {
        return $this->about;
    }

    /**
     * Generated from protobuf field <code>string about = 5 [json_name = "about"];</code>
     * @param string $var
     * @return $this
     */
    public function setAbout($var)
    {
        GPBUtil::checkString($var, True);
        $this->about = $var;

        return $this;
    }

}

