<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <!-- Navbar -->
    <nav :class="{ 'navbar-dark bg-dark': !darkMode, 'navbar-light bg-light': darkMode }" class="navbar">
      <div class="container d-flex justify-content-between align-items-center"> 
        <div class="d-flex flex-row align-items-center">
          <router-link to="/" class="navbar-brand"> Home</router-link>
          <router-link to="/about" class="nav-link ml-3 mr-3"> About</router-link> 
          <router-link to="/contact" class="nav-link ml-3 mr-3"> Contact</router-link> 

        </div>
        <div>
          <button @click="toggleMode" class="bi" :class="{ 'bi bi-moon-fill': !darkMode, 'bi bi-moon': darkMode }"></button>
        </div>
      </div>
    </nav>
    <!-- Router View -->  
    <router-view class="content"/>
    
    <!-- Footer -->
    <footer class="footer">
      <div class="social-icons">
        <a href="#" class="social-icon">
          <img src="@/assets/fb1.png" alt="Facebook" class="icon">
        </a>
        <a href="#" class="social-icon">
          <img src="@/assets/Instagram_icon.png" alt="Instagram" class="icon">
        </a>
        <a href="#" class="social-icon">
          <img src="@/assets/twitter1.png" alt="Twitter" class="icon">
        </a>
        <a href="#" class="social-icon">
          <img src="@/assets/github1.png" alt="GitHub" class="icon">
        </a>

      </div>
    </footer>
    <div>
          <p>Created Work by:Robertsanchez.com</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      darkMode: false 
    };
  },
  methods: {
    toggleMode() {
      this.darkMode = !this.darkMode; 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  padding: 15px 0; 
}

.navbar-brand,
.nav-link {
  font-weight: bold;
  transition: transform 0.3s ease, color 0.3s ease; 
}

.nav-link:hover {
  transform: scale(1.1); 
}

.router-link-exact-active {
  color: blue !important;
}

.dark-mode .navbar-brand,
.dark-mode .nav-link {
  color: #fff; 
}

.dark-mode .router-link-exact-active {
  color: blue !important;
}

.content {
  display: flex;
  justify-content: center;
}

/* Footer styles */
.footer {
  background-color: #f8f9fa;
  padding: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icon {
  margin: 0 10px;
}

.icon {
  width: 24px; 
  height: 24px; 
}

.dark-mode .social-icon {
  color: #fff; 
}

/* Responsive Styles */
@media (max-width: 768px) {
  .navbar {
    padding: 10px 0; 
  }

  .navbar-brand,
  .nav-link {
    font-size: 16px; 
  }
}
</style>






