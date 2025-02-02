import { ManagedPolicy } from '@aws-cdk/aws-iam';

/**
 * The properties for defining a Managed Endpoint
 * The interface is used to create a managed Endpoint which can be leveraged by multiple users
 */
export interface NotebookManagedEndpointOptions {
  /**
     * The version of Amazon EMR to deploy
     * */
  readonly emrOnEksVersion?: string;

  /**
     * The JSON configuration overrides for Amazon EMR on EKS configuration attached to the managed endpoint
     * an example can be found [here]
     * (https://github.com/aws-samples/aws-analytics-reference-architecture/blob/main/core/src/emr-eks-data-platform/resources/k8s/emr-eks-config/critical.json)
     */
  readonly configurationOverrides?: string;

  /**
     * The name of the policy to be used for the execution Role to pass to ManagedEndpoint,
     * this role should allow access to any resource needed for the job including: Amazon S3 buckets, Amazon DynamoDB, AWS Glue Data Catalog
     * */
  readonly executionPolicy: ManagedPolicy;
}
