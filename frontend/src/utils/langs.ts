import store from '@/store';
import axios from './axios';

export async function loadLang(id: string): Promise<void> {
  if (store.state.loadedLangs[id]) {
    store.commit('setLang', id);
    return;
  }
  const { data } = await axios.get('lang/' + id);
  if (data && data.data) {
    store.commit('langLoaded', data);
  }
}

export async function setAutoLang(): Promise<void> {
  // eslint-disable-next-line
  let lang = navigator.language || (navigator as any).userLanguage;
  lang = lang.split('-')[0];
  await loadLang(lang);
}

// eslint-disable-next-line
function getNested(object: any, path: string): string | undefined {
  let data = object;
  if (!data) return undefined;
  path.split('.').forEach(x => {
    try {
      data = data[x];
    } catch (error) {
      return undefined;
    }
    if (!data) return undefined;
  });
  return data;
}

export function getText(
  key: string,
  fallback: string | null = null,
  langID: string = store.state.selectedLang
): string {
  key = key.toLowerCase();
  if (!store) return key;
  if (!store.state.loadedLangs[langID]) return fallback || 'lang not loaded';
  const message = getNested(store.state.loadedLangs[langID], key);
  if (message) return message;
  if (fallback) return fallback;
  return 'Lang: Key (' + key + ") doesn't exist.";
}
