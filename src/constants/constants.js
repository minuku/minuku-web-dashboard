export const updateConditionRequest = "UPDATE_CONDITION_REQUEST";
export const updateConditionFail = "UPDATE_CONDITION_FAIL";

export const addConditionRequest = "ADD_CONDITION_REQUEST";
export const addConditionFail = "ADD_CONDITION_FAIL";

export const deleteConditionRequest = "DELETE_CONDITION_REQUEST";
export const deleteConditionFail = "DELETE_CONDITION_FAIL";

export const mobileLabelData = {
  creationTime: {
    creationTime: "long"
  },
  TransportationModeDataRecord: {
    ConfirmedActivityType: "String"
  },
  ActivityRecognitionDataRecord: {
    MostProbableActivity: "String",
    ProbableActivities: "String",
    Detectedtime: "long"
  },
  AppUsageDataRecord: {
    Screen_Status: "String",
    Latest_Foreground_Activity: "String",
    Latest_Used_App: "String"
  },
  AccessibilityDataRecord: {
    pack: "String",
    text: "String",
    type: "String",
    extra: "String"
  },
  BatteryDataRecord: {
    BatteryLevel: "int",
    BatteryPercentage: "float",
    BatteryChargingState: "String",
    isCharging: "boolean"
  },
  ConnectivityDataRecord: {
    NetworkType: "String",
    IsNetworkAvailable: "boolean",
    IsConnected: "boolean",
    IsWifiAvailable: "boolean",
    IsMobileAvailable: "boolean",
    IsWifiConnected: "boolean",
    IsMobileConnected: "boolean"
  },
  LocationDataRecord: {
    sessionid: "String",
    latitude: "float",
    longitude: "float",
    Accuracy: "float",
    Altitude: "float",
    Speed: "float",
    Bearing: "float",
    Provider: "String"
  },
  TelephonyDataRecord: {
    NetworkOperatorName: "String",
    CallState: "int",
    PhoneSignalType: "int",
    GsmSignalStrength: "int",
    LTESignalStrength: "int",
    CdmaSignalStrengthLevel: "int"
  },
  RingerDataRecord: {
    RingerMode: "String",
    AudioMode: "String",
    StreamVolumeMusic: "int",
    StreamVolumeNotification: "int",
    StreamVolumeRing: "int",
    StreamVolumeVoicecall: "int",
    StreamVolumeSystem: "int"
  },
  SensorDataRecord: {
    acceleration: "String",
    gryroscope: "String",
    gravity: "String",
    linearAcceleration: "String",
    rotationVector: "String",
    proximity: "String",
    magneticField: "String",
    light: "String",
    pressure: "String",
    relativeHumidity: "String",
    ambientTemperature: "String"
  }
};
