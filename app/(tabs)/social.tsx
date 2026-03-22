import { Image } from 'expo-image';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { StatusBar } from 'expo-status-bar';

export default function SocialScreen() {
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

        {/* Welcome Section */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Hey, Alex! 👋</Text>
          <Text style={styles.welcomeDesc}>You&apos;ve discovered 12 new spots this month. Your friends are waiting for your next recommendation.</Text>
          
          <View style={styles.badgesRow}>
            <View style={styles.badgeMint}>
              <IconSymbol name="rosette" size={14} color="#059669" style={{marginRight: 4}} />
              <Text style={styles.badgeMintText}>Foodie Elite</Text>
            </View>
            <View style={styles.badgeMint}>
              <IconSymbol name="bolt.fill" size={14} color="#059669" style={{marginRight: 4}} />
              <Text style={styles.badgeMintText}>14 Day Streak</Text>
            </View>
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>128</Text>
              <Text style={styles.statLabel}>FRIENDS</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>42</Text>
              <Text style={styles.statLabel}>REVIEWS</Text>
            </View>
          </View>
        </View>

        {/* Active Friends */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Friends</Text>
          <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.friendsScroll}>
           <View style={styles.friendItem}>
              <View style={[styles.avatarRing, {borderColor: '#D95B00'}]}><Image source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} style={styles.avatarImg} /></View>
              <Text style={styles.friendName}>Sarah</Text>
           </View>
           <View style={styles.friendItem}>
              <View style={[styles.avatarRing, {borderColor: '#059669'}]}><Image source={{uri: 'https://randomuser.me/api/portraits/men/22.jpg'}} style={styles.avatarImg} /></View>
              <Text style={styles.friendName}>Marcus</Text>
           </View>
           <View style={styles.friendItem}>
              <View style={[styles.avatarRing, {borderColor: '#D95B00'}]}><Image source={{uri: 'https://randomuser.me/api/portraits/women/68.jpg'}} style={styles.avatarImg} /></View>
              <Text style={styles.friendName}>Elena</Text>
           </View>
           <View style={styles.friendItem}>
              <View style={[styles.avatarRing, {borderColor: '#059669'}]}><Image source={{uri: 'https://randomuser.me/api/portraits/men/46.jpg'}} style={styles.avatarImg} /></View>
              <Text style={styles.friendName}>David</Text>
           </View>
        </ScrollView>

        {/* Friend Recommendations */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Friend Recommendations</Text>
        </View>

        <View style={styles.recCard}>
          <Image source={{uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'}} style={styles.recImage} contentFit="cover" />
          <View style={styles.recBody}>
             <View style={styles.recSuggestor}>
                <Image source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} style={styles.miniAvatar} />
                <Text style={styles.suggestorName}><Text style={{fontWeight: '700', color: '#D95B00'}}>Sarah</Text> suggests:</Text>
             </View>
             <Text style={styles.recTitle}>Poke Bowl at Fresh Grill</Text>
             <Text style={styles.recQuote}>&quot;The freshest salmon I&apos;ve had in the city! Must try with the spicy mayo.&quot;</Text>
             <TouchableOpacity style={styles.actionBtnOrange}>
                <Text style={styles.actionBtnText}>Check it out</Text>
                <IconSymbol name="arrow.right" size={14} color="#FFFFFF" style={{marginLeft: 6}} />
             </TouchableOpacity>
          </View>
        </View>

        <View style={styles.recCard}>
          <Image source={{uri: 'https://images.unsplash.com/photo-1513104890d38-7c0f4fff45f1?auto=format&fit=crop&w=800&q=80'}} style={styles.recImage} contentFit="cover" />
          <View style={styles.recBody}>
             <View style={styles.recSuggestor}>
                <Image source={{uri: 'https://randomuser.me/api/portraits/men/22.jpg'}} style={styles.miniAvatar} />
                <Text style={styles.suggestorName}><Text style={{fontWeight: '700', color: '#059669'}}>Marcus</Text> suggests:</Text>
             </View>
             <Text style={styles.recTitle}>Rustic Pizza Co.</Text>
             <Text style={styles.recQuote}>&quot;Perfect thin crust and amazing truffle oil. Great for group dinners.&quot;</Text>
             <TouchableOpacity style={styles.actionBtnGreen}>
                <Text style={styles.actionBtnText}>Reserve Table</Text>
                <IconSymbol name="calendar" size={14} color="#FFFFFF" style={{marginLeft: 6}} />
             </TouchableOpacity>
          </View>
        </View>

        {/* My Groups */}
        <View style={[styles.sectionHeader, {marginTop: 10}]}>
          <Text style={styles.sectionTitle}>My Groups</Text>
          <TouchableOpacity style={styles.addGroupBtn}>
            <IconSymbol name="plus" size={16} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.groupsContainer}>
           <TouchableOpacity style={styles.groupItem}>
              <Image source={{uri: 'https://images.unsplash.com/photo-1495474472201-411bd19a3b68?auto=format&fit=crop&w=200&q=80'}} style={styles.groupImg} />
              <View style={styles.groupInfo}>
                 <Text style={styles.groupTitle}>Coffee Enthusiasts</Text>
                 <Text style={styles.groupSub}>12 Members • 4 New Posts</Text>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#9CA3AF" />
           </TouchableOpacity>
           
           <TouchableOpacity style={styles.groupItem}>
              <Image source={{uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80'}} style={styles.groupImg} />
              <View style={styles.groupInfo}>
                 <Text style={styles.groupTitle}>Sunday Brunchers</Text>
                 <Text style={styles.groupSub}>8 Members • Active Now</Text>
              </View>
              <View style={styles.miniAvatarsRow}>
                 <Image source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} style={styles.tinyAv} />
                 <Image source={{uri: 'https://randomuser.me/api/portraits/men/22.jpg'}} style={[styles.tinyAv, {marginLeft: -8}]} />
              </View>
           </TouchableOpacity>

           <TouchableOpacity style={styles.groupItem}>
              <Image source={{uri: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=200&q=80'}} style={styles.groupImg} />
              <View style={styles.groupInfo}>
                 <Text style={styles.groupTitle}>Cheat Meal Friday</Text>
                 <Text style={styles.groupSub}>24 Members • Weekly Meetup</Text>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#9CA3AF" />
           </TouchableOpacity>
           
           <TouchableOpacity style={styles.browseGroupsBtn}>
              <Text style={styles.browseGroupsText}>BROWSE MORE GROUPS</Text>
           </TouchableOpacity>
        </View>

      </ScrollView>
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
  welcomeCard: {
    backgroundColor: '#F3EFE9',
    marginHorizontal: 20,
    borderRadius: 32,
    padding: 24,
    alignItems: 'center',
    marginBottom: 32,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 8,
  },
  welcomeDesc: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  badgesRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  badgeMint: {
    backgroundColor: '#A7F3D0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  badgeMintText: {
    color: '#065F46',
    fontWeight: '600',
    fontSize: 12,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statBox: {
    backgroundColor: '#EAE5DB',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    minWidth: 100,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#D95B00',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 0.5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D95B00',
  },
  friendsScroll: {
    paddingHorizontal: 20,
    gap: 20,
    marginBottom: 32,
  },
  friendItem: {
    alignItems: 'center',
  },
  avatarRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  avatarImg: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  friendName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937',
  },
  recCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 32,
    overflow: 'hidden',
    marginBottom: 24,
  },
  recImage: {
    width: '100%',
    height: 180,
  },
  recBody: {
    padding: 24,
  },
  recSuggestor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  miniAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  suggestorName: {
    fontSize: 12,
    color: '#4B5563',
  },
  recTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 8,
  },
  recQuote: {
    fontSize: 14,
    color: '#6B7280',
    fontStyle: 'italic',
    marginBottom: 16,
    lineHeight: 20,
  },
  actionBtnOrange: {
    backgroundColor: '#D95B00',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  actionBtnGreen: {
    backgroundColor: '#065F46',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  actionBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  addGroupBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EAE5DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupsContainer: {
    backgroundColor: '#FAF8F5',
  },
  groupItem: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  groupImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  groupInfo: {
    flex: 1,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  groupSub: {
    fontSize: 10,
    color: '#6B7280',
  },
  miniAvatarsRow: {
    flexDirection: 'row',
  },
  tinyAv: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  browseGroupsBtn: {
    marginHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  browseGroupsText: {
    color: '#065F46',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 0.5,
  }
});
