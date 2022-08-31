package invitations

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/invitations"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client accountpkgv1.InvitationServiceClient
var doOnce sync.Once

var accountServiceUri string
var accountServiceTimeout string

func init() {
	doOnce.Do(func() {
		accountServiceTimeout = os.Getenv("ACCOUNT_SERVICE_TIMEOUT")
		if accountServiceTimeout == "" {
			accountServiceTimeout = "60s"
		}
		accountServiceUri = os.Getenv("ACCOUNT_SERVICE_URI")
		con, err := grpc.Dial(accountServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = accountpkgv1.NewInvitationServiceClient(con)
	})
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

func ListInvitationSend(req *accountpkgv1.ListInvitationSendRequest) (*accountpkgv1.ListInvitationSendResponse, error) {
	bylogs.LogInfo("ListInvitationUser Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	response, err := client.ListInvitationSend(ctx, req)
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
