import _ from "lodash";
import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Constants, Spacings, View, Carousel } from "react-native-ui-lib";

import { LoginScreen } from "../screens/LoginScreen";
import { HomePresentationScreen } from "../screens/HomePresentationScreen";

const INITIAL_PAGE = 2;

interface Props {}

interface State {
  orientation: typeof Constants.orientation;
  width: number;
  limitShownPages: boolean;
  numberOfPagesShown: number;
  currentPage: number;
  autoplay: boolean;
}

export class CarouselScreen extends Component<Props, State> {
  carousel = React.createRef<typeof Carousel>();
  private dimensionsChangeListener: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      orientation: Constants.orientation,
      width: this.getWidth(),
      limitShownPages: false,
      numberOfPagesShown: 7,
      currentPage: INITIAL_PAGE,
      autoplay: true,
    };
  }

  componentDidMount() {
    this.dimensionsChangeListener = Constants.addDimensionsEventListener(
      this.onOrientationChange
    );
  }

  componentWillUnmount() {
    Constants.removeDimensionsEventListener(
      this.dimensionsChangeListener || this.onOrientationChange
    );
  }

  onOrientationChange = () => {
    if (this.state.orientation !== Constants.orientation) {
      this.setState({
        orientation: Constants.orientation,
        width: this.getWidth(),
      });
    }
  };

  getWidth = () => {
    return Constants.windowWidth - Spacings.s5 * 2;
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View paddingH-page>
          <Carousel
            containerStyle={{
              height: 900,
              flex: 1,
            }}
            horizontal={true}
            pageControlProps={{
              size: 10,
              containerStyle: styles.loopCarousel,
            }}
            pageControlPosition={Carousel.pageControlPositions.UNDER}
          >
            <HomePresentationScreen />
            <LoginScreen />
          </Carousel>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  loopCarousel: {
    bottom: 15,
    left: 10,
  },
});
