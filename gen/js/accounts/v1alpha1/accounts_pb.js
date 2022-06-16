// source: accounts/v1alpha1/accounts.proto
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

goog.exportSymbol('proto.accounts.v1alpha1.AgreeInvitationUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.AgreeInvitationUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ApiKey', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ApiKeyList', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.AssignPermissionRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CategoryPermission', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CheckUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CheckUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.City', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CountryList', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateApiKeyRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateApiKeyResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateOrganizationRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateOrganizationResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreatePermissionRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreatePermissionResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateProjectRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateProjectResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateRoleRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateRoleResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateTokenCCPRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateTokenCCPResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.CreateUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteApiKeyRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteApiKeyResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteOrganizationRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteOrganizationResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeletePermissionRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeletePermissionResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteProjectRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteProjectResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteRoleRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteRoleResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.DeleteUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.EnableOrDisableMFARequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.EnableOrDisableMFAResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetInvitationUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetInvitationUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetListUserDexRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetListUserDexResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneApiKeyRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneApiKeyResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneCountryRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneCountryResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneOrganizationRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneOrganizationResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOnePermissionRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOnePermissionResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneProjectRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneProjectResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneRoleRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneRoleResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneTokenCCPRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneTokenCCPResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneUserDexRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneUserDexResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetOneUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetRolesByOrgUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetRolesByOrgUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetRolesByUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetRolesByUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetUsersEmailFilterRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GetUsersEmailFilterResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.GroupPermission', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.InvitationResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListApiKeyRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListApiKeyResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListCountriesRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListCountriesResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListInvitationUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListInvitationUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListOrganizationRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListOrganizationResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListPermissionRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListPermissionResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListProjectPaginationRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListProjectPaginationResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListProjectRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListProjectResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListRolesRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListRolesResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListUserPaginationRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListUserPaginationResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ListUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.Log', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.LogsRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.LogsResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.MFARequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.MFAResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.Member', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.MenberProject', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.MenberRol', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.Organization', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.OrganizationInvitation', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.Permission', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.Project', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ProjectList', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.ProjectOrganization', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.Rol', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.SaveLogsRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.SaveLogsResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.SendInvitationUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.SendInvitationUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.SendVerificationEmailRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.SendVerificationEmailResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.State', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateApiKeyRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateApiKeyResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateOrganizationRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateOrganizationResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdatePermissionRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdatePermissionResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateProjectRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateProjectResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateRoleRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateRoleResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateUserRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UpdateUserResponse', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UserList', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.UsersDex', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.VerifyEmailRequest', null, global);
goog.exportSymbol('proto.accounts.v1alpha1.VerifyEmailResponse', null, global);
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
proto.accounts.v1alpha1.EnableOrDisableMFARequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.EnableOrDisableMFARequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.EnableOrDisableMFARequest.displayName = 'proto.accounts.v1alpha1.EnableOrDisableMFARequest';
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
proto.accounts.v1alpha1.EnableOrDisableMFAResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.EnableOrDisableMFAResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.EnableOrDisableMFAResponse.displayName = 'proto.accounts.v1alpha1.EnableOrDisableMFAResponse';
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
proto.accounts.v1alpha1.MFARequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.MFARequest.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.MFARequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.MFARequest.displayName = 'proto.accounts.v1alpha1.MFARequest';
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
proto.accounts.v1alpha1.MFAResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.MFAResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.MFAResponse.displayName = 'proto.accounts.v1alpha1.MFAResponse';
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
proto.accounts.v1alpha1.GetUsersEmailFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetUsersEmailFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetUsersEmailFilterRequest.displayName = 'proto.accounts.v1alpha1.GetUsersEmailFilterRequest';
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
proto.accounts.v1alpha1.GetUsersEmailFilterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetUsersEmailFilterResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetUsersEmailFilterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetUsersEmailFilterResponse.displayName = 'proto.accounts.v1alpha1.GetUsersEmailFilterResponse';
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
proto.accounts.v1alpha1.Log = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.Log, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.Log.displayName = 'proto.accounts.v1alpha1.Log';
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
proto.accounts.v1alpha1.SaveLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.SaveLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.SaveLogsRequest.displayName = 'proto.accounts.v1alpha1.SaveLogsRequest';
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
proto.accounts.v1alpha1.SaveLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.SaveLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.SaveLogsResponse.displayName = 'proto.accounts.v1alpha1.SaveLogsResponse';
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
proto.accounts.v1alpha1.LogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.LogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.LogsRequest.displayName = 'proto.accounts.v1alpha1.LogsRequest';
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
proto.accounts.v1alpha1.LogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.LogsResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.LogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.LogsResponse.displayName = 'proto.accounts.v1alpha1.LogsResponse';
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
proto.accounts.v1alpha1.GetOneTokenCCPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneTokenCCPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneTokenCCPRequest.displayName = 'proto.accounts.v1alpha1.GetOneTokenCCPRequest';
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
proto.accounts.v1alpha1.GetOneTokenCCPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneTokenCCPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneTokenCCPResponse.displayName = 'proto.accounts.v1alpha1.GetOneTokenCCPResponse';
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
proto.accounts.v1alpha1.CreateTokenCCPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateTokenCCPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateTokenCCPRequest.displayName = 'proto.accounts.v1alpha1.CreateTokenCCPRequest';
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
proto.accounts.v1alpha1.CreateTokenCCPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateTokenCCPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateTokenCCPResponse.displayName = 'proto.accounts.v1alpha1.CreateTokenCCPResponse';
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
proto.accounts.v1alpha1.GetRolesByOrgUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetRolesByOrgUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetRolesByOrgUserRequest.displayName = 'proto.accounts.v1alpha1.GetRolesByOrgUserRequest';
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
proto.accounts.v1alpha1.GetRolesByOrgUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetRolesByOrgUserResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetRolesByOrgUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetRolesByOrgUserResponse.displayName = 'proto.accounts.v1alpha1.GetRolesByOrgUserResponse';
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
proto.accounts.v1alpha1.ListInvitationUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListInvitationUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListInvitationUserRequest.displayName = 'proto.accounts.v1alpha1.ListInvitationUserRequest';
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
proto.accounts.v1alpha1.ListInvitationUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListInvitationUserResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListInvitationUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListInvitationUserResponse.displayName = 'proto.accounts.v1alpha1.ListInvitationUserResponse';
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
proto.accounts.v1alpha1.GetRolesByUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetRolesByUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetRolesByUserRequest.displayName = 'proto.accounts.v1alpha1.GetRolesByUserRequest';
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
proto.accounts.v1alpha1.GetRolesByUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetRolesByUserResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetRolesByUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetRolesByUserResponse.displayName = 'proto.accounts.v1alpha1.GetRolesByUserResponse';
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
proto.accounts.v1alpha1.CreateApiKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.CreateApiKeyRequest.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateApiKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateApiKeyRequest.displayName = 'proto.accounts.v1alpha1.CreateApiKeyRequest';
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
proto.accounts.v1alpha1.ApiKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ApiKey.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ApiKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ApiKey.displayName = 'proto.accounts.v1alpha1.ApiKey';
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
proto.accounts.v1alpha1.CreateApiKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateApiKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateApiKeyResponse.displayName = 'proto.accounts.v1alpha1.CreateApiKeyResponse';
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
proto.accounts.v1alpha1.GetOneApiKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneApiKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneApiKeyRequest.displayName = 'proto.accounts.v1alpha1.GetOneApiKeyRequest';
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
proto.accounts.v1alpha1.GetOneApiKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetOneApiKeyResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneApiKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneApiKeyResponse.displayName = 'proto.accounts.v1alpha1.GetOneApiKeyResponse';
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
proto.accounts.v1alpha1.ListApiKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListApiKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListApiKeyRequest.displayName = 'proto.accounts.v1alpha1.ListApiKeyRequest';
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
proto.accounts.v1alpha1.ApiKeyList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ApiKeyList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ApiKeyList.displayName = 'proto.accounts.v1alpha1.ApiKeyList';
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
proto.accounts.v1alpha1.ListApiKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListApiKeyResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListApiKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListApiKeyResponse.displayName = 'proto.accounts.v1alpha1.ListApiKeyResponse';
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
proto.accounts.v1alpha1.UpdateApiKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.UpdateApiKeyRequest.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateApiKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateApiKeyRequest.displayName = 'proto.accounts.v1alpha1.UpdateApiKeyRequest';
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
proto.accounts.v1alpha1.UpdateApiKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateApiKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateApiKeyResponse.displayName = 'proto.accounts.v1alpha1.UpdateApiKeyResponse';
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
proto.accounts.v1alpha1.DeleteApiKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteApiKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteApiKeyRequest.displayName = 'proto.accounts.v1alpha1.DeleteApiKeyRequest';
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
proto.accounts.v1alpha1.DeleteApiKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteApiKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteApiKeyResponse.displayName = 'proto.accounts.v1alpha1.DeleteApiKeyResponse';
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
proto.accounts.v1alpha1.City = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.City, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.City.displayName = 'proto.accounts.v1alpha1.City';
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
proto.accounts.v1alpha1.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.State.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.State.displayName = 'proto.accounts.v1alpha1.State';
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
proto.accounts.v1alpha1.CountryList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CountryList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CountryList.displayName = 'proto.accounts.v1alpha1.CountryList';
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
proto.accounts.v1alpha1.ListCountriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListCountriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListCountriesRequest.displayName = 'proto.accounts.v1alpha1.ListCountriesRequest';
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
proto.accounts.v1alpha1.ListCountriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListCountriesResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListCountriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListCountriesResponse.displayName = 'proto.accounts.v1alpha1.ListCountriesResponse';
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
proto.accounts.v1alpha1.GetOneCountryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneCountryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneCountryRequest.displayName = 'proto.accounts.v1alpha1.GetOneCountryRequest';
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
proto.accounts.v1alpha1.GetOneCountryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetOneCountryResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneCountryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneCountryResponse.displayName = 'proto.accounts.v1alpha1.GetOneCountryResponse';
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
proto.accounts.v1alpha1.SendVerificationEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.SendVerificationEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.SendVerificationEmailRequest.displayName = 'proto.accounts.v1alpha1.SendVerificationEmailRequest';
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
proto.accounts.v1alpha1.SendVerificationEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.SendVerificationEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.SendVerificationEmailResponse.displayName = 'proto.accounts.v1alpha1.SendVerificationEmailResponse';
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
proto.accounts.v1alpha1.VerifyEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.VerifyEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.VerifyEmailRequest.displayName = 'proto.accounts.v1alpha1.VerifyEmailRequest';
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
proto.accounts.v1alpha1.VerifyEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.VerifyEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.VerifyEmailResponse.displayName = 'proto.accounts.v1alpha1.VerifyEmailResponse';
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
proto.accounts.v1alpha1.CheckUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.CheckUserRequest.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.CheckUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CheckUserRequest.displayName = 'proto.accounts.v1alpha1.CheckUserRequest';
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
proto.accounts.v1alpha1.CheckUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CheckUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CheckUserResponse.displayName = 'proto.accounts.v1alpha1.CheckUserResponse';
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
proto.accounts.v1alpha1.UsersDex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UsersDex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UsersDex.displayName = 'proto.accounts.v1alpha1.UsersDex';
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
proto.accounts.v1alpha1.CreateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateUserResponse.displayName = 'proto.accounts.v1alpha1.CreateUserResponse';
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
proto.accounts.v1alpha1.UpdateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateUserResponse.displayName = 'proto.accounts.v1alpha1.UpdateUserResponse';
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
proto.accounts.v1alpha1.DeleteUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteUserResponse.displayName = 'proto.accounts.v1alpha1.DeleteUserResponse';
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
proto.accounts.v1alpha1.ListUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListUserRequest.displayName = 'proto.accounts.v1alpha1.ListUserRequest';
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
proto.accounts.v1alpha1.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.CreateUserRequest.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateUserRequest.displayName = 'proto.accounts.v1alpha1.CreateUserRequest';
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
proto.accounts.v1alpha1.UpdateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateUserRequest.displayName = 'proto.accounts.v1alpha1.UpdateUserRequest';
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
proto.accounts.v1alpha1.DeleteUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteUserRequest.displayName = 'proto.accounts.v1alpha1.DeleteUserRequest';
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
proto.accounts.v1alpha1.UserList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UserList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UserList.displayName = 'proto.accounts.v1alpha1.UserList';
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
proto.accounts.v1alpha1.GetOneUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneUserRequest.displayName = 'proto.accounts.v1alpha1.GetOneUserRequest';
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
proto.accounts.v1alpha1.GetOneUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetOneUserResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneUserResponse.displayName = 'proto.accounts.v1alpha1.GetOneUserResponse';
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
proto.accounts.v1alpha1.ListUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListUserResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListUserResponse.displayName = 'proto.accounts.v1alpha1.ListUserResponse';
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
proto.accounts.v1alpha1.ListUserPaginationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListUserPaginationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListUserPaginationRequest.displayName = 'proto.accounts.v1alpha1.ListUserPaginationRequest';
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
proto.accounts.v1alpha1.ListUserPaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListUserPaginationResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListUserPaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListUserPaginationResponse.displayName = 'proto.accounts.v1alpha1.ListUserPaginationResponse';
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
proto.accounts.v1alpha1.SendInvitationUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.SendInvitationUserRequest.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.SendInvitationUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.SendInvitationUserRequest.displayName = 'proto.accounts.v1alpha1.SendInvitationUserRequest';
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
proto.accounts.v1alpha1.SendInvitationUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.SendInvitationUserResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.SendInvitationUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.SendInvitationUserResponse.displayName = 'proto.accounts.v1alpha1.SendInvitationUserResponse';
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
proto.accounts.v1alpha1.GetInvitationUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetInvitationUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetInvitationUserRequest.displayName = 'proto.accounts.v1alpha1.GetInvitationUserRequest';
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
proto.accounts.v1alpha1.OrganizationInvitation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.OrganizationInvitation.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.OrganizationInvitation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.OrganizationInvitation.displayName = 'proto.accounts.v1alpha1.OrganizationInvitation';
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
proto.accounts.v1alpha1.GetInvitationUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetInvitationUserResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetInvitationUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetInvitationUserResponse.displayName = 'proto.accounts.v1alpha1.GetInvitationUserResponse';
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
proto.accounts.v1alpha1.AgreeInvitationUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.AgreeInvitationUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.AgreeInvitationUserRequest.displayName = 'proto.accounts.v1alpha1.AgreeInvitationUserRequest';
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
proto.accounts.v1alpha1.AgreeInvitationUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.AgreeInvitationUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.AgreeInvitationUserResponse.displayName = 'proto.accounts.v1alpha1.AgreeInvitationUserResponse';
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
proto.accounts.v1alpha1.Rol = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.Rol.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.Rol, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.Rol.displayName = 'proto.accounts.v1alpha1.Rol';
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
proto.accounts.v1alpha1.CreateRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.CreateRoleRequest.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateRoleRequest.displayName = 'proto.accounts.v1alpha1.CreateRoleRequest';
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
proto.accounts.v1alpha1.UpdateRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateRoleRequest.displayName = 'proto.accounts.v1alpha1.UpdateRoleRequest';
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
proto.accounts.v1alpha1.GetOneRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneRoleRequest.displayName = 'proto.accounts.v1alpha1.GetOneRoleRequest';
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
proto.accounts.v1alpha1.GetOneRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetOneRoleResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneRoleResponse.displayName = 'proto.accounts.v1alpha1.GetOneRoleResponse';
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
proto.accounts.v1alpha1.DeleteRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteRoleRequest.displayName = 'proto.accounts.v1alpha1.DeleteRoleRequest';
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
proto.accounts.v1alpha1.ListRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListRolesRequest.displayName = 'proto.accounts.v1alpha1.ListRolesRequest';
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
proto.accounts.v1alpha1.ListRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListRolesResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListRolesResponse.displayName = 'proto.accounts.v1alpha1.ListRolesResponse';
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
proto.accounts.v1alpha1.CreateRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateRoleResponse.displayName = 'proto.accounts.v1alpha1.CreateRoleResponse';
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
proto.accounts.v1alpha1.UpdateRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateRoleResponse.displayName = 'proto.accounts.v1alpha1.UpdateRoleResponse';
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
proto.accounts.v1alpha1.DeleteRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteRoleResponse.displayName = 'proto.accounts.v1alpha1.DeleteRoleResponse';
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
proto.accounts.v1alpha1.Project = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.Project.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.Project, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.Project.displayName = 'proto.accounts.v1alpha1.Project';
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
proto.accounts.v1alpha1.CreateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateProjectRequest.displayName = 'proto.accounts.v1alpha1.CreateProjectRequest';
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
proto.accounts.v1alpha1.GetOneProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneProjectRequest.displayName = 'proto.accounts.v1alpha1.GetOneProjectRequest';
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
proto.accounts.v1alpha1.DeleteProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteProjectRequest.displayName = 'proto.accounts.v1alpha1.DeleteProjectRequest';
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
proto.accounts.v1alpha1.ListProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListProjectRequest.displayName = 'proto.accounts.v1alpha1.ListProjectRequest';
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
proto.accounts.v1alpha1.UpdateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateProjectRequest.displayName = 'proto.accounts.v1alpha1.UpdateProjectRequest';
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
proto.accounts.v1alpha1.MenberRol = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.MenberRol, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.MenberRol.displayName = 'proto.accounts.v1alpha1.MenberRol';
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
proto.accounts.v1alpha1.ProjectList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ProjectList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ProjectList.displayName = 'proto.accounts.v1alpha1.ProjectList';
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
proto.accounts.v1alpha1.MenberProject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.MenberProject.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.MenberProject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.MenberProject.displayName = 'proto.accounts.v1alpha1.MenberProject';
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
proto.accounts.v1alpha1.CreateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateProjectResponse.displayName = 'proto.accounts.v1alpha1.CreateProjectResponse';
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
proto.accounts.v1alpha1.UpdateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateProjectResponse.displayName = 'proto.accounts.v1alpha1.UpdateProjectResponse';
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
proto.accounts.v1alpha1.DeleteProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteProjectResponse.displayName = 'proto.accounts.v1alpha1.DeleteProjectResponse';
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
proto.accounts.v1alpha1.GetOneProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetOneProjectResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneProjectResponse.displayName = 'proto.accounts.v1alpha1.GetOneProjectResponse';
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
proto.accounts.v1alpha1.ListProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListProjectResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListProjectResponse.displayName = 'proto.accounts.v1alpha1.ListProjectResponse';
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
proto.accounts.v1alpha1.ListProjectPaginationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListProjectPaginationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListProjectPaginationRequest.displayName = 'proto.accounts.v1alpha1.ListProjectPaginationRequest';
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
proto.accounts.v1alpha1.ListProjectPaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListProjectPaginationResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListProjectPaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListProjectPaginationResponse.displayName = 'proto.accounts.v1alpha1.ListProjectPaginationResponse';
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
proto.accounts.v1alpha1.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.Permission.displayName = 'proto.accounts.v1alpha1.Permission';
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
proto.accounts.v1alpha1.GroupPermission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GroupPermission.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GroupPermission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GroupPermission.displayName = 'proto.accounts.v1alpha1.GroupPermission';
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
proto.accounts.v1alpha1.CategoryPermission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.CategoryPermission.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.CategoryPermission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CategoryPermission.displayName = 'proto.accounts.v1alpha1.CategoryPermission';
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
proto.accounts.v1alpha1.ListPermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListPermissionResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListPermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListPermissionResponse.displayName = 'proto.accounts.v1alpha1.ListPermissionResponse';
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
proto.accounts.v1alpha1.AssignPermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.AssignPermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.AssignPermissionRequest.displayName = 'proto.accounts.v1alpha1.AssignPermissionRequest';
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
proto.accounts.v1alpha1.ListPermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListPermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListPermissionRequest.displayName = 'proto.accounts.v1alpha1.ListPermissionRequest';
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
proto.accounts.v1alpha1.CreatePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreatePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreatePermissionRequest.displayName = 'proto.accounts.v1alpha1.CreatePermissionRequest';
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
proto.accounts.v1alpha1.UpdatePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdatePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdatePermissionRequest.displayName = 'proto.accounts.v1alpha1.UpdatePermissionRequest';
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
proto.accounts.v1alpha1.GetOnePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOnePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOnePermissionRequest.displayName = 'proto.accounts.v1alpha1.GetOnePermissionRequest';
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
proto.accounts.v1alpha1.GetOnePermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOnePermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOnePermissionResponse.displayName = 'proto.accounts.v1alpha1.GetOnePermissionResponse';
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
proto.accounts.v1alpha1.DeletePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeletePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeletePermissionRequest.displayName = 'proto.accounts.v1alpha1.DeletePermissionRequest';
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
proto.accounts.v1alpha1.UpdatePermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdatePermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdatePermissionResponse.displayName = 'proto.accounts.v1alpha1.UpdatePermissionResponse';
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
proto.accounts.v1alpha1.DeletePermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeletePermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeletePermissionResponse.displayName = 'proto.accounts.v1alpha1.DeletePermissionResponse';
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
proto.accounts.v1alpha1.CreatePermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreatePermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreatePermissionResponse.displayName = 'proto.accounts.v1alpha1.CreatePermissionResponse';
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
proto.accounts.v1alpha1.Member = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.Member.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.Member, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.Member.displayName = 'proto.accounts.v1alpha1.Member';
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
proto.accounts.v1alpha1.ProjectOrganization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ProjectOrganization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ProjectOrganization.displayName = 'proto.accounts.v1alpha1.ProjectOrganization';
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
proto.accounts.v1alpha1.Organization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.Organization.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.Organization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.Organization.displayName = 'proto.accounts.v1alpha1.Organization';
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
proto.accounts.v1alpha1.CreateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateOrganizationRequest.displayName = 'proto.accounts.v1alpha1.CreateOrganizationRequest';
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
proto.accounts.v1alpha1.ListOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.ListOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListOrganizationRequest.displayName = 'proto.accounts.v1alpha1.ListOrganizationRequest';
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
proto.accounts.v1alpha1.GetOneOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneOrganizationRequest.displayName = 'proto.accounts.v1alpha1.GetOneOrganizationRequest';
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
proto.accounts.v1alpha1.UpdateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateOrganizationRequest.displayName = 'proto.accounts.v1alpha1.UpdateOrganizationRequest';
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
proto.accounts.v1alpha1.DeleteOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteOrganizationRequest.displayName = 'proto.accounts.v1alpha1.DeleteOrganizationRequest';
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
proto.accounts.v1alpha1.GetOneOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetOneOrganizationResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneOrganizationResponse.displayName = 'proto.accounts.v1alpha1.GetOneOrganizationResponse';
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
proto.accounts.v1alpha1.ListOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.ListOrganizationResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.ListOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.ListOrganizationResponse.displayName = 'proto.accounts.v1alpha1.ListOrganizationResponse';
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
proto.accounts.v1alpha1.CreateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.CreateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.CreateOrganizationResponse.displayName = 'proto.accounts.v1alpha1.CreateOrganizationResponse';
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
proto.accounts.v1alpha1.UpdateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.UpdateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.UpdateOrganizationResponse.displayName = 'proto.accounts.v1alpha1.UpdateOrganizationResponse';
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
proto.accounts.v1alpha1.DeleteOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.DeleteOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.DeleteOrganizationResponse.displayName = 'proto.accounts.v1alpha1.DeleteOrganizationResponse';
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
proto.accounts.v1alpha1.GetListUserDexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetListUserDexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetListUserDexRequest.displayName = 'proto.accounts.v1alpha1.GetListUserDexRequest';
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
proto.accounts.v1alpha1.GetListUserDexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetListUserDexResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetListUserDexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetListUserDexResponse.displayName = 'proto.accounts.v1alpha1.GetListUserDexResponse';
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
proto.accounts.v1alpha1.GetOneUserDexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneUserDexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneUserDexRequest.displayName = 'proto.accounts.v1alpha1.GetOneUserDexRequest';
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
proto.accounts.v1alpha1.GetOneUserDexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accounts.v1alpha1.GetOneUserDexResponse.repeatedFields_, null);
};
goog.inherits(proto.accounts.v1alpha1.GetOneUserDexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.v1alpha1.GetOneUserDexResponse.displayName = 'proto.accounts.v1alpha1.GetOneUserDexResponse';
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
proto.accounts.v1alpha1.EnableOrDisableMFARequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.EnableOrDisableMFARequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.EnableOrDisableMFARequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.EnableOrDisableMFARequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.EnableOrDisableMFARequest}
 */
