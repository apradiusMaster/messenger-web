<template>

      <b-container >
            <b-form class="m-3" action="" method="post"  enctype="multipart/form-data">
      <b-form-group label="Correo electronico:" description="Ingresa tu correo ">
        <input type="hidden" name="_token" v-model="csrfToken">
        <b-form-input
          v-model="user.email"
          type="email" 
          name="email"
          placeholder="Ingresar correo"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group  label="Nombre del usuario:" description="Ingresa tu nombre">

        <b-form-input
          v-model="user.name"
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group  label="Nueva contraseña (solo si desea modificar):" >
        <b-form-input
          placeholder="Ingresa tu nueva contraseña"
          name="password"
          type="password"
        ></b-form-input>
      </b-form-group>
    
       <b-form-group label="Imagen de perfil (sólo si desea midificar):">
          <b-img :src="image" rounded="circle" width="60" height="60" alt="Imagen actual" title="Imagen actual" class="m-1" />  
          <b-form-file  name="image" placeholder="Slecciona una nueva imagen" />
       </b-form-group>    
     
      <b-button type="submit" variant="primary">Guardar cambios</b-button>
      <!-- <b-button type="reset" variant="danger">Cancelar</b-button> -->
    </b-form>

      </b-container>
  

</template>

<script>
  export default {
    props: {
        user: Object,
        csrfToken: String
    },
    data() {
      return {

      }
    },
    computed: {
       image(){
         return `/users/${this.user.image}`;
       }
    }
  }
</script>