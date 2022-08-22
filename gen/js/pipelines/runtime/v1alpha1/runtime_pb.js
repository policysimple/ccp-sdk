// source: pipelines/runtime/v1alpha1/runtime.proto
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

goog.exportSymbol('proto.pipelines.runtime.v1alpha1.Runtime', null, global);
goog.exportSymbol('proto.pipelines.runtime.v1alpha1.RuntimeList', null, global);
goog.exportSymbol('proto.pipelines.runtime.v1alpha1.TrafficType', null, global);
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
proto.pipelines.runtime.v1alpha1.Runtime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pipelines.runtime.v1alpha1.Runtime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pipelines.runtime.v1alpha1.Runtime.displayName = 'proto.pipelines.runtime.v1alpha1.Runtime';
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
proto.pipelines.runtime.v1alpha1.RuntimeList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pipelines.runtime.v1alpha1.RuntimeList.repeatedFields_, null);
};
goog.inherits(proto.pipelines.runtime.v1alpha1.RuntimeList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pipelines.runtime.v1alpha1.RuntimeList.displayName = 'proto.pipelines.runtime.v1alpha1.RuntimeList';
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
proto.pipelines.runtime.v1alpha1.Runtime.prototype.toObject = function(opt_includeInstance) {
  return proto.pipelines.runtime.v1alpha1.Runtime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pipelines.runtime.v1alpha1.Runtime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pipelines.runtime.v1alpha1.Runtime.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    instanceType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    projectId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    applicationId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    workspaceId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    environmentId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    scaler: jspb.Message.getFieldWithDefault(msg, 10, ""),
    podStatus: jspb.Message.getFieldWithDefault(msg, 11, ""),
    podStatusMsg: jspb.Message.getFieldWithDefault(msg, 12, ""),
    integrationMap: (f = msg.getIntegrationMap()) ? f.toObject(includeInstance, undefined) : [],
    environmentVariablesMap: (f = msg.getEnvironmentVariablesMap()) ? f.toObject(includeInstance, undefined) : [],
    commandsMap: (f = msg.getCommandsMap()) ? f.toObject(includeInstance, undefined) : [],
    secretsMap: (f = msg.getSecretsMap()) ? f.toObject(includeInstance, undefined) : [],
    extraArgsMap: (f = msg.getExtraArgsMap()) ? f.toObject(includeInstance, undefined) : [],
    autoscalingMap: (f = msg.getAutoscalingMap()) ? f.toObject(includeInstance, undefined) : [],
    trafficType: jspb.Message.getFieldWithDefault(msg, 19, 0)
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
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime}
 */
proto.pipelines.runtime.v1alpha1.Runtime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pipelines.runtime.v1alpha1.Runtime;
  return proto.pipelines.runtime.v1alpha1.Runtime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pipelines.runtime.v1alpha1.Runtime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime}
 */
