<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.DeleteRepositoryRequest</code>
 */
class DeleteRepositoryRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string repository_id = 1 [json_name = "repositoryId"];</code>
     */
    protected $repository_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $repository_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string repository_id = 1 [json_name = "repositoryId"];</code>
     * @return string
     */
    public function getRepositoryId()
    {
        return $this->repository_id;
    }

    /**
     * Generated from protobuf field <code>string repository_id = 1 [json_name = "repositoryId"];</code>
     * @param string $var
     * @return $this
     */
    public function setRepositoryId($var)
    {
        GPBUtil::checkString($var, True);
        $this->repository_id = $var;

        return $this;
    }

}