proto.accounts.v1alpha1.EnableOrDisableMFARequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.EnableOrDisableMFARequest;
  return proto.accounts.v1alpha1.EnableOrDisableMFARequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.EnableOrDisableMFARequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.EnableOrDisableMFARequest}
 */
proto.accounts.v1alpha1.EnableOrDisableMFARequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.accounts.v1alpha1.EnableOrDisableMFARequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.EnableOrDisableMFARequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.EnableOrDisableMFARequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.EnableOrDisableMFARequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.EnableOrDisableMFARequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.EnableOrDisableMFARequest} returns this
 */
proto.accounts.v1alpha1.EnableOrDisableMFARequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.accounts.v1alpha1.EnableOrDisableMFAResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.EnableOrDisableMFAResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.EnableOrDisableMFAResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.EnableOrDisableMFAResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.EnableOrDisableMFAResponse}
 */
proto.accounts.v1alpha1.EnableOrDisableMFAResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.EnableOrDisableMFAResponse;
  return proto.accounts.v1alpha1.EnableOrDisableMFAResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.EnableOrDisableMFAResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.EnableOrDisableMFAResponse}
 */
proto.accounts.v1alpha1.EnableOrDisableMFAResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
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
proto.accounts.v1alpha1.EnableOrDisableMFAResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.EnableOrDisableMFAResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.EnableOrDisableMFAResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.EnableOrDisableMFAResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.EnableOrDisableMFAResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.EnableOrDisableMFAResponse} returns this
 */
proto.accounts.v1alpha1.EnableOrDisableMFAResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.MFARequest.repeatedFields_ = [3];



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
proto.accounts.v1alpha1.MFARequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.MFARequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.MFARequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.MFARequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    numbersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.accounts.v1alpha1.MFARequest}
 */
proto.accounts.v1alpha1.MFARequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.MFARequest;
  return proto.accounts.v1alpha1.MFARequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.MFARequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.MFARequest}
 */
proto.accounts.v1alpha1.MFARequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNumbers(values[i]);
      }
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
proto.accounts.v1alpha1.MFARequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.MFARequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.MFARequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.MFARequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumbersList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.MFARequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MFARequest} returns this
 */
proto.accounts.v1alpha1.MFARequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated int32 numbers = 3;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.MFARequest.prototype.getNumbersList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.MFARequest} returns this
 */
proto.accounts.v1alpha1.MFARequest.prototype.setNumbersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.MFARequest} returns this
 */
proto.accounts.v1alpha1.MFARequest.prototype.addNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.MFARequest} returns this
 */
proto.accounts.v1alpha1.MFARequest.prototype.clearNumbersList = function() {
  return this.setNumbersList([]);
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
proto.accounts.v1alpha1.MFAResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.MFAResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.MFAResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.MFAResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenCcp: jspb.Message.getFieldWithDefault(msg, 1, ""),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.accounts.v1alpha1.MFAResponse}
 */
proto.accounts.v1alpha1.MFAResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.MFAResponse;
  return proto.accounts.v1alpha1.MFAResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.MFAResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.MFAResponse}
 */
proto.accounts.v1alpha1.MFAResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenCcp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.MFAResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.MFAResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.MFAResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.MFAResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenCcp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string token_ccp = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.MFAResponse.prototype.getTokenCcp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MFAResponse} returns this
 */
proto.accounts.v1alpha1.MFAResponse.prototype.setTokenCcp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.MFAResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MFAResponse} returns this
 */
proto.accounts.v1alpha1.MFAResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.MFAResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MFAResponse} returns this
 */
proto.accounts.v1alpha1.MFAResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.accounts.v1alpha1.GetUsersEmailFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetUsersEmailFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetUsersEmailFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetUsersEmailFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.GetUsersEmailFilterRequest}
 */
proto.accounts.v1alpha1.GetUsersEmailFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetUsersEmailFilterRequest;
  return proto.accounts.v1alpha1.GetUsersEmailFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetUsersEmailFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetUsersEmailFilterRequest}
 */
proto.accounts.v1alpha1.GetUsersEmailFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.accounts.v1alpha1.GetUsersEmailFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetUsersEmailFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetUsersEmailFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetUsersEmailFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.GetUsersEmailFilterRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetUsersEmailFilterRequest} returns this
 */
proto.accounts.v1alpha1.GetUsersEmailFilterRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetUsersEmailFilterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetUsersEmailFilterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.accounts.v1alpha1.UserList.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.GetUsersEmailFilterResponse}
 */
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetUsersEmailFilterResponse;
  return proto.accounts.v1alpha1.GetUsersEmailFilterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetUsersEmailFilterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetUsersEmailFilterResponse}
 */
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.UserList;
      reader.readMessage(value,proto.accounts.v1alpha1.UserList.deserializeBinaryFromReader);
      msg.addUsers(value);
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
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetUsersEmailFilterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetUsersEmailFilterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.UserList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UserList users = 1;
 * @return {!Array<!proto.accounts.v1alpha1.UserList>}
 */
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.UserList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.UserList, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.UserList>} value
 * @return {!proto.accounts.v1alpha1.GetUsersEmailFilterResponse} returns this
*/
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.UserList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.UserList}
 */
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.UserList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetUsersEmailFilterResponse} returns this
 */
proto.accounts.v1alpha1.GetUsersEmailFilterResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
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
proto.accounts.v1alpha1.Log.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.Log.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.Log} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Log.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    systems: jspb.Message.getFieldWithDefault(msg, 2, ""),
    navegator: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.accounts.v1alpha1.Log}
 */
proto.accounts.v1alpha1.Log.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.Log;
  return proto.accounts.v1alpha1.Log.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.Log} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.Log}
 */
proto.accounts.v1alpha1.Log.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystems(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavegator(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
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
proto.accounts.v1alpha1.Log.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.Log.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.Log} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Log.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSystems();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNavegator();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.Log.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Log} returns this
 */
proto.accounts.v1alpha1.Log.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string systems = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.Log.prototype.getSystems = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Log} returns this
 */
proto.accounts.v1alpha1.Log.prototype.setSystems = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string navegator = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.Log.prototype.getNavegator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Log} returns this
 */
proto.accounts.v1alpha1.Log.prototype.setNavegator = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ip = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.Log.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Log} returns this
 */
proto.accounts.v1alpha1.Log.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.accounts.v1alpha1.SaveLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.SaveLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.SaveLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SaveLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    log: (f = msg.getLog()) && proto.accounts.v1alpha1.Log.toObject(includeInstance, f)
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
 * @return {!proto.accounts.v1alpha1.SaveLogsRequest}
 */
proto.accounts.v1alpha1.SaveLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.SaveLogsRequest;
  return proto.accounts.v1alpha1.SaveLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.SaveLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.SaveLogsRequest}
 */
proto.accounts.v1alpha1.SaveLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.Log;
      reader.readMessage(value,proto.accounts.v1alpha1.Log.deserializeBinaryFromReader);
      msg.setLog(value);
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
proto.accounts.v1alpha1.SaveLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.SaveLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.SaveLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SaveLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.accounts.v1alpha1.Log.serializeBinaryToWriter
    );
  }
};


/**
 * optional Log log = 1;
 * @return {?proto.accounts.v1alpha1.Log}
 */
proto.accounts.v1alpha1.SaveLogsRequest.prototype.getLog = function() {
  return /** @type{?proto.accounts.v1alpha1.Log} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.Log, 1));
};


/**
 * @param {?proto.accounts.v1alpha1.Log|undefined} value
 * @return {!proto.accounts.v1alpha1.SaveLogsRequest} returns this
*/
proto.accounts.v1alpha1.SaveLogsRequest.prototype.setLog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.SaveLogsRequest} returns this
 */
proto.accounts.v1alpha1.SaveLogsRequest.prototype.clearLog = function() {
  return this.setLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.SaveLogsRequest.prototype.hasLog = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.accounts.v1alpha1.SaveLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.SaveLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.SaveLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SaveLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.SaveLogsResponse}
 */
proto.accounts.v1alpha1.SaveLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.SaveLogsResponse;
  return proto.accounts.v1alpha1.SaveLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.SaveLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.SaveLogsResponse}
 */
proto.accounts.v1alpha1.SaveLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
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
proto.accounts.v1alpha1.SaveLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.SaveLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.SaveLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SaveLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.SaveLogsResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SaveLogsResponse} returns this
 */
proto.accounts.v1alpha1.SaveLogsResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.accounts.v1alpha1.LogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.LogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.LogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.LogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.LogsRequest}
 */
proto.accounts.v1alpha1.LogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.LogsRequest;
  return proto.accounts.v1alpha1.LogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.LogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.LogsRequest}
 */
proto.accounts.v1alpha1.LogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.accounts.v1alpha1.LogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.LogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.LogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.LogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.LogsRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.LogsRequest} returns this
 */
proto.accounts.v1alpha1.LogsRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.LogsResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.LogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.LogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.LogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.LogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto.accounts.v1alpha1.Log.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.LogsResponse}
 */
proto.accounts.v1alpha1.LogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.LogsResponse;
  return proto.accounts.v1alpha1.LogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.LogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.LogsResponse}
 */
proto.accounts.v1alpha1.LogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.Log;
      reader.readMessage(value,proto.accounts.v1alpha1.Log.deserializeBinaryFromReader);
      msg.addLogs(value);
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
proto.accounts.v1alpha1.LogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.LogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.LogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.LogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.Log.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Log logs = 1;
 * @return {!Array<!proto.accounts.v1alpha1.Log>}
 */
proto.accounts.v1alpha1.LogsResponse.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Log>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Log, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Log>} value
 * @return {!proto.accounts.v1alpha1.LogsResponse} returns this
*/
proto.accounts.v1alpha1.LogsResponse.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Log=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Log}
 */
proto.accounts.v1alpha1.LogsResponse.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.Log, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.LogsResponse} returns this
 */
proto.accounts.v1alpha1.LogsResponse.prototype.clearLogsList = function() {
  return this.setLogsList([]);
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
proto.accounts.v1alpha1.GetOneTokenCCPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneTokenCCPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneTokenCCPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneTokenCCPRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPRequest}
 */
proto.accounts.v1alpha1.GetOneTokenCCPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneTokenCCPRequest;
  return proto.accounts.v1alpha1.GetOneTokenCCPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneTokenCCPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPRequest}
 */
proto.accounts.v1alpha1.GetOneTokenCCPRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.accounts.v1alpha1.GetOneTokenCCPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneTokenCCPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneTokenCCPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneTokenCCPRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneTokenCCPRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPRequest} returns this
 */
proto.accounts.v1alpha1.GetOneTokenCCPRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneTokenCCPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneTokenCCPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userIdDex: jspb.Message.getFieldWithDefault(msg, 4, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPResponse}
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneTokenCCPResponse;
  return proto.accounts.v1alpha1.GetOneTokenCCPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneTokenCCPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPResponse}
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserIdDex(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
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
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneTokenCCPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneTokenCCPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserIdDex();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional uint32 user_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string user_id_dex = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.getUserIdDex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.setUserIdDex = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string first_name = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool email_verified = 6;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.GetOneTokenCCPResponse.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.accounts.v1alpha1.CreateTokenCCPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateTokenCCPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateTokenCCPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateTokenCCPRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenDex: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPRequest}
 */
proto.accounts.v1alpha1.CreateTokenCCPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateTokenCCPRequest;
  return proto.accounts.v1alpha1.CreateTokenCCPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateTokenCCPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPRequest}
 */
proto.accounts.v1alpha1.CreateTokenCCPRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenDex(value);
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
proto.accounts.v1alpha1.CreateTokenCCPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateTokenCCPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateTokenCCPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateTokenCCPRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenDex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token_dex = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateTokenCCPRequest.prototype.getTokenDex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPRequest} returns this
 */
proto.accounts.v1alpha1.CreateTokenCCPRequest.prototype.setTokenDex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateTokenCCPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateTokenCCPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenCcp: jspb.Message.getFieldWithDefault(msg, 1, ""),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timeExpirationMfa: jspb.Message.getFieldWithDefault(msg, 5, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPResponse}
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateTokenCCPResponse;
  return proto.accounts.v1alpha1.CreateTokenCCPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateTokenCCPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPResponse}
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenCcp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeExpirationMfa(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateTokenCCPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateTokenCCPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenCcp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimeExpirationMfa();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string token_ccp = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.getTokenCcp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.setTokenCcp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string error = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 time_expiration_mfa = 5;
 * @return {number}
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.getTimeExpirationMfa = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.setTimeExpirationMfa = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string user_id = 6;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateTokenCCPResponse} returns this
 */
proto.accounts.v1alpha1.CreateTokenCCPResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetRolesByOrgUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetRolesByOrgUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserRequest}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetRolesByOrgUserRequest;
  return proto.accounts.v1alpha1.GetRolesByOrgUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetRolesByOrgUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserRequest}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
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
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetRolesByOrgUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetRolesByOrgUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserRequest} returns this
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 project_id = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.prototype.getProjectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserRequest} returns this
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 user_id = 3;
 * @return {number}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserRequest} returns this
 */
proto.accounts.v1alpha1.GetRolesByOrgUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.repeatedFields_ = [1,2];



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
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetRolesByOrgUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetRolesByOrgUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationList: jspb.Message.toObjectList(msg.getOrganizationList(),
    proto.accounts.v1alpha1.Organization.toObject, includeInstance),
    projectList: jspb.Message.toObjectList(msg.getProjectList(),
    proto.accounts.v1alpha1.Project.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserResponse}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetRolesByOrgUserResponse;
  return proto.accounts.v1alpha1.GetRolesByOrgUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetRolesByOrgUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserResponse}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.Organization;
      reader.readMessage(value,proto.accounts.v1alpha1.Organization.deserializeBinaryFromReader);
      msg.addOrganization(value);
      break;
    case 2:
      var value = new proto.accounts.v1alpha1.Project;
      reader.readMessage(value,proto.accounts.v1alpha1.Project.deserializeBinaryFromReader);
      msg.addProject(value);
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
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetRolesByOrgUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetRolesByOrgUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.Organization.serializeBinaryToWriter
    );
  }
  f = message.getProjectList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.accounts.v1alpha1.Project.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Organization organization = 1;
 * @return {!Array<!proto.accounts.v1alpha1.Organization>}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.getOrganizationList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Organization, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Organization>} value
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserResponse} returns this
*/
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.setOrganizationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Organization}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.addOrganization = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserResponse} returns this
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.clearOrganizationList = function() {
  return this.setOrganizationList([]);
};


