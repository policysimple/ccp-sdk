# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from accounts.v1alpha1 import accounts_pb2 as accounts_dot_v1alpha1_dot_accounts__pb2


class AccountServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateUser = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/CreateUser',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateUserResponse.FromString,
        )
    self.ListUser = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/ListUser',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListUserResponse.FromString,
        )
    self.GetOneUser = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetOneUser',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneUserResponse.FromString,
        )
    self.UpdateUser = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/UpdateUser',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateUserResponse.FromString,
        )
    self.DeleteUser = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/DeleteUser',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteUserResponse.FromString,
        )
    self.ListUserPagination = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/ListUserPagination',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListUserPaginationRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListUserPaginationResponse.FromString,
        )
    self.SendInvitationUser = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/SendInvitationUser',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.SendInvitationUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.SendInvitationUserResponse.FromString,
        )
    self.GetInvitationUser = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetInvitationUser',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetInvitationUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetInvitationUserResponse.FromString,
        )
    self.AgreeInvitationUser = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/AgreeInvitationUser',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.AgreeInvitationUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.AgreeInvitationUserResponse.FromString,
        )
    self.CreatePermission = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/CreatePermission',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreatePermissionRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreatePermissionResponse.FromString,
        )
    self.ListPermission = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/ListPermission',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListPermissionRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListPermissionResponse.FromString,
        )
    self.GetOnePermission = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetOnePermission',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOnePermissionRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOnePermissionResponse.FromString,
        )
    self.UpdatePermission = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/UpdatePermission',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdatePermissionRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdatePermissionResponse.FromString,
        )
    self.DeletePermission = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/DeletePermission',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeletePermissionRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeletePermissionResponse.FromString,
        )
    self.CreateOrganization = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/CreateOrganization',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateOrganizationRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateOrganizationResponse.FromString,
        )
    self.ListOrganization = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/ListOrganization',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListOrganizationRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListOrganizationResponse.FromString,
        )
    self.GetOneOrganization = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetOneOrganization',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneOrganizationRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneOrganizationResponse.FromString,
        )
    self.UpdateOrganization = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/UpdateOrganization',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateOrganizationRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateOrganizationResponse.FromString,
        )
    self.DeleteOrganization = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/DeleteOrganization',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteOrganizationRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteOrganizationResponse.FromString,
        )
    self.CreateRole = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/CreateRole',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateRoleRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateRoleResponse.FromString,
        )
    self.ListRoles = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/ListRoles',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListRolesRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListRolesResponse.FromString,
        )
    self.UpdateRole = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/UpdateRole',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateRoleRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateRoleResponse.FromString,
        )
    self.GetOneRole = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetOneRole',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneRoleRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneRoleResponse.FromString,
        )
    self.DeleteRole = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/DeleteRole',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteRoleRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteRoleResponse.FromString,
        )
    self.CreateProject = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/CreateProject',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateProjectRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateProjectResponse.FromString,
        )
    self.GetOneProject = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetOneProject',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneProjectRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneProjectResponse.FromString,
        )
    self.UpdateProject = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/UpdateProject',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateProjectRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateProjectResponse.FromString,
        )
    self.DeleteProject = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/DeleteProject',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteProjectRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteProjectResponse.FromString,
        )
    self.ListProject = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/ListProject',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListProjectRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListProjectResponse.FromString,
        )
    self.GetListUserDex = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetListUserDex',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetListUserDexRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetListUserDexResponse.FromString,
        )
    self.GetOneUserDex = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetOneUserDex',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneUserDexRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneUserDexResponse.FromString,
        )
    self.CheckUser = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/CheckUser',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CheckUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CheckUserResponse.FromString,
        )
    self.SendVerificationEmail = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/SendVerificationEmail',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.SendVerificationEmailRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.SendVerificationEmailResponse.FromString,
        )
    self.VerifyEmail = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/VerifyEmail',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.VerifyEmailRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.VerifyEmailResponse.FromString,
        )
    self.ListCountries = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/ListCountries',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListCountriesRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListCountriesResponse.FromString,
        )
    self.GetOneCountry = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetOneCountry',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneCountryRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneCountryResponse.FromString,
        )
    self.CreateApiKey = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/CreateApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateApiKeyResponse.FromString,
        )
    self.GetOneApiKey = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/GetOneApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneApiKeyResponse.FromString,
        )
    self.ListApiKey = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/ListApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListApiKeyResponse.FromString,
        )
    self.UpdateApiKey = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/UpdateApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateApiKeyResponse.FromString,
        )
    self.DeleteApiKey = channel.unary_unary(
        '/accounts.v1alpha1.AccountService/DeleteApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteApiKeyResponse.FromString,
        )


class AccountServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CreateUser(self, request, context):
    """/AUTH
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOneUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListUserPagination(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def SendInvitationUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetInvitationUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def AgreeInvitationUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreatePermission(self, request, context):
    """/PERMISSION
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListPermission(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOnePermission(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdatePermission(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeletePermission(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateOrganization(self, request, context):
    """/Organization
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListOrganization(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOneOrganization(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateOrganization(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteOrganization(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateRole(self, request, context):
    """Roles 
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListRoles(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateRole(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOneRole(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteRole(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateProject(self, request, context):
    """CRUD Project
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOneProject(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateProject(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteProject(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListProject(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetListUserDex(self, request, context):
    """Get Users Dex
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOneUserDex(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CheckUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def SendVerificationEmail(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def VerifyEmail(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListCountries(self, request, context):
    """Countries
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOneCountry(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateApiKey(self, request, context):
    """Tokens
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOneApiKey(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListApiKey(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateApiKey(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteApiKey(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_AccountServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateUser': grpc.unary_unary_rpc_method_handler(
          servicer.CreateUser,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateUserResponse.SerializeToString,
      ),
      'ListUser': grpc.unary_unary_rpc_method_handler(
          servicer.ListUser,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListUserResponse.SerializeToString,
      ),
      'GetOneUser': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneUser,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneUserResponse.SerializeToString,
      ),
      'UpdateUser': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateUser,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateUserResponse.SerializeToString,
      ),
      'DeleteUser': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteUser,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteUserResponse.SerializeToString,
      ),
      'ListUserPagination': grpc.unary_unary_rpc_method_handler(
          servicer.ListUserPagination,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListUserPaginationRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListUserPaginationResponse.SerializeToString,
      ),
      'SendInvitationUser': grpc.unary_unary_rpc_method_handler(
          servicer.SendInvitationUser,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.SendInvitationUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.SendInvitationUserResponse.SerializeToString,
      ),
      'GetInvitationUser': grpc.unary_unary_rpc_method_handler(
          servicer.GetInvitationUser,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetInvitationUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetInvitationUserResponse.SerializeToString,
      ),
      'AgreeInvitationUser': grpc.unary_unary_rpc_method_handler(
          servicer.AgreeInvitationUser,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.AgreeInvitationUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.AgreeInvitationUserResponse.SerializeToString,
      ),
      'CreatePermission': grpc.unary_unary_rpc_method_handler(
          servicer.CreatePermission,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreatePermissionRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreatePermissionResponse.SerializeToString,
      ),
      'ListPermission': grpc.unary_unary_rpc_method_handler(
          servicer.ListPermission,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListPermissionRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListPermissionResponse.SerializeToString,
      ),
      'GetOnePermission': grpc.unary_unary_rpc_method_handler(
          servicer.GetOnePermission,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOnePermissionRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOnePermissionResponse.SerializeToString,
      ),
      'UpdatePermission': grpc.unary_unary_rpc_method_handler(
          servicer.UpdatePermission,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdatePermissionRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdatePermissionResponse.SerializeToString,
      ),
      'DeletePermission': grpc.unary_unary_rpc_method_handler(
          servicer.DeletePermission,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeletePermissionRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeletePermissionResponse.SerializeToString,
      ),
      'CreateOrganization': grpc.unary_unary_rpc_method_handler(
          servicer.CreateOrganization,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateOrganizationRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateOrganizationResponse.SerializeToString,
      ),
      'ListOrganization': grpc.unary_unary_rpc_method_handler(
          servicer.ListOrganization,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListOrganizationRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListOrganizationResponse.SerializeToString,
      ),
      'GetOneOrganization': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneOrganization,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneOrganizationRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneOrganizationResponse.SerializeToString,
      ),
      'UpdateOrganization': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateOrganization,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateOrganizationRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateOrganizationResponse.SerializeToString,
      ),
      'DeleteOrganization': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteOrganization,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteOrganizationRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteOrganizationResponse.SerializeToString,
      ),
      'CreateRole': grpc.unary_unary_rpc_method_handler(
          servicer.CreateRole,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateRoleRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateRoleResponse.SerializeToString,
      ),
      'ListRoles': grpc.unary_unary_rpc_method_handler(
          servicer.ListRoles,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListRolesRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListRolesResponse.SerializeToString,
      ),
      'UpdateRole': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateRole,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateRoleRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateRoleResponse.SerializeToString,
      ),
      'GetOneRole': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneRole,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneRoleRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneRoleResponse.SerializeToString,
      ),
      'DeleteRole': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteRole,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteRoleRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteRoleResponse.SerializeToString,
      ),
      'CreateProject': grpc.unary_unary_rpc_method_handler(
          servicer.CreateProject,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateProjectRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateProjectResponse.SerializeToString,
      ),
      'GetOneProject': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneProject,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneProjectRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneProjectResponse.SerializeToString,
      ),
      'UpdateProject': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateProject,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateProjectRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateProjectResponse.SerializeToString,
      ),
      'DeleteProject': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteProject,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteProjectRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteProjectResponse.SerializeToString,
      ),
      'ListProject': grpc.unary_unary_rpc_method_handler(
          servicer.ListProject,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListProjectRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListProjectResponse.SerializeToString,
      ),
      'GetListUserDex': grpc.unary_unary_rpc_method_handler(
          servicer.GetListUserDex,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetListUserDexRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetListUserDexResponse.SerializeToString,
      ),
      'GetOneUserDex': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneUserDex,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneUserDexRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneUserDexResponse.SerializeToString,
      ),
      'CheckUser': grpc.unary_unary_rpc_method_handler(
          servicer.CheckUser,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CheckUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CheckUserResponse.SerializeToString,
      ),
      'SendVerificationEmail': grpc.unary_unary_rpc_method_handler(
          servicer.SendVerificationEmail,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.SendVerificationEmailRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.SendVerificationEmailResponse.SerializeToString,
      ),
      'VerifyEmail': grpc.unary_unary_rpc_method_handler(
          servicer.VerifyEmail,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.VerifyEmailRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.VerifyEmailResponse.SerializeToString,
      ),
      'ListCountries': grpc.unary_unary_rpc_method_handler(
          servicer.ListCountries,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListCountriesRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListCountriesResponse.SerializeToString,
      ),
      'GetOneCountry': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneCountry,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneCountryRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneCountryResponse.SerializeToString,
      ),
      'CreateApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.CreateApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.CreateApiKeyResponse.SerializeToString,
      ),
      'GetOneApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.GetOneApiKeyResponse.SerializeToString,
      ),
      'ListApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.ListApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.ListApiKeyResponse.SerializeToString,
      ),
      'UpdateApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.UpdateApiKeyResponse.SerializeToString,
      ),
      'DeleteApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_accounts__pb2.DeleteApiKeyResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'accounts.v1alpha1.AccountService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
