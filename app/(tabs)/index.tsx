import { Image } from 'expo-image';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapComponent from '@/components/MapComponent';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { StatusBar } from 'expo-status-bar';

export default function KitchenScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <View style={styles.profileIcon}>
               <IconSymbol name="person.fill" size={20} color="#D95B00" />
            </View>
            <Text style={styles.headerLogo}>FoodGroup</Text>
          </View>
          <TouchableOpacity>
            <IconSymbol name="bell.fill" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>The Kitchen</Text>
          <Text style={styles.subTitle}>Find your next favorite bite, curated for you.</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <IconSymbol name="magnifyingglass" size={20} color="#9CA3AF" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Look for nearby places..."
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Map Preview Component */}
        <View style={styles.mapCard}>
           {location ? (
             <View style={styles.mapInner}>
               <MapComponent location={location} />
             </View>
           ) : (
             <Image 
               source={{uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80'}} 
               style={styles.mapImage} 
               contentFit="cover" 
             />
           )}
           {/* Map UI overlays simulating the requested design */}
           <View style={styles.mapBadge}>
             <IconSymbol name="mappin.and.ellipse" size={12} color="#D95B00" />
             <Text style={styles.mapBadgeText}>RECS NEAR YOU</Text>
           </View>

           {/* Mock Pins */}
           <View style={[styles.mapPin, {top: 60, left: 120}]}>
             <View style={styles.pinIconContainer}><IconSymbol name="fork.knife" size={12} color="#FFFFFF" /></View>
             <View style={styles.pinTextContainer}><Text style={styles.pinText}>The Green Sprout</Text></View>
           </View>

           <View style={[styles.mapPin, {top: 110, right: 80}]}>
             <View style={[styles.pinIconContainer, {backgroundColor: '#059669'}]}><IconSymbol name="fork.knife" size={12} color="#FFFFFF" /></View>
             <View style={styles.pinTextContainer}><Text style={styles.pinText}>Leafy & Co.</Text></View>
           </View>
           
           <View style={styles.targetIcon}>
             <IconSymbol name="location.fill" size={16} color="#4B5563" />
           </View>
        </View>

        {/* Filter Chips */}
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
            <TouchableOpacity style={[styles.filterTag, styles.filterTagActive]}>
              <IconSymbol name="slider.horizontal.3" size={14} color="#FFFFFF" style={{marginRight: 6}} />
              <Text style={styles.filterTextActive}>All Tastes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTag}>
              <IconSymbol name="leaf.fill" size={14} color="#059669" style={{marginRight: 6}} />
              <Text style={styles.filterText}>Healthy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTag}>
              <IconSymbol name="leaf" size={14} color="#059669" style={{marginRight: 6}} />
              <Text style={styles.filterText}>Vegan</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Top Recommendations */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Recommendations</Text>
          <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
        </View>

        {/* Main Rec Card */}
        <View style={styles.heroCard}>
          <Image 
            source={{uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'}} 
            style={styles.heroBackground} 
            contentFit="cover" 
          />
          <View style={styles.heroOverlay}>
            <View style={styles.heroTop}>
              <Text style={styles.heroTitle}>The Green Sprout</Text>
              <View style={styles.editorBadge}>
                <Text style={styles.editorBadgeText}>EDITOR&apos;S CHOICE</Text>
              </View>
            </View>
            <View style={styles.heroBottom}>
              <Text style={styles.heroDesc}>Experience farm-to-table excellence with our signature...</Text>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book a Table</Text>
                <IconSymbol name="arrow.right" size={14} color="#FFFFFF" style={{marginLeft: 6}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Secondary Rec Cards */}
        <View style={styles.secondaryRecCard}>
          <View style={styles.recLeft}>
             <View style={styles.recIconPlaceholder}><IconSymbol name="newspaper.fill" size={24} color="#A7F3D0" /></View>
          </View>
          <View style={styles.recRight}>
            <View style={styles.recHeaderInfo}>
               <Text style={styles.recTitle}>Leafy & Co.</Text>
               <View style={styles.heartIcon}>
                   <IconSymbol name="heart.fill" size={16} color="#D95B00" />
               </View>
            </View>
            <View style={styles.whyBadge}><Text style={styles.whyText}>Why we chose this: Vegan community favorite</Text></View>
            <View style={styles.recMetrics}>
               <Text style={styles.ratingText}><IconSymbol name="star.fill" size={12} color="#374151" /> 4.9 (1.2k)</Text>
               <Text style={styles.distanceText}>0.8 miles</Text>
            </View>
          </View>
        </View>

        <View style={styles.secondaryRecCardLarge}>
          <View style={styles.recHeaderInfo}>
            <Text style={styles.recTitle}>Harvest Kitchen</Text>
          </View>
          <Text style={styles.recSubtitle}>Artisanal breads & organic soups.</Text>
          <View style={[styles.whyBadge, {backgroundColor: '#FDE68A'}]}><Text style={[styles.whyText, {color: '#B45309'}]}>Why we chose this: Great low-carb options</Text></View>
          
          <View style={styles.friendsRow}>
            <View style={styles.avatarRow}>
              <Image source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} style={[styles.microAvatar, {zIndex: 3}]} />
              <Image source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} style={[styles.microAvatar, {marginLeft: -10, zIndex: 2}]} />
              <View style={[styles.microAvatar, styles.microAvatarCount, {marginLeft: -10, zIndex: 1}]}><Text style={styles.microAvatarCountText}>+12</Text></View>
            </View>
            <Text style={styles.friendsText}>Friends have eaten here</Text>
          </View>
        </View>

        {/* Trending in your Group */}
        <View style={styles.trendingSection}>
          <View style={[styles.sectionHeaderNoMargin, {paddingHorizontal: 24}]}>
            <Text style={styles.sectionTitle}>Trending in your Group</Text>
          </View>
          <Text style={[styles.subTitle, {paddingHorizontal: 24}]}>What your friends are craving today</Text>
          
          <View style={styles.gridContainer}>
             <View style={styles.gridItem}>
               <View style={styles.gridImageContainer}>
                   <Image source={{uri: 'https://images.unsplash.com/photo-1495474472201-411bd19a3b68?auto=format&fit=crop&w=400&q=80'}} style={styles.gridImage} contentFit="cover" />
               </View>
               <Text style={styles.gridTitle}>Morning Fluff</Text>
               <Text style={styles.gridSubtitle}>4 active group chats</Text>
             </View>
             <View style={styles.gridItem}>
               <View style={styles.gridImageContainer}>
                   <Image source={{uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'}} style={styles.gridImage} contentFit="cover" />
               </View>
               <Text style={styles.gridTitle}>Oceanic Grill</Text>
               <Text style={styles.gridSubtitle}>2 planned meetups</Text>
             </View>
             <View style={styles.gridItem}>
               <View style={styles.gridImageContainer}>
                   <Image source={{uri: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80'}} style={styles.gridImage} contentFit="cover" />
               </View>
               <Text style={styles.gridTitle}>Dough Story</Text>
               <Text style={styles.gridSubtitle}>New in your area</Text>
             </View>
             <View style={styles.gridItem}>
               <View style={styles.gridImageContainer}>
                   <Image source={{uri: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80'}} style={styles.gridImage} contentFit="cover" />
               </View>
               <Text style={styles.gridTitle}>Olive & Feta</Text>
               <Text style={styles.gridSubtitle}>Popular this week</Text>
             </View>
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
    marginBottom: 24,
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
    backgroundColor: '#F3EFE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    fontSize: 18,
    fontWeight: '800',
    color: '#D95B00',
    letterSpacing: -0.5,
  },
  titleSection: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAE5DB',
    marginHorizontal: 20,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 25,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#1F2937',
  },
  mapCard: {
    marginHorizontal: 20,
    height: 200,
    borderRadius: 24,
    backgroundColor: '#F3EFE9',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 24,
  },
  mapInner: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  mapBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mapBadgeText: {
    color: '#1F2937',
    fontWeight: '700',
    fontSize: 10,
    letterSpacing: 0.5,
  },
  mapPin: {
    position: 'absolute',
    alignItems: 'center',
  },
  pinIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#D95B00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  pinTextContainer: {
    marginTop: 4,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  pinText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#1F2937',
  },
  targetIcon: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 32,
    alignItems: 'center',
  },
  filterTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EAE5DB',
  },
  filterTagActive: {
    backgroundColor: '#D95B00',
    borderColor: '#D95B00',
  },
  filterText: {
    color: '#1F2937',
    fontWeight: '600',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionHeaderNoMargin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1F2937',
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#D95B00',
  },
  heroCard: {
    marginHorizontal: 20,
    height: 220,
    borderRadius: 32,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
    backgroundColor: '#000',
  },
  heroBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    padding: 24,
    justifyContent: 'space-between',
  },
  heroTop: {
    alignItems: 'flex-start',
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  editorBadge: {
    backgroundColor: '#059669',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  editorBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  heroBottom: {
    gap: 12,
  },
  heroDesc: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
    lineHeight: 20,
  },
  bookButton: {
    backgroundColor: '#D95B00',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  secondaryRecCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 32,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  recLeft: {
    marginRight: 16,
  },
  recIconPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0F4EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recRight: {
    flex: 1,
  },
  recHeaderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  heartIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FAF8F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  recSubtitle: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 8,
  },
  whyBadge: {
    backgroundColor: '#E0F4EF',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 12,
  },
  whyText: {
    color: '#059669',
    fontSize: 10,
    fontWeight: '700',
  },
  recMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '600',
  },
  distanceText: {
    fontSize: 12,
    color: '#D95B00',
    fontWeight: '600',
  },
  secondaryRecCardLarge: {
    backgroundColor: '#EAE5DB',
    marginHorizontal: 20,
    borderRadius: 32,
    padding: 24,
    marginBottom: 32,
  },
  friendsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  microAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#EAE5DB',
  },
  microAvatarCount: {
    backgroundColor: '#D95B00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  microAvatarCountText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
  },
  friendsText: {
    fontSize: 12,
    color: '#6B7280',
  },
  trendingSection: {
    backgroundColor: '#FAF8F5',
    paddingTop: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    marginTop: 16,
  },
  gridItem: {
    width: '50%',
    padding: 8,
    marginBottom: 16,
  },
  gridImageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 32,
    overflow: 'hidden',
    marginBottom: 12,
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
    paddingHorizontal: 8,
  },
  gridSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    paddingHorizontal: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
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
