# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from artifacts.quotas.v1alpha1 import registry_quotas_api_pb2 as artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2


class RegistryQuotasAPIServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.ListQuotasRegistry = channel.unary_unary(
        '/artifacts.quotas.v1alpha1.RegistryQuotasAPIService/ListQuotasRegistry',
        request_serializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.ListQuotasRegistryRequest.SerializeToString,
        response_deserializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.ListQuotasRegistryResponse.FromString,
        )
    self.UpdateQuotaRegistry = channel.unary_unary(
        '/artifacts.quotas.v1alpha1.RegistryQuotasAPIService/UpdateQuotaRegistry',
        request_serializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.UpdateQuotaRegistryRequest.SerializeToString,
        response_deserializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.UpdateQuotaRegistryResponse.FromString,
        )
    self.ListQuotaArtifactRegistry = channel.unary_unary(
        '/artifacts.quotas.v1alpha1.RegistryQuotasAPIService/ListQuotaArtifactRegistry',
        request_serializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.ListQuotaArtifactRegistryRequest.SerializeToString,
        response_deserializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.ListQuotaArtifactRegistryResponse.FromString,
        )


class RegistryQuotasAPIServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def ListQuotasRegistry(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateQuotaRegistry(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListQuotaArtifactRegistry(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_RegistryQuotasAPIServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'ListQuotasRegistry': grpc.unary_unary_rpc_method_handler(
          servicer.ListQuotasRegistry,
          request_deserializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.ListQuotasRegistryRequest.FromString,
          response_serializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.ListQuotasRegistryResponse.SerializeToString,
      ),
      'UpdateQuotaRegistry': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateQuotaRegistry,
          request_deserializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.UpdateQuotaRegistryRequest.FromString,
          response_serializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.UpdateQuotaRegistryResponse.SerializeToString,
      ),
      'ListQuotaArtifactRegistry': grpc.unary_unary_rpc_method_handler(
          servicer.ListQuotaArtifactRegistry,
          request_deserializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.ListQuotaArtifactRegistryRequest.FromString,
          response_serializer=artifacts_dot_quotas_dot_v1alpha1_dot_registry__quotas__api__pb2.ListQuotaArtifactRegistryResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'artifacts.quotas.v1alpha1.RegistryQuotasAPIService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))