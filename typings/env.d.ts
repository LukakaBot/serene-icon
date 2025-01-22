declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_SERVICE_URL: string;
    readonly NEXT_PUBLIC_SERVICE_PORT: string;
    readonly NEXT_PUBLIC_SERVICE_PREFIX: string;
  }
}
