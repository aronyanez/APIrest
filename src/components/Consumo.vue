<template>
  <div class="hello">
    <h1>Consumo de apis con axios</h1>
    <pre>

    {{info}}
    </pre>
    <h1>Consumo de apis con FETCH</h1>
    <pre>

    {{infoF}}
    </pre>
  </div>
</template>

<script>
import { HTTP, BASE_URL } from "@/services/http.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    info: [],
    infoF: [],
    img: {
      titulo: "titulo de la imagen",
      base64: "qropewfiuhsgdfbds89wwh",
      likes: 400
    }
  },

  methods: {
    getImages(q) {
      HTTP.get(q)
        .then(response => {
          // handle success
          this.info = response;
        })
        .catch(error => {
          // handle error
          alert(error);
        })
        .finally();
    },
    postImage(img) {
      HTTP.post( img )
        .then(response => {
          // handle success
          if( response.code == 100){
            
          }
          this.info = response;
        })
        .catch(error => {
          // handle error
          alert(error);
        })
        .finally();
    },

    getImagesWithFetch() {
      fetch(BASE_URL)
        .then(function(response) {
          return response.json();
        })
        // .then(function(myJson) {
        //   this.infoF = myJson
        // });
        .then(myJson => {
          this.infoF = myJson;
        });
    }
  },

  created() {
    this.getImages("&q=yellow+flowers");
    this.getImagesWithFetch();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
