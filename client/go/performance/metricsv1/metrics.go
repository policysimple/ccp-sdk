package metricsclientv1

import (
	"os"
	"sync"

	metricsgpkgv1 "github.com/cuemby/ccp-sdk/gen/go/performance/metrics/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client metricsgpkgv1.MetricsAgentAPIServiceClient
var doOnce sync.Once

var metricsServiceUri string
var metricsServiceTimeout string

func init() {
	doOnce.Do(func() {
		metricsServiceTimeout = os.Getenv("METRICS_SERVICE_TIMEOUT")
		if metricsServiceTimeout == "" {
			metricsServiceTimeout = "30s"
		}
		metricsServiceUri = os.Getenv("METRICS_SERVICE_URI")
		con, err := grpc.Dial(metricsServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = metricsgpkgv1.NewMetricsAgentAPIServiceClient(con)
	})
}
