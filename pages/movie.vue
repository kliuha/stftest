<template>
    <el-button class="absolute top-0 left-0" type="primary" @click="$router.push({ path: 'result', query: { title: movieStore.selectedMovie.Title }})">
        <template #icon>
            <el-icon class="el-input__icon cursor-pointer">
                    <el-icon-back />
            </el-icon>
        </template>Previous Page</el-button>
    <div class="flex justify-center items-center w-full h-screen bg-teal-600">
        <el-card :body-style="{ padding: '0px' }">
        <img
          :src="movieStore.selectedMovie?.Poster"
          class="image"
        />
        <div class="flex flex-col justify-center items-center flex-wrap">
          <h2 class="font-bold">{{ `${movieStore.selectedMovie.Title} ${movieStore.selectedMovie.Year}` }}</h2>
          <div>
            <h3 class="time">Director: {{ movieStore.selectedMovie.Director }}</h3>
          </div>
        </div>
      </el-card>
    </div>
</template>

<script setup>
const movieStore = useMovieStore();
const route = useRoute();
onMounted(async () => { 
      await movieStore.getMovieById(route.query?.id); 
});

onBeforeRouteLeave((to, from, next) => {
  movieStore.$reset();
  next();
})
</script>