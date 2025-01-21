interface ImportMetaEnv {
  readonly NEXT_SERVICE_URL: string;
  readonly NEXT_SERVICE_PORT: string;
  readonly NEXT_SERVICE_PORT_2: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
