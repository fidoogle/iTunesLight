<template>
  <div>
    <div v-if="getFavoritesByKind">
      <div v-for="(group,groupName) in getFavoritesByKind" :key="groupName" class="group">
        <v-divider></v-divider>
        <Group :group="group" :name="groupName"/>
      </div>
    </div>
    <div v-else>No results</div>
  </div>
</template>

<script>
import Group from "@/components/Group";
import { mapGetters } from "vuex";

export default {
  props: {
    groups: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  components: {
    Group
  },

  computed: {
    ...mapGetters("favorites", ["getFavoritesByKind"])
  }
};
</script>

<style>
.groups {
  text-aligned: left;
}
</style>