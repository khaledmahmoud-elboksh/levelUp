# Controllers send a request, handlers do the work

HTTP adapters stay thin so validation and rules can be tested without the host. MediatR plus FluentValidation is the pipeline.

## Where it lives

- `dsq.programcenter.bff/src/DSQ.ProgramCenter.Bff.Application/DependencyInjection.cs` registers MediatR and FluentValidation.
- `AuthController` and `RolesController` inject `IMediator` and `Send` a command or query.
- Handlers such as `RoleHandlers.cs` implement `IRequestHandler`.
- Packages: MediatR 12, FluentValidation 11, EF Core 8 with Pomelo MySQL, Serilog, Swashbuckle.

## Shape

```ts
[HttpGet]
public Task<IActionResult> List(CancellationToken ct) =>
    mediator.Send(new ListRolesQuery(), ct);

// ValidationBehavior runs before the handler
```

## What breaks if you skip it

A controller grows SQL and if-statements. Invalid commands reach the handler. A new endpoint forgets the validator because nothing in the pipeline calls it.
