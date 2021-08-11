// source: performance/metrics/v1alpha1/metrics_api.proto
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

var performance_metrics_v1alpha1_metrics_pb = require('../../../performance/metrics/v1alpha1/metrics_pb.js');
goog.object.extend(proto, performance_metrics_v1alpha1_metrics_pb);
goog.exportSymbol('proto.performance.metrics.v1alpha1.GetMetricsRequest', null, global);
goog.exportSymbol('proto.performance.metrics.v1alpha1.GetMetricsResponse', null, global);
goog.exportSymbol('proto.performance.metrics.v1alpha1.MetricsInterval', null, global);
goog.exportSymbol('proto.performance.metrics.v1alpha1.Range', null, global);
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
proto.performance.metrics.v1alpha1.Range = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.performance.metrics.v1alpha1.Range, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.performance.metrics.v1alpha1.Range.displayName = 'proto.performance.metrics.v1alpha1.Range';
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
proto.performance.metrics.v1alpha1.GetMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.performance.metrics.v1alpha1.GetMetricsRequest.repeatedFields_, null);
};
goog.inherits(proto.performance.metrics.v1alpha1.GetMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.performance.metrics.v1alpha1.GetMetricsRequest.displayName = 'proto.performance.metrics.v1alpha1.GetMetricsRequest';
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
proto.performance.metrics.v1alpha1.GetMetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.performance.metrics.v1alpha1.GetMetricsResponse.repeatedFields_, null);
};
goog.inherits(proto.performance.metrics.v1alpha1.GetMetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.performance.metrics.v1alpha1.GetMetricsResponse.displayName = 'proto.performance.metrics.v1alpha1.GetMetricsResponse';
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
proto.performance.metrics.v1alpha1.Range.prototype.toObject = function(opt_includeInstance) {
  return proto.performance.metrics.v1alpha1.Range.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.performance.metrics.v1alpha1.Range} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.performance.metrics.v1alpha1.Range.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateFrom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dateTo: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.performance.metrics.v1alpha1.Range}
 */
proto.performance.metrics.v1alpha1.Range.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.performance.metrics.v1alpha1.Range;
  return proto.performance.metrics.v1alpha1.Range.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.performance.metrics.v1alpha1.Range} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.performance.metrics.v1alpha1.Range}
 */
proto.performance.metrics.v1alpha1.Range.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateTo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
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
proto.performance.metrics.v1alpha1.Range.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.performance.metrics.v1alpha1.Range.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.performance.metrics.v1alpha1.Range} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.performance.metrics.v1alpha1.Range.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDateTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string date_from = 1;
 * @return {string}
 */
proto.performance.metrics.v1alpha1.Range.prototype.getDateFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.performance.metrics.v1alpha1.Range} returns this
 */
proto.performance.metrics.v1alpha1.Range.prototype.setDateFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string date_to = 2;
 * @return {string}
 */
proto.performance.metrics.v1alpha1.Range.prototype.getDateTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.performance.metrics.v1alpha1.Range} returns this
 */
proto.performance.metrics.v1alpha1.Range.prototype.setDateTo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string timezone = 3;
 * @return {string}
 */
proto.performance.metrics.v1alpha1.Range.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.performance.metrics.v1alpha1.Range} returns this
 */
proto.performance.metrics.v1alpha1.Range.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.repeatedFields_ = [2];



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
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.performance.metrics.v1alpha1.GetMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.performance.metrics.v1alpha1.GetMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    containersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    interval: jspb.Message.getFieldWithDefault(msg, 3, 0),
    range: (f = msg.getRange()) && proto.performance.metrics.v1alpha1.Range.toObject(includeInstance, f)
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
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsRequest}
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.performance.metrics.v1alpha1.GetMetricsRequest;
  return proto.performance.metrics.v1alpha1.GetMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.performance.metrics.v1alpha1.GetMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsRequest}
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addContainers(value);
      break;
    case 3:
      var value = /** @type {!proto.performance.metrics.v1alpha1.MetricsInterval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    case 4:
      var value = new proto.performance.metrics.v1alpha1.Range;
      reader.readMessage(value,proto.performance.metrics.v1alpha1.Range.deserializeBinaryFromReader);
      msg.setRange(value);
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
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.performance.metrics.v1alpha1.GetMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.performance.metrics.v1alpha1.GetMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getContainersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.performance.metrics.v1alpha1.Range.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> labels = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsRequest} returns this
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * repeated string containers = 2;
 * @return {!Array<string>}
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.getContainersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsRequest} returns this
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.setContainersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsRequest} returns this
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.addContainers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsRequest} returns this
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.clearContainersList = function() {
  return this.setContainersList([]);
};


/**
 * optional MetricsInterval interval = 3;
 * @return {!proto.performance.metrics.v1alpha1.MetricsInterval}
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.getInterval = function() {
  return /** @type {!proto.performance.metrics.v1alpha1.MetricsInterval} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.performance.metrics.v1alpha1.MetricsInterval} value
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsRequest} returns this
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Range range = 4;
 * @return {?proto.performance.metrics.v1alpha1.Range}
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.getRange = function() {
  return /** @type{?proto.performance.metrics.v1alpha1.Range} */ (
    jspb.Message.getWrapperField(this, proto.performance.metrics.v1alpha1.Range, 4));
};


