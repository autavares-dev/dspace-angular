import { Config } from './config.interface';

/**
 * Config to filter which URLs should use SSR based on it's path (when SSR itself is enabled, see {@link SSRConfig}).
 */
export class SSRFilterConfig implements Config {
  /**
   * Whether to filter or not URLs to use SSR based on its path (when SSR itself is enabled).
   * When true, only URLs with paths starting with the prefixes in 'ssrPathPrefixes' will use SSR, remaining ones CSR.
   * When false, all URLs will use SSR (if SSR is enabled).
   * False by default.
   */
  public enabled: boolean;

  /**
   * List of URL path prefixes that will render with SSR when this config (and SSR) is enabled.
   * Example: '/items/'.
   */
  public ssrPathPrefixes: string[];
}