/**
 * repeated Project project = 2;
 * @return {!Array<!proto.accounts.v1alpha1.Project>}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.getProjectList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Project, 2));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Project>} value
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserResponse} returns this
*/
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.setProjectList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.addProject = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.accounts.v1alpha1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetRolesByOrgUserResponse} returns this
 */
proto.accounts.v1alpha1.GetRolesByOrgUserResponse.prototype.clearProjectList = function() {
  return this.setProjectList([]);
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
proto.accounts.v1alpha1.ListInvitationUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListInvitationUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListInvitationUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListInvitationUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.ListInvitationUserRequest}
 */
proto.accounts.v1alpha1.ListInvitationUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListInvitationUserRequest;
  return proto.accounts.v1alpha1.ListInvitationUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListInvitationUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListInvitationUserRequest}
 */
proto.accounts.v1alpha1.ListInvitationUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.accounts.v1alpha1.ListInvitationUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListInvitationUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListInvitationUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListInvitationUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.ListInvitationUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ListInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.ListInvitationUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListInvitationUserResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.ListInvitationUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListInvitationUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListInvitationUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListInvitationUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationUserList: jspb.Message.toObjectList(msg.getInvitationUserList(),
    proto.accounts.v1alpha1.GetInvitationUserResponse.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ListInvitationUserResponse}
 */
proto.accounts.v1alpha1.ListInvitationUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListInvitationUserResponse;
  return proto.accounts.v1alpha1.ListInvitationUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListInvitationUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListInvitationUserResponse}
 */
proto.accounts.v1alpha1.ListInvitationUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.GetInvitationUserResponse;
      reader.readMessage(value,proto.accounts.v1alpha1.GetInvitationUserResponse.deserializeBinaryFromReader);
      msg.addInvitationUser(value);
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
proto.accounts.v1alpha1.ListInvitationUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListInvitationUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListInvitationUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListInvitationUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationUserList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.GetInvitationUserResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GetInvitationUserResponse invitation_user = 1;
 * @return {!Array<!proto.accounts.v1alpha1.GetInvitationUserResponse>}
 */
proto.accounts.v1alpha1.ListInvitationUserResponse.prototype.getInvitationUserList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.GetInvitationUserResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.GetInvitationUserResponse, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.GetInvitationUserResponse>} value
 * @return {!proto.accounts.v1alpha1.ListInvitationUserResponse} returns this
*/
proto.accounts.v1alpha1.ListInvitationUserResponse.prototype.setInvitationUserList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.GetInvitationUserResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse}
 */
proto.accounts.v1alpha1.ListInvitationUserResponse.prototype.addInvitationUser = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.GetInvitationUserResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.ListInvitationUserResponse.prototype.clearInvitationUserList = function() {
  return this.setInvitationUserList([]);
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
proto.accounts.v1alpha1.GetRolesByUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetRolesByUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetRolesByUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetRolesByUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.GetRolesByUserRequest}
 */
proto.accounts.v1alpha1.GetRolesByUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetRolesByUserRequest;
  return proto.accounts.v1alpha1.GetRolesByUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetRolesByUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetRolesByUserRequest}
 */
proto.accounts.v1alpha1.GetRolesByUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.accounts.v1alpha1.GetRolesByUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetRolesByUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetRolesByUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetRolesByUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.GetRolesByUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetRolesByUserRequest} returns this
 */
proto.accounts.v1alpha1.GetRolesByUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.repeatedFields_ = [1,2];



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
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetRolesByUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetRolesByUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationList: jspb.Message.toObjectList(msg.getOrganizationList(),
    proto.accounts.v1alpha1.Organization.toObject, includeInstance),
    projectList: jspb.Message.toObjectList(msg.getProjectList(),
    proto.accounts.v1alpha1.Project.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.GetRolesByUserResponse}
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetRolesByUserResponse;
  return proto.accounts.v1alpha1.GetRolesByUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetRolesByUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetRolesByUserResponse}
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.Organization;
      reader.readMessage(value,proto.accounts.v1alpha1.Organization.deserializeBinaryFromReader);
      msg.addOrganization(value);
      break;
    case 2:
      var value = new proto.accounts.v1alpha1.Project;
      reader.readMessage(value,proto.accounts.v1alpha1.Project.deserializeBinaryFromReader);
      msg.addProject(value);
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
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetRolesByUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetRolesByUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.Organization.serializeBinaryToWriter
    );
  }
  f = message.getProjectList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.accounts.v1alpha1.Project.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Organization organization = 1;
 * @return {!Array<!proto.accounts.v1alpha1.Organization>}
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.getOrganizationList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Organization, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Organization>} value
 * @return {!proto.accounts.v1alpha1.GetRolesByUserResponse} returns this
*/
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.setOrganizationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Organization}
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.addOrganization = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetRolesByUserResponse} returns this
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.clearOrganizationList = function() {
  return this.setOrganizationList([]);
};


/**
 * repeated Project project = 2;
 * @return {!Array<!proto.accounts.v1alpha1.Project>}
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.getProjectList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Project, 2));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Project>} value
 * @return {!proto.accounts.v1alpha1.GetRolesByUserResponse} returns this
*/
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.setProjectList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.addProject = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.accounts.v1alpha1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetRolesByUserResponse} returns this
 */
proto.accounts.v1alpha1.GetRolesByUserResponse.prototype.clearProjectList = function() {
  return this.setProjectList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.repeatedFields_ = [3,4];



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
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateApiKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateApiKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rolesIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    permissionsIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest}
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateApiKeyRequest;
  return proto.accounts.v1alpha1.CreateApiKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateApiKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest}
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserId(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRolesIds(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPermissionsIds(values[i]);
      }
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
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateApiKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateApiKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRolesIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
  f = message.getPermissionsIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated uint32 roles_ids = 3;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.getRolesIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.setRolesIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.addRolesIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.clearRolesIdsList = function() {
  return this.setRolesIdsList([]);
};


/**
 * repeated uint32 permissions_ids = 4;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.getPermissionsIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.setPermissionsIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.addPermissionsIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.CreateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyRequest.prototype.clearPermissionsIdsList = function() {
  return this.setPermissionsIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ApiKey.repeatedFields_ = [4,5];



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
proto.accounts.v1alpha1.ApiKey.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ApiKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ApiKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ApiKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rolList: jspb.Message.toObjectList(msg.getRolList(),
    proto.accounts.v1alpha1.Rol.toObject, includeInstance),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.accounts.v1alpha1.Permission.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ApiKey}
 */
proto.accounts.v1alpha1.ApiKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ApiKey;
  return proto.accounts.v1alpha1.ApiKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ApiKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ApiKey}
 */
proto.accounts.v1alpha1.ApiKey.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = new proto.accounts.v1alpha1.Rol;
      reader.readMessage(value,proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader);
      msg.addRol(value);
      break;
    case 5:
      var value = new proto.accounts.v1alpha1.Permission;
      reader.readMessage(value,proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.accounts.v1alpha1.ApiKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ApiKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ApiKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ApiKey.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRolList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.accounts.v1alpha1.Rol.serializeBinaryToWriter
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.accounts.v1alpha1.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.ApiKey.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ApiKey} returns this
 */
proto.accounts.v1alpha1.ApiKey.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.ApiKey.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ApiKey} returns this
 */
proto.accounts.v1alpha1.ApiKey.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.ApiKey.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ApiKey} returns this
 */
proto.accounts.v1alpha1.ApiKey.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Rol rol = 4;
 * @return {!Array<!proto.accounts.v1alpha1.Rol>}
 */
proto.accounts.v1alpha1.ApiKey.prototype.getRolList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Rol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Rol, 4));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Rol>} value
 * @return {!proto.accounts.v1alpha1.ApiKey} returns this
*/
proto.accounts.v1alpha1.ApiKey.prototype.setRolList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Rol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.ApiKey.prototype.addRol = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.accounts.v1alpha1.Rol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ApiKey} returns this
 */
proto.accounts.v1alpha1.ApiKey.prototype.clearRolList = function() {
  return this.setRolList([]);
};


/**
 * repeated Permission permissions = 5;
 * @return {!Array<!proto.accounts.v1alpha1.Permission>}
 */
proto.accounts.v1alpha1.ApiKey.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Permission, 5));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Permission>} value
 * @return {!proto.accounts.v1alpha1.ApiKey} returns this
*/
proto.accounts.v1alpha1.ApiKey.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.ApiKey.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.accounts.v1alpha1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ApiKey} returns this
 */
proto.accounts.v1alpha1.ApiKey.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
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
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateApiKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateApiKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accessPointId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    error: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.accounts.v1alpha1.CreateApiKeyResponse}
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateApiKeyResponse;
  return proto.accounts.v1alpha1.CreateApiKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateApiKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateApiKeyResponse}
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccessPointId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateApiKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateApiKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccessPointId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string api_key = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 access_point_id = 4;
 * @return {number}
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.getAccessPointId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CreateApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.setAccessPointId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string error = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.CreateApiKeyResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.accounts.v1alpha1.GetOneApiKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneApiKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneApiKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneApiKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    valueKey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyRequest}
 */
proto.accounts.v1alpha1.GetOneApiKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneApiKeyRequest;
  return proto.accounts.v1alpha1.GetOneApiKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneApiKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyRequest}
 */
proto.accounts.v1alpha1.GetOneApiKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValueKey(value);
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
proto.accounts.v1alpha1.GetOneApiKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneApiKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneApiKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneApiKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getValueKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneApiKeyRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.GetOneApiKeyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string value_key = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneApiKeyRequest.prototype.getValueKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.GetOneApiKeyRequest.prototype.setValueKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.repeatedFields_ = [5,6];



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
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneApiKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneApiKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    apiKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.accounts.v1alpha1.Rol.toObject, includeInstance),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.accounts.v1alpha1.Permission.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneApiKeyResponse;
  return proto.accounts.v1alpha1.GetOneApiKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneApiKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 5:
      var value = new proto.accounts.v1alpha1.Rol;
      reader.readMessage(value,proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    case 6:
      var value = new proto.accounts.v1alpha1.Permission;
      reader.readMessage(value,proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneApiKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneApiKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.accounts.v1alpha1.Rol.serializeBinaryToWriter
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.accounts.v1alpha1.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string api_key = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string user_id = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Rol roles = 5;
 * @return {!Array<!proto.accounts.v1alpha1.Rol>}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Rol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Rol, 5));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Rol>} value
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse} returns this
*/
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Rol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.accounts.v1alpha1.Rol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * repeated Permission permissions = 6;
 * @return {!Array<!proto.accounts.v1alpha1.Permission>}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Permission, 6));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Permission>} value
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse} returns this
*/
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.accounts.v1alpha1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.GetOneApiKeyResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
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
proto.accounts.v1alpha1.ListApiKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListApiKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListApiKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListApiKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.ListApiKeyRequest}
 */
proto.accounts.v1alpha1.ListApiKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListApiKeyRequest;
  return proto.accounts.v1alpha1.ListApiKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListApiKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListApiKeyRequest}
 */
proto.accounts.v1alpha1.ListApiKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.accounts.v1alpha1.ListApiKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListApiKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListApiKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListApiKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.ListApiKeyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ListApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.ListApiKeyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.accounts.v1alpha1.ApiKeyList.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ApiKeyList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ApiKeyList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ApiKeyList.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    apiKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.accounts.v1alpha1.ApiKeyList}
 */
proto.accounts.v1alpha1.ApiKeyList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ApiKeyList;
  return proto.accounts.v1alpha1.ApiKeyList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ApiKeyList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ApiKeyList}
 */
proto.accounts.v1alpha1.ApiKeyList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.accounts.v1alpha1.ApiKeyList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ApiKeyList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ApiKeyList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ApiKeyList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.ApiKeyList.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ApiKeyList} returns this
 */
proto.accounts.v1alpha1.ApiKeyList.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string api_key = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.ApiKeyList.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ApiKeyList} returns this
 */
proto.accounts.v1alpha1.ApiKeyList.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.ApiKeyList.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ApiKeyList} returns this
 */
proto.accounts.v1alpha1.ApiKeyList.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string user_id = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.ApiKeyList.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ApiKeyList} returns this
 */
proto.accounts.v1alpha1.ApiKeyList.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListApiKeyResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.ListApiKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListApiKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListApiKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListApiKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiKeysList: jspb.Message.toObjectList(msg.getApiKeysList(),
    proto.accounts.v1alpha1.ApiKeyList.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ListApiKeyResponse}
 */
proto.accounts.v1alpha1.ListApiKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListApiKeyResponse;
  return proto.accounts.v1alpha1.ListApiKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListApiKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListApiKeyResponse}
 */
proto.accounts.v1alpha1.ListApiKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.ApiKeyList;
      reader.readMessage(value,proto.accounts.v1alpha1.ApiKeyList.deserializeBinaryFromReader);
      msg.addApiKeys(value);
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
proto.accounts.v1alpha1.ListApiKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListApiKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListApiKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListApiKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.ApiKeyList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ApiKeyList api_keys = 1;
 * @return {!Array<!proto.accounts.v1alpha1.ApiKeyList>}
 */
proto.accounts.v1alpha1.ListApiKeyResponse.prototype.getApiKeysList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.ApiKeyList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.ApiKeyList, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.ApiKeyList>} value
 * @return {!proto.accounts.v1alpha1.ListApiKeyResponse} returns this
*/
proto.accounts.v1alpha1.ListApiKeyResponse.prototype.setApiKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.ApiKeyList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.ApiKeyList}
 */
proto.accounts.v1alpha1.ListApiKeyResponse.prototype.addApiKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.ApiKeyList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.ListApiKeyResponse.prototype.clearApiKeysList = function() {
  return this.setApiKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.repeatedFields_ = [3,4];



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
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateApiKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateApiKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rolesIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    permissionsIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest}
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateApiKeyRequest;
  return proto.accounts.v1alpha1.UpdateApiKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateApiKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest}
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRolesIds(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPermissionsIds(values[i]);
      }
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
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
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateApiKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateApiKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getRolesIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
  f = message.getPermissionsIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      4,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated uint32 roles_ids = 3;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.getRolesIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.setRolesIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.addRolesIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.clearRolesIdsList = function() {
  return this.setRolesIdsList([]);
};


/**
 * repeated uint32 permissions_ids = 4;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.getPermissionsIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.setPermissionsIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.addPermissionsIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.clearPermissionsIdsList = function() {
  return this.setPermissionsIdsList([]);
};


/**
 * optional bool is_active = 5;
 * @return {boolean}
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyRequest.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.accounts.v1alpha1.UpdateApiKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateApiKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateApiKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyResponse}
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateApiKeyResponse;
  return proto.accounts.v1alpha1.UpdateApiKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateApiKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyResponse}
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.UpdateApiKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateApiKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateApiKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string api_key = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.UpdateApiKeyResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.accounts.v1alpha1.DeleteApiKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteApiKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteApiKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteApiKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.DeleteApiKeyRequest}
 */
proto.accounts.v1alpha1.DeleteApiKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteApiKeyRequest;
  return proto.accounts.v1alpha1.DeleteApiKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteApiKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteApiKeyRequest}
 */
proto.accounts.v1alpha1.DeleteApiKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
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
proto.accounts.v1alpha1.DeleteApiKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteApiKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteApiKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteApiKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.DeleteApiKeyRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.DeleteApiKeyRequest} returns this
 */
proto.accounts.v1alpha1.DeleteApiKeyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.accounts.v1alpha1.DeleteApiKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteApiKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteApiKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.accounts.v1alpha1.DeleteApiKeyResponse}
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteApiKeyResponse;
  return proto.accounts.v1alpha1.DeleteApiKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteApiKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteApiKeyResponse}
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.DeleteApiKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteApiKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteApiKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string api_key = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteApiKeyResponse} returns this
 */
proto.accounts.v1alpha1.DeleteApiKeyResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.accounts.v1alpha1.City.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.City.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.City} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.City.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    latitude: jspb.Message.getFieldWithDefault(msg, 3, ""),
    longitude: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.accounts.v1alpha1.City}
 */
proto.accounts.v1alpha1.City.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.City;
  return proto.accounts.v1alpha1.City.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.City} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.City}
 */
proto.accounts.v1alpha1.City.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLatitude(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongitude(value);
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
proto.accounts.v1alpha1.City.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.City.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.City} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.City.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getLatitude();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLongitude();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.City.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.City} returns this
 */
proto.accounts.v1alpha1.City.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.City.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.City} returns this
 */
proto.accounts.v1alpha1.City.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string latitude = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.City.prototype.getLatitude = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.City} returns this
 */
proto.accounts.v1alpha1.City.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string longitude = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.City.prototype.getLongitude = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.City} returns this
 */
proto.accounts.v1alpha1.City.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.State.repeatedFields_ = [3];



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
proto.accounts.v1alpha1.State.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.State.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    citiesList: jspb.Message.toObjectList(msg.getCitiesList(),
    proto.accounts.v1alpha1.City.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.State}
 */
proto.accounts.v1alpha1.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.State;
  return proto.accounts.v1alpha1.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.State}
 */
proto.accounts.v1alpha1.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.accounts.v1alpha1.City;
      reader.readMessage(value,proto.accounts.v1alpha1.City.deserializeBinaryFromReader);
      msg.addCities(value);
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
proto.accounts.v1alpha1.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getCitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.accounts.v1alpha1.City.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.State.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.State} returns this
 */
proto.accounts.v1alpha1.State.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.State.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.State} returns this
 */
proto.accounts.v1alpha1.State.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated City cities = 3;
 * @return {!Array<!proto.accounts.v1alpha1.City>}
 */
proto.accounts.v1alpha1.State.prototype.getCitiesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.City>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.City, 3));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.City>} value
 * @return {!proto.accounts.v1alpha1.State} returns this
*/
proto.accounts.v1alpha1.State.prototype.setCitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.accounts.v1alpha1.City=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.City}
 */
proto.accounts.v1alpha1.State.prototype.addCities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.accounts.v1alpha1.City, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.State} returns this
 */
proto.accounts.v1alpha1.State.prototype.clearCitiesList = function() {
  return this.setCitiesList([]);
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
proto.accounts.v1alpha1.CountryList.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CountryList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CountryList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CountryList.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    code: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phoneCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    emoji: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.accounts.v1alpha1.CountryList}
 */
proto.accounts.v1alpha1.CountryList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CountryList;
  return proto.accounts.v1alpha1.CountryList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CountryList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CountryList}
 */
proto.accounts.v1alpha1.CountryList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmoji(value);
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
proto.accounts.v1alpha1.CountryList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CountryList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CountryList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CountryList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhoneCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmoji();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.CountryList.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CountryList} returns this
 */
