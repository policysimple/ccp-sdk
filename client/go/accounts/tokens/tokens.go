package tokens

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/tokens"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client accountpkgv1.TokenServiceClient
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
		client = accountpkgv1.NewTokenServiceClient(con)

	})
}

func CreateTokenCCP(req *accountpkgv1.CreateTokenCCPRequest) (*accountpkgv1.CreateTokenCCPResponse, error) {
	bylogs.LogInfo("CreateTokenCCP Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateTokenCCP(ctx, req)

	if err != nil {
		bylogs.LogErr("CreateTokenCCP Client Sdk", err)
		return nil, fmt.Errorf("[CreateTokenCCP] %w", err)
	}
	bylogs.LogInfo("CreateTokenCCP Client Sdk", "Success")
	return response, nil

}

func EnableOrDisableMFA(userId string) (*accountpkgv1.EnableOrDisableMFAResponse, error) {
	bylogs.LogInfo("EnableOrDisableMFA Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	if userId == "" {
		return nil, status.Error(codes.InvalidArgument, "UerId is required")

	}

	response, err := client.EnableOrDisableMFA(ctx, &accountpkgv1.EnableOrDisableMFARequest{
		UserId: userId,
	})

	if err != nil {
		bylogs.LogErr("EnableOrDisableMFA Client Sdk", err)
		return nil, fmt.Errorf("[EnableOrDisableMFA] %w", err)
	}
	bylogs.LogInfo("EnableOrDisableMFA Client Sdk", "Success")
	return response, nil
}

func GetOneTokenCCP(token string) (*accountpkgv1.GetOneTokenCCPResponse, error) {
	bylogs.LogInfo("GetOneTokenCCP Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	if token == "" {
		return nil, status.Error(codes.InvalidArgument, "Token is required")
	}

	response, err := client.GetOneTokenCCP(ctx, &accountpkgv1.GetOneTokenCCPRequest{Token: token})

	if err != nil {
		bylogs.LogErr("GetOneTokenCCP Client Sdk", err)
		return nil, fmt.Errorf("[GetOneTokenCCP] %w", err)

	}
	bylogs.LogInfo("GetOneTokenCCP Client Sdk", "Success")
	return response, nil
}

func MFA(req *accountpkgv1.MFARequest) (*accountpkgv1.MFAResponse, error) {
	bylogs.LogInfo("MFA Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.MFA(ctx, req)
	if err != nil {
		bylogs.LogErr("MFA Client Sdk", err)
		return nil, fmt.Errorf("[MFA] %w", err)

	}
	bylogs.LogInfo("MFA Client Sdk", "Success")
	return response, nil
}

func Logs(userId string) (*accountpkgv1.LogsResponse, error) {
	bylogs.LogInfo("Logs Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	if userId == "" {
		return nil, status.Error(codes.InvalidArgument, "Token is required")
	}

	response, err := client.Logs(ctx, &accountpkgv1.LogsRequest{UserId: userId})
	if err != nil {
		bylogs.LogErr("Logs Client Sdk", err)
		return nil, fmt.Errorf("[Logs] %w", err)

	}
	bylogs.LogInfo("Logs Client Sdk", "Success")
	return response, nil
}

func SaveLogs(log *accountpkgv1.Log) (*accountpkgv1.SaveLogsResponse, error) {
	bylogs.LogInfo("SaveLogs Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.SaveLogs(ctx, &accountpkgv1.SaveLogsRequest{Log: log})

	if err != nil {
		bylogs.LogErr("SaveLogs Client Sdk", err)
		return nil, fmt.Errorf("[SaveLogs] %w", err)

	}
	bylogs.LogInfo("SaveLogs Client Sdk", "Success")
	return response, nil
}
