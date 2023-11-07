package environmentclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	runtimepkgv1 "github.com/cuemby/ccp-sdk/gen/go/pipelines/runtime/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client runtimepkgv1.RuntimeAPIServiceClient
var doOnce sync.Once

var runtimeServiceUri string
var runtimeServiceTimeout string

func init() {
	doOnce.Do(func() {
		runtimeServiceTimeout = os.Getenv("RUNTIME_SERVICE_TIMEOUT")
		if runtimeServiceTimeout == "" {
			runtimeServiceTimeout = "30s"
		}
		runtimeServiceUri = os.Getenv("RUNTIME_SERVICE_URI")
		con, err := grpc.Dial(runtimeServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = runtimepkgv1.NewRuntimeAPIServiceClient(con)
	})
}

func CreateRuntime(in *runtimepkgv1.CreateRuntimeRequest) (response *runtimepkgv1.CreateRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateRuntime(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "error create runtime", err)
		return nil, fmt.Errorf("[CreateRuntime] %w", err)
	}
	return response, nil
}

func GetRuntime(in *runtimepkgv1.GetRuntimeRequest) (response *runtimepkgv1.GetRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetRuntime(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "error get runtime", err)
		return nil, fmt.Errorf("[GetRuntime] %w", err)
	}
	return response, nil
}

func UpdateRuntime(in *runtimepkgv1.UpdateRuntimeRequest) (response *runtimepkgv1.UpdateRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdateRuntime(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "error update runtime", err)
		return nil, fmt.Errorf("[UpdateRuntime] %w", err)
	}
	return response, nil
}

func UpdateResponseMessageRuntime(in *runtimepkgv1.UpdateResponseMessageRuntimeRequest) (response *runtimepkgv1.UpdateResponseMessageRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdateResponseMessageRuntime(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "error update runtime", err)
		return nil, fmt.Errorf("[UpdateResponseMessageRuntime] %w", err)
	}
	return response, nil
}

func DeleteRuntime(in *runtimepkgv1.DeleteRuntimeRequest) (response *runtimepkgv1.DeleteRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteRuntime(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error delete runtime", err)
		return nil, fmt.Errorf("[DeleteRuntime] %w", err)
	}
	return response, nil
}

func DeleteRuntimesByApplication(in *runtimepkgv1.DeleteRuntimesByApplicationRequest) (response *runtimepkgv1.DeleteRuntimesByApplicationResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteRuntimesByApplication(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error delete runtime", err)
		return nil, fmt.Errorf("[DeleteRuntimesByApplication] %w", err)

	}
	return response, nil
}

func DeleteRuntimesByEnvironment(in *runtimepkgv1.DeleteRuntimesByEnvironmentRequest) (response *runtimepkgv1.DeleteRuntimesByEnvironmentResponse, err error) {
	bylogs.LogInfo("delete runtimes by environment client sdk")
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteRuntimesByEnvironment(ctx, in)

	if err != nil {
		bylogs.LogErr("error delete runtimes by environment: ", err)
		return nil, fmt.Errorf("[DeleteRuntimesByEnvironment] %w", err)

	}
	return response, nil
}

func ListRuntimes(in *runtimepkgv1.ListRuntimesRequest) (response *runtimepkgv1.ListRuntimesResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListRuntimes(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error list runtime", err)
		return nil, fmt.Errorf("[ListRuntimes] %w", err)
	}
	return response, nil
}

func RebuildRuntime(in *runtimepkgv1.RebuildRuntimeRequest) (response *runtimepkgv1.RebuildRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.RebuildRuntime(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "error Rebuild runtime", err)
		return nil, fmt.Errorf("[RebuildRuntime] %w", err)
	}
	return response, nil
}

func AlreadyExistsRuntime(in *runtimepkgv1.AlreadyExistsRuntimeRequest) (response *runtimepkgv1.AlreadyExistsRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.AlreadyExistsRuntime(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "error Already Exists Runtime", err)
		return nil, fmt.Errorf("[AlreadyExistsRuntime] %w", err)
	}
	return response, nil
}

func GetRuntimesInLast24Hours(in *runtimepkgv1.GetRuntimesInLast24HoursRequest) (response *runtimepkgv1.GetRuntimesInLast24HoursResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetRuntimesInLast24Hours(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error getting runtimes", err)
		return nil, fmt.Errorf("[GetRuntimesInLast24Hours] %w", err)
	}
	return response, nil
}

func GetRuntimesByApplication(in *runtimepkgv1.GetRuntimesByApplicationRequest) (response *runtimepkgv1.GetRuntimesByApplicationResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetRuntimesByApplication(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error getting runtimes by apps", err)
		return nil, fmt.Errorf("[GetRuntimesByApplication] %w", err)
	}
	return response, nil
}

func ChangeStatusRuntimeAndApplication(in *runtimepkgv1.ChangeStatusRuntimeAndApplicationRequest) (response *runtimepkgv1.ChangeStatusRuntimeAndApplicationResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ChangeStatusRuntimeAndApplication(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error getting runtimes by apps", err)
		return nil, fmt.Errorf("[ChangeStatusRuntimeAndApplication] %w", err)
	}
	return response, nil
}

func UpdateApplicationChanges(in *runtimepkgv1.UpdateApplicationChangesRequest) (response *runtimepkgv1.UpdateApplicationChangesResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdateApplicationChanges(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error updating runtimes by apps changes", err)
		return nil, fmt.Errorf("[UpdateApplicationChanges] %w", err)
	}
	return response, nil
}
