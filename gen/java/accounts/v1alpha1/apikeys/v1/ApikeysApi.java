// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: accounts/v1alpha1/apikeys/apikeys_api.proto

package accounts.v1alpha1.apikeys.v1;

public final class ApikeysApi {
  private ApikeysApi() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n+accounts/v1alpha1/apikeys/apikeys_api." +
      "proto\022\034accounts.v1alpha1.apikeys.v1\032\'acc" +
      "ounts/v1alpha1/apikeys/apikeys.proto2\334\004\n" +
      "\rApiKeyService\022u\n\014CreateApiKey\0221.account" +
      "s.v1alpha1.apikeys.v1.CreateApiKeyReques" +
      "t\0322.accounts.v1alpha1.apikeys.v1.CreateA" +
      "piKeyResponse\022u\n\014GetOneApiKey\0221.accounts" +
      ".v1alpha1.apikeys.v1.GetOneApiKeyRequest" +
      "\0322.accounts.v1alpha1.apikeys.v1.GetOneAp" +
      "iKeyResponse\022o\n\nListApiKey\022/.accounts.v1" +
      "alpha1.apikeys.v1.ListApiKeyRequest\0320.ac" +
      "counts.v1alpha1.apikeys.v1.ListApiKeyRes" +
      "ponse\022u\n\014UpdateApiKey\0221.accounts.v1alpha" +
      "1.apikeys.v1.UpdateApiKeyRequest\0322.accou" +
      "nts.v1alpha1.apikeys.v1.UpdateApiKeyResp" +
      "onse\022u\n\014DeleteApiKey\0221.accounts.v1alpha1" +
      ".apikeys.v1.DeleteApiKeyRequest\0322.accoun" +
      "ts.v1alpha1.apikeys.v1.DeleteApiKeyRespo" +
      "nseB<Z:github.com/cuemby/ccp-sdk/gen/go/" +
      "accounts/v1alpha1/apikeysb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          accounts.v1alpha1.apikeys.v1.Apikeys.getDescriptor(),
        });
    accounts.v1alpha1.apikeys.v1.Apikeys.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
