export {};

declare global {
  export type MainParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    MainScreen: undefined;
    DetailScreen: {
      data: DataType;
    };
    SettingScreen: undefined;
  };

  interface DataType {
    date: string | Date;
    status: 1 | 2 | 3;
    sleepData: {
      sleep: number[];
      awake: number[];
    };
  }
}
