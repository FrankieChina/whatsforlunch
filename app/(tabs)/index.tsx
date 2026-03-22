import { Image } from 'expo-image';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { StatusBar } from 'expo-status-bar';
import MapComponent from '@/components/MapComponent';

export default function HomeScreen() {
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
        
        {/* Top Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <IconSymbol name="fork.knife" size={20} color="#D95B00" />
            <Text style={styles.logoText}>WhatsForLunch</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <IconSymbol name="magnifyingglass" size={20} color="#4B5563" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <IconSymbol name="gear" size={20} color="#4B5563" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Title Section */}
        <View style={styles.section}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>POLL CONCLUDED</Text>
          </View>
          <Text style={styles.title}>The Winner is{'\n'}Mediterranean</Text>
          <Text style={styles.subtitle}>
            Based on 12 group votes, we&apos;ve found the best{'\n'}healthy options nearby in downtown.
          </Text>
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
          <TouchableOpacity style={[styles.filterTag, styles.filterTagActive]}>
            <IconSymbol name="leaf.fill" size={14} color="#FFFFFF" style={{marginRight: 6}} />
            <Text style={styles.filterTextActive}>Healthy Only</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTag}>
            <Text style={styles.filterText}>Under 500 Cal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTag}>
            <Text style={styles.filterText}>High Protein</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Map Placeholder */}
        <View style={styles.mapContainer}>
          <View style={styles.mapInner}>
            {location ? (
              <MapComponent location={location} />
            ) : (
                <View style={{flex: 1, backgroundColor: '#F3EFE9', justifyContent: 'center', alignItems: 'center'}}>
                 <Text>Loading Map...</Text>
               </View>
            )}

            {/* Top map badge */}
            <View style={styles.mapBadge}>
              <IconSymbol name="mappin.and.ellipse" size={12} color="#10B981" />
              <Text style={styles.mapBadgeText}>3 FOUND NEARBY</Text>
            </View>
          </View>
        </View>

        {/* Top Recommendations */}
        <View style={styles.recommendationsSection}>
          <View style={styles.sectionHeader}>
            <IconSymbol name="checkmark.seal.fill" size={20} color="#D95B00" />
            <Text style={styles.sectionTitle}>Top Recommendations</Text>
          </View>

          {/* Rec Card 1 */}
          <View style={styles.recCard}>
            <View style={styles.recHeaderRow}>
              <View>
                <Text style={styles.recTitle}>Olive & Vine</Text>
                <Text style={styles.recSubtitle}>0.4 miles away • Mediterranean</Text>
              </View>
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreText}>93 SCORE</Text>
              </View>
            </View>
            <View style={styles.tagsContainer}>
              <View style={styles.smallTag}><Text style={styles.smallTagText}>420 CAL</Text></View>
              <View style={styles.smallTag}><Text style={styles.smallTagText}>KETO</Text></View>
            </View>
          </View>

          {/* Rec Card 2 */}
          <View style={styles.recCard}>
            <View style={styles.recHeaderRow}>
              <View>
                <Text style={styles.recTitle}>Greek Garden</Text>
                <Text style={styles.recSubtitle}>0.8 miles away • Fresh Grill</Text>
              </View>
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreText}>88 SCORE</Text>
              </View>
            </View>
            <View style={styles.tagsContainer}>
              <View style={styles.smallTag}><Text style={styles.smallTagText}>510 CAL</Text></View>
              <View style={styles.smallTag}><Text style={styles.smallTagText}>VEGAN</Text></View>
            </View>
          </View>

          {/* Rec Card 3 */}
          <View style={styles.recCard}>
            <View style={styles.recHeaderRow}>
              <View>
                <Text style={styles.recTitle}>Hummus Hero</Text>
                <Text style={styles.recSubtitle}>1.2 miles away • Bowls & Wraps</Text>
              </View>
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreText}>84 SCORE</Text>
              </View>
            </View>
            <View style={styles.tagsContainer}>
              <View style={styles.smallTag}><Text style={styles.smallTagText}>490 CAL</Text></View>
            </View>
          </View>
        </View>

        {/* Action Card */}
        <View style={styles.actionCard}>
          <Text style={styles.actionSuper}>GROUP CONSENSUS</Text>
          <Text style={styles.actionTitle}>Ready to lock in Olive &{'\n'}Vine?</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Confirm Location</Text>
            <IconSymbol name="arrow.right" size={16} color="#D95B00" style={{marginLeft: 8}} />
          </TouchableOpacity>
        </View>

        {/* Image Section */}
        <Image
          style={styles.foodImage}
          source={{ uri: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80' }}
          contentFit="cover"
        />

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Why we chose{'\n'}Mediterranean</Text>
          <Text style={styles.infoBody}>
            Your group values low-sodium and high-protein options this week. Mediterranean diets are rich in healthy fats and lean proteins, fitting perfectly with everyone&apos;s goal of staying under 600 calories for dinner.
          </Text>
          
          <View style={styles.avatarsRow}>
            {/* Fake Avatars */}
            <View style={[styles.avatar, styles.av1]} />
            <View style={[styles.avatar, styles.av2, {marginLeft: -10}]} />
            <View style={[styles.avatar, styles.av3, {marginLeft: -10}]} />
            <View style={[styles.avatar, styles.avCount, {marginLeft: -10}]}>
              <Text style={styles.avCountText}>+9</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F6F0',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F6F0',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#D95B00',
    letterSpacing: -0.5,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  badge: {
    backgroundColor: '#E0F4EF',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeText: {
    color: '#10B981',
    fontWeight: '800',
    fontSize: 10,
    letterSpacing: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1F2937',
    lineHeight: 38,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 22,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 30,
    alignItems: 'center',
  },
  filterTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: '#F3EFE9',
    borderWidth: 1,
    borderColor: '#E5DFD3',
  },
  filterTagActive: {
    backgroundColor: '#D95B00',
    borderColor: '#D95B00',
  },
  filterText: {
    color: '#6B7280',
    fontWeight: '600',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  mapContainer: {
    marginHorizontal: 20,
    height: 240,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#E5DFD3',
    marginBottom: 30,
  },
  mapInner: {
    flex: 1,
    backgroundColor: '#F3EFE9', // Placeholder map color, could be an actual map view
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  mapBadgeText: {
    color: '#1F2937',
    fontWeight: '700',
    fontSize: 10,
    letterSpacing: 0.5,
  },
  centerPin: {
    backgroundColor: '#D95B00',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#D95B00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  recommendationsSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
    backgroundColor: '#F4EFE6', // Light beige bounding area like the mockup image
    marginHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    borderRadius: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
  },
  recCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  recHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  recTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  recSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  scoreBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  scoreText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  smallTag: {
    backgroundColor: '#E0F4EF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  smallTagText: {
    color: '#059669',
    fontWeight: '700',
    fontSize: 10,
  },
  actionCard: {
    backgroundColor: '#D95B00',
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 24,
    marginBottom: 30,
  },
  actionSuper: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 8,
    opacity: 0.9,
  },
  actionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 32,
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 30,
  },
  actionButtonText: {
    color: '#D95B00',
    fontWeight: '800',
    fontSize: 16,
  },
  foodImage: {
    height: 300,
    marginHorizontal: 20,
    borderRadius: 24,
    marginBottom: 30,
  },
  infoCard: {
    backgroundColor: '#E0F4EF',
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 24,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    lineHeight: 30,
    marginBottom: 16,
  },
  infoBody: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 24,
  },
  avatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E0F4EF',
  },
  av1: { backgroundColor: '#FCD34D' }, // Placeholder colors for avatars
  av2: { backgroundColor: '#FCA5A5' },
  av3: { backgroundColor: '#93C5FD' },
  avCount: {
    backgroundColor: '#D95B00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avCountText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  }
});
