# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from performance.logs.v1alpha1 import logs_agent_api_pb2 as performance_dot_logs_dot_v1alpha1_dot_logs__agent__api__pb2


class LogsAgentAPIServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.SaveLogs = channel.stream_stream(
        '/performance.logs.v1alpha1.LogsAgentAPIService/SaveLogs',
        request_serializer=performance_dot_logs_dot_v1alpha1_dot_logs__agent__api__pb2.SaveLogsRequest.SerializeToString,
        response_deserializer=performance_dot_logs_dot_v1alpha1_dot_logs__agent__api__pb2.SaveLogsResponse.FromString,
        )


class LogsAgentAPIServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def SaveLogs(self, request_iterator, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_LogsAgentAPIServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'SaveLogs': grpc.stream_stream_rpc_method_handler(
          servicer.SaveLogs,
          request_deserializer=performance_dot_logs_dot_v1alpha1_dot_logs__agent__api__pb2.SaveLogsRequest.FromString,
          response_serializer=performance_dot_logs_dot_v1alpha1_dot_logs__agent__api__pb2.SaveLogsResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'performance.logs.v1alpha1.LogsAgentAPIService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
