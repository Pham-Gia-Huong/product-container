interface AuthMountOptions {
  login: VoidFunction;
  history: import("history").History<unknown>;
}

declare module "auth/AuthApp" {
  const mount: (el: HTMLDivElement | null, options: AuthMountOptions) => null;

  export { mount };
}
