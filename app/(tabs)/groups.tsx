import { Image } from 'expo-image';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { StatusBar } from 'expo-status-bar';

export default function GroupsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <View style={styles.profileIcon}><Image source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} style={styles.profileImage} /></View>
            <Text style={styles.headerLogo}>WhatsForLunch</Text>
          </View>
          <TouchableOpacity>
            <IconSymbol name="bell.fill" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.superTitle}>YOUR CIRCLE</Text>
          <Text style={styles.mainTitle}>My Groups</Text>
        </View>

        {/* Start a New Tribe Card */}
        <TouchableOpacity style={styles.newTribeCard}>
          <View style={styles.newTribeIconBg}>
             <IconSymbol name="plus" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.newTribeTitle}>Start a New Tribe</Text>
          <Text style={styles.newTribeDesc}>Organize your next collective bite</Text>
        </TouchableOpacity>

        {/* Group Cards */}
        {/* Card 1 */}
        <View style={styles.groupCard}>
           <View style={styles.groupHeader}>
              <View style={[styles.groupIconBg, {backgroundColor: '#065F46'}]}>
                 <IconSymbol name="briefcase.fill" size={20} color="#FFFFFF" />
              </View>
              <View style={[styles.groupBadge, {backgroundColor: '#A7F3D0'}]}>
                 <Text style={[styles.groupBadgeText, {color: '#065F46'}]}>ACTIVE NOW</Text>
              </View>
           </View>
           <Text style={styles.groupTitle}>Work Lunch Crew</Text>
           <View style={styles.avatarsRow}>
              <Image source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} style={[styles.tinyAvatar, {zIndex: 4}]} />
              <Image source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} style={[styles.tinyAvatar, {marginLeft: -8, zIndex: 3}]} />
              <Image source={{uri: 'https://randomuser.me/api/portraits/women/68.jpg'}} style={[styles.tinyAvatar, {marginLeft: -8, zIndex: 2}]} />
              <View style={[styles.tinyAvatarCount, {marginLeft: -8, zIndex: 1}]}><Text style={styles.countText}>+5</Text></View>
           </View>
           <View style={styles.lastMessageCard}>
              <Text style={styles.msgSuper}>LAST MESSAGE</Text>
              <Text style={styles.msgBody}><Text style={{fontWeight: '700', color: '#1F2937'}}>Alex:</Text> &quot;Tacos at 12:30?&quot;</Text>
           </View>
        </View>

        {/* Card 2 */}
        <View style={styles.groupCard}>
           <View style={styles.groupHeader}>
              <View style={[styles.groupIconBg, {backgroundColor: '#B45309'}]}>
                 <IconSymbol name="sun.max.fill" size={20} color="#FFFFFF" />
              </View>
              <View style={[styles.groupBadge, {backgroundColor: '#EAE5DB'}]}>
                 <Text style={[styles.groupBadgeText, {color: '#4B5563'}]}>SAT & SUN</Text>
              </View>
           </View>
           <Text style={styles.groupTitle}>The Sunday Brunchers</Text>
           <View style={styles.avatarsRow}>
              <Image source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} style={[styles.tinyAvatar, {zIndex: 3}]} />
              <Image source={{uri: 'https://randomuser.me/api/portraits/men/22.jpg'}} style={[styles.tinyAvatar, {marginLeft: -8, zIndex: 2}]} />
              <View style={[styles.tinyAvatarCount, {marginLeft: -8, zIndex: 1, backgroundColor: '#EAE5DB'}]}><Text style={[styles.countText, {color: '#4B5563'}]}>+12</Text></View>
           </View>
           <View style={styles.lastMessageCard}>
              <Text style={styles.msgSuper}>LAST MESSAGE</Text>
              <Text style={styles.msgBody}><Text style={{fontWeight: '700', color: '#1F2937'}}>Sarah:</Text> &quot;Booked the table for 11am!&quot;</Text>
           </View>
        </View>

        {/* Card 3 */}
        <View style={styles.groupCard}>
           <View style={styles.groupHeader}>
              <View style={[styles.groupIconBg, {backgroundColor: '#065F46'}]}>
                 <IconSymbol name="chart.pie.fill" size={20} color="#FFFFFF" />
              </View>
           </View>
           <Text style={styles.groupTitle}>Pizza Explorers</Text>
           <View style={styles.avatarsRow}>
              <Image source={{uri: 'https://randomuser.me/api/portraits/men/46.jpg'}} style={[styles.tinyAvatar, {zIndex: 3}]} />
              <Image source={{uri: 'https://randomuser.me/api/portraits/women/68.jpg'}} style={[styles.tinyAvatar, {marginLeft: -8, zIndex: 2}]} />
              <View style={[styles.tinyAvatarCount, {marginLeft: -8, zIndex: 1, backgroundColor: '#EAE5DB'}]}><Text style={[styles.countText, {color: '#4B5563'}]}>+3</Text></View>
           </View>
           <View style={styles.lastMessageCard}>
              <Text style={styles.msgSuper}>LAST MESSAGE</Text>
              <Text style={styles.msgBody}><Text style={{fontWeight: '700', color: '#1F2937'}}>Mike:</Text> &quot;Who&apos;s up for sourdough crust?&quot;</Text>
           </View>
        </View>

        {/* Card 4 */}
        <View style={styles.groupCard}>
           <View style={styles.groupHeader}>
              <View style={[styles.groupIconBg, {backgroundColor: '#57423E'}]}>
                 <IconSymbol name="cup.and.saucer.fill" size={20} color="#FFFFFF" />
              </View>
           </View>
           <Text style={styles.groupTitle}>Night Owls Ramen</Text>
           <View style={styles.avatarsRow}>
              <Image source={{uri: 'https://randomuser.me/api/portraits/women/32.jpg'}} style={[styles.tinyAvatar, {zIndex: 2}]} />
              <View style={[styles.tinyAvatarCount, {marginLeft: -8, zIndex: 1, backgroundColor: '#EAE5DB'}]}><Text style={[styles.countText, {color: '#4B5563'}]}>+6</Text></View>
           </View>
           <View style={styles.lastMessageCard}>
              <Text style={styles.msgSuper}>LAST MESSAGE</Text>
              <Text style={styles.msgBody}><Text style={{fontWeight: '700', color: '#1F2937'}}>Jess:</Text> &quot;Is the place on 5th still open?&quot;</Text>
           </View>
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <IconSymbol name="plus" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF8F5',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  headerLogo: {
    fontSize: 18,
    fontWeight: '800',
    color: '#D95B00',
    letterSpacing: -0.5,
  },
  titleSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  superTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#B45309',
    letterSpacing: 1,
    marginBottom: 4,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F2937',
  },
  newTribeCard: {
    marginHorizontal: 20,
    backgroundColor: '#FDF6F0',
    borderRadius: 32,
    padding: 32,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FDBA74',
    borderStyle: 'dashed',
    marginBottom: 24,
  },
  newTribeIconBg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#D95B00',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  newTribeTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#9A3412',
    marginBottom: 6,
  },
  newTribeDesc: {
    fontSize: 12,
    color: '#78350F',
    opacity: 0.8,
  },
  groupCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 32,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  groupIconBg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  groupBadgeText: {
    fontSize: 10,
    fontWeight: '800',
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 12,
  },
  avatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  tinyAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  tinyAvatarCount: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EAE5DB',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4B5563',
  },
  lastMessageCard: {
    backgroundColor: '#FAF8F5',
    padding: 16,
    borderRadius: 20,
  },
  msgSuper: {
    fontSize: 10,
    fontWeight: '800',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  msgBody: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D95B00',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#D95B00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  }
});
