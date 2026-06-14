import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { projects } from '../data/portfolioData';
import { colors, gradients } from '../theme/colors';

function openLink(url) {
  if (url) Linking.openURL(url).catch(() => {});
}

function ProjectCard({ item }) {
  return (
    <LinearGradient
      colors={gradients.card}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>

      <View style={styles.tagRow}>
        {item.tech.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.githubButton]}
          activeOpacity={0.8}
          onPress={() => openLink(item.github)}
        >
          <Ionicons name="logo-github" size={16} color={colors.textPrimary} />
          <Text style={styles.buttonText}>Code</Text>
        </TouchableOpacity>

        {item.live && (
          <TouchableOpacity
            style={[styles.button, styles.liveButton]}
            activeOpacity={0.8}
            onPress={() => openLink(item.live)}
          >
            <Ionicons name="open-outline" size={16} color="#0F0F1A" />
            <Text style={[styles.buttonText, styles.liveButtonText]}>
              Live Demo
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
}

export default function ProjectsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.flex}>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProjectCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
            <Text style={styles.heading}>Projects</Text>
            <Text style={styles.subheading}>
              A selection of things I've built recently.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  listContent: { paddingHorizontal: 20, paddingBottom: 32 },
  header: { marginBottom: 8 },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  subheading: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 6,
    marginBottom: 12,
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    marginTop: 16,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textSecondary,
    marginTop: 8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 14,
    gap: 8,
  },
  tag: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.accentSecondary,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 16,
    gap: 6,
  },
  githubButton: {
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
  liveButton: { backgroundColor: colors.accentSecondary },
  buttonText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  liveButtonText: { color: '#0F0F1A' },
});
