# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from search.v1alpha1 import search_api_pb2 as search_dot_v1alpha1_dot_search__api__pb2


class SearchAPIServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.Search = channel.unary_unary(
        '/search.v1alpha1.SearchAPIService/Search',
        request_serializer=search_dot_v1alpha1_dot_search__api__pb2.SearchRequest.SerializeToString,
        response_deserializer=search_dot_v1alpha1_dot_search__api__pb2.SearchResponse.FromString,
        )


class SearchAPIServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def Search(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_SearchAPIServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'Search': grpc.unary_unary_rpc_method_handler(
          servicer.Search,
          request_deserializer=search_dot_v1alpha1_dot_search__api__pb2.SearchRequest.FromString,
          response_serializer=search_dot_v1alpha1_dot_search__api__pb2.SearchResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'search.v1alpha1.SearchAPIService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
