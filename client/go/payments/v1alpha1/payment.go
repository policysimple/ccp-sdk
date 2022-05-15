package paymentclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	paymentpkgv1 "github.com/cuemby/ccp-sdk/gen/go/payment/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client paymentpkgv1.PaymentAPIServiceClient
var doOnce sync.Once

var paymentServiceUri string
var paymentServiceTimeout string

func init() {
	doOnce.Do(func() {
		paymentServiceTimeout = os.Getenv("PAYMENT_SERVICE_TIMEOUT")
		if paymentServiceTimeout == "" {
			paymentServiceTimeout = "30s"
		}
		paymentServiceUri = os.Getenv("PAYMENT_SERVICE_URI")
		con, err := grpc.Dial(paymentServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = paymentpkgv1.NewPaymentAPIServiceClient(con)
	})
}

func CreateCustomer(in *paymentpkgv1.CreateCustomerRequest) (response *paymentpkgv1.CreateCustomerResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateCustomer(ctx, &paymentpkgv1.CreateCustomerRequest{
		Customer: in.Customer,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create customer", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create customer", err),
		)
	}
	return response, nil
}
