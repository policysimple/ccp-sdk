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
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error create runtime", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error get runtime", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error update runtime", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error update runtime", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete runtime", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete runtime", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete runtimes by environment", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list runtime", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error Rebuild runtime", err),
		)
	}
	return response, nil
}
