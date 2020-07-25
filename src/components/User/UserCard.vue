<template>
      <a :href="'users/' + user.id + '/profile'" class="card-user-link">
        <div class="card card-stabil">
          <div class="card-body">
            <div class="card-body__maininfo">
              <div class="card-body__maininfo__img">
                <img src="../../assets/profile_placeholder_cropped.jpg" class="rounded-circle user-profile__img" alt="Circle image">
              </div>
              <div class="card-body__maininfo__text">
                <h5 class="card-title card-title-stabil"><slot name="name"></slot></h5>
                <p class="card-text card-text-stabil">#<slot name="id"></slot></p>
                <p class="card-text"><small class="text-muted">{{user.victories ? user.victories : 'playing'}}</small></p>
              </div>
            </div>
          </div>
      </div>
      </a>
</template>

<script>
export default {
  props: {
    user: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.card-user-link {
  &:hover{
    text-decoration: none;
  }
}

.card-stabil {
  border-radius: 25px;
  margin-bottom: 30px;
  border: none;
  box-shadow: 0 0.2rem 0.5rem rgba(103,110,144,.2), 0 0 0 0.1rem rgba(103,110,144,.05);

  &:hover{
    img {
      transform: scale(1.2);
      transition: .35s cubic-bezier(.215,.61,.355,1);
    }
  }
}

.card-body__maininfo {
  display: flex;
  flex-direction: row;

  &__text{
    margin-top: 5px;
    margin-left: 20px;
    color: #ff284a;

    .card-title-stabil {
      font-size: 18px;
    }

    .card-text-stabil {
      font-size: 14px;
    }

  }
}

.card-title-stabil {
  margin-bottom: 0;
}

.user-profile{
  &__img {
    height: 60px;
    width: 60px;
    padding-top: 5px;
    padding-right: 5px;
    border: 1.5px solid #ff284a;
    transition: .35s cubic-bezier(.215,.61,.355,1);
  }
}

</style>
