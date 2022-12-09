<template>
  <div class="entity">
    <button class="entity_button physical_person"></button>
    <div class="entity_legend">
      <h3 class="entity_name"> {{ entityName }} </h3>
      <span class="entity_cpf"> {{ entityCPF }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Knot',
  props: {
    entityName: String
  }
}
</script>