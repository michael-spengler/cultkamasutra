import store from '@/store';

const mqDarkmode = window.matchMedia('(prefers-color-scheme: dark)');

function mediaListenerDarkmode(event: MediaQueryListEvent): void {
  const matches = event && event.matches;
  document.documentElement.classList[matches ? 'add' : 'remove']('dark');
  store.commit('darkmode', matches);
}

export function registerMediaQueries() {
  mqDarkmode.addListener(mediaListenerDarkmode);
  store.commit('darkmode', mqDarkmode.matches);
  document.documentElement.classList[mqDarkmode.matches ? 'add' : 'remove'](
    'dark'
  );
}

export function unregisterMediaQueries() {
  mqDarkmode.removeListener(mediaListenerDarkmode);
}