/**
 * @param {?proto.performance.metrics.v1alpha1.Range|undefined} value
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsRequest} returns this
*/
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsRequest} returns this
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.performance.metrics.v1alpha1.GetMetricsRequest.prototype.hasRange = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.repeatedFields_ = [1,2];



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
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.performance.metrics.v1alpha1.GetMetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.performance.metrics.v1alpha1.GetMetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    memoryList: jspb.Message.toObjectList(msg.getMemoryList(),
    performance_metrics_v1alpha1_metrics_pb.MetricItem.toObject, includeInstance),
    cpuList: jspb.Message.toObjectList(msg.getCpuList(),
    performance_metrics_v1alpha1_metrics_pb.MetricItem.toObject, includeInstance)
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
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsResponse}
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.performance.metrics.v1alpha1.GetMetricsResponse;
  return proto.performance.metrics.v1alpha1.GetMetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.performance.metrics.v1alpha1.GetMetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsResponse}
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new performance_metrics_v1alpha1_metrics_pb.MetricItem;
      reader.readMessage(value,performance_metrics_v1alpha1_metrics_pb.MetricItem.deserializeBinaryFromReader);
      msg.addMemory(value);
      break;
    case 2:
      var value = new performance_metrics_v1alpha1_metrics_pb.MetricItem;
      reader.readMessage(value,performance_metrics_v1alpha1_metrics_pb.MetricItem.deserializeBinaryFromReader);
      msg.addCpu(value);
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
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.performance.metrics.v1alpha1.GetMetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.performance.metrics.v1alpha1.GetMetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      performance_metrics_v1alpha1_metrics_pb.MetricItem.serializeBinaryToWriter
    );
  }
  f = message.getCpuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      performance_metrics_v1alpha1_metrics_pb.MetricItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MetricItem memory = 1;
 * @return {!Array<!proto.performance.metrics.v1alpha1.MetricItem>}
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.getMemoryList = function() {
  return /** @type{!Array<!proto.performance.metrics.v1alpha1.MetricItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, performance_metrics_v1alpha1_metrics_pb.MetricItem, 1));
};


/**
 * @param {!Array<!proto.performance.metrics.v1alpha1.MetricItem>} value
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsResponse} returns this
*/
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.setMemoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.performance.metrics.v1alpha1.MetricItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.performance.metrics.v1alpha1.MetricItem}
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.addMemory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.performance.metrics.v1alpha1.MetricItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsResponse} returns this
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.clearMemoryList = function() {
  return this.setMemoryList([]);
};


/**
 * repeated MetricItem cpu = 2;
 * @return {!Array<!proto.performance.metrics.v1alpha1.MetricItem>}
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.getCpuList = function() {
  return /** @type{!Array<!proto.performance.metrics.v1alpha1.MetricItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, performance_metrics_v1alpha1_metrics_pb.MetricItem, 2));
};


/**
 * @param {!Array<!proto.performance.metrics.v1alpha1.MetricItem>} value
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsResponse} returns this
*/
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.setCpuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.performance.metrics.v1alpha1.MetricItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.performance.metrics.v1alpha1.MetricItem}
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.addCpu = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.performance.metrics.v1alpha1.MetricItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.performance.metrics.v1alpha1.GetMetricsResponse} returns this
 */
proto.performance.metrics.v1alpha1.GetMetricsResponse.prototype.clearCpuList = function() {
  return this.setCpuList([]);
};


/**
 * @enum {number}
 */
proto.performance.metrics.v1alpha1.MetricsInterval = {
  METRICS_INTERVAL_UNSPECIFIED: 0,
  METRICS_INTERVAL_1_MUNITE: 1,
  METRICS_INTERVAL_5_MUNITES: 2,
  METRICS_INTERVAL_15_MUNITES: 3,
  METRICS_INTERVAL_30_MUNITES: 4,
  METRICS_INTERVAL_1_HOUR: 5,
  METRICS_INTERVAL_12_HOURS: 6,
  METRICS_INTERVAL_1_DAY: 7,
  METRICS_INTERVAL_1_WEEK: 8
};

goog.object.extend(exports, proto.performance.metrics.v1alpha1);