proto.accounts.v1alpha1.CountryList.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CountryList.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CountryList} returns this
 */
proto.accounts.v1alpha1.CountryList.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string code = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.CountryList.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CountryList} returns this
 */
proto.accounts.v1alpha1.CountryList.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phone_code = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.CountryList.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CountryList} returns this
 */
proto.accounts.v1alpha1.CountryList.prototype.setPhoneCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string emoji = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.CountryList.prototype.getEmoji = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CountryList} returns this
 */
proto.accounts.v1alpha1.CountryList.prototype.setEmoji = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.accounts.v1alpha1.ListCountriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListCountriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListCountriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListCountriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.accounts.v1alpha1.ListCountriesRequest}
 */
proto.accounts.v1alpha1.ListCountriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListCountriesRequest;
  return proto.accounts.v1alpha1.ListCountriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListCountriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListCountriesRequest}
 */
proto.accounts.v1alpha1.ListCountriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.accounts.v1alpha1.ListCountriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListCountriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListCountriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListCountriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListCountriesResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.ListCountriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListCountriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListCountriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListCountriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    countriesList: jspb.Message.toObjectList(msg.getCountriesList(),
    proto.accounts.v1alpha1.CountryList.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ListCountriesResponse}
 */
proto.accounts.v1alpha1.ListCountriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListCountriesResponse;
  return proto.accounts.v1alpha1.ListCountriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListCountriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListCountriesResponse}
 */
proto.accounts.v1alpha1.ListCountriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.CountryList;
      reader.readMessage(value,proto.accounts.v1alpha1.CountryList.deserializeBinaryFromReader);
      msg.addCountries(value);
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
proto.accounts.v1alpha1.ListCountriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListCountriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListCountriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListCountriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.CountryList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CountryList countries = 1;
 * @return {!Array<!proto.accounts.v1alpha1.CountryList>}
 */
proto.accounts.v1alpha1.ListCountriesResponse.prototype.getCountriesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.CountryList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.CountryList, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.CountryList>} value
 * @return {!proto.accounts.v1alpha1.ListCountriesResponse} returns this
*/
proto.accounts.v1alpha1.ListCountriesResponse.prototype.setCountriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.CountryList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.CountryList}
 */
proto.accounts.v1alpha1.ListCountriesResponse.prototype.addCountries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.CountryList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListCountriesResponse} returns this
 */
proto.accounts.v1alpha1.ListCountriesResponse.prototype.clearCountriesList = function() {
  return this.setCountriesList([]);
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
proto.accounts.v1alpha1.GetOneCountryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneCountryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneCountryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneCountryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    countryId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.GetOneCountryRequest}
 */
proto.accounts.v1alpha1.GetOneCountryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneCountryRequest;
  return proto.accounts.v1alpha1.GetOneCountryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneCountryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneCountryRequest}
 */
proto.accounts.v1alpha1.GetOneCountryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCountryId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.accounts.v1alpha1.GetOneCountryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneCountryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneCountryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneCountryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountryId();
  if (f !== 0) {
    writer.writeUint32(
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
};


/**
 * optional uint32 country_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneCountryRequest.prototype.getCountryId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneCountryRequest} returns this
 */
proto.accounts.v1alpha1.GetOneCountryRequest.prototype.setCountryId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneCountryRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneCountryRequest} returns this
 */
proto.accounts.v1alpha1.GetOneCountryRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetOneCountryResponse.repeatedFields_ = [6];



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
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneCountryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneCountryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneCountryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    code: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phoneCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    emoji: jspb.Message.getFieldWithDefault(msg, 5, ""),
    statesList: jspb.Message.toObjectList(msg.getStatesList(),
    proto.accounts.v1alpha1.State.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.GetOneCountryResponse}
 */
proto.accounts.v1alpha1.GetOneCountryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneCountryResponse;
  return proto.accounts.v1alpha1.GetOneCountryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneCountryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneCountryResponse}
 */
proto.accounts.v1alpha1.GetOneCountryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmoji(value);
      break;
    case 6:
      var value = new proto.accounts.v1alpha1.State;
      reader.readMessage(value,proto.accounts.v1alpha1.State.deserializeBinaryFromReader);
      msg.addStates(value);
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
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneCountryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneCountryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneCountryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhoneCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmoji();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.accounts.v1alpha1.State.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneCountryResponse} returns this
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneCountryResponse} returns this
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string code = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneCountryResponse} returns this
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phone_code = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneCountryResponse} returns this
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.setPhoneCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string emoji = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.getEmoji = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneCountryResponse} returns this
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.setEmoji = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated State states = 6;
 * @return {!Array<!proto.accounts.v1alpha1.State>}
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.getStatesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.State>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.State, 6));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.State>} value
 * @return {!proto.accounts.v1alpha1.GetOneCountryResponse} returns this
*/
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.setStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.accounts.v1alpha1.State=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.State}
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.addStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.accounts.v1alpha1.State, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneCountryResponse} returns this
 */
proto.accounts.v1alpha1.GetOneCountryResponse.prototype.clearStatesList = function() {
  return this.setStatesList([]);
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
proto.accounts.v1alpha1.SendVerificationEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.SendVerificationEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.SendVerificationEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.accounts.v1alpha1.SendVerificationEmailRequest}
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.SendVerificationEmailRequest;
  return proto.accounts.v1alpha1.SendVerificationEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.SendVerificationEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.SendVerificationEmailRequest}
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.accounts.v1alpha1.SendVerificationEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.SendVerificationEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.SendVerificationEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
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
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendVerificationEmailRequest} returns this
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendVerificationEmailRequest} returns this
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendVerificationEmailRequest} returns this
 */
proto.accounts.v1alpha1.SendVerificationEmailRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.accounts.v1alpha1.SendVerificationEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.SendVerificationEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.SendVerificationEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SendVerificationEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    htmlResult: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.SendVerificationEmailResponse}
 */
proto.accounts.v1alpha1.SendVerificationEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.SendVerificationEmailResponse;
  return proto.accounts.v1alpha1.SendVerificationEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.SendVerificationEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.SendVerificationEmailResponse}
 */
proto.accounts.v1alpha1.SendVerificationEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtmlResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.SendVerificationEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.SendVerificationEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.SendVerificationEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SendVerificationEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHtmlResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string html_result = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.SendVerificationEmailResponse.prototype.getHtmlResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendVerificationEmailResponse} returns this
 */
proto.accounts.v1alpha1.SendVerificationEmailResponse.prototype.setHtmlResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.SendVerificationEmailResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendVerificationEmailResponse} returns this
 */
proto.accounts.v1alpha1.SendVerificationEmailResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.VerifyEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.VerifyEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.VerifyEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.VerifyEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.VerifyEmailRequest}
 */
proto.accounts.v1alpha1.VerifyEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.VerifyEmailRequest;
  return proto.accounts.v1alpha1.VerifyEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.VerifyEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.VerifyEmailRequest}
 */
proto.accounts.v1alpha1.VerifyEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.accounts.v1alpha1.VerifyEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.VerifyEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.VerifyEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.VerifyEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.VerifyEmailRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.VerifyEmailRequest} returns this
 */
proto.accounts.v1alpha1.VerifyEmailRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.accounts.v1alpha1.VerifyEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.VerifyEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.VerifyEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.VerifyEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.VerifyEmailResponse}
 */
proto.accounts.v1alpha1.VerifyEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.VerifyEmailResponse;
  return proto.accounts.v1alpha1.VerifyEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.VerifyEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.VerifyEmailResponse}
 */
proto.accounts.v1alpha1.VerifyEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.VerifyEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.VerifyEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.VerifyEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.VerifyEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.VerifyEmailResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.VerifyEmailResponse} returns this
 */
proto.accounts.v1alpha1.VerifyEmailResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.VerifyEmailResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.VerifyEmailResponse} returns this
 */
proto.accounts.v1alpha1.VerifyEmailResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.CheckUserRequest.repeatedFields_ = [10];



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
proto.accounts.v1alpha1.CheckUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CheckUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CheckUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CheckUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    getOrganizationFromProject: jspb.Message.getFieldWithDefault(msg, 3, 0),
    permission: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userIdDex: jspb.Message.getFieldWithDefault(msg, 5, ""),
    userIdAdmin: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    typePermission: jspb.Message.getFieldWithDefault(msg, 9, ""),
    rolesIdsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    apiKeyValue: jspb.Message.getFieldWithDefault(msg, 11, ""),
    tokenCcpAdmin: jspb.Message.getFieldWithDefault(msg, 12, ""),
    tokenCcpUserId: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.accounts.v1alpha1.CheckUserRequest}
 */
proto.accounts.v1alpha1.CheckUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CheckUserRequest;
  return proto.accounts.v1alpha1.CheckUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CheckUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CheckUserRequest}
 */
proto.accounts.v1alpha1.CheckUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGetOrganizationFromProject(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserIdDex(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserIdAdmin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypePermission(value);
      break;
    case 10:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRolesIds(values[i]);
      }
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKeyValue(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenCcpAdmin(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenCcpUserId(value);
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
proto.accounts.v1alpha1.CheckUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CheckUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CheckUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CheckUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getGetOrganizationFromProject();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserIdDex();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUserIdAdmin();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getTypePermission();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRolesIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      10,
      f
    );
  }
  f = message.getApiKeyValue();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTokenCcpAdmin();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTokenCcpUserId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 project_id = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getProjectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 get_organization_from_project = 3;
 * @return {number}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getGetOrganizationFromProject = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setGetOrganizationFromProject = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string permission = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string user_id_dex = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getUserIdDex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setUserIdDex = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string user_id_admin = 6;
 * @return {string}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getUserIdAdmin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setUserIdAdmin = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 user_id = 7;
 * @return {number}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string type_permission = 9;
 * @return {string}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getTypePermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setTypePermission = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated uint32 roles_ids = 10;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getRolesIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setRolesIdsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.addRolesIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.clearRolesIdsList = function() {
  return this.setRolesIdsList([]);
};


/**
 * optional string api_key_value = 11;
 * @return {string}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getApiKeyValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setApiKeyValue = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string token_ccp_admin = 12;
 * @return {string}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getTokenCcpAdmin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setTokenCcpAdmin = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string token_ccp_user_id = 13;
 * @return {string}
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.getTokenCcpUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CheckUserRequest} returns this
 */
proto.accounts.v1alpha1.CheckUserRequest.prototype.setTokenCcpUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
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
proto.accounts.v1alpha1.CheckUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CheckUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CheckUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CheckUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isExists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    error: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    msg: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.accounts.v1alpha1.CheckUserResponse}
 */
proto.accounts.v1alpha1.CheckUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CheckUserResponse;
  return proto.accounts.v1alpha1.CheckUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CheckUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CheckUserResponse}
 */
proto.accounts.v1alpha1.CheckUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExists(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
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
proto.accounts.v1alpha1.CheckUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CheckUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CheckUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CheckUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool is_exists = 1;
 * @return {boolean}
 */
proto.accounts.v1alpha1.CheckUserResponse.prototype.getIsExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.CheckUserResponse} returns this
 */
proto.accounts.v1alpha1.CheckUserResponse.prototype.setIsExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CheckUserResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CheckUserResponse} returns this
 */
proto.accounts.v1alpha1.CheckUserResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_admin = 3;
 * @return {boolean}
 */
proto.accounts.v1alpha1.CheckUserResponse.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.CheckUserResponse} returns this
 */
proto.accounts.v1alpha1.CheckUserResponse.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string msg = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.CheckUserResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CheckUserResponse} returns this
 */
proto.accounts.v1alpha1.CheckUserResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.accounts.v1alpha1.UsersDex.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UsersDex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UsersDex} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UsersDex.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    provider: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.UsersDex}
 */
proto.accounts.v1alpha1.UsersDex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UsersDex;
  return proto.accounts.v1alpha1.UsersDex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UsersDex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UsersDex}
 */
proto.accounts.v1alpha1.UsersDex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvider(value);
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
proto.accounts.v1alpha1.UsersDex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UsersDex.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UsersDex} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UsersDex.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProvider();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.UsersDex.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UsersDex} returns this
 */
proto.accounts.v1alpha1.UsersDex.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string provider = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UsersDex.prototype.getProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UsersDex} returns this
 */
proto.accounts.v1alpha1.UsersDex.prototype.setProvider = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.CreateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.CreateUserResponse}
 */
proto.accounts.v1alpha1.CreateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateUserResponse;
  return proto.accounts.v1alpha1.CreateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateUserResponse}
 */
proto.accounts.v1alpha1.CreateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.CreateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserResponse} returns this
 */
proto.accounts.v1alpha1.CreateUserResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserResponse} returns this
 */
proto.accounts.v1alpha1.CreateUserResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.UpdateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.UpdateUserResponse}
 */
proto.accounts.v1alpha1.UpdateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateUserResponse;
  return proto.accounts.v1alpha1.UpdateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateUserResponse}
 */
proto.accounts.v1alpha1.UpdateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.UpdateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateUserResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateUserResponse} returns this
 */
proto.accounts.v1alpha1.UpdateUserResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateUserResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateUserResponse} returns this
 */
proto.accounts.v1alpha1.UpdateUserResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.DeleteUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.DeleteUserResponse}
 */
proto.accounts.v1alpha1.DeleteUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteUserResponse;
  return proto.accounts.v1alpha1.DeleteUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteUserResponse}
 */
proto.accounts.v1alpha1.DeleteUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.DeleteUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteUserResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteUserResponse} returns this
 */
proto.accounts.v1alpha1.DeleteUserResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteUserResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteUserResponse} returns this
 */
proto.accounts.v1alpha1.DeleteUserResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.ListUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.accounts.v1alpha1.ListUserRequest}
 */
proto.accounts.v1alpha1.ListUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListUserRequest;
  return proto.accounts.v1alpha1.ListUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListUserRequest}
 */
proto.accounts.v1alpha1.ListUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProjectId(value);
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
proto.accounts.v1alpha1.ListUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.ListUserRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListUserRequest} returns this
 */
proto.accounts.v1alpha1.ListUserRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 project_id = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.ListUserRequest.prototype.getProjectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListUserRequest} returns this
 */
proto.accounts.v1alpha1.ListUserRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.CreateUserRequest.repeatedFields_ = [6,7,8];



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
proto.accounts.v1alpha1.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    rolesIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    permissionsIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    organizationsIdsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 9, ""),
    country: jspb.Message.getFieldWithDefault(msg, 10, ""),
    city: jspb.Message.getFieldWithDefault(msg, 11, ""),
    zipCode: jspb.Message.getFieldWithDefault(msg, 12, ""),
    address: jspb.Message.getFieldWithDefault(msg, 13, ""),
    state: jspb.Message.getFieldWithDefault(msg, 14, ""),
    emojiCountry: jspb.Message.getFieldWithDefault(msg, 15, ""),
    invitationCode: jspb.Message.getFieldWithDefault(msg, 16, ""),
    isMfaEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 17, false)
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
 * @return {!proto.accounts.v1alpha1.CreateUserRequest}
 */
proto.accounts.v1alpha1.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateUserRequest;
  return proto.accounts.v1alpha1.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateUserRequest}
 */
proto.accounts.v1alpha1.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRolesIds(values[i]);
      }
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPermissionsIds(values[i]);
      }
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOrganizationsIds(values[i]);
      }
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipCode(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmojiCountry(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvitationCode(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMfaEnabled(value);
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
proto.accounts.v1alpha1.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRolesIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      6,
      f
    );
  }
  f = message.getPermissionsIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      7,
      f
    );
  }
  f = message.getOrganizationsIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      8,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getZipCode();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getEmojiCountry();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getInvitationCode();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getIsMfaEnabled();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_active = 5;
 * @return {boolean}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated uint32 roles_ids = 6;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getRolesIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setRolesIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.addRolesIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.clearRolesIdsList = function() {
  return this.setRolesIdsList([]);
};


/**
 * repeated uint32 permissions_ids = 7;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getPermissionsIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setPermissionsIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.addPermissionsIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.clearPermissionsIdsList = function() {
  return this.setPermissionsIdsList([]);
};


/**
 * repeated uint32 organizations_ids = 8;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getOrganizationsIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setOrganizationsIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.addOrganizationsIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.clearOrganizationsIdsList = function() {
  return this.setOrganizationsIdsList([]);
};


/**
 * optional string phone_number = 9;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string country = 10;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string city = 11;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string zip_code = 12;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string address = 13;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string state = 14;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string emoji_country = 15;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getEmojiCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setEmojiCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string invitation_code = 16;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getInvitationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setInvitationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional bool is_mfa_enabled = 17;
 * @return {boolean}
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.getIsMfaEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.CreateUserRequest} returns this
 */
proto.accounts.v1alpha1.CreateUserRequest.prototype.setIsMfaEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
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
proto.accounts.v1alpha1.UpdateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    auth: (f = msg.getAuth()) && proto.accounts.v1alpha1.CreateUserRequest.toObject(includeInstance, f)
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
 * @return {!proto.accounts.v1alpha1.UpdateUserRequest}
 */
proto.accounts.v1alpha1.UpdateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateUserRequest;
  return proto.accounts.v1alpha1.UpdateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateUserRequest}
 */
proto.accounts.v1alpha1.UpdateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAuthId(value);
      break;
    case 2:
      var value = new proto.accounts.v1alpha1.CreateUserRequest;
      reader.readMessage(value,proto.accounts.v1alpha1.CreateUserRequest.deserializeBinaryFromReader);
      msg.setAuth(value);
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
proto.accounts.v1alpha1.UpdateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.accounts.v1alpha1.CreateUserRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 auth_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.UpdateUserRequest.prototype.getAuthId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.UpdateUserRequest} returns this
 */
proto.accounts.v1alpha1.UpdateUserRequest.prototype.setAuthId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CreateUserRequest auth = 2;
 * @return {?proto.accounts.v1alpha1.CreateUserRequest}
 */
proto.accounts.v1alpha1.UpdateUserRequest.prototype.getAuth = function() {
  return /** @type{?proto.accounts.v1alpha1.CreateUserRequest} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.CreateUserRequest, 2));
};


/**
 * @param {?proto.accounts.v1alpha1.CreateUserRequest|undefined} value
 * @return {!proto.accounts.v1alpha1.UpdateUserRequest} returns this
*/
proto.accounts.v1alpha1.UpdateUserRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.UpdateUserRequest} returns this
 */
proto.accounts.v1alpha1.UpdateUserRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.UpdateUserRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.accounts.v1alpha1.DeleteUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    organizationId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.accounts.v1alpha1.DeleteUserRequest}
 */
proto.accounts.v1alpha1.DeleteUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteUserRequest;
  return proto.accounts.v1alpha1.DeleteUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteUserRequest}
 */
proto.accounts.v1alpha1.DeleteUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
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
proto.accounts.v1alpha1.DeleteUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 user_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.DeleteUserRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.DeleteUserRequest} returns this
 */
proto.accounts.v1alpha1.DeleteUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 organization_id = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.DeleteUserRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.DeleteUserRequest} returns this
 */
proto.accounts.v1alpha1.DeleteUserRequest.prototype.setOrganizationId = function(value) {
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
proto.accounts.v1alpha1.UserList.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UserList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UserList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UserList.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isSuperUser: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.accounts.v1alpha1.UserList}
 */
