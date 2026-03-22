import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // In the future this will call Firebase auth.signOut()
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <IconSymbol name="gear" size={24} color="#1F2937" />
          </TouchableOpacity>
        </View>

        {/* User Info Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <IconSymbol name="person.fill" size={40} color="#D95B00" />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Test User</Text>
            <Text style={styles.userHandle}>@user1</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.cardGroup}>
            
            <TouchableOpacity style={styles.cardRow}>
              <View style={styles.cardIcon}>
                <IconSymbol name="leaf.fill" size={18} color="#10B981" />
              </View>
              <Text style={styles.cardText}>Dietary Restrictions</Text>
              <IconSymbol name="chevron.right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
            
            <View style={styles.cardDivider} />
            
            <TouchableOpacity style={styles.cardRow}>
              <View style={styles.cardIcon}>
                <IconSymbol name="mappin.and.ellipse" size={18} color="#3B82F6" />
              </View>
              <Text style={styles.cardText}>Location Settings</Text>
              <IconSymbol name="chevron.right" size={16} color="#9CA3AF" />
            </TouchableOpacity>

          </View>
        </View>

        {/* Activity Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activity</Text>
          <View style={styles.cardGroup}>
            
            <TouchableOpacity style={styles.cardRow}>
              <View style={[styles.cardIcon, { backgroundColor: '#FDE68A' }]}>
                <IconSymbol name="checkmark.seal.fill" size={18} color="#D97706" />
              </View>
              <Text style={styles.cardText}>Past Votes</Text>
              <Text style={styles.badge}>12</Text>
              <IconSymbol name="chevron.right" size={16} color="#9CA3AF" style={{ marginLeft: 8 }}/>
            </TouchableOpacity>
            
            <View style={styles.cardDivider} />
            
            <TouchableOpacity style={styles.cardRow}>
              <View style={[styles.cardIcon, { backgroundColor: '#FECACA' }]}>
                <IconSymbol name="safari.fill" size={18} color="#EF4444" />
              </View>
              <Text style={styles.cardText}>Saved Restaurants</Text>
              <IconSymbol name="chevron.right" size={16} color="#9CA3AF" />
            </TouchableOpacity>

          </View>
        </View>

        {/* Danger Zone */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <IconSymbol name="arrow.right" size={20} color="#EF4444" style={{ marginRight: 8, transform: [{rotate: '180deg'}] }} />
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F6F0',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100, // accommodate custom bottom tab bar
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F2937',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F3EFE9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#E5DFD3',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  userHandle: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  editButton: {
    backgroundColor: '#F3EFE9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#4B5563',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4B5563',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  cardGroup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  cardIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D1FAE5', // default light green
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#F3EFE9',
    marginLeft: 68,
  },
  badge: {
    backgroundColor: '#D95B00',
    color: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '700',
    overflow: 'hidden',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE2E2',
    padding: 16,
    borderRadius: 20,
    marginTop: 10,
  },
  logoutButtonText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: '700',
  }
});
