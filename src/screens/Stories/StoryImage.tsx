import { View, Text, Image, Dimensions, PanResponder, TouchableOpacity, Pressable } from 'react-native';
import React, { useRef } from 'react';
import HeaderBar from '../../components/HeaderBar';
import { Button, ProgressBar } from 'react-native-paper';

interface StoryImageProps {
    navigation: any;
    route: any;
}

export default function StoryImage({ navigation, route }: StoryImageProps) {
    const { data, index } = route.params;
    const [currentStoryIndex, setCurrentStoryIndex] = React.useState(0);
    let [currentIndex, setCurrentIndex] = React.useState(index);

    const icons = [
        {
            onPress: () => navigation.goBack(),
            icon: 'close'
        }
    ];

    const { width } = Dimensions.get('window');

    const [progress, setProgress] = React.useState(0);

    const swipeDirection = useRef('');

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                const { dx, moveX } = gestureState;
                if (Math.abs(dx) > 50) {
                    swipeDirection.current = dx > 0 ? 'left' : 'right';
                }
            },
            onPanResponderRelease: () => {
                if (swipeDirection.current !== '') {
                    if (swipeDirection.current === 'right') {
                        if (currentStoryIndex < data[currentIndex].stories.length - 1) {
                            setCurrentStoryIndex(currentStoryIndex + 1);
                        } else {
                            if (currentIndex === data.length - 1) {
                                navigation.goBack();
                            } else {
                                currentIndex = currentIndex + 1;
                                setCurrentIndex(currentIndex);
                                setCurrentStoryIndex(0);
                                setProgress(0);
                            }
                        }
                    } else {
                        if (currentStoryIndex > 0) {
                            setCurrentStoryIndex(currentStoryIndex - 1);
                        } else {
                            if (currentIndex === 0) {
                                navigation.goBack();
                            } else {
                                currentIndex = currentIndex - 1;
                                setCurrentIndex(currentIndex);
                                setCurrentStoryIndex(0);
                                setProgress(0);
                            }
                        }
                    }
                }
            }

        })
    ).current;


    React.useEffect(() => {
        const duration = data[currentIndex].stories[currentStoryIndex].totalTime * 1000;
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const elapsedTime = 1000;
                const increment = elapsedTime / duration;
                return prevProgress + increment >= 1 ? 1 : prevProgress + increment;
            });
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, []);

    React.useEffect(() => {
        if (progress === 1) {
            navigation.goBack();
        }
    }, [progress]);

    return (
        <View
            style={{
                backgroundColor: 'black',
                flex: 1,
            }}
            {...panResponder.panHandlers}
        >
            <HeaderBar
                showBackBtn={false}
                title={data[currentIndex].sender.firstName + ' ' + data[currentIndex].sender.lastName}
                navigation={navigation}
                icons={icons}
                inverted={true}
            />
            <ProgressBar
                progress={progress}
                color={'white'}
            />
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={{ uri: data[currentIndex].stories[currentStoryIndex].storyObj.image }}
                    style={{
                        width: width,
                        aspectRatio: 1.778,
                    }}
                />

            </View>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '100%',
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 16
                    }}
                >
                    1/2
                </Text>
                <View
                style={{
                    flexDirection: 'row'
                }}
                >
                     <Button
                        onPress={() => {
                            if (currentStoryIndex > 0) {
                                setCurrentStoryIndex(currentStoryIndex - 1);
                            } else {
                                if (currentIndex === 0) {
                                    navigation.goBack();
                                } else {
                                    currentIndex = currentIndex - 1;
                                    setCurrentIndex(currentIndex);
                                    setCurrentStoryIndex(0);
                                    setProgress(0);
                                }
                            }
                        }}
                    >
                        {'<'}
                    </Button>
                     <Button
                     onPress={() => {
                        if (currentStoryIndex < data[currentIndex].stories.length - 1) {
                            setCurrentStoryIndex(currentStoryIndex + 1);
                        } else {
                            if (currentIndex === data.length - 1) {
                                navigation.goBack();
                            } else {
                                currentIndex = currentIndex + 1;
                                setCurrentIndex(currentIndex);
                                setCurrentStoryIndex(0);
                                setProgress(0);
                            }
                        }
                     }}
                     >
                        {'>'}
                    </Button>
                   
                   
                </View>
            </View>
        </View>
    )
}
