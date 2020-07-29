<template>
  <div class="clients container">
    <div>
      <ClientList />
    </div>
    <div>
      <NewClientsForm v-on:add-client="addClient"></NewClientsForm>
    </div>

   



  </div>
</template>

<script>
import ClientList from "@/components/ClientList";
import NewClientsForm from "@/components/NewClientsForm";

export default {
  name: "Clients",
  components: {
    ClientList,
    NewClientsForm
  }
};
</script>