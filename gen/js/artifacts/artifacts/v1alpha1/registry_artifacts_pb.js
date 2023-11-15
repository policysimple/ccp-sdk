// source: artifacts/artifacts/v1alpha1/registry_artifacts.proto
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

goog.exportSymbol('proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry', null, global);
goog.exportSymbol('proto.artifacts.artifacts.v1alpha1.Tags', null, global);
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
proto.artifacts.artifacts.v1alpha1.Tags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.artifacts.artifacts.v1alpha1.Tags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.artifacts.artifacts.v1alpha1.Tags.displayName = 'proto.artifacts.artifacts.v1alpha1.Tags';
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
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.repeatedFields_, null);
};
goog.inherits(proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.displayName = 'proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry';
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
proto.artifacts.artifacts.v1alpha1.Tags.prototype.toObject = function(opt_includeInstance) {
  return proto.artifacts.artifacts.v1alpha1.Tags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.artifacts.artifacts.v1alpha1.Tags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.artifacts.v1alpha1.Tags.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pullTime: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pushTime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    storageLimit: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.artifacts.artifacts.v1alpha1.Tags}
 */
proto.artifacts.artifacts.v1alpha1.Tags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.artifacts.artifacts.v1alpha1.Tags;
  return proto.artifacts.artifacts.v1alpha1.Tags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.artifacts.artifacts.v1alpha1.Tags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.artifacts.artifacts.v1alpha1.Tags}
 */
proto.artifacts.artifacts.v1alpha1.Tags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPullTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPushTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStorageLimit(value);
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
proto.artifacts.artifacts.v1alpha1.Tags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.artifacts.artifacts.v1alpha1.Tags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.artifacts.artifacts.v1alpha1.Tags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.artifacts.v1alpha1.Tags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPullTime();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPushTime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStorageLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.Tags.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.Tags} returns this
 */
proto.artifacts.artifacts.v1alpha1.Tags.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pull_time = 2;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.Tags.prototype.getPullTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.Tags} returns this
 */
proto.artifacts.artifacts.v1alpha1.Tags.prototype.setPullTime = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string push_time = 3;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.Tags.prototype.getPushTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.Tags} returns this
 */
proto.artifacts.artifacts.v1alpha1.Tags.prototype.setPushTime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 storage_limit = 4;
 * @return {number}
 */
proto.artifacts.artifacts.v1alpha1.Tags.prototype.getStorageLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.artifacts.artifacts.v1alpha1.Tags} returns this
 */
proto.artifacts.artifacts.v1alpha1.Tags.prototype.setStorageLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.repeatedFields_ = [7];



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
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.toObject = function(opt_includeInstance) {
  return proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    digest: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pullTime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pushTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    proto.artifacts.artifacts.v1alpha1.Tags.toObject, includeInstance)
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
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry;
  return proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDigest(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPullTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPushTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 7:
      var value = new proto.artifacts.artifacts.v1alpha1.Tags;
      reader.readMessage(value,proto.artifacts.artifacts.v1alpha1.Tags.deserializeBinaryFromReader);
      msg.addTags(value);
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
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDigest();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPullTime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPushTime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.artifacts.artifacts.v1alpha1.Tags.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} returns this
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string digest = 2;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.getDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} returns this
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.setDigest = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string pull_time = 3;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.getPullTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} returns this
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.setPullTime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string push_time = 4;
 * @return {string}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.getPushTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} returns this
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.setPushTime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} returns this
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool active = 6;
 * @return {boolean}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} returns this
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated Tags tags = 7;
 * @return {!Array<!proto.artifacts.artifacts.v1alpha1.Tags>}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.artifacts.artifacts.v1alpha1.Tags>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.artifacts.artifacts.v1alpha1.Tags, 7));
};


/**
 * @param {!Array<!proto.artifacts.artifacts.v1alpha1.Tags>} value
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} returns this
*/
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.artifacts.artifacts.v1alpha1.Tags=} opt_value
 * @param {number=} opt_index
 * @return {!proto.artifacts.artifacts.v1alpha1.Tags}
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.artifacts.artifacts.v1alpha1.Tags, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry} returns this
 */
proto.artifacts.artifacts.v1alpha1.ArtifactsRegistry.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


goog.object.extend(exports, proto.artifacts.artifacts.v1alpha1);