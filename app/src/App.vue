<template>
   <!-- <manage-products></manage-products> -->
   <div>
     <header class="app-header">
      <app-nav></app-nav>
     </header>
     <main class="container">
       <router-view></router-view>
     </main>
    </div>
</template>

<script>
import AppNav from './components/AppNav'
export default {
	components: {
		AppNav
	}
}
// import ManageProducts from './components/ManageProducts'

// export default {
//   name: 'App',
//   components: {
//     ManageProducts
//   }
// }
</script>