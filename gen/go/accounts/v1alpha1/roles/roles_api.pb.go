// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.17.3
// source: accounts/v1alpha1/roles/roles_api.proto

package roles

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_accounts_v1alpha1_roles_roles_api_proto protoreflect.FileDescriptor

var file_accounts_v1alpha1_roles_roles_api_proto_rawDesc = []byte{
	0x0a, 0x27, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2f, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2f, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x5f,
	0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1a, 0x61, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x72, 0x6f, 0x6c,
	0x65, 0x73, 0x2e, 0x76, 0x31, 0x1a, 0x23, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2f,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2f, 0x72,
	0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xa7, 0x06, 0x0a, 0x0b, 0x52,
	0x6f, 0x6c, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x6b, 0x0a, 0x0a, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x2d, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x72, 0x6f, 0x6c,
	0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2e, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x72, 0x6f, 0x6c, 0x65,
	0x73, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x68, 0x0a, 0x09, 0x4c, 0x69, 0x73, 0x74, 0x52,
	0x6f, 0x6c, 0x65, 0x73, 0x12, 0x2c, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x76,
	0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x2d, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x6b, 0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x12,
	0x2d, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2e,
	0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x6b,
	0x0a, 0x0a, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x2d, 0x2e, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65,
	0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2e, 0x2e, 0x61, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e,
	0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65, 0x52,
	0x6f, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x6b, 0x0a, 0x0a, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x2d, 0x2e, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x72, 0x6f,
	0x6c, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x6f, 0x6c,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2e, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x72, 0x6f, 0x6c,
	0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x77, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x52,
	0x6f, 0x6c, 0x65, 0x73, 0x42, 0x79, 0x55, 0x73, 0x65, 0x72, 0x12, 0x31, 0x2e, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x72,
	0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73,
	0x42, 0x79, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x32, 0x2e,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x6f,
	0x6c, 0x65, 0x73, 0x42, 0x79, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x80, 0x01, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x42, 0x79,
	0x4f, 0x72, 0x67, 0x55, 0x73, 0x65, 0x72, 0x12, 0x34, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x72, 0x6f, 0x6c, 0x65,
	0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x42, 0x79, 0x4f,
	0x72, 0x67, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x35, 0x2e,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x6f,
	0x6c, 0x65, 0x73, 0x42, 0x79, 0x4f, 0x72, 0x67, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x42, 0x3a, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73, 0x64,
	0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x72, 0x6f, 0x6c, 0x65, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_accounts_v1alpha1_roles_roles_api_proto_goTypes = []interface{}{
	(*CreateRoleRequest)(nil),         // 0: accounts.v1alpha1.roles.v1.CreateRoleRequest
	(*ListRolesRequest)(nil),          // 1: accounts.v1alpha1.roles.v1.ListRolesRequest
	(*UpdateRoleRequest)(nil),         // 2: accounts.v1alpha1.roles.v1.UpdateRoleRequest
	(*GetOneRoleRequest)(nil),         // 3: accounts.v1alpha1.roles.v1.GetOneRoleRequest
	(*DeleteRoleRequest)(nil),         // 4: accounts.v1alpha1.roles.v1.DeleteRoleRequest
	(*GetRolesByUserRequest)(nil),     // 5: accounts.v1alpha1.roles.v1.GetRolesByUserRequest
	(*GetRolesByOrgUserRequest)(nil),  // 6: accounts.v1alpha1.roles.v1.GetRolesByOrgUserRequest
	(*CreateRoleResponse)(nil),        // 7: accounts.v1alpha1.roles.v1.CreateRoleResponse
	(*ListRolesResponse)(nil),         // 8: accounts.v1alpha1.roles.v1.ListRolesResponse
	(*UpdateRoleResponse)(nil),        // 9: accounts.v1alpha1.roles.v1.UpdateRoleResponse
	(*GetOneRoleResponse)(nil),        // 10: accounts.v1alpha1.roles.v1.GetOneRoleResponse
	(*DeleteRoleResponse)(nil),        // 11: accounts.v1alpha1.roles.v1.DeleteRoleResponse
	(*GetRolesByUserResponse)(nil),    // 12: accounts.v1alpha1.roles.v1.GetRolesByUserResponse
	(*GetRolesByOrgUserResponse)(nil), // 13: accounts.v1alpha1.roles.v1.GetRolesByOrgUserResponse
}
var file_accounts_v1alpha1_roles_roles_api_proto_depIdxs = []int32{
	0,  // 0: accounts.v1alpha1.roles.v1.RoleService.CreateRole:input_type -> accounts.v1alpha1.roles.v1.CreateRoleRequest
	1,  // 1: accounts.v1alpha1.roles.v1.RoleService.ListRoles:input_type -> accounts.v1alpha1.roles.v1.ListRolesRequest
	2,  // 2: accounts.v1alpha1.roles.v1.RoleService.UpdateRole:input_type -> accounts.v1alpha1.roles.v1.UpdateRoleRequest
	3,  // 3: accounts.v1alpha1.roles.v1.RoleService.GetOneRole:input_type -> accounts.v1alpha1.roles.v1.GetOneRoleRequest
	4,  // 4: accounts.v1alpha1.roles.v1.RoleService.DeleteRole:input_type -> accounts.v1alpha1.roles.v1.DeleteRoleRequest
	5,  // 5: accounts.v1alpha1.roles.v1.RoleService.GetRolesByUser:input_type -> accounts.v1alpha1.roles.v1.GetRolesByUserRequest
	6,  // 6: accounts.v1alpha1.roles.v1.RoleService.GetRolesByOrgUser:input_type -> accounts.v1alpha1.roles.v1.GetRolesByOrgUserRequest
	7,  // 7: accounts.v1alpha1.roles.v1.RoleService.CreateRole:output_type -> accounts.v1alpha1.roles.v1.CreateRoleResponse
	8,  // 8: accounts.v1alpha1.roles.v1.RoleService.ListRoles:output_type -> accounts.v1alpha1.roles.v1.ListRolesResponse
	9,  // 9: accounts.v1alpha1.roles.v1.RoleService.UpdateRole:output_type -> accounts.v1alpha1.roles.v1.UpdateRoleResponse
	10, // 10: accounts.v1alpha1.roles.v1.RoleService.GetOneRole:output_type -> accounts.v1alpha1.roles.v1.GetOneRoleResponse
	11, // 11: accounts.v1alpha1.roles.v1.RoleService.DeleteRole:output_type -> accounts.v1alpha1.roles.v1.DeleteRoleResponse
	12, // 12: accounts.v1alpha1.roles.v1.RoleService.GetRolesByUser:output_type -> accounts.v1alpha1.roles.v1.GetRolesByUserResponse
	13, // 13: accounts.v1alpha1.roles.v1.RoleService.GetRolesByOrgUser:output_type -> accounts.v1alpha1.roles.v1.GetRolesByOrgUserResponse
	7,  // [7:14] is the sub-list for method output_type
	0,  // [0:7] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_accounts_v1alpha1_roles_roles_api_proto_init() }
func file_accounts_v1alpha1_roles_roles_api_proto_init() {
	if File_accounts_v1alpha1_roles_roles_api_proto != nil {
		return
	}
	file_accounts_v1alpha1_roles_roles_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_accounts_v1alpha1_roles_roles_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_accounts_v1alpha1_roles_roles_api_proto_goTypes,
		DependencyIndexes: file_accounts_v1alpha1_roles_roles_api_proto_depIdxs,
	}.Build()
	File_accounts_v1alpha1_roles_roles_api_proto = out.File
	file_accounts_v1alpha1_roles_roles_api_proto_rawDesc = nil
	file_accounts_v1alpha1_roles_roles_api_proto_goTypes = nil
	file_accounts_v1alpha1_roles_roles_api_proto_depIdxs = nil
}
