import Api from '@/services/Api'

export default {
  patch (id, params) {
    return Api().patch(`players/${id}`, params)
  }
}
