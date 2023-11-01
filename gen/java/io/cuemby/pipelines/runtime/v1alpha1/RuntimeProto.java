// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public final class RuntimeProto {
  private RuntimeProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Branch_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Branch_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Repository_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Repository_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Command_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Command_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Env_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Env_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Configuration_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Configuration_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Scaling_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Scaling_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Application_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Application_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_RuntimeList_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_RuntimeList_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_IntanceType_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_IntanceType_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_ResourcesRules_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_ResourcesRules_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Limit_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Limit_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Request_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Request_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_PipelineRun_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_PipelineRun_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n(pipelines/runtime/v1alpha1/runtime.pro" +
      "to\022\032pipelines.runtime.v1alpha1\032&pipeline" +
      "s/tekton/v1alpha1/tekton.proto\"@\n\006Branch" +
      "\022\022\n\004name\030\001 \001(\tR\004name\022\020\n\003sha\030\002 \001(\tR\003sha\022\020" +
      "\n\003url\030\003 \001(\tR\003url\"\346\001\n\nRepository\022\022\n\004name\030" +
      "\001 \001(\tR\004name\022\033\n\tfull_name\030\002 \001(\tR\010fullName" +
      "\022 \n\013description\030\003 \001(\tR\013description\022\022\n\004fo" +
      "rk\030\004 \001(\010R\004fork\022\033\n\tclone_url\030\005 \001(\tR\010clone" +
      "Url\022\030\n\007private\030\006 \001(\010R\007private\022:\n\006branch\030" +
      "\007 \001(\0132\".pipelines.runtime.v1alpha1.Branc" +
      "hR\006branch\"1\n\007Command\022\024\n\005build\030\001 \001(\tR\005bui" +
      "ld\022\020\n\003run\030\002 \001(\tR\003run\"K\n\003Env\022\024\n\005value\030\001 \001" +
      "(\tR\005value\022\020\n\003key\030\002 \001(\tR\003key\022\034\n\tencrypted" +
      "\030\003 \001(\010R\tencrypted\"\274\001\n\rConfiguration\0223\n\004e" +
      "nvs\030\001 \003(\0132\037.pipelines.runtime.v1alpha1.E" +
      "nvR\004envs\022?\n\010commands\030\002 \003(\0132#.pipelines.r" +
      "untime.v1alpha1.CommandR\010commands\022\022\n\004por" +
      "t\030\003 \001(\005R\004port\022!\n\014runtime_type\030\004 \001(\tR\013run" +
      "timeType\"\334\001\n\007Scaling\022\031\n\010cpu_rule\030\001 \001(\tR\007" +
      "cpuRule\022(\n\020cool_down_period\030\002 \001(\tR\016coolD" +
      "ownPeriod\022)\n\020polling_interval\030\003 \001(\tR\017pol" +
      "lingInterval\022\037\n\013min_replica\030\004 \001(\tR\nminRe" +
      "plica\022\037\n\013max_replica\030\005 \001(\tR\nmaxReplica\022\037" +
      "\n\013memory_rule\030\006 \001(\tR\nmemoryRule\"\236\001\n\021Cont" +
      "ainerRegistry\022!\n\014registry_url\030\001 \001(\tR\013reg" +
      "istryUrl\022#\n\rregistry_user\030\002 \001(\tR\014registr" +
      "yUser\022\"\n\rreg_cred_auth\030\003 \001(\tR\013regCredAut" +
      "h\022\035\n\nimage_name\030\004 \001(\tR\timageName\"\262\007\n\013App" +
      "lication\022\016\n\002id\030\001 \001(\tR\002id\022\022\n\004name\030\002 \001(\tR\004" +
      "name\022 \n\013integration\030\003 \001(\tR\013integration\022F" +
      "\n\nrepository\030\004 \001(\0132&.pipelines.runtime.v" +
      "1alpha1.RepositoryR\nrepository\022O\n\rconfig" +
      "uration\030\005 \001(\0132).pipelines.runtime.v1alph" +
      "a1.ConfigurationR\rconfiguration\022\035\n\nproje" +
      "ct_id\030\006 \001(\tR\tprojectId\022!\n\014name_project\030\007" +
      " \001(\tR\013nameProject\022#\n\rproject_image\030\010 \001(\t" +
      "R\014projectImage\022/\n\023project_description\030\t " +
      "\001(\tR\022projectDescription\022\'\n\017organization_" +
      "id\030\n \001(\tR\016organizationId\022=\n\007scaling\030\013 \001(" +
      "\0132#.pipelines.runtime.v1alpha1.ScalingR\007" +
      "scaling\022J\n\014traffic_type\030\014 \001(\0162\'.pipeline" +
      "s.runtime.v1alpha1.TrafficTypeR\013trafficT" +
      "ype\022-\n\022integration_status\030\r \001(\010R\021integra" +
      "tionStatus\022f\n\026docker_image_buildpack\030\016 \001" +
      "(\01620.pipelines.runtime.v1alpha1.DockerIm" +
      "ageBuildpackR\024dockerImageBuildpack\022(\n\020no" +
      "_docker_exists\030\017 \001(\010R\016noDockerExists\022\\\n\022" +
      "container_registry\030\020 \001(\0132-.pipelines.run" +
      "time.v1alpha1.ContainerRegistryR\021contain" +
      "erRegistry\022*\n\021docker_image_name\030\021 \001(\tR\017d" +
      "ockerImageName\022-\n\022application_status\030\022 \001" +
      "(\tR\021applicationStatus\"\370\021\n\007Runtime\022\016\n\002id\030" +
      "\001 \001(\tR\002id\022\022\n\004name\030\002 \001(\tR\004name\022N\n\016instanc" +
      "e_types\030\003 \003(\0132\'.pipelines.runtime.v1alph" +
      "a1.IntanceTypeR\rinstanceTypes\022\'\n\017organiz" +
      "ation_id\030\004 \001(\tR\016organizationId\022\035\n\nprojec" +
      "t_id\030\005 \001(\tR\tprojectId\022!\n\014name_project\030\006 " +
      "\001(\tR\013nameProject\022%\n\016application_id\030\007 \001(\t" +
      "R\rapplicationId\022!\n\014workspace_id\030\010 \001(\tR\013w" +
      "orkspaceId\022%\n\016environment_id\030\t \001(\tR\renvi" +
      "ronmentId\022\026\n\006scaler\030\n \001(\tR\006scaler\022\035\n\npod" +
      "_status\030\013 \001(\tR\tpodStatus\022$\n\016pod_status_m" +
      "sg\030\014 \001(\tR\014podStatusMsg\022V\n\013integration\030\r " +
      "\003(\01324.pipelines.runtime.v1alpha1.Runtime" +
      ".IntegrationEntryR\013integration\022r\n\025enviro" +
      "nment_variables\030\016 \003(\0132=.pipelines.runtim" +
      "e.v1alpha1.Runtime.EnvironmentVariablesE" +
      "ntryR\024environmentVariables\022M\n\010commands\030\017" +
      " \003(\01321.pipelines.runtime.v1alpha1.Runtim" +
      "e.CommandsEntryR\010commands\022J\n\007secrets\030\020 \003" +
      "(\01320.pipelines.runtime.v1alpha1.Runtime." +
      "SecretsEntryR\007secrets\022Q\n\nextra_args\030\021 \003(" +
      "\01322.pipelines.runtime.v1alpha1.Runtime.E" +
      "xtraArgsEntryR\textraArgs\022J\n\014traffic_type" +
      "\030\022 \001(\0162\'.pipelines.runtime.v1alpha1.Traf" +
      "ficTypeR\013trafficType\022)\n\020response_message" +
      "\030\023 \001(\tR\017responseMessage\022)\n\020environment_n" +
      "ame\030\024 \001(\tR\017environmentName\022:\n\031environmen" +
      "t_internal_name\030\025 \001(\tR\027environmentIntern" +
      "alName\022)\n\020application_name\030\026 \001(\tR\017applic" +
      "ationName\022!\n\014storage_used\030\027 \001(\rR\013storage" +
      "Used\022#\n\rstorage_limit\030\030 \001(\rR\014storageLimi" +
      "t\022%\n\016integration_id\030\031 \001(\tR\rintegrationId" +
      "\022R\n\020application_data\030\032 \001(\0132\'.pipelines.r" +
      "untime.v1alpha1.ApplicationR\017application" +
      "Data\022\'\n\017custom_pipeline\030\033 \001(\010R\016customPip" +
      "eline\022O\n\023before_deploy_tasks\030\034 \003(\0132\037.pip" +
      "elines.tekton.v1alpha1.TaskR\021beforeDeplo" +
      "yTasks\022M\n\022after_deploy_tasks\030\035 \003(\0132\037.pip" +
      "elines.tekton.v1alpha1.TaskR\020afterDeploy" +
      "Tasks\022(\n\020pod_ingress_cert\030\036 \001(\tR\016podIngr" +
      "essCert\0225\n\027is_not_exist_dockerfile\030\037 \001(\010" +
      "R\024isNotExistDockerfile\0229\n\006params\030  \003(\0132!" +
      ".pipelines.tekton.v1alpha1.ParamsR\006param" +
      "s\022I\n\014pipeline_run\030! \001(\0132&.pipelines.tekt" +
      "on.v1alpha1.PipelineRunR\013pipelineRun\022\031\n\010" +
      "host_url\030\" \001(\tR\007hostUrl\022\033\n\tapp_label\030# \001" +
      "(\tR\010appLabel\022\035\n\ncreated_at\030$ \001(\tR\tcreate" +
      "dAt\022\035\n\nupdated_at\030% \001(\tR\tupdatedAt\022-\n\022ap" +
      "plication_status\030& \001(\tR\021applicationStatu" +
      "s\022%\n\016runtime_status\030\' \001(\tR\rruntimeStatus" +
      "\032>\n\020IntegrationEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024" +
      "\n\005value\030\002 \001(\tR\005value:\0028\001\032G\n\031EnvironmentV" +
      "ariablesEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005value" +
      "\030\002 \001(\tR\005value:\0028\001\032;\n\rCommandsEntry\022\020\n\003ke" +
      "y\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\032:" +
      "\n\014SecretsEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005valu" +
      "e\030\002 \001(\tR\005value:\0028\001\032<\n\016ExtraArgsEntry\022\020\n\003" +
      "key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001" +
      "\"H\n\013RuntimeList\0229\n\005items\030\001 \003(\0132#.pipelin" +
      "es.runtime.v1alpha1.RuntimeR\005items\"\206\001\n\013I" +
      "ntanceType\022\016\n\002id\030\001 \001(\tR\002id\022\022\n\004name\030\002 \001(\t" +
      "R\004name\022S\n\017resources_rules\030\003 \003(\0132*.pipeli" +
      "nes.runtime.v1alpha1.ResourcesRulesR\016res" +
      "ourcesRules\"\210\001\n\016ResourcesRules\0227\n\005limit\030" +
      "\001 \003(\0132!.pipelines.runtime.v1alpha1.Limit" +
      "R\005limit\022=\n\007request\030\002 \003(\0132#.pipelines.run" +
      "time.v1alpha1.RequestR\007request\"+\n\005Limit\022" +
      "\020\n\003cpu\030\001 \001(\tR\003cpu\022\020\n\003ram\030\002 \001(\tR\003ram\"-\n\007R" +
      "equest\022\020\n\003cpu\030\001 \001(\tR\003cpu\022\020\n\003ram\030\002 \001(\tR\003r" +
      "am\"\205\001\n\013PipelineRun\022\022\n\004name\030\001 \001(\tR\004name\022\024" +
      "\n\005label\030\002 \001(\tR\005label\022\034\n\tnamespace\030\003 \001(\tR" +
      "\tnamespace\022.\n\023pipeline_run_status\030\004 \001(\tR" +
      "\021pipelineRunStatus*\314\001\n\024DockerImageBuildp" +
      "ack\022&\n\"DOCKER_IMAGE_BUILDPACK_UNSPECIFIE" +
      "D\020\000\022!\n\035DOCKER_IMAGE_BUILDPACK_GOLANG\020\001\022\037" +
      "\n\033DOCKER_IMAGE_BUILDPACK_JAVA\020\002\022%\n!DOCKE" +
      "R_IMAGE_BUILDPACK_JAVASCRIPT\020\003\022!\n\035DOCKER" +
      "_IMAGE_BUILDPACK_PYTHON\020\004*a\n\013TrafficType" +
      "\022\034\n\030TRAFFIC_TYPE_UNSPECIFIED\020\000\022\031\n\025TRAFFI" +
      "C_TYPE_EXTERNAL\020\001\022\031\n\025TRAFFIC_TYPE_INTERN" +
      "AL\020\002B\255\001\n$io.cuemby.pipelines.runtime.v1a" +
      "lpha1B\014RuntimeProtoP\001Z5github.com/cuemby" +
      "/ccp-runtime-service/runtimev1alpha1\242\002\003P" +
      "PX\252\002\032Pipelines.Runtime.V1Alpha1\312\002\032Pipeli" +
      "nes\\Runtime\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          io.cuemby.pipelines.tekton.v1alpha1.TektonProto.getDescriptor(),
        });
    internal_static_pipelines_runtime_v1alpha1_Branch_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_pipelines_runtime_v1alpha1_Branch_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Branch_descriptor,
        new java.lang.String[] { "Name", "Sha", "Url", });
    internal_static_pipelines_runtime_v1alpha1_Repository_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_pipelines_runtime_v1alpha1_Repository_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Repository_descriptor,
        new java.lang.String[] { "Name", "FullName", "Description", "Fork", "CloneUrl", "Private", "Branch", });
    internal_static_pipelines_runtime_v1alpha1_Command_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_pipelines_runtime_v1alpha1_Command_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Command_descriptor,
        new java.lang.String[] { "Build", "Run", });
    internal_static_pipelines_runtime_v1alpha1_Env_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_pipelines_runtime_v1alpha1_Env_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Env_descriptor,
        new java.lang.String[] { "Value", "Key", "Encrypted", });
    internal_static_pipelines_runtime_v1alpha1_Configuration_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_pipelines_runtime_v1alpha1_Configuration_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Configuration_descriptor,
        new java.lang.String[] { "Envs", "Commands", "Port", "RuntimeType", });
    internal_static_pipelines_runtime_v1alpha1_Scaling_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_pipelines_runtime_v1alpha1_Scaling_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Scaling_descriptor,
        new java.lang.String[] { "CpuRule", "CoolDownPeriod", "PollingInterval", "MinReplica", "MaxReplica", "MemoryRule", });
    internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_descriptor,
        new java.lang.String[] { "RegistryUrl", "RegistryUser", "RegCredAuth", "ImageName", });
    internal_static_pipelines_runtime_v1alpha1_Application_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_pipelines_runtime_v1alpha1_Application_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Application_descriptor,
        new java.lang.String[] { "Id", "Name", "Integration", "Repository", "Configuration", "ProjectId", "NameProject", "ProjectImage", "ProjectDescription", "OrganizationId", "Scaling", "TrafficType", "IntegrationStatus", "DockerImageBuildpack", "NoDockerExists", "ContainerRegistry", "DockerImageName", "ApplicationStatus", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor =
      getDescriptor().getMessageTypes().get(8);
    internal_static_pipelines_runtime_v1alpha1_Runtime_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor,
        new java.lang.String[] { "Id", "Name", "InstanceTypes", "OrganizationId", "ProjectId", "NameProject", "ApplicationId", "WorkspaceId", "EnvironmentId", "Scaler", "PodStatus", "PodStatusMsg", "Integration", "EnvironmentVariables", "Commands", "Secrets", "ExtraArgs", "TrafficType", "ResponseMessage", "EnvironmentName", "EnvironmentInternalName", "ApplicationName", "StorageUsed", "StorageLimit", "IntegrationId", "ApplicationData", "CustomPipeline", "BeforeDeployTasks", "AfterDeployTasks", "PodIngressCert", "IsNotExistDockerfile", "Params", "PipelineRun", "HostUrl", "AppLabel", "CreatedAt", "UpdatedAt", "ApplicationStatus", "RuntimeStatus", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(0);
    internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(1);
    internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(2);
    internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(3);
    internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(4);
    internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_RuntimeList_descriptor =
      getDescriptor().getMessageTypes().get(9);
    internal_static_pipelines_runtime_v1alpha1_RuntimeList_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_RuntimeList_descriptor,
        new java.lang.String[] { "Items", });
    internal_static_pipelines_runtime_v1alpha1_IntanceType_descriptor =
      getDescriptor().getMessageTypes().get(10);
    internal_static_pipelines_runtime_v1alpha1_IntanceType_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_IntanceType_descriptor,
        new java.lang.String[] { "Id", "Name", "ResourcesRules", });
    internal_static_pipelines_runtime_v1alpha1_ResourcesRules_descriptor =
      getDescriptor().getMessageTypes().get(11);
    internal_static_pipelines_runtime_v1alpha1_ResourcesRules_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_ResourcesRules_descriptor,
        new java.lang.String[] { "Limit", "Request", });
    internal_static_pipelines_runtime_v1alpha1_Limit_descriptor =
      getDescriptor().getMessageTypes().get(12);
    internal_static_pipelines_runtime_v1alpha1_Limit_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Limit_descriptor,
        new java.lang.String[] { "Cpu", "Ram", });
    internal_static_pipelines_runtime_v1alpha1_Request_descriptor =
      getDescriptor().getMessageTypes().get(13);
    internal_static_pipelines_runtime_v1alpha1_Request_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Request_descriptor,
        new java.lang.String[] { "Cpu", "Ram", });
    internal_static_pipelines_runtime_v1alpha1_PipelineRun_descriptor =
      getDescriptor().getMessageTypes().get(14);
    internal_static_pipelines_runtime_v1alpha1_PipelineRun_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_PipelineRun_descriptor,
        new java.lang.String[] { "Name", "Label", "Namespace", "PipelineRunStatus", });
    io.cuemby.pipelines.tekton.v1alpha1.TektonProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
