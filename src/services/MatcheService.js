import Api from '@/services/Api'

export default {
  post (match) {
    return Api().post('matches', match)
  },
  get () {
    return Api().get('matches')
  }
}
