package metricsclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	metricsgpkgv1 "github.com/cuemby/ccp-sdk/gen/go/performance/metrics/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client metricsgpkgv1.MetricsAPIServiceClient
var doOnce sync.Once

var metricsServiceUri string
var metricsServiceTimeout string

func init() {
	doOnce.Do(func() {
		metricsServiceTimeout = os.Getenv("PERFORMANCE_METRICS_SERVICE_TIMEOUT")
		if metricsServiceTimeout == "" {
			metricsServiceTimeout = "30s"
		}
		metricsServiceUri = os.Getenv("PERFORMANCE_METRICS_SERVICE_URI")
		con, err := grpc.Dial(metricsServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = metricsgpkgv1.NewMetricsAPIServiceClient(con)
	})
}
func GetMetrics(getMetrics *metricsgpkgv1.GetMetricsRequest) (response *metricsgpkgv1.GetMetricsResponse, err error) {
	d, err := time.ParseDuration(metricsServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetMetrics(ctx, getMetrics)
	if err != nil {
		log.Printf("%s: %v", "Error get metrics", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get metrics", err),
		)
	}
	return response, nil
}

func GetTektonMetrics(GetTektonMetrics *metricsgpkgv1.GetTektonMetricsRequest) (response *metricsgpkgv1.GetTektonMetricsResponse, err error) {
	d, err := time.ParseDuration(metricsServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetTektonMetrics(ctx, &metricsgpkgv1.GetTektonMetricsRequest{
		NamePipelineRun: GetTektonMetrics.NamePipelineRun,
		Range:           GetTektonMetrics.Range,
		Page:            GetTektonMetrics.Page,
		Size:            GetTektonMetrics.Size,
	})
	if err != nil {
		log.Printf("%s: %v", "Error get metrics", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get metrics", err),
		)
	}
	return response, nil
}
