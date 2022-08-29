package organizations

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/organizations"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client accountpkgv1.OrganizationServiceClient
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
		client = accountpkgv1.NewOrganizationServiceClient(con)
	})
}

func ListOrganization() (*accountpkgv1.ListOrganizationResponse, error) {
	bylogs.LogInfo("ListOrganization Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListOrganization(ctx, &accountpkgv1.ListOrganizationRequest{})

	if err != nil {
		bylogs.LogErr("ListOrganization Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error list Organization: %v", err),
		)
	} else {
		bylogs.LogInfo("ListOrganization Client Sdk", "Success")
	}

	return response, nil
}

func DeleteOrganization(organizationId uint32) (*accountpkgv1.DeleteOrganizationResponse, error) {
	bylogs.LogInfo("DeleteOrganization Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteOrganization(ctx, &accountpkgv1.DeleteOrganizationRequest{
		OrganizationId: organizationId,
	})

	if err != nil {
		bylogs.LogErr("DeleteOrganization Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error delete Organization: %v", err),
		)
	} else {
		bylogs.LogInfo("DeleteOrganization Client Sdk", "Success")
	}

	return response, nil
}

func GetOneOrganization(req *accountpkgv1.GetOneOrganizationRequest) (*accountpkgv1.GetOneOrganizationResponse, error) {
	bylogs.LogInfo("GetOneOrganization Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetOneOrganization(ctx, req)

	if err != nil {
		bylogs.LogErr("GetOneOrganization Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error delete Organization: %v", err),
		)
	} else {
		bylogs.LogInfo("GetOneOrganization Client Sdk", "Success")
	}

	return response, nil
}

func CreateOrganization(req *accountpkgv1.CreateOrganizationRequest) (*accountpkgv1.CreateOrganizationResponse, error) {
	bylogs.LogInfo("GetOneOrganization Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateOrganization(ctx, req)

	if err != nil {
		bylogs.LogErr("CreateOrganization Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error create Organization: %v", err),
		)
	} else {
		bylogs.LogInfo("CreateOrganization Client Sdk", "Success")
	}

	return response, nil
}

func UpdateOrganization(req *accountpkgv1.UpdateOrganizationRequest) (*accountpkgv1.UpdateOrganizationResponse, error) {
	bylogs.LogInfo("UpdateOrganization Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.UpdateOrganization(ctx, req)

	if err != nil {
		bylogs.LogErr("UpdateOrganization Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error UpdateOrganization: %v", err),
		)
	} else {
		bylogs.LogInfo("UpdateOrganization Client Sdk", "Success")
	}

	return response, nil
}