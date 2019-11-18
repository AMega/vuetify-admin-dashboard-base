<template>
  <div>
    <v-app-bar app color="indigo accent-3" clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="ml-0 pl-4">Application</v-toolbar-title>
      <v-spacer></v-spacer>

      <!--
      <v-badge color="green" overlap class="mr-5">
        <template v-slot:badge>
          <span v-if="messages > 0">{{ messages }}</span>
        </template>
        <v-icon large>mdi-alert-circle-outline</v-icon>
      </v-badge>
      -->

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon text class="mr-2" v-on="on">
            <v-icon large class>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-face-profile</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="title">Joe Blogs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/profile">
            <v-list-item-icon>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/settings">
            <v-list-item-icon>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/Logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped class="indigo accent-3" dark>
      <v-list nav>
        <v-list-item link to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link :to="item.linkto">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item link to="/settings">
          <v-list-item-icon>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-3">
          <v-btn large block>
            Logout
            <v-icon right dark>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppDrawer",
  data() {
    return {
      drawer: null,
      messages: 4,
      items: [
        { title: "Servers", icon: "mdi-desktop-classic", linkto: "/servers" },
        { title: "Websites", icon: "mdi-web", linkto: "/websites" },
        { title: "Alerts", icon: "mdi-bell-alert-outline", linkto: "/alerts" }
      ],
      right: null
    };
  }
};
</script>