import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar as StatusBarNative,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width, height } = Dimensions.get("window");

const ProfileScreen = () => {
  const imageUrls = [
    require("@/assets/images/user-image.png"),
    require("@/assets/images/user-image.png"),
    require("@/assets/images/user-image.png"),
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item} style={styles.profileImage} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.profileCard}>
          <View style={styles.imageSliderContainer}>
            <Carousel
              loop
              width={width - 40}
              height={height / 2.5}
              autoPlay={true}
              data={imageUrls}
              scrollAnimationDuration={2000}
              onSnapToItem={(index) => setActiveSlide(index)}
              renderItem={renderItem}
            />
            <View style={styles.paginationContainer}>
              {imageUrls.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dotStyle,
                    activeSlide === index && styles.activeDotStyle,
                  ]}
                />
              ))}
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.nameText}>Alisha Singh</Text>
            <View style={styles.detailsRow}>
              <View style={styles.detailView}>
                <Image
                  source={require("@/assets/images/Round-Pushpin.png")}
                  style={{ width: 16, height: 16 }}
                />
                <Text style={styles.detailText}>2 km away</Text>
              </View>
              <View style={styles.detailView}>
                <Image
                  source={require("@/assets/images/High-Voltage.png")}
                  style={{ width: 16, height: 16 }}
                />
                <Text style={styles.detailText}>Level 3</Text>
              </View>
              <View style={styles.detailView}>
                <Image
                  source={require("@/assets/images/Round-Pushpin.png")}
                  style={{ width: 16, height: 16 }}
                />
                <Text style={styles.detailText}>Long-Term</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Bio</Text>
          <Text style={styles.bioText}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form.
          </Text>

          <Text style={[styles.cardTitle, { marginTop: 16 }]}>About Me</Text>
          <View style={styles.tagsRow}>
            <View style={styles.tag}>
              <Image
                source={require("@/assets/images/Womens-Room.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.tagText}>Women</Text>
            </View>
            <View style={styles.tag}>
              <Image
                source={require("@/assets/images/Om.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.tagText}>Hindu</Text>
            </View>
            <View style={styles.tag}>
              <Image
                source={require("@/assets/images/Taurus.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.tagText}>Taurus</Text>
            </View>
            <View style={styles.tag}>
              <Image
                source={require("@/assets/images/Clinking-Beer-Mugs.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.tagText}>Taurus</Text>
            </View>
            <View style={styles.tag}>
              <Image
                source={require("@/assets/images/Cigarette.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.tagText}>Taurus</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Common Interests</Text>
          <View style={styles.tagsRow}>
            <View style={styles.tag}>
              <Image
                source={require("@/assets/images/Headphone.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.tagText}>Music</Text>
            </View>
            <View style={styles.tag}>
              <Image
                source={require("@/assets/images/Notebook.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.tagText}>Books</Text>
            </View>
            <View style={styles.tag}>
              <Image
                source={require("@/assets/images/gym.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.tagText}>Gym</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: "hidden",
  },
  imageSliderContainer: {},
  paginationContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 4,
  },
  imageContainer: {
    borderRadius: 22,
    overflow: "hidden",
  },
  detailsContainer: {
    position: "absolute",
    bottom: 0,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  profileImage: {
    width: "100%",
    height: height / 2.5,
    resizeMode: "cover",
  },
  dotStyle: {
    width: width / 4,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    margin: 10,
    borderRadius: 3,
  },
  activeDotStyle: {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  nameText: {
    fontSize: 28,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  detailView: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.34)",
    borderRadius: 22,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  detailText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  bioText: {
    fontSize: 12,
    color: "#666",
    marginTop: 12,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 22,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginRight: 10,
    marginTop: 12,
  },
  tagText: {
    marginLeft: 5,
    fontSize: 14,
  },
  button: {
    backgroundColor: "rgba(115, 108, 211, 1)",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 30,
    margin: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
