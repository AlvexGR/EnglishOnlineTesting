export class UtilityFunctions {
  static convertLocalToUTC(dateTime: Date): Date {
    let result: Date;
    try {
      result = new Date(
        dateTime.getUTCFullYear(),
        dateTime.getUTCMonth(),
        dateTime.getUTCDate(),
        dateTime.getUTCHours(),
        dateTime.getUTCMinutes(),
        dateTime.getUTCSeconds()
      );
    } catch (err) {
      console.log(err);
      return null;
    }
    return result;
  }

  static convertUTCToLocal(UTCDateTime: Date): Date {
    let result: Date;
    try {
      result = new Date(UTCDateTime.toString());
    } catch (err) {
      console.log(err);
      return null;
    }
    return result;
  }
}

export const AppRoutesName = {
  logIn: "log-in",
  signUp: "sign-up",
  admin: "admin",
  home: "",
  profile: "profile",
  testPage: "test-page"
};

export enum StatusCode {
  Ok = 200,
  BadRequest = 400,
  InternalError = 500,
  Forbidden = 403
}
