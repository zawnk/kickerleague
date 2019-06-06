import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landing/LandingPage'
import PageLogin from '@/components/login/PageLogin'
import LogoutPage from '@/components/logout/LogoutPage'
import LeagueHome from '@/components/league/LeagueHome'
import League from '@/components/league/League'
// import RulebookPage from '@/components/rulebook/RulebookPage'
import LeagueIndex from '@/components/league/LeagueIndex'
import LeagueCreate from '@/components/league/LeagueCreate'
import Signup from '@/components/signup/Signup'
import EnterResult from '@/components/result/EnterResult'
import NotFound from '@/components/globals/NotFound'
import ManageTeams from '@/components/teams/ManageTeams'
import store from '@/store'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
          path: '/',
          name: 'landing',
          component: LandingPage
        },
        {
          path: '/signup',
          name: 'signup',
          component: Signup
        },
        {
          path: '/index',
          name: 'leagueindex',
          component: LeagueIndex,
          beforeEnter: (to, from, next) => {
            if (store.state.auth.isUserLoggedIn) {
              next()
            } else {
              next('/')
            }
          }
        },
        {
          path: '/login',
          name: 'login',
          component: PageLogin
        },
        {
          path: '/logout',
          name: 'logout',
          component: LogoutPage
        },
        {
          path: '/league/create',
          name: 'leaguecreate',
          component: LeagueCreate,
          beforeEnter: (to, from, next) => {
            if (store.state.auth.isUserLoggedIn) {
              next()
            } else {
              next('/')
            }
          }
        },
        {
          path: '/league/:leagueId',
          component: League,
          beforeEnter: (to, from, next) => {
            if (store.state.auth.isUserLoggedIn) {
              next()
            } else {
              next('/')
            }
          },
          children: [
            {
              path: '',
              name: 'leaguehome',
              component: LeagueHome
            },
            {
              path: 'resultentry',
              name: 'resultentry',
              component: EnterResult
            },
            {
              path: 'teams',
              name: 'manageteams',
              component: ManageTeams
            },
          ]
        },
        {
          path: '/404',
          name: 'notfound',
          component: NotFound
        },
        {
          path: '*',
          redirect: '/404'
        }
    ]
})