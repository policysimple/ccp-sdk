package users

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/users"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client accountpkgv1.UserServiceClient
var doOnce sync.Once

var accountServiceUri string
var accountServiceTimeout string

type CheckUserData struct {
	Permission     string
	TypePermission string
	OrganizationId uint32
	ProjectId      uint32
	ApiKeyValue    string
	UserIdAdmin    string
	UserIdDex      string
	RolesIds       []uint32
	UserId         uint32
}

/*
	//FILTER
    rpc GetUsersEmailFilter(GetUsersEmailFilterRequest) returns (GetUsersEmailFilterResponse);


    //DEX
    rpc GetListUserDex(GetListUserDexRequest) returns (GetListUserDexResponse);
    rpc GetOneUserDex(GetOneUserDexRequest) returns (GetOneUserDexResponse);
*/

func init() {
	doOnce.Do(func() {
		accountServiceTimeout = os.Getenv("ACCOUNT_SERVICE_TIMEOUT")
		if accountServiceTimeout == "" {
			accountServiceTimeout = "30s"
		}
		accountServiceUri = os.Getenv("ACCOUNT_SERVICE_URI")
		con, err := grpc.Dial(accountServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = accountpkgv1.NewUserServiceClient(con)
	})
}

/*
	CHECK USER
*/

func CheckUser(req *CheckUserData) (*accountpkgv1.CheckUserResponse, error) {
	var checkUser *accountpkgv1.CheckUserRequest

	bylogs.LogInfo("CheckUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	if req.ApiKeyValue != "" {
		checkUser.ApiKeyValue = req.ApiKeyValue
	} else if req.UserIdAdmin != "" {
		checkUser.UserIdAdmin = req.UserIdAdmin
	} else {
		return &accountpkgv1.CheckUserResponse{
			Error: "ApiKey or CCP token not found",
		}, nil
	}

	if req.OrganizationId > 0 {
		checkUser.OrganizationId = req.OrganizationId
	} else if req.ProjectId > 0 {
		checkUser.ProjectId = req.ProjectId
	} else {
		return &accountpkgv1.CheckUserResponse{
			Error: "OrganizationId or ProjectId is required",
		}, nil
	}

	checkUser.TypePermission = req.TypePermission
	checkUser.UserId = req.UserId
	checkUser.UserIdDex = req.UserIdDex

	response, err := client.CheckUser(ctx, checkUser)

	if err != nil {
		bylogs.LogErr("CheckUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error CheckUser: %v", err),
		)
	} else {
		bylogs.LogInfo("CheckUser Client Sdk", "Success")
	}

	return response, nil
}

func SendVerificationEmail(req *accountpkgv1.SendVerificationEmailRequest) (*accountpkgv1.SendVerificationEmailResponse, error) {
	bylogs.LogInfo("SendVerificationEmail Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.SendVerificationEmail(ctx, req)
	if err != nil {
		bylogs.LogErr("SendVerificationEmail Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error SendVerificationEmail: %v", err),
		)
	} else {
		bylogs.LogInfo("SendVerificationEmail Client Sdk", "Success")
	}
	return response, nil
}

func VerifyEmail(token string) (*accountpkgv1.VerifyEmailResponse, error) {
	bylogs.LogInfo("VerifyEmail Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	if token == "" {
		return &accountpkgv1.VerifyEmailResponse{
			Error: "token is required",
		}, nil
	}

	response, err := client.VerifyEmail(ctx, &accountpkgv1.VerifyEmailRequest{
		Token: token,
	})

	if err != nil {
		bylogs.LogErr("VerifyEmail Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error VerifyEmail: %v", err),
		)
	} else {
		bylogs.LogInfo("VerifyEmail Client Sdk", "Success")
	}
	return response, nil
}

/*
	INVITATIONS
*/

func SendInvitationUser(req *accountpkgv1.SendInvitationUserRequest) (*accountpkgv1.SendInvitationUserResponse, error) {
	bylogs.LogInfo("SendInvitationUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.SendInvitationUser(ctx, req)
	if err != nil {
		bylogs.LogErr("SendInvitationUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error SendInvitationUser: %v", err),
		)
	} else {
		bylogs.LogInfo("SendInvitationUser Client Sdk", "Success")
	}
	return response, nil
}

func GetInvitationUser(req *accountpkgv1.GetInvitationUserRequest) (*accountpkgv1.GetInvitationUserResponse, error) {
	bylogs.LogInfo("GetInvitationUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetInvitationUser(ctx, req)
	if err != nil {
		bylogs.LogErr("GetInvitationUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error GetInvitationUser: %v", err),
		)
	} else {
		bylogs.LogInfo("GetInvitationUser Client Sdk", "Success")
	}
	return response, nil
}