proto.accounts.v1alpha1.UserList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UserList;
  return proto.accounts.v1alpha1.UserList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UserList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UserList}
 */
proto.accounts.v1alpha1.UserList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuperUser(value);
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
proto.accounts.v1alpha1.UserList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UserList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UserList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UserList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsSuperUser();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.UserList.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.UserList} returns this
 */
proto.accounts.v1alpha1.UserList.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UserList.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UserList} returns this
 */
proto.accounts.v1alpha1.UserList.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.UserList.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UserList} returns this
 */
proto.accounts.v1alpha1.UserList.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.UserList.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UserList} returns this
 */
proto.accounts.v1alpha1.UserList.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string user_id = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.UserList.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UserList} returns this
 */
proto.accounts.v1alpha1.UserList.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_active = 6;
 * @return {boolean}
 */
proto.accounts.v1alpha1.UserList.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.UserList} returns this
 */
proto.accounts.v1alpha1.UserList.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_super_user = 7;
 * @return {boolean}
 */
proto.accounts.v1alpha1.UserList.prototype.getIsSuperUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.UserList} returns this
 */
proto.accounts.v1alpha1.UserList.prototype.setIsSuperUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
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
proto.accounts.v1alpha1.GetOneUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    organizationId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.accounts.v1alpha1.GetOneUserRequest}
 */
proto.accounts.v1alpha1.GetOneUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneUserRequest;
  return proto.accounts.v1alpha1.GetOneUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneUserRequest}
 */
proto.accounts.v1alpha1.GetOneUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
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
proto.accounts.v1alpha1.GetOneUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneUserRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneUserRequest} returns this
 */
proto.accounts.v1alpha1.GetOneUserRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 organization_id = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneUserRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneUserRequest} returns this
 */
proto.accounts.v1alpha1.GetOneUserRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetOneUserResponse.repeatedFields_ = [9,10,12,13];



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
proto.accounts.v1alpha1.GetOneUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    createdAt: jspb.Message.getFieldWithDefault(msg, 7, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.accounts.v1alpha1.Rol.toObject, includeInstance),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.accounts.v1alpha1.Permission.toObject, includeInstance),
    isSuperUser: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    organizationsList: jspb.Message.toObjectList(msg.getOrganizationsList(),
    proto.accounts.v1alpha1.Organization.toObject, includeInstance),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.accounts.v1alpha1.Project.toObject, includeInstance),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 14, ""),
    country: jspb.Message.getFieldWithDefault(msg, 15, ""),
    city: jspb.Message.getFieldWithDefault(msg, 16, ""),
    zipCode: jspb.Message.getFieldWithDefault(msg, 17, ""),
    address: jspb.Message.getFieldWithDefault(msg, 18, ""),
    state: jspb.Message.getFieldWithDefault(msg, 19, ""),
    emojiCountry: jspb.Message.getFieldWithDefault(msg, 20, ""),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isMfaEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 22, false)
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
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse}
 */
proto.accounts.v1alpha1.GetOneUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneUserResponse;
  return proto.accounts.v1alpha1.GetOneUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse}
 */
proto.accounts.v1alpha1.GetOneUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 9:
      var value = new proto.accounts.v1alpha1.Rol;
      reader.readMessage(value,proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    case 10:
      var value = new proto.accounts.v1alpha1.Permission;
      reader.readMessage(value,proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuperUser(value);
      break;
    case 12:
      var value = new proto.accounts.v1alpha1.Organization;
      reader.readMessage(value,proto.accounts.v1alpha1.Organization.deserializeBinaryFromReader);
      msg.addOrganizations(value);
      break;
    case 13:
      var value = new proto.accounts.v1alpha1.Project;
      reader.readMessage(value,proto.accounts.v1alpha1.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipCode(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmojiCountry(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMfaEnabled(value);
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
proto.accounts.v1alpha1.GetOneUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.accounts.v1alpha1.Rol.serializeBinaryToWriter
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.accounts.v1alpha1.Permission.serializeBinaryToWriter
    );
  }
  f = message.getIsSuperUser();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getOrganizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.accounts.v1alpha1.Organization.serializeBinaryToWriter
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.accounts.v1alpha1.Project.serializeBinaryToWriter
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getZipCode();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getEmojiCountry();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIsMfaEnabled();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_active = 6;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string created_at = 7;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string updated_at = 8;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated Rol roles = 9;
 * @return {!Array<!proto.accounts.v1alpha1.Rol>}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Rol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Rol, 9));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Rol>} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
*/
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Rol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.accounts.v1alpha1.Rol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * repeated Permission permissions = 10;
 * @return {!Array<!proto.accounts.v1alpha1.Permission>}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Permission, 10));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Permission>} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
*/
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.accounts.v1alpha1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional bool is_super_user = 11;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getIsSuperUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setIsSuperUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated Organization organizations = 12;
 * @return {!Array<!proto.accounts.v1alpha1.Organization>}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getOrganizationsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Organization, 12));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Organization>} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
*/
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setOrganizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Organization}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.addOrganizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.accounts.v1alpha1.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.clearOrganizationsList = function() {
  return this.setOrganizationsList([]);
};


/**
 * repeated Project projects = 13;
 * @return {!Array<!proto.accounts.v1alpha1.Project>}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Project, 13));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Project>} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
*/
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.accounts.v1alpha1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * optional string phone_number = 14;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string country = 15;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string city = 16;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string zip_code = 17;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string address = 18;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string state = 19;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string emoji_country = 20;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getEmojiCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setEmojiCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional bool email_verified = 21;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool is_mfa_enabled = 22;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.getIsMfaEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneUserResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserResponse.prototype.setIsMfaEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListUserResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.ListUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.accounts.v1alpha1.UserList.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ListUserResponse}
 */
proto.accounts.v1alpha1.ListUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListUserResponse;
  return proto.accounts.v1alpha1.ListUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListUserResponse}
 */
proto.accounts.v1alpha1.ListUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.UserList;
      reader.readMessage(value,proto.accounts.v1alpha1.UserList.deserializeBinaryFromReader);
      msg.addUsers(value);
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
proto.accounts.v1alpha1.ListUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.UserList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UserList users = 1;
 * @return {!Array<!proto.accounts.v1alpha1.UserList>}
 */
proto.accounts.v1alpha1.ListUserResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.UserList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.UserList, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.UserList>} value
 * @return {!proto.accounts.v1alpha1.ListUserResponse} returns this
*/
proto.accounts.v1alpha1.ListUserResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.UserList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.UserList}
 */
proto.accounts.v1alpha1.ListUserResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.UserList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListUserResponse} returns this
 */
proto.accounts.v1alpha1.ListUserResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
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
proto.accounts.v1alpha1.ListUserPaginationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListUserPaginationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListUserPaginationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListUserPaginationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.accounts.v1alpha1.ListUserPaginationRequest}
 */
proto.accounts.v1alpha1.ListUserPaginationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListUserPaginationRequest;
  return proto.accounts.v1alpha1.ListUserPaginationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListUserPaginationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListUserPaginationRequest}
 */
proto.accounts.v1alpha1.ListUserPaginationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
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
proto.accounts.v1alpha1.ListUserPaginationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListUserPaginationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListUserPaginationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListUserPaginationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 offset = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.ListUserPaginationRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListUserPaginationRequest} returns this
 */
proto.accounts.v1alpha1.ListUserPaginationRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 limit = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.ListUserPaginationRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListUserPaginationRequest} returns this
 */
proto.accounts.v1alpha1.ListUserPaginationRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.repeatedFields_ = [2];



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
proto.accounts.v1alpha1.ListUserPaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListUserPaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListUserPaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.accounts.v1alpha1.UserList.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ListUserPaginationResponse}
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListUserPaginationResponse;
  return proto.accounts.v1alpha1.ListUserPaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListUserPaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListUserPaginationResponse}
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    case 2:
      var value = new proto.accounts.v1alpha1.UserList;
      reader.readMessage(value,proto.accounts.v1alpha1.UserList.deserializeBinaryFromReader);
      msg.addUsers(value);
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
proto.accounts.v1alpha1.ListUserPaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListUserPaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListUserPaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.accounts.v1alpha1.UserList.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 count = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListUserPaginationResponse} returns this
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UserList users = 2;
 * @return {!Array<!proto.accounts.v1alpha1.UserList>}
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.UserList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.UserList, 2));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.UserList>} value
 * @return {!proto.accounts.v1alpha1.ListUserPaginationResponse} returns this
*/
proto.accounts.v1alpha1.ListUserPaginationResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.accounts.v1alpha1.UserList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.UserList}
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.accounts.v1alpha1.UserList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListUserPaginationResponse} returns this
 */
proto.accounts.v1alpha1.ListUserPaginationResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.repeatedFields_ = [5,6];



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
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.SendInvitationUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.SendInvitationUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userIdAdmin: jspb.Message.getFieldWithDefault(msg, 4, ""),
    rolesIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    permissionsIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    organizationId: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest}
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.SendInvitationUserRequest;
  return proto.accounts.v1alpha1.SendInvitationUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.SendInvitationUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest}
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserIdAdmin(value);
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRolesIds(values[i]);
      }
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPermissionsIds(values[i]);
      }
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
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
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.SendInvitationUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.SendInvitationUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserIdAdmin();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRolesIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      5,
      f
    );
  }
  f = message.getPermissionsIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      6,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id_admin = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.getUserIdAdmin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.setUserIdAdmin = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated uint32 roles_ids = 5;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.getRolesIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.setRolesIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.addRolesIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.clearRolesIdsList = function() {
  return this.setRolesIdsList([]);
};


/**
 * repeated uint32 permissions_ids = 6;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.getPermissionsIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.setPermissionsIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.addPermissionsIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.clearPermissionsIdsList = function() {
  return this.setPermissionsIdsList([]);
};


/**
 * optional uint32 organization_id = 7;
 * @return {number}
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.repeatedFields_ = [2,5,6];



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
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.SendInvitationUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.SendInvitationUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: (f = msg.getOrganization()) && proto.accounts.v1alpha1.Organization.toObject(includeInstance, f),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.accounts.v1alpha1.Project.toObject, includeInstance),
    invitationCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    result: jspb.Message.getFieldWithDefault(msg, 4, ""),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.accounts.v1alpha1.Rol.toObject, includeInstance),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.accounts.v1alpha1.Permission.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.SendInvitationUserResponse;
  return proto.accounts.v1alpha1.SendInvitationUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.SendInvitationUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.Organization;
      reader.readMessage(value,proto.accounts.v1alpha1.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 2:
      var value = new proto.accounts.v1alpha1.Project;
      reader.readMessage(value,proto.accounts.v1alpha1.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvitationCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    case 5:
      var value = new proto.accounts.v1alpha1.Rol;
      reader.readMessage(value,proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    case 6:
      var value = new proto.accounts.v1alpha1.Permission;
      reader.readMessage(value,proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.SendInvitationUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.SendInvitationUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.accounts.v1alpha1.Organization.serializeBinaryToWriter
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.accounts.v1alpha1.Project.serializeBinaryToWriter
    );
  }
  f = message.getInvitationCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.accounts.v1alpha1.Rol.serializeBinaryToWriter
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.accounts.v1alpha1.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional Organization organization = 1;
 * @return {?proto.accounts.v1alpha1.Organization}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.getOrganization = function() {
  return /** @type{?proto.accounts.v1alpha1.Organization} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.Organization, 1));
};


/**
 * @param {?proto.accounts.v1alpha1.Organization|undefined} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
*/
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Project projects = 2;
 * @return {!Array<!proto.accounts.v1alpha1.Project>}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Project, 2));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Project>} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
*/
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.accounts.v1alpha1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * optional string invitation_code = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.getInvitationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.setInvitationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string result = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Rol roles = 5;
 * @return {!Array<!proto.accounts.v1alpha1.Rol>}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Rol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Rol, 5));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Rol>} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
*/
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Rol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.accounts.v1alpha1.Rol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * repeated Permission permissions = 6;
 * @return {!Array<!proto.accounts.v1alpha1.Permission>}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Permission, 6));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Permission>} value
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
*/
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.accounts.v1alpha1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.SendInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.SendInvitationUserResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
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
proto.accounts.v1alpha1.GetInvitationUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetInvitationUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetInvitationUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetInvitationUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.GetInvitationUserRequest}
 */
proto.accounts.v1alpha1.GetInvitationUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetInvitationUserRequest;
  return proto.accounts.v1alpha1.GetInvitationUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetInvitationUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetInvitationUserRequest}
 */
proto.accounts.v1alpha1.GetInvitationUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvitationCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
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
proto.accounts.v1alpha1.GetInvitationUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetInvitationUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetInvitationUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetInvitationUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string invitation_code = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.GetInvitationUserRequest.prototype.getInvitationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.GetInvitationUserRequest.prototype.setInvitationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetInvitationUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.GetInvitationUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.OrganizationInvitation.repeatedFields_ = [5];



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
proto.accounts.v1alpha1.OrganizationInvitation.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.OrganizationInvitation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.OrganizationInvitation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.OrganizationInvitation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.accounts.v1alpha1.Project.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.OrganizationInvitation}
 */
proto.accounts.v1alpha1.OrganizationInvitation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.OrganizationInvitation;
  return proto.accounts.v1alpha1.OrganizationInvitation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.OrganizationInvitation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.OrganizationInvitation}
 */
proto.accounts.v1alpha1.OrganizationInvitation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.accounts.v1alpha1.Project;
      reader.readMessage(value,proto.accounts.v1alpha1.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
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
proto.accounts.v1alpha1.OrganizationInvitation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.OrganizationInvitation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.OrganizationInvitation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.OrganizationInvitation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.accounts.v1alpha1.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.OrganizationInvitation} returns this
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.OrganizationInvitation} returns this
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.OrganizationInvitation} returns this
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.OrganizationInvitation} returns this
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Project projects = 5;
 * @return {!Array<!proto.accounts.v1alpha1.Project>}
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Project, 5));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Project>} value
 * @return {!proto.accounts.v1alpha1.OrganizationInvitation} returns this
*/
proto.accounts.v1alpha1.OrganizationInvitation.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.accounts.v1alpha1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.OrganizationInvitation} returns this
 */
proto.accounts.v1alpha1.OrganizationInvitation.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.repeatedFields_ = [4,5];



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
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetInvitationUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetInvitationUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    invitationCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.accounts.v1alpha1.Rol.toObject, includeInstance),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.accounts.v1alpha1.Permission.toObject, includeInstance),
    organization: (f = msg.getOrganization()) && proto.accounts.v1alpha1.OrganizationInvitation.toObject(includeInstance, f),
    email: jspb.Message.getFieldWithDefault(msg, 7, ""),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetInvitationUserResponse;
  return proto.accounts.v1alpha1.GetInvitationUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetInvitationUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvitationCode(value);
      break;
    case 4:
      var value = new proto.accounts.v1alpha1.Rol;
      reader.readMessage(value,proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    case 5:
      var value = new proto.accounts.v1alpha1.Permission;
      reader.readMessage(value,proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 6:
      var value = new proto.accounts.v1alpha1.OrganizationInvitation;
      reader.readMessage(value,proto.accounts.v1alpha1.OrganizationInvitation.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
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
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetInvitationUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetInvitationUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInvitationCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.accounts.v1alpha1.Rol.serializeBinaryToWriter
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.accounts.v1alpha1.Permission.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.accounts.v1alpha1.OrganizationInvitation.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string invitation_code = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.getInvitationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.setInvitationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Rol roles = 4;
 * @return {!Array<!proto.accounts.v1alpha1.Rol>}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Rol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Rol, 4));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Rol>} value
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
*/
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Rol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.accounts.v1alpha1.Rol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * repeated Permission permissions = 5;
 * @return {!Array<!proto.accounts.v1alpha1.Permission>}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Permission, 5));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Permission>} value
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
*/
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.accounts.v1alpha1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional OrganizationInvitation organization = 6;
 * @return {?proto.accounts.v1alpha1.OrganizationInvitation}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.getOrganization = function() {
  return /** @type{?proto.accounts.v1alpha1.OrganizationInvitation} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.OrganizationInvitation, 6));
};


/**
 * @param {?proto.accounts.v1alpha1.OrganizationInvitation|undefined} value
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
*/
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string email = 7;
 * @return {string}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool success = 8;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.GetInvitationUserResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.AgreeInvitationUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.AgreeInvitationUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    guestUserId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    invitationResponse: jspb.Message.getFieldWithDefault(msg, 4, 0),
    projectsMap: (f = msg.getProjectsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserRequest}
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.AgreeInvitationUserRequest;
  return proto.accounts.v1alpha1.AgreeInvitationUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.AgreeInvitationUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserRequest}
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvitationCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuestUserId(value);
      break;
    case 4:
      var value = /** @type {!proto.accounts.v1alpha1.InvitationResponse} */ (reader.readEnum());
      msg.setInvitationResponse(value);
      break;
    case 5:
      var value = msg.getProjectsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readUint32, null, 0, 0);
         });
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
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.AgreeInvitationUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.AgreeInvitationUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGuestUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInvitationResponse();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getProjectsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeUint32);
  }
};


/**
 * optional string invitation_code = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.getInvitationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.setInvitationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string guest_user_id = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.getGuestUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.setGuestUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional InvitationResponse invitation_response = 4;
 * @return {!proto.accounts.v1alpha1.InvitationResponse}
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.getInvitationResponse = function() {
  return /** @type {!proto.accounts.v1alpha1.InvitationResponse} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.accounts.v1alpha1.InvitationResponse} value
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.setInvitationResponse = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * map<uint32, uint32> projects = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.getProjectsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserRequest} returns this
 */
proto.accounts.v1alpha1.AgreeInvitationUserRequest.prototype.clearProjectsMap = function() {
  this.getProjectsMap().clear();
  return this;};





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
proto.accounts.v1alpha1.AgreeInvitationUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.AgreeInvitationUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.AgreeInvitationUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.AgreeInvitationUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserResponse}
 */
proto.accounts.v1alpha1.AgreeInvitationUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.AgreeInvitationUserResponse;
  return proto.accounts.v1alpha1.AgreeInvitationUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.AgreeInvitationUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserResponse}
 */
proto.accounts.v1alpha1.AgreeInvitationUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
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
proto.accounts.v1alpha1.AgreeInvitationUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.AgreeInvitationUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.AgreeInvitationUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.AgreeInvitationUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.AgreeInvitationUserResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.AgreeInvitationUserResponse} returns this
 */
proto.accounts.v1alpha1.AgreeInvitationUserResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.Rol.repeatedFields_ = [5];



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
proto.accounts.v1alpha1.Rol.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.Rol.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.Rol} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Rol.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    organizationId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.accounts.v1alpha1.Permission.toObject, includeInstance),
    isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.Rol.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.Rol;
  return proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.Rol} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProjectId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 5:
      var value = new proto.accounts.v1alpha1.Permission;
      reader.readMessage(value,proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
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
proto.accounts.v1alpha1.Rol.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.Rol.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.Rol} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Rol.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getProjectId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.accounts.v1alpha1.Permission.serializeBinaryToWriter
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.Rol.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.Rol} returns this
 */
proto.accounts.v1alpha1.Rol.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.Rol.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Rol} returns this
 */
proto.accounts.v1alpha1.Rol.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 project_id = 3;
 * @return {number}
 */
proto.accounts.v1alpha1.Rol.prototype.getProjectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.Rol} returns this
 */
