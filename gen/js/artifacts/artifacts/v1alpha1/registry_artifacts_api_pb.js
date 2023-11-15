// source: artifacts/artifacts/v1alpha1/registry_artifacts_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var artifacts_artifacts_v1alpha1_registry_artifacts_pb = require('../../../artifacts/artifacts/v1alpha1/registry_artifacts_pb.js');
goog.object.extend(proto, artifacts_artifacts_v1alpha1_registry_artifacts_pb);
goog.exportSymbol('proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest', null, global);
goog.exportSymbol('proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.displayName = 'proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.repeatedFields_, null);
};
goog.inherits(proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.displayName = 'proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    runtimeId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest;
  return proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntimeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRuntimeId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest} returns this
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest} returns this
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string runtime_id = 3;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.prototype.getRuntimeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest} returns this
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest.prototype.setRuntimeId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    artifactsRegistryList: jspb.Message.toObjectList(msg.getArtifactsRegistryList(),
    artifacts_artifacts_v1alpha1_registry_artifacts_pb.ArtifactsRegistry.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse;
  return proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new artifacts_artifacts_v1alpha1_registry_artifacts_pb.ArtifactsRegistry;
      reader.readMessage(value,artifacts_artifacts_v1alpha1_registry_artifacts_pb.ArtifactsRegistry.deserializeBinaryFromReader);
      msg.addArtifactsRegistry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArtifactsRegistryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      artifacts_artifacts_v1alpha1_registry_artifacts_pb.ArtifactsRegistry.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated ArtifactsRegistry artifacts_registry = 1;
 * @return {!Array<!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry>}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.prototype.getArtifactsRegistryList = function() {
  return /** @type{!Array<!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry>} */ (
    jspb.Message.getRepeatedWrapperField(this, artifacts_artifacts_v1alpha1_registry_artifacts_pb.ArtifactsRegistry, 1));
};


/**
 * @param {!Array<!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry>} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse} returns this
*/
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.prototype.setArtifactsRegistryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.prototype.addArtifactsRegistry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse} returns this
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.prototype.clearArtifactsRegistryList = function() {
  return this.setArtifactsRegistryList([]);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse} returns this
 */
proto.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.artifacts.artifacts.v1alpha1);