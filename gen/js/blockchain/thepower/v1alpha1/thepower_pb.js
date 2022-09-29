// source: blockchain/thepower/v1alpha1/thepower.proto
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

goog.exportSymbol('proto.blockchain.thepower.v1alpha1.CrosschainExternal', null, global);
goog.exportSymbol('proto.blockchain.thepower.v1alpha1.TpChain', null, global);
goog.exportSymbol('proto.blockchain.thepower.v1alpha1.TpNode', null, global);
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
proto.blockchain.thepower.v1alpha1.TpChain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blockchain.thepower.v1alpha1.TpChain.repeatedFields_, null);
};
goog.inherits(proto.blockchain.thepower.v1alpha1.TpChain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blockchain.thepower.v1alpha1.TpChain.displayName = 'proto.blockchain.thepower.v1alpha1.TpChain';
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
proto.blockchain.thepower.v1alpha1.TpNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blockchain.thepower.v1alpha1.TpNode.repeatedFields_, null);
};
goog.inherits(proto.blockchain.thepower.v1alpha1.TpNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blockchain.thepower.v1alpha1.TpNode.displayName = 'proto.blockchain.thepower.v1alpha1.TpNode';
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
proto.blockchain.thepower.v1alpha1.CrosschainExternal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blockchain.thepower.v1alpha1.CrosschainExternal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blockchain.thepower.v1alpha1.CrosschainExternal.displayName = 'proto.blockchain.thepower.v1alpha1.CrosschainExternal';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.blockchain.thepower.v1alpha1.TpChain.repeatedFields_ = [4];



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
proto.blockchain.thepower.v1alpha1.TpChain.prototype.toObject = function(opt_includeInstance) {
  return proto.blockchain.thepower.v1alpha1.TpChain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blockchain.thepower.v1alpha1.TpChain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockchain.thepower.v1alpha1.TpChain.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chainNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    chainNodesList: jspb.Message.toObjectList(msg.getChainNodesList(),
    proto.blockchain.thepower.v1alpha1.TpNode.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.blockchain.thepower.v1alpha1.TpChain}
 */
proto.blockchain.thepower.v1alpha1.TpChain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blockchain.thepower.v1alpha1.TpChain;
  return proto.blockchain.thepower.v1alpha1.TpChain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blockchain.thepower.v1alpha1.TpChain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blockchain.thepower.v1alpha1.TpChain}
 */
proto.blockchain.thepower.v1alpha1.TpChain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChainNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = new proto.blockchain.thepower.v1alpha1.TpNode;
      reader.readMessage(value,proto.blockchain.thepower.v1alpha1.TpNode.deserializeBinaryFromReader);
      msg.addChainNodes(value);
      break;
    case 5:
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
proto.blockchain.thepower.v1alpha1.TpChain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blockchain.thepower.v1alpha1.TpChain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blockchain.thepower.v1alpha1.TpChain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockchain.thepower.v1alpha1.TpChain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChainNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChainNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.blockchain.thepower.v1alpha1.TpNode.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpChain} returns this
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 chain_number = 2;
 * @return {number}
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.getChainNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpChain} returns this
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.setChainNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpChain} returns this
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated TpNode chain_nodes = 4;
 * @return {!Array<!proto.blockchain.thepower.v1alpha1.TpNode>}
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.getChainNodesList = function() {
  return /** @type{!Array<!proto.blockchain.thepower.v1alpha1.TpNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.blockchain.thepower.v1alpha1.TpNode, 4));
};


/**
 * @param {!Array<!proto.blockchain.thepower.v1alpha1.TpNode>} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpChain} returns this
*/
proto.blockchain.thepower.v1alpha1.TpChain.prototype.setChainNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.blockchain.thepower.v1alpha1.TpNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode}
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.addChainNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.blockchain.thepower.v1alpha1.TpNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.blockchain.thepower.v1alpha1.TpChain} returns this
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.clearChainNodesList = function() {
  return this.setChainNodesList([]);
};


/**
 * optional string status = 5;
 * @return {string}
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpChain} returns this
 */
proto.blockchain.thepower.v1alpha1.TpChain.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.blockchain.thepower.v1alpha1.TpNode.repeatedFields_ = [6];



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
proto.blockchain.thepower.v1alpha1.TpNode.prototype.toObject = function(opt_includeInstance) {
  return proto.blockchain.thepower.v1alpha1.TpNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blockchain.thepower.v1alpha1.TpNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockchain.thepower.v1alpha1.TpNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tpicPort: jspb.Message.getFieldWithDefault(msg, 2, 0),
    apiPort: jspb.Message.getFieldWithDefault(msg, 3, 0),
    apisPort: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ccPort: jspb.Message.getFieldWithDefault(msg, 5, 0),
    crosschainExternalList: jspb.Message.toObjectList(msg.getCrosschainExternalList(),
    proto.blockchain.thepower.v1alpha1.CrosschainExternal.toObject, includeInstance)
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
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode}
 */
