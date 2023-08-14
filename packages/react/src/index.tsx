import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import React, { createContext, useContext, useMemo } from "react";
import {
  type SolanaConfig,
  fetchToken2022AccountsByOwner,
  fetchTokenAccountsByOwner,
} from "@jup-ag/opos";
import { PublicKey } from "@solana/web3.js";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { compress, decompress } from "lz-string";

interface OposContext {
  config: SolanaConfig;
}

export * from "@jup-ag/opos";

export const OposContext = createContext<OposContext | null>(null);

export const OposProvider = ({
  config,
  children,
}: {
  config: SolanaConfig;
  children: React.ReactNode;
}) => {
  const client = useMemo(() => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 1_000 * 60 * 60 * 24, // 24 hours
          networkMode: "offlineFirst",
          refetchOnWindowFocus: false,
          retry: 0,
        },
        mutations: {
          networkMode: "offlineFirst",
        },
      },
    });

    if (typeof window === "undefined") {
      return client;
    }

    persistQueryClient({
      queryClient: client,
      persister: createSyncStoragePersister({
        key: "opos_cache",
        storage: window.localStorage,
        serialize: (data) => compress(JSON.stringify(data)),
        deserialize: (data) => JSON.parse(decompress(data)),
      }),
    });

    return client;
  }, []);

  return (
    <QueryClientProvider client={client}>
      <OposContext.Provider value={{ config }}>{children}</OposContext.Provider>
    </QueryClientProvider>
  );
};

const useConfig = () => {
  const opos = useContext(OposContext);
  if (!opos) {
    throw new Error("OposProvider not found");
  }
  return opos.config;
};

export const useFetchTokenAccounts = (wallet: PublicKey) => {
  const config = useConfig();

  return useQuery({
    queryKey: ["opos", "tokens", wallet.toBase58()],
    queryFn: async () => {
      const [tokens2022, tokens] = await Promise.all([
        fetchToken2022AccountsByOwner(config, wallet),
        fetchTokenAccountsByOwner(config, wallet),
      ]);

      return [...tokens2022, ...tokens];
    },
  });
};
