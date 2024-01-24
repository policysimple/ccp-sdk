<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Invitations\V1;

/**
 * import "invitations.proto";
 * import "../accounts.proto";
 *
 */
class InvitationServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * invitation
     * @param \Accounts\V1alpha1\Invitations\V1\SendInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SendInvitationUser(\Accounts\V1alpha1\Invitations\V1\SendInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.invitations.v1.InvitationService/SendInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\Invitations\V1\SendInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Invitations\V1\GetInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetInvitationUser(\Accounts\V1alpha1\Invitations\V1\GetInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.invitations.v1.InvitationService/GetInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\Invitations\V1\GetInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Invitations\V1\AgreeInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgreeInvitationUser(\Accounts\V1alpha1\Invitations\V1\AgreeInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.invitations.v1.InvitationService/AgreeInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\Invitations\V1\AgreeInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Invitations\V1\ListInvitationSendRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListInvitationSend(\Accounts\V1alpha1\Invitations\V1\ListInvitationSendRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.invitations.v1.InvitationService/ListInvitationSend',
        $argument,
        ['\Accounts\V1alpha1\Invitations\V1\ListInvitationSendResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Invitations\V1\DeleteInvitationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteInvitation(\Accounts\V1alpha1\Invitations\V1\DeleteInvitationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.invitations.v1.InvitationService/DeleteInvitation',
        $argument,
        ['\Accounts\V1alpha1\Invitations\V1\DeleteInvitationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Invitations\V1\ReactivateInvitationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ReactivateInvitation(\Accounts\V1alpha1\Invitations\V1\ReactivateInvitationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.invitations.v1.InvitationService/ReactivateInvitation',
        $argument,
        ['\Accounts\V1alpha1\Invitations\V1\ReactivateInvitationResponse', 'decode'],
        $metadata, $options);
    }

}
