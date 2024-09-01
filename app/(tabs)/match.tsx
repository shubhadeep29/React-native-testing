import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const MatchSuccessPage = () => {
  const scaleAnim = new Animated.Value(0);
  const bottomLeftTranslateY = new Animated.Value(100);
  const bottomRightTranslateY = new Animated.Value(100);
  const bottomLeftOpacity = new Animated.Value(1);
  const bottomRightOpacity = new Animated.Value(1);

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
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

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LottieView
        source={require("@/assets/images/confetti.json")}
        autoPlay
        loop
        style={styles.backgroundAnimation}
        resizeMode="cover"
      />

      <Animated.View
        style={[styles.imageContainer, { transform: [{ scale: scaleAnim }] }]}
      >
        <View style={{}}>
          <View style={styles.profileImageWrapperLeft}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/fdc4/ed16/54722238a0aa5f2e8f5136b74cdf9a3c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Js2~rBTMIsIBTOncMXtYik3E-7i57IK8dBVqIaQuQaF8mO-kqCXMnfyVosNgdGnItsKAGjTVttprBiAPyn~uQRQ3SYuhkwY7rvd8dtHxfBeKgpn3mO~ttpalQU3-Dy0gmHK1kbNp0RSgXLiypPHRlLrPTq1cY2dAjZNrIjDBDxiiPTlA26TFAiFfxs~CyxGpIGlCnfhwQJ6XWZBBGVM0rwfIUJGExPGyurYz985ifgvxbkfXUpUZM29l9ateKJnGRgOfDBmufhWabfX5gsUzYHgiXTUON~kwk3JN47aQeqKMSzuvir0vX~mbjn5GRGjjSrygGKD9QHJdfi4HLgY5ww__",
              }}
              style={styles.profileImage}
            />
          </View>
          <Image
            source={require("@/assets/images/heart.png")}
            style={{ position: "absolute", top: 55, right: 70, zIndex: 3 }}
          />
          <View>
            <Image
              source={require("@/assets/images/connecting.png")}
              style={{}}
            />
          </View>
          <View style={styles.profileImageWrapperRight}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/4f72/cbea/96da2748c75426fc44bbaa24934b04fb?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUl~jRenaYZ9Zug8hDbmh0az1npicX61fy4HR45BkpWHLEVeJYlLXSDiaQ0rjX40OcrtDYXBcmBo~~yrhNsWlHYj2leAo~6~qqg-C7oszMBuHmABoJ2HL5r0qQhN0j66blrjkkocduijvbqx~da9urMZkdLzIJgNHD4rjLqbxOLyLfF21Glh0AzPCNr47nl3RylehuAR5z3BwxDLg0-nVs204Bu733-3TGGulMIWD~XdrXLgcn1dnJrmOXlPhqzXaigi4xUgstFRhXjliqEgJ0ppzS4Ril4JexY73vc1D2~~6dXTXjpOKNggc9Grr3T8FeIKu8Pvknve8O85bPg4Tg__",
              }}
              style={styles.profileImage}
            />
          </View>
        </View>
      </Animated.View>

      <View style={styles.contentContainer}>
        <Text style={styles.congratulationsText}>Congratulations!</Text>
        <Text style={styles.descriptionText}>
          You and Nancy liked each other
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to profile</Text>
        </TouchableOpacity>
      </View>

      <View style={{ position: "absolute", bottom: height / 3, left: 30 }}>
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
      </View>
      <View style={{ position: "absolute", bottom: height / 2, right: 30 }}>
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
    </View>
  );
};

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
    alignItems: "center",
    paddingTop: height / 15,
    backgroundColor: "#000",
  },
  backgroundAnimation: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  imageContainer: {},
  profileImageWrapperLeft: {
    width: 160,
    height: 160,
    borderRadius: 15,
    overflow: "hidden",
    left: -50,
    top: 60,
    zIndex: 2,
    transform: [{ rotate: "10deg" }],
  },
  profileImageWrapperRight: {
    width: 160,
    height: 160,
    borderRadius: 15,
    overflow: "hidden",
    right: -100,
    bottom: 60,
    transform: [{ rotate: "-10deg" }],
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  congratulationsText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.5)",
    marginBottom: 30,
    fontWeight: "400",
  },
  button: {
    backgroundColor: "rgba(115, 108, 211, 1)",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  bottomLeftComponent: {},
  bottomRightComponent: {},
  bottomLeftShape: {
    transform: [{ rotate: "45deg" }],
  },
  bottomRightShape: {
    width: 50,
    height: 50,
    transform: [{ rotate: "45deg" }],
  },
});

export default MatchSuccessPage;
