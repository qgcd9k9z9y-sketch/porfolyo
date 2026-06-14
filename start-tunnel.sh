#!/usr/bin/env bash
# Start the Expo dev server over a tunnel, safe for WSL2.
#
# Why: this WSL2 setup inherits ANDROID_HOME + PATH entries pointing at the
# Windows Android SDK (/mnt/c/.../Sdk). Expo then tries to spawn `adb` from
# there, but the file is `adb.exe`, so the spawn fails with ENOENT and crashes
# `expo start`. Running on a physical phone via Expo Go does not need adb, so we
# unset ANDROID_HOME and strip the Windows SDK paths before launching.

set -e
cd "$(dirname "$0")"

CLEAN_PATH=$(echo "$PATH" | tr ':' '\n' | grep -v "Android/Sdk" | paste -sd ':')

exec env -u ANDROID_HOME -u ANDROID_SDK_ROOT PATH="$CLEAN_PATH" \
  npx expo start --tunnel "$@"
