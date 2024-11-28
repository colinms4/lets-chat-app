import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';
import { getAuth, signInAnonymously } from 'firebase/auth';

const Start = ({ navigation }) => {
    const [name, setName] = useState("");
    const [backgroundColor, setBackgroundColor] = useState(null); // Track selected color
    const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

    const auth = getAuth();

    // lets a user sign in anonymously 
    const signInUser = () => {
        if (!name.trim()) {
            Alert.alert("Please enter your username!");
            return;
        }
        if (!backgroundColor) {
            Alert.alert("Please select a background color!");
            return;
        }
        signInAnonymously(auth)
            .then(result => {
                navigation.navigate("Chat", { userID: result.user.uid, backgroundColor, name });
                Alert.alert("Signed in Successfully!");
            })
            .catch((error) => {
                Alert.alert("Unable to sign in, please try again later.");
            });
    };


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/background.png")}
                style={styles.backgroundImage}
            >
                <Text>Hello Screen1!</Text>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={setName}
                    placeholder="Type your username here"
                />
                <View style={styles.colorContainer}>
                    {colors.map((color) => (
                        <TouchableOpacity
                            accessible={true}
                            accessibilityLabel='More options'
                            accessibilityHint='Lets you choose to send an image or your geolocation.'
                            accessibilityRole='button'
                            key={color}
                            style={[
                                styles.colorOption,
                                { backgroundColor: color, borderWidth: backgroundColor === color ? 2 : 0, borderColor: '#fff' }
                            ]}
                            onPress={() => setBackgroundColor(color)} // Update selected color
                        />
                    ))}
                </View>
                <Button
                    title="Go to Chat"
                    onPress={signInUser}
                    disabled={!backgroundColor} // Disable button if no color is selected
                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '88%',
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorOption: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 3,
    },
    colorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
});

export default Start;
