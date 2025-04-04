import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';

import Image3 from '../Images/Image3';
import Image4 from '../Images/Image4';
import Image5 from '../Images/Image5';
import Image6 from '../Images/Image6';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const onboardingData = [
  {
    heading: 'Welcome to Xincentive, the one spot for all',
    image: require('../assets/image1.png'),
    buttonText: 'Get Started',
    backgroundColor: '#1A1A1A',
  },
  {
    heading: 'You can convert into XNT or Cashback',
    image: require('../assets/image1.png'),
    buttonText: 'Get Started',
    backgroundColor: '#1A1A1A',
  },
  {
    heading: 'Connect your bank account',
    image: Image3,
    buttonText: 'Get Started',
    backgroundColor: '#E79420',
  },
  {
    heading: 'Spend money earn cash back',
    image: Image4,
    buttonText: 'Get Started',
    backgroundColor: '#F88121',
  },
  {
    heading: 'Convert cash back into tokens',
    image: Image5,
    buttonText: 'Get Started',
    backgroundColor: '#E95237',
  },
  {
    heading: 'Get Cash back on every purchases',
    image: Image6,
    buttonText: 'Get Started',
    backgroundColor: '#FF9331',
  },
];

const OnboardingCarousel = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const goToNextSlide = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current.scrollTo({ x: nextIndex * screenWidth, animated: true });
    } else {
      navigation.replace('Market');
    }
  };

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      scrollViewRef.current.scrollTo({ x: prevIndex * screenWidth, animated: true });
    }
  };

  const handleScreenTap = (event) => {
    const tapX = event.nativeEvent.locationX;
    const screenMiddle = screenWidth / 2;

    if (tapX > screenMiddle) {
      goToNextSlide();
    } else {
      goToPreviousSlide();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenTap}>
      <View style={[styles.container, { backgroundColor: onboardingData[currentIndex].backgroundColor }]}>
        {/* Logo and Light Heading Inline with Progress Bar */}
        <View style={styles.topContainer}>
          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBackground}>
              {onboardingData.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.progressSegment,
                    index <= currentIndex && styles.progressFill,
                  ]}
                />
              ))}
            </View>
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/LogoInitial.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.lightHeading}>Welcome to Xincentive</Text>
          </View>
        </View>

        {/* ScrollView for Carousel and Buttons */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {onboardingData.map((item, index) => (
            <View 
            key={index} 
            style={[
              styles.slideContainer,
              index === onboardingData.length - 1 && styles.lastSlideContainer
            ]}
          >
            <View 
              style={[
                styles.slide,
                index === onboardingData.length - 1 && screenHeight < 700 && styles.lastSlidePaddingFix
              ]}
            >
              <View style={[
                styles.headingContainer,
                (index === 0 || index === 1) && styles.headingWidth300,
              ]}>
                <Text style={styles.heading}>{item.heading}</Text>
              </View>
          
              {/* Image rendering */}
              {item.image && typeof item.image === 'number' ? (
                <Image
                  source={item.image}
                  style={[
                    styles.image,
                    (index === 0 || index === 1) && styles.fullWidthImage,
                  ]}
                  resizeMode="contain"
                />
              ) : (
                <View style={[
                  styles.image,
                  (index === 0 || index === 1) && styles.fullWidthImage,
                ]}>
                  <item.image width="100%" height="100%" />
                </View>
              )}
            </View>
          

              <View style={[
                styles.buttonContainer,
                index === onboardingData.length - 1 && styles.lastButtonContainer
              ]}>
                {/* Keep Get Started button on all screens */}
                <TouchableOpacity 
                  style={[
                    styles.button,
                    index === 0 && styles.firstScreenButton
                  ]} 
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text style={[
                    styles.buttonText,
                    index === 0 && styles.firstScreenButtonText
                  ]}>
                    Get Started
                  </Text>
                </TouchableOpacity>

                {/* Show "Have an account?" text on all screens except last */}
                {index !== onboardingData.length - 1 && (
                  <TouchableOpacity onPress={() => navigation.navigate('AppsLogin')}>
                    <Text style={styles.signInText}>
                      Have an account?{' '}
                      <Text
                        style={styles.signInLink}
                        onPress={() => navigation.navigate('AppsLogin')}
                      >
                        Sign In
                      </Text>
                    </Text>
                  </TouchableOpacity>
                )}

                {/* Additional Login button only on last screen */}
                {index === onboardingData.length - 1 && (
                  <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text style={[styles.buttonText, styles.loginButtonText]}>Login</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  lightHeading: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '300',
    fontFamily: "Satoshi-Medium"
  },
  progressContainer: {
    width: '100%',
  },
  progressBackground: {
    width: '100%',
    height: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressSegment: {
    height: '100%',
    flex: 1,
    backgroundColor: '#3f3f3f',
    marginHorizontal: 2,
    borderRadius: 80,
  },
  progressFill: {
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  slideContainer: {
    width: screenWidth,
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headingContainer: {
    alignItems: 'center',
    width: 245,
  },
  headingWidth300: {
    width: 330,
  },
  heading: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: '#fff',
    fontFamily: "Satoshi-Bold"
  },
  image: {
    // width: 180,
    // height: 300,
    marginVertical: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom:50,
  },
  fullWidthImage: {
    width: screenWidth,
    height: 300,
    marginVertical: 0,
    marginHorizontal: -20,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  button: {
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: "Satoshi-Bold"
  },
  loginButtonText: {
    color: '#ffffff',
  },
  signInText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'center',
    fontFamily: "Satoshi-Regular"
  },
  signInLink: {
    color: '#ffffff',
    fontFamily: "Satoshi-Bold"
  },
  firstScreenButton: {
    backgroundColor: '#E8E8E8',
  },
  firstScreenButtonText: {
    color: '#232323',
    opacity: 0.6,
  },
  lastSlideContainer: {
    paddingTop: 70, // Extra padding for last slide to prevent text cutoff
  },
  lastButtonContainer: {
    paddingBottom: 60, // Extra padding for last slide buttons
    // marginTop: 30, // Additional space between image and buttons
  },
  lastSlidePaddingFix: {
    paddingBottom: 80, // adds space below the image on small screens
  },
  

});

export default OnboardingCarousel;