import Api from '@/services/Api'

export default {
  post (name) {
    return Api().post('users', name)
  },
  get () {
    return Api().get('users')
  },
  getUser (id) {
    return Api().get('users/' + id)
  }
}
