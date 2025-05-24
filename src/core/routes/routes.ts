import MainLayout from "../../components/MainLayout/MainLayout";
import Home from "../../mockups/Home/Home";
import InvoiceManagerDashboard from "../../mockups/InvoiceManagerDashboard/InvoiceManagerDashboard";
import LoginPage from "../../mockups/LoginPage/LoginPage";
import MusicStore from "../../mockups/MusicStore/MusicStore";
import OnboardingFlow from "../../mockups/OnboardingFlow/OnboardingFlow";
import ProfileCard from "../../mockups/ProfileCard/ProfileCard";
import ProfilesDashboard from "../../mockups/ProfilesDashboard/ProfilesDashboard";
import ProfileView from "../../mockups/ProfileView/ProfileView";
import Settings from "../../mockups/Settings/Settings";
import TaskBoards from "../../mockups/TaskBoards/TaskBoards";
import IRoute from "./IRoute";

const ROUTES: IRoute[] = [{
    path: '/',
    component: Home,
    exact: true
}, {
    path: '/login',
    component: MainLayout,
    props: {
        name: "Login",
    },
    children: [{
        path: '',        
        component: LoginPage,
    }]
}, {
    path: '/music-store',
    component: MainLayout,
    props: {
        name: 'Music Store'
    },
    children: [{
        path: '',
        component: MusicStore,
    }]
}, {
    path: '/profile-view',
    component: MainLayout,
    props: {
        name: 'Profile view'
    },
    children: [{
        path: '',        
        component: ProfileView,
    }]
}, {
    path: '/profile-card',
    component: MainLayout,
    props: {
        name: "Profile card"
    },
    children: [{
        path: '',
        component: ProfileCard,
    }]
}, {
    path: '/onboarding',
    component: MainLayout,
    props: {
        name: "Onboarding"
    },
    children: [{
        path: '',        
        component: OnboardingFlow,
    }]
}, {
    path: '/settings',
    component: MainLayout,
    props: {
        name: "Settings"
    },
    children: [{
        path: '',        
        component: Settings,
    }]
}, {
    path: '/invoices',
    component: MainLayout,
    props: {
        name: "Invoices"
    },
    children: [{
        path: '',
        component: InvoiceManagerDashboard,
    }]
}, {
    path: '/task-boards',
    name: "",
    component: MainLayout,
    exact: true,
    childern: [{
        path: '',
        name: "TaskBoards",
        component: TaskBoards,
        exact: true,
    }]
}, {
    path: '/profiles',
    component: MainLayout,
    props: {
        name: "Profiles"
    },
    children: [{
        path: '',
        component: ProfilesDashboard,
    }]
}]

export default ROUTES