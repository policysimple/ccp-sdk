package logsclientv1

import (
	"os"
	"sync"

	logsgpkgv1 "github.com/cuemby/ccp-sdk/gen/go/performance/logs/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client logsgpkgv1.LogsAgentAPIServiceClient
var doOnce sync.Once

var logsServiceUri string
var logsServiceTimeout string

func init() {
	doOnce.Do(func() {
		logsServiceTimeout = os.Getenv("LOGS_SERVICE_TIMEOUT")
		if logsServiceTimeout == "" {
			logsServiceTimeout = "30s"
		}
		logsServiceUri = os.Getenv("RUNTIME_SERVICE_URI")
		con, err := grpc.Dial(logsServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = logsgpkgv1.NewLogsAgentAPIServiceClient(con)
	})
}
