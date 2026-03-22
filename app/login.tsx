import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Current placeholder auth logic
    if (username.toLowerCase() === 'user1' && password === 'password') {
      setError('');
      // Navigate to main app
      router.replace('/(tabs)');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleGoogleSignIn = () => {
    // TODO: FIREBASE INTEGRATION HERE
    // e.g., const credential = await GoogleAuthProvider.credential(idToken);
    // await signInWithCredential(auth, credential);
    Alert.alert('Future Firebase Hook', 'This button will be connected to Firebase Google Auth later!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.content} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <IconSymbol name="fork.knife" size={48} color="#D95B00" />
          <Text style={styles.title}>WhatsForLunch</Text>
          <Text style={styles.subtitle}>Sign in to start voting</Text>
        </View>

        <View style={styles.form}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#9CA3AF"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
            <IconSymbol name="safari.fill" size={20} color="#1F2937" style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
           <Text style={styles.footerText}>Test Credentials:</Text>
           <Text style={styles.footerSubText}>Username: user1  |  Password: password</Text>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6F0',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#D95B00',
    marginTop: 16,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
  },
  form: {
    width: '100%',
  },
  errorText: {
    color: '#EF4444',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 18,
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5DFD3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  loginButton: {
    backgroundColor: '#D95B00',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#D95B00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5DFD3',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E5DFD3',
  },
  googleIcon: {
    marginRight: 12,
  },
  googleButtonText: {
    color: '#1F2937',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    marginTop: 50,
    alignItems: 'center',
  },
  footerText: {
    color: '#9CA3AF',
    fontWeight: '600',
    fontSize: 14,
  },
  footerSubText: {
    color: '#6B7280',
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
  }
});
