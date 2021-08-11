// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/metrics/v1alpha1/metrics_api.proto

package io.cuemby.performance.metrics.v1alpha1;

/**
 * Protobuf enum {@code performance.metrics.v1alpha1.MetricsInterval}
 */
public enum MetricsInterval
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>METRICS_INTERVAL_UNSPECIFIED = 0;</code>
   */
  METRICS_INTERVAL_UNSPECIFIED(0),
  /**
   * <code>METRICS_INTERVAL_1_MUNITE = 1;</code>
   */
  METRICS_INTERVAL_1_MUNITE(1),
  /**
   * <code>METRICS_INTERVAL_5_MUNITES = 2;</code>
   */
  METRICS_INTERVAL_5_MUNITES(2),
  /**
   * <code>METRICS_INTERVAL_15_MUNITES = 3;</code>
   */
  METRICS_INTERVAL_15_MUNITES(3),
  /**
   * <code>METRICS_INTERVAL_30_MUNITES = 4;</code>
   */
  METRICS_INTERVAL_30_MUNITES(4),
  /**
   * <code>METRICS_INTERVAL_1_HOUR = 5;</code>
   */
  METRICS_INTERVAL_1_HOUR(5),
  /**
   * <code>METRICS_INTERVAL_12_HOURS = 6;</code>
   */
  METRICS_INTERVAL_12_HOURS(6),
  /**
   * <code>METRICS_INTERVAL_1_DAY = 7;</code>
   */
  METRICS_INTERVAL_1_DAY(7),
  /**
   * <code>METRICS_INTERVAL_1_WEEK = 8;</code>
   */
  METRICS_INTERVAL_1_WEEK(8),
  UNRECOGNIZED(-1),
  ;

  /**
   * <code>METRICS_INTERVAL_UNSPECIFIED = 0;</code>
   */
  public static final int METRICS_INTERVAL_UNSPECIFIED_VALUE = 0;
  /**
   * <code>METRICS_INTERVAL_1_MUNITE = 1;</code>
   */
  public static final int METRICS_INTERVAL_1_MUNITE_VALUE = 1;
  /**
   * <code>METRICS_INTERVAL_5_MUNITES = 2;</code>
   */
  public static final int METRICS_INTERVAL_5_MUNITES_VALUE = 2;
  /**
   * <code>METRICS_INTERVAL_15_MUNITES = 3;</code>
   */
  public static final int METRICS_INTERVAL_15_MUNITES_VALUE = 3;
  /**
   * <code>METRICS_INTERVAL_30_MUNITES = 4;</code>
   */
  public static final int METRICS_INTERVAL_30_MUNITES_VALUE = 4;
  /**
   * <code>METRICS_INTERVAL_1_HOUR = 5;</code>
   */
  public static final int METRICS_INTERVAL_1_HOUR_VALUE = 5;
  /**
   * <code>METRICS_INTERVAL_12_HOURS = 6;</code>
   */
  public static final int METRICS_INTERVAL_12_HOURS_VALUE = 6;
  /**
   * <code>METRICS_INTERVAL_1_DAY = 7;</code>
   */
  public static final int METRICS_INTERVAL_1_DAY_VALUE = 7;
  /**
   * <code>METRICS_INTERVAL_1_WEEK = 8;</code>
   */
  public static final int METRICS_INTERVAL_1_WEEK_VALUE = 8;


  public final int getNumber() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalArgumentException(
          "Can't get the number of an unknown enum value.");
    }
    return value;
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   * @deprecated Use {@link #forNumber(int)} instead.
   */
  @java.lang.Deprecated
  public static MetricsInterval valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static MetricsInterval forNumber(int value) {
    switch (value) {
      case 0: return METRICS_INTERVAL_UNSPECIFIED;
      case 1: return METRICS_INTERVAL_1_MUNITE;
      case 2: return METRICS_INTERVAL_5_MUNITES;
      case 3: return METRICS_INTERVAL_15_MUNITES;
      case 4: return METRICS_INTERVAL_30_MUNITES;
      case 5: return METRICS_INTERVAL_1_HOUR;
      case 6: return METRICS_INTERVAL_12_HOURS;
      case 7: return METRICS_INTERVAL_1_DAY;
      case 8: return METRICS_INTERVAL_1_WEEK;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<MetricsInterval>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      MetricsInterval> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<MetricsInterval>() {
          public MetricsInterval findValueByNumber(int number) {
            return MetricsInterval.forNumber(number);
          }
        };

  public final com.google.protobuf.Descriptors.EnumValueDescriptor
      getValueDescriptor() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalStateException(
          "Can't get the descriptor of an unrecognized enum value.");
    }
    return getDescriptor().getValues().get(ordinal());
  }
  public final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptorForType() {
    return getDescriptor();
  }
  public static final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptor() {
    return io.cuemby.performance.metrics.v1alpha1.MetricsApiProto.getDescriptor().getEnumTypes().get(0);
  }

  private static final MetricsInterval[] VALUES = values();

  public static MetricsInterval valueOf(
      com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
    if (desc.getType() != getDescriptor()) {
      throw new java.lang.IllegalArgumentException(
        "EnumValueDescriptor is not for this type.");
    }
    if (desc.getIndex() == -1) {
      return UNRECOGNIZED;
    }
    return VALUES[desc.getIndex()];
  }

  private final int value;

  private MetricsInterval(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:performance.metrics.v1alpha1.MetricsInterval)
}
