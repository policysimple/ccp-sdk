<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Email\V1alpha1;

/**
 */
class EmailServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * Email
     * @param \Email\V1alpha1\SendEmailRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SendEmail(\Email\V1alpha1\SendEmailRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/email.v1alpha1.EmailService/SendEmail',
        $argument,
        ['\Email\V1alpha1\SendEmailResponse', 'decode'],
        $metadata, $options);
    }

}
