import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    retry: 2,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});
