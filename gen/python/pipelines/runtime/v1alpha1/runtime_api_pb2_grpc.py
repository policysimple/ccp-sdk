# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from pipelines.runtime.v1alpha1 import runtime_api_pb2 as pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2


class RuntimeAPIServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.GetRuntime = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/GetRuntime',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimeRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimeResponse.FromString,
        )
    self.CreateRuntime = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/CreateRuntime',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.CreateRuntimeRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.CreateRuntimeResponse.FromString,
        )
    self.UpdateRuntime = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateRuntime',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateRuntimeRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateRuntimeResponse.FromString,
        )
    self.UpdateResponseMessageRuntime = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateResponseMessageRuntime',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateResponseMessageRuntimeRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateResponseMessageRuntimeResponse.FromString,
        )
    self.DeleteRuntime = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntime',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimeRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimeResponse.FromString,
        )
    self.ListRuntimes = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/ListRuntimes',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ListRuntimesRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ListRuntimesResponse.FromString,
        )


class RuntimeAPIServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def GetRuntime(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateRuntime(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateRuntime(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateResponseMessageRuntime(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteRuntime(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListRuntimes(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_RuntimeAPIServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'GetRuntime': grpc.unary_unary_rpc_method_handler(
          servicer.GetRuntime,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimeRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimeResponse.SerializeToString,
      ),
      'CreateRuntime': grpc.unary_unary_rpc_method_handler(
          servicer.CreateRuntime,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.CreateRuntimeRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.CreateRuntimeResponse.SerializeToString,
      ),
      'UpdateRuntime': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateRuntime,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateRuntimeRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateRuntimeResponse.SerializeToString,
      ),
      'UpdateResponseMessageRuntime': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateResponseMessageRuntime,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateResponseMessageRuntimeRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateResponseMessageRuntimeResponse.SerializeToString,
      ),
      'DeleteRuntime': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteRuntime,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimeRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimeResponse.SerializeToString,
      ),
      'ListRuntimes': grpc.unary_unary_rpc_method_handler(
          servicer.ListRuntimes,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ListRuntimesRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ListRuntimesResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'pipelines.runtime.v1alpha1.RuntimeAPIService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