proto.accounts.v1alpha1.Rol.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 organization_id = 4;
 * @return {number}
 */
proto.accounts.v1alpha1.Rol.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.Rol} returns this
 */
proto.accounts.v1alpha1.Rol.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Permission permissions = 5;
 * @return {!Array<!proto.accounts.v1alpha1.Permission>}
 */
proto.accounts.v1alpha1.Rol.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Permission, 5));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Permission>} value
 * @return {!proto.accounts.v1alpha1.Rol} returns this
*/
proto.accounts.v1alpha1.Rol.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.Rol.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.accounts.v1alpha1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.Rol} returns this
 */
proto.accounts.v1alpha1.Rol.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional bool is_admin = 6;
 * @return {boolean}
 */
proto.accounts.v1alpha1.Rol.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.Rol} returns this
 */
proto.accounts.v1alpha1.Rol.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.CreateRoleRequest.repeatedFields_ = [6];



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
proto.accounts.v1alpha1.CreateRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    organizationId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    typePermission: jspb.Message.getFieldWithDefault(msg, 5, ""),
    permissionIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest}
 */
proto.accounts.v1alpha1.CreateRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateRoleRequest;
  return proto.accounts.v1alpha1.CreateRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest}
 */
proto.accounts.v1alpha1.CreateRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProjectId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypePermission(value);
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPermissionIds(values[i]);
      }
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
proto.accounts.v1alpha1.CreateRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProjectId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTypePermission();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPermissionIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest} returns this
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest} returns this
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 project_id = 3;
 * @return {number}
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.getProjectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest} returns this
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 organization_id = 4;
 * @return {number}
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest} returns this
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string type_permission = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.getTypePermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest} returns this
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.setTypePermission = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated uint32 permission_ids = 6;
 * @return {!Array<number>}
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.getPermissionIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest} returns this
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.setPermissionIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest} returns this
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.addPermissionIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.CreateRoleRequest} returns this
 */
proto.accounts.v1alpha1.CreateRoleRequest.prototype.clearPermissionIdsList = function() {
  return this.setPermissionIdsList([]);
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
proto.accounts.v1alpha1.UpdateRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rol: (f = msg.getRol()) && proto.accounts.v1alpha1.CreateRoleRequest.toObject(includeInstance, f)
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
 * @return {!proto.accounts.v1alpha1.UpdateRoleRequest}
 */
proto.accounts.v1alpha1.UpdateRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateRoleRequest;
  return proto.accounts.v1alpha1.UpdateRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateRoleRequest}
 */
proto.accounts.v1alpha1.UpdateRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRolId(value);
      break;
    case 2:
      var value = new proto.accounts.v1alpha1.CreateRoleRequest;
      reader.readMessage(value,proto.accounts.v1alpha1.CreateRoleRequest.deserializeBinaryFromReader);
      msg.setRol(value);
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
proto.accounts.v1alpha1.UpdateRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRol();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.accounts.v1alpha1.CreateRoleRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 rol_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.UpdateRoleRequest.prototype.getRolId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.UpdateRoleRequest} returns this
 */
proto.accounts.v1alpha1.UpdateRoleRequest.prototype.setRolId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CreateRoleRequest rol = 2;
 * @return {?proto.accounts.v1alpha1.CreateRoleRequest}
 */
proto.accounts.v1alpha1.UpdateRoleRequest.prototype.getRol = function() {
  return /** @type{?proto.accounts.v1alpha1.CreateRoleRequest} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.CreateRoleRequest, 2));
};


/**
 * @param {?proto.accounts.v1alpha1.CreateRoleRequest|undefined} value
 * @return {!proto.accounts.v1alpha1.UpdateRoleRequest} returns this
*/
proto.accounts.v1alpha1.UpdateRoleRequest.prototype.setRol = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.UpdateRoleRequest} returns this
 */
proto.accounts.v1alpha1.UpdateRoleRequest.prototype.clearRol = function() {
  return this.setRol(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.UpdateRoleRequest.prototype.hasRol = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.accounts.v1alpha1.GetOneRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.GetOneRoleRequest}
 */
proto.accounts.v1alpha1.GetOneRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneRoleRequest;
  return proto.accounts.v1alpha1.GetOneRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneRoleRequest}
 */
proto.accounts.v1alpha1.GetOneRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRolId(value);
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
proto.accounts.v1alpha1.GetOneRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 rol_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneRoleRequest.prototype.getRolId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneRoleRequest} returns this
 */
proto.accounts.v1alpha1.GetOneRoleRequest.prototype.setRolId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetOneRoleResponse.repeatedFields_ = [5];



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
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    projectId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.accounts.v1alpha1.Permission.toObject, includeInstance),
    isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.accounts.v1alpha1.GetOneRoleResponse}
 */
proto.accounts.v1alpha1.GetOneRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneRoleResponse;
  return proto.accounts.v1alpha1.GetOneRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneRoleResponse}
 */
proto.accounts.v1alpha1.GetOneRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProjectId(value);
      break;
    case 5:
      var value = new proto.accounts.v1alpha1.Permission;
      reader.readMessage(value,proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
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
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getProjectId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.accounts.v1alpha1.Permission.serializeBinaryToWriter
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneRoleResponse} returns this
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneRoleResponse} returns this
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 organization_id = 3;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneRoleResponse} returns this
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 project_id = 4;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.getProjectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneRoleResponse} returns this
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Permission permissions = 5;
 * @return {!Array<!proto.accounts.v1alpha1.Permission>}
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Permission, 5));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Permission>} value
 * @return {!proto.accounts.v1alpha1.GetOneRoleResponse} returns this
*/
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.accounts.v1alpha1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneRoleResponse} returns this
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional bool is_admin = 6;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneRoleResponse} returns this
 */
proto.accounts.v1alpha1.GetOneRoleResponse.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.accounts.v1alpha1.DeleteRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.DeleteRoleRequest}
 */
proto.accounts.v1alpha1.DeleteRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteRoleRequest;
  return proto.accounts.v1alpha1.DeleteRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteRoleRequest}
 */
proto.accounts.v1alpha1.DeleteRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRolId(value);
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
proto.accounts.v1alpha1.DeleteRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 rol_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.DeleteRoleRequest.prototype.getRolId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.DeleteRoleRequest} returns this
 */
proto.accounts.v1alpha1.DeleteRoleRequest.prototype.setRolId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.accounts.v1alpha1.ListRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    organizationId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.accounts.v1alpha1.ListRolesRequest}
 */
proto.accounts.v1alpha1.ListRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListRolesRequest;
  return proto.accounts.v1alpha1.ListRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListRolesRequest}
 */
proto.accounts.v1alpha1.ListRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
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
proto.accounts.v1alpha1.ListRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 project_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.ListRolesRequest.prototype.getProjectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListRolesRequest} returns this
 */
proto.accounts.v1alpha1.ListRolesRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 organization_id = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.ListRolesRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListRolesRequest} returns this
 */
proto.accounts.v1alpha1.ListRolesRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListRolesResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.ListRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.accounts.v1alpha1.Rol.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ListRolesResponse}
 */
proto.accounts.v1alpha1.ListRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListRolesResponse;
  return proto.accounts.v1alpha1.ListRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListRolesResponse}
 */
proto.accounts.v1alpha1.ListRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.Rol;
      reader.readMessage(value,proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader);
      msg.addRoles(value);
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
proto.accounts.v1alpha1.ListRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.Rol.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Rol roles = 1;
 * @return {!Array<!proto.accounts.v1alpha1.Rol>}
 */
proto.accounts.v1alpha1.ListRolesResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Rol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Rol, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Rol>} value
 * @return {!proto.accounts.v1alpha1.ListRolesResponse} returns this
*/
proto.accounts.v1alpha1.ListRolesResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Rol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.ListRolesResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.Rol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListRolesResponse} returns this
 */
proto.accounts.v1alpha1.ListRolesResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
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
proto.accounts.v1alpha1.CreateRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.accounts.v1alpha1.CreateRoleResponse}
 */
proto.accounts.v1alpha1.CreateRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateRoleResponse;
  return proto.accounts.v1alpha1.CreateRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateRoleResponse}
 */
proto.accounts.v1alpha1.CreateRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
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
proto.accounts.v1alpha1.CreateRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateRoleResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateRoleResponse} returns this
 */
proto.accounts.v1alpha1.CreateRoleResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateRoleResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateRoleResponse} returns this
 */
proto.accounts.v1alpha1.CreateRoleResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.accounts.v1alpha1.CreateRoleResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CreateRoleResponse} returns this
 */
proto.accounts.v1alpha1.CreateRoleResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.accounts.v1alpha1.UpdateRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.UpdateRoleResponse}
 */
proto.accounts.v1alpha1.UpdateRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateRoleResponse;
  return proto.accounts.v1alpha1.UpdateRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateRoleResponse}
 */
proto.accounts.v1alpha1.UpdateRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.UpdateRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateRoleResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateRoleResponse} returns this
 */
proto.accounts.v1alpha1.UpdateRoleResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateRoleResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateRoleResponse} returns this
 */
proto.accounts.v1alpha1.UpdateRoleResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.DeleteRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.DeleteRoleResponse}
 */
proto.accounts.v1alpha1.DeleteRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteRoleResponse;
  return proto.accounts.v1alpha1.DeleteRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteRoleResponse}
 */
proto.accounts.v1alpha1.DeleteRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.DeleteRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteRoleResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteRoleResponse} returns this
 */
proto.accounts.v1alpha1.DeleteRoleResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteRoleResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteRoleResponse} returns this
 */
proto.accounts.v1alpha1.DeleteRoleResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.Project.repeatedFields_ = [8];



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
proto.accounts.v1alpha1.Project.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.Project.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.Project} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Project.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 7, ""),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.accounts.v1alpha1.Rol.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.Project.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.Project;
  return proto.accounts.v1alpha1.Project.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.Project} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.Project.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 8:
      var value = new proto.accounts.v1alpha1.Rol;
      reader.readMessage(value,proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader);
      msg.addRoles(value);
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
proto.accounts.v1alpha1.Project.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.Project.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.Project} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Project.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.accounts.v1alpha1.Rol.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.Project.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.Project} returns this
 */
proto.accounts.v1alpha1.Project.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.Project.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Project} returns this
 */
proto.accounts.v1alpha1.Project.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.Project.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Project} returns this
 */
proto.accounts.v1alpha1.Project.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 organization_id = 4;
 * @return {number}
 */
proto.accounts.v1alpha1.Project.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.Project} returns this
 */
proto.accounts.v1alpha1.Project.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.Project.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Project} returns this
 */
proto.accounts.v1alpha1.Project.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string created_at = 6;
 * @return {string}
 */
proto.accounts.v1alpha1.Project.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Project} returns this
 */
proto.accounts.v1alpha1.Project.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string updated_at = 7;
 * @return {string}
 */
proto.accounts.v1alpha1.Project.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Project} returns this
 */
proto.accounts.v1alpha1.Project.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated Rol roles = 8;
 * @return {!Array<!proto.accounts.v1alpha1.Rol>}
 */
proto.accounts.v1alpha1.Project.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Rol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Rol, 8));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Rol>} value
 * @return {!proto.accounts.v1alpha1.Project} returns this
*/
proto.accounts.v1alpha1.Project.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Rol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.Project.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.accounts.v1alpha1.Rol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.Project} returns this
 */
proto.accounts.v1alpha1.Project.prototype.clearRolesList = function() {
  return this.setRolesList([]);
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
proto.accounts.v1alpha1.CreateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.accounts.v1alpha1.CreateProjectRequest}
 */
proto.accounts.v1alpha1.CreateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateProjectRequest;
  return proto.accounts.v1alpha1.CreateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateProjectRequest}
 */
proto.accounts.v1alpha1.CreateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.accounts.v1alpha1.CreateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateProjectRequest} returns this
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateProjectRequest} returns this
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateProjectRequest} returns this
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 organization_id = 4;
 * @return {number}
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CreateProjectRequest} returns this
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string user_id = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateProjectRequest} returns this
 */
proto.accounts.v1alpha1.CreateProjectRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.accounts.v1alpha1.GetOneProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.GetOneProjectRequest}
 */
proto.accounts.v1alpha1.GetOneProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneProjectRequest;
  return proto.accounts.v1alpha1.GetOneProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneProjectRequest}
 */
proto.accounts.v1alpha1.GetOneProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
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
proto.accounts.v1alpha1.GetOneProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneProjectRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectRequest} returns this
 */
proto.accounts.v1alpha1.GetOneProjectRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.accounts.v1alpha1.DeleteProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.DeleteProjectRequest}
 */
proto.accounts.v1alpha1.DeleteProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteProjectRequest;
  return proto.accounts.v1alpha1.DeleteProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteProjectRequest}
 */
proto.accounts.v1alpha1.DeleteProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
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
proto.accounts.v1alpha1.DeleteProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.DeleteProjectRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.DeleteProjectRequest} returns this
 */
proto.accounts.v1alpha1.DeleteProjectRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.accounts.v1alpha1.ListProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.ListProjectRequest}
 */
proto.accounts.v1alpha1.ListProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListProjectRequest;
  return proto.accounts.v1alpha1.ListProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListProjectRequest}
 */
proto.accounts.v1alpha1.ListProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
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
proto.accounts.v1alpha1.ListProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.ListProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListProjectRequest} returns this
 */
proto.accounts.v1alpha1.ListProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.accounts.v1alpha1.UpdateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    project: (f = msg.getProject()) && proto.accounts.v1alpha1.CreateProjectRequest.toObject(includeInstance, f)
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
 * @return {!proto.accounts.v1alpha1.UpdateProjectRequest}
 */
proto.accounts.v1alpha1.UpdateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateProjectRequest;
  return proto.accounts.v1alpha1.UpdateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateProjectRequest}
 */
proto.accounts.v1alpha1.UpdateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.accounts.v1alpha1.CreateProjectRequest;
      reader.readMessage(value,proto.accounts.v1alpha1.CreateProjectRequest.deserializeBinaryFromReader);
      msg.setProject(value);
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
proto.accounts.v1alpha1.UpdateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.accounts.v1alpha1.CreateProjectRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.UpdateProjectRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.UpdateProjectRequest} returns this
 */
proto.accounts.v1alpha1.UpdateProjectRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CreateProjectRequest project = 2;
 * @return {?proto.accounts.v1alpha1.CreateProjectRequest}
 */
proto.accounts.v1alpha1.UpdateProjectRequest.prototype.getProject = function() {
  return /** @type{?proto.accounts.v1alpha1.CreateProjectRequest} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.CreateProjectRequest, 2));
};


/**
 * @param {?proto.accounts.v1alpha1.CreateProjectRequest|undefined} value
 * @return {!proto.accounts.v1alpha1.UpdateProjectRequest} returns this
*/
proto.accounts.v1alpha1.UpdateProjectRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.UpdateProjectRequest} returns this
 */
proto.accounts.v1alpha1.UpdateProjectRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.UpdateProjectRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.accounts.v1alpha1.MenberRol.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.MenberRol.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.MenberRol} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.MenberRol.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.accounts.v1alpha1.MenberRol}
 */
proto.accounts.v1alpha1.MenberRol.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.MenberRol;
  return proto.accounts.v1alpha1.MenberRol.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.MenberRol} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.MenberRol}
 */
proto.accounts.v1alpha1.MenberRol.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
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
proto.accounts.v1alpha1.MenberRol.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.MenberRol.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.MenberRol} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.MenberRol.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.MenberRol.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.MenberRol} returns this
 */
proto.accounts.v1alpha1.MenberRol.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.MenberRol.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MenberRol} returns this
 */
proto.accounts.v1alpha1.MenberRol.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_admin = 3;
 * @return {boolean}
 */
proto.accounts.v1alpha1.MenberRol.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.MenberRol} returns this
 */
proto.accounts.v1alpha1.MenberRol.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.accounts.v1alpha1.ProjectList.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ProjectList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ProjectList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ProjectList.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    image: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.ProjectList}
 */
proto.accounts.v1alpha1.ProjectList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ProjectList;
  return proto.accounts.v1alpha1.ProjectList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ProjectList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ProjectList}
 */
proto.accounts.v1alpha1.ProjectList.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setImage(value);
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
proto.accounts.v1alpha1.ProjectList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ProjectList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ProjectList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ProjectList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.ProjectList.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ProjectList} returns this
 */
proto.accounts.v1alpha1.ProjectList.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string image = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.ProjectList.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ProjectList} returns this
 */
proto.accounts.v1alpha1.ProjectList.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.MenberProject.repeatedFields_ = [8];



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
proto.accounts.v1alpha1.MenberProject.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.MenberProject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.MenberProject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.MenberProject.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    image: jspb.Message.getFieldWithDefault(msg, 6, ""),
    role: jspb.Message.getFieldWithDefault(msg, 7, ""),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.accounts.v1alpha1.ProjectList.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.MenberProject}
 */
proto.accounts.v1alpha1.MenberProject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.MenberProject;
  return proto.accounts.v1alpha1.MenberProject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.MenberProject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.MenberProject}
 */
proto.accounts.v1alpha1.MenberProject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 8:
      var value = new proto.accounts.v1alpha1.ProjectList;
      reader.readMessage(value,proto.accounts.v1alpha1.ProjectList.deserializeBinaryFromReader);
      msg.addProjects(value);
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
proto.accounts.v1alpha1.MenberProject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.MenberProject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.MenberProject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.MenberProject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.accounts.v1alpha1.ProjectList.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.MenberProject.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.MenberProject} returns this
 */
proto.accounts.v1alpha1.MenberProject.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.MenberProject.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MenberProject} returns this
 */
proto.accounts.v1alpha1.MenberProject.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.MenberProject.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MenberProject} returns this
 */
proto.accounts.v1alpha1.MenberProject.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.MenberProject.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MenberProject} returns this
 */
proto.accounts.v1alpha1.MenberProject.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_active = 5;
 * @return {boolean}
 */
proto.accounts.v1alpha1.MenberProject.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.MenberProject} returns this
 */
proto.accounts.v1alpha1.MenberProject.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string image = 6;
 * @return {string}
 */
proto.accounts.v1alpha1.MenberProject.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MenberProject} returns this
 */
proto.accounts.v1alpha1.MenberProject.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string role = 7;
 * @return {string}
 */
proto.accounts.v1alpha1.MenberProject.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.MenberProject} returns this
 */
proto.accounts.v1alpha1.MenberProject.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated ProjectList projects = 8;
 * @return {!Array<!proto.accounts.v1alpha1.ProjectList>}
 */
proto.accounts.v1alpha1.MenberProject.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.ProjectList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.ProjectList, 8));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.ProjectList>} value
 * @return {!proto.accounts.v1alpha1.MenberProject} returns this
*/
proto.accounts.v1alpha1.MenberProject.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.accounts.v1alpha1.ProjectList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.ProjectList}
 */
proto.accounts.v1alpha1.MenberProject.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.accounts.v1alpha1.ProjectList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.MenberProject} returns this
 */
proto.accounts.v1alpha1.MenberProject.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
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
proto.accounts.v1alpha1.CreateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.accounts.v1alpha1.CreateProjectResponse}
 */
proto.accounts.v1alpha1.CreateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateProjectResponse;
  return proto.accounts.v1alpha1.CreateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateProjectResponse}
 */
