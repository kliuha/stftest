<template>
     <el-form
        ref="form"
        :model="movieForm"
        label-width="auto"
        label-position="left"
        size="large"
        class="w-full h-screen bg-teal-600 p-8"
    >
        <el-form-item label="Movie title" class="text-white">
            <el-input v-model="movieForm.name" />
        </el-form-item>
        <el-form-item label="Movie director" class="text-white">
            <el-input v-model="movieForm.director" />
        </el-form-item>
        <el-form-item label="Movie year" class="text-white">
            <el-input v-model="movieForm.year" />
        </el-form-item>
        <el-form-item label="Poster">
            <el-upload
                class="upload-demo"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
            >
                <el-icon class="el-icon--upload"><el-icon-upload-filled /></el-icon>
                <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                </div>
                </template>
            </el-upload>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="">Create</el-button>
            <el-button @click="$router.push('/')">Cancel</el-button>
        </el-form-item>
  </el-form>
</template>

<script setup>
const movieForm = ref({});
</script>