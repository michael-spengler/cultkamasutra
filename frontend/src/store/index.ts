/* eslint-disable */
import axios from '@/utils/axios';
import { EventBus } from '@/utils/eventbus';
import { IPosition, ISKNotification, IUser } from '@/utils/interfaces';
import { getText } from '@/utils/langs';
import { User } from '@/utils/models';
import Vue from 'vue';
import { Route } from 'vue-router';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    user: {} as User,
    userValidated: false,
    darkmode: false,
    routeTransition: 'slide-left',
    positions: [] as IPosition[],
    notifications: [] as ISKNotification[],
    trending: [] as string[],
    langs: [],
    loadedLangs: {},
    selectedLang: null,
    searchOpenedFrom: null
  },
  getters: {
    valid: (state: any): boolean => {
      return state.userValidated;
    },
    user: (state: any): User => {
      return state.user;
    },
    darkmode: (state: any): boolean => {
      return state.darkmode;
    },
    routeTransition: (state: any): string => {
      return state.routeTransition;
    },
    position: (state: any) => (id: string): IPosition => {
      const firstRun = (state.positions as IPosition[]).filter(
        x => x._id === id
      );
      if (firstRun.length !== 0) return firstRun[0];
      return (state.positions as IPosition[]).filter(
        x => getText('position.' + id + '.title') === id
      )[0];
    },
    positions: (state: any): IPosition[] => {
      return state.positions;
    },
    positionExists: (state: any) => (id: string): boolean => {
      return (
        (state.positions as IPosition[]).filter(x => x._id === id).length === 1
      );
    },
    trending: (state: any): IPosition[] => {
      return state.trending
        .map((x: string) => state.positions.find((y: IPosition) => y._id === x))
        .filter((x: IPosition | null) => !!x);
    },
    positionById: (state: any) => (id: string): IPosition => {
      return state.positions.find((y: IPosition) => y._id === id);
    },
    langs: (state: any): [] => {
      return state.langs;
    },
    searchOpenedFrom: (state: any): Route | null => {
      return state.searchOpenedFrom;
    }
  },
  mutations: {
    signOut(state: any) {
      state.userValidated = false;
      state.user = undefined;
      state.telegramChat = null;
    },
    signIn(state: any, user: User) {
      state.user = user;
      state.userValidated = true;
    },
    darkmode(state: any, darkmode: boolean) {
      state.darkmode = darkmode;
    },
    routeTransition(state: any, trans: string) {
      state.routeTransition = trans;
    },
    searchOpenedFrom(state: any, from: Route) {
      state.searchOpenedFrom = from;
    },
    addPosition(state: any, position: IPosition) {
      let matched = false;
      state.positions = state.positions.map((x: IPosition) => {
        if (x._id === position._id) {
          matched = true;
          return position;
        }
        return x;
      });
      if (!matched) state.positions.push(position);
    },
    removePosition(state: any, id: string) {
      state.positions = state.positions.filter((x: IPosition) => x._id !== id);
    },
    updateLikedPositions(state: any, ids: string[]) {
      (state.user as IUser).likedPositions = ids;
    },
    updateCompletedPositions(state: any, ids: string[]) {
      (state.user as IUser).completedPositions = ids;
    },
    async addToLiked(state: any, id: string) {
      state.user.likedPositions.push(id);
      state.user.likedPositions = [...new Set(state.user.likedPositions)];
      await axios.post('position/like/' + id);
    },
    async removeFromLiked(state: any, id: string) {
      state.user.likedPositions = (state.user as IUser).likedPositions.filter(
        x => x !== id
      );
      await axios.delete('position/like/' + id);
    },
    async addToCompleted(state: any, id: string) {
      state.user.completedPositions.push(id);
      state.user.completedPositions = [
        ...new Set(state.user.completedPositions)
      ];
      await axios.post('position/complete/' + id);
    },
    async removeFromCompleted(state: any, id: string) {
      state.user.completedPositions = (state.user as IUser).completedPositions.filter(
        x => x !== id
      );
      await axios.delete('position/complete/' + id);
    },
    sendNotification(state: any, notification: ISKNotification) {
      state.notifications.push(notification);
      EventBus.$emit('message');
    },
    setTrending(state: any, ids: string) {
      state.trending = ids;
    },
    updateLangs(state: any, langs: any[]) {
      state.langs = langs;
    },
    addLang(state: any, lang: any) {
      state.langs.push(lang);
    },
    langLoaded(state: any, lang: any) {
      state.loadedLangs[lang._id] = lang.data;
      state.selectedLang = lang._id;
    },
    langLoadedNAS(state: any, lang: any) {
      state.loadedLangs[lang._id] = lang.data;
    },
    setLang(state: any, lang: string) {
      state.selectedLang = lang;
    }
  }
});

export default store;
