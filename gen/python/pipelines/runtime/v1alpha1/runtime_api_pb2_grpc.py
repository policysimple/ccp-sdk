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
    self.ResponseMessageDeleteRuntimeByAppId = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/ResponseMessageDeleteRuntimeByAppId',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ResponseMessageDeleteRuntimeByAppIdRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ResponseMessageDeleteRuntimeByAppIdResponse.FromString,
        )
    self.DeleteRuntime = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntime',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimeRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimeResponse.FromString,
        )
    self.DeleteRuntimesByApplication = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntimesByApplication',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimesByApplicationRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimesByApplicationResponse.FromString,
        )
    self.DeleteRuntimesByEnvironment = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntimesByEnvironment',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimesByEnvironmentRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimesByEnvironmentResponse.FromString,
        )
    self.ListRuntimes = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/ListRuntimes',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ListRuntimesRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ListRuntimesResponse.FromString,
        )
    self.RebuildRuntime = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/RebuildRuntime',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.RebuildRuntimeRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.RebuildRuntimeResponse.FromString,
        )
    self.AlreadyExistsRuntime = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/AlreadyExistsRuntime',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.AlreadyExistsRuntimeRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.AlreadyExistsRuntimeResponse.FromString,
        )
    self.GetRuntimesInLast24Hours = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/GetRuntimesInLast24Hours',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimesInLast24HoursRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimesInLast24HoursResponse.FromString,
        )
    self.GetRuntimesByApplication = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/GetRuntimesByApplication',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimesByApplicationRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimesByApplicationResponse.FromString,
        )
    self.ChangeStatusRuntimeAndApplication = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/ChangeStatusRuntimeAndApplication',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ChangeStatusRuntimeAndApplicationRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ChangeStatusRuntimeAndApplicationResponse.FromString,
        )
    self.UpdateApplicationChanges = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateApplicationChanges',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateApplicationChangesRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateApplicationChangesResponse.FromString,
        )
    self.MakeRollbackRuntime = channel.unary_unary(
        '/pipelines.runtime.v1alpha1.RuntimeAPIService/MakeRollbackRuntime',
        request_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.MakeRollbackRuntimeRequest.SerializeToString,
        response_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.MakeRollbackRuntimeResponse.FromString,
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

  def ResponseMessageDeleteRuntimeByAppId(self, request, context):
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

  def DeleteRuntimesByApplication(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteRuntimesByEnvironment(self, request, context):
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

  def RebuildRuntime(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def AlreadyExistsRuntime(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetRuntimesInLast24Hours(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetRuntimesByApplication(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ChangeStatusRuntimeAndApplication(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateApplicationChanges(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def MakeRollbackRuntime(self, request, context):
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
      'ResponseMessageDeleteRuntimeByAppId': grpc.unary_unary_rpc_method_handler(
          servicer.ResponseMessageDeleteRuntimeByAppId,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ResponseMessageDeleteRuntimeByAppIdRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ResponseMessageDeleteRuntimeByAppIdResponse.SerializeToString,
      ),
      'DeleteRuntime': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteRuntime,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimeRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimeResponse.SerializeToString,
      ),
      'DeleteRuntimesByApplication': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteRuntimesByApplication,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimesByApplicationRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimesByApplicationResponse.SerializeToString,
      ),
      'DeleteRuntimesByEnvironment': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteRuntimesByEnvironment,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimesByEnvironmentRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.DeleteRuntimesByEnvironmentResponse.SerializeToString,
      ),
      'ListRuntimes': grpc.unary_unary_rpc_method_handler(
          servicer.ListRuntimes,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ListRuntimesRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ListRuntimesResponse.SerializeToString,
      ),
      'RebuildRuntime': grpc.unary_unary_rpc_method_handler(
          servicer.RebuildRuntime,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.RebuildRuntimeRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.RebuildRuntimeResponse.SerializeToString,
      ),
      'AlreadyExistsRuntime': grpc.unary_unary_rpc_method_handler(
          servicer.AlreadyExistsRuntime,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.AlreadyExistsRuntimeRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.AlreadyExistsRuntimeResponse.SerializeToString,
      ),
      'GetRuntimesInLast24Hours': grpc.unary_unary_rpc_method_handler(
          servicer.GetRuntimesInLast24Hours,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimesInLast24HoursRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimesInLast24HoursResponse.SerializeToString,
      ),
      'GetRuntimesByApplication': grpc.unary_unary_rpc_method_handler(
          servicer.GetRuntimesByApplication,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimesByApplicationRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.GetRuntimesByApplicationResponse.SerializeToString,
      ),
      'ChangeStatusRuntimeAndApplication': grpc.unary_unary_rpc_method_handler(
          servicer.ChangeStatusRuntimeAndApplication,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ChangeStatusRuntimeAndApplicationRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.ChangeStatusRuntimeAndApplicationResponse.SerializeToString,
      ),
      'UpdateApplicationChanges': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateApplicationChanges,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateApplicationChangesRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.UpdateApplicationChangesResponse.SerializeToString,
      ),
      'MakeRollbackRuntime': grpc.unary_unary_rpc_method_handler(
          servicer.MakeRollbackRuntime,
          request_deserializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.MakeRollbackRuntimeRequest.FromString,
          response_serializer=pipelines_dot_runtime_dot_v1alpha1_dot_runtime__api__pb2.MakeRollbackRuntimeResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'pipelines.runtime.v1alpha1.RuntimeAPIService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
