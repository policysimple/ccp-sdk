# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from accounts.v1alpha1.tokens import tokens_pb2 as accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2


class TokenServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateTokenCCP = channel.unary_unary(
        '/accounts.v1alpha1.tokens.v1.TokenService/CreateTokenCCP',
        request_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.CreateTokenCCPRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.CreateTokenCCPResponse.FromString,
        )
    self.GetOneTokenCCP = channel.unary_unary(
        '/accounts.v1alpha1.tokens.v1.TokenService/GetOneTokenCCP',
        request_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.GetOneTokenCCPRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.GetOneTokenCCPResponse.FromString,
        )
    self.Logs = channel.unary_unary(
        '/accounts.v1alpha1.tokens.v1.TokenService/Logs',
        request_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.LogsRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.LogsResponse.FromString,
        )
    self.SaveLogs = channel.unary_unary(
        '/accounts.v1alpha1.tokens.v1.TokenService/SaveLogs',
        request_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.SaveLogsRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.SaveLogsResponse.FromString,
        )
    self.MFA = channel.unary_unary(
        '/accounts.v1alpha1.tokens.v1.TokenService/MFA',
        request_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.MFARequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.MFAResponse.FromString,
        )
    self.EnableOrDisableMFA = channel.unary_unary(
        '/accounts.v1alpha1.tokens.v1.TokenService/EnableOrDisableMFA',
        request_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.EnableOrDisableMFARequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.EnableOrDisableMFAResponse.FromString,
        )


class TokenServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CreateTokenCCP(self, request, context):
    """TOKEN CCP
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOneTokenCCP(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Logs(self, request, context):
    """Get Users Email filter
    LOGS REDIS
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def SaveLogs(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def MFA(self, request, context):
    """DOBLE AUTHETICATION
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def EnableOrDisableMFA(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_TokenServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateTokenCCP': grpc.unary_unary_rpc_method_handler(
          servicer.CreateTokenCCP,
          request_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.CreateTokenCCPRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.CreateTokenCCPResponse.SerializeToString,
      ),
      'GetOneTokenCCP': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneTokenCCP,
          request_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.GetOneTokenCCPRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.GetOneTokenCCPResponse.SerializeToString,
      ),
      'Logs': grpc.unary_unary_rpc_method_handler(
          servicer.Logs,
          request_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.LogsRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.LogsResponse.SerializeToString,
      ),
      'SaveLogs': grpc.unary_unary_rpc_method_handler(
          servicer.SaveLogs,
          request_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.SaveLogsRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.SaveLogsResponse.SerializeToString,
      ),
      'MFA': grpc.unary_unary_rpc_method_handler(
          servicer.MFA,
          request_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.MFARequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.MFAResponse.SerializeToString,
      ),
      'EnableOrDisableMFA': grpc.unary_unary_rpc_method_handler(
          servicer.EnableOrDisableMFA,
          request_deserializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.EnableOrDisableMFARequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_tokens_dot_tokens__pb2.EnableOrDisableMFAResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'accounts.v1alpha1.tokens.v1.TokenService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
