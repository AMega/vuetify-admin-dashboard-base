<template>
  <div class="pa-10">
    <H2 class="mb-8">Dashboard</H2>
    <v-card>
      <v-card class="mx-auto pd-5">
        <v-toolbar flat>
          <v-toolbar-title class="grey--text">Dashboard</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-apps</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider></v-divider>

        <v-card-text style="height: 200px;"></v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Servers"
};
</script>