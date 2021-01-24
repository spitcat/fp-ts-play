import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";
import * as TE from "fp-ts/lib/TaskEither";
const te: TE.TaskEither<Error, string> = TE.tryCatch(
  async (): Promise<string> => await Promise.resolve("Hello either fp-ts"),
  (error) => Error(`${error}`)
);

const te2 = (s: string): TE.TaskEither<Error, O.Option<string>> => {
  return TE.tryCatch(
    async (): Promise<O.Option<string>> => {
      return await Promise.resolve(O.some(s + " TE2"));
    },
    (error) => Error("AA")
  );
};

const shtml = `
<h1>Hello Parcel!</h1>
<h2></h2>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>

`;

export const p = pipe(te, TE.chain(te2));
