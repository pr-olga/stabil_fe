import Api from '@/services/Api'

export default {
  patch (id, params) {
    return Api().patch(`players/${id}`, params)
  },
  getPlayer (id) {
    return Api().get('players/' + id)
  }
}
