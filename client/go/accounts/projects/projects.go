package projects

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"

	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/projects"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client accountpkgv1.ProjectServiceClient
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
		client = accountpkgv1.NewProjectServiceClient(con)

	})

}

func CreateProject(req *accountpkgv1.CreateProjectRequest) (*accountpkgv1.CreateProjectResponse, error) {
	bylogs.LogInfo("CreateProject Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateProject(ctx, req)

	if err != nil {
		bylogs.LogErr("CreateProject Client Sdk", err)
		return nil, fmt.Errorf("[CreateProject] %w", err)
	} else {
		bylogs.LogInfo("CreateProject Client Sdk", "Success")
	}
	return response, nil
}

func DeleteProject(req *accountpkgv1.DeleteProjectRequest) (*accountpkgv1.DeleteProjectResponse, error) {
	bylogs.LogInfo("DeleteProject Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteProject(ctx, req)
	if err != nil {
		bylogs.LogErr("DeleteProject Client Sdk", err)
		return nil, fmt.Errorf("[DeleteProject] %w", err)
	}

	bylogs.LogInfo("DeleteProject Client Sdk", "Success")
	return response, nil
}

func DeleteUserByProject(req *accountpkgv1.DeleteUserByProjectRequest) (*accountpkgv1.DeleteUserByProjectResponse, error) {
	bylogs.LogInfo("DeleteUserByProject Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteUserByProject(ctx, req)
	if err != nil {
		bylogs.LogErr("DeleteUserByProject Client Sdk", err)
		return nil, fmt.Errorf("[DeleteUserByProject] %w", err)
	}
	bylogs.LogInfo("DeleteUserByProject Client Sdk", "Success")

	return response, nil
}

func EditRoleUserByProject(req *accountpkgv1.EditRoleUserByProjectRequest) (*accountpkgv1.EditRoleUserByProjectResponse, error) {

	bylogs.LogInfo("EditRoleUserByProject Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.EditRoleUserByProject(ctx, req)
	if err != nil {
		bylogs.LogErr("EditRoleUserByProject Client Sdk", err)
		return nil, fmt.Errorf("[EditRoleUserByProject] %w", err)

	}
	bylogs.LogInfo("EditRoleUserByProject Client Sdk", "Success")

	return response, nil
}

func ListProject(req *accountpkgv1.ListProjectRequest) (*accountpkgv1.ListProjectResponse, error) {
	bylogs.LogInfo("ListProject Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListProject(ctx, req)
	if err != nil {
		bylogs.LogErr("ListProject Client Sdk", err)
		return nil, fmt.Errorf("[ListProject] %w", err)
	}
	bylogs.LogInfo("ListProject Client Sdk", "Success")

	return response, nil
}

func UpdateProject(req *accountpkgv1.UpdateProjectRequest) (*accountpkgv1.UpdateProjectResponse, error) {
	bylogs.LogInfo("UpdateProject Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.UpdateProject(ctx, req)
	if err != nil {
		bylogs.LogErr("ListProject Client Sdk", err)
		return nil, fmt.Errorf("[UpdateProject] %w", err)

	}
	bylogs.LogInfo("UpdateProject Client Sdk", "Success")
	return response, nil
}

func ListProjectPagination(req *accountpkgv1.ListProjectPaginationRequest) (*accountpkgv1.ListProjectPaginationResponse, error) {
	bylogs.LogInfo("ListProjectPagination Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListProjectPagination(ctx, req)
	if err != nil {
		bylogs.LogErr("ListProjectPagination Client Sdk", err)
		return nil, fmt.Errorf("[ListProjectPagination] %w", err)

	}
	bylogs.LogInfo("ListProjectPagination Client Sdk", "Success")

	return response, nil
}

func GetOneProject(req *accountpkgv1.GetOneProjectRequest) (*accountpkgv1.GetOneProjectResponse, error) {
	bylogs.LogInfo("GetOneProject Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetOneProject(ctx, req)
	if err != nil {
		bylogs.LogErr("GetOneProject Client Sdk", err)
		return nil, fmt.Errorf("[GetOneProject] %w", err)

	}
	bylogs.LogInfo("GetOneProject Client Sdk", "Success")
	return response, nil
}
