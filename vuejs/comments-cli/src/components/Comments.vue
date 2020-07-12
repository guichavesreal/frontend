<template>
  <div class="container">
    <h1>Comentários</h1>
    <hr />
    <FormToDo v-on:add-todo="addComment"></FormToDo>
    <div class="list-group">
        <p v-if="comments.length <= 0">Não há nenhum comentário.</p>
      <div class="list-group-item" :key="index" v-for="(comment, index) in allComments">
        <span class="comment__author">
          Autor:
          <strong>{{ comment.name }}</strong>
        </span>
        <p>{{ comment.message }}</p>
        <div>
          <a href="#" title="Excluir" v-on:click.prevent="deleteComment(index)">Excluir</a>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import FormToDo from './Form-ToDo';
export default {
    components: {
        FormToDo
    },
  data() {
    return {
      comments: []
    };
  },
  methods: {
    addComment(comment){
        this.comments.push(comment);
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    }
  },
  computed: {
    allComments() {
      return this.comments.map(comment => ({
        ...comment,
        name: comment.name.trim() === "" ? "Anonimo" : comment.name
      }));
    }
  }
};
</script>





            
            