proto.accounts.v1alpha1.CreateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
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
proto.accounts.v1alpha1.CreateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateProjectResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateProjectResponse} returns this
 */
proto.accounts.v1alpha1.CreateProjectResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateProjectResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateProjectResponse} returns this
 */
proto.accounts.v1alpha1.CreateProjectResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.accounts.v1alpha1.CreateProjectResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CreateProjectResponse} returns this
 */
proto.accounts.v1alpha1.CreateProjectResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.accounts.v1alpha1.UpdateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.UpdateProjectResponse}
 */
proto.accounts.v1alpha1.UpdateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateProjectResponse;
  return proto.accounts.v1alpha1.UpdateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateProjectResponse}
 */
proto.accounts.v1alpha1.UpdateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.UpdateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateProjectResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateProjectResponse} returns this
 */
proto.accounts.v1alpha1.UpdateProjectResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateProjectResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateProjectResponse} returns this
 */
proto.accounts.v1alpha1.UpdateProjectResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.DeleteProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.DeleteProjectResponse}
 */
proto.accounts.v1alpha1.DeleteProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteProjectResponse;
  return proto.accounts.v1alpha1.DeleteProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteProjectResponse}
 */
proto.accounts.v1alpha1.DeleteProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.DeleteProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteProjectResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteProjectResponse} returns this
 */
proto.accounts.v1alpha1.DeleteProjectResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteProjectResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteProjectResponse} returns this
 */
proto.accounts.v1alpha1.DeleteProjectResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetOneProjectResponse.repeatedFields_ = [8];



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
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 7, ""),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.accounts.v1alpha1.MenberProject.toObject, includeInstance),
    owner: (f = msg.getOwner()) && proto.accounts.v1alpha1.UserList.toObject(includeInstance, f)
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
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneProjectResponse;
  return proto.accounts.v1alpha1.GetOneProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 8:
      var value = new proto.accounts.v1alpha1.MenberProject;
      reader.readMessage(value,proto.accounts.v1alpha1.MenberProject.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    case 9:
      var value = new proto.accounts.v1alpha1.UserList;
      reader.readMessage(value,proto.accounts.v1alpha1.UserList.deserializeBinaryFromReader);
      msg.setOwner(value);
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
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.accounts.v1alpha1.MenberProject.serializeBinaryToWriter
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.accounts.v1alpha1.UserList.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 organization_id = 4;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string created_at = 6;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string updated_at = 7;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated MenberProject members = 8;
 * @return {!Array<!proto.accounts.v1alpha1.MenberProject>}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.MenberProject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.MenberProject, 8));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.MenberProject>} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
*/
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.accounts.v1alpha1.MenberProject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.MenberProject}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.accounts.v1alpha1.MenberProject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};


/**
 * optional UserList owner = 9;
 * @return {?proto.accounts.v1alpha1.UserList}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.getOwner = function() {
  return /** @type{?proto.accounts.v1alpha1.UserList} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.UserList, 9));
};


/**
 * @param {?proto.accounts.v1alpha1.UserList|undefined} value
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
*/
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.GetOneProjectResponse} returns this
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneProjectResponse.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListProjectResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.ListProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.accounts.v1alpha1.Project.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ListProjectResponse}
 */
proto.accounts.v1alpha1.ListProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListProjectResponse;
  return proto.accounts.v1alpha1.ListProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListProjectResponse}
 */
proto.accounts.v1alpha1.ListProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.Project;
      reader.readMessage(value,proto.accounts.v1alpha1.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
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
proto.accounts.v1alpha1.ListProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.Project.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.accounts.v1alpha1.Project>}
 */
proto.accounts.v1alpha1.ListProjectResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Project, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Project>} value
 * @return {!proto.accounts.v1alpha1.ListProjectResponse} returns this
*/
proto.accounts.v1alpha1.ListProjectResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.ListProjectResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListProjectResponse} returns this
 */
proto.accounts.v1alpha1.ListProjectResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
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
proto.accounts.v1alpha1.ListProjectPaginationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListProjectPaginationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListProjectPaginationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListProjectPaginationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.accounts.v1alpha1.ListProjectPaginationRequest}
 */
proto.accounts.v1alpha1.ListProjectPaginationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListProjectPaginationRequest;
  return proto.accounts.v1alpha1.ListProjectPaginationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListProjectPaginationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListProjectPaginationRequest}
 */
proto.accounts.v1alpha1.ListProjectPaginationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
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
proto.accounts.v1alpha1.ListProjectPaginationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListProjectPaginationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListProjectPaginationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListProjectPaginationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 offset = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.ListProjectPaginationRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListProjectPaginationRequest} returns this
 */
proto.accounts.v1alpha1.ListProjectPaginationRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 limit = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.ListProjectPaginationRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListProjectPaginationRequest} returns this
 */
proto.accounts.v1alpha1.ListProjectPaginationRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.ListProjectPaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListProjectPaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListProjectPaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.accounts.v1alpha1.Project.toObject, includeInstance),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.accounts.v1alpha1.ListProjectPaginationResponse}
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListProjectPaginationResponse;
  return proto.accounts.v1alpha1.ListProjectPaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListProjectPaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListProjectPaginationResponse}
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.Project;
      reader.readMessage(value,proto.accounts.v1alpha1.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
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
proto.accounts.v1alpha1.ListProjectPaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListProjectPaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListProjectPaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.Project.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.accounts.v1alpha1.Project>}
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Project, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Project>} value
 * @return {!proto.accounts.v1alpha1.ListProjectPaginationResponse} returns this
*/
proto.accounts.v1alpha1.ListProjectPaginationResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListProjectPaginationResponse} returns this
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * optional int64 count = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ListProjectPaginationResponse} returns this
 */
proto.accounts.v1alpha1.ListProjectPaginationResponse.prototype.setCount = function(value) {
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
proto.accounts.v1alpha1.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    action: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fullName: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.Permission;
  return proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullName(value);
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
proto.accounts.v1alpha1.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFullName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.Permission.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.Permission} returns this
 */
proto.accounts.v1alpha1.Permission.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.Permission.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Permission} returns this
 */
proto.accounts.v1alpha1.Permission.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string action = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.Permission.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Permission} returns this
 */
proto.accounts.v1alpha1.Permission.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string type = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.Permission.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Permission} returns this
 */
proto.accounts.v1alpha1.Permission.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string full_name = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.Permission.prototype.getFullName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Permission} returns this
 */
proto.accounts.v1alpha1.Permission.prototype.setFullName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GroupPermission.repeatedFields_ = [3];



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
proto.accounts.v1alpha1.GroupPermission.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GroupPermission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GroupPermission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GroupPermission.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.accounts.v1alpha1.Permission.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.GroupPermission}
 */
proto.accounts.v1alpha1.GroupPermission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GroupPermission;
  return proto.accounts.v1alpha1.GroupPermission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GroupPermission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GroupPermission}
 */
proto.accounts.v1alpha1.GroupPermission.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new proto.accounts.v1alpha1.Permission;
      reader.readMessage(value,proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.accounts.v1alpha1.GroupPermission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GroupPermission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GroupPermission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GroupPermission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.accounts.v1alpha1.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.GroupPermission.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GroupPermission} returns this
 */
proto.accounts.v1alpha1.GroupPermission.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Permission permissions = 3;
 * @return {!Array<!proto.accounts.v1alpha1.Permission>}
 */
proto.accounts.v1alpha1.GroupPermission.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Permission, 3));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Permission>} value
 * @return {!proto.accounts.v1alpha1.GroupPermission} returns this
*/
proto.accounts.v1alpha1.GroupPermission.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.GroupPermission.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.accounts.v1alpha1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GroupPermission} returns this
 */
proto.accounts.v1alpha1.GroupPermission.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.CategoryPermission.repeatedFields_ = [3];



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
proto.accounts.v1alpha1.CategoryPermission.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CategoryPermission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CategoryPermission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CategoryPermission.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    groupPermissionsList: jspb.Message.toObjectList(msg.getGroupPermissionsList(),
    proto.accounts.v1alpha1.GroupPermission.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.CategoryPermission}
 */
proto.accounts.v1alpha1.CategoryPermission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CategoryPermission;
  return proto.accounts.v1alpha1.CategoryPermission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CategoryPermission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CategoryPermission}
 */
proto.accounts.v1alpha1.CategoryPermission.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setType(value);
      break;
    case 3:
      var value = new proto.accounts.v1alpha1.GroupPermission;
      reader.readMessage(value,proto.accounts.v1alpha1.GroupPermission.deserializeBinaryFromReader);
      msg.addGroupPermissions(value);
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
proto.accounts.v1alpha1.CategoryPermission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CategoryPermission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CategoryPermission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CategoryPermission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGroupPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.accounts.v1alpha1.GroupPermission.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CategoryPermission.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CategoryPermission} returns this
 */
proto.accounts.v1alpha1.CategoryPermission.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CategoryPermission.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CategoryPermission} returns this
 */
proto.accounts.v1alpha1.CategoryPermission.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated GroupPermission group_permissions = 3;
 * @return {!Array<!proto.accounts.v1alpha1.GroupPermission>}
 */
proto.accounts.v1alpha1.CategoryPermission.prototype.getGroupPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.GroupPermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.GroupPermission, 3));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.GroupPermission>} value
 * @return {!proto.accounts.v1alpha1.CategoryPermission} returns this
*/
proto.accounts.v1alpha1.CategoryPermission.prototype.setGroupPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.accounts.v1alpha1.GroupPermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.GroupPermission}
 */
proto.accounts.v1alpha1.CategoryPermission.prototype.addGroupPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.accounts.v1alpha1.GroupPermission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.CategoryPermission} returns this
 */
proto.accounts.v1alpha1.CategoryPermission.prototype.clearGroupPermissionsList = function() {
  return this.setGroupPermissionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListPermissionResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.ListPermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListPermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListPermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListPermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    categoriesPermissionsList: jspb.Message.toObjectList(msg.getCategoriesPermissionsList(),
    proto.accounts.v1alpha1.CategoryPermission.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ListPermissionResponse}
 */
proto.accounts.v1alpha1.ListPermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListPermissionResponse;
  return proto.accounts.v1alpha1.ListPermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListPermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListPermissionResponse}
 */
proto.accounts.v1alpha1.ListPermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.CategoryPermission;
      reader.readMessage(value,proto.accounts.v1alpha1.CategoryPermission.deserializeBinaryFromReader);
      msg.addCategoriesPermissions(value);
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
proto.accounts.v1alpha1.ListPermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListPermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListPermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListPermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategoriesPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.CategoryPermission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CategoryPermission categories_permissions = 1;
 * @return {!Array<!proto.accounts.v1alpha1.CategoryPermission>}
 */
proto.accounts.v1alpha1.ListPermissionResponse.prototype.getCategoriesPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.CategoryPermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.CategoryPermission, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.CategoryPermission>} value
 * @return {!proto.accounts.v1alpha1.ListPermissionResponse} returns this
*/
proto.accounts.v1alpha1.ListPermissionResponse.prototype.setCategoriesPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.CategoryPermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.CategoryPermission}
 */
proto.accounts.v1alpha1.ListPermissionResponse.prototype.addCategoriesPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.CategoryPermission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListPermissionResponse} returns this
 */
proto.accounts.v1alpha1.ListPermissionResponse.prototype.clearCategoriesPermissionsList = function() {
  return this.setCategoriesPermissionsList([]);
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
proto.accounts.v1alpha1.AssignPermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.AssignPermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.AssignPermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.AssignPermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    permissionId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.accounts.v1alpha1.AssignPermissionRequest}
 */
proto.accounts.v1alpha1.AssignPermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.AssignPermissionRequest;
  return proto.accounts.v1alpha1.AssignPermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.AssignPermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.AssignPermissionRequest}
 */
proto.accounts.v1alpha1.AssignPermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPermissionId(value);
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
proto.accounts.v1alpha1.AssignPermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.AssignPermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.AssignPermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.AssignPermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPermissionId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 user_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.AssignPermissionRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.AssignPermissionRequest} returns this
 */
proto.accounts.v1alpha1.AssignPermissionRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 permission_id = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.AssignPermissionRequest.prototype.getPermissionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.AssignPermissionRequest} returns this
 */
proto.accounts.v1alpha1.AssignPermissionRequest.prototype.setPermissionId = function(value) {
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
proto.accounts.v1alpha1.ListPermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListPermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListPermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListPermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.accounts.v1alpha1.ListPermissionRequest}
 */
proto.accounts.v1alpha1.ListPermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListPermissionRequest;
  return proto.accounts.v1alpha1.ListPermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListPermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListPermissionRequest}
 */
proto.accounts.v1alpha1.ListPermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.accounts.v1alpha1.ListPermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListPermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListPermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListPermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreatePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreatePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreatePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    category: jspb.Message.getFieldWithDefault(msg, 3, ""),
    action: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.accounts.v1alpha1.CreatePermissionRequest}
 */
proto.accounts.v1alpha1.CreatePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreatePermissionRequest;
  return proto.accounts.v1alpha1.CreatePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreatePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreatePermissionRequest}
 */
proto.accounts.v1alpha1.CreatePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
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
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreatePermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreatePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreatePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreatePermissionRequest} returns this
 */
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreatePermissionRequest} returns this
 */
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string category = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreatePermissionRequest} returns this
 */
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string action = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreatePermissionRequest} returns this
 */
proto.accounts.v1alpha1.CreatePermissionRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.accounts.v1alpha1.UpdatePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdatePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdatePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.accounts.v1alpha1.UpdatePermissionRequest}
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdatePermissionRequest;
  return proto.accounts.v1alpha1.UpdatePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdatePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdatePermissionRequest}
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPermissionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
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
proto.accounts.v1alpha1.UpdatePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdatePermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdatePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 permission_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.prototype.getPermissionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.UpdatePermissionRequest} returns this
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.prototype.setPermissionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdatePermissionRequest} returns this
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdatePermissionRequest} returns this
 */
proto.accounts.v1alpha1.UpdatePermissionRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.accounts.v1alpha1.GetOnePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOnePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOnePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOnePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.GetOnePermissionRequest}
 */
proto.accounts.v1alpha1.GetOnePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOnePermissionRequest;
  return proto.accounts.v1alpha1.GetOnePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOnePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOnePermissionRequest}
 */
proto.accounts.v1alpha1.GetOnePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPermissionId(value);
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
proto.accounts.v1alpha1.GetOnePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOnePermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOnePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOnePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 permission_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOnePermissionRequest.prototype.getPermissionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOnePermissionRequest} returns this
 */
proto.accounts.v1alpha1.GetOnePermissionRequest.prototype.setPermissionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.accounts.v1alpha1.GetOnePermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOnePermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOnePermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.accounts.v1alpha1.GetOnePermissionResponse}
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOnePermissionResponse;
  return proto.accounts.v1alpha1.GetOnePermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOnePermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOnePermissionResponse}
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
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
proto.accounts.v1alpha1.GetOnePermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOnePermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOnePermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOnePermissionResponse} returns this
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOnePermissionResponse} returns this
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOnePermissionResponse} returns this
 */
proto.accounts.v1alpha1.GetOnePermissionResponse.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.accounts.v1alpha1.DeletePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeletePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeletePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeletePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.DeletePermissionRequest}
 */
proto.accounts.v1alpha1.DeletePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeletePermissionRequest;
  return proto.accounts.v1alpha1.DeletePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeletePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeletePermissionRequest}
 */
proto.accounts.v1alpha1.DeletePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPermissionId(value);
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
proto.accounts.v1alpha1.DeletePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeletePermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeletePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeletePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 permission_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.DeletePermissionRequest.prototype.getPermissionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.DeletePermissionRequest} returns this
 */
proto.accounts.v1alpha1.DeletePermissionRequest.prototype.setPermissionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.accounts.v1alpha1.UpdatePermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdatePermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdatePermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdatePermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.UpdatePermissionResponse}
 */
proto.accounts.v1alpha1.UpdatePermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdatePermissionResponse;
  return proto.accounts.v1alpha1.UpdatePermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdatePermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdatePermissionResponse}
 */
proto.accounts.v1alpha1.UpdatePermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.UpdatePermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdatePermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdatePermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdatePermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdatePermissionResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdatePermissionResponse} returns this
 */
proto.accounts.v1alpha1.UpdatePermissionResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdatePermissionResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdatePermissionResponse} returns this
 */
proto.accounts.v1alpha1.UpdatePermissionResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.DeletePermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeletePermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeletePermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeletePermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.DeletePermissionResponse}
 */
proto.accounts.v1alpha1.DeletePermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeletePermissionResponse;
  return proto.accounts.v1alpha1.DeletePermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeletePermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeletePermissionResponse}
 */
proto.accounts.v1alpha1.DeletePermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.DeletePermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeletePermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeletePermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeletePermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.DeletePermissionResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeletePermissionResponse} returns this
 */
proto.accounts.v1alpha1.DeletePermissionResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.DeletePermissionResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeletePermissionResponse} returns this
 */
proto.accounts.v1alpha1.DeletePermissionResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.CreatePermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreatePermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreatePermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreatePermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.CreatePermissionResponse}
 */
proto.accounts.v1alpha1.CreatePermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreatePermissionResponse;
  return proto.accounts.v1alpha1.CreatePermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreatePermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreatePermissionResponse}
 */
proto.accounts.v1alpha1.CreatePermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.CreatePermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreatePermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreatePermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreatePermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreatePermissionResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreatePermissionResponse} returns this
 */
proto.accounts.v1alpha1.CreatePermissionResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreatePermissionResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreatePermissionResponse} returns this
 */
proto.accounts.v1alpha1.CreatePermissionResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.Member.repeatedFields_ = [6];



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
proto.accounts.v1alpha1.Member.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.Member.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.Member} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Member.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.accounts.v1alpha1.MenberRol.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.Member}
 */
proto.accounts.v1alpha1.Member.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.Member;
  return proto.accounts.v1alpha1.Member.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.Member} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.Member}
 */
proto.accounts.v1alpha1.Member.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 6:
      var value = new proto.accounts.v1alpha1.MenberRol;
      reader.readMessage(value,proto.accounts.v1alpha1.MenberRol.deserializeBinaryFromReader);
      msg.addRoles(value);
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
proto.accounts.v1alpha1.Member.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.Member.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.Member} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Member.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.accounts.v1alpha1.MenberRol.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.Member.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.Member} returns this
 */
proto.accounts.v1alpha1.Member.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.Member.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Member} returns this
 */
proto.accounts.v1alpha1.Member.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.Member.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Member} returns this
 */
proto.accounts.v1alpha1.Member.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.Member.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Member} returns this
 */
proto.accounts.v1alpha1.Member.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_active = 5;
 * @return {boolean}
 */
proto.accounts.v1alpha1.Member.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.Member} returns this
 */
proto.accounts.v1alpha1.Member.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated MenberRol roles = 6;
 * @return {!Array<!proto.accounts.v1alpha1.MenberRol>}
 */
proto.accounts.v1alpha1.Member.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.MenberRol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.MenberRol, 6));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.MenberRol>} value
 * @return {!proto.accounts.v1alpha1.Member} returns this