proto.blockchain.thepower.v1alpha1.TpNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blockchain.thepower.v1alpha1.TpNode;
  return proto.blockchain.thepower.v1alpha1.TpNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blockchain.thepower.v1alpha1.TpNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode}
 */
proto.blockchain.thepower.v1alpha1.TpNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodename(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTpicPort(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApiPort(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApisPort(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCcPort(value);
      break;
    case 6:
      var value = new proto.blockchain.thepower.v1alpha1.CrosschainExternal;
      reader.readMessage(value,proto.blockchain.thepower.v1alpha1.CrosschainExternal.deserializeBinaryFromReader);
      msg.addCrosschainExternal(value);
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
proto.blockchain.thepower.v1alpha1.TpNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blockchain.thepower.v1alpha1.TpNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blockchain.thepower.v1alpha1.TpNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockchain.thepower.v1alpha1.TpNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTpicPort();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getApiPort();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getApisPort();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCcPort();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getCrosschainExternalList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.blockchain.thepower.v1alpha1.CrosschainExternal.serializeBinaryToWriter
    );
  }
};


/**
 * optional string nodename = 1;
 * @return {string}
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.getNodename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode} returns this
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.setNodename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 tpic_port = 2;
 * @return {number}
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.getTpicPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode} returns this
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.setTpicPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 api_port = 3;
 * @return {number}
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.getApiPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode} returns this
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.setApiPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 apis_port = 4;
 * @return {number}
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.getApisPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode} returns this
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.setApisPort = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 cc_port = 5;
 * @return {number}
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.getCcPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode} returns this
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.setCcPort = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated CrosschainExternal crosschain_external = 6;
 * @return {!Array<!proto.blockchain.thepower.v1alpha1.CrosschainExternal>}
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.getCrosschainExternalList = function() {
  return /** @type{!Array<!proto.blockchain.thepower.v1alpha1.CrosschainExternal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.blockchain.thepower.v1alpha1.CrosschainExternal, 6));
};


/**
 * @param {!Array<!proto.blockchain.thepower.v1alpha1.CrosschainExternal>} value
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode} returns this
*/
proto.blockchain.thepower.v1alpha1.TpNode.prototype.setCrosschainExternalList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.blockchain.thepower.v1alpha1.CrosschainExternal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blockchain.thepower.v1alpha1.CrosschainExternal}
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.addCrosschainExternal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.blockchain.thepower.v1alpha1.CrosschainExternal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.blockchain.thepower.v1alpha1.TpNode} returns this
 */
proto.blockchain.thepower.v1alpha1.TpNode.prototype.clearCrosschainExternalList = function() {
  return this.setCrosschainExternalList([]);
};





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
proto.blockchain.thepower.v1alpha1.CrosschainExternal.prototype.toObject = function(opt_includeInstance) {
  return proto.blockchain.thepower.v1alpha1.CrosschainExternal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blockchain.thepower.v1alpha1.CrosschainExternal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockchain.thepower.v1alpha1.CrosschainExternal.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.blockchain.thepower.v1alpha1.CrosschainExternal}
 */
proto.blockchain.thepower.v1alpha1.CrosschainExternal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blockchain.thepower.v1alpha1.CrosschainExternal;
  return proto.blockchain.thepower.v1alpha1.CrosschainExternal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blockchain.thepower.v1alpha1.CrosschainExternal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blockchain.thepower.v1alpha1.CrosschainExternal}
 */
proto.blockchain.thepower.v1alpha1.CrosschainExternal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPort(value);
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
proto.blockchain.thepower.v1alpha1.CrosschainExternal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blockchain.thepower.v1alpha1.CrosschainExternal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blockchain.thepower.v1alpha1.CrosschainExternal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blockchain.thepower.v1alpha1.CrosschainExternal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.blockchain.thepower.v1alpha1.CrosschainExternal.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.blockchain.thepower.v1alpha1.CrosschainExternal} returns this
 */
proto.blockchain.thepower.v1alpha1.CrosschainExternal.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 port = 2;
 * @return {number}
 */
proto.blockchain.thepower.v1alpha1.CrosschainExternal.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.blockchain.thepower.v1alpha1.CrosschainExternal} returns this
 */
proto.blockchain.thepower.v1alpha1.CrosschainExternal.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.blockchain.thepower.v1alpha1);