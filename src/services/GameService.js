import Api from '@/services/Api'

export default {
  post (id) {
    return Api().post('games', id)
  },
  get () {
    return Api().get('games')
  },
  getGame (id) {
    return Api().get('games/' + id)
  }
}
