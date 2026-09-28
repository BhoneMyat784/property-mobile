import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return <SafeAreaView style={styles.safe}>
    <StatusBar style="light" />
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.badge}><Text style={styles.badgeText}>PROPERTY PORTAL</Text></View>
      <Text style={styles.title}>Your next move starts here.</Text>
      <Text style={styles.copy}>The Expo mobile shell is ready for the shared API. Mobile implementation begins after the web discovery and listing workflows stabilize.</Text>
      <View style={styles.card}><Text style={styles.cardEyebrow}>PHASE TWO</Text><Text style={styles.cardTitle}>Browse Yangon and Mandalay</Text><Text style={styles.cardCopy}>Search, save, and inquire about properties from the same versioned `/api/v1` contract used by the web app.</Text></View>
      <Text style={styles.footer}>Web first · Mobile next</Text>
    </ScrollView>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#173e35" },
  content: { flexGrow: 1, padding: 28, justifyContent: "center" },
  badge: { alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 7, backgroundColor: "#dcefe5", borderRadius: 8 },
  badgeText: { color: "#225b4b", fontSize: 10, fontWeight: "800", letterSpacing: 1 },
  title: { marginTop: 23, color: "#ffffff", fontSize: 44, lineHeight: 48, fontWeight: "800", letterSpacing: -1.8 },
  copy: { marginTop: 18, color: "#c4ddd2", fontSize: 16, lineHeight: 25 },
  card: { marginTop: 35, padding: 20, backgroundColor: "#235445", borderRadius: 18 },
  cardEyebrow: { color: "#a8d3bd", fontSize: 10, fontWeight: "800", letterSpacing: 1.1 },
  cardTitle: { marginTop: 11, color: "#ffffff", fontSize: 20, fontWeight: "700" },
  cardCopy: { marginTop: 8, color: "#c4ddd2", fontSize: 13, lineHeight: 20 },
  footer: { marginTop: 38, color: "#9fc5b5", fontSize: 12 },
});
