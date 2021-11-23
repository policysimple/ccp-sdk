# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from dexintegration.v1alpha1 import dexintegration_pb2 as dexintegration_dot_v1alpha1_dot_dexintegration__pb2


class DexIntegrationServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.GetListUserDex = channel.unary_unary(
        '/dexintegration.v1alpha1.DexIntegrationService/GetListUserDex',
        request_serializer=dexintegration_dot_v1alpha1_dot_dexintegration__pb2.GetListUserDexRequest.SerializeToString,
        response_deserializer=dexintegration_dot_v1alpha1_dot_dexintegration__pb2.GetListUserDexResponse.FromString,
        )


class DexIntegrationServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def GetListUserDex(self, request, context):
    """Get Users Dex
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_DexIntegrationServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'GetListUserDex': grpc.unary_unary_rpc_method_handler(
          servicer.GetListUserDex,
          request_deserializer=dexintegration_dot_v1alpha1_dot_dexintegration__pb2.GetListUserDexRequest.FromString,
          response_serializer=dexintegration_dot_v1alpha1_dot_dexintegration__pb2.GetListUserDexResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'dexintegration.v1alpha1.DexIntegrationService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
