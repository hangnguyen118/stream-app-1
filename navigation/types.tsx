import { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeStackParamList = {
    Home: undefined;
    WatchVideo: {
        videoUri: string;
        title: string;
        authorName: string;
        info: string;
        likes: number;
        views: number;
    }
};

export type BottomTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>;
    Chat: undefined;
    Camera: undefined;
    Profile: {
        userId: string;
        userEmail: string;
    };
};

export type RootStackParamList = {
    BottomTab: undefined;
    Login: undefined;
    Register: undefined;
};
export type HomeStackScreenProps<T extends keyof HomeStackParamList> = 
    NativeStackScreenProps<HomeStackParamList, T>;

export type RootStackScreenProps<T extends keyof BottomTabParamList> = 
    CompositeScreenProps<
        BottomTabScreenProps<BottomTabParamList, T>,
        HomeStackScreenProps<keyof HomeStackParamList>
    >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

