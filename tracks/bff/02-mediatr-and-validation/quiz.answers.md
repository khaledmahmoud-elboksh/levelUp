# Answers: Controllers send a request, handlers do the work

1. The FluentValidation ValidationBehavior in the MediatR pipeline.

2. IMediator. It sends a request type and returns the result.

3. Next to its handler in the Application project, as an IRequest.
