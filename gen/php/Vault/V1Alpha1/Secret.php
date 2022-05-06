<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vault/v1alpha1/vault.proto

namespace Vault\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vault.v1alpha1.Secret</code>
 */
class Secret extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>string application_id = 2 [json_name = "applicationId"];</code>
     */
    protected $application_id = '';
    /**
     * Generated from protobuf field <code>string namespace = 3 [json_name = "namespace"];</code>
     */
    protected $namespace = '';
    /**
     * Generated from protobuf field <code>.vault.v1alpha1.Metadata metadata = 4 [json_name = "metadata"];</code>
     */
    protected $metadata = null;
    /**
     * Generated from protobuf field <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     */
    protected $data = null;
    /**
     * Generated from protobuf field <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     */
    protected $warnings = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $project_id
     *     @type string $application_id
     *     @type string $namespace
     *     @type \Vault\V1Alpha1\Metadata $metadata
     *     @type \Vault\V1Alpha1\SecretData $data
     *     @type \Vault\V1Alpha1\SecretWarnings $warnings
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vault\V1Alpha1\Vault::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @param int $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkUint32($var);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string application_id = 2 [json_name = "applicationId"];</code>
     * @return string
     */
    public function getApplicationId()
    {
        return $this->application_id;
    }

    /**
     * Generated from protobuf field <code>string application_id = 2 [json_name = "applicationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setApplicationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->application_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string namespace = 3 [json_name = "namespace"];</code>
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }

    /**
     * Generated from protobuf field <code>string namespace = 3 [json_name = "namespace"];</code>
     * @param string $var
     * @return $this
     */
    public function setNamespace($var)
    {
        GPBUtil::checkString($var, True);
        $this->namespace = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.Metadata metadata = 4 [json_name = "metadata"];</code>
     * @return \Vault\V1Alpha1\Metadata|null
     */
    public function getMetadata()
    {
        return $this->metadata;
    }

    public function hasMetadata()
    {
        return isset($this->metadata);
    }

    public function clearMetadata()
    {
        unset($this->metadata);
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.Metadata metadata = 4 [json_name = "metadata"];</code>
     * @param \Vault\V1Alpha1\Metadata $var
     * @return $this
     */
    public function setMetadata($var)
    {
        GPBUtil::checkMessage($var, \Vault\V1Alpha1\Metadata::class);
        $this->metadata = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     * @return \Vault\V1Alpha1\SecretData|null
     */
    public function getData()
    {
        return $this->data;
    }

    public function hasData()
    {
        return isset($this->data);
    }

    public function clearData()
    {
        unset($this->data);
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     * @param \Vault\V1Alpha1\SecretData $var
     * @return $this
     */
    public function setData($var)
    {
        GPBUtil::checkMessage($var, \Vault\V1Alpha1\SecretData::class);
        $this->data = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     * @return \Vault\V1Alpha1\SecretWarnings|null
     */
    public function getWarnings()
    {
        return $this->warnings;
    }

    public function hasWarnings()
    {
        return isset($this->warnings);
    }

    public function clearWarnings()
    {
        unset($this->warnings);
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     * @param \Vault\V1Alpha1\SecretWarnings $var
     * @return $this
     */
    public function setWarnings($var)
    {
        GPBUtil::checkMessage($var, \Vault\V1Alpha1\SecretWarnings::class);
        $this->warnings = $var;

        return $this;
    }

}
