import { Either } from "fp-ts/lib/Either";
import { isSome, Option } from "fp-ts/lib/Option";
import { isRight } from "fp-ts/lib/These";
import { p } from "./service/service";

p().then((res: Either<Error, Option<string>>) => {
  const results: string = isRight(res)
    ? isSome(res.right)
      ? res.right.value
      : "Fuck TE 2"
    : "No results from TE";

  const el = document.getElementById("app");
  el.innerHTML = results;
});
