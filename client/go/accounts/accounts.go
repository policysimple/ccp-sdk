package accountsclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client accountpkgv1.AccountServiceClient
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
		client = accountpkgv1.NewAccountServiceClient(con)
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

func DeleteOrganization() (*accountpkgv1.DeleteOrganizationResponse, error) {
	bylogs.LogInfo("DeleteOrganization Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteOrganization(ctx, &accountpkgv1.DeleteOrganizationRequest{})

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
