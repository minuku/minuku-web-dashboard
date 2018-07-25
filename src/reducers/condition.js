import { initCondition, updateCondition, addCondition, deleteCondition }  from "../constants/constants.js"

const defaultStart = new Date(2018, 11, 24, 10, 33, 30, 0);
const defaultEnd = new Date(2018, 11, 24, 12, 33, 30, 0);

const conditionReducer = (state = [], action) => {
  switch (action.type) {
    case updateCondition:
      return state;
      
    case addCondition:
      return [
        ...state,
        action.payload.condition,
      ];

    case deleteCondition:
      return state;
      
    case initCondition:
      return ({
        conditionList: 
        [
          {
            isOpen: false,
            name: '移動中',
            schedule_from: false,
            startTime: defaultStart,
            endTime: defaultEnd,
            schedule_last: false,
            duration: 10,
            unit: 'minute',
            rule: [
              {
                name: "transportation",
                parameter: ['on foot'],
              },
              {
                name: "accelerometer",
                parameter: [0, 0, 0, 10, 10, 10],
              },
            ],
          },
          {
            isOpen: false,
            name: '騎腳踏中',
            schedule_from: false,
            startTime: defaultStart,
            endTime: defaultEnd,
            schedule_last: false,
            duration: 10,
            unit: 'minute',
            rule: [
              {
                name: "gravity",
                parameter:[0, 0, 0, 10, 10, 10],
              },
            ],
          },
          {
            isOpen: false,
            name: '靜止中',
            schedule_from: false,
            startTime: defaultStart,
            endTime: defaultEnd,
            schedule_last: false,
            duration: 10,
            unit: 'minute',
            rule: [
              {
                name: "gyroscope",
                parameter: [0, 0, 0, 10, 10, 10],
              },
              {
                name: "light",
                parameter: [100, 200],
              },
            ],
          },
        ]
      });
    default:
      return state;
  }
}

export default conditionReducer