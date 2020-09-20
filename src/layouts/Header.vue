<template>
    <div>
        <v-navigation-drawer app clipped>
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <router-link to="/">
                        <v-list-item-title>
                          Home
                        </v-list-item-title>
                      </router-link>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-cog</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <router-link to="/about">
                        <v-list-item-title>
                          About
                        </v-list-item-title>
                      </router-link>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-toolbar-title>Smart Search</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>
