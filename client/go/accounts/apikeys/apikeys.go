package roles

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"

	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/apikeys"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client accountpkgv1.ApiKeyServiceClient
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
		client = accountpkgv1.NewApiKeyServiceClient(con)

	})

}

func CreateApiKey(req *accountpkgv1.CreateApiKeyRequest) (*accountpkgv1.CreateApiKeyResponse, error) {
	bylogs.LogInfo("CreateApiKey Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateApiKey(ctx, req)
	if err != nil {
		bylogs.LogErr("CreateApiKey Client Sdk", err)
		return nil, fmt.Errorf("[CreateApiKey] %w", err)

	}
	bylogs.LogInfo("CreateApiKey Client Sdk", "Success")
	return response, nil
}

func GetOneApiKey(req *accountpkgv1.GetOneApiKeyRequest) (*accountpkgv1.GetOneApiKeyResponse, error) {
	bylogs.LogInfo("GetOneApiKey Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetOneApiKey(ctx, req)
	if err != nil {
		bylogs.LogErr("GetOneApiKey Client Sdk", err)
		return nil, fmt.Errorf("[GetOneApiKey] %w", err)

	}
	bylogs.LogInfo("GetOneApiKey Client Sdk", "Success")
	return response, nil
}

func ListApiKey(req *accountpkgv1.ListApiKeyRequest) (*accountpkgv1.ListApiKeyResponse, error) {
	bylogs.LogInfo("ListApiKey Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListApiKey(ctx, req)
	if err != nil {
		bylogs.LogErr("ListApiKey Client Sdk", err)
		return nil, fmt.Errorf("[ListApiKey] %w", err)
	}
	bylogs.LogInfo("ListApiKey Client Sdk", "Success")
	return response, nil
}

func UpdateApiKey(req *accountpkgv1.UpdateApiKeyRequest) (*accountpkgv1.UpdateApiKeyResponse, error) {
	bylogs.LogInfo("UpdateApiKey Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.UpdateApiKey(ctx, req)
	if err != nil {
		bylogs.LogErr("UpdateApiKey Client Sdk", err)
		return nil, fmt.Errorf("[UpdateApiKey] %w", err)

	}
	bylogs.LogInfo("UpdateApiKey Client Sdk", "Success")
	return response, nil
}

func DeleteApiKey(req *accountpkgv1.DeleteApiKeyRequest) (*accountpkgv1.DeleteApiKeyResponse, error) {
	bylogs.LogInfo("DeleteApiKey Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteApiKey(ctx, req)
	if err != nil {
		bylogs.LogErr("DeleteApiKey Client Sdk", err)
		return nil, fmt.Errorf("[DeleteApiKey] %w", err)

	}
	bylogs.LogInfo("DeleteApiKey Client Sdk", "Success")
	return response, nil
}