func AgreeInvitationUser(req *accountpkgv1.AgreeInvitationUserRequest) (*accountpkgv1.AgreeInvitationUserResponse, error) {
	bylogs.LogInfo("AgreeInvitationUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.AgreeInvitationUser(ctx, req)
	if err != nil {
		bylogs.LogErr("AgreeInvitationUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error AgreeInvitationUser: %v", err),
		)
	} else {
		bylogs.LogInfo("AgreeInvitationUser Client Sdk", "Success")
	}
	return response, nil
}

func ListInvitationUser(req *accountpkgv1.ListInvitationUserRequest) (*accountpkgv1.ListInvitationUserResponse, error) {
	bylogs.LogInfo("ListInvitationUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListInvitationUser(ctx, req)
	if err != nil {
		bylogs.LogErr("ListInvitationUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error ListInvitationUser: %v", err),
		)
	} else {
		bylogs.LogInfo("ListInvitationUser Client Sdk", "Success")
	}
	return response, nil
}

/*
	AUTH
*/

func CreateUser(req *accountpkgv1.CreateUserRequest) (*accountpkgv1.CreateUserResponse, error) {
	bylogs.LogInfo("CreateUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateUser(ctx, req)
	if err != nil {
		bylogs.LogErr("CreateUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error CreateUser: %v", err),
		)
	} else {
		bylogs.LogInfo("CreateUser Client Sdk", "Success")
	}
	return response, nil
}

func ListUser(req *accountpkgv1.ListUserRequest) (*accountpkgv1.ListUserResponse, error) {
	bylogs.LogInfo("ListUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListUser(ctx, req)
	if err != nil {
		bylogs.LogErr("ListUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error ListUser: %v", err),
		)
	} else {
		bylogs.LogInfo("ListUser Client Sdk", "Success")
	}
	return response, nil
}

func GetOneUser(req *accountpkgv1.GetOneUserRequest) (*accountpkgv1.GetOneUserResponse, error) {
	bylogs.LogInfo("GetOneUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetOneUser(ctx, req)
	if err != nil {
		bylogs.LogErr("GetOneUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error GetOneUser: %v", err),
		)
	} else {
		bylogs.LogInfo("GetOneUser Client Sdk", "Success")
	}
	return response, nil
}

func UpdateUser(req *accountpkgv1.UpdateUserRequest) (*accountpkgv1.UpdateUserResponse, error) {
	bylogs.LogInfo("UpdateUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.UpdateUser(ctx, req)
	if err != nil {
		bylogs.LogErr("UpdateUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error UpdateUser: %v", err),
		)
	} else {
		bylogs.LogInfo("UpdateUser Client Sdk", "Success")
	}
	return response, nil
}

func DeleteUser(req *accountpkgv1.DeleteUserRequest) (*accountpkgv1.DeleteUserResponse, error) {
	bylogs.LogInfo("DeleteUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteUser(ctx, req)
	if err != nil {
		bylogs.LogErr("DeleteUser Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error DeleteUser: %v", err),
		)
	} else {
		bylogs.LogInfo("DeleteUser Client Sdk", "Success")
	}
	return response, nil
}

func ListUserPagination(req *accountpkgv1.ListUserPaginationRequest) (*accountpkgv1.ListUserPaginationResponse, error) {
	bylogs.LogInfo("ListUserPaginationRequest Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListUserPagination(ctx, req)
	if err != nil {
		bylogs.LogErr("ListUserPaginationRequest Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error ListUserPaginationRequest: %v", err),
		)
	} else {
		bylogs.LogInfo("ListUserPaginationRequest Client Sdk", "Success")
	}
	return response, nil
}

func GetUsersEmailFilter(req *accountpkgv1.GetUsersEmailFilterRequest) (*accountpkgv1.GetUsersEmailFilterResponse, error) {
	bylogs.LogInfo("GetUsersEmailFilter Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetUsersEmailFilter(ctx, req)
	if err != nil {
		bylogs.LogErr("GetUsersEmailFilter Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error GetUsersEmailFilter: %v", err),
		)
	} else {
		bylogs.LogInfo("GetUsersEmailFilter Client Sdk", "Success")
	}
	return response, nil
}

func GetListUserDex(req *accountpkgv1.GetListUserDexRequest) (*accountpkgv1.GetListUserDexResponse, error) {
	bylogs.LogInfo("GetListUserDex Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetListUserDex(ctx, req)
	if err != nil {
		bylogs.LogErr("GetListUserDex Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error GetListUserDex: %v", err),
		)
	} else {
		bylogs.LogInfo("GetListUserDex Client Sdk", "Success")
	}
	return response, nil
}

func GetOneUserDex(req *accountpkgv1.GetOneUserDexRequest) (*accountpkgv1.GetOneUserDexResponse, error) {
	bylogs.LogInfo("GetOneUserDex Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetOneUserDex(ctx, req)
	if err != nil {
		bylogs.LogErr("GetOneUserDex Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error GetOneUserDex: %v", err),
		)
	} else {
		bylogs.LogInfo("GetOneUserDex Client Sdk", "Success")
	}
	return response, nil
}
