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

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const onboardingData = [
  {
    heading: 'Welcome to Xincentive, the one spot for all',
    image: require('../assets/image1.png'),
    buttonText: 'Get Started',
    backgroundColor: '#1A1A1A', // Background color for slide 1
  },
  {
    heading: 'You can convert into XNT or Cashback',
    image: require('../assets/image1.png'),
    buttonText: 'Get Started',
    backgroundColor: '#1A1A1A', // Background color for slide 2
  },
  {
    heading: 'Connect your bank account',
    image: require('../assets/image3.png'),
    buttonText: 'Get Started',
    backgroundColor: '#E79420', // Background color for slide 1
  },
  {
    heading: 'Spend money earn cash back',
    image: require('../assets/image4.png'),
    buttonText: 'Get Started',
    backgroundColor: '#F88121', // Background color for slide 2
  },
  {
    heading: 'Convert cash back into tokens',
    image: require('../assets/image5.png'),
    buttonText: 'Get Started',
    backgroundColor: '#E95237', // Background color for slide 3
  },
  {
    heading: 'Get Cash back on every purchases',
    image: require('../assets/image6.png'),
    buttonText: 'Get Started',
    backgroundColor: '#FF9331', // Background color for slide 4
  },
  {
    heading: 'Convert cash back into tokens',
    image: require('../assets/image5.png'),
    buttonText: 'Get Started',
    backgroundColor: '#E95237', // Background color for slide 3
  },
  {
    heading: 'Get Cash back on every purchases',
    image: require('../assets/image6.png'),
    buttonText: 'Get Started',
    backgroundColor: '#FF9331', // Background color for slide 4
  },
];

const OnboardingCarousel = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const goToNextSlide = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex); // Update the current index
      scrollViewRef.current.scrollTo({ x: nextIndex * screenWidth, animated: true }); // Scroll to the next slide
    } else {
      navigation.replace('Market'); // Navigate to "Market" when reaching the last slide
    }
  };
  

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex); // Update the current index
      scrollViewRef.current.scrollTo({ x: prevIndex * screenWidth, animated: true }); // Scroll to the previous slide
    }
  };

  const handleScreenTap = (event) => {
    const tapX = event.nativeEvent.locationX; // X-coordinate of the tap
    const screenMiddle = screenWidth / 2; // Middle of the screen

    if (tapX > screenMiddle) {
      goToNextSlide(); // Tap on the right side
    } else {
      goToPreviousSlide(); // Tap on the left side
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
              source={require('../assets/Logo.png')} // Replace with your logo path
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.lightHeading}>Welcome to Xincentive</Text>
          </View>
        </View>

        {/* ScrollView for Carousel */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false} // Disable swipe gestures
        >
          {onboardingData.map((item, index) => (
            <View
              key={index}
              style={styles.slide}
            >
              {/* Heading */}
              <View style={[
                styles.headingContainer,
                (index === 0 || index === 1) && styles.headingWidth300, // Apply width 300 for first and second slides
              ]}>
                <Text style={styles.heading}>{item.heading}</Text>
              </View>
              {/* Image */}
              <Image
                source={item.image}
                style={[
                  styles.image,
                  (index === 0 || index === 1) && styles.fullWidthImage, // Apply full width for first and second slides
                ]}
                resizeMode="contain"
              />
            </View>
          ))}
        </ScrollView>

        {/* Button */}
        <View style={styles.buttonContainer}>
          {/* Get Started Button */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          {/* Render "Have an account? Sign in" on all slides except the last one */}
          {currentIndex !== onboardingData.length - 1 && (
            <TouchableOpacity onPress={() => navigation.navigate('AppsLogin')}>
              <Text style={styles.signInText}>
                Have an account?{' '}
                <Text
                  style={styles.signInLink}
                  onPress={() => navigation.navigate('AppsLogin')}
                >
                  Sign in
                </Text>
              </Text>
            </TouchableOpacity>
          )}

          {/* Render Login button only on the last slide */}
          {currentIndex === onboardingData.length - 1 && (
            <TouchableOpacity
              style={[styles.button, styles.loginButton]}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={[styles.buttonText, styles.loginButtonText]}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
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
  slide: {
    width: screenWidth,
    alignItems: 'center',
    marginVertical: 25,
    padding: 20,
  },
  headingContainer: {
    alignItems: 'center',
    width:177,
  },
  headingWidth300: {
    width: 300, // Set width to 300 for first and second slides
  },
  heading: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    width: 180,
    height: 300,
    marginVertical: 30,
    borderRadius: 12,
    marginTop:30,
  },
  fullWidthImage: {
    width: screenWidth, // Full width for first and second slides
    height: 300, // Adjust height as needed
    marginVertical: 0, // Remove vertical margin
    marginHorizontal: -20, // Negate padding to allow overflow
  },
  buttonContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 50, // Fixed position for all slides
    width: '100%',
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
    fontWeight: 'bold',
  },
  loginButtonText: {
    color: '#ffffff',
  },
  signInText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'center',
  },
  signInLink: {
    color: '#ffffff', // Change to your desired highlight color
    fontWeight: 'bold',
  },
});

export default OnboardingCarousel;