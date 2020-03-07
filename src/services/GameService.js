import Api from '@/services/Api'

export default {
  post (id, game) {
    return Api().patch(`matches/${id}/games`, game)
  },
  get () {
    return Api().get('games')
  }
}
