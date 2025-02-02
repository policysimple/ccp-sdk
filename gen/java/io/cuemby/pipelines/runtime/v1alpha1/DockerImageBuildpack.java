// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime.proto

package io.cuemby.pipelines.runtime.v1alpha1;

/**
 * Protobuf enum {@code pipelines.runtime.v1alpha1.DockerImageBuildpack}
 */
public enum DockerImageBuildpack
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>DOCKER_IMAGE_BUILDPACK_UNSPECIFIED = 0;</code>
   */
  DOCKER_IMAGE_BUILDPACK_UNSPECIFIED(0),
  /**
   * <code>DOCKER_IMAGE_BUILDPACK_GOLANG = 1;</code>
   */
  DOCKER_IMAGE_BUILDPACK_GOLANG(1),
  /**
   * <code>DOCKER_IMAGE_BUILDPACK_JAVA = 2;</code>
   */
  DOCKER_IMAGE_BUILDPACK_JAVA(2),
  /**
   * <code>DOCKER_IMAGE_BUILDPACK_JAVASCRIPT = 3;</code>
   */
  DOCKER_IMAGE_BUILDPACK_JAVASCRIPT(3),
  /**
   * <code>DOCKER_IMAGE_BUILDPACK_PYTHON = 4;</code>
   */
  DOCKER_IMAGE_BUILDPACK_PYTHON(4),
  UNRECOGNIZED(-1),
  ;

  /**
   * <code>DOCKER_IMAGE_BUILDPACK_UNSPECIFIED = 0;</code>
   */
  public static final int DOCKER_IMAGE_BUILDPACK_UNSPECIFIED_VALUE = 0;
  /**
   * <code>DOCKER_IMAGE_BUILDPACK_GOLANG = 1;</code>
   */
  public static final int DOCKER_IMAGE_BUILDPACK_GOLANG_VALUE = 1;
  /**
   * <code>DOCKER_IMAGE_BUILDPACK_JAVA = 2;</code>
   */
  public static final int DOCKER_IMAGE_BUILDPACK_JAVA_VALUE = 2;
  /**
   * <code>DOCKER_IMAGE_BUILDPACK_JAVASCRIPT = 3;</code>
   */
  public static final int DOCKER_IMAGE_BUILDPACK_JAVASCRIPT_VALUE = 3;
  /**
   * <code>DOCKER_IMAGE_BUILDPACK_PYTHON = 4;</code>
   */
  public static final int DOCKER_IMAGE_BUILDPACK_PYTHON_VALUE = 4;


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
  public static DockerImageBuildpack valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static DockerImageBuildpack forNumber(int value) {
    switch (value) {
      case 0: return DOCKER_IMAGE_BUILDPACK_UNSPECIFIED;
      case 1: return DOCKER_IMAGE_BUILDPACK_GOLANG;
      case 2: return DOCKER_IMAGE_BUILDPACK_JAVA;
      case 3: return DOCKER_IMAGE_BUILDPACK_JAVASCRIPT;
      case 4: return DOCKER_IMAGE_BUILDPACK_PYTHON;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<DockerImageBuildpack>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      DockerImageBuildpack> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<DockerImageBuildpack>() {
          public DockerImageBuildpack findValueByNumber(int number) {
            return DockerImageBuildpack.forNumber(number);
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
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.getDescriptor().getEnumTypes().get(0);
  }

  private static final DockerImageBuildpack[] VALUES = values();

  public static DockerImageBuildpack valueOf(
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

  private DockerImageBuildpack(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:pipelines.runtime.v1alpha1.DockerImageBuildpack)
}

