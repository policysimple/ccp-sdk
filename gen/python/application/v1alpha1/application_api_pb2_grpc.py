# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from application.v1alpha1 import application_api_pb2 as application_dot_v1alpha1_dot_application__api__pb2


class ApplicationServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateApplication = channel.unary_unary(
        '/application.v1alpha1.ApplicationService/CreateApplication',
        request_serializer=application_dot_v1alpha1_dot_application__api__pb2.CreateApplicationRequest.SerializeToString,
        response_deserializer=application_dot_v1alpha1_dot_application__api__pb2.CreateApplicationResponse.FromString,
        )
    self.ListApplication = channel.unary_unary(
        '/application.v1alpha1.ApplicationService/ListApplication',
        request_serializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationRequest.SerializeToString,
        response_deserializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationResponse.FromString,
        )
    self.GetApplication = channel.unary_unary(
        '/application.v1alpha1.ApplicationService/GetApplication',
        request_serializer=application_dot_v1alpha1_dot_application__api__pb2.GetApplicationRequest.SerializeToString,
        response_deserializer=application_dot_v1alpha1_dot_application__api__pb2.GetApplicationResponse.FromString,
        )
    self.DeleteApplication = channel.unary_unary(
        '/application.v1alpha1.ApplicationService/DeleteApplication',
        request_serializer=application_dot_v1alpha1_dot_application__api__pb2.DeleteApplicationRequest.SerializeToString,
        response_deserializer=application_dot_v1alpha1_dot_application__api__pb2.DeleteApplicationResponse.FromString,
        )
    self.UpdateApplication = channel.unary_unary(
        '/application.v1alpha1.ApplicationService/UpdateApplication',
        request_serializer=application_dot_v1alpha1_dot_application__api__pb2.UpdateApplicationRequest.SerializeToString,
        response_deserializer=application_dot_v1alpha1_dot_application__api__pb2.UpdateApplicationResponse.FromString,
        )
    self.DeleteApplicationsByIntegration = channel.unary_unary(
        '/application.v1alpha1.ApplicationService/DeleteApplicationsByIntegration',
        request_serializer=application_dot_v1alpha1_dot_application__api__pb2.DeleteApplicationsByIntegrationRequest.SerializeToString,
        response_deserializer=application_dot_v1alpha1_dot_application__api__pb2.DeleteApplicationsByIntegrationResponse.FromString,
        )
    self.ListApplicationsByOrganization = channel.unary_unary(
        '/application.v1alpha1.ApplicationService/ListApplicationsByOrganization',
        request_serializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationsByOrganizationRequest.SerializeToString,
        response_deserializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationsByOrganizationResponse.FromString,
        )
    self.ListApplicationsByIntegration = channel.unary_unary(
        '/application.v1alpha1.ApplicationService/ListApplicationsByIntegration',
        request_serializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationsByIntegrationRequest.SerializeToString,
        response_deserializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationsByIntegrationResponse.FromString,
        )


class ApplicationServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CreateApplication(self, request, context):
    """Application
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListApplication(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetApplication(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteApplication(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateApplication(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteApplicationsByIntegration(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListApplicationsByOrganization(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListApplicationsByIntegration(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_ApplicationServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateApplication': grpc.unary_unary_rpc_method_handler(
          servicer.CreateApplication,
          request_deserializer=application_dot_v1alpha1_dot_application__api__pb2.CreateApplicationRequest.FromString,
          response_serializer=application_dot_v1alpha1_dot_application__api__pb2.CreateApplicationResponse.SerializeToString,
      ),
      'ListApplication': grpc.unary_unary_rpc_method_handler(
          servicer.ListApplication,
          request_deserializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationRequest.FromString,
          response_serializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationResponse.SerializeToString,
      ),
      'GetApplication': grpc.unary_unary_rpc_method_handler(
          servicer.GetApplication,
          request_deserializer=application_dot_v1alpha1_dot_application__api__pb2.GetApplicationRequest.FromString,
          response_serializer=application_dot_v1alpha1_dot_application__api__pb2.GetApplicationResponse.SerializeToString,
      ),
      'DeleteApplication': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteApplication,
          request_deserializer=application_dot_v1alpha1_dot_application__api__pb2.DeleteApplicationRequest.FromString,
          response_serializer=application_dot_v1alpha1_dot_application__api__pb2.DeleteApplicationResponse.SerializeToString,
      ),
      'UpdateApplication': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateApplication,
          request_deserializer=application_dot_v1alpha1_dot_application__api__pb2.UpdateApplicationRequest.FromString,
          response_serializer=application_dot_v1alpha1_dot_application__api__pb2.UpdateApplicationResponse.SerializeToString,
      ),
      'DeleteApplicationsByIntegration': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteApplicationsByIntegration,
          request_deserializer=application_dot_v1alpha1_dot_application__api__pb2.DeleteApplicationsByIntegrationRequest.FromString,
          response_serializer=application_dot_v1alpha1_dot_application__api__pb2.DeleteApplicationsByIntegrationResponse.SerializeToString,
      ),
      'ListApplicationsByOrganization': grpc.unary_unary_rpc_method_handler(
          servicer.ListApplicationsByOrganization,
          request_deserializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationsByOrganizationRequest.FromString,
          response_serializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationsByOrganizationResponse.SerializeToString,
      ),
      'ListApplicationsByIntegration': grpc.unary_unary_rpc_method_handler(
          servicer.ListApplicationsByIntegration,
          request_deserializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationsByIntegrationRequest.FromString,
          response_serializer=application_dot_v1alpha1_dot_application__api__pb2.ListApplicationsByIntegrationResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'application.v1alpha1.ApplicationService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
