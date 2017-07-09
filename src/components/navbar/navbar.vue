<template>
  <div class="navbar">
    <li>
      <ul class="navbar-list">
        <li class="navbar-list__item" v-for="(item,index) of navList" :key="item.name">
          <a href="javascript:void(0)" @click="handleRouter(index,item.route)" :class="{active: isActive === index}">{{item.name}}</a>
        </li>
      </ul>
    </li>
    <li class="navbar-search">
      <form class="navbar-search__form">
        <input type="text" placeholder="搜索DigAg" class="navbar-search__input">
        <img src="./search-icon.svg" alt="搜索" class="navbar-search__icon">
      </form>
    </li>
    <li class="navbar-submit">
      <img src="./submit-icon.svg" alt="submit">
      <span>投稿</span>
    </li>
    <li class="navbar-auth">
      <span class="navbar-auth__login">登陆</span>
      <span class="navbar-auth__register">注册</span>
    </li>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data() {
    return {
      isActive: 0,
      navList: [
        { name: '首页', route: '/timeline' },
        { name: '专栏', route: '/column' },
        { name: '收藏集', route: '/collect' },
        { name: '发现', route: '/find' },
        { name: '标签', route: '/label' }
      ]
    }
  },
  methods: {
    handleRouter(i, route) {
      this.isActive = i
      this.$router.push(route)
    }
  }
}
</script>
<style lang="less" scoped>
.navbar {
  height: 60px;
  line-height: 60px;
  li {
    float: left;
    display: flex;
  }
  .navbar-list {
    list-style: none;
    .navbar-list__item {
      position: relative;
      float: left;
      padding: 0 16px;
      a {
        color: #71777c;
      }
      a::after {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      }
      a:hover {
        color: #007fff
      }
      .active {
        color: #007fff
      }
    }
  }
  .navbar-search {
    font-size: .8rem;
    .navbar-search__form {
      margin-left: 72px;
      margin-top: 12px;
      border: 1px solid hsla(0, 0%, 59%, .2);
      background-color: rgba(227, 231, 236, .2);
      display: flex;
    }
    .navbar-search__input {
      width: 12rem;
      border: none;
      padding: 8px 16px;
      box-shadow: none;
      outline: none;
      color: #aeb6c0;
      background: transparent;
    }
    .navbar-search__input:focus {
      background-color: #fff;
    }
    .navbar-search__icon {
      margin: 0 4px;
      cursor: pointer;
    }
  }
  .navbar-submit {
    color: #007fff;
    position: relative;
    padding: 0 24px;
    justify-content: center;
    cursor: pointer;
  }
  .navbar-submit::after {
    content: '|';
    position: absolute; // top: 20px;
    left: 100%;
    color: hsla(0, 0%, 59%, .2);
  }
  .navbar-auth {
    color: #007fff;
    padding: 0 24px;
    cursor: pointer;
    .navbar-auth__login::after {
      content: "\B7";
      margin: 0 .4rem;
    }
  }
}
</style>
