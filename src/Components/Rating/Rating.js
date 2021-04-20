import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "./Rating.styles";
import dummyUser from "../../assets/images/dummyUser.jpg";
import StarIcon from "../../assets/images/star.png";
import UnfilledStar from "../../assets/images/unfilledStar.png";
import routeNames from "../../Navigation/routeNames";

const changeArray = (max, array) => {
  for (let i = 0; i < max; i++) {
    array[i] = 1;
  }
  return array;
};

const RenderRatingView = ({ rating, setRating }) => {
  let arrayValue = [0, 0, 0, 0, 0];
  let modifiedArray = changeArray(rating, arrayValue);
  return (
    <View style={styles.starContainer}>
      {modifiedArray.map((item, index) => (
        <TouchableOpacity
          onPress={() => setRating(index + 1)}
          style={styles.starItem}
          key={index}
          style={styles.starItem}
        >
          <Image
            style={styles.starImage}
            source={item === 1 ? StarIcon : UnfilledStar}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};
// actions: {
//     user: {
//         completeTrip,
//         clearTripError
//     }
// },
// tripError,
// tripStatus,
// tripData,
// requestData,
// navigation: props.navigation

const handleCompleteTrip = (
  actions,
  navigation,
  rating,
  comments,
  tripData,
  setLoading,
  requestId
) => {
  setLoading(true);
  const data = {
    driverId: tripData.driver.driverId,
    tripId: requestId,
    rating: rating,
    comments: comments,
  };
  console.log("data", data);

  actions.user
    .completeTrip(data)
    .then(() => navigation.popToTop())
    .catch((e) => console.log("err", e))
    .then(() => {});
  setLoading(false);
};

const Rating = ({
  actions,
  tripStatus,
  tripError,
  navigation,
  tripData,
  requestId,
}) => {
  let driverName = "";
  let vehicleRegNo = "";
  driverName = tripData ? tripData.driver.name : "";
  vehicleRegNo = tripData ? tripData.vehicle.vehicleRegNo : "";

  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={dummyUser}
            />
          </View>
          <Text style={styles.name}>{driverName}</Text>
          <Text style={styles.carName}>{vehicleRegNo}</Text>
          <Text style={styles.heading}>HOW IS YOUR TRIP?</Text>
          <Text style={styles.subHeading}>
            Your Feedback will help improve driving experience
          </Text>
          <RenderRatingView setRating={setRating} rating={rating} />
          <View style={styles.commentContainer}>
            <TextInput
              value={comments}
              onChangeText={(text) => setComments(text)}
              placeholder="Additional Comments"
              multiline={true}
              style={styles.inputComment}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              handleCompleteTrip(
                actions,
                navigation,
                rating,
                comments,
                tripData,
                setLoading,
                requestId
              )
            }
            style={styles.buttonContainer}
          >
            {loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text style={{ fontSize: 15 }}>Submit Review</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Rating;
