/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SUPABASE_KEY: string;
  readonly SUPABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
