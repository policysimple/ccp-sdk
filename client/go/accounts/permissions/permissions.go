package permissions

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"

	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/permissions"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client accountpkgv1.PermissionServiceClient
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
		client = accountpkgv1.NewPermissionServiceClient(con)
	})
}

func CreatePermission(req *accountpkgv1.CreatePermissionRequest) (*accountpkgv1.CreatePermissionResponse, error) {
	bylogs.LogInfo("CreatePermission Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreatePermission(ctx, req)
	if err != nil {
		bylogs.LogErr("CreatePermission Client Sdk", err)
		return nil, fmt.Errorf("[CreatePermission] %w", err)
	}
	bylogs.LogInfo("CreatePermission Client Sdk", "Success")
	return response, nil
}

func ListPermission(req *accountpkgv1.ListPermissionRequest) (*accountpkgv1.ListPermissionResponse, error) {
	bylogs.LogInfo("ListPermission Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListPermission(ctx, req)

	if err != nil {
		bylogs.LogErr("ListPermission Client Sdk", err)
		return nil, fmt.Errorf("[ListPermission] %w", err)
	}
	bylogs.LogInfo("ListPermission Client Sdk", "Success")
	return response, nil
}

func GetOnePermission(req *accountpkgv1.GetOnePermissionRequest) (*accountpkgv1.GetOnePermissionResponse, error) {
	bylogs.LogInfo("ListPermission Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetOnePermission(ctx, req)

	if err != nil {
		bylogs.LogErr("GetOnePermission Client Sdk", err)
		return nil, fmt.Errorf("[GetOnePermission] %w", err)

	}
	bylogs.LogInfo("GetOnePermission Client Sdk", "Success")
	return response, nil
}

func UpdatePermission(req *accountpkgv1.UpdatePermissionRequest) (*accountpkgv1.UpdatePermissionResponse, error) {
	bylogs.LogInfo("UpdatePermission Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.UpdatePermission(ctx, req)

	if err != nil {
		bylogs.LogErr("UpdatePermission Client Sdk", err)
		return nil, fmt.Errorf("[UpdatePermission] %w", err)

	}
	bylogs.LogInfo("UpdatePermission Client Sdk", "Success")
	return response, nil
}

func DeletePermission(req *accountpkgv1.DeletePermissionRequest) (*accountpkgv1.DeletePermissionResponse, error) {
	bylogs.LogInfo("DeletePermission Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeletePermission(ctx, req)
	if err != nil {
		bylogs.LogErr("DeletePermission Client Sdk", err)
		return nil, fmt.Errorf("[DeletePermission] %w", err)

	}
	bylogs.LogInfo("DeletePermission Client Sdk", "Success")
	return response, nil
}
