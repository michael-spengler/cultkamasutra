import router from '@/router';
import store from '@/store';
import { backendURL } from './constants';
import { IUser } from './interfaces';

export function getToken(): string | null {
  return localStorage.getItem('sportkamasutra-auth');
}

export function getUserFromJWT(): IUser {
  const base64Url = (getToken() || 'A.B.C').split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export function signIn(provider = 'google') {
  localStorage.removeItem('sportkamasutra-auth');
  window.location.replace(`${backendURL}auth/${provider}`);
}

export async function signOut() {
  localStorage.removeItem('sportkamasutra-auth');
  await router.push({ name: 'home' });
  store.commit('signOut');
}

export async function verfiyUser(): Promise<boolean> {
  const token: string | null = getToken();

  if (!token) return false;

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  };

  try {
    const res = await fetch(`${backendURL}user/verify`, options).then(res =>
      res.json()
    );

    if (res.statusCode && res.statusCode === 401) {
      localStorage.removeItem('sportkamasutra-auth');
      store.commit('signOut');
      return false;
    }
  } catch (error) {
    localStorage.removeItem('sportkamasutra-auth');
    store.commit('signOut');
    return false;
  }

  return true;
}

export function persistLogin(token: string): void {
  localStorage.setItem('sportkamasutra-auth', token);
}
