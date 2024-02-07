<template>
    <div class="flex justify-center items-center w-full h-screen bg-teal-600">
        <el-input
            class="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            v-model="movieQuery"
            style="width: 40%"
            placeholder="Please input movie name"
            size="large"
            @keydown.enter="$router.push({ path: 'result', query: { title: movieQuery }})"
        >
        <template #suffix>
            <el-icon class="el-input__icon cursor-pointer" @click="$router.push({ path: 'result', query: { title: movieQuery }})">
                <el-icon-search />
            </el-icon>
        </template>
        </el-input>
        <el-button type="primary" @click="$router.push('creation')">
        <template #icon>
            <el-icon class="el-input__icon cursor-pointer">
                    <el-icon-document-add/>
            </el-icon>
        </template>Add your own movie</el-button>
    </div>
</template>

<script setup>
const movieQuery = ref('')
</script>