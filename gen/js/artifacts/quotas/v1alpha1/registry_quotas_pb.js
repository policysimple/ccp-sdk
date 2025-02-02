// source: artifacts/quotas/v1alpha1/registry_quotas.proto
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

goog.exportSymbol('proto.artifacts.quotas.v1alpha1.HarborQuotas', null, global);
goog.exportSymbol('proto.artifacts.quotas.v1alpha1.QuotasRegistry', null, global);
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
proto.artifacts.quotas.v1alpha1.HarborQuotas = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.artifacts.quotas.v1alpha1.HarborQuotas, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.artifacts.quotas.v1alpha1.HarborQuotas.displayName = 'proto.artifacts.quotas.v1alpha1.HarborQuotas';
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
proto.artifacts.quotas.v1alpha1.QuotasRegistry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.artifacts.quotas.v1alpha1.QuotasRegistry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.artifacts.quotas.v1alpha1.QuotasRegistry.displayName = 'proto.artifacts.quotas.v1alpha1.QuotasRegistry';
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
proto.artifacts.quotas.v1alpha1.HarborQuotas.prototype.toObject = function(opt_includeInstance) {
  return proto.artifacts.quotas.v1alpha1.HarborQuotas.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.artifacts.quotas.v1alpha1.HarborQuotas} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.quotas.v1alpha1.HarborQuotas.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageUsed: jspb.Message.getFieldWithDefault(msg, 1, 0),
    storageLimit: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.artifacts.quotas.v1alpha1.HarborQuotas}
 */
proto.artifacts.quotas.v1alpha1.HarborQuotas.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.artifacts.quotas.v1alpha1.HarborQuotas;
  return proto.artifacts.quotas.v1alpha1.HarborQuotas.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.artifacts.quotas.v1alpha1.HarborQuotas} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.artifacts.quotas.v1alpha1.HarborQuotas}
 */
proto.artifacts.quotas.v1alpha1.HarborQuotas.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStorageUsed(value);
      break;
    case 2:
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
proto.artifacts.quotas.v1alpha1.HarborQuotas.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.artifacts.quotas.v1alpha1.HarborQuotas.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.artifacts.quotas.v1alpha1.HarborQuotas} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.quotas.v1alpha1.HarborQuotas.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageUsed();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStorageLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 storage_used = 1;
 * @return {number}
 */
proto.artifacts.quotas.v1alpha1.HarborQuotas.prototype.getStorageUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.artifacts.quotas.v1alpha1.HarborQuotas} returns this
 */
proto.artifacts.quotas.v1alpha1.HarborQuotas.prototype.setStorageUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 storage_limit = 2;
 * @return {number}
 */
proto.artifacts.quotas.v1alpha1.HarborQuotas.prototype.getStorageLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.artifacts.quotas.v1alpha1.HarborQuotas} returns this
 */
proto.artifacts.quotas.v1alpha1.HarborQuotas.prototype.setStorageLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.toObject = function(opt_includeInstance) {
  return proto.artifacts.quotas.v1alpha1.QuotasRegistry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    environmentId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    environmentInternalName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    harbor: (f = msg.getHarbor()) && proto.artifacts.quotas.v1alpha1.HarborQuotas.toObject(includeInstance, f)
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
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.artifacts.quotas.v1alpha1.QuotasRegistry;
  return proto.artifacts.quotas.v1alpha1.QuotasRegistry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOrganizationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentInternalName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 7:
      var value = new proto.artifacts.quotas.v1alpha1.HarborQuotas;
      reader.readMessage(value,proto.artifacts.quotas.v1alpha1.HarborQuotas.deserializeBinaryFromReader);
      msg.setHarbor(value);
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
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.artifacts.quotas.v1alpha1.QuotasRegistry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEnvironmentId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEnvironmentInternalName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getHarbor();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.artifacts.quotas.v1alpha1.HarborQuotas.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} returns this
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization_id = 2;
 * @return {string}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} returns this
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string project_id = 3;
 * @return {string}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} returns this
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string environment_id = 4;
 * @return {string}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.getEnvironmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} returns this
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.setEnvironmentId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string environment_internal_name = 5;
 * @return {string}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.getEnvironmentInternalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} returns this
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.setEnvironmentInternalName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool active = 6;
 * @return {boolean}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} returns this
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional HarborQuotas harbor = 7;
 * @return {?proto.artifacts.quotas.v1alpha1.HarborQuotas}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.getHarbor = function() {
  return /** @type{?proto.artifacts.quotas.v1alpha1.HarborQuotas} */ (
    jspb.Message.getWrapperField(this, proto.artifacts.quotas.v1alpha1.HarborQuotas, 7));
};


/**
 * @param {?proto.artifacts.quotas.v1alpha1.HarborQuotas|undefined} value
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} returns this
*/
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.setHarbor = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.artifacts.quotas.v1alpha1.QuotasRegistry} returns this
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.clearHarbor = function() {
  return this.setHarbor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.artifacts.quotas.v1alpha1.QuotasRegistry.prototype.hasHarbor = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.artifacts.quotas.v1alpha1);
