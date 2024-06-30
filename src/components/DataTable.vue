<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

let items = ref([]);

const search = ref("");
const headers = [
	{
		align: "start",
		key: "id",
		sortable: false,
		title: "ID",
	},
	{ key: "userId", title: "UserId" },
	{ key: "title", title: "Title" },
	{ key: "completed", title: "Done" },
];

onMounted(() => {
	axios.get("https://jsonplaceholder.typicode.com/todos").then((data) => {
		items.value = data.data;
	});
});
</script>

<template>
	<v-card title="Dane" flat>
		<template v-slot:text>
			<v-text-field
				v-model="search"
				label="Search"
				prepend-inner-icon="mdi-magnify"
				variant="outlined"
				hide-details
				single-line></v-text-field>
		</template>

		<v-data-table
			:headers="headers"
			:items="items"
			:search="search"></v-data-table>
	</v-card>
</template>
