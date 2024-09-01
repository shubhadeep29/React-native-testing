import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Animated } from "react-native";
import { useFocusEffect } from "expo-router";
import { useEffect } from "react";

export default function splashScreen() {
  const scaleValue = new Animated.Value(0);
  const rotateValue = new Animated.Value(0);
  const logoScaleValue = new Animated.Value(1);
  const bottomLeftTranslateY = new Animated.Value(100);
  const bottomRightTranslateY = new Animated.Value(100);
  const bottomLeftOpacity = new Animated.Value(1);
  const bottomRightOpacity = new Animated.Value(1);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotateValue, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
          }),
          Animated.timing(rotateValue, {
            toValue: 0,
            duration: 10000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });

    Animated.timing(bottomLeftTranslateY, {
      toValue: 0,
      duration: 1000,
      delay: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(bottomRightTranslateY, {
      toValue: 0,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();

    startLeftSparkleAnimation();
    startRightSparkleAnimation();
    startLogoScaleAnimation();
  };

  const startLeftSparkleAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bottomLeftOpacity, {
          toValue: 0.1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(bottomLeftOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(bottomLeftOpacity, {
          toValue: 0.3,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(bottomLeftOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const startRightSparkleAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bottomRightOpacity, {
          toValue: 0.2,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(bottomRightOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(bottomRightOpacity, {
          toValue: 0.1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bottomRightOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const startLogoScaleAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoScaleValue, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(logoScaleValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const scaleInterpolate = logoScaleValue.interpolate({
    inputRange: [1, 1.1],
    outputRange: [1, 1.1],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [
              { scale: scaleValue },
              { rotate: rotateInterpolate },
              { scale: scaleInterpolate },
            ],
          },
        ]}
      >
        <YourLogoComponent />
      </Animated.View>

      <Animated.View
        style={[
          styles.bottomLeftComponent,
          {
            transform: [{ translateY: bottomLeftTranslateY }],
            opacity: bottomLeftOpacity,
          },
        ]}
      >
        <BottomLeftComponent />
      </Animated.View>

      <Animated.View
        style={[
          styles.bottomRightComponent,
          {
            transform: [{ translateY: bottomRightTranslateY }],
            opacity: bottomRightOpacity,
          },
        ]}
      >
        <BottomRightComponent />
      </Animated.View>
    </View>
  );
}

const YourLogoComponent = () => (
  <Image
    source={require("@/assets/images/dahlia-logo.png")}
    style={{ width: 150, height: 150 }}
  />
);

const BottomLeftComponent = () => (
  <Image
    source={require("@/assets/images/star-left.png")}
    style={styles.bottomLeftShape}
  />
);

const BottomRightComponent = () => (
  <Image
    source={require("@/assets/images/star-right.png")}
    style={styles.bottomRightShape}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 150,
    height: 150,
  },
  bottomLeftComponent: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  bottomRightComponent: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  bottomLeftShape: {
    transform: [{ rotate: "45deg" }],
  },
  bottomRightShape: {
    width: 50,
    height: 50,
    transform: [{ rotate: "45deg" }],
  },
});
