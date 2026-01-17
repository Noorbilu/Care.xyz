'use client';

import Cookies from 'js-cookie';

const AUTH_COOKIE = 'careio_auth';

const HARDCODED_EMAIL = 'user@care.io';
const HARDCODED_PASSWORD = 'Care123';

export function mockLogin(email, password) {
  if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
    Cookies.set(AUTH_COOKIE, JSON.stringify({ email }), { expires: 7 });
    return true;
  }
  return false;
}

export function logout() {
  Cookies.remove(AUTH_COOKIE);
}

export function getUserFromCookie() {
  try {
    const v = Cookies.get(AUTH_COOKIE);
    if (!v) return null;
    return JSON.parse(v);
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return !!getUserFromCookie();
}