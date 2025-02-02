# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from accounts.v1alpha1.apikeys import apikeys_pb2 as accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2


class ApiKeyServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateApiKey = channel.unary_unary(
        '/accounts.v1alpha1.apikeys.v1.ApiKeyService/CreateApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.CreateApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.CreateApiKeyResponse.FromString,
        )
    self.GetOneApiKey = channel.unary_unary(
        '/accounts.v1alpha1.apikeys.v1.ApiKeyService/GetOneApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.GetOneApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.GetOneApiKeyResponse.FromString,
        )
    self.ListApiKey = channel.unary_unary(
        '/accounts.v1alpha1.apikeys.v1.ApiKeyService/ListApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.ListApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.ListApiKeyResponse.FromString,
        )
    self.UpdateApiKey = channel.unary_unary(
        '/accounts.v1alpha1.apikeys.v1.ApiKeyService/UpdateApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.UpdateApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.UpdateApiKeyResponse.FromString,
        )
    self.DeleteApiKey = channel.unary_unary(
        '/accounts.v1alpha1.apikeys.v1.ApiKeyService/DeleteApiKey',
        request_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.DeleteApiKeyRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.DeleteApiKeyResponse.FromString,
        )


class ApiKeyServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CreateApiKey(self, request, context):
    # missing associated documentation comment in .proto file
    pass
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


def add_ApiKeyServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.CreateApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.CreateApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.CreateApiKeyResponse.SerializeToString,
      ),
      'GetOneApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.GetOneApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.GetOneApiKeyResponse.SerializeToString,
      ),
      'ListApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.ListApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.ListApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.ListApiKeyResponse.SerializeToString,
      ),
      'UpdateApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.UpdateApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.UpdateApiKeyResponse.SerializeToString,
      ),
      'DeleteApiKey': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteApiKey,
          request_deserializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.DeleteApiKeyRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_apikeys_dot_apikeys__pb2.DeleteApiKeyResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'accounts.v1alpha1.apikeys.v1.ApiKeyService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
