import React, { useContext } from 'react';

const environments = ['local', 'dev', 'prod'] as const;

export type Environment = typeof environments[number];

const ctx = React.createContext<Environment>('prod');

export const isEnvironment = (value: unknown): value is Environment =>
  new Set<unknown>(environments).has(value);

export interface EnvironmentConfig {
  hirerApiDomain: string;
}

const environmentConfigs: Record<Environment, EnvironmentConfig> = {
  local: { hirerApiDomain: 'http://localhost:60805' },
  dev: { hirerApiDomain: '/_s2s' },
  prod: { hirerApiDomain: '/_s2s' },
};

export const EnvironmentProvider: React.FunctionComponent<{
  value: Environment;
}> = ({ children, value }) => (
  <ctx.Provider value={value}>{children}</ctx.Provider>
);

export const useEnvironmentConfig = () => {
  const environment = useContext(ctx);

  return environmentConfigs[environment];
};
