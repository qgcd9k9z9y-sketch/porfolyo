import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { skills } from '../data/portfolioData';
import { colors, gradients } from '../theme/colors';

function SkillBar({ name, level }) {
  return (
    <View style={styles.skillRow}>
      <View style={styles.skillLabelRow}>
        <Text style={styles.skillName}>{name}</Text>
        <Text style={styles.skillPercent}>{Math.round(level * 100)}%</Text>
      </View>
      <View style={styles.track}>
        <LinearGradient
          colors={gradients.accent}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.fill, { width: `${level * 100}%` }]}
        />
      </View>
    </View>
  );
}

function SkillCategory({ group }) {
  return (
    <View style={styles.categoryCard}>
      <View style={styles.categoryHeader}>
        <View style={styles.categoryIcon}>
          <Ionicons name={group.icon} size={18} color={colors.accent} />
        </View>
        <Text style={styles.categoryTitle}>{group.category}</Text>
      </View>
      {group.items.map((item) => (
        <SkillBar key={item.name} name={item.name} level={item.level} />
      ))}
    </View>
  );
}

export default function SkillsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 20 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Skills</Text>
      <Text style={styles.subheading}>
        Tools and technologies I work with.
      </Text>

      {skills.map((group) => (
        <SkillCategory key={group.category} group={group} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 20, paddingBottom: 32 },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  subheading: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 6,
  },
  categoryCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    marginTop: 18,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  skillRow: { marginBottom: 14 },
  skillLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  skillName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  skillPercent: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.accentSecondary,
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.surfaceAlt,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 4,
  },
});
