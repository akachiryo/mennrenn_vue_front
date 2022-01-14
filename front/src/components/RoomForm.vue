<template>
  <v-card class="elevation-12">
        <v-card-text>
            <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
            >
                <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        label="Title"
                ></v-text-field>

                <v-textarea
                        v-model="content"
                        :rules="contentRules"
                        label="Content"
                ></v-textarea>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn dark color="indigo" @click="createRoom">ルーム作成</v-btn>
        </v-card-actions>
    </v-card>
</template>