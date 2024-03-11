// (1)
type ElementType<ArrayType extends unknown[]> = ArrayType extends (infer ElementType)[] ? ElementType : never;

type NumberArray = number[];
type Number = ElementType<NumberArray>;

// (2)
type ReturnTypeOfFunction<Func extends (...args: any[]) => unknown> = Func extends (...args: any[]) => infer ReturnType ? ReturnType : never;

function getString() {
    return 'this is a string'
}

type ExtractedReturnType = ReturnTypeOfFunction<typeof getString>;


// (3)
type UnwrappedPromise<P> = P extends Promise<infer U> ? U : never;

const promise = new Promise<string>(() => {
})

type ResultType = UnwrappedPromise<typeof promise>; // ResultType === 'string'