import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { AssociateQualificationWithWorkerRequest, AssociateQualificationWithWorkerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateQualificationWithWorkerCommand,
  serializeAws_json1_1AssociateQualificationWithWorkerCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type AssociateQualificationWithWorkerCommandInput = AssociateQualificationWithWorkerRequest;
export type AssociateQualificationWithWorkerCommandOutput = AssociateQualificationWithWorkerResponse & __MetadataBearer;

export class AssociateQualificationWithWorkerCommand extends $Command<
  AssociateQualificationWithWorkerCommandInput,
  AssociateQualificationWithWorkerCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateQualificationWithWorkerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateQualificationWithWorkerCommandInput, AssociateQualificationWithWorkerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AssociateQualificationWithWorkerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateQualificationWithWorkerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateQualificationWithWorkerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateQualificationWithWorkerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateQualificationWithWorkerCommandOutput> {
    return deserializeAws_json1_1AssociateQualificationWithWorkerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
