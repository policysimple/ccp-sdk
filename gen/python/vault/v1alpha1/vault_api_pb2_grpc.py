# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from vault.v1alpha1 import vault_api_pb2 as vault_dot_v1alpha1_dot_vault__api__pb2


class VaultAPIServiceStub(object):
  """======= Metadata =======
  Key                Value
  ---                -----
  created_time       2022-01-21T16:44:14.254178235Z
  custom_metadata    <nil>
  deletion_time      n/a
  destroyed          false
  version            1

  ====== Data ======
  Key         Value
  ---         -----
  password    static-password
  username    static-user

  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateSecret = channel.unary_unary(
        '/vault.v1alpha1.VaultAPIService/CreateSecret',
        request_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.CreateSecretRequest.SerializeToString,
        response_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.CreateSecretResponse.FromString,
        )
    self.UpdateSecret = channel.unary_unary(
        '/vault.v1alpha1.VaultAPIService/UpdateSecret',
        request_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.UpdateSecretRequest.SerializeToString,
        response_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.UpdateSecretResponse.FromString,
        )
    self.DeleteSecret = channel.unary_unary(
        '/vault.v1alpha1.VaultAPIService/DeleteSecret',
        request_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.DeleteSecretRequest.SerializeToString,
        response_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.DeleteSecretResponse.FromString,
        )
    self.GetSecret = channel.unary_unary(
        '/vault.v1alpha1.VaultAPIService/GetSecret',
        request_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.GetSecretRequest.SerializeToString,
        response_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.GetSecretResponse.FromString,
        )
    self.ListSecret = channel.unary_unary(
        '/vault.v1alpha1.VaultAPIService/ListSecret',
        request_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.ListSecretRequest.SerializeToString,
        response_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.ListSecretResponse.FromString,
        )


class VaultAPIServiceServicer(object):
  """======= Metadata =======
  Key                Value
  ---                -----
  created_time       2022-01-21T16:44:14.254178235Z
  custom_metadata    <nil>
  deletion_time      n/a
  destroyed          false
  version            1

  ====== Data ======
  Key         Value
  ---         -----
  password    static-password
  username    static-user

  """

  def CreateSecret(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateSecret(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteSecret(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetSecret(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListSecret(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_VaultAPIServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateSecret': grpc.unary_unary_rpc_method_handler(
          servicer.CreateSecret,
          request_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.CreateSecretRequest.FromString,
          response_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.CreateSecretResponse.SerializeToString,
      ),
      'UpdateSecret': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateSecret,
          request_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.UpdateSecretRequest.FromString,
          response_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.UpdateSecretResponse.SerializeToString,
      ),
      'DeleteSecret': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteSecret,
          request_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.DeleteSecretRequest.FromString,
          response_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.DeleteSecretResponse.SerializeToString,
      ),
      'GetSecret': grpc.unary_unary_rpc_method_handler(
          servicer.GetSecret,
          request_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.GetSecretRequest.FromString,
          response_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.GetSecretResponse.SerializeToString,
      ),
      'ListSecret': grpc.unary_unary_rpc_method_handler(
          servicer.ListSecret,
          request_deserializer=vault_dot_v1alpha1_dot_vault__api__pb2.ListSecretRequest.FromString,
          response_serializer=vault_dot_v1alpha1_dot_vault__api__pb2.ListSecretResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'vault.v1alpha1.VaultAPIService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
