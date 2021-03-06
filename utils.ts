import { PanResponder } from 'react-native';

export const changeVisibility = callback => {
  return PanResponder.create({
    onStartShouldSetPanResponder: () => {
      return true;
    },
    onPanResponderStart: (_, gestureState) => {
      const { numberActiveTouches } = gestureState;
      if (numberActiveTouches === 5) {
        callback && callback(true);
      }
      return true;
    },
  });
};

export const panResponderHandler = obj => {
  const { onPanResponderMove, ...rest } = obj;
  return PanResponder.create({
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
      const { dx, dy } = gestureState;
      return Math.abs(dx) >= 1 && Math.abs(dy) >= 1;
    },
    onPanResponderMove: (_, gestureState) => {
      onPanResponderMove && onPanResponderMove(_, gestureState);
    },
    ...rest,
  });
};

export default panResponderHandler;

export const getToday = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();

  const date = `${y}:${m}:${d}`;
  return date;
};
