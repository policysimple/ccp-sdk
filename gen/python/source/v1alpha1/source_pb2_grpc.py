# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from source.v1alpha1 import source_pb2 as source_dot_v1alpha1_dot_source__pb2


class SourceServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateProvider = channel.unary_unary(
        '/source.v1alpha1.SourceService/CreateProvider',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.CreateProviderRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.CreateProviderResponse.FromString,
        )
    self.ListProviders = channel.unary_unary(
        '/source.v1alpha1.SourceService/ListProviders',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.ListProvidersRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.ListProvidersResponse.FromString,
        )
    self.GetProvider = channel.unary_unary(
        '/source.v1alpha1.SourceService/GetProvider',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.GetProviderRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.GetProviderResponse.FromString,
        )
    self.GetOneProviderByName = channel.unary_unary(
        '/source.v1alpha1.SourceService/GetOneProviderByName',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.GetOneProviderByNameRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.GetOneProviderByNameResponse.FromString,
        )
    self.UpdateProvider = channel.unary_unary(
        '/source.v1alpha1.SourceService/UpdateProvider',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.UpdateProviderRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.UpdateProviderResponse.FromString,
        )
    self.DeleteProvider = channel.unary_unary(
        '/source.v1alpha1.SourceService/DeleteProvider',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.DeleteProviderRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.DeleteProviderResponse.FromString,
        )
    self.CreateIntegration = channel.unary_unary(
        '/source.v1alpha1.SourceService/CreateIntegration',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.CreateIntegrationRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.CreateIntegrationResponse.FromString,
        )
    self.ListIntegrations = channel.unary_unary(
        '/source.v1alpha1.SourceService/ListIntegrations',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.ListIntegrationsRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.ListIntegrationsResponse.FromString,
        )
    self.GetIntegration = channel.unary_unary(
        '/source.v1alpha1.SourceService/GetIntegration',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.GetIntegrationRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.GetIntegrationResponse.FromString,
        )
    self.UpdateIntegration = channel.unary_unary(
        '/source.v1alpha1.SourceService/UpdateIntegration',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.UpdateIntegrationRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.UpdateIntegrationResponse.FromString,
        )
    self.DeleteIntegration = channel.unary_unary(
        '/source.v1alpha1.SourceService/DeleteIntegration',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.DeleteIntegrationRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.DeleteIntegrationResponse.FromString,
        )
    self.DeleteIntegrationsByOrganization = channel.unary_unary(
        '/source.v1alpha1.SourceService/DeleteIntegrationsByOrganization',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.DeleteIntegrationsByOrganizationRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.DeleteIntegrationsByOrganizationResponse.FromString,
        )
    self.ListRepositoriesProvider = channel.unary_unary(
        '/source.v1alpha1.SourceService/ListRepositoriesProvider',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.ListRepositoriesProviderRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.ListRepositoriesProviderResponse.FromString,
        )
    self.GetRepositoryProvider = channel.unary_unary(
        '/source.v1alpha1.SourceService/GetRepositoryProvider',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.GetRepositoryProviderRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.GetRepositoryProviderResponse.FromString,
        )
    self.CreateRepository = channel.unary_unary(
        '/source.v1alpha1.SourceService/CreateRepository',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.CreateRepositoryRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.CreateRepositoryResponse.FromString,
        )
    self.ListRepositories = channel.unary_unary(
        '/source.v1alpha1.SourceService/ListRepositories',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.ListRepositoriesRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.ListRepositoriesResponse.FromString,
        )
    self.GetRepository = channel.unary_unary(
        '/source.v1alpha1.SourceService/GetRepository',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.GetRepositoryRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.GetRepositoryResponse.FromString,
        )
    self.DeleteRepository = channel.unary_unary(
        '/source.v1alpha1.SourceService/DeleteRepository',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.DeleteRepositoryRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.DeleteRepositoryResponse.FromString,
        )
    self.UpdateRepository = channel.unary_unary(
        '/source.v1alpha1.SourceService/UpdateRepository',
        request_serializer=source_dot_v1alpha1_dot_source__pb2.UpdateRepositoryRequest.SerializeToString,
        response_deserializer=source_dot_v1alpha1_dot_source__pb2.UpdateRepositoryResponse.FromString,
        )


class SourceServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CreateProvider(self, request, context):
    """PROVIDERS
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListProviders(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetProvider(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetOneProviderByName(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateProvider(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteProvider(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateIntegration(self, request, context):
    """INTEGRATIONS
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListIntegrations(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetIntegration(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateIntegration(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteIntegration(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteIntegrationsByOrganization(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListRepositoriesProvider(self, request, context):
    """List Repositories providers by integrations
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetRepositoryProvider(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateRepository(self, request, context):
    """REPOSITORIES
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListRepositories(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetRepository(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteRepository(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateRepository(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_SourceServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateProvider': grpc.unary_unary_rpc_method_handler(
          servicer.CreateProvider,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.CreateProviderRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.CreateProviderResponse.SerializeToString,
      ),
      'ListProviders': grpc.unary_unary_rpc_method_handler(
          servicer.ListProviders,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.ListProvidersRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.ListProvidersResponse.SerializeToString,
      ),
      'GetProvider': grpc.unary_unary_rpc_method_handler(
          servicer.GetProvider,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.GetProviderRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.GetProviderResponse.SerializeToString,
      ),
      'GetOneProviderByName': grpc.unary_unary_rpc_method_handler(
          servicer.GetOneProviderByName,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.GetOneProviderByNameRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.GetOneProviderByNameResponse.SerializeToString,
      ),
      'UpdateProvider': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateProvider,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.UpdateProviderRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.UpdateProviderResponse.SerializeToString,
      ),
      'DeleteProvider': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteProvider,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.DeleteProviderRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.DeleteProviderResponse.SerializeToString,
      ),
      'CreateIntegration': grpc.unary_unary_rpc_method_handler(
          servicer.CreateIntegration,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.CreateIntegrationRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.CreateIntegrationResponse.SerializeToString,
      ),
      'ListIntegrations': grpc.unary_unary_rpc_method_handler(
          servicer.ListIntegrations,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.ListIntegrationsRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.ListIntegrationsResponse.SerializeToString,
      ),
      'GetIntegration': grpc.unary_unary_rpc_method_handler(
          servicer.GetIntegration,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.GetIntegrationRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.GetIntegrationResponse.SerializeToString,
      ),
      'UpdateIntegration': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateIntegration,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.UpdateIntegrationRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.UpdateIntegrationResponse.SerializeToString,
      ),
      'DeleteIntegration': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteIntegration,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.DeleteIntegrationRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.DeleteIntegrationResponse.SerializeToString,
      ),
      'DeleteIntegrationsByOrganization': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteIntegrationsByOrganization,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.DeleteIntegrationsByOrganizationRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.DeleteIntegrationsByOrganizationResponse.SerializeToString,
      ),
      'ListRepositoriesProvider': grpc.unary_unary_rpc_method_handler(
          servicer.ListRepositoriesProvider,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.ListRepositoriesProviderRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.ListRepositoriesProviderResponse.SerializeToString,
      ),
      'GetRepositoryProvider': grpc.unary_unary_rpc_method_handler(
          servicer.GetRepositoryProvider,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.GetRepositoryProviderRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.GetRepositoryProviderResponse.SerializeToString,
      ),
      'CreateRepository': grpc.unary_unary_rpc_method_handler(
          servicer.CreateRepository,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.CreateRepositoryRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.CreateRepositoryResponse.SerializeToString,
      ),
      'ListRepositories': grpc.unary_unary_rpc_method_handler(
          servicer.ListRepositories,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.ListRepositoriesRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.ListRepositoriesResponse.SerializeToString,
      ),
      'GetRepository': grpc.unary_unary_rpc_method_handler(
          servicer.GetRepository,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.GetRepositoryRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.GetRepositoryResponse.SerializeToString,
      ),
      'DeleteRepository': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteRepository,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.DeleteRepositoryRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.DeleteRepositoryResponse.SerializeToString,
      ),
      'UpdateRepository': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateRepository,
          request_deserializer=source_dot_v1alpha1_dot_source__pb2.UpdateRepositoryRequest.FromString,
          response_serializer=source_dot_v1alpha1_dot_source__pb2.UpdateRepositoryResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'source.v1alpha1.SourceService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
