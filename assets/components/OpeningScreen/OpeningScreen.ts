import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appleButton: {
        height: 48,
        marginBottom: 16,
        width: 'auto'
    },
    facebookButton: {
        height: 48,
        width: 'auto',
        borderRadius: 24,
        borderWidth: 0,
        padding: 0,
        margin: 0,
        overflow: 'hidden',
        marginBottom: 16,
    },
    facebookButtonIcon: {
        padding: 0,
        marginLeft: 0,
        width: 20,
        height: 20
    },
    facebookButtonText: {
        fontSize: 18,
        marginLeft: 5,
        marginRight: 5
    },
    signUpButton: {
        width: '100%',
    },
    linkText: {
        textDecorationLine: 'underline',
    },
    checkboxContainer: {
        marginLeft: -6,
    },
});

export default styles;
