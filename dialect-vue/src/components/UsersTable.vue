<template>
  <div>
    <b-table striped hover :items="users_data" :fields="fields"></b-table>
  </div>
</template>

<script>
import moment from 'moment';
import { usersRef } from '../firebase';

moment.locale('es-us');

export default {
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Nombre',
          sortable: false,
        },
        {
          key: 'date_of_interview',
          label: 'Fecha de Entrevista',
          sortable: true,
        },
        {
          key: 'experience_area',
          label: 'Área de Experiencia',
          sortable: false,
        },
        {
          key: 'experience_time',
          label: 'Tiempo de Experiencia',
          sortable: false,
        },
        {
          key: 'turn',
          label: 'Turno de Interés',
          sortable: false,
        },
        {
          key: 'email',
          label: 'Email',
          sortable: false,
        },
        {
          key: 'phone_number',
          label: 'Teléfono',
          sortable: false,
        },
        {
          key: 'age_range',
          label: 'Rango de Edad',
          sortable: false,
        },
        {
          key: 'gender',
          label: 'Género',
          sortable: false,
        },
        {
          key: 'status',
          label: 'Estatus',
          sortable: true,
        },
        {
          key: 'last_interaction',
          label: 'Última Interacción',
          sortable: true,
        },
      ],
    };
  },
  computed: {
    users_data() {
      return usersRef.once('value', (snapshot) => {
        const user = snapshot.val();
        console.log(user);
        const miMapa = new Map();
        miMapa.set('user', user);
        miMapa.set('date_of_interview', moment(user.date_of_interview).format('dddd, D MMMM YYYY - hh:mm a'));
        miMapa.set('last_interaction', moment(user.last_interaction).format('dddd, D MMMM YYYY'));
        return miMapa;
      });
    },
  },

};

</script>


<style scoped>  /* "scoped" attribute limit the CSS to this component only */

  .my-panel {
    margin:32px;
  }

</style>
