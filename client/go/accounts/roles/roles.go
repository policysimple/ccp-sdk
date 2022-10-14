package roles

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"

	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/roles"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client accountpkgv1.RoleServiceClient
var doOnce sync.Once

var accountServiceUri string
var accountServiceTimeout string

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
		client = accountpkgv1.NewRoleServiceClient(con)
	})

}

func CreateRole(req *accountpkgv1.CreateRoleRequest) (*accountpkgv1.CreateRoleResponse, error) {
	bylogs.LogInfo("CreateRole Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateRole(ctx, req)
	if err != nil {
		bylogs.LogErr("CreateRole Client Sdk", err)
		return nil, fmt.Errorf("[CreateRole] %w", err)

	}
	bylogs.LogInfo("CreateRole Client Sdk", "Success")
	return response, nil
}

func ListRoles(req *accountpkgv1.ListRolesRequest) (*accountpkgv1.ListRolesResponse, error) {
	bylogs.LogInfo("ListRoles Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListRoles(ctx, req)
	if err != nil {
		bylogs.LogErr("CreateRole Client Sdk", err)
		return nil, fmt.Errorf("[ListRoles] %w", err)
	}
	bylogs.LogInfo("ListRoles Client Sdk", "Success")
	return response, nil
}

func UpdateRole(req *accountpkgv1.UpdateRoleRequest) (*accountpkgv1.UpdateRoleResponse, error) {
	bylogs.LogInfo("UpdateRole Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.UpdateRole(ctx, req)
	if err != nil {
		bylogs.LogErr("UpdateRole Client Sdk", err)
		return nil, fmt.Errorf("[UpdateRole] %w", err)

	} else {
		bylogs.LogInfo("UpdateRole Client Sdk", "Success")
	}
	return response, nil
}

func GetOneRole(req *accountpkgv1.GetOneRoleRequest) (*accountpkgv1.GetOneRoleResponse, error) {
	bylogs.LogInfo("GetOneRole Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetOneRole(ctx, req)
	if err != nil {
		bylogs.LogErr("GetOneRole Client Sdk", err)
		return nil, fmt.Errorf("[GetOneRole] %w", err)

	}
	bylogs.LogInfo("GetOneRole Client Sdk", "Success")
	return response, nil
}

func DeleteRole(req *accountpkgv1.DeleteRoleRequest) (*accountpkgv1.DeleteRoleResponse, error) {
	bylogs.LogInfo("DeleteRole Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteRole(ctx, req)
	if err != nil {
		bylogs.LogErr("DeleteRole Client Sdk", err)
		return nil, fmt.Errorf("[DeleteRole] %w", err)

	}
	bylogs.LogInfo("DeleteRole Client Sdk", "Success")
	return response, nil
}

/*
	GET BY
*/

func GetRolesByUser(req *accountpkgv1.GetRolesByUserRequest) (*accountpkgv1.GetRolesByUserResponse, error) {
	bylogs.LogInfo("GetRolesByUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetRolesByUser(ctx, req)
	if err != nil {
		bylogs.LogErr("GetRolesByUser Client Sdk", err)
		return nil, fmt.Errorf("[GetRolesByUser] %w", err)

	}
	bylogs.LogInfo("GetRolesByUser Client Sdk", "Success")
	return response, nil
}

func GetRolesByOrgUser(req *accountpkgv1.GetRolesByOrgUserRequest) (*accountpkgv1.GetRolesByOrgUserResponse, error) {
	bylogs.LogInfo("GetRolesByOrgUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetRolesByOrgUser(ctx, req)
	if err != nil {
		bylogs.LogErr("GetRolesByOrgUser Client Sdk", err)
		return nil, fmt.Errorf("[GetRolesByOrgUser] %w", err)

	}
	bylogs.LogInfo("GetRolesByOrgUser Client Sdk", "Success")
	return response, nil
}
