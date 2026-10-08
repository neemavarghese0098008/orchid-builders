const TOKEN_KEY = 'orchid_admin_token';
const USER_KEY = 'orchid_admin_user';

function read(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function clearSession() {
  try {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER_KEY);
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
}

export function getSession() {
  const token = read(TOKEN_KEY);
  const rawUser = read(USER_KEY);
  let user = null;

  if (rawUser) {
    try {
      const parsed = JSON.parse(rawUser);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && typeof parsed.email === 'string') {
        user = parsed;
      }
    } catch {
      // Stale or damaged persisted data should behave like a signed-out session.
    }
  }

  if (!token || !user) {
    if (token || rawUser) clearSession();
    return null;
  }

  return { token, user };
}

export function saveSession(token, user) {
  if (typeof token !== 'string' || !token || !user || typeof user.email !== 'string') return false;
  try {
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    return true;
  } catch {
    clearSession();
    return false;
  }
}

export function getToken() {
  return getSession()?.token || null;
}
