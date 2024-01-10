package countries

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"

	accountpkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/countries"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client accountpkgv1.CountriesServiceClient
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
		client = accountpkgv1.NewCountriesServiceClient(con)
	})

}

func ListCountries(req *accountpkgv1.ListCountriesRequest) (*accountpkgv1.ListCountriesResponse, error) {
	bylogs.LogInfo("ListCountries Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListCountries(ctx, req)
	if err != nil {
		bylogs.LogErr("ListCountries Client Sdk", err)
		return nil, fmt.Errorf("[ListCountries] %w", err)

	}
	bylogs.LogInfo("ListCountries Client Sdk", "Success")
	return response, nil
}

func GetOneCountry(req *accountpkgv1.GetOneCountryRequest) (*accountpkgv1.GetOneCountryResponse, error) {
	bylogs.LogInfo("GetOneCountry Client Sdk")
	d, err := time.ParseDuration(accountServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetOneCountry(ctx, req)
	if err != nil {
		bylogs.LogErr("GetOneCountry Client Sdk", err)
		return nil, fmt.Errorf("[GetOneCountry] %w", err)

	}
	bylogs.LogInfo("GetOneCountry Client Sdk", "Success")
	return response, nil
}
