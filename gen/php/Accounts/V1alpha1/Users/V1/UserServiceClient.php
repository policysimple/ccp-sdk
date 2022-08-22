<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Users\V1;

/**
 */
class UserServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * /AUTH
     * @param \Accounts\V1alpha1\Users\V1\CreateUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateUser(\Accounts\V1alpha1\Users\V1\CreateUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/CreateUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\CreateUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\ListUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListUser(\Accounts\V1alpha1\Users\V1\ListUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/ListUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\ListUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\GetOneUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneUser(\Accounts\V1alpha1\Users\V1\GetOneUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/GetOneUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\GetOneUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\UpdateUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateUser(\Accounts\V1alpha1\Users\V1\UpdateUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/UpdateUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\UpdateUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\DeleteUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteUser(\Accounts\V1alpha1\Users\V1\DeleteUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/DeleteUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\DeleteUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\ListUserPaginationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListUserPagination(\Accounts\V1alpha1\Users\V1\ListUserPaginationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/ListUserPagination',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\ListUserPaginationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * invitation
     * @param \Accounts\V1alpha1\Users\V1\SendInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SendInvitationUser(\Accounts\V1alpha1\Users\V1\SendInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/SendInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\SendInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\GetInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetInvitationUser(\Accounts\V1alpha1\Users\V1\GetInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/GetInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\GetInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\AgreeInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgreeInvitationUser(\Accounts\V1alpha1\Users\V1\AgreeInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/AgreeInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\AgreeInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\ListInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListInvitationUser(\Accounts\V1alpha1\Users\V1\ListInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/ListInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\ListInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * CHECK USER
     * @param \Accounts\V1alpha1\Users\V1\CheckUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CheckUser(\Accounts\V1alpha1\Users\V1\CheckUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/CheckUser',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\CheckUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\SendVerificationEmailRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SendVerificationEmail(\Accounts\V1alpha1\Users\V1\SendVerificationEmailRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/SendVerificationEmail',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\SendVerificationEmailResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\VerifyEmailRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function VerifyEmail(\Accounts\V1alpha1\Users\V1\VerifyEmailRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/VerifyEmail',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\VerifyEmailResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * FILTER
     * @param \Accounts\V1alpha1\Users\V1\GetUsersEmailFilterRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetUsersEmailFilter(\Accounts\V1alpha1\Users\V1\GetUsersEmailFilterRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/GetUsersEmailFilter',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\GetUsersEmailFilterResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * DEX
     * @param \Accounts\V1alpha1\Users\V1\GetListUserDexRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetListUserDex(\Accounts\V1alpha1\Users\V1\GetListUserDexRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/GetListUserDex',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\GetListUserDexResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Users\V1\GetOneUserDexRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneUserDex(\Accounts\V1alpha1\Users\V1\GetOneUserDexRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.users.v1.UserService/GetOneUserDex',
        $argument,
        ['\Accounts\V1alpha1\Users\V1\GetOneUserDexResponse', 'decode'],
        $metadata, $options);
    }

}
