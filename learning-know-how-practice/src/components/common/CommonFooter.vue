<template>
  <footer class="footer">
    <div class="container">
      <p>© 2024 KHS. All rights reserved.</p>
      <p>
        Contact us at: <a href="mailto:info@myapp.com">goodsosbva@naver.com</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  // 필요한 경우 여기에 추가적인 스크립트를 작성할 수 있습니다.
};
</script>

<style scoped>
.footer {
  background-color: #005590;
  border-top: 1px solid #e7e7e7;
  text-align: center;
  padding: 20px 0;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.footer p {
  margin: 5px 0;
  color: #fff;
}

.footer a {
  color: #007bff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