*/
proto.accounts.v1alpha1.Member.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.accounts.v1alpha1.MenberRol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.MenberRol}
 */
proto.accounts.v1alpha1.Member.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.accounts.v1alpha1.MenberRol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.Member} returns this
 */
proto.accounts.v1alpha1.Member.prototype.clearRolesList = function() {
  return this.setRolesList([]);
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
proto.accounts.v1alpha1.ProjectOrganization.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ProjectOrganization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ProjectOrganization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ProjectOrganization.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.accounts.v1alpha1.ProjectOrganization}
 */
proto.accounts.v1alpha1.ProjectOrganization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ProjectOrganization;
  return proto.accounts.v1alpha1.ProjectOrganization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ProjectOrganization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ProjectOrganization}
 */
proto.accounts.v1alpha1.ProjectOrganization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.accounts.v1alpha1.ProjectOrganization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ProjectOrganization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ProjectOrganization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ProjectOrganization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.ProjectOrganization.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.ProjectOrganization} returns this
 */
proto.accounts.v1alpha1.ProjectOrganization.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.ProjectOrganization.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ProjectOrganization} returns this
 */
proto.accounts.v1alpha1.ProjectOrganization.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.ProjectOrganization.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ProjectOrganization} returns this
 */
proto.accounts.v1alpha1.ProjectOrganization.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.ProjectOrganization.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.ProjectOrganization} returns this
 */
proto.accounts.v1alpha1.ProjectOrganization.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.Organization.repeatedFields_ = [8];



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
proto.accounts.v1alpha1.Organization.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.Organization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.Organization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Organization.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    owner: (f = msg.getOwner()) && proto.accounts.v1alpha1.UserList.toObject(includeInstance, f),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.accounts.v1alpha1.Rol.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.Organization}
 */
proto.accounts.v1alpha1.Organization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.Organization;
  return proto.accounts.v1alpha1.Organization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.Organization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.Organization}
 */
proto.accounts.v1alpha1.Organization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new proto.accounts.v1alpha1.UserList;
      reader.readMessage(value,proto.accounts.v1alpha1.UserList.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 8:
      var value = new proto.accounts.v1alpha1.Rol;
      reader.readMessage(value,proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader);
      msg.addRoles(value);
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
proto.accounts.v1alpha1.Organization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.Organization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.Organization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.Organization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.accounts.v1alpha1.UserList.serializeBinaryToWriter
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.accounts.v1alpha1.Rol.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.Organization.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.Organization} returns this
 */
proto.accounts.v1alpha1.Organization.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.Organization.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Organization} returns this
 */
proto.accounts.v1alpha1.Organization.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.Organization.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Organization} returns this
 */
proto.accounts.v1alpha1.Organization.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.Organization.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.Organization} returns this
 */
proto.accounts.v1alpha1.Organization.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional UserList owner = 7;
 * @return {?proto.accounts.v1alpha1.UserList}
 */
proto.accounts.v1alpha1.Organization.prototype.getOwner = function() {
  return /** @type{?proto.accounts.v1alpha1.UserList} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.UserList, 7));
};


/**
 * @param {?proto.accounts.v1alpha1.UserList|undefined} value
 * @return {!proto.accounts.v1alpha1.Organization} returns this
*/
proto.accounts.v1alpha1.Organization.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.Organization} returns this
 */
proto.accounts.v1alpha1.Organization.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.Organization.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated Rol roles = 8;
 * @return {!Array<!proto.accounts.v1alpha1.Rol>}
 */
proto.accounts.v1alpha1.Organization.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Rol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Rol, 8));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Rol>} value
 * @return {!proto.accounts.v1alpha1.Organization} returns this
*/
proto.accounts.v1alpha1.Organization.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Rol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.Organization.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.accounts.v1alpha1.Rol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.Organization} returns this
 */
proto.accounts.v1alpha1.Organization.prototype.clearRolesList = function() {
  return this.setRolesList([]);
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
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    image: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.accounts.v1alpha1.CreateOrganizationRequest}
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateOrganizationRequest;
  return proto.accounts.v1alpha1.CreateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateOrganizationRequest}
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setImage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string image = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.CreateOrganizationRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.accounts.v1alpha1.ListOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.accounts.v1alpha1.ListOrganizationRequest}
 */
proto.accounts.v1alpha1.ListOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListOrganizationRequest;
  return proto.accounts.v1alpha1.ListOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListOrganizationRequest}
 */
proto.accounts.v1alpha1.ListOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.accounts.v1alpha1.ListOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.accounts.v1alpha1.GetOneOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationRequest}
 */
proto.accounts.v1alpha1.GetOneOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneOrganizationRequest;
  return proto.accounts.v1alpha1.GetOneOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationRequest}
 */
proto.accounts.v1alpha1.GetOneOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
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
proto.accounts.v1alpha1.GetOneOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.GetOneOrganizationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    image: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationRequest}
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateOrganizationRequest;
  return proto.accounts.v1alpha1.UpdateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationRequest}
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
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
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string image = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.UpdateOrganizationRequest.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.accounts.v1alpha1.DeleteOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accounts.v1alpha1.DeleteOrganizationRequest}
 */
proto.accounts.v1alpha1.DeleteOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteOrganizationRequest;
  return proto.accounts.v1alpha1.DeleteOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteOrganizationRequest}
 */
proto.accounts.v1alpha1.DeleteOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
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
proto.accounts.v1alpha1.DeleteOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.DeleteOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.DeleteOrganizationRequest} returns this
 */
proto.accounts.v1alpha1.DeleteOrganizationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.repeatedFields_ = [4,5];



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
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.accounts.v1alpha1.ProjectOrganization.toObject, includeInstance),
    menbersList: jspb.Message.toObjectList(msg.getMenbersList(),
    proto.accounts.v1alpha1.Member.toObject, includeInstance),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    owner: (f = msg.getOwner()) && proto.accounts.v1alpha1.UserList.toObject(includeInstance, f)
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
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneOrganizationResponse;
  return proto.accounts.v1alpha1.GetOneOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = new proto.accounts.v1alpha1.ProjectOrganization;
      reader.readMessage(value,proto.accounts.v1alpha1.ProjectOrganization.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 5:
      var value = new proto.accounts.v1alpha1.Member;
      reader.readMessage(value,proto.accounts.v1alpha1.Member.deserializeBinaryFromReader);
      msg.addMenbers(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new proto.accounts.v1alpha1.UserList;
      reader.readMessage(value,proto.accounts.v1alpha1.UserList.deserializeBinaryFromReader);
      msg.setOwner(value);
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
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.accounts.v1alpha1.ProjectOrganization.serializeBinaryToWriter
    );
  }
  f = message.getMenbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.accounts.v1alpha1.Member.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.accounts.v1alpha1.UserList.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ProjectOrganization projects = 4;
 * @return {!Array<!proto.accounts.v1alpha1.ProjectOrganization>}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.ProjectOrganization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.ProjectOrganization, 4));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.ProjectOrganization>} value
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
*/
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.accounts.v1alpha1.ProjectOrganization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.ProjectOrganization}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.accounts.v1alpha1.ProjectOrganization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * repeated Member menbers = 5;
 * @return {!Array<!proto.accounts.v1alpha1.Member>}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.getMenbersList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Member>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Member, 5));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Member>} value
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
*/
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.setMenbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Member=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Member}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.addMenbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.accounts.v1alpha1.Member, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.clearMenbersList = function() {
  return this.setMenbersList([]);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional UserList owner = 7;
 * @return {?proto.accounts.v1alpha1.UserList}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.getOwner = function() {
  return /** @type{?proto.accounts.v1alpha1.UserList} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.UserList, 7));
};


/**
 * @param {?proto.accounts.v1alpha1.UserList|undefined} value
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
*/
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.GetOneOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneOrganizationResponse.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.ListOrganizationResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.ListOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.ListOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.ListOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationsList: jspb.Message.toObjectList(msg.getOrganizationsList(),
    proto.accounts.v1alpha1.Organization.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.ListOrganizationResponse}
 */
proto.accounts.v1alpha1.ListOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.ListOrganizationResponse;
  return proto.accounts.v1alpha1.ListOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.ListOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.ListOrganizationResponse}
 */
proto.accounts.v1alpha1.ListOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.Organization;
      reader.readMessage(value,proto.accounts.v1alpha1.Organization.deserializeBinaryFromReader);
      msg.addOrganizations(value);
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
proto.accounts.v1alpha1.ListOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.ListOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.ListOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.ListOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.Organization.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Organization organizations = 1;
 * @return {!Array<!proto.accounts.v1alpha1.Organization>}
 */
proto.accounts.v1alpha1.ListOrganizationResponse.prototype.getOrganizationsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Organization, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Organization>} value
 * @return {!proto.accounts.v1alpha1.ListOrganizationResponse} returns this
*/
proto.accounts.v1alpha1.ListOrganizationResponse.prototype.setOrganizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Organization}
 */
proto.accounts.v1alpha1.ListOrganizationResponse.prototype.addOrganizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.ListOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.ListOrganizationResponse.prototype.clearOrganizationsList = function() {
  return this.setOrganizationsList([]);
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
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.CreateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.CreateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roleIdOrganization: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.accounts.v1alpha1.CreateOrganizationResponse}
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.CreateOrganizationResponse;
  return proto.accounts.v1alpha1.CreateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.CreateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.CreateOrganizationResponse}
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoleIdOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
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
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.CreateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.CreateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleIdOrganization();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 role_id_organization = 2;
 * @return {number}
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.getRoleIdOrganization = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CreateOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.setRoleIdOrganization = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.CreateOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 id = 4;
 * @return {number}
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.CreateOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.CreateOrganizationResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.accounts.v1alpha1.UpdateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.UpdateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.UpdateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationResponse}
 */
proto.accounts.v1alpha1.UpdateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.UpdateOrganizationResponse;
  return proto.accounts.v1alpha1.UpdateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.UpdateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationResponse}
 */
proto.accounts.v1alpha1.UpdateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.UpdateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.UpdateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.UpdateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.UpdateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateOrganizationResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.UpdateOrganizationResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.UpdateOrganizationResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.UpdateOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.UpdateOrganizationResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.DeleteOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.DeleteOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.DeleteOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.accounts.v1alpha1.DeleteOrganizationResponse}
 */
proto.accounts.v1alpha1.DeleteOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.DeleteOrganizationResponse;
  return proto.accounts.v1alpha1.DeleteOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.DeleteOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.DeleteOrganizationResponse}
 */
proto.accounts.v1alpha1.DeleteOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.DeleteOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.DeleteOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.DeleteOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.DeleteOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteOrganizationResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.DeleteOrganizationResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.DeleteOrganizationResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.DeleteOrganizationResponse} returns this
 */
proto.accounts.v1alpha1.DeleteOrganizationResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.accounts.v1alpha1.GetListUserDexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetListUserDexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetListUserDexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetListUserDexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.accounts.v1alpha1.GetListUserDexRequest}
 */
proto.accounts.v1alpha1.GetListUserDexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetListUserDexRequest;
  return proto.accounts.v1alpha1.GetListUserDexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetListUserDexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetListUserDexRequest}
 */
proto.accounts.v1alpha1.GetListUserDexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.accounts.v1alpha1.GetListUserDexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetListUserDexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetListUserDexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetListUserDexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetListUserDexResponse.repeatedFields_ = [1];



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
proto.accounts.v1alpha1.GetListUserDexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetListUserDexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetListUserDexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetListUserDexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersDexList: jspb.Message.toObjectList(msg.getUsersDexList(),
    proto.accounts.v1alpha1.UsersDex.toObject, includeInstance)
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
 * @return {!proto.accounts.v1alpha1.GetListUserDexResponse}
 */
proto.accounts.v1alpha1.GetListUserDexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetListUserDexResponse;
  return proto.accounts.v1alpha1.GetListUserDexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetListUserDexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetListUserDexResponse}
 */
proto.accounts.v1alpha1.GetListUserDexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accounts.v1alpha1.UsersDex;
      reader.readMessage(value,proto.accounts.v1alpha1.UsersDex.deserializeBinaryFromReader);
      msg.addUsersDex(value);
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
proto.accounts.v1alpha1.GetListUserDexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetListUserDexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetListUserDexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetListUserDexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersDexList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accounts.v1alpha1.UsersDex.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UsersDex users_dex = 1;
 * @return {!Array<!proto.accounts.v1alpha1.UsersDex>}
 */
proto.accounts.v1alpha1.GetListUserDexResponse.prototype.getUsersDexList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.UsersDex>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.UsersDex, 1));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.UsersDex>} value
 * @return {!proto.accounts.v1alpha1.GetListUserDexResponse} returns this
*/
proto.accounts.v1alpha1.GetListUserDexResponse.prototype.setUsersDexList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accounts.v1alpha1.UsersDex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.UsersDex}
 */
proto.accounts.v1alpha1.GetListUserDexResponse.prototype.addUsersDex = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accounts.v1alpha1.UsersDex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetListUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetListUserDexResponse.prototype.clearUsersDexList = function() {
  return this.setUsersDexList([]);
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
proto.accounts.v1alpha1.GetOneUserDexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneUserDexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneUserDexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneUserDexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: (f = msg.getUser()) && proto.accounts.v1alpha1.CreateUserRequest.toObject(includeInstance, f)
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
 * @return {!proto.accounts.v1alpha1.GetOneUserDexRequest}
 */
proto.accounts.v1alpha1.GetOneUserDexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneUserDexRequest;
  return proto.accounts.v1alpha1.GetOneUserDexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneUserDexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneUserDexRequest}
 */
proto.accounts.v1alpha1.GetOneUserDexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new proto.accounts.v1alpha1.CreateUserRequest;
      reader.readMessage(value,proto.accounts.v1alpha1.CreateUserRequest.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.accounts.v1alpha1.GetOneUserDexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneUserDexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneUserDexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneUserDexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.accounts.v1alpha1.CreateUserRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexRequest} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CreateUserRequest user = 2;
 * @return {?proto.accounts.v1alpha1.CreateUserRequest}
 */
proto.accounts.v1alpha1.GetOneUserDexRequest.prototype.getUser = function() {
  return /** @type{?proto.accounts.v1alpha1.CreateUserRequest} */ (
    jspb.Message.getWrapperField(this, proto.accounts.v1alpha1.CreateUserRequest, 2));
};


/**
 * @param {?proto.accounts.v1alpha1.CreateUserRequest|undefined} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexRequest} returns this
*/
proto.accounts.v1alpha1.GetOneUserDexRequest.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.v1alpha1.GetOneUserDexRequest} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexRequest.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneUserDexRequest.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.repeatedFields_ = [9,10,12,14];



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
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.v1alpha1.GetOneUserDexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.v1alpha1.GetOneUserDexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    createdAt: jspb.Message.getFieldWithDefault(msg, 7, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.accounts.v1alpha1.Rol.toObject, includeInstance),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.accounts.v1alpha1.Permission.toObject, includeInstance),
    isSuperUser: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    organizationsList: jspb.Message.toObjectList(msg.getOrganizationsList(),
    proto.accounts.v1alpha1.Organization.toObject, includeInstance),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.accounts.v1alpha1.Project.toObject, includeInstance),
    msg: jspb.Message.getFieldWithDefault(msg, 13, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 15, ""),
    country: jspb.Message.getFieldWithDefault(msg, 16, ""),
    city: jspb.Message.getFieldWithDefault(msg, 17, ""),
    zipCode: jspb.Message.getFieldWithDefault(msg, 18, ""),
    address: jspb.Message.getFieldWithDefault(msg, 19, ""),
    state: jspb.Message.getFieldWithDefault(msg, 20, ""),
    emojiCountry: jspb.Message.getFieldWithDefault(msg, 21, ""),
    isMfaEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    tokenCcp: jspb.Message.getFieldWithDefault(msg, 23, ""),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    error: jspb.Message.getFieldWithDefault(msg, 25, "")
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
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.v1alpha1.GetOneUserDexResponse;
  return proto.accounts.v1alpha1.GetOneUserDexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.v1alpha1.GetOneUserDexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 9:
      var value = new proto.accounts.v1alpha1.Rol;
      reader.readMessage(value,proto.accounts.v1alpha1.Rol.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    case 10:
      var value = new proto.accounts.v1alpha1.Permission;
      reader.readMessage(value,proto.accounts.v1alpha1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuperUser(value);
      break;
    case 12:
      var value = new proto.accounts.v1alpha1.Organization;
      reader.readMessage(value,proto.accounts.v1alpha1.Organization.deserializeBinaryFromReader);
      msg.addOrganizations(value);
      break;
    case 14:
      var value = new proto.accounts.v1alpha1.Project;
      reader.readMessage(value,proto.accounts.v1alpha1.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipCode(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmojiCountry(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMfaEnabled(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenCcp(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.v1alpha1.GetOneUserDexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.v1alpha1.GetOneUserDexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.accounts.v1alpha1.Rol.serializeBinaryToWriter
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.accounts.v1alpha1.Permission.serializeBinaryToWriter
    );
  }
  f = message.getIsSuperUser();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getOrganizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.accounts.v1alpha1.Organization.serializeBinaryToWriter
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.accounts.v1alpha1.Project.serializeBinaryToWriter
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getZipCode();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getEmojiCountry();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getIsMfaEnabled();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getTokenCcp();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_active = 6;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string created_at = 7;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string updated_at = 8;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated Rol roles = 9;
 * @return {!Array<!proto.accounts.v1alpha1.Rol>}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Rol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Rol, 9));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Rol>} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
*/
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Rol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Rol}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.accounts.v1alpha1.Rol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * repeated Permission permissions = 10;
 * @return {!Array<!proto.accounts.v1alpha1.Permission>}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Permission, 10));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Permission>} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
*/
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Permission}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.accounts.v1alpha1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional bool is_super_user = 11;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getIsSuperUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setIsSuperUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated Organization organizations = 12;
 * @return {!Array<!proto.accounts.v1alpha1.Organization>}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getOrganizationsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Organization, 12));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Organization>} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
*/
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setOrganizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Organization}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.addOrganizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.accounts.v1alpha1.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.clearOrganizationsList = function() {
  return this.setOrganizationsList([]);
};


/**
 * repeated Project projects = 14;
 * @return {!Array<!proto.accounts.v1alpha1.Project>}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.accounts.v1alpha1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accounts.v1alpha1.Project, 14));
};


/**
 * @param {!Array<!proto.accounts.v1alpha1.Project>} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
*/
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.accounts.v1alpha1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accounts.v1alpha1.Project}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.accounts.v1alpha1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * optional string msg = 13;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string phone_number = 15;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string country = 16;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string city = 17;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string zip_code = 18;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string address = 19;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string state = 20;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string emoji_country = 21;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getEmojiCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setEmojiCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional bool is_mfa_enabled = 22;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getIsMfaEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setIsMfaEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional string token_ccp = 23;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getTokenCcp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setTokenCcp = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional bool email_verified = 24;
 * @return {boolean}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional string error = 25;
 * @return {string}
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.v1alpha1.GetOneUserDexResponse} returns this
 */
proto.accounts.v1alpha1.GetOneUserDexResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * @enum {number}
 */
proto.accounts.v1alpha1.InvitationResponse = {
  INVITATION_RESPONSE_ACCEPTED_UNSPECIFIED: 0,
  INVITATION_RESPONSE_REJECTED: 1
};

goog.object.extend(exports, proto.accounts.v1alpha1);
