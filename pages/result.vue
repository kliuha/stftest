<template>
    <el-button class="absolute top-0 left-0 z-10" type="primary" @click="$router.push('/')">
      <template #icon>
        <el-icon class="el-input__icon cursor-pointer">
                <el-icon-back />
        </el-icon>
    </template>Back to search</el-button>
    <div class="w-full h-screen bg-teal-600">
        <el-carousel class="py-24" arrow="always" trigger="click" :autoplay="false">
            <el-carousel-item v-for="movie in movieStore.searchedMovies" :key="movie.imdbID">
                <div class="flex justify-center text-2xl gap-2 cursor-pointer" @click="$router.push({ path: 'movie', query: { id: movie.imdbID }})">
                    <img :src="movie.Poster" :alt="movie.Title">
                    <el-descriptions title="Movie Info" :column="1">
                        <el-descriptions-item label="Title:">{{ movie.Title }}</el-descriptions-item>
                        <el-descriptions-item label="Year:">{{ movie.Year }}</el-descriptions-item>
                        <el-descriptions-item  label="Type:">{{ movie.Type }}</el-descriptions-item>
                    </el-descriptions>
                </div>
            </el-carousel-item>
        </el-carousel> 
    </div>
</template>

<script setup>
const movieStore = useMovieStore();
const route = useRoute();
onMounted(async () => { 
  await movieStore.getMovies(route.query?.title); 
});

onBeforeRouteLeave((to, from, next) => {
  movieStore.$reset();
  next();
})
</script>

<style scoped>
:deep(.el-carousel__item) h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

:deep(.el-carousel__item:nth-child(2n)) {
  background-color: #99a9bf;
}

:deep(.el-carousel__item:nth-child(2n + 1)) {
  background-color: #d3dce6;
}

:deep(.el-descriptions__body) {
    background-color: transparent;
}

:deep(.el-descriptions__body .el-descriptions__table .el-descriptions__cell) {
    font-weight: 700;
    font-size: 18px;
}
</style>