proto.pipelines.runtime.v1alpha1.Runtime.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProjectId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspaceId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setScaler(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPodStatus(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPodStatusMsg(value);
      break;
    case 13:
      var value = msg.getIntegrationMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 14:
      var value = msg.getEnvironmentVariablesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 15:
      var value = msg.getCommandsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 16:
      var value = msg.getSecretsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 17:
      var value = msg.getExtraArgsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 18:
      var value = msg.getAutoscalingMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 19:
      var value = /** @type {!proto.pipelines.runtime.v1alpha1.TrafficType} */ (reader.readEnum());
      msg.setTrafficType(value);
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
proto.pipelines.runtime.v1alpha1.Runtime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pipelines.runtime.v1alpha1.Runtime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pipelines.runtime.v1alpha1.Runtime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pipelines.runtime.v1alpha1.Runtime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInstanceType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getProjectId();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getWorkspaceId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEnvironmentId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getScaler();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPodStatus();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPodStatusMsg();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getIntegrationMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getEnvironmentVariablesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getCommandsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSecretsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(16, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getExtraArgsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(17, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getAutoscalingMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(18, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTrafficType();
  if (f !== 0.0) {
    writer.writeEnum(
      19,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string instance_type = 4;
 * @return {string}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getInstanceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setInstanceType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 organization_id = 5;
 * @return {number}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 project_id = 6;
 * @return {number}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getProjectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string application_id = 7;
 * @return {string}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string workspace_id = 8;
 * @return {string}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getWorkspaceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setWorkspaceId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string environment_id = 9;
 * @return {string}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getEnvironmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setEnvironmentId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string scaler = 10;
 * @return {string}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getScaler = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setScaler = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string pod_status = 11;
 * @return {string}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getPodStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setPodStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string pod_status_msg = 12;
 * @return {string}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getPodStatusMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setPodStatusMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * map<string, string> integration = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getIntegrationMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.clearIntegrationMap = function() {
  this.getIntegrationMap().clear();
  return this;};


/**
 * map<string, string> environment_variables = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getEnvironmentVariablesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.clearEnvironmentVariablesMap = function() {
  this.getEnvironmentVariablesMap().clear();
  return this;};


/**
 * map<string, string> commands = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getCommandsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.clearCommandsMap = function() {
  this.getCommandsMap().clear();
  return this;};


/**
 * map<string, string> secrets = 16;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getSecretsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 16, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.clearSecretsMap = function() {
  this.getSecretsMap().clear();
  return this;};


/**
 * map<string, string> extra_args = 17;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getExtraArgsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 17, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.clearExtraArgsMap = function() {
  this.getExtraArgsMap().clear();
  return this;};


/**
 * map<string, string> autoscaling = 18;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getAutoscalingMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 18, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.clearAutoscalingMap = function() {
  this.getAutoscalingMap().clear();
  return this;};


/**
 * optional TrafficType traffic_type = 19;
 * @return {!proto.pipelines.runtime.v1alpha1.TrafficType}
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.getTrafficType = function() {
  return /** @type {!proto.pipelines.runtime.v1alpha1.TrafficType} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.pipelines.runtime.v1alpha1.TrafficType} value
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime} returns this
 */
proto.pipelines.runtime.v1alpha1.Runtime.prototype.setTrafficType = function(value) {
  return jspb.Message.setProto3EnumField(this, 19, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pipelines.runtime.v1alpha1.RuntimeList.repeatedFields_ = [1];



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
proto.pipelines.runtime.v1alpha1.RuntimeList.prototype.toObject = function(opt_includeInstance) {
  return proto.pipelines.runtime.v1alpha1.RuntimeList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pipelines.runtime.v1alpha1.RuntimeList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pipelines.runtime.v1alpha1.RuntimeList.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.pipelines.runtime.v1alpha1.Runtime.toObject, includeInstance)
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
 * @return {!proto.pipelines.runtime.v1alpha1.RuntimeList}
 */
proto.pipelines.runtime.v1alpha1.RuntimeList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pipelines.runtime.v1alpha1.RuntimeList;
  return proto.pipelines.runtime.v1alpha1.RuntimeList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pipelines.runtime.v1alpha1.RuntimeList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pipelines.runtime.v1alpha1.RuntimeList}
 */
proto.pipelines.runtime.v1alpha1.RuntimeList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pipelines.runtime.v1alpha1.Runtime;
      reader.readMessage(value,proto.pipelines.runtime.v1alpha1.Runtime.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.pipelines.runtime.v1alpha1.RuntimeList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pipelines.runtime.v1alpha1.RuntimeList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pipelines.runtime.v1alpha1.RuntimeList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pipelines.runtime.v1alpha1.RuntimeList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pipelines.runtime.v1alpha1.Runtime.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Runtime items = 1;
 * @return {!Array<!proto.pipelines.runtime.v1alpha1.Runtime>}
 */
proto.pipelines.runtime.v1alpha1.RuntimeList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.pipelines.runtime.v1alpha1.Runtime>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pipelines.runtime.v1alpha1.Runtime, 1));
};


/**
 * @param {!Array<!proto.pipelines.runtime.v1alpha1.Runtime>} value
 * @return {!proto.pipelines.runtime.v1alpha1.RuntimeList} returns this
*/
proto.pipelines.runtime.v1alpha1.RuntimeList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pipelines.runtime.v1alpha1.Runtime=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pipelines.runtime.v1alpha1.Runtime}
 */
proto.pipelines.runtime.v1alpha1.RuntimeList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pipelines.runtime.v1alpha1.Runtime, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pipelines.runtime.v1alpha1.RuntimeList} returns this
 */
proto.pipelines.runtime.v1alpha1.RuntimeList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * @enum {number}
 */
proto.pipelines.runtime.v1alpha1.TrafficType = {
  TRAFFIC_TYPE_UNSPECIFIED: 0,
  TRAFFIC_TYPE_EXTERNAL: 1,
  TRAFFIC_TYPE_INTERNAL: 2
};

goog.object.extend(exports, proto.pipelines.runtime.v1alpha1);
