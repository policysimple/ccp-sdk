<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Projects\V1;

/**
 */
class ProjectServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * CRUD Project
     * @param \Accounts\V1alpha1\Projects\V1\CreateProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateProject(\Accounts\V1alpha1\Projects\V1\CreateProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.projects.v1.ProjectService/CreateProject',
        $argument,
        ['\Accounts\V1alpha1\Projects\V1\CreateProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Projects\V1\GetOneProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneProject(\Accounts\V1alpha1\Projects\V1\GetOneProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.projects.v1.ProjectService/GetOneProject',
        $argument,
        ['\Accounts\V1alpha1\Projects\V1\GetOneProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Projects\V1\UpdateProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateProject(\Accounts\V1alpha1\Projects\V1\UpdateProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.projects.v1.ProjectService/UpdateProject',
        $argument,
        ['\Accounts\V1alpha1\Projects\V1\UpdateProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Projects\V1\DeleteProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteProject(\Accounts\V1alpha1\Projects\V1\DeleteProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.projects.v1.ProjectService/DeleteProject',
        $argument,
        ['\Accounts\V1alpha1\Projects\V1\DeleteProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Projects\V1\ListProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListProject(\Accounts\V1alpha1\Projects\V1\ListProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.projects.v1.ProjectService/ListProject',
        $argument,
        ['\Accounts\V1alpha1\Projects\V1\ListProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Projects\V1\ListProjectPaginationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListProjectPagination(\Accounts\V1alpha1\Projects\V1\ListProjectPaginationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.projects.v1.ProjectService/ListProjectPagination',
        $argument,
        ['\Accounts\V1alpha1\Projects\V1\ListProjectPaginationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * EDITTS AND DELETE USERS
     * @param \Accounts\V1alpha1\Projects\V1\DeleteUserByProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteUserByProject(\Accounts\V1alpha1\Projects\V1\DeleteUserByProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.projects.v1.ProjectService/DeleteUserByProject',
        $argument,
        ['\Accounts\V1alpha1\Projects\V1\DeleteUserByProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Projects\V1\EditRoleUserByProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function EditRoleUserByProject(\Accounts\V1alpha1\Projects\V1\EditRoleUserByProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.projects.v1.ProjectService/EditRoleUserByProject',
        $argument,
        ['\Accounts\V1alpha1\Projects\V1\EditRoleUserByProjectResponse', 'decode'],
        $metadata, $options);
    }

}
