import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import {
  ListSentimentDetectionJobsCommand,
  ListSentimentDetectionJobsCommandInput,
  ListSentimentDetectionJobsCommandOutput,
} from "../commands/ListSentimentDetectionJobsCommand";
import { ComprehendPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListSentimentDetectionJobsCommandInput,
  ...args: any
): Promise<ListSentimentDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSentimentDetectionJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Comprehend,
  input: ListSentimentDetectionJobsCommandInput,
  ...args: any
): Promise<ListSentimentDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listSentimentDetectionJobs(input, ...args);
};
export async function* listSentimentDetectionJobsPaginate(
  config: ComprehendPaginationConfiguration,
  input: ListSentimentDetectionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListSentimentDetectionJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSentimentDetectionJobsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Comprehend) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
