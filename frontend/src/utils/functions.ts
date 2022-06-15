import router from '@/router';
import store from '@/store';
import { IUser } from './interfaces';

export function setDarkmode(): void {
  store.commit('darkmode', true);
}

export function setLightmode(): void {
  store.commit('darkmode', false);
}

export function copyToClipboard(text: string) {
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}

export function getDateDDMMYYYY(timestamp: number) {
  return new Date(timestamp)
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('.');
}

function isValid(): boolean {
  return store.getters.valid;
}

function getUser(): IUser {
  return store.getters.user;
}

function redirectToLogin(): void {
  if (router.currentRoute.name !== 'login') {
    router.push({ name: 'login' });
  }
}

export function hasLiked(id: string): boolean {
  if (!isValid()) return false;
  return getUser().likedPositions.includes(id);
}

export function hasCompleted(id: string): boolean {
  if (!isValid()) return false;
  return getUser().completedPositions.includes(id);
}

export function like(id: string): void {
  if (!isValid()) {
    redirectToLogin();
    return;
  }
  if (hasLiked(id)) {
    store.commit('removeFromLiked', id);
    return;
  }
  store.commit('addToLiked', id);
}

export function complete(id: string): void {
  if (!isValid()) {
    redirectToLogin();
    return;
  }
  if (hasCompleted(id)) {
    store.commit('removeFromCompleted', id);
    return;
  }
  store.commit('addToCompleted', id);
}

// function capitalize(str: string) {
//   return str
//     .split(' ')
//     .map(x => x.charAt(0).toUpperCase() + x.slice(1))
//     .join(' ')
//     .replaceAll(' Rectus ', '')
//     .replaceAll('Rectus ', '')
//     .replaceAll(' Brachii', '')
//     .replaceAll('Seitliche Bauchmuskualut', 'Seitliche Bauchmuskulatur');
// }

// function mapMuscles(str: string): string[] {
//   return [...new Set(str.split(',').map(x => x.replaceAll('M. ', '')))].filter(
//     x => x.length > 0
//   );
// }

// export function mapPositions(): IPosition[] {
//   return positions
//     .map(x => {
//       return {
//         description: x.description,
//         intimacy: x.intimacy,
//         level: x.man.level,
//         primaryMusclesMan: mapMuscles(x.man.primary || ''),
//         primaryMusclesWoman: mapMuscles(x.woman.primary || ''),
//         secondaryMusclesMan: mapMuscles(x.man.secondary || ''),
//         secondaryMusclesWoman: mapMuscles(x.man.secondary || ''),
//         thumbnail: 'Stellung' + x.nr + '@2x.png',
//         title: x.name
//       } as IPosition;
//     })
//     .map(x => {
//       return {
//         ...x,
//         primaryMusclesMan: x.primaryMusclesMan.map(x => capitalize(x)),
//         secondaryMusclesMan: x.secondaryMusclesMan.map(x => capitalize(x)),
//         primaryMusclesWoman: x.primaryMusclesWoman.map(x => capitalize(x)),
//         secondaryMusclesWoman: x.secondaryMusclesWoman.map(x => capitalize(x))
//       };
//     });
// }

// export function uniqueMuscles(): Array<string> {
//   const pos = mapPositions();
//   const muscl: string[] = [];
//   pos.forEach(x => {
//     muscl.push(...x.primaryMusclesMan);
//     muscl.push(...x.primaryMusclesWoman);
//     muscl.push(...x.secondaryMusclesMan);
//     muscl.push(...x.secondaryMusclesWoman);
//   });
//   return [...new Set(muscl)].sort((a, b) => a.localeCompare(b));
// }
