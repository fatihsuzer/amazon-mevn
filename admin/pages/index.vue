<template>
  <main>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">
            All Products
          </h1>
          <div class="a-spacing-large"></div>
          <!-- Button -->
          <a href="#" class="a-button-buy-again">Add a new product</a>
          <a href="#" class="a-button-history margin-right-10">Add a new category</a>
          <a href="#" class="a-button-history margin-right-10">Add a new owner</a>
          <!-- Listing Page -->
        </div>
      </div>
    </div>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div v-for="product in products" :key="product._id" class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
          <div class="history-box">
            <!-- product image -->
            <a href="#" class="a-link-normal">
              <img :src="product.photo" class="img-fluid"/>
            </a>
            <!-- product title -->
            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div class="p13n-sc-truncated">{{ product.title }}</div>
              </span>
            </div>
            <!-- product rating -->
            <div class="a-row">
              <a href="#">
                <i class = "fas fa-star"/>
                <i class = "fas fa-star"/>
                <i class = "fas fa-star"/>
                <i class = "fas fa-star"/>
                <i class = "fas fa-star"/>
              </a>
              <span class="a-letter-space"></span>
              <span class="a-color-tertiary a-size-small asin-reviews">(1732)</span>
            </div>
            <!-- product price -->
            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">$ {{ product.price }}</span>
              </span>
            </div>
            <!-- product buttons-->
            <div class="a-row">
              <a href="#" class="a-button-history margin-right-10"> Update</a>
              <a href="#" class="a-button-history margin-right-10"> Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/products");
      console.log(response);
      return {
        products: response.products,
      }
    } catch (err) {

    }
  }
}
</script>
