package logsclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	logsgpkgv1 "github.com/cuemby/ccp-sdk/gen/go/performance/logs/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client logsgpkgv1.LogsAPIServiceClient
var doOnce sync.Once

var logsServiceUri string
var logsServiceTimeout string

func init() {
	doOnce.Do(func() {
		logsServiceTimeout = os.Getenv("PERFORMANCE_LOG_SERVICE_TIMEOUT")
		if logsServiceTimeout == "" {
			logsServiceTimeout = "30s"
		}
		logsServiceUri = os.Getenv("PERFORMANCE_LOGS_SERVICE_URI")
		con, err := grpc.Dial(logsServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = logsgpkgv1.NewLogsAPIServiceClient(con)
	})
}

func GetLogs(getLogs *logsgpkgv1.GetLogsRequest) (response *logsgpkgv1.GetLogsResponse, err error) {
	d, err := time.ParseDuration(logsServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetLogs(ctx, &logsgpkgv1.GetLogsRequest{
		Labels:     getLogs.Labels,
		Containers: getLogs.Containers,
		Range:      getLogs.Range,
		Size:       getLogs.Size,
		NextPageId: getLogs.NextPageId,
	})
	if err != nil {
		log.Printf("%s: %v", "Error get logs", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get Logs", err),
		)
	}
	return response, nil
}
