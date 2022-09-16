<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/metrics/v1alpha1/metrics_api.proto

namespace GPBMetadata\Performance\Metrics\V1Alpha1;

class MetricsApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Performance\Metrics\V1Alpha1\Metrics::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
.performance/metrics/v1alpha1/metrics_api.protoperformance.metrics.v1alpha1"Y
Range
	date_from (	RdateFrom
date_to (	RdateTo
timezone (	Rtimezone"�
GetMetricsRequestS
labels (2;.performance.metrics.v1alpha1.GetMetricsRequest.LabelsEntryRlabels

containers (	R
containersI
interval (2-.performance.metrics.v1alpha1.MetricsIntervalRinterval9
range (2#.performance.metrics.v1alpha1.RangeRrange
page (Rpage
size (Rsize9
LabelsEntry
key (	Rkey
value (	Rvalue:8"�
GetMetricsResponse@
memory (2(.performance.metrics.v1alpha1.MetricItemRmemory:
cpu (2(.performance.metrics.v1alpha1.MetricItemRcpu"�
GetTektonMetricsRequest*
name_pipeline_run (	RnamePipelineRun9
range (2#.performance.metrics.v1alpha1.RangeRrange
page (Rpage
size (Rsize"d
GetTektonMetricsResponseH
results (2..performance.metrics.v1alpha1.TektonMetricItemRresults*�
MetricsInterval 
METRICS_INTERVAL_UNSPECIFIED 
METRICS_INTERVAL_1_MUNITE
METRICS_INTERVAL_5_MUNITES
METRICS_INTERVAL_15_MUNITES
METRICS_INTERVAL_30_MUNITES
METRICS_INTERVAL_1_HOUR
METRICS_INTERVAL_12_HOURS
METRICS_INTERVAL_1_DAY
METRICS_INTERVAL_1_WEEK2�
MetricsAPIServiceq

GetMetrics/.performance.metrics.v1alpha1.GetMetricsRequest0.performance.metrics.v1alpha1.GetMetricsResponse" �
GetTektonMetrics5.performance.metrics.v1alpha1.GetTektonMetricsRequest6.performance.metrics.v1alpha1.GetTektonMetricsResponse" B�
&io.cuemby.performance.metrics.v1alpha1BMetricsApiProtoPZ/github.com/performance-grpc-sdk/metricsv1alpha1�PFX�Performance.Metrics.V1Alpha1�Performance\\Metrics\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

