interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  hostPrefix: string;
  env: string;
  serverTime: number;
}

declare var window: Window & typeof globalThis;
