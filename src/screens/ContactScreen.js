import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { contact } from '../data/portfolioData';
import { colors, gradients } from '../theme/colors';

function open(url) {
  if (url) Linking.openURL(url).catch(() => {});
}

export default function ContactScreen() {
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
      <Text style={styles.heading}>Get in Touch</Text>
      <Text style={styles.subheading}>
        Have a project in mind? Let's talk.
      </Text>

      {/* Email card */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => open(`mailto:${contact.email}`)}
      >
        <LinearGradient
          colors={gradients.accent}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.emailCard}
        >
          <View style={styles.emailIcon}>
            <Ionicons name="mail" size={22} color={colors.textPrimary} />
          </View>
          <View style={styles.emailTextWrap}>
            <Text style={styles.emailLabel}>Email me at</Text>
            <Text style={styles.emailValue}>{contact.email}</Text>
          </View>
          <Ionicons name="arrow-forward" size={20} color={colors.textPrimary} />
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.sectionLabel}>Social</Text>

      {contact.socials.map((social) => (
        <TouchableOpacity
          key={social.label}
          style={styles.socialRow}
          activeOpacity={0.85}
          onPress={() => open(social.url)}
        >
          <View style={styles.socialIcon}>
            <Ionicons name={social.icon} size={20} color={colors.accent} />
          </View>
          <View style={styles.socialTextWrap}>
            <Text style={styles.socialLabel}>{social.label}</Text>
            <Text style={styles.socialHandle}>{social.handle}</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={colors.textMuted}
          />
        </TouchableOpacity>
      ))}

      <Text style={styles.footer}>
        © {new Date().getFullYear()} {contact.name}
      </Text>
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
    marginBottom: 24,
  },
  emailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 18,
  },
  emailIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  emailTextWrap: { flex: 1 },
  emailLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '600',
  },
  emailValue: {
    fontSize: 15,
    color: colors.textPrimary,
    fontWeight: '700',
    marginTop: 2,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 28,
    marginBottom: 12,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 12,
  },
  socialIcon: {
    width: 42,
    height: 42,
    borderRadius: 11,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  socialTextWrap: { flex: 1 },
  socialLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  socialHandle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  footer: {
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: 13,
    marginTop: 36,
  },
});
