import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

using TypeSpec.Http;
using TypeSpec.Rest;

@service({
  title: "LinguaRenz API",
})
@server("http://localhost:8080", "The local service endpoint")
namespace LinguaRenz;

model User {
  id: string;
  google_account_id: string;
  created_at: string;
}

@route("/users")
namespace Users {
  @get
  op getUser(@path id: string): {
    @statusCode statusCode: 200;
    @body user: User;
  } | {
    @statusCode statusCode: 404;
    @body error: NotFoundError;
  } | {
    @statusCode statusCode: 500;
    @body error: InternalServerError;
  };
}

@route("/health")
namespace Health {
  @get
  op healthCheck(): {
    @statusCode statusCode: 200;
    @body healthCheck: HealthCheck;
  } | {
    @statusCode statusCode: 500;
    @body error: InternalServerError;
  };
}

model HealthCheck {
  message: string;
}

@error
model NotFoundError {
  code: "NOT_FOUND";
  message: string;
}

@error
model ValidationError {
  code: "VALIDATION_ERROR";
  message: string;
}

@error
model InternalServerError {
  code: "INTERNAL_SERVER_ERROR";
  message: string;
}
