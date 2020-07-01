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
    date: string | Date; // yy/mm/dd
    status: 1 | 2 | 3; // 1 - best 2 - common 3 - worst
    sleepData: {
      sleep: number; // total sleep hours
      awake: number; // 12 - total sleep hours
    };
  }
}
