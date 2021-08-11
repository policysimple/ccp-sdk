// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/instance/v1alpha1/instance.proto

package io.cuemby.pipelines.instance.v1alpha1;

/**
 * <pre>
 * InstanceType ...
 * </pre>
 *
 * Protobuf enum {@code pipelines.instance.v1alpha1.InstanceType}
 */
public enum InstanceType
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>INSTANCE_TYPE_UNSPECIFIED = 0;</code>
   */
  INSTANCE_TYPE_UNSPECIFIED(0),
  /**
   * <code>INSTANCE_TYPE_GIT = 1;</code>
   */
  INSTANCE_TYPE_GIT(1),
  UNRECOGNIZED(-1),
  ;

  /**
   * <code>INSTANCE_TYPE_UNSPECIFIED = 0;</code>
   */
  public static final int INSTANCE_TYPE_UNSPECIFIED_VALUE = 0;
  /**
   * <code>INSTANCE_TYPE_GIT = 1;</code>
   */
  public static final int INSTANCE_TYPE_GIT_VALUE = 1;


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
  public static InstanceType valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static InstanceType forNumber(int value) {
    switch (value) {
      case 0: return INSTANCE_TYPE_UNSPECIFIED;
      case 1: return INSTANCE_TYPE_GIT;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<InstanceType>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      InstanceType> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<InstanceType>() {
          public InstanceType findValueByNumber(int number) {
            return InstanceType.forNumber(number);
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
    return io.cuemby.pipelines.instance.v1alpha1.InstanceProto.getDescriptor().getEnumTypes().get(0);
  }

  private static final InstanceType[] VALUES = values();

  public static InstanceType valueOf(
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

  private InstanceType(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:pipelines.instance.v1alpha1.InstanceType)
}
